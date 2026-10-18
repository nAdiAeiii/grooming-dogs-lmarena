"""Static preview of the 22 launch pages, rendered from the Elementor data in BUILD/out/.

Needs no WordPress and no connection to grooming-dogs.com or Hostinger. It applies the
same site.css, gd-guide and gd-home assets the live site loads, plus a small emulation of
Elementor's container layout and the kit 15 (DS-OD-06) globals.

Limits, by design:
- Images are not fetched (they live on the live site); each one is drawn as a labelled
  placeholder at the right aspect ratio, carrying its real alt text and credit.
- The contact form (WPForms) is a static mock-up; it sends nothing.
- Rank Math breadcrumbs are rebuilt from the manifest.

Proposed design changes live in preview/proposed.css and preview/proposed.js and can be
switched on and off from the preview toolbar, so "current" and "proposed" can be compared.

Usage: python3 preview/build_preview.py   ->  preview/dist/
"""
import html
import json
import os
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / "BUILD"
HERE = ROOT / "preview"
DIST = HERE / "dist"
SITE = DIST / "site"

KIT = json.loads((BUILD / "kit-settings.json").read_text(encoding="utf-8"))
MANIFEST = json.loads((BUILD / "out" / "manifest.json").read_text(encoding="utf-8"))
IMAGES = json.loads((BUILD / "images.json").read_text(encoding="utf-8"))
IMG_BY_URL = {v["url"]: v for v in IMAGES.values()}

# Menu "Primary" as it is live after the 2026-10-06 change ("Start here" removed).
MENU = [
    ("Grooming tasks", None, [
        ("Bathing", "/bathing-your-dog/"), ("Brushing", "/brushing-your-dog/"),
        ("Haircuts & trimming", "/dog-haircuts-and-trimming/"), ("Nails", "/trimming-dog-nails/"),
        ("Ears", "/cleaning-dog-ears/"), ("Teeth", "/brushing-dog-teeth/"),
    ]),
    ("Your dog", None, [
        ("Puppies", "/puppy-grooming/"), ("Senior dogs", "/senior-dog-grooming/"),
        ("Anxious dogs", "/grooming-an-anxious-dog/"),
    ]),
    ("Problems", "/dog-grooming-problems/", []),
    ("Tools & groomers", None, [
        ("Grooming tools", "/dog-grooming-tools/"), ("Choosing a groomer", "/choosing-a-dog-groomer/"),
        ("Grooming cost", "/dog-grooming-cost/"),
    ]),
]

SLUG_TO_FILE = {("/" + m["slug"] + "/" if m["slug"] else "/"): ("index.html" if not m["slug"] else m["slug"] + ".html")
                for m in MANIFEST}


def local_href(href):
    """Rewrite a site-relative URL to the preview file that holds that page."""
    m = re.match(r"^(?:https://grooming-dogs\.com)?(/[a-z0-9/-]*)(#[^\"']*)?$", href)
    if not m:
        return href
    path, frag = m.group(1), m.group(2) or ""
    if not path.endswith("/"):
        path += "/"
    return (SLUG_TO_FILE[path] + frag) if path in SLUG_TO_FILE else href


def rewrite_links(markup):
    return re.sub(r'href="([^"]+)"', lambda m: 'href="%s"' % local_href(m.group(1)), markup)


# ---------------------------------------------------------------- image placeholders

def placeholder_svg(label, w=1200, h=800):
    """A neutral, clearly-a-placeholder image as a data: URI (no network)."""
    text = html.escape(label[:70])
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">'
           f'<rect width="{w}" height="{h}" fill="#F7EFE4"/>'
           f'<path d="M0 {h} L{w} 0" stroke="#E6D8C8" stroke-width="3"/>'
           f'<path d="M0 0 L{w} {h}" stroke="#E6D8C8" stroke-width="3"/>'
           f'<rect x="{w*0.08:.0f}" y="{h*0.40:.0f}" width="{w*0.84:.0f}" height="{h*0.2:.0f}" rx="12" fill="#FFFCF7"/>'
           f'<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" '
           f'font-family="Source Sans 3, sans-serif" font-size="{max(18, w//34)}" fill="#6B5E55">'
           f'Photo placeholder: {text}</text></svg>')
    from urllib.parse import quote
    return "data:image/svg+xml;charset=utf-8," + quote(svg)


# ---------------------------------------------------------------- kit globals -> CSS

def size(v, default=None):
    if not isinstance(v, dict) or v.get("size") in (None, ""):
        return default
    return f'{v["size"]}{v.get("unit", "px")}'


def kit_css():
    out = [":root{"]
    for c in KIT.get("system_colors", []) + KIT.get("custom_colors", []):
        out.append(f'--e-global-color-{c["_id"]}:{c["color"]};')
    out.append("}")
    typos = {t["_id"]: t for t in KIT.get("system_typography", []) + KIT.get("custom_typography", [])}
    for tid, t in typos.items():
        fam = t.get("typography_font_family", "Literata")
        stack = f'"{fam}", ' + ('Georgia, "Times New Roman", serif' if fam == "Literata"
                               else '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif')
        rule = [f"font-family:{stack}"]
        if t.get("typography_font_weight"):
            rule.append(f'font-weight:{t["typography_font_weight"]}')
        if size(t.get("typography_font_size")):
            rule.append(f'font-size:{size(t["typography_font_size"])}')
        lh = t.get("typography_line_height")
        if isinstance(lh, dict) and lh.get("size") not in (None, ""):
            rule.append(f'line-height:{lh["size"]}{"" if lh.get("unit") == "em" else lh.get("unit", "")}')
        out.append(f'.gt-{tid}{{{";".join(rule)}}}')
        if size(t.get("typography_font_size_tablet")):
            out.append(f'@media(max-width:1024px){{.gt-{tid}{{font-size:{size(t["typography_font_size_tablet"])}}}}}')
        if size(t.get("typography_font_size_mobile")):
            out.append(f'@media(max-width:767px){{.gt-{tid}{{font-size:{size(t["typography_font_size_mobile"])}}}}}')
    return "\n".join(out)


# ---------------------------------------------------------------- Elementor emulation

def gref(settings, key, kind):
    g = settings.get("__globals__", {}).get(key, "")
    m = re.match(rf"globals/{kind}\?id=(\w+)", g or "")
    return m.group(1) if m else None


def dims(d):
    if not isinstance(d, dict) or all(d.get(k) in (None, "") for k in ("top", "right", "bottom", "left")):
        return None
    u = d.get("unit", "px")
    return " ".join(f'{d.get(k) or 0}{u}' for k in ("top", "right", "bottom", "left"))


class Page:
    def __init__(self, prefix="pv"):
        self.css = []
        self.n = 0
        self.prefix = prefix

    def uid(self):
        self.n += 1
        return f"{self.prefix}{self.n}"

    # containers ---------------------------------------------------------
    def container(self, e, depth):
        s = e.get("settings", {})
        cid = self.uid()
        boxed = s.get("content_width", "boxed" if depth == 0 else "full") == "boxed"
        classes = ["e-con", "e-flex", "e-con-boxed" if boxed else "e-con-full", f"elementor-element-{cid}"]
        if depth > 0:
            classes.append("e-child")
        if s.get("css_classes"):
            classes.append(s["css_classes"])
        rule, rule_t, rule_m = [], [], []
        fd = s.get("flex_direction") or "column"
        rule.append(f"--flex-direction:{fd}")
        if s.get("flex_direction_mobile"):
            rule_m.append(f'--flex-direction:{s["flex_direction_mobile"]}')
        elif fd == "row":
            rule_m.append("--flex-direction:column")
        if s.get("flex_wrap"):
            rule.append(f'--flex-wrap:{s["flex_wrap"]}')
        if s.get("justify_content"):
            rule.append(f'--justify-content:{s["justify_content"]}')
        if s.get("align_items"):
            rule.append(f'--align-items:{s["align_items"]}')
        gap = s.get("flex_gap")
        if isinstance(gap, dict) and gap.get("size") not in (None, ""):
            rule.append(f'--gap:{gap["size"]}{gap.get("unit", "px")}')
        p = dims(s.get("padding"))
        if p:
            rule.append(f"--padding:{p}")
        pm = dims(s.get("padding_mobile"))
        if pm:
            rule_m.append(f"--padding:{pm}")
        bw = s.get("boxed_width")
        if boxed and isinstance(bw, dict) and bw.get("size"):
            rule.append(f'--content-width:{bw["size"]}{bw.get("unit", "px")}')
        w = s.get("width")
        if isinstance(w, dict) and w.get("size"):
            rule.append(f'--width:{w["size"]}{w.get("unit", "%")}')
        wm = s.get("width_mobile")
        if isinstance(wm, dict) and wm.get("size"):
            rule_m.append(f'--width:{wm["size"]}{wm.get("unit", "%")}')
        bg = gref(s, "background_color", "colors")
        if bg:
            rule.append(f"background-color:var(--e-global-color-{bg})")
        elif s.get("background_color"):
            rule.append(f'background-color:{s["background_color"]}')
        if s.get("border_border"):
            bc = gref(s, "border_color", "colors")
            color = f"var(--e-global-color-{bc})" if bc else s.get("border_color", "#E6D8C8")
            bwd = dims(s.get("border_width")) or "1px 1px 1px 1px"
            rule.append(f'border-style:{s["border_border"]};border-width:{bwd};border-color:{color}')
        br = dims(s.get("border_radius"))
        if br:
            rule.append(f"border-radius:{br}")
        sel = f".elementor-element-{cid}"
        self.css.append(f'{sel}{{{";".join(rule)}}}')
        if rule_t:
            self.css.append(f'@media(max-width:1024px){{{sel}{{{";".join(rule_t)}}}}}')
        if rule_m:
            self.css.append(f'@media(max-width:767px){{{sel}{{{";".join(rule_m)}}}}}')
        kids = "".join(self.element(k, depth + 1) for k in e.get("elements", []))
        if boxed:
            kids = f'<div class="e-con-inner">{kids}</div>'
        idattr = f' id="{s["_element_id"]}"' if s.get("_element_id") else ""
        return f'<div class="{" ".join(classes)}"{idattr}>{kids}</div>'

    # widgets ------------------------------------------------------------
    def widget(self, e):
        s = e.get("settings", {})
        t = e.get("widgetType")
        cls = [f"elementor-element", f"elementor-widget", f"elementor-widget-{t}"]
        if s.get("_css_classes"):
            cls.append(s["_css_classes"])
        idattr = f' id="{s["_element_id"]}"' if s.get("_element_id") else ""
        body = ""
        if t == "heading":
            tag = s.get("header_size") or "h2"
            gt = {"h1": "primary", "h2": "gdh2", "h3": "gdh3"}.get(tag, "gdh3")
            body = f'<{tag} class="elementor-heading-title gt-{gt}">{rewrite_links(s.get("title", ""))}</{tag}>'
        elif t == "text-editor":
            col = gref(s, "text_color", "colors")
            typ = gref(s, "typography_typography", "typography") or "text"
            style = f' style="color:var(--e-global-color-{col})"' if col else ""
            body = f'<div class="elementor-widget-container gt-{typ}"{style}>{rewrite_links(s.get("editor", ""))}</div>'
        elif t == "html":
            body = rewrite_links(self.home_images(s.get("html", "")))
        elif t == "button":
            link = s.get("link", {}).get("url", "#")
            body = (f'<a class="elementor-button elementor-button-link" href="{local_href(link)}">'
                    f'<span class="elementor-button-text">{html.escape(s.get("text", ""))}</span></a>')
        elif t == "image":
            body = self.image(s)
        elif t == "accordion":
            body = self.accordion(s)
        elif t == "shortcode":
            body = self.shortcode(s.get("shortcode", ""))
        else:
            body = f"<!-- unsupported widget {t} -->"
        return f'<div class="{" ".join(cls)}"{idattr}>{body}</div>'

    def element(self, e, depth):
        return self.container(e, depth) if e.get("elType") == "container" else self.widget(e)

    def image(self, s):
        im = s.get("image", {})
        meta = IMG_BY_URL.get(im.get("url"), {})
        alt = im.get("alt") or meta.get("alt", "")
        src = placeholder_svg(alt or "image")
        cap = s.get("caption", "")
        figcap = f'<figcaption class="widget-image-caption gt-accent">{html.escape(cap)}</figcaption>' if cap else ""
        return (f'<figure class="wp-caption"><img class="pv-ph" src="{src}" alt="{html.escape(alt)}" '
                f'width="1200" height="800" loading="lazy">{figcap}</figure>')

    def accordion(self, s):
        out = ['<div class="elementor-accordion" role="tablist">']
        for i, tab in enumerate(s.get("tabs", [])):
            tid = self.uid()
            out.append(
                '<div class="elementor-accordion-item">'
                f'<div id="elementor-tab-title-{tid}" class="elementor-tab-title" role="button" tabindex="0" '
                f'aria-expanded="false" aria-controls="elementor-tab-content-{tid}">'
                '<span class="elementor-accordion-icon" aria-hidden="true">+</span>'
                f'<a class="elementor-accordion-title" tabindex="-1">{tab.get("tab_title", "")}</a></div>'
                f'<div id="elementor-tab-content-{tid}" class="elementor-tab-content elementor-clearfix" '
                f'role="region" aria-labelledby="elementor-tab-title-{tid}" hidden>{rewrite_links(tab.get("tab_content", ""))}</div>'
                '</div>')
        out.append("</div>")
        return "".join(out)

    def shortcode(self, code):
        if "rank_math_breadcrumb" in code:
            crumb = html.escape(self.crumb or "")
            return (f'<nav aria-label="breadcrumbs" class="rank-math-breadcrumb"><p>'
                    f'<a href="index.html">Home</a><span class="separator"> › </span>'
                    f'<span class="last">{crumb}</span></p></nav>')
        if "FORM" in code:
            return FORM_MOCK
        return f"<!-- shortcode {html.escape(code)} -->"

    def home_images(self, markup):
        # {{IMG:n}} slots on the home page, filled from the media library at deploy time.
        def fill(m):
            return placeholder_svg("home illustration" if m.group(1) == "PROBLEMS" else f"media #{m.group(1)}", 900, 900)
        return re.sub(r"\{\{IMG:(\w+)\}\}", fill, markup)


FORM_MOCK = """<div class="wpforms-container wpforms-container-full pv-form">
<form class="wpforms-form" onsubmit="event.preventDefault();this.querySelector('.pv-form-note').hidden=false;">
<p class="pv-form-flag">Preview only: this mock-up of the WPForms contact form sends nothing.</p>
<div class="wpforms-field"><label class="wpforms-field-label" for="pv-name">Name (optional)</label><input id="pv-name" type="text"></div>
<div class="wpforms-field"><label class="wpforms-field-label" for="pv-email">Email (optional, only if you want a reply)</label><input id="pv-email" type="email"></div>
<div class="wpforms-field"><label class="wpforms-field-label" for="pv-msg">Message <span class="wpforms-required-label">*</span></label><textarea id="pv-msg" required rows="6"></textarea></div>
<button type="submit" class="wpforms-submit">Send message</button>
<p class="pv-form-note" hidden>Preview: nothing was sent.</p>
</form></div>"""


def header_html(current):
    items = []
    for label, href, kids in MENU:
        cur = href == current or any(h == current for _, h in kids)
        li_cls = "menu-item" + (" current-menu-ancestor" if cur and kids else " current-menu-item" if cur else "")
        if kids:
            sub = "".join(
                f'<li class="menu-item{" current-menu-item" if h == current else ""}">'
                f'<a class="hfe-sub-menu-item" href="{local_href(h)}">{html.escape(l)}</a></li>' for l, h in kids)
            items.append(
                f'<li class="{li_cls} menu-item-has-children">'
                f'<button class="hfe-has-submenu-container pv-sub-toggle" aria-expanded="false">'
                f'<span class="hfe-menu-item">{html.escape(label)}</span><span class="sub-arrow" aria-hidden="true">▾</span></button>'
                f'<ul class="sub-menu">{sub}</ul></li>')
        else:
            items.append(f'<li class="{li_cls}"><a class="hfe-menu-item" href="{local_href(href)}">{html.escape(label)}</a></li>')
    return (
        '<a class="hfe-skip-link screen-reader-text" href="#content">Skip to content</a>'
        '<header class="gd-header pv-header"><div class="pv-header-inner">'
        '<div class="gd-wordmark"><p><a href="index.html">Grooming Dogs</a></p></div>'
        '<div class="gd-nav"><button class="hfe-nav-menu__toggle pv-burger" aria-expanded="false" aria-controls="pv-menu">'
        '<span class="screen-reader-text">Menu</span><span aria-hidden="true">☰</span></button>'
        f'<nav class="pv-menu" id="pv-menu" aria-label="Menu"><ul class="hfe-nav-menu">{"".join(items)}</ul></nav></div>'
        '</div></header>')


def footer_html():
    """Footer v2, taken verbatim from BUILD/footer_v2.php (rendered with the local PHP CLI)."""
    code = "echo json_encode(require 'footer_v2.php');"
    data = json.loads(subprocess.run(["php", "-r", code], cwd=BUILD, check=True,
                                     capture_output=True, text=True).stdout)
    pg = Page(prefix="pvf")
    pg.crumb = None
    body = pg.element(data[0], 0).replace("[hfe_current_year]", "2026")
    body = body.replace('<div class="elementor-widget elementor-widget-copyright', '<div class="elementor-widget elementor-widget-copyright')
    # The copyright widget is HFE's; render its shortcode text.
    body = re.sub(r"<!-- unsupported widget copyright -->", '<div class="hfe-copyright-wrapper"><span>© 2026 Grooming Dogs</span></div>', body)
    return f'<footer class="pv-footer"><style>{"".join(pg.css)}</style>{body}</footer>'


def render(m, footer, kitcss):
    slug = m["slug"]
    raw = (BUILD / "out" / f'{m["pid"]}.json').read_text(encoding="utf-8")
    # wp_build.php fills this at build time; the pages went live on this date (readiness report, DEPLOYED).
    raw = raw.replace("{{UPDATED}}", "October 5, 2026")
    data = json.loads(raw)
    pg = Page()
    pg.crumb = m.get("breadcrumb")
    n = int(m["pid"][3:])
    is_home, is_guide = n == 0, 1 <= n <= 17
    if is_guide:
        apply_rollout_classes(data)
    content = "".join(pg.element(e, 0) for e in data)
    current = "/" + slug + "/" if slug else "/"
    body_cls = ["page", "elementor-page"] + (["gd-guide"] if is_guide else []) + (["home"] if is_home else [])
    assets = []
    if is_guide:
        assets.append(('<link rel="stylesheet" href="assets/gd-guide.css">', '<script defer src="assets/gd-guide.js"></script>'))
    if is_home:
        assets.append(('<link rel="stylesheet" href="assets/gd-home.css"><link rel="stylesheet" href="assets/gd-carousel.css">',
                       '<script defer src="assets/gd-home.js"></script>'
                       '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>'
                       '<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>'
                       '<script defer src="assets/gd-carousel.js"></script>'))
    title = html.escape(m.get("seo_title") or m.get("wp_title") or "Grooming Dogs")
    canonical = f'https://grooming-dogs.com{current}'
    return f"""<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="{canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,700;1,7..72,400&family=Source+Sans+3:wght@400;600;700&display=swap">
<link rel="stylesheet" href="assets/elementor-base.css">
<style>{kitcss}</style>
<link rel="stylesheet" href="assets/site.css">
{"".join(a[0] for a in assets)}
<link rel="stylesheet" href="assets/proposed.css" id="pv-proposed-css" disabled>
<style>{"".join(pg.css)}</style>
<script src="assets/preview-mode.js"></script>
</head>
<body class="{" ".join(body_cls)}">
{header_html(current)}
<main id="content" class="gd-main" tabindex="-1"><div class="elementor" data-elementor-type="wp-page">{content}</div></main>
{footer}
<script src="assets/preview.js"></script>
{"".join(a[1] for a in assets)}
<script defer src="assets/proposed.js"></script>
</body>
</html>"""


def apply_rollout_classes(data):
    """Same classification as BUILD/wp_guide_rollout.php, so guides get gd-band / gd-box classes."""
    def text_of(els):
        return " ".join((e.get("settings", {}).get("editor", "") + " " + e.get("settings", {}).get("title", "")
                         + text_of(e.get("elements", []))) for e in els)

    def classify(e, depth):
        if e.get("elType") != "container":
            return None
        s = e.get("settings", {})
        g = s.get("__globals__", {})
        bg = g.get("background_color", "")
        if depth == 0:
            return "gd-band" if (bg or s.get("background_color")) else None
        if g.get("border_color") == "globals/colors?id=gdwarn":
            return "gd-box gd-box--caution"
        if bg == "globals/colors?id=gdsurf" and s.get("border_border"):
            return "gd-box gd-box--card"
        if bg == "globals/colors?id=gdsurfs":
            return "gd-box gd-box--short" if "short answer" in text_of(e.get("elements", [])).lower() else "gd-box gd-box--note"
        return None

    def walk(els, depth):
        for e in els:
            c = classify(e, depth)
            if c:
                cur = e.setdefault("settings", {}).get("css_classes", "").strip()
                e["settings"]["css_classes"] = (cur + " " + c).strip() if cur and "gd-" not in cur else c
            walk(e.get("elements", []), depth + 1)
    walk(data, 0)


def main():
    if DIST.exists():
        shutil.rmtree(DIST)
    (SITE / "assets").mkdir(parents=True)
    copies = {
        BUILD / "site.css": "site.css",
        BUILD / "gd-guide" / "gd-guide.css": "gd-guide.css",
        BUILD / "gd-guide" / "gd-guide.js": "gd-guide.js",
        BUILD / "gd-home" / "gd-home.css": "gd-home.css",
        BUILD / "gd-home" / "gd-home.js": "gd-home.js",
        BUILD / "gd-home" / "dist" / "gd-carousel.css": "gd-carousel.css",
        BUILD / "gd-home" / "dist" / "gd-carousel.js": "gd-carousel.js",
        HERE / "elementor-base.css": "elementor-base.css",
        HERE / "preview.js": "preview.js",
        HERE / "preview-mode.js": "preview-mode.js",
        HERE / "proposed.css": "proposed.css",
        HERE / "proposed.js": "proposed.js",
    }
    for src, name in copies.items():
        shutil.copy(src, SITE / "assets" / name)
    kitcss = kit_css()
    footer = rewrite_links(footer_html())
    for m in MANIFEST:
        name = "index.html" if not m["slug"] else m["slug"] + ".html"
        (SITE / name).write_text(render(m, footer, kitcss), encoding="utf-8")
    hub = (HERE / "hub.html").read_text(encoding="utf-8").replace("{{PAGES}}", hub_list())
    (DIST / "hub.html").write_text(hub, encoding="utf-8")
    print(f"wrote {len(MANIFEST)} pages to {SITE.relative_to(ROOT)} and the hub page")


def hub_list():
    rows = []
    for m in MANIFEST:
        name = "index.html" if not m["slug"] else m["slug"] + ".html"
        path = "/" + m["slug"] + "/" if m["slug"] else "/"
        rows.append(f'<li><a href="site/{name}"><span class="pid">{m["pid"]}</span>'
                    f'<span class="ttl">{html.escape(m["wp_title"])}</span><span class="url">{path}</span></a></li>')
    return "\n".join(rows)


if __name__ == "__main__":
    main()
