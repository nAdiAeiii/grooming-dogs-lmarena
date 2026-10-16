"""Generate the Grooming Dogs Elementor kit settings from DS-OD-01..06 (owner decisions 2026-10-05).
DS-OD-06: palette B "Copper & Espresso", Literata (reading + headings) and Source Sans 3 (UI)."""
import json

F = 'Literata'          # headings and running text (DS-OD-06)
UI = 'Source Sans 3'    # small text, captions, buttons, navigation (DS-OD-06)

def px(v): return {"unit": "px", "size": v, "sizes": []}
def em(v): return {"unit": "em", "size": v, "sizes": []}

def typo(title, _id, weight, d, t, m, lh, lh_m=None, fam=F):
    o = {"_id": _id, "title": title, "typography_typography": "custom",
         "typography_font_family": fam, "typography_font_weight": str(weight),
         "typography_font_size": px(d), "typography_line_height": em(lh)}
    if t is not None: o["typography_font_size_tablet"] = px(t)
    if m is not None: o["typography_font_size_mobile"] = px(m)
    if lh_m is not None: o["typography_line_height_mobile"] = em(lh_m)
    return o

system_colors = [
    {"_id": "primary", "title": "Brand", "color": "#3A2318"},
    {"_id": "secondary", "title": "Text Muted", "color": "#6B5E55"},
    {"_id": "text", "title": "Text", "color": "#2B2420"},
    {"_id": "accent", "title": "Action", "color": "#A84A24"},
]
custom_colors = [
    {"_id": "gdbrandd", "title": "Brand Dark", "color": "#28170F"},
    {"_id": "gdsurf", "title": "Surface", "color": "#FFFCF7"},
    {"_id": "gdsurfs", "title": "Surface Soft", "color": "#F7EFE4"},
    {"_id": "gdsurfw", "title": "Surface Warm", "color": "#FBE7CF"},
    {"_id": "gdborder", "title": "Border", "color": "#E6D8C8"},
    {"_id": "gdlink", "title": "Link", "color": "#A84A24"},
    {"_id": "gdlinkh", "title": "Link Hover", "color": "#8A3A1A"},
    {"_id": "gdacth", "title": "Action Hover", "color": "#8A3A1A"},
    {"_id": "gdfocus", "title": "Focus", "color": "#A84A24"},
    {"_id": "gdsucc", "title": "Success", "color": "#2F6B45"},
    {"_id": "gdwarn", "title": "Warning", "color": "#8A5A00"},
    {"_id": "gderr", "title": "Error", "color": "#A33A32"},
    {"_id": "gdshine", "title": "Shine (decorative only)", "color": "#E3A33B"},
]
system_typography = [
    typo("H1", "primary", 700, 48, 40, 34, 1.15),
    typo("Lead", "secondary", 400, 19, None, 18, 1.55),
    typo("Body", "text", 400, 17, None, 16, 1.6),
    typo("Small", "accent", 400, 14, None, None, 1.5, fam=UI),
]
custom_typography = [
    typo("H2", "gdh2", 700, 32, 29, 26, 1.2),
    typo("H3", "gdh3", 700, 24, None, 21, 1.25),
]

s = {
    "system_colors": system_colors,
    "custom_colors": custom_colors,
    "system_typography": system_typography,
    "custom_typography": custom_typography,
    "default_generic_fonts": "Georgia, \"Times New Roman\", serif",
    # Body
    "body_background_background": "classic",
    "body_background_color": "#FFFCF7",
    "body_color": "#2B2420",
    "body_typography_typography": "custom",
    "body_typography_font_family": F,
    "body_typography_font_weight": "400",
    "body_typography_font_size": px(17),
    "body_typography_font_size_mobile": px(16),
    "body_typography_line_height": em(1.6),
    "paragraph_spacing": px(16),
    # Links
    "link_normal_color": "#A84A24",
    "link_hover_color": "#8A3A1A",
    # Buttons (primary)
    "button_typography_typography": "custom",
    "button_typography_font_family": UI,
    "button_typography_font_weight": "600",
    "button_typography_font_size": px(16),
    "button_text_color": "#FFFCF7",
    "button_background_background": "classic",
    "button_background_color": "#A84A24",
    "button_hover_text_color": "#FFFCF7",
    "button_hover_background_background": "classic",
    "button_hover_background_color": "#8A3A1A",
    "button_border_radius": {"unit": "px", "top": "6", "right": "6", "bottom": "6", "left": "6", "isLinked": True},
    "button_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32", "isLinked": False},
    # Layout
    "container_width": px(1200),
    "space_between_widgets": {"unit": "px", "size": 16, "column": "16", "row": "16", "isLinked": True},
    "page_title_selector": "h1.entry-title",
    # Global references so future token changes propagate
    "__globals__": {
        "body_color": "globals/colors?id=text",
        "body_typography_typography": "globals/typography?id=text",
        "link_normal_color": "globals/colors?id=gdlink",
        "link_hover_color": "globals/colors?id=gdlinkh",
        "body_background_color": "globals/colors?id=gdsurf",
        "button_text_color": "globals/colors?id=gdsurf",
        "button_background_color": "globals/colors?id=accent",
        "button_hover_text_color": "globals/colors?id=gdsurf",
        "button_hover_background_color": "globals/colors?id=gdacth",
        "h1_color": "globals/colors?id=primary",
        "h2_color": "globals/colors?id=primary",
        "h3_color": "globals/colors?id=primary",
        "h1_typography_typography": "globals/typography?id=primary",
        "h2_typography_typography": "globals/typography?id=gdh2",
        "h3_typography_typography": "globals/typography?id=gdh3",
    },
    "h1_color": "#3A2318", "h2_color": "#3A2318", "h3_color": "#3A2318",
}
json.dump(s, open(__file__.replace('make_kit.py', 'kit-settings.json'), 'w'), indent=1)
print('colors', len(system_colors) + len(custom_colors), 'typography', len(system_typography) + len(custom_typography))
