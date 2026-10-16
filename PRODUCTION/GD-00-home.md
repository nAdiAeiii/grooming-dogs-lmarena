# GD-00 — Production Record: Home

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-00
**Upstream authorities (locked):** `PRODUCTION/GD-01` … `GD-21` (GD-15 includes the US pass; GD-16 US/USD; GD-18 to GD-21 trust/site pages)
**Produced:** 2026-10-05

---

## A. Production Gate (summary)

| # | Item | Finding |
|---|---|---|
| 1 | Canonical URL | `https://grooming-dogs.com/`; a Page set as the **static front page** |
| 2 | Role | **Orientation hub:** "What is Grooming Dogs?" and "Where should I start?" It **answers no grooming question itself** (spec §B). |
| 3 | Structure | H1 "Practical dog grooming, explained for owners"; **5 H2s in this order:** Start here · Grooming for your dog's situation · Grooming tasks · Using a professional groomer · How this guide works. **Plus 2 unheaded visual sections** (tools entry; secondary exploration). **No H3s** (card titles are styled text, PC-02). No FAQ, no table, no procedure. |
| 4 | Navigation | Header and footer are global (architecture §E.1 five items, §E.2 footer). **The homepage adds no nav item.** GD-16 appears in nav and homepage **only once published** (PC-04). GD-22 `/guides/` is **inactive**; no link. |
| 5 | Ownership | Routing only: one line per card. Owners: GD-01 (routine), GD-02 (frequency), GD-03 (coat), GD-04 to GD-09 (tasks), GD-11 to GD-14 (situations), GD-15/16 (groomer/cost), GD-10 (tools), GD-17 (glossary), GD-18 (salon question), GD-19 (trust) |
| 6 | Trust / disclosure | Trust strip limited to spec §O allowed claims: **sourcing policy, vet boundary, corrections channel** ("credited photography" only after V-4 passes site-wide, so **not used yet**). Claims must match GD-19. **No commercial links, so no disclosure block.** No ads (PC-07). No "no ads / no affiliates" statement. |
| 7 | Images | Hero candidate `hero-brush` **FAILS** visual check (§F). Replacement: `lead-brushing` (**verified PASS in GD-05**), which matches the spec's intent: an owner brushing a calm dog at home, coat visible. Situation cards: **no images** (the GD-14 lead failed; text cards keep the set consistent). |
| 8 | SEO | Title draft "Grooming Dogs: Practical Dog Grooming Guides for Owners" (55); spec meta draft (157); **do not target "how to groom a dog at home"** |
| 9 | Schema | **WebSite + Organization** ("Grooming Dogs"; **no address, phone, email or logo** unless real). No FAQ, Person or LocalBusiness. |
| 10 | Internal links | Spec §K: GD-01, 02, 03, 11, 13, 12, 14, 04 to 09, 15, 16 (conditional), 10, 19, 17; plus GD-18 for the one-line salon answer (spec §D) and GD-20 for corrections (allowed trust claim) |
| 11 | Dependencies | GD-16 publication (PC-04; **owner decision: none pending**, as GD-16 is production-ready); site-wide V-4 for any future photography claim; logo for schema (optional) |
| 12 | Contradictions | **None.** One clarification: spec §L names `hero-brush`, "subject to V-4a". It failed, so a verified image with the same intent is substituted. This is a permitted outcome of the V-4a gate, not an architecture change. |
| 13 | Proceed? | **Yes.** The locked files are internally consistent. |

---

## B. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-00 |
| Title | Home |
| Canonical URL | `https://grooming-dogs.com/` |
| Page type | WordPress Page (Settings › Reading › static front page) |
| Funnel role | Entry and routing |
| Byline | None (spec §O) |
| Commercial class | **EDITORIAL ONLY.** Tools slot editorial; no affiliate links; **no ads at launch** (PC-07). |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

---

## C. Content-Ownership Map

| Homepage element | Intent | Owner page | Homepage treatment |
|---|---|---|---|
| Hero | What the site is and isn't | GD-00 (owns); GD-18 (salon line) | Value proposition plus one limits line |
| Start here ×3 | Routine / frequency / coat | GD-01 / GD-02 / GD-03 | One line each; **no steps, no figures** |
| Situation ×4 | Puppy / senior / anxious / problem | GD-11 / GD-13 / GD-12 / GD-14 | One line each |
| Tasks ×6 | Bathing … teeth | GD-04 to GD-09 | Task names only |
| Professional ×2 | Choosing / cost | GD-15 / GD-16 (conditional) | One line each; **no prices** |
| Trust strip | Can I trust this? | GD-19 (rules), GD-20 (corrections) | 3 points plus a policy link (saved template; reused on GD-18) |
| Tools entry | What tools do I need? | GD-10 | One editorial card |
| Secondary | Terms | GD-17 | One text link |

---

## D. Final Content

> *[Square-bracketed italics]* are builder notes.

**[Section 1: Hero *(Container: Heading, Text, Button, text link, Image)*]**

# Practical dog grooming, explained for owners

Clear, step-by-step guides to grooming your dog at home: brushing, bathing, nails, ears, teeth and trims. They also help you know when a groomer or your vet should take over.

We're a guide, not a grooming salon, and we don't give veterinary advice. [More about us](/about/)

*[Button, primary]* **Start with the full routine** → `/how-to-groom-your-dog-at-home/`
*[Text link]* [Find your dog's coat type](/dog-coat-types/)

*[Image: `lead-brushing` (Pexels 8498547). Alt: "A relaxed, shaggy, light-coated dog lying on a wooden floor while someone brushes the coat at its shoulder." Credit line: "Photo: Yaroslav Shuraev / Pexels".]*

**[Section 2]**

## Start here

*[3 cards: Icon Box. Card title styled text, not a heading.]*

| Card title | Line | Link |
|---|---|---|
| The full grooming routine | Everything a home groom involves, in the order to do it. | `/how-to-groom-your-dog-at-home/` |
| A grooming schedule for your dog's coat | How often to brush, bathe, trim nails, clean ears and brush teeth. | `/how-often-should-you-groom-your-dog/` |
| Find your dog's coat type | Your dog's coat shapes almost every grooming decision. Start by working out which type it is. | `/dog-coat-types/` |

**[Section 3]**

## Grooming for your dog's situation

*[4 cards: Icon Box. No images.]*

| Card title | Line | Link |
|---|---|---|
| Grooming a puppy | Get a young dog used to being handled and groomed. | `/puppy-grooming/` |
| Grooming an older dog | Adapt grooming for stiff joints, thin skin and shorter patience. | `/senior-dog-grooming/` |
| A dog who hates grooming | Help a fearful or resistant dog cope, step by step. | `/grooming-an-anxious-dog/` |
| Something wrong after grooming? | Itching, redness, head shaking or a smell: what to check, and when to see your vet. | `/dog-grooming-problems/` |

**[Section 4]**

## Grooming tasks

*[Icon List, 2–3 columns; link text = task name]*
- [Bathing](/bathing-your-dog/)
- [Brushing](/brushing-your-dog/)
- [Haircuts and trimming](/dog-haircuts-and-trimming/)
- [Nails](/trimming-dog-nails/)
- [Ears](/cleaning-dog-ears/)
- [Teeth](/brushing-dog-teeth/)

**[Section 5]**

## Using a professional groomer

*[2 cards: Icon Box]*

| Card title | Line | Link |
|---|---|---|
| Choosing a groomer | What to ask, what to look for, and what to do if something goes wrong. | `/choosing-a-dog-groomer/` |
| What grooming costs | Example US prices, and what makes a quote higher or lower. | `/dog-grooming-cost/` *[Render ONLY once GD-16 is published (PC-04). Until then the section shows the single GD-15 card.]* |

**[Section 6: Saved template "How this guide works" *(reused on GD-18)*]**

## How this guide works

*[Icon List, 3 points + link]*
- **Sourced.** Health and safety statements in our guides are checked against named sources, such as veterinary and animal-welfare organizations, and the sources are listed on each guide.
- **Your vet comes first.** We help you recognize when something may be wrong and send you to your vet. We don't diagnose or recommend treatments.
- **Corrections welcome.** Spotted a mistake? [Send a correction](/contact/).

[How our guides are written and funded](/editorial-policy/)

*[Builder: do NOT add "vet-approved", "expert-reviewed", "trusted by", badges, counts or a photography claim. The "real, credited photography" point may be added only after V-4 passes for every image on the site (spec §J).]*

**[Section 7: Tools entry *(visual section, no H2; small styled heading)*]**

**Tools**: [The tools you actually need](/dog-grooming-tools/), matched to your dog's coat. *[Editorial card. No affiliate links, so no disclosure line. If a commercial link is ever added here, a disclosure line goes before it (spec §N; GD-19).]*

**[Section 8: Secondary exploration *(visual section, no H2)*]**

New to grooming words? See the [grooming glossary](/dog-grooming-glossary/).

*[Footer: global (architecture §E.2). Not built on this page.]*

### Page outline

- **H1:** Practical dog grooming, explained for owners
- **H2:** Start here
- **H2:** Grooming for your dog's situation
- **H2:** Grooming tasks
- **H2:** Using a professional groomer
- **H2:** How this guide works
- **No H3s.**

---

## E. Claim Check

| Statement | Basis |
|---|---|
| Guides cover brushing, bathing, nails, ears, teeth and trims, and when a groomer or vet should take over | GD-04 to GD-09, GD-14, GD-15 (launch pages) |
| "Not a grooming salon; no veterinary advice" | GD-18 (approved wording), GD-19 health boundary |
| Schedule card lists tasks, **no figures** | GD-02 owns the figures (spec §C) |
| "Your dog's coat shapes almost every grooming decision" | GD-03 short answer (coat group sets tools, frequency, etc.). Orientation wording, no new fact. |
| Senior card: "stiff joints, thin skin" | GD-13 (S1 AAHA / S2 Fear Free; conditional wording there) |
| Problems card examples | GD-14 symptom list |
| Cost card: "Example US prices" | GD-16 (examples, not averages; US/USD) |
| Trust points | **GD-19 exactly:** sources (§F rows 5–7), vet boundary (row 11), corrections (row 23) |
| No "vet-reviewed", "independent", "no ads/affiliates", counts or badges | Architecture §G/§H; GD-19 |

**No new health, frequency, price or product claims.**

---

## F. Image Record

| Asset | Source | Visible content (viewed 2026-10-05) | Result |
|---|---|---|---|
| `hero-brush` (Pexels 8498543) | Yaroslav Shuraev, Pexels | A person seated in slippers holds a **bladed de-shedding tool** against the **top of the head, close to the eye**, of a large, calm, long-haired light dog lying on a wooden floor | **FAIL.** (1) Not a brush: the registry alt "brushing the coat" misdescribes it. (2) A de-shedding blade worked on the head next to the eye conflicts with GD-10's "use it gently, especially near the skin" framing and isn't something any guide shows. Not suitable as the site's first image. |
| `lead-brushing` (Pexels 8498547) | Yaroslav Shuraev, Pexels License. **Verified PASS in GD-05.** | A shaggy, light-coated dog lying relaxed on a wooden floor. One hand holds a slicker-style brush in the coat at the shoulder; the other steadies the dog. | **PASS. Used as the hero.** It matches the spec §L intent (an owner brushing a calm dog at home, coat visible). It duplicates the GD-05 lead (same photographer and shoot as `hero-brush`, but a different, safe frame); acceptable. |
| Situation-card images | — | — | **Not used.** The GD-14 lead failed, and image-free cards keep the set consistent. |
| Failed assets | — | `fur-texture`, `lead-nails`, `lead-ears`, `lead-teeth`, `fig-bath-tub`, `lead-problems`, `lead-about`, `hero-brush` | Excluded |

---

## G. SEO / Schema

| Field | Value |
|---|---|
| SEO title | Grooming Dogs: Practical Dog Grooming Guides for Owners (**55** characters) |
| Meta description | Plain-English dog grooming guidance for owners: the full routine, schedules by coat type, each task step by step, and when a groomer or vet should take over. (**157** characters) |
| Canonical | `https://grooming-dogs.com/` |
| H1 | Practical dog grooming, explained for owners (one) |
| Schema | Rank Math: **WebSite** (name "Grooming Dogs", url) + **Organization** (name "Grooming Dogs", url). **No address, phone, email, sameAs or logo** until real ones exist. **No SearchAction** (no site search is specified). No FAQPage, Person, LocalBusiness, Product or Review. |
| Indexability | index, follow |
| Breadcrumb | Not displayed on the homepage (Home is the breadcrumb root) |
| Keyword guard | Do **not** target "how to groom a dog at home" (GD-01 owns it) |

---

## H. Internal Links

| Destination | Anchor | Section | Spec |
|---|---|---|---|
| GD-01 | Start with the full routine / The full grooming routine | Hero button, Start here | ✔ |
| GD-03 | Find your dog's coat type | Hero link, Start here | ✔ |
| GD-02 | A grooming schedule for your dog's coat | Start here | ✔ |
| GD-11 | Grooming a puppy | Situation | ✔ |
| GD-13 | Grooming an older dog | Situation | ✔ |
| GD-12 | A dog who hates grooming | Situation | ✔ |
| GD-14 | Something wrong after grooming? | Situation | ✔ |
| GD-04 to GD-09 | Task names | Tasks | ✔ |
| GD-15 | Choosing a groomer | Professional | ✔ |
| GD-16 | What grooming costs | Professional | ✔ (**conditional on publication**) |
| GD-19 | How our guides are written and funded | Trust strip | ✔ |
| GD-10 | The tools you actually need | Tools | ✔ |
| GD-17 | grooming glossary | Secondary | ✔ |
| GD-18 | More about us | Hero | Spec §D (salon line) |
| GD-20 | Send a correction | Trust strip | Allowed trust claim (corrections channel) |

**Not linked:** `/guides/` (GD-22 inactive), GD-21 (footer only), any commercial page.

---

## I. Elementor Build (Elementor Free only)

**Widgets used:** Heading, Text Editor, Button, Image, Icon Box, Icon List. **Saved template:** "How this guide works" (also placed on GD-18). **No Pro widgets** (no Call to Action, Flip Box, Loop or Posts widgets). **No ads, no form.**

**Styling:** Kit global styles; a global card style is shared by sections 2, 3 and 5.

| # | Container | Contents |
|---|---|---|
| 1 | Hero (2 columns desktop, stacked mobile) | **H1** · Text Editor (proposition plus limits line with GD-18 link) · Button (GD-01) · Text Editor (GD-03 link) · Image `lead-brushing` (eager load; credit) |
| 2 | Start here | **H2** · 3 × Icon Box (title styled as text, description, link on the box) |
| 3 | Situation | **H2** · 4 × Icon Box |
| 4 | Tasks | **H2** · Icon List (6 links; 3 columns desktop, 2 tablet, 1 mobile) |
| 5 | Professional | **H2** · 2 × Icon Box (the GD-16 box hidden/omitted until published) |
| 6 | Trust | Saved template: **H2** · Icon List (3) · Text Editor (GD-19 link) |
| 7 | Tools | Small styled text (not a heading) · Icon Box (GD-10) |
| 8 | Secondary | Text Editor (GD-17 link) |

**Hierarchy:** the hero and "Start here" sit above or at the fold. The situation cards come next. The task list is deliberately compact (one row of links, not cards). The professional, trust and tools sections are visually quieter. **Not "hero → 20 equal cards."**

**Confirmed:** Elementor Free compatible.

---

## J. Dependencies / Exceptions

| # | Item | Category | Blocking? |
|---|---|---|---|
| D-1 | GD-16 card and nav item render only when GD-16 is published, together with the `/pricing/` 301 (PC-04) | Launch sequencing | Non-blocking |
| D-2 | `hero-brush` failed; `lead-brushing` substituted (duplicates the GD-05 lead) | Image | Non-blocking. Optional: source a distinct verified hero later. |
| D-3 | The "credited photography" trust point is withheld until V-4 passes for every image on the site | Verification (spec §J) | Non-blocking |
| D-4 | Organization logo for schema: add only when a real site logo exists (design phase, OD-J) | Builder / design | Non-blocking |
| D-5 | The "How this guide works" saved template must be inserted on GD-18 too (closes GD-18 L-2) | Build | Non-blocking |
| D-6 | The registry alt for `hero-brush` is inaccurate ("brushing") | Data hygiene | Non-blocking |

---

## QA

**Content:**
- [x] One H1; 5 H2s in spec order; no H3s; no FAQ.
- [x] Orientation only: no steps, figures, prices or medical claims.
- [x] GD-01 not duplicated.
- [x] Not a directory: hierarchy kept (3 / 4 / compact 6 / 2).

**Trust:**
- [x] Claims match GD-19 and the spec §O allowed list.
- [x] No founder, team, reviewer, credentials, history, badges or testimonials.
- [x] No "vet-approved", "independent" or "no ads/affiliates".

**Commercial:**
- [x] No products, affiliate links, groomer listings, booking or ads.
- [x] No disclosure needed.

**Navigation:**
- [x] Five-item nav untouched.
- [x] No `/guides/`.
- [x] GD-16 conditional.

**Images:**
- [x] Verified asset only.
- [x] Failed assets excluded.
- [x] No placeholders.

**SEO:**
- [x] Title 55; meta description 157; canonical `/`; WebSite + Organization schema (no invented details).

**Elementor:**
- [x] Free widgets only.

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**


---

## Addendum (owner, 2026-10-06): home page redesign

**Copy:**
- All existing copy is kept verbatim.
- Two owner-approved lines are added above and below the "Start here" H2: "New to grooming at home?" and "Three guides, in the order that saves you time."
- "Start here" is now a numbered path in the order **1 Find your dog's coat type → 2 A grooming schedule for your dog's coat → 3 The full grooming routine** (owner-approved; the coat-type card itself says "Start by working out which type it is"). Screen readers hear "Step n:" before each title.

**Layout:**
- Tinted bands: Start here and How this guide works on Surface Soft, Grooming tasks on Surface Warm.
- Line icons with small animations (none under reduced motion).
- Grooming tasks are icon tiles; Tools and Glossary are link chips.

**"Grooming for your dog's situation":**
- The React Bits **CircularCarousel** (JS-CSS, cylinder, rise, 220px, 1:1, speed 14, captions), with a "Pause motion" button.
- Images: `lead-puppy`, `lead-senior` and `lead-anxious` (all verified), plus a non-photographic illustration (attachment 167) for "Something wrong after grooming?", because `lead-problems` failed V-4.
- The four text cards stay the real links.

**Unchanged:** H1, H2 texts and IDs, SEO title, meta and schema.
