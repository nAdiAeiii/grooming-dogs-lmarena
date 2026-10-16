"""GD-00 homepage (PRODUCTION/GD-00-home.md §D) as Elementor Free JSON. Copy is verbatim from the record."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from convert import w, eid, dims, box, row, heading, text, inline, hl

BASE = os.path.dirname(os.path.abspath(__file__))
images = json.load(open(os.path.join(BASE, 'images.json'), encoding='utf-8'))

def sec(children, bg=None, pad=64, pad_m=40, width=1200, css_id=None):
    s = {"content_width": "boxed", "boxed_width": {"unit": "px", "size": width, "sizes": []},
         "flex_direction": "column", "flex_gap": {"unit": "px", "size": 24, "column": "24", "row": "24", "isLinked": True},
         "padding": dims(pad, top=pad, bottom=pad, left=24, right=24),
         "padding_mobile": dims(pad_m, top=pad_m, bottom=pad_m, left=16, right=16)}
    if bg:
        s.update({"background_background": "classic", "background_color": bg[1], "__globals__": {"background_color": f"globals/colors?id={bg[0]}"}})
    if css_id: s["_element_id"] = css_id
    return {"id": eid(), "elType": "container", "settings": s, "elements": children, "isInner": False}

def col(children, width):
    s = {"content_width": "full", "flex_direction": "column", "justify_content": "center",
         "flex_gap": {"unit": "px", "size": 16, "column": "16", "row": "16", "isLinked": True},
         "width": {"unit": "%", "size": width}, "width_mobile": {"unit": "%", "size": 100}}
    return {"id": eid(), "elType": "container", "settings": s, "elements": children, "isInner": True}

def cards(items, per_row_width, kind='card'):
    out = []
    for title, line, url in items:
        b = box([text(f'<p><strong><a href="{url}">{inline(title)}</a></strong></p><p>{inline(line)}</p>')], kind)
        b["settings"].update({"width": {"unit": "%", "size": per_row_width}, "width_tablet": {"unit": "%", "size": 48},
                              "width_mobile": {"unit": "%", "size": 100}})
        out.append(b)
    return row(out, gap=24)

img = images['lead-brushing-home']
hero = sec([row([
    col([
        heading(hl('GD-00', 'Practical dog grooming, explained for owners'), 'h1'),
        text('<p>Clear, step-by-step guides to grooming your dog at home: brushing, bathing, nails, ears, teeth and trims. They also help you know when a groomer or your vet should take over.</p>', style='lead'),
        text('<p>We\'re a guide, not a grooming salon, and we don\'t give veterinary advice. <a href="/about/">More about us</a></p>'),
        w("button", {"text": "Start with the full routine", "link": {"url": "/how-to-groom-your-dog-at-home/", "is_external": "", "nofollow": ""}}),
        text('<p><a href="/dog-coat-types/">Find your dog\'s coat type</a></p>'),
    ], 52),
    col([
        w("image", {"image": {"id": img["id"], "url": img["url"], "alt": img["alt"], "source": "library"}, "image_size": "large",
                    "caption_source": "custom", "caption": f'Photo: {img["credit"]} / Pexels',
                    "image_border_radius": dims(8),
                    "caption_color": "#5B6870", "caption_typography_typography": "custom",
                    "__globals__": {"caption_color": "globals/colors?id=secondary", "caption_typography_typography": "globals/typography?id=accent"}}),
    ], 44),
], gap=32)], pad=64, pad_m=32)

# ---- Home redesign (owner-approved 2026-10-06): numbered path, icon cards, carousel, tinted bands ----
import home_parts as hp
import re as _re
# HTML widgets are not texturized like text widgets: use typographic apostrophes in visible text (dog’s), as elsewhere on the site
html = lambda markup: w("html", {"html": _re.sub(r"(?<=[A-Za-z])'(?=[A-Za-z])", "’", markup)})
klass = lambda section, c: (section["settings"].update({"css_classes": c}), section)[1]

start = klass(sec([
    text('<p class="gd-kicker">New to grooming at home?</p>'),
    heading('Start here', 'h2', css_id='start-here'),
    text('<p class="gd-sub">Three guides, in the order that saves you time.</p>'),
    html(hp.start_path()),
], bg=("gdsurfs", "#F5F7F8")), 'gd-hsec gd-hsec--start')

situation = klass(sec([
    heading("Grooming for your dog's situation", 'h2', css_id='your-dogs-situation'),
    html(hp.situation_carousel()),
    html(hp.situation_cards()),
], pad=56), 'gd-hsec gd-hsec--situation')

tasks = klass(sec([
    heading('Grooming tasks', 'h2', css_id='grooming-tasks'),
    html(hp.task_tiles()),
], bg=("gdsurfw", "#FBF8F3"), pad=56, pad_m=36), 'gd-hsec gd-hsec--tasks')

pro = klass(sec([
    heading('Using a professional groomer', 'h2', css_id='professional-groomer'),
    html(hp.pro_cards()),
], pad=56, pad_m=36), 'gd-hsec gd-hsec--pro')

TRUST = [
    heading('How this guide works', 'h2', css_id='how-this-guide-works'),
    text('<ul>'
         '<li><strong>Sourced.</strong> Health and safety statements in our guides are checked against named sources, such as veterinary and animal-welfare organizations, and the sources are listed on each guide.</li>'
         '<li><strong>Your vet comes first.</strong> We help you recognize when something may be wrong and send you to your vet. We don\'t diagnose or recommend treatments.</li>'
         '<li><strong>Corrections welcome.</strong> Spotted a mistake? <a href="/contact/">Send a correction</a>.</li></ul>'
         '<p><a href="/editorial-policy/">How our guides are written and funded</a></p>'),
]
trust = klass(sec([
    heading('How this guide works', 'h2', css_id='how-this-guide-works'),
    html(hp.trust()),
], bg=("gdsurfs", "#F5F7F8"), pad=56, pad_m=36, width=1200), 'gd-hsec gd-hsec--trust')

data = [hero, start, situation, tasks, pro, trust]
os.makedirs(os.path.join(BASE, 'out'), exist_ok=True)
json.dump(data, open(os.path.join(BASE, 'out', 'GD-00.json'), 'w', encoding='utf-8'), ensure_ascii=False)
json.dump(TRUST, open(os.path.join(BASE, 'out', 'trust-block.json'), 'w', encoding='utf-8'), ensure_ascii=False)
print('GD-00 sections', len(data))
