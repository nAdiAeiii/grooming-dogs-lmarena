# GD-17 — Production Record: Dog grooming glossary

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-17
**Upstream records:** `PRODUCTION/GD-01` … `GD-16`. Upstream pages that link here: GD-03 (Next card: "Undercoat, guard hairs and other terms explained") and GD-06 ("grooming glossary"). Both pointers resolve to entries below.
**Architecture:** final validated architecture
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-17 |
| Canonical title | Dog grooming glossary |
| Canonical URL | `https://grooming-dogs.com/dog-grooming-glossary/` |
| Page type | WordPress Page (top level; linked from the footer and contextually) |
| Funnel role | Reference |
| Byline | Grooming Dogs. No expert review needed (spec §O). |
| Commercial class | **EDITORIAL ONLY.** No affiliate links, no products, no brands. Ads only between theme groups (PC-07). |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

**Structure source (spec §E–§H, §L, §P):**
- H1 "Dog grooming glossary".
- **One H2 per theme group (6)**, in the spec's order: coat and hair; brushing and de-matting; bathing and drying; cuts, trims and blades; nails, ears and teeth; at the groomer.
- **No H3s:** terms are styled definition entries with **anchor IDs** (PC-02).
- **No FAQ** (PC-05).
- **No images** (§L).
- **Schema:** Article only.
- Short answer, theme jump links, then Next and Disclaimer.
- The optional A–Z jump bar is **not used**: theme jump links are enough for about 50 entries, and that keeps the interface simple.

---

## B. Role and Ownership

**Purpose:** short, plain definitions of grooming terms met on this site or at a groomer. Each definition links to the page that owns the topic. **It adds no guidance, frequencies, prices or health explanations** (spec §B, §C, §J V-5).

**Owns:** "What does [term] mean?"

**Delegated (everything beyond the definition):**

| Term family | Owner |
|---|---|
| Coat terms; hand stripping; shaving a double coat | GD-03 |
| Tangles, mats, brushing methods; shedding control | GD-05 |
| Bathing, rinsing, drying | GD-04 |
| Cut names; sanitary, paw and face trims; clippers, blades, guide combs, scissors | GD-06 |
| The quick; dewclaws; grinders; styptic powder | GD-07 |
| Ear flap, ear canal, ear cleaners, plucking | GD-08 |
| Plaque, tartar, VOHC, pet toothpaste | GD-09 |
| Which brush, comb or clipper to buy | GD-10 |
| "Tidy", full groom, bath and brush, mobile, self-wash, cage dryers | GD-15 |
| Costs and fees | GD-16 (not defined here) |
| Fear and handling terms | GD-12 (defined in place there; see §G) |
| Symptoms | GD-14 (no health terms here; see §G) |

**Anti-cannibalization rules applied to every entry:**
1. 1–2 sentences.
2. No steps, numbers, frequencies or prices.
3. No "how to" (a definition may note one limit already stated by the owner page, e.g. "tight mats are a groomer's job").
4. One link, to the owner page (a deep anchor where one exists).

---

## C. Term Inventory

**Classes:**
- **INC** = INCLUDE
- **INC-Q** = INCLUDE WITH QUALIFICATION
- **X-DUP** = EXCLUDE (duplicates task page)
- **X-EV** = EXCLUDE (insufficient evidence)
- **X-COM** = EXCLUDE (commercial/brand)
- **X-SCOPE** = EXCLUDE (not relevant to launch scope / spec scope)

| Term | Group | Decision | Reason | Evidence | Destination |
|---|---|---|---|---|---|
| Coat type (five groups) | Coat | INC | Core site term | GD-03 | GD-03 |
| Double coat | Coat | INC | Used on GD-02, 03, 05, 06, 10 | G1, G3 | GD-03 |
| Undercoat | Coat | INC | GD-03 Next card promises it | G1, G3 | GD-03 |
| Guard hairs / topcoat | Coat | INC | GD-03 Next card promises it | G1, G3 | GD-03 |
| Wiry coat (wirehair) | Coat | INC | One of the five groups | G1; GD-03 | GD-03 |
| Feathering | Coat | INC | Used on GD-03 and GD-05 | G1, G2 | GD-03 |
| Furnishings | Coat | INC | Common groomer term | G1, G2 | GD-03 |
| Blowing coat | Coat | INC | Shedding term | G3 | GD-05 |
| Hand stripping | Coat | INC | Spec secondary intent (→ GD-03) | G4 | GD-03 |
| Carding | Coat | INC | Paired with hand stripping | G4 | GD-03 |
| Shaving (a double coat) | Coat | INC | GD-03 anchor topic | G3; GD-03 | GD-03 `#should-you-shave-a-double-coated-dog` |
| "In coat" / "out of coat" | Coat | **X-EV** | Spec secondary intent, but **no authoritative definition found** (AKC and UK KC glossaries have no entry). Show-ring usage only in forums. | — | — (exception I-1) |
| Hairless | Coat | X-SCOPE | Not one of the five locked groups; no sixth group | — | — |
| Single coat | Coat | X-EV | Only implied by GD-03 ("a single-layer coat"); no glossary-grade source | — | — |
| Tangle | Brushing | INC | GD-05 defines it | GD-05 | GD-05 |
| Mat / matting | Brushing | INC | Core term | GD-05; S-AMC | GD-05 `#dealing-with-mats` |
| De-matting | Brushing | INC | Salon menu term | GD-05; G7 | GD-05 `#dealing-with-mats` |
| Line brushing | Brushing | INC | GD-05 H2 term | GD-05 | GD-05 |
| Line combing | Brushing | INC | Groomer term | G3 | GD-05 |
| Slicker brush | Brushing | INC | Tool term | GD-10 | GD-10 |
| Pin brush | Brushing | INC | Tool term | GD-10 | GD-10 |
| Bristle brush | Brushing | INC | Tool term | GD-10 | GD-10 |
| Rubber curry brush | Brushing | INC | Tool term | GD-10 | GD-10 |
| Undercoat rake | Brushing | INC | Tool term | GD-10 | GD-10 |
| De-shedding tool | Brushing | INC | Tool term | GD-10 | GD-10 |
| Steel comb | Brushing | INC | Tool term | GD-10 | GD-10 |
| Dematting tools (splitters, etc.) | Brushing | X-DUP / X-SCOPE | GD-10 excluded them; GD-05 home boundary | — | — |
| Dog shampoo | Bathing | INC | Core term | GD-04 (AKC) | GD-04 |
| Spot cleaning / waterless shampoo | Bathing | INC | GD-04 term | GD-04 (AMC) | GD-04 |
| Blow-dry / blowout | Bathing | INC-Q | Salon menu term; wording varies | Provider menus (P2, P4, P5) | GD-04 |
| High-velocity dryer | Bathing | INC | Groomer and self-wash equipment | G3; P10 | GD-04 |
| Cage dryer | Bathing | INC | GD-15 warning-sign term | GD-15 (NYC Bar) | GD-15 |
| Clippers | Cuts | INC | Core term | GD-06 (Andis) | GD-06 |
| Blade number | Cuts | INC-Q | **No fixed blade-to-length rule** (known gap) | GD-06 (Andis, HW) | GD-06 |
| Guide comb (guard comb) | Cuts | INC | GD-06 and GD-10 term | GD-06 (Andis) | GD-06 |
| Blunt-ended (round-tip) scissors | Cuts | INC | GD-06 term | GD-06 (HW) | GD-06 |
| Sanitary trim | Cuts | INC-Q | Owner-page definition (HW); salon scope may differ | GD-06 (HW) | GD-06 |
| Paw pad trim | Cuts | INC | GD-06 term | GD-06 (HW) | GD-06 |
| Puppy cut | Cuts | **INC-Q** | **Not standardized**; definitions conflict (§F) | G5 | GD-06 |
| Teddy bear cut | Cuts | **INC-Q** | Not standardized; no authoritative definition | G5 (variation) | GD-06 |
| Kennel cut | Cuts | **INC-Q** | Spec secondary intent; not standardized | G5 (variation) | GD-06 |
| Lion cut, lamb cut, summer cut, continental and other breed clips | Cuts | X-EV / X-SCOPE | Not used on site pages; breed-styling; no stable owner-level definition | — | — |
| Shave-down (salon service) | Cuts | X-DUP | Covered by "shaving" (coat) and the GD-06/GD-15 shaved-vs-trim FAQ | — | — |
| The quick | Nails | INC | Spec secondary intent (→ GD-07) | GD-07 | GD-07 `#finding-the-quick` |
| Dewclaw | Nails | INC | GD-07 term | G1; GD-07 | GD-07 |
| Nail clippers (scissor/plier, guillotine) | Nails | INC | GD-10 terms | GD-10 | GD-10 |
| Nail grinder | Nails | INC | GD-07 term | GD-07 | GD-07 |
| Styptic powder | Nails | INC | GD-07 term (generic, no brand) | GD-07 | GD-07 |
| Ear flap (pinna, "leather") | Ears | INC | GD-08 and GD-14 term | G1; MSD (GD-14 S3) | GD-08 |
| Ear canal | Ears | INC | GD-08 term | GD-08 | GD-08 |
| Ear-cleaning solution | Ears | INC | GD-08 term | GD-08 | GD-08 |
| Ear plucking | Ears | INC-Q | Debated (GD-08 S6) | GD-08 | GD-08 |
| Otoscope | Ears | X-SCOPE | A vet instrument; not used on site pages | — | — |
| Plaque | Teeth | INC | GD-09 term | GD-09 (VOHC) | GD-09 |
| Tartar (calculus) | Teeth | INC | GD-09 term | G8 (MSD); GD-09 | GD-09 |
| VOHC seal | Teeth | INC | GD-09 term | GD-09 (VOHC) | GD-09 |
| Pet toothpaste | Teeth | INC | GD-09 term | GD-09 | GD-09 |
| Full groom | Groomer | INC-Q | Package contents vary | GD-15 (Vetstreet); P1–P8 | GD-15 |
| Bath and brush | Groomer | INC-Q | Package contents vary | P2, P3, P4 | GD-15 |
| Tidy (and similar menu names) | Groomer | **INC-Q** | Spec secondary intent (→ GD-15); varies by salon (§F) | P3, P8; Fluffy Paws; P2 | GD-15 |
| Mobile grooming | Groomer | INC | GD-15 term | GD-15 (Vetstreet) | GD-15 |
| Self-service wash | Groomer | INC | GD-15 term | GD-15; P10–P11 | GD-15 |
| Anal glands | Groomer | INC-Q | On menus; a vet-only job per owner pages | HW (GD-06 S1); Vetstreet (GD-15 S2) | GD-06 |
| "Starts at" price, dematting fee, travel fee | Groomer | X-SCOPE | Prices are out of scope (spec §C) | — | GD-16 (not linked from entries) |
| Desensitization, counterconditioning, flooding, muzzle training, cooperative handling | — | X-SCOPE | The six spec theme groups don't include behavior; GD-12 defines each term where it's used | — | GD-12 |
| Hot spot, post-clipping alopecia, ear infection, clipper burn | — | X-SCOPE | Spec §C: no health explanations; GD-14 owns symptoms | — | GD-14 |
| Brand names (grinder, styptic and shampoo brands) | — | X-COM | No brand entries | — | — |

**Counts:** 67 inventory rows.
- **Published: 56 entries** (45 INCLUDE, 11 INCLUDE WITH QUALIFICATION).
- **Excluded: 11 rows**, several of which group multiple terms.

---

## D. Final Glossary (page content)

> *[Square-bracketed italics]* are builder notes.
>
> `{#id}` is the entry's anchor ID.
>
> Evidence for each entry is in §E (codes are not shown on the page; the disclaimer carries the source line).

*[Breadcrumb: Home › Glossary]*

# Dog grooming glossary

*[Intent line]* Met a grooming word you don't know, on this site or at the groomer? Find it below. Each term links to the guide that covers it in full.

*[Byline]* By Grooming Dogs · Updated *[publish date]*

*[Short answer box]*
**Short answer:**
- **Find a term below:** they're grouped by theme, and each one links to the full guide.
- **Some salon words, especially cut names like "puppy cut" and menu names like "tidy", have no standard meaning.** Always confirm with your groomer what they'll actually do.

*[Jump links: Icon List with anchor links]* Coat and hair · Brushing and de-matting · Bathing and drying · Cuts, trims and blades · Nails, ears and teeth · At the groomer

---

## Coat and hair

*[Text Editor: definition entries, `<dl>` with each `<dt id>`]*

**Coat type** `{#coat-type}`. The kind of coat a dog has. This site sorts coats into five groups: short and smooth, wiry, double, long and silky, and curly. → [Dog coat types](/dog-coat-types/)

**Double coat** `{#double-coat}`. A coat with two layers: a weather-resistant outer coat of longer, coarser hairs, and a soft, dense undercoat beneath it. → [Dog coat types](/dog-coat-types/)

**Undercoat** `{#undercoat}`. The dense, soft, short layer of hair hidden beneath a longer outer coat. It's the layer that sheds most. → [Dog coat types](/dog-coat-types/)

**Guard hairs (topcoat)** `{#guard-hairs}`. The longer, stiffer outer hairs that grow through and normally hide the undercoat. Groomers also call this layer the topcoat or guard coat. → [Dog coat types](/dog-coat-types/)

**Wiry coat** `{#wiry-coat}`. A coat of hard, crisp, rough-feeling hair, typical of many terriers. Also called wirehair. → [Dog coat types](/dog-coat-types/)

**Feathering** `{#feathering}`. A longer fringe of hair on the ears, legs, tail or body. → [Dog coat types](/dog-coat-types/)

**Furnishings** `{#furnishings}`. The long hair on the head, legs and tail of certain breeds, such as a terrier's beard and eyebrows. → [Dog coat types](/dog-coat-types/)

**Blowing coat** `{#blowing-coat}`. The heavy, seasonal shedding of the undercoat in many double-coated dogs. → [Brushing your dog](/brushing-your-dog/)

**Hand stripping** `{#hand-stripping}`. A specialist grooming technique for wiry coats, in which dead hairs are pulled out, by hand or with a tool, so new wiry hair can grow in. It's a skilled service, mostly used for show dogs. → [Dog coat types](/dog-coat-types/)

**Carding** `{#carding}`. Removing dead, soft undercoat from a coat with a carding knife, a comb-like serrated blade. Groomers often combine it with a clipper trim on wiry-coated pets. → [Dog coat types](/dog-coat-types/)

**Shaving (a double coat)** `{#shaving}`. Clipping the coat down close to the skin. On a double coat this removes both layers, which grow back at different rates. → [Should you shave a double-coated dog?](/dog-coat-types/#should-you-shave-a-double-coated-dog)

*[Ad slot permitted here (between groups)]*

---

## Brushing and de-matting

**Tangle** `{#tangle}`. A loose knot of hair, usually near the surface of the coat, that can be separated gently. → [Brushing your dog](/brushing-your-dog/)

**Mat (matting)** `{#mat}`. Hair that has become packed tightly together, often close to the skin. Mats pull on the skin, and tighten further when they get wet and dry. → [Dealing with mats](/brushing-your-dog/#dealing-with-mats)

**De-matting** `{#de-matting}`. Removing mats from a coat. Tight or widespread mats are a job for a groomer, who may clip the coat short instead of brushing them out. → [Dealing with mats](/brushing-your-dog/#dealing-with-mats)

**Line brushing** `{#line-brushing}`. Brushing the coat in small sections, from the skin outward, so no layer is missed. → [Brushing your dog](/brushing-your-dog/)

**Line combing** `{#line-combing}`. Working a comb through the coat section by section to lift out loose hair. Groomers use it on dense coats. → [Brushing your dog](/brushing-your-dog/)

**Slicker brush** `{#slicker-brush}`. A brush with fine wire bristles, used to work out small tangles and remove loose, dead hair. → [Choosing a brush](/dog-grooming-tools/)

**Pin brush** `{#pin-brush}`. A brush with widely spaced pins, used on longer coats. → [Choosing a brush](/dog-grooming-tools/)

**Bristle brush** `{#bristle-brush}`. A brush with soft bristles that removes loose hair and smooths the coat. → [Choosing a brush](/dog-grooming-tools/)

**Rubber curry brush** `{#rubber-curry-brush}`. A rubber brush that loosens dead hair, dirt and dead skin, mostly used on short, smooth coats. → [Choosing a brush](/dog-grooming-tools/)

**Undercoat rake** `{#undercoat-rake}`. A rake-like tool that reaches into a thick undercoat to remove loose undercoat hair. → [Choosing a brush](/dog-grooming-tools/)

**De-shedding tool** `{#de-shedding-tool}`. Any tool designed to remove loose undercoat from a double coat, such as an undercoat rake. → [Choosing a brush](/dog-grooming-tools/)

**Steel comb** `{#steel-comb}`. A metal comb used after brushing to check the coat is tangle-free right down to the skin. → [Choosing a brush](/dog-grooming-tools/)

---

## Bathing and drying

**Dog shampoo** `{#dog-shampoo}`. Shampoo formulated specifically for dogs, which is what dog bathing guidance recommends using. → [Bathing your dog](/bathing-your-dog/)

**Waterless shampoo (spot cleaner)** `{#waterless-shampoo}`. A pet cleaning product used on one dirty patch instead of giving a full bath. Dry shampoos and pet wipes are used the same way. → [Bathing your dog](/bathing-your-dog/)

**Blow-dry (blowout)** `{#blow-dry}`. A salon term for drying the coat with a dryer, usually while brushing it. Menus use both names, and what's included can vary. → [Bathing your dog](/bathing-your-dog/)

**High-velocity dryer** `{#high-velocity-dryer}`. A powerful dryer whose fast airflow pushes water and loose undercoat out of the coat. It's used by groomers and at some self-service washes. → [Bathing your dog](/bathing-your-dog/)

**Cage dryer** `{#cage-dryer}`. A dryer attached to a crate, which dries a dog without anyone holding it. Heated cage dryers have been linked to serious injuries when dogs aren't watched. → [Choosing a groomer](/choosing-a-dog-groomer/)

*[Ad slot permitted here]*

---

## Cuts, trims and blades

**Clippers** `{#clippers}`. Electric hair clippers with a cutting blade, used to cut the coat short or to an even length. → [Trimming and haircuts](/dog-haircuts-and-trimming/)

**Blade number** `{#blade-number}`. Clipper blades are identified by number. The number doesn't give a fixed length: the length a blade leaves changes with the blade's angle and the dog's coat, so check the manufacturer's information. → [Blade numbers and guide combs](/dog-haircuts-and-trimming/)

**Guide comb (guard comb)** `{#guide-comb}`. A plastic or metal comb that clips onto a clipper blade to set how long the hair is left. → [Trimming and haircuts](/dog-haircuts-and-trimming/)

**Blunt-ended scissors (round-tip scissors)** `{#blunt-ended-scissors}`. Grooming scissors with rounded tips, used for small trims near the face and paws. → [Trimming and haircuts](/dog-haircuts-and-trimming/)

**Sanitary trim** `{#sanitary-trim}`. Trimming the long hair around the genitals and under the tail so the area stays cleaner. Groomers may include slightly different areas. → [The sanitary trim](/dog-haircuts-and-trimming/)

**Paw pad trim** `{#paw-pad-trim}`. Trimming the hair that grows between and over the pads of the paws. → [Trimming the paw pads](/dog-haircuts-and-trimming/)

**Puppy cut** `{#puppy-cut}`. A common salon name for a haircut that's usually described as one length all over. **There's no standard definition:** groomers use it for very different lengths and styles, so describe the length and finish you want. → [Asking for the cut you want](/dog-haircuts-and-trimming/)

**Teddy bear cut** `{#teddy-bear-cut}`. A salon name for a haircut style. **It isn't standardized,** and different groomers mean different things by it, so describe or show the look you want. → [Asking for the cut you want](/dog-haircuts-and-trimming/)

**Kennel cut** `{#kennel-cut}`. Another salon name for a haircut style, often a shorter one. **It isn't standardized either,** so agree the actual length with your groomer. → [Asking for the cut you want](/dog-haircuts-and-trimming/)

---

## Nails, ears and teeth

**Quick** `{#quick}`. The living core of a dog's nail, containing blood vessels and nerves. On light nails it shows as a pink area. → [Finding the quick](/trimming-dog-nails/#finding-the-quick)

**Dewclaw** `{#dewclaw}`. An extra claw higher up on the inner side of the leg, a rudimentary fifth toe. Not every dog has them. → [Trimming your dog's nails](/trimming-dog-nails/)

**Nail clippers** `{#nail-clippers}`. Tools for cutting dog nails. Scissor- and plier-style clippers cut with two crossing blades; guillotine-style clippers cut with a single blade as the nail passes through a hole. → [Choosing clippers or a grinder](/dog-grooming-tools/)

**Nail grinder** `{#nail-grinder}`. A rotary tool that shortens nails by filing them down rather than cutting. → [Trimming your dog's nails](/trimming-dog-nails/)

**Styptic powder** `{#styptic-powder}`. A powder pressed onto a nail tip to help stop bleeding if the quick is cut. → [Trimming your dog's nails](/trimming-dog-nails/)

**Ear flap (pinna)** `{#ear-flap}`. The outer part of the ear that you can see and lift, supported by cartilage. Dog-show glossaries also call it the "leather". → [Cleaning your dog's ears](/cleaning-dog-ears/)

**Ear canal** `{#ear-canal}`. The passage leading down from the ear opening into the head. Nothing should be pushed into it. → [Cleaning your dog's ears](/cleaning-dog-ears/)

**Ear-cleaning solution** `{#ear-cleaner}`. A liquid made for cleaning dogs' ears, ideally one recommended by your vet. → [Cleaning your dog's ears](/cleaning-dog-ears/)

**Ear plucking** `{#ear-plucking}`. Removing hair from inside the ear. Whether it's needed is debated, even among veterinary dermatologists, so ask your vet or groomer. → [Cleaning your dog's ears](/cleaning-dog-ears/)

**Plaque** `{#plaque}`. The buildup that forms on teeth constantly. Regular brushing is the most effective way to keep it under control. → [Brushing your dog's teeth](/brushing-dog-teeth/)

**Tartar (calculus)** `{#tartar}`. The everyday name for what vets call dental calculus. Leave tartar to your vet rather than trying to remove it. → [Brushing your dog's teeth](/brushing-dog-teeth/)

**VOHC seal** `{#vohc-seal}`. The seal of the Veterinary Oral Health Council, a group of veterinary dentists and dental scientists. Products carrying it have submitted evidence that they help control plaque, tartar or both. → [Brushing your dog's teeth](/brushing-dog-teeth/)

**Pet toothpaste** `{#pet-toothpaste}`. Toothpaste made for pets. Human toothpaste isn't a substitute, because dogs swallow it. → [Brushing your dog's teeth](/brushing-dog-teeth/)

*[Ad slot permitted here]*

---

## At the groomer

**Full groom** `{#full-groom}`. A salon package that usually combines a bath, drying, brushing and a haircut, often with nails and ears. **What's included varies between groomers,** so check before you book. → [Choosing a groomer](/choosing-a-dog-groomer/)

**Bath and brush** `{#bath-and-brush}`. A package with a bath, drying and brush-out but no full haircut. Some groomers include nails or ears. Names and contents vary. → [Choosing a groomer](/choosing-a-dog-groomer/)

**Tidy** `{#tidy}`. A salon term for a lighter trim than a full haircut. **It isn't standardized:** one groomer's "tidy" covers feathers, belly, feet and sanitary area, while another's is a bath with nails and a trim around the eyes. Names like "face, feet and fanny" or "mini groom" are used in similar ways. Ask what's included. → [Choosing a groomer](/choosing-a-dog-groomer/)

**Mobile grooming** `{#mobile-grooming}`. Grooming done in a van or trailer parked at your home. → [Choosing a groomer](/choosing-a-dog-groomer/)

**Self-service wash** `{#self-service-wash}`. A business where you wash your own dog using their tubs, shampoo and dryers. → [Choosing a groomer](/choosing-a-dog-groomer/)

**Anal glands** `{#anal-glands}`. Two small scent glands beside a dog's anus that normally empty on their own. Some grooming menus list "gland expression", but veterinary guidance says emptying them is a job for a vet. → [Trimming and haircuts: anal glands](/dog-haircuts-and-trimming/)

---

*["Where to go next": 4 cards]*

| Card title | Link | Reason shown on card |
|---|---|---|
| Dog coat types | `/dog-coat-types/` | "Which of the five coats your dog has." |
| Trimming and haircuts at home | `/dog-haircuts-and-trimming/` | "Cut names, and how to describe the cut you want." |
| Dog grooming tools | `/dog-grooming-tools/` | "Which brush or clipper suits your dog." |
| Choosing a dog groomer | `/choosing-a-dog-groomer/` | "What to ask before you book." |

*[Disclaimer line]* Definitions are short summaries. The linked guides give the full picture and their sources. Coat and anatomy terms follow the American Kennel Club's glossary; salon terms reflect how US grooming businesses use them, and may differ at your groomer. [How we write, source and fund our guides](/editorial-policy/).

### Page outline

- **H1:** Dog grooming glossary
- **H2:** Coat and hair (11 entries)
- **H2:** Brushing and de-matting (12)
- **H2:** Bathing and drying (5)
- **H2:** Cuts, trims and blades (9)
- **H2:** Nails, ears and teeth (13)
- **H2:** At the groomer (6)
- **No H3s. No FAQ.** **Total: 56 entries.**

---

## E. Evidence Register

**Access date for all external sources: 2026-10-05.**
- **Fetched with curl:** G1 (AKC glossary), G2 (UK Kennel Club glossary), G4, G5, G8.
- **Already in the scratchpad from GD-03/GD-05:** G3 (re-grepped).
- **Owner-page sources** (GD-xx): as verified in those records.

| ID | Source | Type | URL | Supports (entries) | Exact evidence | Limitations |
|---|---|---|---|---|---|---|
| G1 | American Kennel Club: Glossary | Breed registry terminology reference (Tier 1 for breed/coat anatomy terms) | https://www.akc.org/about/glossary/ | double coat, undercoat, guard hairs, wiry coat, feathering, furnishings, dewclaw, ear flap ("leather") | "Undercoat: Dense, soft, short coat concealed by a longer top coat." · "Guard hairs: The longer, smoother, stiffer hairs that grow through and normally conceal the undercoat." · "Double coat: An outer coat resistant to weather… together with an undercoat of softer hair for warmth and waterproofing." · "Wirehair: A coat of hard, crisp, wiry texture." · "Feathering: Longer fringe of hair on ears, legs, tail, or body." · "Furnishings: The long hair on the extremities (including head and tail) of certain breeds." · "Dewclaw: An extra claw on the inside of the leg; a rudimentary fifth toe, removed on most breeds." · "Leather: The flap of the ear; the outer ear supported by cartilage…" | **Dewclaw:** "removed on most breeds" is **not used** (a prevalence claim, and removal is a veterinary topic). "Not every dog has them" is a narrower wording. "Such as a terrier's beard and eyebrows" for furnishings is an example consistent with GD-03 ("furnished beard and eyebrows" in its Schnauzer image alt). |
| G2 | The Kennel Club (UK): Glossary of terms | Breed registry terminology reference | https://www.thekennelclub.org.uk/media/471961/glos_of_terms_rtf.pdf (serves HTML) | feathering, furnishings (corroboration) | "Feathering: Longer fringe of hair on ears, legs, tail or body"; "Furnishings: Long hair which may be on head, legs, breechings and/or tail" | UK body; corroboration only |
| G3 | Elaine Waldorf Gewirtz, AKC: "What Is a Double-Coated Dog?", updated 2026-09-14 | Breed registry article | https://www.akc.org/expert-advice/health/double-coated-dog-breeds/ | guard hairs (topcoat/guard coat), undercoat sheds, blowing coat, shaving, line combing, high-velocity dryer | "The outermost layer is a harsh topcoat… Dog groomers also call this layer the guard coat"; "The softer undercoat sheds more often"; "The undercoat often sheds heavily during seasonal changes, a process commonly called 'blowing coat.'"; "the two layers grow back at different rates"; "groomers often use a high-velocity dog dryer and line-combing techniques to remove loose undercoat. Line combing involves working through the coat section by section, lifting away loose hair"; "The air on the dryer will penetrate the undercoat" | Groomer-quoted. Its dryer **technique** is not used (GD-05 decision). |
| G4 | Colt Dodd, AKC: "Everything You Need to Know About Hand-Stripping Dog Coats", updated 2025-11-10 | Breed registry article quoting a groomer of 20+ years | https://www.akc.org/expert-advice/health/hand-stripping-dog-coats/ | hand stripping, carding | "a groomer… will likely have their own technique for removing dead hairs and encouraging new coat growth"; "Hand-stripping is a specialized service that requires training"; "generally reserved for pets that are involved in the 'show' ring"; "'pet strip,' which is a clipper trim with carding to remove the soft and downy undercoat"; "Carding knives. These tools resemble a comb combined with a butter knife. They help remove the dead undercoat" | Affiliate notice. "Pain-free" claim **not used**. |
| G5 | Jessica Gonzales, Rover: "What Is a Puppy Cut?", 2020-01-25 | **Tier 3 commercial** (pet-services platform), quoting groomers and grooming educator Melissa Verplank | https://www.rover.com/blog/what-is-a-puppy-cut/ | puppy cut, teddy bear cut, kennel cut (**variation only**) | "there's no set standard for how to do it"; "the puppy cut is loosely defined as having one length all over, but there is no industry standard as far as how to interpret that"; groomers' length "varies from a quarter of an inch to 2 inches"; a Poodle-specific "puppy cut" with poms (a different definition); "Generally, the only things that change between these trims are the names and the length of coat" (Verplank) | Commercial. **Used only to establish that the names are not standardized**, never for a definition of length. Paragon Pet School's article on the same point was 403-blocked. |
| G6 | US grooming business menus (GD-16 register P2, P3, P4, P5, P8; Fluffy Paws, Denver, carrd page) | Tier 3 commercial, used as **usage evidence** | GD-16 §E; https://fluffypawsllc.carrd.co/ | tidy, bath and brush, full groom, blow-dry | PNW (P3): "Tidy is a light trim up of feathers, belly and the usual feet and sanitary"; Space Coast (P8): "Bath & Tidy | Nails Trimmed | Bath & Blowout | Trim Hair Around Eyes"; Fluffy Paws: "Face, feet, fanny"; Woof Gang (P2): "Mini Groom"; full-groom inclusions differ between P1–P8; "Blow-Dry" (P4), "blowout" (P5), "blow drying" (P2) | Commercial and US-only. Used to show **variation**, not to define a standard. Fluffy Paws is undated (excluded from GD-16 prices; usage only here). |
| G7 | Fear Free Happy Homes, senior coat tips (2018), via GD-13/GD-15 | Pet-owner education | https://www.fearfreehappyhomes.com/12-tips-to-caring-for-your-senior-dogs-coat/ | de-matting (clip short) | "it might be kinder to have a groomer body-clip her" | Senior context; general point |
| G8 | Alexander M. Reiter, MSD Veterinary Manual, Pet Owner: "Dental Disorders of Dogs", Table "Dental Terms" | Veterinary reference | https://www.msdvetmanual.com/dog-owners/digestive-disorders-of-dogs/dental-disorders-of-dogs | tartar = calculus | Table "What Most People Call It / What Your Veterinarian Might Call It": "Tartar… Calculus" | Full review May 2018 |
| GD-03 | Owner record (AKC sources) | — | — | coat type (five groups), wiry coat feel, shaving | Five-group taxonomy; "Rough, harsh or bristly hair → Wiry"; double coat regrowth | — |
| GD-04 | Owner record (AKC S1; AMC S3) | — | — | dog shampoo, waterless shampoo | AKC: "Apply a mild shampoo formulated specifically for dogs"; AMC: "spot cleaner… waterless shampoos, dry shampoos, and wipes specially made for pets" | Brands excluded |
| GD-05 | Owner record (AMC S4; GD-05 definitions) | — | — | tangle, mat, line brushing, de-matting | GD-05: "A small tangle: a loose knot… usually near the surface"; "A tight mat: hair packed close to the skin… not a home job"; "Line brushing means brushing the coat in small sections, from the skin outward, so no layer gets missed"; AMC: "Wet mats tighten as they dry and pull at the underlying skin" | — |
| GD-06 | Owner record (HW S1; Andis S4) | — | — | clippers, blade number, guide comb, scissors, sanitary trim, paw pad trim, cut-name advice, anal glands | HW: blunt-ended scissors, trims of "hair between the paw pads", "long hair around the genitals"; Andis: "Different blade angles in relation to the skin, thickness and texture of the hair will vary the cutting length"; "Use the following chart to find the approximate lengths of cut"; guide combs set the length; HW: "Should I expel my dog's anal glands? No." with "naturally express themselves" | **No blade-number-to-length values** (known evidence gap, memory). "Under the tail" in the sanitary trim follows GD-06's own definition. |
| GD-07 | Owner record (AKC nails S1; VCA S3; ASPCA S4) | — | — | quick, dewclaw, grinder, styptic powder | "The quick is the living core of the nail. It carries blood vessels and nerves"; "pink area"; dewclaws "the nails higher up on the inner side of the paw"; styptic powder "to the bleeding nail tip" | Grinder = "rotary… filing": GD-07/GD-10 describe a grinder as an alternative to clipping that grinds the nail down. "Rotary" is descriptive and consistent with GD-10's S6/S7 tool tables. |
| GD-08 | Owner record (AKC, MSD, HW, dvm360) | — | — | ear canal, ear-cleaning solution, plucking, ear flap | "Use a dog ear-cleaning solution your vet recommends"; "Never push anything into your dog's… ears" (HW); plucking "it depends" (Laura Wilson, DACVD) | — |
| GD-09 | Owner record (VOHC S1/S2; AMC S4) | — | — | plaque, VOHC, pet toothpaste, tartar referral | "Plaque builds up on teeth constantly… brushing is the most effective way" (VOHC); "The VOHC Council consists of nine veterinary dentists and dental scientists"; seal "for Plaque, Calculus, or both"; "Dogs swallow toothpaste rather than spitting it out" | — |
| GD-10 | Owner record (S1–S7) | — | — | brushes, rake, de-shedding tool, comb, nail clipper types | As quoted in GD-10 §C (see §B of this record for the wording carried over) | — |
| GD-15 | Owner record (Vetstreet S2; NYC Bar S3) | — | — | full groom contents, mobile grooming, self-wash, cage dryer, anal glands | Vetstreet: "Most facilities offer bathing, drying, brushing, clipping, ear cleaning, and nail trimming"; "have a mobile groomer come to your home"; "only a veterinarian should empty anal glands"; NYC Bar: heated cage dryers have "resulted in serious injury to and the death of such animals"; definition of a cage dryer "capable of functioning without a person manually holding a dryer" | — |

**Unsupported definitions left on the page: none.** Each entry maps to at least one row above.

---

## F. Conflict Register

| Term | Source A | Source B | Nature | Handling |
|---|---|---|---|---|
| **Puppy cut** | G5: "loosely… one length all over"; lengths "a quarter of an inch to 2 inches" | G5 (citing No Barks About It): a Poodle puppy clip with poms, shaved face and feet | **Different definitions** (an all-over length vs a breed clip) | **INC-Q:** "no standard definition"; describe the length and finish. **No length given.** |
| **Teddy bear cut** | Commercial listicles (Pumpkin, Airtasker, via search): a "variation of the puppy cut" with a rounded face | No authoritative definition found | Commercial-only, unstable | **INC-Q:** label only, "isn't standardized". No style description beyond "a haircut style". |
| **Kennel cut** | Commercial listicle (Pumpkin): "shorter than" puppy and teddy-bear cuts | G5 (Verplank): only names and length differ | Commercial and unstable | **INC-Q:** "often a shorter one… isn't standardized either". "Often shorter" is the only consistent element across sources. |
| **Tidy** | P3 PNW: feathers, belly, feet and sanitary | P8 Space Coast: nails, bath and blowout, eye trim | **Different packages** under the same name | **INC-Q:** both examples given; ask what's included |
| **Full groom** | P1 KHS: bath, brush, ears, nails | P2/P5: plus sanitary trim, anal glands, teeth | Package scope varies | **INC-Q:** "usually… often… varies" |
| **Sanitary trim** | GD-06 (HW): genitals | GD-06 own definition: genitals and under the tail; P3 bundles "feet and sanitary" | Area varies slightly | **INC-Q:** "may include slightly different areas" |
| **Blade number** | Andis: approximate length per blade on a chart | Andis: length varies with angle, coat thickness and texture; HW gives use, not length | No fixed rule | **INC-Q:** no length or direction stated |
| **Guard hairs / topcoat** | G1: "guard hairs" | G3: "topcoat… also call this layer the guard coat or primary hairs" | Synonyms | Merged entry |
| **Dewclaw** | G1: "removed on most breeds" | GD-07: dewclaws trimmed if present | Prevalence/surgery clause | Clause dropped; "Not every dog has them" |
| **Anal glands** | Grooming menus (P2, P4): "gland expression" offered | GD-15 Vetstreet: "only a veterinarian should empty anal glands"; HW: don't | Practice vs guidance | **INC-Q:** both stated; owner-page guidance wins |
| **Coat groups** | Other sites: "hairless" or "triple" coats | GD-03 locked five groups | Taxonomy | Five groups only (G3's "triple/arctic" is not used) |
| **Nail clippers: guillotine** | VCA: may crush the nail | AKC and Toronto Humane: normal option | Recorded in GD-07/GD-10 | **Neutral definition**; the debate stays on GD-10 |

---

## G. Rejected Terms

| Term(s) | Reason |
|---|---|
| "In coat" / "out of coat" | **Insufficient evidence**: no authoritative definition (AKC and UK KC glossaries searched); forum and show-ring usage only. Spec secondary intent not served (I-1). |
| Lion, lamb, summer, continental and other breed clips | Not used on launch pages; breed-styling; unstable (commercial listicles only) |
| Shave-down (as a service name) | Duplicates the "shaving" entry and the GD-15 FAQ |
| Hairless / triple coat / single coat | Taxonomy lock (five groups); single coat lacks a glossary-grade source |
| Dematting tools; stripping knife as a buy item | GD-10 excluded them; home boundary (GD-05) |
| Otoscope | Vet instrument; not used on launch pages |
| Desensitization, counterconditioning, flooding, muzzle training | Outside the six spec theme groups; GD-12 defines them in context |
| Hot spot, post-clipping alopecia, ear infection, clipper burn, hematoma | Spec §C: no health explanations; GD-14 (symptoms) |
| "Starts at", dematting fee, travel fee, deposit | Prices out of scope (GD-16) |
| Brand names (grinders, styptics, shampoos, FURminator, etc.) | Commercial/brand; generic terms used |
| Pet strip | Covered within "carding" (G4); not used on site pages |

---

## H. Image Record

| Asset ID | Source | Purpose | Alt text | Rights | Result |
|---|---|---|---|---|---|
| — | — | — | — | — | **No images (spec §L: "none").** No placeholder. Not an exception. |

---

## I. SEO / Schema / Links

| Field | Value |
|---|---|
| SEO title | Dog Grooming Glossary: Terms and Cut Names Explained (**52** characters) |
| Meta description | Plain definitions of dog grooming terms (coat types, de-matting, cuts and blades, nails, ears, teeth and groomer jargon), each linked to the full guide. (**152** characters) |
| Canonical | `https://grooming-dogs.com/dog-grooming-glossary/` |
| Focus keyword | dog grooming terms |
| Heading structure | H1 plus 6 H2s; **no H3s** (entries are `<dt>` with IDs) |
| Schema | Rank Math: **Article** (Organization "Grooming Dogs"). **No FAQPage** (PC-05). No DefinedTermSet (not authorized by the spec), Product, Service or HowTo. |
| Breadcrumb | Home › Glossary |
| Indexability | index, follow |

### Internal links

Destinations, with entry counts (one link per entry):

| Destination | URL | Entries | Why |
|---|---|---|---|
| GD-03 | `/dog-coat-types/` (+ `#should-you-shave-a-double-coated-dog`) | 10 | Coat terms (spec: hand stripping → GD-03) |
| GD-05 | `/brushing-your-dog/` (+ `#dealing-with-mats`) | 6 | Brushing, mats, shedding |
| GD-10 | `/dog-grooming-tools/` | 8 | Tool terms |
| GD-04 | `/bathing-your-dog/` | 4 | Bathing and drying |
| GD-15 | `/choosing-a-dog-groomer/` | 6 | Cage dryer and salon terms (spec: "tidy" → GD-15) |
| GD-06 | `/dog-haircuts-and-trimming/` | 10 | Cut names (spec → GD-06), blades, trims, anal-gland referral |
| GD-07 | `/trimming-dog-nails/` (+ `#finding-the-quick`) | 4 | Spec: quick → GD-07 |
| GD-08 | `/cleaning-dog-ears/` | 4 | Ear terms |
| GD-09 | `/brushing-dog-teeth/` | 4 | Dental terms |
| GD-19 | `/editorial-policy/` | Disclaimer | Trust |

**Checks:**
- **Spec coverage:** all seven spec outgoing destinations (GD-03, 05, 06, 07, 08, 09, 15) are present.
- **Additions:** GD-04 and GD-10 (owner pages for those terms) and GD-19.
- **Not linked from entries:** GD-12, GD-14 and GD-16 (no terms from those areas).

**Anchor IDs for inbound deep links (PC-02):** `#coat-type`, `#double-coat`, `#undercoat`, `#guard-hairs`, `#wiry-coat`, `#feathering`, `#furnishings`, `#blowing-coat`, `#hand-stripping`, `#carding`, `#shaving`, `#tangle`, `#mat`, `#de-matting`, `#line-brushing`, `#line-combing`, `#slicker-brush`, `#pin-brush`, `#bristle-brush`, `#rubber-curry-brush`, `#undercoat-rake`, `#de-shedding-tool`, `#steel-comb`, `#dog-shampoo`, `#waterless-shampoo`, `#blow-dry`, `#high-velocity-dryer`, `#cage-dryer`, `#clippers`, `#blade-number`, `#guide-comb`, `#blunt-ended-scissors`, `#sanitary-trim`, `#paw-pad-trim`, `#puppy-cut`, `#teddy-bear-cut`, `#kennel-cut`, `#quick`, `#dewclaw`, `#nail-clippers`, `#nail-grinder`, `#styptic-powder`, `#ear-flap`, `#ear-canal`, `#ear-cleaner`, `#ear-plucking`, `#plaque`, `#tartar`, `#vohc-seal`, `#pet-toothpaste`, `#full-groom`, `#bath-and-brush`, `#tidy`, `#mobile-grooming`, `#self-service-wash`, `#anal-glands`.

**Upstream follow-up (not applied):** GD-03's and GD-06's existing links to the glossary root are valid. Upgrading other pages to first-use deep links (e.g. GD-06 "puppy cut" → `#puppy-cut`) is an optional link pass.

---

## J. Elementor Build Record (Elementor Free only)

**Widgets used:** Heading, Text Editor, Icon List, Icon Box, Shortcode. **No Accordion** (no FAQ). **No Table of Contents widget** (Pro); Icon List anchors are used instead (spec §P alternative). **No Pro-only widgets or features.**

**Saved templates** (copied onto the page):
- Intro
- Short-answer box
- "Where to go next" cards
- Disclaimer

**Styling:** Kit global styles only. Definition terms use the Kit's bold text style. No new styles.

| # | Container | Contents |
|---|---|---|
| 1 | Intro | Shortcode (breadcrumb) · **H1** · Text Editor (intent, byline) |
| 2 | Short answer | Saved template (Icon List, 2) |
| 3 | Jump links | Icon List (6 items, each linking to an H2 CSS ID: `#coat-and-hair`, `#brushing-and-de-matting`, `#bathing-and-drying`, `#cuts-trims-and-blades`, `#nails-ears-and-teeth`, `#at-the-groomer`) |
| 4–9 | Theme groups ×6 | **H2** (CSS ID as above) · Text Editor containing a semantic `<dl>`: each term is a `<dt id="…">` and each definition a `<dd>` ending with an owner link. Optional ad slot **between** groups 1–2, 3–4 and 5–6 only. |
| 10 | Next / Disclaimer | Saved templates |

**Accessibility:**
- **Semantic `<dl>`:** a native definition list. Anchor targets are on `<dt>`.
- **Jump links:** plain in-page anchors, so no JavaScript search is needed.

**Mobile:** single column. Next cards go to 1 column.

**Confirmed:** no Elementor Pro widget or feature is required.

---

## K. Exceptions

| # | Issue | Evidence | Impact | Blocking? | Future action |
|---|---|---|---|---|---|
| I-1 | "In coat" / "out of coat" (a spec secondary intent) are **not defined** | No authoritative definition in the AKC or UK KC glossaries; forum usage only | One secondary intent unserved | **Non-blocking** | Add if a breed-club or registry definition is found |
| I-2 | Cut-name entries rely on a **Tier 3** source (Rover, quoting groomers) to establish non-standardization; Paragon Pet School (Tier 2) was bot-blocked | G5 | Low: the entries make **no** definitional claim beyond "not standardized" | **Non-blocking** | Replace with a grooming-school or association source |
| I-3 | Salon-term usage evidence is US-only and commercial (G6) | G6 | Wording may differ elsewhere; the page says so | Non-blocking | — |
| I-4 | MSD dental terms table last fully reviewed 2018 | G8 | Terminology only | Non-blocking | Re-check at the annual review |
| I-5 | Launch dependency: GD-19 not produced yet | — | Disclaimer link | Non-blocking | Launch QA |

---

## Anti-drift checklist

- [x] Canonical title and URL verified; structure per spec (H1, 6 theme H2s, no H3s, no FAQ, no images); one H1
- [x] Term inventory created (§C); every published definition has evidence (§E)
- [x] Haircut names independently checked; **"puppy cut", "teddy bear cut" and "kennel cut" given no fabricated definition** (qualified as non-standard); commercial salon usage not presented as universal
- [x] No blade-number-to-length rule; no breed grooming rules
- [x] Five coat groups only; no hairless or triple group
- [x] GD-05 to GD-16 ownership kept: definitions only, owner links, no steps, frequencies, prices or health explanations
- [x] No products, brands, affiliate content or rankings; no fake experts; no diagnosis or treatment; no statistics; no invented search data
- [x] SEO title 52; meta description 152; Article schema only (no FAQPage); Elementor Free only; simple anchor jump links (no JavaScript search)
- [x] Canonical internal links only; record complete

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**
