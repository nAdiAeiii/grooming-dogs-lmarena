"""Build index.html (icons and tool drawings inlined) and dist/preview.html (no document wrapper, for
publishing as an isolated claude.ai artifact). Run from the repo root:
python3 prototype/editorial-hybrid/tools/build_page.py"""
import re
from pathlib import Path

HERE = Path(__file__).resolve().parents[1]
icons = HERE / "assets" / "icons"
syms = []
for f in sorted(icons.glob("*.svg")):
    svg = f.read_text(encoding="utf-8")
    vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
    inner = re.sub(r"^<svg[^>]*>|</svg>\s*$", "", svg.strip())
    syms.append(f'<symbol id="ph-{f.stem}" viewBox="{vb}">{inner}</symbol>')
tools = re.sub(r"^<svg[^>]*>|</svg>\s*$", "", (HERE / "assets" / "tools.svg").read_text(encoding="utf-8").strip())
sprite = ('<svg width="0" height="0" style="position:absolute" aria-hidden="true">\n'
          '<!-- Icons: Phosphor Icons, MIT licence (assets/icons/LICENSE-phosphor.txt). -->\n' + "\n".join(syms) + "\n" + tools + "\n</svg>")
src = (HERE / "index.src.html").read_text(encoding="utf-8").replace("<!--SPRITE-->", sprite)
(HERE / "index.html").write_text(src, encoding="utf-8")
for name in ["index", "404"]:
    p = HERE / (name + ".src.html")
    if not p.exists():
        continue
    page = p.read_text(encoding="utf-8").replace("<!--SPRITE-->", sprite)
    (HERE / (name + ".html")).write_text(page, encoding="utf-8")
    head = re.search(r"<head>(.*?)</head>", page, re.S).group(1)
    body = re.search(r"<body>(.*?)</body>", page, re.S).group(1)
    head = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", head)
    title = re.search(r"<title>.*?</title>", head).group(0)
    (HERE / "dist").mkdir(exist_ok=True)
    (HERE / "dist" / (name + ".preview.html")).write_text(title + '\n<meta name="claude:viewport-fit-sides" content="cover">' + head.replace(title, "") + body, encoding="utf-8")
print("built", len(syms), "icons")
