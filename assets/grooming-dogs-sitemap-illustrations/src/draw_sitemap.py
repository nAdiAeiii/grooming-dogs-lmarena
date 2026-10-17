"""Hand-drawn sitemap of grooming-dogs.com in the Ian Xiaohei illustration style
(.claude/skills/ian-xiaohei-illustrations): white page, wobbly black line art, a few red/orange/blue notes,
Xiaohei doing the core action. Metaphor: the header menu is a giant grooming comb Xiaohei drags through a coat;
each tooth combs out one strand (a menu section) and its hairs end in the pages. Problems after grooming is a mat.

Writes 01-site-comb-map.svg next to this folder. Render to PNG with render.cjs.
python3 assets/grooming-dogs-sitemap-illustrations/src/draw_sitemap.py
"""
import math
import random
from pathlib import Path

random.seed(7)
W, H = 1600, 900
OUT = Path(__file__).resolve().parents[1] / "01-site-comb-map.svg"
INK, RED, ORANGE, BLUE = "#1a1a1a", "#d8402f", "#ec8a1c", "#2f6fd6"

# The live menu (Start here / Grooming tasks / Your dog / Tools & groomers) plus the footer-only About group.
GROUPS = [
    ("Start here", ["Full grooming routine", "Dog coat types", "Grooming schedule", "Glossary"]),
    ("Grooming tasks", ["Bathing", "Brushing", "Haircuts & trimming", "Nail trimming", "Ear cleaning", "Teeth brushing"]),
    ("Your dog", ["Puppy grooming", "Anxious dogs", "Senior dogs", "Problems after grooming"]),
    ("Tools & groomers", ["Grooming tools", "Choosing a groomer", "Grooming cost"]),
    ("About", ["About", "Editorial policy", "Contact", "Privacy policy"]),
]

parts = []


def wob(points, amp=1.6):
    """Polyline through points with small hand tremor, as a smooth path."""
    pts = []
    for (x0, y0), (x1, y1) in zip(points, points[1:]):
        n = max(2, int(math.hypot(x1 - x0, y1 - y0) / 18))
        for i in range(n):
            t = i / n
            pts.append((x0 + (x1 - x0) * t + random.uniform(-amp, amp), y0 + (y1 - y0) * t + random.uniform(-amp, amp)))
    pts.append(points[-1])
    d = f"M{pts[0][0]:.1f},{pts[0][1]:.1f}"
    for (xa, ya), (xb, yb) in zip(pts, pts[1:]):
        d += f" Q{xa:.1f},{ya:.1f} {(xa + xb) / 2:.1f},{(ya + yb) / 2:.1f}"
    return d + f" L{pts[-1][0]:.1f},{pts[-1][1]:.1f}"


def line(points, color=INK, w=2.2, amp=1.6, extra=""):
    parts.append(f'<path d="{wob(points, amp)}" fill="none" stroke="{color}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round" {extra}/>')


def text(x, y, s, size=24, color=INK, anchor="start", rot=0, weight=500):
    tr = f' transform="rotate({rot} {x} {y})"' if rot else ""
    parts.append(f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" text-anchor="{anchor}" font-weight="{weight}"{tr}>{s.replace("&", "&amp;")}</text>')


def hair(x0, y0, x1, y1, sway=14, color=INK, w=1.6):
    """A loose hanging hair from (x0,y0) to (x1,y1)."""
    pts, n = [], 7
    for i in range(n + 1):
        t = i / n
        pts.append((x0 + (x1 - x0) * t + math.sin(t * math.pi * 1.6) * sway * (1 - t * 0.4), y0 + (y1 - y0) * t))
    line(pts, color, w, 0.9)


# ---------- the coat above the comb: loose wavy hairs flowing into the teeth ----------
for k in range(26):
    x = 330 + k * 42 + random.uniform(-8, 8)
    top = 52 + random.uniform(0, 34)
    hair(x - 30, top, x, 150, sway=9, w=1.3)

# ---------- the comb (the header menu) ----------
CX0, CX1, CY = 300, 1450, 150
line([(CX0, CY), (CX1, CY), (CX1 + 8, CY + 26), (CX1, CY + 52), (CX0, CY + 52), (CX0 - 8, CY + 26), (CX0, CY)], w=3)
text((CX0 + CX1) / 2, CY + 36, "grooming-dogs.com  ·  the menu on every page", 26, INK, "middle", weight=600)
# handle Xiaohei holds
line([(CX0 - 6, CY + 18), (190, CY + 30), (186, CY + 44), (CX0 - 6, CY + 36)], w=3)

COLS = [395, 640, 905, 1150, 1385]
TOOTH_Y0, TOOTH_Y1 = CY + 52, CY + 150
for gi, (gx, (name, pages)) in enumerate(zip(COLS, GROUPS)):
    about = name == "About"
    col = INK
    # tooth
    line([(gx - 13, TOOTH_Y0), (gx - 9, TOOTH_Y1), (gx, TOOTH_Y1 + 10), (gx + 9, TOOTH_Y1), (gx + 13, TOOTH_Y0)], w=2.6)
    text(gx, TOOTH_Y1 + 46, name, 30, col, "middle", weight=700)
    # the strand combed out by this tooth falls down its left side; one hair peels off to each page
    root_y = TOOTH_Y1 + 62
    sx = gx - 78
    for pi, page in enumerate(pages):
        ly = root_y + 52 + pi * 52
        line([(gx + random.uniform(-3, 3), root_y), (gx - 30, root_y + 14), (sx + random.uniform(-2, 2), root_y + 40),
              (sx - 4 + random.uniform(-3, 3), (root_y + 40 + ly) / 2), (sx + 4, ly - 14), (sx + 16, ly - 7)], INK, 1.5, 1.1)
        lx = sx + 24
        if page == "Problems after grooming":
            # the mat: a scribbled red knot where the hair should end cleanly
            kx, ky = lx + 4, ly - 7
            pts = [(kx + (17 + 5 * math.sin(i * 1.7)) * math.cos(i * 0.62), ky + (11 + 4 * math.cos(i * 1.3)) * math.sin(i * 0.62)) for i in range(46)]
            line(pts, RED, 2.2, 1.4)
            MAT = (kx, ky)
            text(lx + 30, ly, page, 23, INK)
        else:
            parts.append(f'<circle cx="{lx - 2:.1f}" cy="{ly - 7:.1f}" r="3" fill="{INK}"/>')
            text(lx + 8, ly, page, 23, INK)

# small unlabeled teeth between the section teeth, so it reads as a comb
for x in range(CX0 + 40, CX1 - 20, 34):
    if all(abs(x - c) > 30 for c in COLS):
        line([(x - 5, TOOTH_Y0), (x - 3, TOOTH_Y0 + 58), (x, TOOTH_Y0 + 64), (x + 3, TOOTH_Y0 + 58), (x + 5, TOOTH_Y0)], w=1.8, amp=0.8)

# ---------- Xiaohei: braced, dragging the comb through the coat ----------
bx, by = 128, 196
parts.append(f'<path d="{wob([(bx - 34, by + 52), (bx - 40, by + 8), (bx - 26, by - 36), (bx + 4, by - 50), (bx + 34, by - 34), (bx + 44, by + 6), (bx + 36, by + 52), (bx - 34, by + 52)], 1.4)}" fill="{INK}" stroke="{INK}" stroke-width="2"/>')
for ex in (bx + 6, bx + 26):
    parts.append(f'<circle cx="{ex}" cy="{by - 18}" r="5" fill="#fff"/>')
line([(bx + 34, by - 4), (166, CY + 34), (186, CY + 37)], w=2.4)       # arm on the handle
line([(bx + 30, by + 14), (170, CY + 44), (188, CY + 42)], w=2.4)      # other arm
line([(bx - 18, by + 52), (bx - 38, by + 96), (bx - 52, by + 98)], w=2.4)  # back leg, braced
line([(bx + 18, by + 52), (bx + 24, by + 98), (bx + 36, by + 100)], w=2.4)
for dx in (-62, -48, -34):                                              # dust where the foot digs in
    line([(bx + dx, by + 106), (bx + dx - 10, by + 112)], w=1.4, amp=0.5)

# ---------- notes (orange = path, red = attention, blue = system) ----------
line([(150, 100), (205, 78), (262, 92)], ORANGE, 2.6, 1)
line([(150, 100), (162, 88)], ORANGE, 2.6, 0.6); line([(150, 100), (166, 104)], ORANGE, 2.6, 0.6)
text(214, 66, "pulls the whole site along", 24, ORANGE, "middle", rot=-4)

# search: any page is one jump from the homepage
text(70, 560, "search reaches", 26, ORANGE)
text(70, 592, "any page straight", 26, ORANGE)
text(70, 624, "from the homepage", 26, ORANGE)
line([(150, 538), (186, 430), (262, CY + 62)], ORANGE, 2.6, 1.2)
line([(262, CY + 62), (246, CY + 80)], ORANGE, 2.6, 0.5); line([(262, CY + 62), (268, CY + 84)], ORANGE, 2.6, 0.5)

text(MAT[0] + 70, MAT[1] + 96, "a mat: when grooming goes wrong", 24, RED, rot=-3)
line([(MAT[0] + 120, MAT[1] + 76), (MAT[0] + 60, MAT[1] + 46), (MAT[0] + 14, MAT[1] + 18)], RED, 2.2, 1)

text(1385 + 70, TOOTH_Y1 + 46, "(footer only)", 22, RED)
text(1452, 112, "22 pages", 24, BLUE, "middle", rot=4)

svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">'
       '<style>@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&amp;display=swap");'
       'text{font-family:Caveat,"Comic Sans MS",cursive}</style>'
       f'<rect width="{W}" height="{H}" fill="#ffffff"/>' + "".join(parts) + "</svg>")
OUT.write_text(svg, encoding="utf-8")
print("wrote", OUT)
