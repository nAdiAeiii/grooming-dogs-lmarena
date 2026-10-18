"""Illustration card for "Something wrong after grooming?" (no verified photo exists: lead-problems FAILED V-4).
DS-OD-06 tokens only: soft sand ground, espresso line magnifier, honey dot. Not a photo, so it can't be mistaken for one."""
import os
from PIL import Image, ImageDraw

D = os.path.dirname(os.path.abspath(__file__))
S, K = 900, 4
W = S * K
SOFT, ESP, HONEY, WARM = (247, 239, 228), (58, 35, 24), (227, 163, 59), (251, 231, 207)
im = Image.new('RGB', (W, W), SOFT)
d = ImageDraw.Draw(im)
d.ellipse([W * .18, W * .18, W * .82, W * .82], fill=WARM)               # soft halo
cx, cy, r = W * .45, W * .45, W * .2                                      # magnifier lens
lw = int(W * .035)
d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=ESP, width=lw)
import math
a = math.radians(45)
x1, y1 = cx + r * math.cos(a) * 1.02, cy + r * math.sin(a) * 1.02
x2, y2 = cx + r * 2.0 * math.cos(a), cy + r * 2.0 * math.sin(a)
d.line([x1, y1, x2, y2], fill=ESP, width=int(lw * 1.5))
d.ellipse([x2 - lw * .75, y2 - lw * .75, x2 + lw * .75, y2 + lw * .75], fill=ESP)  # rounded handle end
hr = W * .055
d.ellipse([cx - hr, cy - hr, cx + hr, cy + hr], fill=HONEY)              # the spot being checked
im = im.resize((S, S), Image.LANCZOS)
out = os.path.join(D, 'situation-problems-illustration.png')
im.save(out, optimize=True)
print(out, os.path.getsize(out), 'bytes')
