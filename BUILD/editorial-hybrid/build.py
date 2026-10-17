"""Build the WordPress package for the Editorial Hybrid homepage from prototype/editorial-hybrid.

Output: BUILD/editorial-hybrid/package/ (Elementor JSON per section, an mu-plugin, media, WP-CLI scripts).
Run from the repo root:  python3 BUILD/editorial-hybrid/build.py
Needs Node with Playwright (global install) for the header/footer snapshot.
"""
import functools
import http.server
import json
import re
import shutil
import subprocess
import threading
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PROTO = ROOT / "prototype" / "editorial-hybrid"
HERE = Path(__file__).resolve().parent
PKG = HERE / "package"
SCOPE_SITE, SCOPE_FRONT = "body.gd-site", ".gd-front"

# ---------- 1. header and footer, rendered in live mode ----------
def snapshot():
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    handler = functools.partial(Quiet, directory=str(PROTO))
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    out = HERE / "tools" / ".snapshot.json"
    pw = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True, check=True).stdout.strip()
    try:
        subprocess.run(["node", str(HERE / "tools" / "snapshot.cjs"), pw, f"http://127.0.0.1:{srv.server_address[1]}/index.html", str(out)], check=True)
    finally:
        srv.shutdown()
    data = json.loads(out.read_text(encoding="utf-8"))
    out.unlink()
    return data


def live(html):
    """Prototype markup -> live-site markup: same-site links, no new tabs, media-library image placeholders."""
    html = html.replace('href="https://grooming-dogs.com/', 'href="/')
    html = html.replace(' target="_blank" rel="noopener"', "")
    html = re.sub(r'src="assets/img/([\w-]+)\.jpg"', r'src="{{IMG:\1}}"', html)
    if "assets/" in html or "grooming-dogs.com" in html:
        raise SystemExit("unconverted prototype path: " + re.search(r".{40}(assets/|grooming-dogs\.com).{40}", html).group(0))
    return html


# ---------- 2. sprites ----------
def sprites():
    syms = []
    for f in sorted((PROTO / "assets" / "icons").glob("*.svg")):
        svg = f.read_text(encoding="utf-8")
        vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
        syms.append(f'<symbol id="ph-{f.stem}" viewBox="{vb}">' + re.sub(r"^<svg[^>]*>|</svg>\s*$", "", svg.strip()) + "</symbol>")
    brand = re.search(r'<symbol id="brand-comb".*?</symbol>', (PROTO / "tools" / "build_page.py").read_text(encoding="utf-8")).group(0)
    tools = re.sub(r"^<svg[^>]*>|</svg>\s*$", "", (PROTO / "assets" / "tools.svg").read_text(encoding="utf-8").strip())
    wrap = lambda s: '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + s + "</svg>"
    return wrap("<!-- Phosphor Icons, MIT licence -->" + "".join(syms) + brand), wrap(tools)


# ---------- 3. CSS: split into a site-wide shell and a front-page sheet, both scoped ----------
def strip_comments(css):
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)


def blocks(css):
    """Top-level (prelude, body) pairs; body is the text inside the braces."""
    out, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j == -1:
            break
        depth, k = 1, j + 1
        while depth:
            depth += {"{": 1, "}": -1}.get(css[k], 0)
            k += 1
        out.append((css[i:j].strip(), css[j + 1:k - 1].strip()))
        i = k
    return out


SHELL = re.compile(r"^(\.mast|\.nav|\.np-|\.wordmark|\.foot|\.dot)")


def is_shell(prelude):
    return all(SHELL.match(s.strip()) for s in prelude.split(","))


def scope(sel, scope_cls):
    sel = sel.strip()
    if sel in (":root", "html") or sel.startswith("html "):
        return sel
    if sel.startswith("body"):
        return "body" + scope_cls + sel[4:]
    first, _, rest = sel.partition(" ")
    if re.search(r"^(\.js|\.hero-go|:root)", first):   # classes that live on <html>
        return first + " " + scope_cls + (" " + rest if rest else "")
    return scope_cls + " " + sel


def emit(prelude, body, scope_cls):
    return ", ".join(scope(s, scope_cls) for s in prelude.split(",")) + " { " + body + " }"


def split_css():
    shell, front = [], []
    tokens = None
    for pre, body in blocks(strip_comments((PROTO / "styles.css").read_text(encoding="utf-8"))):
        if pre == ":root":
            tokens = ":root { " + body + " }"
        elif pre.startswith(":root[data-theme") or "prefers-color-scheme: dark" in pre:
            continue  # the live site is light-only, like the guide pages
        elif pre.startswith("@keyframes"):
            front.append(pre + " { " + body + " }")
            shell.append(pre + " { " + body + " }")
        elif pre.startswith("@media"):
            s_in, f_in = [], []
            for ip, ib in blocks(body):
                (s_in if is_shell(ip) else f_in).append((ip, ib))
            if s_in:
                shell.append(pre + " { " + " ".join(emit(p, b, SCOPE_SITE) for p, b in s_in) + " }")
            if f_in:
                front.append(pre + " { " + " ".join(emit(p, b, SCOPE_FRONT) for p, b in f_in) + " }")
        elif is_shell(pre):
            shell.append(emit(pre, body, SCOPE_SITE))
        else:
            front.append(emit(pre, body, SCOPE_FRONT))
    base = (HERE / "src" / "shell-base.css").read_text(encoding="utf-8")
    elementor = (HERE / "src" / "elementor.css").read_text(encoding="utf-8")
    head = "/* Generated by BUILD/editorial-hybrid/build.py from prototype/editorial-hybrid/styles.css. Do not edit by hand. */\n"
    return (head + tokens + "\n" + base + "\n" + "\n".join(shell) + "\n",
            head + elementor + "\n" + "\n".join(front) + "\n")


# ---------- 4. Elementor JSON ----------
_n = [0]
def eid():
    _n[0] += 1
    return f"gd{_n[0]:05x}"


def container(cls, html, anchor=""):
    settings = {"content_width": "full", "flex_direction": "column",
                "flex_gap": {"unit": "px", "size": 0, "column": "0", "row": "0"},
                "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": True},
                "css_classes": "gd-sec " + cls}
    if anchor:
        settings["_element_id"] = anchor
    return {"id": eid(), "elType": "container", "isInner": False, "settings": settings,
            "elements": [{"id": eid(), "elType": "widget", "widgetType": "html", "isInner": False, "settings": {"html": html}, "elements": []}]}


def template(title, el):
    return {"version": "0.4", "title": title, "type": "section", "content": [el], "page_settings": []}


def main():
    if PKG.exists():
        shutil.rmtree(PKG)
    for d in ["templates", "wp", "media", "mu-plugins/gd-editorial"]:
        (PKG / d).mkdir(parents=True)

    src = (PROTO / "index.src.html").read_text(encoding="utf-8")
    snap = snapshot()
    icon_sprite, tool_sprite = sprites()

    header = live(snap["header"]).replace('<a class="wordmark" href="#top">', '<a class="wordmark" href="/">')
    footer = live(snap["footer"])
    for ch in ["coat", "plate", "problems", "groomers"]:
        footer = footer.replace(f'href="#{ch}"', f'href="/#{ch}"')
    footer = footer.replace('href="#top"', 'href="#"')

    main_html = re.search(r'<main id="top">(.*?)</main>', src, re.S).group(1)
    part = lambda start, end: re.search(re.escape(start) + r".*?" + re.escape(end), main_html, re.S).group(0)
    sections = [
        ("chapters", "Chapter index", re.search(r'<div class="chapter-bar".*?</nav>', src, re.S).group(0), ""),
        ("hero", "Hero and search", part('<section class="ask hero"', "</section>"), ""),
        ("cites", "Sources band", part('<div class="cites-band">', "</div></div>"), ""),
        ("coat", "Coat chapter", part('<section class="ch ch-sage"', "</section>"), ""),
        ("plate", "Grooming plate", tool_sprite + part('<section class="ch ch-honey"', "</section>"), ""),
        ("problems", "Problems chapter", part('<section class="ch ch-slate"', "</section>"), ""),
        ("groomers", "Groomers chapter", part('<section class="ch ch-heather"', "</section>"), ""),
        ("trust", "Trust", part('<section class="trust"', "</section>"), ""),
        ("overlays", "Tool dialog and reading slip", re.search(r'<div class="tool-scrim".*?</aside>', src, re.S).group(0), ""),
    ]
    order = []
    for i, (key, title, html, anchor) in enumerate(sections, 1):
        name = f"home-{i:02d}-{key}.json"
        (PKG / "templates" / name).write_text(json.dumps(template("GD Editorial · " + title, container("gd-sec-" + key, live(html), anchor)), ensure_ascii=False, indent=1), encoding="utf-8")
        order.append(name)
    (PKG / "templates" / "header.json").write_text(json.dumps(template("GD Editorial · Header", container("gd-sec-header", icon_sprite + header)), ensure_ascii=False, indent=1), encoding="utf-8")
    (PKG / "templates" / "footer.json").write_text(json.dumps(template("GD Editorial · Footer", container("gd-sec-footer", footer)), ensure_ascii=False, indent=1), encoding="utf-8")
    (PKG / "templates" / "home-order.json").write_text(json.dumps(order, indent=1), encoding="utf-8")

    # assets
    shell_css, front_css = split_css()
    asset_dir = PKG / "mu-plugins" / "gd-editorial"
    (asset_dir / "shell.css").write_text(shell_css, encoding="utf-8")
    (asset_dir / "home.css").write_text(front_css, encoding="utf-8")
    for f in ["shell.js", "app.js", "content.js", "data.js"]:
        shutil.copy(PROTO / f, asset_dir / f)
    shutil.copy(HERE / "src" / "gd-editorial.php", PKG / "mu-plugins" / "gd-editorial.php")

    # media: the resized photos plus the comb site icon
    manifest = []
    for p in json.loads((PROTO / "assets" / "photos.json").read_text(encoding="utf-8")):
        shutil.copy(PROTO / "assets" / "img" / (p["key"] + ".jpg"), PKG / "media" / (p["key"] + ".jpg"))
        manifest.append({k: p[k] for k in ["key", "alt", "credit", "source", "license"]} | {"file": p["key"] + ".jpg"})
    (PKG / "media" / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
    shutil.copy(PROTO / "assets" / "favicon" / "web-app-manifest-512x512.png", PKG / "media" / "site-icon-512.png")

    # WP-CLI scripts and docs
    for f in (HERE / "src" / "wp").glob("*.php"):
        shutil.copy(f, PKG / "wp" / f.name)
    for f in ["install.sh", "rollback.sh", "README.md"]:
        shutil.copy(HERE / "src" / f, PKG / f)
    for f in ["install.sh", "rollback.sh"]:
        (PKG / f).chmod(0o755)
    print("package:", PKG.relative_to(ROOT), "-", len(order), "home sections, header, footer,", len(manifest), "photos")


if __name__ == "__main__":
    main()
