"""Build all 22 launch pages' Elementor JSON + a manifest from the locked production records."""
import json, os, re, sys, glob, subprocess, copy
BASE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE)
PROD = r'C:\Users\Nadia\grooming-dogs-lmarena\PRODUCTION'

# images.json from the import log
imgs = {}
for ln in open(os.path.join(BASE, 'images-imported.tsv'), encoding='utf-8'):
    a, i, u, c = ln.rstrip('\n').split('\t')
    imgs[a] = {"id": int(i), "url": u, "credit": c}
for ln in open(os.path.join(BASE, 'images.tsv'), encoding='utf-8'):
    a, pid, c, alt = ln.rstrip('\n').split('\t')
    imgs[a]["alt"] = alt
json.dump(imgs, open(os.path.join(BASE, 'images.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

from convert import convert, w
# lead images the older records place in the build table (not inline)
LEAD = {'GD-01': 'lead-routine', 'GD-02': 'lead-frequency', 'GD-03': 'lead-coat-gd03', 'GD-04': 'lead-bathing', 'GD-05': 'lead-brushing'}

def img_widget(a):
    im = imgs[a]
    return w("image", {"image": {"id": im["id"], "url": im["url"], "alt": im["alt"], "source": "library"},
                       "image_size": "large", "caption_source": "custom", "caption": f'Photo: {im["credit"]} / Pexels',
                       "caption_color": "#5B6870", "caption_typography_typography": "custom",
                       "__globals__": {"caption_color": "globals/colors?id=secondary", "caption_typography_typography": "globals/typography?id=accent"}})

def seo(t):
    def cell(label_re):
        m = re.search(r'^\|\s*(?:' + label_re + r')[^|]*\|\s*(.+?)\s*\|\s*$', t, re.M)
        return m.group(1) if m else None
    title = cell(r'SEO title(?! draft)') or cell(r'SEO title draft')
    meta = cell(r'Meta description(?! draft)') or cell(r'Meta description draft')
    fk = cell(r'Focus keyword') or cell(r'Primary keyword')
    canon = cell(r'Canonical(?: URL)?')
    clean = lambda s: re.sub(r'\s*\((?:\*\*)?\d+(?:\*\*)? (?:chars|characters)\).*$', '', s or '').strip().strip('`')
    return clean(title), clean(meta), clean(fk), canon

ARCH = open(os.path.join(r'C:\Users\Nadia\grooming-dogs-lmarena\AUDIT_OUTPUT', 'GROOMING-DOGS-ARCHITECTURE-VALIDATION.md'), encoding='utf-8').read()
SLUGS = {m.group(1): m.group(2).strip('/') for m in re.finditer(r'^\| (GD-\d\d) \| `(/[a-z0-9/-]*)` \|\s*$', ARCH, re.M)}
manifest = []
for f in sorted(glob.glob(os.path.join(PROD, 'GD-*.md'))):
    pid = os.path.basename(f)[:5]
    t = open(f, encoding='utf-8').read()
    title, meta, fk, canon = seo(t)
    slug = SLUGS[pid]
    h1 = re.search(r'^# (?!GD-)(.+)$', open(os.path.join(BASE, 'content', pid + '.md'), encoding='utf-8').read(), re.M)
    bc = re.search(r'\*\[(?:Breadcrumb|C-CRUMB): Home › ([^\]]+)\]\*', t)
    ct = re.search(r'^\|\s*(?:Canonical title|Title|Page title)\s*\|\s*(.+?)\s*\|', t, re.M)
    wp_title = (ct.group(1).strip() if ct else (h1.group(1) if h1 else pid))
    if pid == 'GD-00':
        subprocess.run([sys.executable, os.path.join(BASE, 'build_home.py')], check=True)
        data = json.load(open(os.path.join(BASE, 'out', 'GD-00.json'), encoding='utf-8'))
    else:
        md = open(os.path.join(BASE, 'content', pid + '.md'), encoding='utf-8').read()
        data, h2s = convert(pid, md, imgs)
        if pid in LEAD:
            first = data[0]["elements"]
            pos = next((k for k, e in enumerate(first) if e["elType"] == "container"), len(first))
            first.insert(pos, img_widget(LEAD[pid]))
        if pid == 'GD-18':
            trust = json.load(open(os.path.join(BASE, 'out', 'trust-block.json'), encoding='utf-8'))
            # GD-18 keeps its 6 spec H2s: the reused block's title is a styled label here, not an H2
            from convert import text as _text
            trust[0] = _text('<p class="gd-label" id="how-this-guide-works"><strong>How this guide works</strong></p>')
            # place the saved template before "Corrections and feedback"
            idx = next(k for k, s in enumerate(data) if any(e.get("settings", {}).get("_element_id") == 'corrections-and-feedback' for e in s["elements"]))
            from build_home import sec
            data.insert(idx, sec(copy.deepcopy(trust), bg=("gdsurfs", "#F5F7F8"), pad=48, pad_m=32, width=760))
        json.dump(data, open(os.path.join(BASE, 'out', pid + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    manifest.append({"pid": pid, "slug": slug, "wp_title": wp_title, "breadcrumb": bc.group(1).strip() if bc else '',
                     "seo_title": title, "meta": meta, "focus": fk, "h1": h1.group(1).strip() if h1 else ''})
json.dump(manifest, open(os.path.join(BASE, 'out', 'manifest.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for m in manifest:
    print(f'{m["pid"]} /{m["slug"]}/ | {m["wp_title"]} | bc={m["breadcrumb"]} | T={len(m["seo_title"])} M={len(m["meta"])} | {m["seo_title"][:55]}')
