"""Site Icon candidates from DS-OD-06 tokens only (espresso #3A2318, cream #FFFCF7, honey #E3A33B decorative)
and the brand typeface Literata. Renders 512px masters plus a 32px / 16px preview sheet."""
import os
from PIL import Image, ImageDraw, ImageFont

D = os.path.dirname(os.path.abspath(__file__))
ESP, CREAM, HONEY = (58, 35, 24), (255, 252, 247), (227, 163, 59)
S = 512 * 4  # supersample


def font(px):
    f = ImageFont.truetype(os.path.join(D, 'Literata.ttf'), px)
    f.set_variation_by_name('Bold')
    return f


def base(radius):
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(im).rounded_rectangle([0, 0, S - 1, S - 1], radius=radius, fill=ESP)
    return im


def centered_text(im, text, px, dy=0, fill=CREAM):
    d = ImageDraw.Draw(im); f = font(px)
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    d.text(((S - (r - l)) / 2 - l, (S - (b - t)) / 2 - t + dy), text, font=f, fill=fill)
    return (S - (r - l)) / 2, (S - (b - t)) / 2 + dy, r - l, b - t


def a():  # A: "G" + honey dot (like the wordmark's dot)
    im = base(S * 0.18)
    x, y, w, h = centered_text(im, 'G', int(S * 0.62), dy=-int(S * 0.01))
    r = S * 0.06
    cx, cy = x + w + r * 0.2, y + h - r * 1.1
    ImageDraw.Draw(im).ellipse([cx - r, cy - r, cx + r, cy + r], fill=HONEY)
    return im


def b():  # B: honey dot only (the wordmark dot), large
    im = base(S * 0.18)
    r = S * 0.2
    ImageDraw.Draw(im).ellipse([S / 2 - r, S / 2 - r, S / 2 + r, S / 2 + r], fill=HONEY)
    return im


def c():  # C: "GD" monogram
    im = base(S * 0.18)
    centered_text(im, 'GD', int(S * 0.46), dy=-int(S * 0.01))
    return im


variants = {'A': ('G + honey dot', a()), 'B': ('Honey dot', b()), 'C': ('GD monogram', c())}
sheet = Image.new('RGB', (3 * 300 + 40, 420), CREAM)
d = ImageDraw.Draw(sheet)
lab = ImageFont.truetype('arial.ttf', 18) if os.path.exists(r'C:\Windows\Fonts\arial.ttf') else ImageFont.load_default()
for i, (k, (name, im)) in enumerate(variants.items()):
    big = im.resize((512, 512), Image.LANCZOS)
    big.save(os.path.join(D, f'site-icon-{k}-512.png'))
    x0 = 20 + i * 300
    sheet.paste(im.resize((200, 200), Image.LANCZOS), (x0 + 30, 20), im.resize((200, 200), Image.LANCZOS))
    for j, px in enumerate((64, 32, 16)):
        small = im.resize((px, px), Image.LANCZOS)
        sheet.paste(small, (x0 + 30 + j * 80, 250 + (64 - px) // 2), small)
    d.text((x0 + 30, 340), f'{k}: {name}', fill=ESP, font=lab)
    d.text((x0 + 30, 366), '200 / 64 / 32 / 16 px', fill=(107, 94, 85), font=lab)
sheet.save(os.path.join(D, 'site-icon-preview.png'))
print('written:', sorted(f for f in os.listdir(D) if f.endswith('.png')))
