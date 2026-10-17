"""Write dist/preview.html: the same page without its document wrapper, for publishing as an
isolated claude.ai artifact (the publisher adds its own <!doctype>, <head> and <body>).
The stylesheet and scripts are published alongside it unchanged."""
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
src = (HERE / "index.html").read_text(encoding="utf-8")
head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
head = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", head)
title = re.search(r"<title>.*?</title>", head).group(0)
head = head.replace(title, "")
page = title + '\n<meta name="claude:viewport-fit-sides" content="cover">' + head + body
(HERE / "dist").mkdir(exist_ok=True)
(HERE / "dist" / "preview.html").write_text(page, encoding="utf-8")
print("wrote dist/preview.html")
