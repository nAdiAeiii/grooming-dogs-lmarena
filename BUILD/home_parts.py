"""Home page redesign parts (owner-approved 2026-10-06): HTML for Elementor Free "html" widgets.
Copy is the existing GD-00 copy, verbatim, except two owner-approved lines in "Start here" (kicker + sub).
Icons are inline SVG line drawings (no icon library). Classes are prefixed gd- and styled by gd-home/gd-home.css."""
import json

ICONS = {
    'puppy': '<g class="gd-a-bob"><circle cx="7" cy="9" r="1.8"/><circle cx="12" cy="6.8" r="1.8"/><circle cx="17" cy="9" r="1.8"/><path d="M8 16.5c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5c0 1.6-1.4 2.5-4 2.5s-4-.9-4-2.5z"/></g>',
    'older': '<path class="gd-a-beat" d="M12 19s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 1.8C19 14.7 12 19 12 19z"/><path class="h gd-a-draw" d="M6.5 12h3l1.5-2.5 2 4 1.5-1.5h3"/>',
    'calm': '<path d="M4 9c2-2 4-2 6 0s4 2 6 0 3-1.5 4 0"/><path class="h gd-a-draw" d="M4 14c2-2 4-2 6 0s4 2 6 0 3-1.5 4 0"/><path d="M4 19c2-2 4-2 6 0s4 2 6 0 3-1.5 4 0"/>',
    'check': '<g class="gd-a-wig"><circle cx="10.5" cy="10.5" r="5.5"/><path d="M15 15l4.5 4.5"/></g><circle class="hf gd-a-tw" cx="10.5" cy="10.5" r="1.6"/>',
    'bath': '<path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2z"/><path d="M6 12V6a2 2 0 0 1 4 0"/><circle class="h gd-a-bub" cx="13" cy="8" r="1.4"/><circle class="h gd-a-bub" cx="16.5" cy="6" r="1"/><circle class="h gd-a-bub" cx="18" cy="9.5" r="1.2"/>',
    'brush': '<g class="gd-a-wig"><rect x="5" y="4" width="14" height="6" rx="2"/><path d="M8 10v4M11 10v4M14 10v4M17 10v4"/><path d="M12 4V2"/></g><path class="h" d="M5 19c3-1.5 6 1.5 9 0s4-1 5 0"/>',
    'scissors': '<g class="gd-a-snipA"><circle cx="6" cy="18" r="2.6"/><path d="M8 16.2L19 5"/></g><g class="gd-a-snipB"><circle cx="18" cy="18" r="2.6"/><path d="M16 16.2L5 5"/></g>',
    'nails': '<g class="gd-a-bob"><ellipse cx="6" cy="10" rx="1.8" ry="2.3"/><ellipse cx="10" cy="7" rx="1.8" ry="2.3"/><ellipse cx="14" cy="7" rx="1.8" ry="2.3"/><ellipse cx="18" cy="10" rx="1.8" ry="2.3"/><path d="M7.5 17c0-2.8 2-4.8 4.5-4.8s4.5 2 4.5 4.8c0 1.8-1.8 2.7-4.5 2.7S7.5 18.8 7.5 17z"/></g><path class="h" d="M6 6.8l-.4-1.4M10 3.8l-.2-1.4M14 3.8l.2-1.4M18 6.8l.4-1.4"/>',
    'ears': '<path class="gd-a-swing" d="M15 4c-4 0-7 3-7 8 0 4 2 7 4.5 7 1.8 0 2.5-1.5 2.5-3 0-2 2-2.5 2-5.5C17 7 16.5 4 15 4z"/><path class="h gd-a-draw" d="M19 9.5a4 4 0 0 1 0 5"/>',
    'teeth': '<path d="M7.5 4C5 4 4 6 4 8.5c0 3 1.5 4 2 7 .4 2.7 1 4.5 2.2 4.5 1.6 0 1.4-4 3.8-4s2.2 4 3.8 4c1.2 0 1.8-1.8 2.2-4.5.5-3 2-4 2-7C20 6 19 4 16.5 4c-2 0-2.8 1-4.5 1S9.5 4 7.5 4z"/><path class="hf gd-a-tw" d="M19.5 2.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/>',
    'clipboard': '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5h6v2H9z"/><path class="h gd-a-draw" d="M8.5 11l1.6 1.6 3-3"/><path d="M14.5 11.5h1.5M8.5 16.5h7"/>',
    'tag': '<g class="gd-a-swing"><path d="M15 4l5 5-9.5 9.5a2 2 0 0 1-2.8 0L5.5 16.3a2 2 0 0 1 0-2.8z"/><circle class="hf" cx="15.5" cy="8.5" r="1.3"/></g>',
    'shield': '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path class="h gd-a-draw" d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
    'vet': '<path class="gd-a-beat" d="M12 19s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 1.8C19 14.7 12 19 12 19z"/><path class="h" d="M12 10.5v5M9.5 13h5"/>',
    'pencil': '<g class="gd-a-wig"><path d="M15.5 4.5l4 4L9 19H5v-4z"/><path d="M13.5 6.5l4 4"/></g><path class="h" d="M13 20h7"/>',
}


def ico(name):
    return f'<span class="gd-ico" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">{ICONS[name]}</svg></span>'


def start_path():
    steps = [
        ("/dog-coat-types/", "Find your dog's coat type",
         "Your dog's coat shapes almost every grooming decision. Start by working out which type it is."),
        ("/how-often-should-you-groom-your-dog/", "A grooming schedule for your dog's coat",
         "How often to brush, bathe, trim nails, clean ears and brush teeth."),
        ("/how-to-groom-your-dog-at-home/", "The full grooming routine",
         "Everything a home groom involves, in the order to do it."),
    ]
    li = ''.join(f'<li class="gd-step"><span class="gd-num" aria-hidden="true">{i}</span>'
                 f'<a class="gd-pcard" href="{u}"><span class="gd-sr">Step {i}: </span><strong>{t}</strong><span>{d}</span></a></li>'
                 for i, (u, t, d) in enumerate(steps, 1))
    return f'<ol class="gd-path">{li}</ol>'


def situation_cards():
    items = [
        ('puppy', '/puppy-grooming/', 'Grooming a puppy', 'Get a young dog used to being handled and groomed.'),
        ('older', '/senior-dog-grooming/', 'Grooming an older dog', 'Adapt grooming for stiff joints, thin skin and shorter patience.'),
        ('calm', '/grooming-an-anxious-dog/', 'A dog who hates grooming', 'Help a fearful or resistant dog cope, step by step.'),
        ('check', '/dog-grooming-problems/', 'Something wrong after grooming?', 'Itching, redness, head shaking or a smell: what to check, and when to see your vet.'),
    ]
    cards = ''.join(f'<a class="gd-icard" href="{u}">{ico(i)}<strong>{t}</strong><span>{d}</span></a>' for i, u, t, d in items)
    return f'<div class="gd-grid4 gd-anim-group">{cards}</div>'


def situation_carousel():
    """Carousel items; {{IMG:n}} placeholders are replaced with the attachment's large URL at deploy time.
    The cards below remain the real links; the carousel is the visual layer."""
    items = [
        {'src': '{{IMG:33}}', 'alt': 'A relaxed Golden Retriever puppy being gently held by its owner in a meadow.', 'title': 'Grooming a puppy', 'href': '/puppy-grooming/'},
        {'src': '{{IMG:35}}', 'alt': 'A relaxed dog with its eyes closed being gently stroked under the chin.', 'title': 'Grooming an older dog', 'href': '/senior-dog-grooming/'},
        {'src': '{{IMG:34}}', 'alt': 'A dog lying on a wooden floor, peeking out from behind a sofa and curtain.', 'title': 'A dog who hates grooming', 'href': '/grooming-an-anxious-dog/'},
        {'src': '{{IMG:PROBLEMS}}', 'alt': '', 'title': 'Something wrong after grooming?', 'href': '/dog-grooming-problems/'},
    ]
    data = json.dumps(items, ensure_ascii=False).replace("'", '&#39;')
    return f"<div class=\"gd-cc\" data-gd-carousel='{data}'></div>"


def task_tiles():
    items = [('bath', '/bathing-your-dog/', 'Bathing'), ('brush', '/brushing-your-dog/', 'Brushing'),
             ('scissors', '/dog-haircuts-and-trimming/', 'Haircuts and trimming'), ('nails', '/trimming-dog-nails/', 'Nails'),
             ('ears', '/cleaning-dog-ears/', 'Ears'), ('teeth', '/brushing-dog-teeth/', 'Teeth')]
    tiles = ''.join(f'<li><a class="gd-tile" href="{u}">{ico(i)}<span>{t}</span></a></li>' for i, u, t in items)
    return f'<ul class="gd-grid6 gd-anim-group">{tiles}</ul>'


def pro_cards():
    items = [('clipboard', '/choosing-a-dog-groomer/', 'Choosing a groomer', 'What to ask, what to look for, and what to do if something goes wrong.'),
             ('tag', '/dog-grooming-cost/', 'What grooming costs', 'Example US prices, and what makes a quote higher or lower.')]
    cards = ''.join(f'<a class="gd-icard" href="{u}">{ico(i)}<strong>{t}</strong><span>{d}</span></a>' for i, u, t, d in items)
    return f'<div class="gd-grid2 gd-anim-group">{cards}</div>'


def trust():
    pts = [('shield', '<strong>Sourced.</strong> Health and safety statements in our guides are checked against named sources, such as veterinary and animal-welfare organizations, and the sources are listed on each guide.'),
           ('vet', '<strong>Your vet comes first.</strong> We help you recognize when something may be wrong and send you to your vet. We don\'t diagnose or recommend treatments.'),
           ('pencil', '<strong>Corrections welcome.</strong> Spotted a mistake? <a href="/contact/">Send a correction</a>.')]
    li = ''.join(f'<li>{ico(i)}<p>{t}</p></li>' for i, t in pts)
    return (f'<ul class="gd-trust gd-anim-group">{li}</ul>'
            '<p class="gd-trust-more"><a href="/editorial-policy/">How our guides are written and funded</a></p>'
            '<ul class="gd-chips">'
            '<li><a href="/dog-grooming-tools/"><strong>Tools</strong>: The tools you actually need, matched to your dog\'s coat.</a></li>'
            '<li><a href="/dog-grooming-glossary/">New to grooming words? See the grooming glossary.</a></li></ul>')
