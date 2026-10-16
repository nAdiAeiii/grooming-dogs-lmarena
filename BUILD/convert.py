"""Convert locked production-record content (build/content/GD-xx.md) into Elementor Free JSON.

Rules implemented (DS-OD-01..05 + production conventions):
- Elementor Free widgets only: heading, text-editor, image, button, accordion, shortcode.
- Kit theme styles provide typography/colors (default widget colors/fonts are disabled site-wide).
- Prose measure ~720px (boxed containers), callouts subtle, cards restrained.
- Builder notes are never published. Ad slots are omitted (no ads at launch).
- Source markers **[S1]** -> <sup><a href="#s1" aria-label="Source 1">[1]</a></sup>.
"""
import html, json, random, re, string, sys, os

random.seed(20261005)
BASE = os.path.dirname(os.path.abspath(__file__))

def eid():
    return ''.join(random.choice('0123456789abcdef') for _ in range(7))

# ---------------------------------------------------------------- inline markdown
def cite(m):
    """Render a run of source markers like [S1][S2] or [P5]–[P9]."""
    inner = m.group(1)
    parts = re.split(r'(\[[SP]\d+\]|–)', inner)
    out = []
    for p in parts:
        mm = re.fullmatch(r'\[([SP])(\d+)\]', p)
        if mm:
            k, n = mm.group(1), mm.group(2)
            label = n if k == 'S' else 'P' + n
            word = 'Source' if k == 'S' else 'Price source'
            out.append(f'<a href="#{k.lower()}{n}" aria-label="{word} {n}">[{label}]</a>')
        elif p == '–':
            out.append('–')
    return '<sup>' + ''.join(out) + '</sup>'

def inline(s):
    # PC-04: GD-16 is published in the same release, so "add once GD-16 is published" notes are applied
    s = re.sub(r'\*\[Builder: add "(.+?)" only once GD-16 is published[^\n]*?\]\*', r'\1', s)
    # builder notes anywhere in a line are never published (source markers **[S1]** are kept)
    s = re.sub(r'(?<!\*)\*\[(?![SP]\d+\]).*?\]\*(?!\*)', '', s)
    s = re.sub(r'\s+([.,;:])', r'\1', s) if False else s
    s = html.escape(s, quote=False)
    # source marker runs, bold-wrapped
    s = re.sub(r'\*\*((?:\[[SP]\d+\](?:–)?)+)\*\*', cite, s)
    # links
    def link(m):
        text, url = m.group(1), m.group(2)
        url = url.strip()
        attrs = ''
        if url.startswith('http'):
            attrs = ' rel="nofollow"' if '__nofollow__' in url else ''
            url = url.replace('__nofollow__', '')
        return f'<a href="{url}"{attrs}>{text}</a>'
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link, s)
    # bare URLs (sources lists) -> links
    s = re.sub(r'(?<!href=")(https?://[^\s<)]+)', lambda m: f'<a href="{m.group(1)}">{m.group(1)}</a>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', s)
    s = re.sub(r'`([^`]+)`', r'\1', s)
    return s

# ---------------------------------------------------------------- block markdown -> html
def md_blocks_to_html(lines):
    """Paragraphs, lists (one nesting level), tables. Returns HTML string."""
    out, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1; continue
        if ln.lstrip().startswith('|'):
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith('|'):
                rows.append(lines[i].strip()); i += 1
            out.append(table_html(rows)); continue
        m = re.match(r'^(\s*)(- |\d+\. )', ln)
        if m:
            out.append(list_html(lines, i)); i = list_end(lines, i); continue
        para = []
        while i < len(lines) and lines[i].strip() and not lines[i].lstrip().startswith('|') \
                and not re.match(r'^\s*(- |\d+\. )', lines[i]):
            para.append(lines[i].strip()); i += 1
        ptxt = ' '.join(para)
        gm = re.match(r'^\*\*(.+?)\*\*\s*`\{#([a-z0-9-]+)\}`\.?\s*(.*)$', ptxt)
        if gm:
            out.append(f'<dl class="gd-term"><dt id="{gm.group(2)}"><strong>{inline(gm.group(1))}</strong></dt>'
                       f'<dd>{inline(gm.group(3))}</dd></dl>')
        else:
            out.append('<p>' + inline(ptxt) + '</p>')
    return '\n'.join(out)

def list_end(lines, i):
    while i < len(lines) and (re.match(r'^\s*(- |\d+\. )', lines[i]) or
                              (lines[i].startswith('   ') and lines[i].strip() and not lines[i].lstrip().startswith('|'))):
        i += 1
    return i

def list_html(lines, i):
    end = list_end(lines, i)
    items = []  # (indent, ordered, text)
    for ln in lines[i:end]:
        m = re.match(r'^(\s*)(- |\d+\. )(.*)$', ln)
        if m:
            items.append([len(m.group(1)), m.group(2) != '- ', m.group(3)])
        elif items:
            items[-1][2] += ' ' + ln.strip()
    def render(idx, level_indent):
        ordered = items[idx][1]
        tag = 'ol' if ordered else 'ul'
        buf = [f'<{tag}>']
        while idx < len(items) and items[idx][0] >= level_indent:
            ind, _, text = items[idx]
            if ind > level_indent:
                sub, idx = render(idx, ind)
                buf[-1] = buf[-1].replace('</li>', sub + '</li>')
                continue
            buf.append('<li>' + inline(text) + '</li>')
            idx += 1
        buf.append(f'</{tag}>')
        return ''.join(buf), idx
    h, _ = render(0, items[0][0])
    return h

def table_html(rows):
    rows = [r for r in rows if not re.fullmatch(r'\|[\s|:-]+\|', r)]
    def cells(r):
        r = re.sub(r'(?<!\*)\*\[(?![SP]\d+\])[^\]]*\]\*(?!\*)', '', r)  # strip builder notes inside cells
        return [c.strip() for c in r.strip().strip('|').split('|')]
    head = cells(rows[0])
    body = [cells(r) for r in rows[1:]]
    h = '<div class="gd-table-wrap"><table><thead><tr>' + ''.join(f'<th scope="col">{inline(c)}</th>' for c in head) + '</tr></thead><tbody>'
    for r in body:
        h += '<tr>' + ''.join((f'<th scope="row">{inline(c)}</th>' if j == 0 else f'<td>{inline(c)}</td>') for j, c in enumerate(r)) + '</tr>'
    return h + '</tbody></table></div>'

# ---------------------------------------------------------------- elementor element builders
def w(widget, settings):
    return {"id": eid(), "elType": "widget", "widgetType": widget, "settings": settings, "elements": []}

def dims(v, unit='px', top=None, right=None, bottom=None, left=None):
    t = top if top is not None else v; r = right if right is not None else v
    b = bottom if bottom is not None else v; l = left if left is not None else v
    return {"unit": unit, "top": str(t), "right": str(r), "bottom": str(b), "left": str(l), "isLinked": len({t, r, b, l}) == 1}

def section(children, width=760, bg=None, pad=48, pad_m=32, css_id=None):
    s = {"content_width": "boxed", "boxed_width": {"unit": "px", "size": width, "sizes": []},
         "flex_direction": "column", "flex_gap": {"unit": "px", "size": 16, "column": "16", "row": "16", "isLinked": True},
         "padding": dims(pad, top=pad, bottom=pad, left=24, right=24),
         "padding_mobile": dims(pad_m, top=pad_m, bottom=pad_m, left=16, right=16)}
    if bg:
        s.update({"background_background": "classic", "background_color": bg[1], "__globals__": {"background_color": f"globals/colors?id={bg[0]}"}})
        s["css_classes"] = "gd-band"  # styling hook (guide pilot, 2026-10-05); no visual effect without the pilot CSS
    if css_id:
        s["_element_id"] = css_id
    return {"id": eid(), "elType": "container", "settings": s, "elements": children, "isInner": False}

def box(children, kind):
    """kind: short | note | caution | card"""
    s = {"content_width": "full", "flex_direction": "column",
         "flex_gap": {"unit": "px", "size": 8, "column": "8", "row": "8", "isLinked": True},
         "padding": dims(24), "padding_mobile": dims(16),
         "border_radius": dims(8), "background_background": "classic"}
    g = {}
    if kind == 'caution':
        s.update({"background_color": "#FBF8F3", "border_border": "solid", "border_width": dims(0, left=4),
                  "border_color": "#8A5A00"})
        g = {"background_color": "globals/colors?id=gdsurfw", "border_color": "globals/colors?id=gdwarn"}
    else:  # short, note, card
        s.update({"background_color": "#F5F7F8" if kind != 'card' else "#FFFFFF", "border_border": "solid",
                  "border_width": dims(1), "border_color": "#D9E0E4"})
        g = {"background_color": "globals/colors?id=" + ("gdsurfs" if kind != 'card' else "gdsurf"),
             "border_color": "globals/colors?id=gdborder"}
    s["__globals__"] = g
    s["css_classes"] = f"gd-box gd-box--{kind}"  # styling hook (guide pilot, 2026-10-05)
    return {"id": eid(), "elType": "container", "settings": s, "elements": children, "isInner": True}

def row(children, gap=16):
    s = {"content_width": "full", "flex_direction": "row", "flex_wrap": "wrap", "flex_direction_mobile": "column",
         "flex_gap": {"unit": "px", "size": gap, "column": str(gap), "row": str(gap), "isLinked": True}}
    return {"id": eid(), "elType": "container", "settings": s, "elements": children, "isInner": True}

_HL = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'h1-highlight.json'), encoding='utf-8'))

def hl(pid, title):
    """DS-OD-06: wrap the page's key phrase in the H1 in a honey highlight span (wording unchanged)."""
    ph = _HL.get(pid)
    return title.replace(ph, '<span class="gd-hl">' + ph + '</span>', 1) if ph and ph in title else title

def heading(text, tag, css_id=None):
    s = {"title": text, "header_size": tag}
    if css_id: s["_element_id"] = css_id
    return w("heading", s)

def text(html_s, style=None):
    s = {"editor": html_s}
    if style == 'lead':
        s.update({"typography_typography": "custom", "__globals__": {"typography_typography": "globals/typography?id=secondary"}})
    elif style == 'small':
        s.update({"text_color": "#5B6870", "__globals__": {"typography_typography": "globals/typography?id=accent", "text_color": "globals/colors?id=secondary"}})
    return w("text-editor", s)

# ---------------------------------------------------------------- page conversion
NOTE = re.compile(r'^\*\[(.+?)\]\*\s*(.*)$')

def classify(note):
    n = note.lower()
    if n.startswith(('breadcrumb', 'c-crumb')): return 'crumb'
    if n.startswith(('intent line', 'scope note', 'c-scope', 'c-intro')): return 'lead'
    if n.startswith(('byline',)): return 'byline'
    if n.startswith(('short answer', 'c-short')): return 'short'
    if n.startswith(('safety callout', 'c-call-safe', 'see-a-vet', 'c-call-vet')): return 'caution'
    if n.startswith(('c-call-tip', 'sourcing callout', 'c-call-src', 'options note', "what you'll need", 'c-need')): return 'note'
    if n.startswith(('faq', 'c-faq')): return 'faq'
    if n.startswith(('"where to go next"', 'c-next')): return 'next'
    if n.startswith(('disclaimer', 'c-disc')): return 'disc'
    if n.startswith(('sources list', 'c-sources')): return 'sources'
    if n.startswith(('lead image', 'image:', 'c-fig', 'instructional figure')): return 'image'
    if n.startswith(('jump links',)): return 'jump'
    if n.startswith(('shortcode widget',)): return 'form'
    if n.startswith(('ad slot', 'c-ad', 'builder', 'no lead image', 'footer', 'saved template', 'h3s are allowed')): return 'skip'
    return 'ignore'   # structural hint: content follows as normal markdown

def convert(page_id, md, images, extra=None):
    """Returns elementor data list. images: dict asset_id -> {'id','url','alt','credit'}"""
    extra = extra or {}
    lines = md.split('\n')
    for k, l in enumerate(lines):
        if re.match(r'^\*\[(Breadcrumb|C-CRUMB)', l.strip()) or l.startswith('# '):
            lines = lines[k:]
            break
    sections, cur, h2s = [], [], []
    cur_bg, cur_id, cur_width = None, None, 760
    state = None          # None | 'box' | 'faq' | 'next' | 'sources'
    box_kind, box_lines = None, []
    faq_items, faq_q, faq_a = [], None, []
    tables_next = []
    src_lines = []
    lead_done = False

    def flush_box():
        nonlocal box_kind, box_lines
        if box_lines:
            cur.append(box([text(md_blocks_to_html(box_lines))], box_kind))
        box_kind, box_lines = None, []

    def flush_faq():
        nonlocal faq_items, faq_q, faq_a
        if faq_q:
            faq_items.append((faq_q, md_blocks_to_html(faq_a)))
        if faq_items:
            tabs = [{"_id": eid(), "tab_title": q, "tab_content": a} for q, a in faq_items]
            cur.append(w("accordion", {"tabs": tabs, "title_html_tag": "h3", "faq_schema": "yes",
                                        "selected_icon": {"value": "fas fa-plus", "library": "fa-solid"},
                                        "selected_active_icon": {"value": "fas fa-minus", "library": "fa-solid"},
                                        "border_color": "#D9E0E4", "title_color": "#17324D", "tab_active_color": "#17324D",
                                        "__globals__": {"border_color": "globals/colors?id=gdborder", "title_color": "globals/colors?id=primary", "tab_active_color": "globals/colors?id=primary"}}))
        faq_items, faq_q, faq_a = [], None, []

    def flush_next():
        nonlocal tables_next
        rows = [r for r in tables_next if r.lstrip().startswith('|')]
        rows = [r for r in rows if not re.fullmatch(r'\|[\s|:-]+\|', r.strip())]
        if len(rows) > 1:
            head = [c.strip().lower() for c in rows[0].strip().strip('|').split('|')]
            cards = []
            for r in rows[1:]:
                r2 = re.sub(r'(?<!\*)\*\[(?![SP]\d+\])[^\]]*\]\*(?!\*)', '', r)
                c = [x.strip() for x in r2.strip().strip('|').split('|')]
                url = next((x.strip('` ') for x in c if x.strip().startswith('`/')), None)
                title = c[0]
                desc = next((x for k, x in enumerate(c[1:], 1) if not x.strip().startswith('`/')), '')
                desc = desc.strip().strip('"“”')
                if not url: continue
                cards.append(box([text(f'<p><strong><a href="{url}">{inline(title)}</a></strong></p>' + (f'<p>{inline(desc)}</p>' if desc else ''))], 'card'))
            for cd in cards:
                cd["settings"].update({"width": {"unit": "%", "size": 48}, "width_mobile": {"unit": "%", "size": 100}})
            cur.append(row(cards))
        tables_next = []

    def flush_sources():
        nonlocal src_lines
        items, heads = [], []
        buf = []
        for ln in src_lines:
            s = ln.strip()
            if not s: continue
            m = re.match(r'^(?:\d+\.|-)\s+\*\*\[([SP])(\d+)\]\*\*\s*(.*)$', s)
            if m:
                k, n, rest = m.groups()
                rel = ' rel="nofollow"' if k == 'P' else ''
                body = inline(rest)
                if rel:
                    body = body.replace('<a href="http', '<a rel="nofollow" href="http')
                lab = n if k == 'S' else 'P' + n
                buf.append(f'<li id="{k.lower()}{n}"><span class="gd-src-label">[{lab}]</span> {body}</li>')
            else:
                if buf:
                    items.append('<ul class="gd-sources">' + ''.join(buf) + '</ul>'); buf = []
                items.append('<p>' + inline(s) + '</p>')
        if buf: items.append('<ul class="gd-sources">' + ''.join(buf) + '</ul>')
        items = [x for x in items if x != '<p><strong>Sources</strong></p>']
        cur.append(text('<p class="gd-label" id="sources"><strong>Sources</strong></p>\n' + '\n'.join(items), style='small'))
        src_lines = []

    def end_state():
        nonlocal state
        if state == 'box': flush_box()
        elif state == 'faq': flush_faq()
        elif state == 'next': flush_next()
        elif state == 'sources': flush_sources()
        state = None

    def new_section(bg=None, css_id=None, width=760):
        nonlocal cur, cur_bg, cur_id, cur_width
        end_state()
        if cur:
            sections.append(section(cur, width=cur_width, bg=cur_bg, css_id=cur_id))
        cur, cur_bg, cur_id, cur_width = [], bg, css_id, width

    para = []
    def flush_para():
        nonlocal para
        if para:
            cur.append(text(md_blocks_to_html(para)))
            para = []

    i = 0
    while i < len(lines):
        ln = lines[i]
        s = ln.strip()
        if s.startswith('>'):
            i += 1; continue
        if re.fullmatch(r'-{3,}', s):
            if state == 'box': flush_box(); state = None
            flush_para(); i += 1; continue
        hm = re.match(r'^(#{1,3}) (.*)$', ln)
        if hm:
            level, title = len(hm.group(1)), hm.group(2).strip()
            cid = None
            mid = re.search(r'\s*\{#([a-z0-9-]+)\}\s*$', title)
            if mid:
                cid = mid.group(1); title = title[:mid.start()].strip()
            if level == 3 and state == 'faq':
                if faq_q: faq_items.append((faq_q, md_blocks_to_html(faq_a)))
                faq_q, faq_a = title, []
                i += 1; continue
            if state == 'box': flush_box(); state = None
            flush_para()
            if level == 1:
                cur.append(heading(hl(pid, title), 'h1'))
            elif level == 2:
                if state in ('faq', 'next', 'sources'): end_state()
                slug = cid or re.sub(r'[^a-z0-9]+', '-', re.sub(r"[’']", '', title.lower())).strip('-')
                h2s.append((title, slug))
                new_section(css_id=None)
                cur.append(heading(title, 'h2', css_id=slug))
            else:
                if state: end_state()
                cur.append(heading(title, 'h3', css_id=cid))
            i += 1; continue
        nm = NOTE.match(s)
        if nm and not s.startswith('**'):
            note, trail = nm.group(1), nm.group(2).strip()
            kind = classify(note)
            if kind not in ('ignore',) and state in ('box',):
                flush_box(); state = None
            if kind in ('faq', 'next', 'sources', 'disc') and state in ('faq', 'next', 'sources'):
                end_state()
            flush_para()
            if kind == 'crumb':
                cur.append(w("shortcode", {"shortcode": "[rank_math_breadcrumb]"}))
            elif kind == 'lead' and trail:
                cur.append(text('<p>' + inline(trail) + '</p>', style='lead'))
            elif kind == 'byline':
                t2 = re.sub(r'\*\[publish date\]\*', '{{UPDATED}}', trail)
                cur.append(text('<p>' + inline(t2) + '</p>', style='small'))
            elif kind in ('short', 'note', 'caution'):
                state, box_kind, box_lines = 'box', ('short' if kind == 'short' else kind), []
                if trail:
                    box_lines.append(trail)
            elif kind == 'faq':
                state = 'faq'
            elif kind == 'next':
                new_section(bg=("gdsurfs", "#F5F7F8"))
                cur.append(text('<p class="gd-label" id="next"><strong>Where to go next</strong></p>'))
                state = 'next'
            elif kind == 'disc':
                if trail:
                    cur.append(text('<p>' + inline(trail) + '</p>', style='small'))
            elif kind == 'sources':
                state = 'sources'
            elif kind == 'image':
                am = re.search(r'`([a-z0-9-]+)`', note)
                if am and am.group(1) in images:
                    im = images[am.group(1)]
                    cap = re.search(r'[Cc]aption:? "([^"]+)"', note)
                    caption = (cap.group(1) + ' ' if cap else '') + f'Photo: {im["credit"]} / Pexels'
                    cur.append(w("image", {"image": {"id": im["id"], "url": im["url"], "alt": im["alt"], "source": "library"},
                                           "image_size": "large", "caption_source": "custom", "caption": caption,
                                           "caption_typography_typography": "custom", "caption_color": "#5B6870",
                                           "__globals__": {"caption_typography_typography": "globals/typography?id=accent", "caption_color": "globals/colors?id=secondary"}}))
                elif am:
                    print(f'  [{page_id}] image asset {am.group(1)} not in verified map: skipped', file=sys.stderr)
            elif kind == 'form':
                cur.append(w("shortcode", {"shortcode": "{{FORM_SHORTCODE}}"}))
            elif kind == 'jump':
                pass  # rendered after parse (needs h2 list)
            elif kind == 'ignore' and trail and state is None:
                para.append(trail)
            elif kind == 'ignore' and trail and state == 'box':
                box_lines.append(trail)
            i += 1; continue
        # content line
        if state == 'box':
            if not s:
                # end box if next non-blank line is not a list item / continuation
                j = i + 1
                while j < len(lines) and not lines[j].strip(): j += 1
                nxt = lines[j] if j < len(lines) else ''
                if box_lines and not re.match(r'^\s*(- |\d+\. )', nxt):
                    flush_box(); state = None
                i += 1; continue
            box_lines.append(ln); i += 1; continue
        if state == 'faq':
            qm = re.fullmatch(r'\*\*(.+\?)\*\*', s)
            if qm:
                if faq_q: faq_items.append((faq_q, md_blocks_to_html(faq_a)))
                faq_q, faq_a = qm.group(1).strip(), []
            elif faq_q is not None:
                faq_a.append(ln)
            i += 1; continue
        if state == 'next':
            if s.startswith('|'):
                tables_next.append(s)
            elif s and tables_next:
                end_state(); continue
            i += 1; continue
        if state == 'sources':
            src_lines.append(ln); i += 1; continue
        if not s:
            if para and not re.match(r'^\s*(- |\d+\. |\|)', para[-1]):
                # paragraph boundary
                flush_para()
            elif para:
                # list/table followed by blank: flush too
                j = i + 1
                while j < len(lines) and not lines[j].strip(): j += 1
                nxt = lines[j] if j < len(lines) else ''
                if not re.match(r'^\s*(- |\d+\. )', nxt):
                    flush_para()
            i += 1; continue
        para.append(ln); i += 1
    flush_para()
    end_state()
    if cur:
        sections.append(section(cur, width=cur_width, bg=cur_bg, css_id=cur_id))
    # jump links (GD-17/GD-19): insert after intro
    if any(classify(nm.group(1)) == 'jump' for nm in (NOTE.match(l.strip()) for l in lines) if nm):
        links = ''.join(f'<li><a href="#{sl}">{html.escape(t)}</a></li>' for t, sl in h2s if sl not in ('next', 'sources'))
        sections[0]["elements"].append(w("text-editor", {"editor": f'<nav aria-label="On this page"><ul class="gd-jump">{links}</ul></nav>'}))
    return sections, h2s

if __name__ == '__main__':
    pid = sys.argv[1]
    md = open(os.path.join(BASE, 'content', pid + '.md'), encoding='utf-8').read()
    images = json.load(open(os.path.join(BASE, 'images.json'), encoding='utf-8')) if os.path.exists(os.path.join(BASE, 'images.json')) else {}
    data, h2s = convert(pid, md, images)
    json.dump(data, open(os.path.join(BASE, 'out', pid + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    print(pid, 'sections', len(data), 'h2', [t for t, _ in h2s])
