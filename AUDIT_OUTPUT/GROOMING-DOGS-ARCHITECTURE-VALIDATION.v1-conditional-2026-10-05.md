# Grooming-Dogs.com — Architecture Standardization & Validation

**Date:** 2026-10-05
**Builds on:** `GROOMING-DOGS-LMARENA-AUDIT.md` (same folder). Its findings are taken as established here.
**Baseline:** The WordPress install was **intentionally** cleared on 2026-10-04. The blank site is the starting point for implementation. The old site is historical evidence only.
**Target platform:** WordPress + Elementor.
**This document produces no articles, HTML, Elementor layouts or code.**

### Status since the audit

| Audit decision | Status now |
|---|---|
| OD-01: was the wipe intentional? | **RESOLVED.** Intentional rebuild-from-zero (owner, 2026-10-05). |
| OD-04: platform | **RESOLVED.** WordPress + Elementor (owner, 2026-10-05). |
| All other audit decisions (OD-02, 03, 05–12) | Still open. Renumbered in §M. |

### New evidence used here (Tier 1, collected 2026-10-05)
- **E6: the later handoff ZIP.** `Downloads/grooming-dogs-website-redesign.zip` contains `AGENT_HANDOFF_GROOMING_DOGS/` (16 docs) plus the same LMArena source. It is audited in §B.2.
- **E7: puppy-s.com sitemap.**
  - 28 URLs. Articles live under `/guides/`, and there are `/product-reviews/`, `/best-puppy-essentials/`, `/best-puppy-food/`, `/how-we-recommend/` and `/disclosure/` ("Affiliate Disclosure").
  - **No grooming page.** Grooming is mentioned only in `/best-puppy-essentials/` (11×), the supplies checklist (4×) and the puppy-cost guide (1×).
- **E8: dogs-food.com sitemap.**
  - 9 URLs under `/guides/`. Food topics only.
  - **No grooming content.**

### Evidence tiers used throughout

| Tier | Meaning |
|---|---|
| **T1** | Direct evidence (E1–E8) |
| **T2** | Validated analysis |
| **T3** | Proposal (LMArena's or this document's) |
| **T4** | Unsupported claim |

---

## A. Executive verdict

**The LMArena architecture is reusable once corrected. Its evidence layer, implementation layer and commercial stance are not.**

Percentages would be invented, so this verdict uses categories.

| Category | Share of LMArena structural decisions | Content |
|---|---|---|
| **Sound: carry forward** | Most of the topic architecture | Task-based page model; three situation pages; symptom router; no per-breed, per-question or FAQ pages; FAQs placed with the page they answer; explicit vet boundary; flat, readable URLs; next-step linking with stated reasons |
| **Needs correction** | A substantial minority | Query ownership duplicated across pages; homepage competes with the routine guide; coat page promises breed coverage; nav carries an internal-document page; archetype labels don't match intents; no privacy page; some slugs |
| **Reject** | Everything outside the IA | Next.js/Postgres build; "evidence" claims; WordPress-default palette; unsourced cost and cadence figures; hard-coded QA; the "no commercial ever" stance presented as fact; `/project-package/`; the redirect map as coded; the ZIP's "do not change anything" contract |

**Can architecture proceed?**
- **Yes, for the editorial core.**
- **With conditions, for:**
  - **Decision-support and commercial layers:** depend on the business model (OD-A, OD-B).
  - **Coat/breed scope:** depends on OD-D.
  - **Publishing model:** OD-E.
  - **Authorship:** OD-F.
  - **Cost-page market:** OD-G.
  - **Sourcing:** two data sets must be sourced (EV-1, EV-2).

---

## B. LMArena decision audit

### B.1 Decisions in the LMArena output

| Area | LMArena decision | Evidence | Assessment | Correction | Final decision |
|---|---|---|---|---|---|
| **Positioning** | "Independent editorial guide to dog grooming. Not a salon, not a shop." | T1: the legacy business was fictitious (celebrity staff, placeholder contacts). T1: the owner's portfolio uses an affiliate model (E7). | The editorial focus is sound. "Never commercial" is an owner decision presented as fact. | Keep the editorial core. Make the commercial layer a separate, optional decision (§J). | **VALID WITH CORRECTION** |
| **Topic architecture** | 19 clusters: routine, frequency, coat, 6 tasks, tools, 3 situations, problems, groomer, cost, glossary, trust | T2: the legacy posts cover routine, brush, bathe, nails, ears and teeth. The rest is plausible user tasks with no demand data. | Sound task decomposition | Fix ownership overlaps (§D). Demand checks are optional (EV-4). | **VALID WITH CORRECTION** |
| **Page inventory** | 22 URLs: hub, 20 guides, `/project-package/` | — | 21 pages are justifiable. `/project-package/` is not. A privacy page is missing. | Remove `/project-package/`. Add `/privacy-policy/`. Add a guides index if guides are WordPress posts (§E). | **VALID WITH CORRECTION** |
| **Consolidation** | One page each for coat+breed, brushing+mats+shedding, haircuts+sanitary+pads; separate how-often vs how-to; cost vs groomer; 3 situation pages; no FAQ page | T2 | Sound reasoning, but LMArena's own pages break it (duplicate queries) | Apply the ownership register (§D) | **VALID WITH CORRECTION** |
| **Per-breed pages** | Rejected | T2 (no breed data) | Reasonable for launch | Coat page becomes coat identification plus a breed lookup table. A future breed hub is OD-D. | **REQUIRES OWNER DECISION** (default: no breed pages) |
| **URL structure** | Flat `/slug/`, trailing slash, no categories in the URL | T1: legacy used flat slugs with trailing slashes. T1: sister sites use `/guides/`. | Flat URLs are readable and stable. No legacy guide URLs need preserving, so a prefix would cost nothing either. | Default to flat. Reserve a path for any commercial layer (§H). Portfolio consistency (`/guides/`) is OD-H. | **VALID WITH CORRECTION** |
| **Slugs** | Mixed patterns. `brushing-mats-and-shedding` lists keywords. `grooming-anxious-dog` is ungrammatical. `coat-types-and-breed-grooming` over-promises. | — | Mostly fine | Rename three slugs (§H). Nothing is published, so renaming costs nothing. | **VALID WITH CORRECTION** |
| **Homepage** | Single hub; title "Dog Grooming Guide: How to Groom Your Dog at Home"; start-here, by-situation and library sections | T2 | Competes with the routine guide's main query. The library-grid section risks becoming an article index. | Orientation role only (§G). The routine guide owns "how to groom at home". | **VALID WITH CORRECTION** |
| **Editorial guides** | 20 independent guides | T2 | 18 justified; glossary conditional; editorial policy conditional (§C) | §C | **VALID WITH CORRECTION** |
| **Commercial pages** | None. Service, pricing and catalogue pages become editorial. | T1: no real service existed | Not creating fake commercial pages is correct. Banning commercial content is an owner decision. | §J defines a separate commercial layer, off until approved | **REQUIRES OWNER DECISION** |
| **Comparison pages** | None standalone. Comparisons are sections (grinder vs clipper, slicker vs pin, salon vs mobile, cut styles). | T2 | Correct. These are steps within a choice, not separate tasks. | None. A standalone comparison page needs evidence of a distinct task (EV-4). | **VALID** |
| **Support / utility** | About, editorial policy, contact (corrections form), 404, `/project-package/` | T1 (contact form collects email; Site Kit/GA installed historically) | Missing a privacy policy. Project package must go. | Add `/privacy-policy/`. Disclosure handling depends on OD-B. Remove `/project-package/`. | **VALID WITH CORRECTION** |
| **Internal linking** | Four relationship types; "where to go next" cards with stated reasons; prerequisites | T2 | Sound model. Some links point at the wrong owner (e.g. refusal handled on the nails page). | §D sets link owners; §F/§16-equivalent rules below | **VALID WITH CORRECTION** |
| **Content hierarchy** | Short answer, sections, tables, four callout tones, FAQ | T2 | Sound, and maps onto Elementor widgets | Keep as a content-model principle. Not a layout spec. | **VALID** |
| **Trust architecture** | No credentials, testimonials or team; disclaimers; corrections channel | T1: the legacy team was fabricated | Principle sound. Copy contains owner commitments ("no affiliate links", "corrections are acted on"). | §K | **VALID WITH CORRECTION** |
| **FAQ model** | Per-page FAQ with FAQPage schema; no FAQ page | T2 | Sound. FAQ entries must not duplicate another page's main query. | §D | **VALID WITH CORRECTION** |
| **Schedule tool** | Postgres-backed interactive picker | — | Not needed. The same job is done by a static coat × task table. | Static table (Elementor table or tabs). Interactivity optional later. | **VALID WITH CORRECTION** (as content) / **REJECT** (as application) |
| **Corrections form** | Postgres feedback table | — | The function is useful. The implementation doesn't apply to WordPress. | Use a WordPress form (Elementor Pro form or a form plugin), plus the privacy policy | **VALID WITH CORRECTION** |
| **Images** | 27 Pexels photos (all URLs return HTTP 200); 2 labelled placeholders | T1 (URLs resolve); subjects and licence unverified | Usable candidate set | EV-5: check subject and licence. Placeholders must not ship as visible "missing photo" blocks unless the owner approves (OD-I). | **REQUIRES EVIDENCE** |
| **Cost figures** | USD ranges "attributed to third-party sources" | T4: no source is named anywhere | Unsupported | EV-2, OD-G | **REJECT** as written |
| **Cadence figures** | 6 coat profiles "from veterinary and grooming sources" | T4: no sources named | Unsupported | EV-1 | **REQUIRES EVIDENCE** |
| **Design tokens** | `#0d3a4f`, `#fcb900`, `#ff6900` + Comfortaa/Proza Libre | T1 kit: fonts confirmed; colours contradicted | The colours are WordPress and plugin defaults | Fonts are optional carry-overs. Colours come only from the E4 kit or a new owner decision (OD-J). | **REJECT** (palette) / **VALID** (fonts, as an option) |
| **Legacy redirects** | 24 entries, permanent; includes `/about-us`, `/blog1`; `/404-2` destination inconsistent | T1 (URL evidence via Wayback) | Over-inclusive and inconsistent | Rebuilt in §H | **REJECT** as coded |
| **Research package** | Public `/project-package/` page plus downloads | — | Internal documentation | Never public | **REJECT** |
| **QA claims** | "0 duplicates", "21 sitemap URLs", "22 redirects", "Pass" | T4: hard-coded | Unsupported | QA is redone against the WordPress build | **REJECT** |

### B.2 Audit of the later handoff ZIP (E6) against the audit

The ZIP is a faithful extraction of the LMArena output. It adds no new evidence, but it **escalates** LMArena's proposals into binding rules ("Nothing here is a suggestion to be re-decided"; "Do not rewrite, trim or improve the copy").

| ZIP claim or rule | Audit finding | Status |
|---|---|---|
| "The Battle Mode output is the selected, authoritative direction"; "no other decision is open" | The audit and this document show open owner decisions | **REJECT** |
| Positioning basis: "three pricing tiers all priced $52/Month" on the pricing page; "team of template portraits" | Audit X-04 (the pricing page was a Dog/Cat/Other grid); F16 (celebrity names, not template portraits) | **REJECT** as fact. Corrected record in audit §3.4. |
| "Full crawl… 3 sitemaps, theme CSS: Measured" | No crawl or sitemap artefact exists. Sitemaps were never archived. | **REJECT** (T4) |
| Design system "must follow": `#0d3a4f` / `#fcb900` / `#ff6900` | Audit X-05 | **REJECT** |
| Integrity rule 5, "Commercial neutrality… non-negotiable" | An owner decision (OD-B). The owner's portfolio uses an affiliate model (E7). | **REQUIRES OWNER DECISION** |
| Copy is "verbatim, do not rewrite" | The copy has duplicate query ownership, unsourced figures and owner commitments | **REJECT** (the copy becomes a draft, §I) |
| "Bathing frequency lives on P03, not P05… cadence data has exactly one canonical home" | **Correct rule**, but the ZIP's own SEO table describes P05 as covering "bath frequency" | **VALID**: enforce it |
| P22 `/project-package/` kept as a `noindex` utility | Internal document on the public site | **REJECT** |
| Redirects: 308; `/faq/` "KEEP (rebuilt in place)" but mapped to `/dog-grooming-problems/`; the at-home post "KEEP" but redirected | 308 is a Next.js detail. The ZIP contradicts itself on its KEEP/REDIRECT labels. | **REJECT**; replaced by §H |
| Media URLs: 410, "AI-generated template images" | AI generation is unverified (audit F18). Removing them is fine. | **VALID WITH CORRECTION** (drop the AI claim) |
| Inventory: every leaf page is "linked from P02/P03/P16 where applicable" | Boilerplate. Not true per page. | **REJECT**; replaced by §C/§D |
| Implementation contract §6: database "optional; static alternatives allowed" | Compatible with WordPress | **VALID** |
| Image placeholders "are the approved state" at launch | Owner decision (OD-I) | **REQUIRES OWNER DECISION** |
| "No blog, no archive, no category taxonomy" | Depends on the publishing model (OD-E) | **REQUIRES OWNER DECISION** |

**ZIP verdict:** Do not use it as a handoff. Its reusable parts (the cadence-ownership rule, the static-alternative contract, the image registry as candidates) are absorbed into this document.

---

## C. Normalized content inventory

**Content roles:**

| Role | Meaning |
|---|---|
| CORE | Core editorial guide |
| SUPPORT | Supporting guide |
| TASK | Task / problem guide |
| LIFE | Life-stage guide |
| REF | Reference |
| DS | Decision support. A comparison-type role; listed under "decision support" per §J. |
| UTIL | Utility / support |

**Confidence:** H = high, M = medium, L = low.

**"Recommended action" for each page:**

| Action | Meaning |
|---|---|
| **KEEP AS INDEPENDENT GUIDE** | The guide keeps its own canonical URL |
| **MAKE SUPPORTING SECTION** | The topic becomes a section of another page |
| **CONSOLIDATE** | Merged into another page |
| **REJECT** | Not built |

| ID | Proposed title (working) | Canonical URL | Primary user job | Primary intent | Secondary intents | Role | Parent / hub | Supporting pages | Evidence basis | LMArena status | Recommended action | Conf. | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GD-00 | Home | `/` | Work out where to start and what this site covers | Navigational / orientation | Brand | UTIL (hub) | — | GD-01, 02, 03, 11–14 | T1 (legacy `/`) | Hub with wrong title | **KEEP** (orientation only) | H | Must not target "how to groom a dog at home" |
| GD-01 | How to groom your dog at home | `/how-to-groom-your-dog-at-home/` | Carry out a full home groom in the right order | How to groom a dog at home | Kit overview; order of steps; when to stop | CORE | Home | GD-02, 03, 04–09, 10 | T1 (both legacy posts and the `/blog/` article cover it) | Pillar | **KEEP AS INDEPENDENT GUIDE** | H | Owns the routine and its order. Owns no technique depth (that is on the task pages). |
| GD-02 | Dog grooming schedule by coat type | `/how-often-should-you-groom-your-dog/` | Plan how often to brush, bathe, trim nails and check ears and teeth | How often to groom / bathe / brush / trim nails | Grooming calendar | CORE | Home | GD-03, task pages | T2 | Pillar + DB tool | **KEEP AS INDEPENDENT GUIDE** | M-H | Owns **every** frequency question. Static coat × task table. Figures need EV-1. |
| GD-03 | Dog coat types | `/dog-coat-types/` | Identify the dog's coat and what it implies | What coat type is my dog | Breed-to-coat lookup; "should I shave a double coat" | REF | Home | GD-02, 05, 06 | T2 | `/coat-types-and-breed-grooming/` | **KEEP AS INDEPENDENT GUIDE** (renamed) | M | Breed scope limited to a lookup table, pending OD-D |
| GD-04 | Bathing your dog | `/bathing-your-dog/` | Wash and dry the dog safely | How to bathe a dog | Shampoo choice (incl. human shampoo); drying; face washing | TASK | GD-01 | GD-05, 02, 12 | T1 (legacy tips post) | Task | **KEEP AS INDEPENDENT GUIDE** | H | Frequency → links to GD-02. Bath refusal → GD-12. |
| GD-05 | Brushing your dog | `/brushing-your-dog/` | Brush properly; deal with mats and shedding | How to brush a dog | Remove mats; de-shed; line brushing | TASK | GD-01 | GD-10, 03, 13 | T1 (legacy) | `/brushing-mats-and-shedding/` | **KEEP AS INDEPENDENT GUIDE** (renamed) | H | Mats and shedding stay sections. Severe matting → professional. |
| GD-06 | Dog haircuts and trimming at home | `/dog-haircuts-and-trimming/` | Decide what to trim at home, and how | How to cut a dog's hair at home | Sanitary trim; paw pads; face; clipper blade basics; cut-style names | TASK | GD-01 | GD-10, 14, 15 | T2 | Task | **KEEP AS INDEPENDENT GUIDE** | M-H | Anal glands: referral only |
| GD-07 | Trimming your dog's nails | `/trimming-dog-nails/` | Trim nails without hitting the quick | How to trim dog nails | Black nails; quick bleeding; grinder vs clipper | TASK | GD-01 | GD-12, 10, 02 | T1 (legacy) | Task | **KEEP AS INDEPENDENT GUIDE** | H | Frequency → GD-02. Refusal → GD-12. |
| GD-08 | Cleaning your dog's ears | `/cleaning-dog-ears/` | Clean the visible ear safely; know when not to | How to clean dog ears | Cleaner choice; ear hair plucking (decision only) | TASK | GD-01 | GD-13, 02 | T1 (legacy) | Task | **KEEP AS INDEPENDENT GUIDE** | M-H | Infection signs → vet. Treatment out of scope. |
| GD-09 | Brushing your dog's teeth | `/brushing-dog-teeth/` | Brush teeth; judge the alternatives | How to brush dog teeth | Toothpaste safety; chews and alternatives | TASK | GD-01 | GD-12, 11 | T1 (legacy) | Task | **KEEP AS INDEPENDENT GUIDE** | M | Dental disease → vet. Chews may touch the commercial layer (§J). |
| GD-10 | Dog grooming tools | `/dog-grooming-tools/` | Choose the few tools a coat actually needs | Which grooming tools do I need | Brush types; rakes; clippers; dryers; starter kits | DS | Home / GD-01 | GD-03, 05, 06, 07 | T2 | `/grooming-tools/` | **KEEP AS INDEPENDENT GUIDE** (renamed) | M | Owns **all** "which tool / which brush" questions. Commercial extension is OD-B. |
| GD-11 | Puppy grooming | `/puppy-grooming/` | Make grooming normal from the start | Puppy grooming | First bath; first groom; handling practice | LIFE | Home | GD-12, 04, 07 | T2; E7 (no puppy-s grooming page) | Lifecycle | **KEEP AS INDEPENDENT GUIDE** | M-H | Cross-domain boundary in §L |
| GD-12 | Grooming an anxious dog | `/grooming-an-anxious-dog/` | Groom a fearful or resistant dog | Dog hates being groomed / won't let me | Muzzle training; desensitising; dryer fear; groomer handover | TASK | Home | GD-07, 04, 14 | T2 | `/grooming-anxious-dog/` | **KEEP AS INDEPENDENT GUIDE** (renamed) | M-H | Owns **all** resistance and refusal intents. Medication: referral only. |
| GD-13 | Senior dog grooming | `/senior-dog-grooming/` | Adapt grooming to an older or frail dog | Grooming an old dog | Arthritis; lumps; thin skin; nails | LIFE | Home | GD-07, 12, 15 | T2 | Lifecycle | **KEEP AS INDEPENDENT GUIDE** | M | Health coordination → vet |
| GD-14 | Dog grooming problems | `/dog-grooming-problems/` | Work out what a post-grooming symptom means and where to go | Dog grooming problems | Itch, smell, bumps, redness, flaky skin, tear stains, head shaking | TASK (router) | Home | All task pages; vet | T2 | Task | **KEEP AS INDEPENDENT GUIDE** (narrowed) | M | Routes outward. Does not diagnose. Owns "after grooming" symptom queries. |
| GD-15 | Choosing a dog groomer | `/choosing-a-dog-groomer/` | Choose, prepare for and evaluate a groomer | How to choose a dog groomer | What happens at an appointment; salon vs mobile vs self-wash; tipping; complaints | DS | Home | GD-16, 12, 13 | T2 | Task | **KEEP AS INDEPENDENT GUIDE** | M | Lead-gen extension is OD-A |
| GD-16 | Dog grooming cost | `/dog-grooming-cost/` | Set a budget and understand quotes | How much does dog grooming cost | Price drivers; add-ons; annual budget | DS | GD-15 | GD-15, 02 | T2 (intent). Figures T4. | Commercial-info | **KEEP AS INDEPENDENT GUIDE**, conditional | M (intent) / L (content) | Blocked on EV-2 and OD-G |
| GD-17 | Dog grooming glossary | `/dog-grooming-glossary/` | Look up a term mid-task or after a groomer visit | Grooming term meanings | Cut names; coat terms | REF | Footer / contextual | GD-06, 03, 15 | T2 (weak) | `/glossary/` | **KEEP AS INDEPENDENT GUIDE**, low nav visibility | M | Definitions only. No new claims. Linked from the first use of each term, not from every page. |
| GD-18 | About | `/about/` | Find out who runs the site and what it is | About | — | UTIL | Footer | GD-19, 20 | T1 (legacy `/about/`) | Trust | **KEEP** | H | Content depends on OD-A, OD-B, OD-F |
| GD-19 | Editorial & sourcing policy | `/editorial-policy/` | Judge how far to trust the guidance | How content is sourced | Health boundary; corrections; disclosure (if commercial) | UTIL | Footer | GD-18 | T2 | Trust | **KEEP AS INDEPENDENT GUIDE** | M | If OD-B allows affiliates, the disclosure lives here or on `/disclosure/` (OD-H) |
| GD-20 | Contact & corrections | `/contact/` | Report an error or ask a question | Contact | — | UTIL | Footer | GD-18, 19 | T1 (legacy `/contact/`) | Trust | **KEEP** | H | No invented address, phone or email |
| GD-21 | Privacy policy | `/privacy-policy/` | Find out what data the site collects | Privacy | — | UTIL | Footer | — | T1 (form collects email; sister sites have one) | **Missing** | **NEW** | H | Required by the form and any analytics |
| GD-22 | All guides | `/guides/` | See everything in one place | Browse | — | UTIL (index) | Nav / home | All guides | T3 | Missing (library was on the homepage) | **NEW**, conditional | M | Needed if guides are WordPress posts (§H.3). It keeps the homepage from becoming the article index. |
| — | Project package | — | — | — | — | — | — | — | — | Public page | **REJECT** | H | Internal |
| — | Mats / human shampoo / sanitary trim / paw pads / anal glands / FAQ as pages | — | — | — | — | — | — | — | T2 | Rejected by LMArena | **MAKE SUPPORTING SECTION** of GD-05, 04, 06 | H | Agrees with LMArena |
| — | Per-breed pages | — | — | — | — | — | — | — | No evidence | Rejected | **REJECT** for now (OD-D) | M | — |
| — | Standalone comparison pages (grinder vs clipper, etc.) | — | — | — | — | — | — | — | No evidence | Not proposed | **MAKE SUPPORTING SECTION** | M-H | — |

**Launch page count:**
- **20 pages:** GD-00 to GD-21.
- **21 pages:** adding GD-22, if OD-E selects WordPress posts.

This count comes from distinct user tasks, not from a target.

---

## D. Canonical ownership map

One intent, one owner. Other pages may mention a topic in context, but only the owner page answers it fully.

| User intent | Canonical page | Supporting (context and link only) | Conflict found in LMArena | Resolution |
|---|---|---|---|---|
| Where do I start / what does this site cover | GD-00 | — | Homepage title targeted "how to groom your dog at home" | The homepage is orientation only |
| How to groom a dog at home (whole routine, order of steps) | GD-01 | GD-00 | Homepage vs pillar | GD-01 owns it |
| What do I need to groom my dog (kit overview) | GD-10 | GD-01 (short kit list) | Pillar's "what do I need" query vs tools page | GD-10 owns selection. GD-01 keeps a short checklist that links to GD-10. |
| How to dry a dog after a bath | GD-04 | GD-01 (one routine step) | Assigned to both GD-01 and GD-04 | GD-04 owns it |
| How often to groom / bathe / brush / trim nails / clean ears / brush teeth | GD-02 | GD-04, 05, 07, 08, 09 (one line plus link) | Frequency queries on bathing, nails, ears and teeth pages | GD-02 owns **all** frequency intents |
| Grooming schedule by coat | GD-02 | GD-03 | Coat page tables vs schedule tables | GD-02 holds the cadence tables. GD-03 holds identification and coat-specific technique notes, with no cadence table. |
| What coat type is my dog | GD-03 | GD-02 | — | — |
| How to groom a [breed] | GD-03 (lookup table) | — | Breed queries on a coat page | Kept as a coat lookup table. A breed hub is OD-D. |
| Should I shave a double-coated dog | GD-03 | GD-06 | — | GD-03 owns it. GD-06 links to it. |
| How to bathe a dog; which shampoo; human shampoo | GD-04 | — | — | — |
| How to brush a dog; remove mats; de-shed | GD-05 | GD-13, GD-15 (severe matting → professional) | — | — |
| Which brush for my dog / for a double coat | GD-10 | GD-05 (links to it) | "Best brush for a double coat" on the brushing page | GD-10 owns it |
| How to trim a dog's hair; sanitary trim; paw pads; face trim | GD-06 | — | — | — |
| Clipper blade sizes | GD-06 (technique) | GD-10 (buying) | Split | GD-06 owns blade use. GD-10 owns clipper selection. |
| Cut-style names (teddy bear vs kennel cut) | GD-06 | GD-17 (short definition), GD-15 (what to ask for) | Three pages touch it | GD-06 owns it. The glossary gives a one-line definition. |
| How to trim dog nails; black nails; the quick | GD-07 | GD-13 (senior adaptation) | — | — |
| Nail grinder vs clipper | GD-07 | GD-10 (buying) | Split | GD-07 owns the comparison. GD-10 links to it. |
| Dog won't let me cut nails / hates baths / hates grooming | GD-12 | GD-04, 07 (one line plus link) | On the nails, bathing and anxious-dog pages | GD-12 owns all refusal and fear intents |
| How to clean dog ears; ear cleaner; plucking | GD-08 | — | — | — |
| Dog shaking head after grooming | GD-14 | GD-08 | On the ears page | GD-14 owns post-grooming symptoms |
| How to brush dog teeth; toothpaste; do dental chews work | GD-09 | — | — | — |
| Puppy first bath / first groom / getting used to handling | GD-11 | GD-04, 12 | "How often should I brush my puppy" on GD-11 | Frequency → GD-02, with a puppy row in its table |
| Grooming a senior or arthritic dog | GD-13 | GD-07 | — | — |
| Itchy, red or bumpy after grooming; smells after a bath; flaky skin; tear stains | GD-14 | Task pages | — | GD-14 routes. It does not treat. |
| How to choose a groomer; appointment expectations; salon vs mobile; tipping; complaints | GD-15 | GD-16 | — | — |
| How much does grooming cost; mobile grooming prices | GD-16 | GD-15 | "Prices near me" implies local intent | Drop the local query. No local intent. |
| Grooming terminology | GD-17 | All pages (first use) | — | — |
| Who runs the site; is it a salon | GD-18 | — | — | — |
| How content is sourced; is it vet-reviewed | GD-19 | GD-18 | — | Must not claim vet review |
| Contact / correction | GD-20 | — | — | — |

**Rules applied:**
- An FAQ entry may not repeat another page's main question.
- A keyword alone never creates a page.

---

## E. Future information architecture

```
HOME  (orientation: what the site is, where to start)
├── START HERE (core)
│   ├── How to groom your dog at home ............ CORE   GD-01
│   ├── Grooming schedule by coat type ............ CORE   GD-02
│   └── Dog coat types ............................ REF    GD-03
├── GROOMING TASKS  (each a child of the routine, GD-01)
│   ├── Bathing ................................... TASK   GD-04
│   ├── Brushing (mats, shedding) ................. TASK   GD-05
│   ├── Haircuts & trimming ....................... TASK   GD-06
│   ├── Nails ..................................... TASK   GD-07
│   ├── Ears ...................................... TASK   GD-08
│   └── Teeth ..................................... TASK   GD-09
├── YOUR DOG'S SITUATION
│   ├── Puppies ................................... LIFE   GD-11
│   ├── Senior dogs ............................... LIFE   GD-13
│   ├── Anxious or resistant dogs ................. TASK   GD-12
│   └── Grooming problems (symptom router) ........ TASK   GD-14
├── DECISIONS
│   ├── Grooming tools ............................ DS     GD-10
│   ├── Choosing a groomer ........................ DS     GD-15
│   └── Grooming cost ............................. DS     GD-16 (conditional)
├── REFERENCE
│   ├── Glossary .................................. REF    GD-17
│   └── All guides (index) ........................ UTIL   GD-22 (conditional)
├── [COMMERCIAL LAYER — OFF until OD-A/OD-B]  (§J)
└── SITE
    ├── About ..................................... GD-18
    ├── Editorial & sourcing policy ............... GD-19
    ├── Contact & corrections ..................... GD-20
    └── Privacy policy ............................ GD-21
```

### How the IA answers the core questions

| Question | Answer |
|---|---|
| What is the site for? | Practical guidance for dog owners grooming at home, and for knowing when the job belongs to a groomer or a vet |
| Who is it for? | Dog owners, from first-timers to experienced owners with a specific problem. Not groomers or vets. |
| What are the major user tasks? | Do the routine. Plan a schedule. Identify the coat. Do one task. Handle a special dog. Fix a problem. Choose tools or a groomer. |
| Where does a new visitor start? | The homepage → "Start here" (routine, schedule, coat) |
| How does a visitor go from broad to specific? | Routine → task pages. Schedule → task pages. Coat → schedule and tools. Situation → tasks. Problem → task or vet. |
| What content is foundational, and what supports it? | Foundational: GD-01, 02, 03. Supporting: tasks, situations, reference. Decision support: tools, groomer, cost. |
| What content is commercial? | None at launch unless OD-A/OD-B approve it. Even then it would be a separate layer, not built into the editorial pages. |
| What stays off the site? | Food, health treatment, adoption, sitting, mating, cats, insurance (§L) |

**Section hubs:** The section groupings are **navigation groups, not hub pages**. This follows LMArena, and it is correct at about 20 pages. If the content doubles (Scenario G), a section with more than about 8 items becomes a WordPress category archive styled as a hub. No URL changes are needed, because guide URLs don't include the category (§H.3).

---

## F. Primary navigation

### Primary navigation (5 items; dropdowns of 6 or fewer)

1. **Start here**: Full routine · Grooming schedule · Coat types
2. **Grooming tasks**: Bathing · Brushing · Haircuts & trimming · Nails · Ears · Teeth
3. **Your dog**: Puppies · Senior dogs · Anxious dogs
4. **Problems**: a direct link to GD-14. A visitor with a problem (Scenario B) gets there in one click.
5. **Tools & groomers**: Grooming tools · Choosing a groomer · Grooming cost

Out of the primary navigation:
- **No header sales CTA.**
- **About, Editorial, Contact and the Glossary** move to the footer.
- **"All guides"** may be a sixth text link if GD-22 exists.

### Secondary and contextual navigation
- **Breadcrumbs:** Home › (section) › page, using Rank Math breadcrumbs.
- **"Read first" link:** at most one per guide, where a prerequisite is real (e.g. bathing → brushing first).
- **"Next step" cards:** 3–4 per guide, each with a stated reason (§F.1).
- **Inline links:** to the owner page of any intent mentioned (§D). Glossary links on first use only.

### Footer navigation
- **Guides:** the five groups condensed to their main pages, plus Glossary and All guides.
- **Site:** About · Editorial & sourcing policy · Contact & corrections · Privacy policy · [Disclosure, if OD-B allows commercial content].
- **Never in the footer:** a fake address, phone number or social profiles that don't exist.

### F.1 Internal linking model (each link needs a user reason)

| Relationship | Direction | User reason | Limit |
|---|---|---|---|
| Hub → core | GD-00 → GD-01/02/03 | "Start here" | 3 |
| Core → supporting | GD-01 → GD-04…09; GD-02 → task pages; GD-03 → GD-02, GD-10 | Go deeper into one step | Per step |
| Task → owner of a related intent | Task → GD-02 (how often), GD-12 (refusal), GD-10 (which tool) | "This page doesn't answer that; that page does" | As needed |
| Problem → task / vet | GD-14 → task pages; vet callouts | Fix the cause, or escalate | Per symptom |
| Life stage → tasks | GD-11/13 → GD-04, 07, 12 | Adapt a specific task | 3–4 |
| Reference → guides | GD-17/GD-03 → task pages | Back to the job | Few |
| Editorial → decision support | Task pages → GD-10, GD-15 | "Need the tool, or need a pro?" | 1–2 per page |
| Decision support → commercial | GD-10 → commercial layer | **Only if OD-B approves**, disclosed | — |
| Everything → trust | Disclaimer → GD-19 | "How far to trust this" | 1 |

**Rule:** No page is a link directory. Remove LMArena's links to `/project-package/`.

---

## G. Homepage model

**Order and purpose of each section:**

| # | Section | Purpose | Why it exists | Must not become |
|---|---|---|---|---|
| 1 | **Value proposition** | State what the site is (practical dog-grooming guidance for owners) and its limits (not a salon, not vet advice) | Orientation. Prevents the legacy confusion ("Appointment", celebrity staff). | A keyword headline ("How to groom your dog at home") |
| 2 | **Start here: 3 entry points** | Routine (GD-01), Schedule (GD-02), "What coat does my dog have?" (GD-03) | These are the three foundational jobs a new visitor has (Scenario A) | A full article list |
| 3 | **By situation: 4 cards** | Puppy · Senior · Anxious · "Something's wrong" (GD-14) | Visitors with a specific dog or problem skip the basics | A category dump |
| 4 | **Grooming tasks: 6 compact links** | Bathing, brushing, haircuts, nails, ears, teeth | Direct access for task-intent visitors | A card grid with excerpts |
| 5 | **Using a professional** | Choosing a groomer, grooming cost | Decision support. The honest replacement for the legacy "Services" section. | A service catalogue or price list |
| 6 | **How this guide works: trust strip** | Only claims that can be backed up: sourcing policy, the vet boundary, real credited photography (after EV-5), a corrections channel | Builds trust without fabricated credentials | Badges, testimonials, "vet-approved", review counts |
| 7 | **(Optional) Tools entry / commercial slot** | Link to GD-10 (decision support). An affiliate or ad slot **only if** OD-B approves it, and labelled. | Leaves room for monetization without distorting sections 1–5 | A product carousel at the top of the page |
| 8 | **Secondary exploration** | Glossary · All guides | For browsers | A "latest posts" feed. The homepage is not an archive. |

The homepage meta title and H1 target brand and orientation, not the head term owned by GD-01.

---

## H. URL architecture

### H.1 Proposed canonical URLs

| ID | Canonical URL | Change vs LMArena |
|---|---|---|
| GD-00 | `/` | — |
| GD-01 | `/how-to-groom-your-dog-at-home/` | — |
| GD-02 | `/how-often-should-you-groom-your-dog/` | — (accepted: it matches the dominant question form) |
| GD-03 | `/dog-coat-types/` | was `/coat-types-and-breed-grooming/` (over-promised breed coverage) |
| GD-04 | `/bathing-your-dog/` | — |
| GD-05 | `/brushing-your-dog/` | was `/brushing-mats-and-shedding/` (listed keywords) |
| GD-06 | `/dog-haircuts-and-trimming/` | — |
| GD-07 | `/trimming-dog-nails/` | — |
| GD-08 | `/cleaning-dog-ears/` | — |
| GD-09 | `/brushing-dog-teeth/` | — |
| GD-10 | `/dog-grooming-tools/` | was `/grooming-tools/` (adds the subject; clearer if the commercial layer arrives) |
| GD-11 | `/puppy-grooming/` | — |
| GD-12 | `/grooming-an-anxious-dog/` | was `/grooming-anxious-dog/` (grammar) |
| GD-13 | `/senior-dog-grooming/` | — |
| GD-14 | `/dog-grooming-problems/` | — |
| GD-15 | `/choosing-a-dog-groomer/` | — |
| GD-16 | `/dog-grooming-cost/` | — |
| GD-17 | `/dog-grooming-glossary/` | was `/glossary/` (self-describing) |
| GD-18 | `/about/` | — |
| GD-19 | `/editorial-policy/` | — |
| GD-20 | `/contact/` | — |
| GD-21 | `/privacy-policy/` | NEW |
| GD-22 | `/guides/` | NEW (conditional) |

**Rules:**
- Lowercase, hyphenated, trailing slash.
- No dates and no category in guide URLs.
- One canonical URL per page.
- No URL exists because of a keyword alone.
- The slug renames are OD-K's to approve. They are recommended, and nothing is published yet.

### H.2 Historical URL decisions

| Historical URL | Future URL | Action | Reason |
|---|---|---|---|
| `/` | `/` | **RETAIN** (content replaced) | Same role, new content |
| `/home-b/` | `/` | **REDIRECT** (301) | A duplicate homepage |
| `/about/` | `/about/` | **RETAIN** (content replaced) | Same role |
| `/team/` | `/about/` | **REDIRECT** (301) | Celebrity "staff" must not be carried forward. The "who's behind this" intent belongs on About. |
| `/services/` | `/choosing-a-dog-groomer/` | **REDIRECT** (301), conditional on OD-A ≠ real service | No real service existed. The nearest honest intent is choosing a groomer. |
| `/services-detail/` | `/choosing-a-dog-groomer/` | **REDIRECT** (301), same condition | Same |
| `/pricing/` | `/dog-grooming-cost/` | **REDIRECT** (301) once GD-16 is live; until then **RETIRE** (410) | The legacy page was an arbitrary Dog/Cat/Other price grid (**not** "$52/month"). The intent is cost. |
| `/faq/` | — | **RETIRE** (410) | Lorem ipsum, and donation-template questions. No intent to preserve. Redirecting it to an unrelated page would read as a soft 404. |
| `/blog/` | `/guides/` if GD-22 exists; otherwise `/how-to-groom-your-dog-at-home/` | **REDIRECT** (301) | It held a routine-adjacent article and the post listing |
| `/contact/` | `/contact/` | **RETAIN** (content replaced) | Same role |
| `/404-2/` | — | **RETIRE** (410) | Demo page |
| `/top-dog-grooming-tips-for-a-happy-healthy-pup/` | `/how-to-groom-your-dog-at-home/` | **CONSOLIDATE** (301) | Five-bullet outline of the routine |
| `/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/` | `/how-to-groom-your-dog-at-home/` | **CONSOLIDATE** (301) | Thin seed of the routine guide |
| `/locations.kml` | — | **RETIRE** | Empty Local SEO file. Do not enable Local SEO. |
| `/wp-content/uploads/*` (legacy media) | — | **RETIRE** | Template media. (Whether it was AI-generated is unverified and irrelevant.) |
| `/single-post/` | — | **UNKNOWN — NEEDS EVIDENCE** (EV-3) | Linked from the old homepage. Its content was never captured. |
| `/blog1/` | — | **UNKNOWN — NEEDS EVIDENCE** (EV-3). Default: do nothing. | Asserted only by LMArena |
| `/about-us/` | — | **REJECT** (no redirect) | No evidence it ever existed |
| 2004–2005 `*.htm` URLs | — | **UNKNOWN — NEEDS EVIDENCE** (EV-3). Default: do nothing. | A prior, unrelated site. Redirect only if backlinks justify it. |

**Implementation:** Rank Math Redirections, 301, with 410 where retired. Nothing exists to protect while the site is blank, so redirects go live with the launch.

### H.3 WordPress mapping (architecture level, not a build spec)

| Content | WordPress type | Notes |
|---|---|---|
| GD-01 to GD-17 | **Posts** with permalink `/%postname%/` (recommended), or **Pages** | Posts give categories (for future hubs), an author field, dates and Article schema through Rank Math, without changing the flat URLs. The choice is OD-E. |
| Section groupings | **Categories** (Start here, Tasks, Your dog, Decisions, Reference). Not in URLs. Archives `noindex` until a section is large enough to be a hub. | No tags |
| GD-22 | WordPress posts page | Only if Posts are chosen |
| GD-00, GD-18 to GD-21 | Pages | — |
| Guide layout | One Elementor single template for guides. The trust pages share one page template. | Elementor Pro Theme Builder, or the free-Elementor + UAE/HFE pattern used on dogs-food.com (OD-L) |
| Content blocks | Short answer, sections, tables, steps, four callout tones, FAQ (Rank Math FAQ block → FAQPage), next-step cards | These map onto standard widgets. No custom application code is needed. |
| Schedule (GD-02) | A static table, or Elementor tabs per coat | Replaces the Postgres tool |
| Corrections form (GD-20) | Elementor Pro Form or a form plugin; storage or email destination set by the owner | Requires GD-21 |

---

## I. Content action matrix

The LMArena copy is a **draft source**. "KEEP" means the page keeps its role, not that its copy is approved. No copy is approved until its sources are attached (§K).

| LMArena item | Action | What changes |
|---|---|---|
| Homepage (`page.tsx`) | **REWRITE** | Orientation model (§G). New title and H1. Remove the library grid and project links. |
| `how-to-groom-your-dog-at-home` | **NARROW** | Keep routine order and kit checklist. Move depth to task pages. Drop "how to dry" as an owned query. |
| `how-often-should-you-groom-your-dog` | **EXPAND** | Absorb every frequency question from the task pages, plus a puppy row. Static table. **Source the figures (EV-1).** |
| `coat-types-and-breed-grooming` | **NARROW** + **MOVE** to `/dog-coat-types/` | Identification and coat-specific notes. Breed lookup table only. Cadence tables move to GD-02. |
| `bathing-your-dog` | **NARROW** | Remove the frequency and "dog hates baths" ownership (leave one line plus a link). |
| `brushing-mats-and-shedding` | **NARROW** + **MOVE** to `/brushing-your-dog/` | Remove "best brush" ownership (→ GD-10) |
| `dog-haircuts-and-trimming` | **KEEP** (role) / **REWRITE** (sourcing) | Clarify blade use vs buying |
| `trimming-dog-nails` | **NARROW** | Remove "how often" and "won't let me" ownership |
| `cleaning-dog-ears` | **NARROW** | Move "shaking head after grooming" to GD-14. Fix the meta-title typo ("Safly"). |
| `brushing-dog-teeth` | **NARROW** | Remove "how often". Review chews and alternatives against §J. |
| `grooming-tools` | **REWRITE** + **MOVE** to `/dog-grooming-tools/` | Owns all tool selection. Commercial treatment depends on OD-B. |
| `puppy-grooming` | **NARROW** | Remove "how often should I brush my puppy" (→ GD-02) |
| `senior-dog-grooming` | **KEEP** (role) | Source review (EV-6) |
| `grooming-anxious-dog` | **EXPAND** + **MOVE** to `/grooming-an-anxious-dog/` | Absorb all refusal intents from the task pages |
| `dog-grooming-problems` | **NARROW** | Router only. Absorb post-grooming symptoms. No treatment content. |
| `choosing-a-dog-groomer` | **KEEP** (role) | Source review. Groomer lead-gen is OD-A. |
| `dog-grooming-cost` | **REWRITE** | Remove all unsourced figures. Rebuild after EV-2 and OD-G. Drop "near me". |
| `glossary` | **KEEP** (role) + **MOVE** to `/dog-grooming-glossary/` | Definitions only; consistent with the owner pages |
| `about` | **REWRITE** | Remove the commercial and "no affiliate" commitments until OD-B. No invented people (OD-F). |
| `editorial-policy` | **REWRITE** | Commercial policy and disclosure depend on OD-B. Credentials section stays truthful. |
| `contact` | **REWRITE** | WordPress form. No booking language unless OD-A says otherwise. |
| — | **NEW** `/privacy-policy/` | Required |
| — | **NEW** `/guides/` (conditional) | If Posts are chosen |
| `project-package` (page, API, export) | **REJECT** | — |
| Schedule tool / DB / API routes | **REJECT** (as code) | Replaced by a static table |
| `seed-data.ts` cadence values | **REWRITE** (after EV-1) | Become the GD-02 table |
| `images.ts` registry | **KEEP** as candidates, conditional on EV-5 | 2 placeholders → OD-I |
| `next.config.ts` redirects | **REJECT** | Replaced by §H.2 |
| Palette tokens | **REJECT** | OD-J |
| Fonts (Comfortaa / Proza Libre) | **KEEP** as an option | OD-J |
| QA script and package QA tables | **REJECT** | Redo QA against the WordPress build |
| Retired topics (food, adoption, sitting, mating, illness guide, cats) | **RETIRE** | §L |

---

## J. Editorial / commercial boundary

| Layer | Content | Status | Rule |
|---|---|---|---|
| **Editorial core** | GD-01 to GD-09, GD-11 to GD-14, GD-17 | **FACT-BASED PROPOSAL: approved** | No product placements in the procedure or safety content. Advice stands without any purchase. |
| **Decision support** | GD-10 (tools), GD-15 (groomer), GD-16 (cost); comparison sections within tasks | **PROPOSAL: approved as editorial** | Evaluation criteria come before any product or provider. Comparisons are by type and function. |
| **Commercial** | Options: (a) disclosed affiliate links on GD-10 and selected task "what you need" boxes; (b) dedicated review or "best" pages; (c) display ads; (d) groomer lead-gen or directory | **OWNER DECISION REQUIRED (OD-A, OD-B)** | Commercial content links *from* decision support, never replaces it. Clearly labelled. Disclosed on `/editorial-policy/` or `/disclosure/`. If (b), it gets its own path (e.g. `/reviews/<slug>/`), so the editorial URL space stays clean. Each review page needs evidence of a distinct purchase task. |

**What is fact, what is proposal, what is the owner's call:**
- **FACT (T1):**
  - The legacy site had no working commerce.
  - The legacy WordPress install had PrettyLinks and Convert Pro.
  - The owner's puppy-s.com runs a disclosed affiliate model.
- **PROPOSAL:** The editorial architecture above works with or without commerce.
- **OWNER DECISION REQUIRED:**
  - whether commerce exists;
  - which type (a–d);
  - whether "independent" is used in positioning (it is only truthful under a disclosed policy);
  - ad placement.

---

## K. Trust & evidence register

### Roles must not be conflated
- **AUTHOR:** a real, named person who wrote the page. **None is established.** Use an organisation byline ("Grooming Dogs") until OD-F. Don't write "our team" or "our groomers".
- **EDITOR:** a real person who reviewed for accuracy. **None.**
- **EXPERT REVIEW:** a vet or groomer review. **None. Do not claim it.** Don't use "vet-approved", "vet-reviewed" or "expert-checked".
- **SOURCE:** a named, citable publication behind a factual claim. **Required.** Currently missing for every quantitative claim.
- **TESTIMONIAL:** **None. Do not carry forward.** The legacy celebrity-signed reviews and the celebrity "staff" are fabrications.

| Item | Status |
|---|---|
| Domain and site name "Grooming Dogs"; real Pexels photos credited to photographers | **Supported** (URLs resolve). Subjects and licence: EV-5. |
| "General information, not veterinary advice" disclaimer; vet-referral boundary | **Supported** (a policy, not a claim) |
| "Corrections are read and acted on" | **Owner commitment.** Keep only if the owner will do it (OD-F). |
| "No affiliate links / no ads / no lead-gen / no commercial relationship" | **Unsupported as a fact.** It's an owner decision (OD-B). Remove until decided. |
| "Independent" | **Conditional.** Only with a disclosed commercial policy. |
| Coat cadences (GD-02, `seed-data.ts`) | **Missing sources. UNVERIFIED** (EV-1) |
| Price ranges ($25–$160, "$40–$120") | **Missing sources. UNVERIFIED** (EV-2). Do not publish. |
| "SERP shows long coat-type guides"; "published veterinary guidance" | **UNVERIFIED** (T4). Do not cite. |
| VOHC mention (teeth page) | A real scheme, named but not cited. Add a citation (EV-6). |
| Health-adjacent statements (ears, teeth, skin, senior, anxiety and medication) | **Need future verification** (EV-6) |
| Matt Damon / Gal Gadot / … staff; celebrity-signed reviews; `petcute@mail.com`; Jl Soekarno-hatta address; `021-25400-8900` | **Invented / unsafe. DO NOT CARRY FORWARD.** |
| "Every photograph is real; none AI-generated" | **Verify per image** (EV-5) before stating it publicly |
| Legacy "veterinary-reviewed Illness Guide" | **Invented. DO NOT CARRY FORWARD.** |
| Rank Math schema: Article, FAQPage, Breadcrumb, WebSite | **Supported** (structural). No Review or AggregateRating schema without real reviews. |

---

## L. Cross-domain ownership

Evidence: E7 (puppy-s.com, 28 URLs, no grooming page) and E8 (dogs-food.com, 9 URLs, food only). The test is the user's task, not SEO convenience.

| Topic | Classification | Grooming-Dogs treatment |
|---|---|---|
| Home grooming routine and the six tasks | **GROOMING-DOGS PRIMARY** | Owns it |
| Grooming schedule; coat types | **GROOMING-DOGS PRIMARY** | Owns it |
| Puppy grooming (first bath, first groom, handling) | **GROOMING-DOGS PRIMARY** | GD-11 owns it. Puppy-S may link to it from its essentials and first-30-days pages. |
| Puppy grooming supplies as part of a new-puppy shopping list | **PUPPY-S PRIMARY** (`/best-puppy-essentials/`, supplies checklist) | GD-10 owns tool selection by coat. It links to Puppy-S only if the owner wants cross-site links (OD-C). |
| Puppy vaccinations before a groomer visit | **SHARED / CONTEXTUAL ONLY** | One line on GD-11/GD-15. Vet checklists belong to Puppy-S. |
| Grooming cost | **GROOMING-DOGS PRIMARY** | GD-16. Puppy-S's puppy-cost page mentions grooming in passing. |
| Total puppy cost; pet insurance | **PUPPY-S PRIMARY** | Out of scope |
| Diet for coat and skin health; supplements; fish oil | **DOGS-FOOD PRIMARY** | Contextual mention only on GD-14/GD-05 ("diet can affect coat; see a vet or nutrition source") |
| Dental chews as treats / food | **SHARED / CONTEXTUAL ONLY** | GD-09 covers dental effect only. The food angle belongs to Dogs-Food. |
| Dog food, toxic foods, puppy feeding | **DOGS-FOOD PRIMARY** | Out of scope |
| Crate training, potty training, settling in | **PUPPY-S PRIMARY** | Out of scope |
| Skin, ear and dental disease; parasites (fleas and ticks) treatment | **OUT OF SCOPE** (veterinary; no property owns it) | Recognise and refer only. Flea comb as a grooming tool: contextual. |
| Breed-specific grooming | **GROOMING-DOGS PRIMARY** (if ever built; OD-D) | Lookup table now |
| Adoption, pet sitting, mating | **OUT OF SCOPE** (all properties) | Retired |
| Cat grooming | **OUT OF SCOPE** | Retired (OD-C to confirm) |
| Human allergies to dog hair | **OUT OF SCOPE** | Shedding management only |

---

## M. Implementation handoff

### APPROVED TO BUILD
1. **WordPress + Elementor** on the blank install.
2. **Editorial page set** GD-00, GD-01, GD-04 to GD-09, GD-11 to GD-15, GD-17, GD-18, GD-20, GD-21: roles, boundaries (§C/§D) and URLs (§H.1). Building **structure and templates** is approved. Publishing **copy** is conditional (see the next list).
3. **Primary, secondary and footer navigation** (§F).
4. **Homepage model** (§G), sections 1–6 and 8.
5. **Canonical ownership rules** (§D), including "GD-02 owns all frequency intents" and "GD-12 owns all refusal intents".
6. **Historical URL decisions** in §H.2 marked RETAIN, REDIRECT (unconditional), CONSOLIDATE, RETIRE or REJECT.
7. **Content block model:** short answer, sections, tables, steps, four callout tones, FAQ per page, next-step cards with reasons, breadcrumbs.
8. **Internal-linking rules** (§F.1).
9. **Trust rules** (§K): organisation byline; no expert claims, testimonials or invented contacts; FAQPage, Article and Breadcrumb schema only.

### APPROVED WITH CONDITIONS
| Item | Condition |
|---|---|
| **Copy for every guide** | LMArena drafts may be used as source material after the §I action, with sources attached (EV-1, EV-6) and an owner content review |
| **GD-02 schedule table** | Figures sourced (EV-1) |
| **GD-03 coat page** | The breed scope stays a lookup table unless OD-D says otherwise |
| **GD-10 tools** | Built as editorial decision support. Commercial treatment waits for OD-B. |
| **GD-16 cost** | Not published until EV-2 and OD-G. Until then, `/pricing/` → 410. |
| **GD-19 editorial policy** | Published without commercial statements until OD-B |
| **GD-22 `/guides/`, Posts + categories model** | OD-E |
| **Slug renames** (GD-03, 05, 10, 12, 17) | OD-K. They are recommended. |
| **`/services/` redirects** | OD-A confirms there is no real service |
| **Photography** | EV-5. Placeholders shown only if OD-I allows. |
| **Fonts Comfortaa + Proza Libre** | OD-J |
| **Guide single template** | Elementor Pro, or free Elementor + UAE/HFE (OD-L) |

### OWNER DECISION REQUIRED
| ID | Decision | Default if not decided |
|---|---|---|
| **OD-A** | Business model: editorial only, or also groomer lead-gen or a directory? (A real grooming service is assumed **not** to exist; confirm.) | Editorial only |
| **OD-B** | Commercial layer: affiliate (a), review pages (b), ads (c), none? Use "independent" in positioning? | No commercial content at launch. Architecture leaves room for it. |
| **OD-C** | Cross-site boundary (§L): confirm it. Allow cross-links to Puppy-S and Dogs-Food? Confirm cats are out. | §L as written; no cross-links |
| **OD-D** | Breed coverage: lookup table only, or a future breed hub? | Lookup table |
| **OD-E** | Publishing model: fixed reference set, or ongoing articles? WordPress Posts or Pages? | Posts with `/%postname%/` and GD-22 |
| **OD-F** | Authorship: a named real author or editor? Will corrections be actioned? | Organisation byline; no commitments |
| **OD-G** | Cost page market and currency | Hold GD-16 |
| **OD-H** | URL convention: flat (recommended) or `/guides/<slug>/` to match the sister sites? A separate `/disclosure/` page, or a section in the editorial policy? | Flat; section in the editorial policy |
| **OD-I** | Launch with labelled image placeholders, or wait for photos? | Wait |
| **OD-J** | Visual identity: keep Comfortaa/Proza Libre and the E4 kit colours, or redesign? (Not the WordPress-default palette.) | Decided in the design phase |
| **OD-K** | Approve the slug renames in §H.1 | Use the renames |
| **OD-L** | Elementor Pro licence available? | Free Elementor + UAE/HFE, as on dogs-food.com |

### EVIDENCE REQUIRED
| ID | Evidence | Unblocks |
|---|---|---|
| **EV-1** | A named, citable source for each cadence value (coat × brushing / bathing / nails / ears) | GD-02, GD-03 copy |
| **EV-2** | Named, dated price sources for one chosen market | GD-16 |
| **EV-3** | Backlink check (and GSC export if the owner has it) for the legacy WordPress URLs, `/single-post/`, `/blog1/` and the 2004-era URLs | §H.2 UNKNOWN rows |
| **EV-4** | (Optional) Dated SERP or GSC check on each guide's main query | Confidence on GD-16 and GD-17; any future comparison or review pages |
| **EV-5** | Check each of the 27 Pexels images: subject matches alt text and caption; licence confirmed on the source page | Photography |
| **EV-6** | Source or expert check of the health-adjacent statements (ears, teeth incl. VOHC, skin symptoms, senior, anxiety and medication) | Copy for GD-08, 09, 12, 13, 14 |

### DO NOT BUILD
- **The Next.js/Postgres application:** routes, components, database, schedule API, feedback API, project-package export.
- **`/project-package/`,** in any form (public or `noindex`).
- **`/faq/` as a page;** per-breed pages; per-question pages (mats, human shampoo, sanitary trim, anal glands); standalone comparison pages.
- **Off-topic sections:** food, supplements, accessories, adoption, sitting, mating, the illness guide, cat grooming.
- **Any team, staff, author, reviewer, credential, testimonial, rating, award or partnership** that isn't substantiated.
- **The legacy placeholder contact details;** a Local SEO location; booking or "Appointment" CTAs.
- **The WordPress-default palette** (`#0d3a4f`, `#fcb900`, `#ff6900`) presented as brand.
- **The coded redirect map** (`next.config.ts`) and the ZIP's redirect table.
- **Unsourced price figures** and the "attributed to third-party sources" wording.
- **"No affiliate / no ads / independent" statements,** before OD-B.
- **The ZIP's `AGENT_START_HERE` and implementation contract** as governing documents.

---

# FINAL GATE

### ARCHITECTURE VALIDATED WITH CONDITIONS

The editorial architecture (page set, ownership, IA, navigation, homepage model, URLs and linking) is corrected and normalized, and is ready for the next architecture/production phase on WordPress + Elementor.

Before production, these must be resolved:
- **Before the affected pages are built or published:** OD-A, OD-B, OD-E, OD-F.
- **Before the affected copy is published:** EV-1, EV-2, EV-5, EV-6.

The remaining items have safe defaults.

## FINAL CARRY-FORWARD LIST

### CARRY FORWARD AS-IS
- **Task-based architecture:** routine → six task pages; three situation pages; a symptom router; groomer and cost as decision support.
- **Consolidations:** coat and breed together (as a lookup); brushing, mats and shedding together; haircuts, sanitary trim and pads together; how-often separate from how-to; cost separate from choosing a groomer; puppy, senior and anxious as three pages.
- **What not to build:** no per-breed, per-question or FAQ pages; no standalone comparison pages; comparisons live as sections.
- **FAQ per page,** with FAQPage schema.
- **"Cadence data has exactly one canonical home"** (GD-02).
- **Content block model:** short answer, sections, tables, steps, four callout tones, next-step cards with reasons, breadcrumbs.
- **Vet boundary:** recognise and refer; no treatment, medication or dosing.
- **URLs:** flat, lowercase, hyphenated, trailing slash. Unchanged slugs: `/`, `/how-to-groom-your-dog-at-home/`, `/how-often-should-you-groom-your-dog/`, `/bathing-your-dog/`, `/dog-haircuts-and-trimming/`, `/trimming-dog-nails/`, `/cleaning-dog-ears/`, `/brushing-dog-teeth/`, `/puppy-grooming/`, `/senior-dog-grooming/`, `/dog-grooming-problems/`, `/choosing-a-dog-groomer/`, `/dog-grooming-cost/`, `/about/`, `/editorial-policy/`, `/contact/`.
- **Retiring the off-topic legacy sections** and all fabricated legacy identity and contact content.

### CARRY FORWARD WITH CORRECTIONS
- **Homepage:** orientation role. Doesn't target GD-01's head term. No article grid.
- **Navigation:** 5 items. About, Contact and Glossary in the footer. Project package removed. "Problems" one click away.
- **Query ownership:** frequency → GD-02; refusal → GD-12; tool choice → GD-10; post-grooming symptoms → GD-14; drying → GD-04; "near me" dropped.
- **Slugs:** `/dog-coat-types/`, `/brushing-your-dog/`, `/dog-grooming-tools/`, `/grooming-an-anxious-dog/`, `/dog-grooming-glossary/`.
- **Coat page** narrowed to identification plus a breed lookup.
- **Problems page** narrowed to a router.
- **Trust pages** rewritten without commercial or authorship commitments.
- **Added pages:** `/privacy-policy/`; `/guides/` (if Posts).
- **Historical URL map** rebuilt (§H.2), with the corrected `/pricing/` history (Dog/Cat/Other grid).
- **Schedule tool** becomes a static table. **Corrections form** becomes a WordPress form.
- **LMArena page copy:** draft source only, after the §I edits.
- **Image registry:** candidates only.

### REQUIRES OWNER DECISION
- OD-A business model
- OD-B commercial layer and "independent" wording
- OD-C cross-site boundary and links
- OD-D breed coverage
- OD-E Posts vs Pages / ongoing publishing
- OD-F authorship and corrections commitment
- OD-G cost market
- OD-H URL convention and disclosure page
- OD-I image placeholders
- OD-J visual identity
- OD-K slug renames
- OD-L Elementor Pro

### REQUIRES EVIDENCE
- **EV-1:** cadence sources
- **EV-2:** price sources
- **EV-3:** backlinks or GSC for legacy, `/single-post/`, `/blog1/` and the 2004-era URLs
- **EV-4:** optional SERP/GSC demand check
- **EV-5:** Pexels subject and licence check
- **EV-6:** health-adjacent claim sources (including VOHC)

### REJECT / DO NOT CARRY FORWARD
- The Next.js + Postgres implementation, in full.
- `/project-package/`, public or `noindex`.
- LMArena's "evidence": the crawl, the SERP findings, "published guidance", "attributed" prices.
- The hard-coded QA results.
- The "$52/month on /pricing/" history and the "unedited template" characterisation.
- The WordPress/plugin-default palette as "brand DNA".
- Commercial neutrality as a fixed rule (it is OD-B, not a fact).
- The coded and ZIP redirect maps, including `/about-us`, the 308s and the inconsistent `/404-2` handling.
- Unsourced cost figures.
- Any invented author, reviewer, credential, testimonial, team or contact detail.
- The ZIP handoff as an authority ("do not change", "verbatim copy", "no other decision is open").
