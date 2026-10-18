"""Build data.js: the coat sheet, the grooming plate and the menu lines, all quoted from the published
build records (BUILD/out). Run from the repo root: python3 prototype/editorial-hybrid/tools/build_data.py"""
import html, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "BUILD" / "out"
DEST = Path(__file__).resolve().parents[1] / "data.js"

def seq(pid):
    d = json.loads((OUT / f"{pid}.json").read_text(encoding="utf-8")); out = []
    def walk(els):
        for e in els:
            st = e.get("settings", {}); w = e.get("widgetType")
            if w == "heading": out.append(("h" + str(st.get("header_size", "h2"))[-1], re.sub("<[^>]+>", "", st.get("title", "")), st.get("_element_id", "")))
            elif w == "text-editor": out.append(("t", st.get("editor", ""), ""))
            walk(e.get("elements", []))
    walk(d if isinstance(d, list) else d.get("content", []))
    return out

def clean(h):
    h = re.sub(r"<sup>.*?</sup>", "", h, flags=re.S)
    t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", h))).strip()
    return re.sub(r"\(\s+", "(", re.sub(r"\s+([;,.:)!?])", r"\1", t))

def under(pid, h2):
    """{h3 title: [paragraph texts]} for the h3s under one h2."""
    res, on, cur = {}, False, None
    for k, v, _ in seq(pid):
        if k == "h2": on = (v == h2); cur = None
        elif on and k == "h3": cur = v; res[cur] = []
        elif on and k == "t" and cur: res[cur].append(clean(v))
    return res

def field(paras, label):
    for p in paras:
        for part in re.split(r"(?=(?:What it does|What they do|Suits|Limitation|What it looks like|What it needs|Shaving|Not for|Are they safe\?):)", p):
            if part.startswith(label + ":"): return part[len(label) + 1:].strip()
    return ""

content = {}
exec(compile("window={}\n", "x", "exec"))
js = (ROOT / "prototype/editorial-hybrid/content.js").read_text(encoding="utf-8")
pages = json.loads(js[js.index("=") + 1:].strip().rstrip(";"))
BY = {p["pid"]: p for p in pages}
def table(pid, section): return next(t for t in BY[pid]["tables"] if t["section"] == section)

# ---- coats: GD-03 (looks, needs, breeds), GD-02 (schedule), GD-05 (technique), GD-10 (starter kit) ----
five = under("GD-03", "The five coat types")
tech = under("GD-05", "Brushing different coat types")
ident = {r[1]: r[0] for r in table("GD-03", "how-to-identify-your-dogs-coat")["rows"]}
sched = table("GD-02", "the-grooming-schedule-by-coat-type")["rows"]
kits = {r[0]: r for r in table("GD-10", "starter-kits-by-coat-type")["rows"]}
breeds = {r[0]: r[1] for r in table("GD-03", "common-breeds-by-coat-type")["rows"]}
COAT_IDS = [("smooth", "Short and smooth", "coat-smooth"), ("wiry", "Wiry", "coat-wire"), ("double", "Double", "coat-double"), ("silky", "Long and silky", "coat-silky"), ("curly", "Curly", "coat-curly")]
# Starting tools per coat, from GD-10 "Starter kits by coat type" ("rubber-bristled brush" is matched to the rubber curry entry).
FIT = {"smooth": ["curry", "bristle"], "wiry": ["curry", "comb"], "double": ["rake", "deshed", "slicker", "comb", "widecomb"], "silky": ["slicker", "curry", "comb", "pin"], "curly": ["slicker", "curry", "comb"]}
coats = []
for (cid, name, photo), row in zip(COAT_IDS, sched):
    paras = five[name]
    coats.append({"id": cid, "name": name, "photo": photo, "feel": ident[name], "looks": field(paras, "What it looks like"),
                  "needs": field(paras, "What it needs"), "shaving": field(paras, "Shaving"), "breeds": breeds[name],
                  "brushing": row[1], "bathing": row[2], "groomer": row[3], "technique": " ".join(tech[name]),
                  "kit": kits[name][1], "extras": kits[name][2], "fit": FIT[cid]})

# ---- the grooming plate: six jobs, four tools each, every line quoted from GD-10 (and the GD-07 nail table) ----
brushes = under("GD-10", "Brushes and combs")
def b(name): return brushes[name]
paras = [clean(v) for k, v, _ in seq("GD-10") if k == "t"]
def para(start): return next(x for x in paras if x.startswith(start))
desh = {lbl: field([para("What they do")] + [para("Are they safe?"), para("Not for")], lbl) for lbl in ["What they do", "Are they safe?", "Not for"]}
nails = table("GD-10", "nail-tools")["rows"]
def T(id, task, name, does, good, watch, sec):
    return {"id": id, "task": task, "name": name, "does": does, "good": good, "watch": watch, "section": sec}
tools = [
  T("slicker", "brushes", "Slicker brush", field(b("Slicker brush"), "What it does"), field(b("Slicker brush"), "Suits"), field(b("Slicker brush"), "Limitation"), "brushes-and-combs"),
  T("pin", "brushes", "Pin brush", field(b("Pin brush"), "What it does"), field(b("Pin brush"), "Suits"), field(b("Pin brush"), "Limitation"), "brushes-and-combs"),
  T("bristle", "brushes", "Bristle brush", field(b("Bristle brush"), "What it does"), field(b("Bristle brush"), "Suits"), field(b("Bristle brush"), "Limitation"), "brushes-and-combs"),
  T("curry", "brushes", "Rubber curry brush", field(b("Rubber curry brush"), "What it does"), field(b("Rubber curry brush"), "Suits"), field(b("Rubber curry brush"), "Limitation"), "brushes-and-combs"),
  T("comb", "combs", "Steel comb", "Lets you check your brushing has reached the skin, finish the coat and remove debris.", field(b("Comb"), "Suits"), field(b("Comb"), "Limitation"), "brushes-and-combs"),
  T("widecomb", "combs", "Wide-toothed comb", "A wide-toothed steel comb helps work gently through tangles.", "Optional extra for double coats, for tangles (starter kits).", field(b("Comb"), "Limitation"), "brushes-and-combs"),
  T("rake", "combs", "Undercoat rake", field(b("Undercoat rake"), "What it does"), field(b("Undercoat rake"), "Suits"), field(b("Undercoat rake"), "Limitation"), "brushes-and-combs"),
  T("deshed", "combs", "De-shedding tool", desh["What they do"], "", "Use light pressure. Stop if the skin looks red or your dog seems uncomfortable. Not for " + desh["Not for"].split(". ")[0] + ".", "de-shedding-tools"),
  T("clipper", "nails", nails[0][0], nails[0][1], nails[0][2], nails[0][3], "nail-tools"),
  T("guillotine", "nails", nails[1][0], nails[1][1], nails[1][2], nails[1][3], "nail-tools"),
  T("grinder", "nails", nails[2][0], nails[2][1], nails[2][2], nails[2][3], "nail-tools"),
  T("styptic", "nails", nails[3][0], nails[3][1], nails[3][2], "", "nail-tools"),
  T("shampoo", "bathing", "Dog shampoo", "Shampoo made for dogs.", "", "Human hair products aren't designed for pets, and dog care organizations recommend dog-specific products.", "bathing-and-drying-equipment"),
  T("towel", "bathing", "Microfiber towel", "A towel. A microfiber towel absorbs well.", "Many dogs dry well enough with towels and a warm room.", "A coat left damp is one of the grooming factors behind problems after grooming.", "bathing-and-drying-equipment"),
  T("mat", "bathing", "Non-slip mat", "A non-slip mat for the tub or shower, so your dog feels steady.", "Every bath in a tub or shower.", "", "bathing-and-drying-equipment"),
  T("dryer", "bathing", "Dryer", "A dryer is optional.", "Dryers made for dogs are used for some coat types.", "Choose a cool or low setting. Hot settings can burn a dog's skin.", "bathing-and-drying-equipment"),
  T("earclean", "earsteeth", "Ear-cleaning solution", "A dog ear-cleaning solution, ideally one your vet recommends.", "Cleaning when you can see dirt or wax build-up.", "No hydrogen peroxide. The American Kennel Club advises against using it in dogs' ears.", "ear-and-dental-supplies"),
  T("cotton", "earsteeth", "Cotton balls or gauze", "Real cotton balls or gauze.", "Wiping the parts of the ear you can see.", "No cotton swabs or pointed tools. They can push debris deeper and injure the ear.", "ear-and-dental-supplies"),
  T("toothbrush", "earsteeth", "Soft toothbrush", "A soft-bristled toothbrush.", "Many owners start with a finger before moving to a brush.", "Not needed: dental scrapers or scaling tools. Hardened tartar is a job for your vet.", "ear-and-dental-supplies"),
  T("toothpaste", "earsteeth", "Pet toothpaste", "A toothpaste made for pets, without added fluoride.", "Every day is ideal. A few times a week still helps.", "Never human toothpaste.", "ear-and-dental-supplies"),
  T("scissors", "trims", "Blunt-ended scissors", "Blunt-ended (round-tip) scissors for home trims.", "Trims around the face, feet and sanitary area.", "Pointed grooming shears are a professional's tool.", "clippers-blades-and-scissors"),
  T("clippers", "trims", "Small clippers", "For home tidy-ups, choose small clippers with guide combs.", "Clippers that feel comfortable in your hand.", "Clipper blades can get hot during use. Check them often.", "clippers-blades-and-scissors"),
  T("guidecomb", "trims", "Guide combs", "Guide combs clip onto the blade to control how long the hair is left.", "Home tidy-ups with small clippers.", "Never use a damaged or broken blade or comb, because it can injure the skin.", "clippers-blades-and-scissors"),
  T("blade", "trims", "Detachable blades", "Detachable blades let you swap in a cool blade if one gets hot.", "", "Don't buy clippers or scissors to deal with tight mats yourself. That's a job for a groomer.", "clippers-blades-and-scissors"),
]
assert all(t["does"] for t in tools), [t["id"] for t in tools if not t["does"]]

menu_line = {pid: (BY[pid].get("short") or [BY[pid]["meta"]])[0] for pid in ["GD-04", "GD-05", "GD-06", "GD-07", "GD-08", "GD-09", "GD-11", "GD-12", "GD-13", "GD-14", "GD-10", "GD-15", "GD-16"]}

DEST.write_text("/* GENERATED by tools/build_data.py from BUILD/out (the published build records). Do not edit. */\n"
                "window.GD_DATA = " + json.dumps({"coats": coats, "tools": tools, "menuLine": menu_line}, ensure_ascii=False, indent=1) + ";\n"
                "window.GD_PHOTOS = " + json.dumps(json.loads((Path(__file__).resolve().parents[1] / "assets/photos.json").read_text(encoding="utf-8")), ensure_ascii=False) + ";\n", encoding="utf-8")
print(len(coats), "coats", len(tools), "tools")
for t in tools: print(" ", t["task"], t["id"], "|", t["does"][:45], "|", t["good"][:30], "|", t["watch"][:30])
for c in coats: print(" ", c["id"], "|", c["looks"][:50], "|", c["needs"][:40], "|", c["technique"][:30])
