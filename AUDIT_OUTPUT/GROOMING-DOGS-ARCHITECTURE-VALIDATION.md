# Grooming-Dogs.com — Final Architecture Handoff

**Status:** Authoritative architecture handoff for the WordPress + Elementor implementation and content-production phase.
**Date:** 2026-10-05
**Supersedes:** `GROOMING-DOGS-ARCHITECTURE-VALIDATION.v1-conditional-2026-10-05.md`, kept for traceability.
**Supporting record:** `GROOMING-DOGS-LMARENA-AUDIT.md` and `evidence/`.
**Not an authority:** the LMArena Next.js code, its page copy, and `Downloads/grooming-dogs-website-redesign.zip`. The LMArena copy may only be used as draft source material under §J.

---

## A. Executive status

| Item | Status |
|---|---|
| **Architecture** | **VALIDATED — owner conditions resolved** |
| **Platform** | WordPress + Elementor (owner-confirmed) |
| **Baseline** | Blank WordPress install. The 2026-10-04 wipe was **intentional** (owner-confirmed). The old site is historical evidence only and is not recreated. |
| **Business model** | **Editorial-first.** Commercial monetization is allowed as a separate secondary layer (owner decision 1). |
| **Commercial policy** | Affiliate links, commercial/review pages and advertising are **permitted**, inside the separation rules in §G. Commercial content never sets the IA, editorial priorities, canonical ownership, navigation or topic choice. **The architecture works with commerce inactive.** No commercial page is required at launch. |
| **Content model** | Stable canonical guides and site pages are **WordPress Pages**. Genuinely ongoing articles are **WordPress Posts** under `/guides/` (§I). No blog structure is created for its own sake. |
| **Authorship** | A named author is allowed only for a real, attributable person. Otherwise a non-deceptive organisation byline is used. Author, editor, expert reviewer and source are separate roles (§H). |
| **Remaining conditions** | **Pre-publication verification only** (§J): coat-care schedule figures, price ranges, health-related statements, image checks. None of them changes the IA. |

### Owner decisions incorporated

| # | Owner decision | Effect on the validated architecture |
|---|---|---|
| 1 | Editorial-first; commercial allowed as a separate layer | Resolves v1 OD-A. `/services/` and `/services-detail/` redirects become unconditional. Groomer lead-gen and directories are **not authorized** (not listed by the owner). |
| 2 | Affiliate links, review pages and ads allowed; separate layer | Resolves v1 OD-B. Defines the §G layer rules and the reserved `/reviews/` path. Policy statements in trust pages are rewritten to describe this model, not "no affiliates". |
| 3 | Pages for stable guides, Posts for ongoing articles, `/guides/` permitted, canonical URLs unchanged | Resolves v1 OD-E and OD-H (URLs stay flat). **One consequence**: Pages have no categories, and a Page's parent appears in its URL. Grouping is therefore done by menus. Breadcrumbs become Home › Page (§E.3). This is a correction, not a contradiction: the sections were never hub pages. |
| 4 | Named authors only if real; roles never conflated | Resolves v1 OD-F (§H) |
| 5 | Verification gates kept, IA not redesigned | §J |

### Validated decisions carried over unchanged
- Task-based content model and topic set
- Consolidations
- Canonical ownership
- Homepage orientation model
- Five-item primary navigation
- Footer treatment
- Corrected URLs, including the five slug renames
- The editorial/commercial separation

### Defaults adopted to close the phase
These carry the v1 defaults forward. The owner may revise any of them without reopening the IA.

| v1 ID | Default |
|---|---|
| OD-C | Cross-site boundary as in v1 §L. No cross-site links unless the owner adds them. |
| OD-D | Breed coverage is a lookup table on `/dog-coat-types/`. No breed pages. |
| OD-G | The cost-page market is chosen as part of price verification (V-2) |
| OD-I | No visible image placeholders at publication |
| OD-J | Visual identity is decided in the design phase. Never the WordPress-default palette. |
| OD-L | Elementor Pro if a licence is available. Otherwise free Elementor + UAE/HFE (the dogs-food.com pattern). |

---

## B. Final information architecture

```
HOME  /  (orientation: what the site is, where to start)
│
├── START HERE ─────────────── Editorial Core
│   ├── How to groom your dog at home ........ GD-01  /how-to-groom-your-dog-at-home/
│   ├── Grooming schedule by coat type ........ GD-02  /how-often-should-you-groom-your-dog/
│   └── Dog coat types ........................ GD-03  /dog-coat-types/
│
├── GROOMING TASKS ─────────── Editorial Core (children of GD-01 in the IA, not in the URL)
│   ├── Bathing ............................... GD-04  /bathing-your-dog/
│   ├── Brushing (mats, shedding) ............. GD-05  /brushing-your-dog/
│   ├── Haircuts & trimming ................... GD-06  /dog-haircuts-and-trimming/
│   ├── Nails ................................. GD-07  /trimming-dog-nails/
│   ├── Ears .................................. GD-08  /cleaning-dog-ears/
│   └── Teeth ................................. GD-09  /brushing-dog-teeth/
│
├── YOUR DOG ───────────────── Editorial Core
│   ├── Puppies ............................... GD-11  /puppy-grooming/
│   ├── Senior dogs ........................... GD-13  /senior-dog-grooming/
│   └── Anxious or resistant dogs ............. GD-12  /grooming-an-anxious-dog/
│
├── PROBLEMS ───────────────── Editorial Core
│   └── Grooming problems (symptom router) .... GD-14  /dog-grooming-problems/
│
├── TOOLS & GROOMERS ───────── Decision Support
│   ├── Grooming tools ........................ GD-10  /dog-grooming-tools/
│   ├── Choosing a groomer .................... GD-15  /choosing-a-dog-groomer/
│   └── Grooming cost ......................... GD-16  /dog-grooming-cost/
│
├── REFERENCE ──────────────── Editorial Core (footer + contextual only)
│   └── Glossary .............................. GD-17  /dog-grooming-glossary/
│
├── SITE ───────────────────── Utility / Trust (footer only)
│   ├── About ................................. GD-18  /about/
│   ├── Editorial & sourcing policy ........... GD-19  /editorial-policy/   (includes the commercial disclosure)
│   ├── Contact & corrections ................. GD-20  /contact/
│   └── Privacy policy ........................ GD-21  /privacy-policy/
│
├── [ONGOING ARTICLES — inactive until the first Post]  Editorial (Posts)
│   └── Articles index ........................ GD-22  /guides/  →  /guides/<post-slug>/
│
└── [COMMERCIAL LAYER — inactive until the first review page]  Commercial
    └── Reviews index ......................... GD-23  /reviews/  →  /reviews/<slug>/
```

### How the hierarchy works
- **Section groupings are navigation groups, not pages.** They exist only in menus. This is unchanged from the validated IA.
- **Two layers activate only when they have content.** These are "Ongoing articles" (GD-22) and "Commercial" (GD-23). Each index page is built when its first item is published, never empty.
- **These two indexes are not new speculative pages.** GD-22 is the v1 conditional index, re-scoped to Posts by owner decision 3. GD-23 is the reserved path for the review pages the owner authorized in decision 2. **No individual review page or article is specified here.**
- **Growth.** If one section later exceeds about 8 Pages, a hub Page may be proposed through an architecture change (§K). Existing URLs don't change.

---

## C. Final page inventory

**Priority** is the build sequence:

| Priority | Meaning |
|---|---|
| **P0** | Launch-critical |
| **P1** | Launch set |
| **P2** | Launch set, after P1 |
| **P3** | Launch if verification allows |
| **—** | Activates later |

**Status:**

| Status | Meaning |
|---|---|
| **Build** | Structure and copy approved for production |
| **Build → verify** | Structure approved. Copy goes through the §J gates before publication. |
| **Reserved** | Not built until activated |

| ID | Title (working) | Canonical URL | Content role | Primary user task | Primary intent | Page / Post | Parent / hub | Priority | Status | §J gates |
|---|---|---|---|---|---|---|---|---|---|---|
| GD-00 | Home | `/` | Utility (orientation hub) | Work out where to start and what the site covers | Navigational / brand | Page (static front page) | — | P0 | Build → verify | V-4 |
| GD-01 | How to groom your dog at home | `/how-to-groom-your-dog-at-home/` | Core editorial guide | Do a full home groom in the right order | How to groom a dog at home | Page | Home | P0 | Build → verify | V-3, V-4 |
| GD-02 | Dog grooming schedule by coat type | `/how-often-should-you-groom-your-dog/` | Core editorial guide | Plan how often to do each task | How often to groom / bathe / brush / trim | Page | Home | P0 | Build → verify | **V-1**, V-4 |
| GD-03 | Dog coat types | `/dog-coat-types/` | Reference | Identify the coat and what it implies | What coat type is my dog | Page | Home | P0 | Build → verify | V-1 (if any cadence appears), V-4 |
| GD-04 | Bathing your dog | `/bathing-your-dog/` | Task guide | Wash and dry safely | How to bathe a dog | Page | GD-01 (IA) | P1 | Build → verify | V-3, V-4 |
| GD-05 | Brushing your dog | `/brushing-your-dog/` | Task guide | Brush; remove mats; manage shedding | How to brush a dog | Page | GD-01 (IA) | P1 | Build → verify | V-3, V-4 |
| GD-06 | Dog haircuts and trimming at home | `/dog-haircuts-and-trimming/` | Task guide | Decide what to trim at home, and how | How to cut a dog's hair at home | Page | GD-01 (IA) | P1 | Build → verify | V-3, V-4 |
| GD-07 | Trimming your dog's nails | `/trimming-dog-nails/` | Task guide | Trim without hitting the quick | How to trim dog nails | Page | GD-01 (IA) | P1 | Build → verify | V-3, V-4 |
| GD-08 | Cleaning your dog's ears | `/cleaning-dog-ears/` | Task guide | Clean the visible ear; know when not to | How to clean dog ears | Page | GD-01 (IA) | P1 | Build → verify | **V-3**, V-4 |
| GD-09 | Brushing your dog's teeth | `/brushing-dog-teeth/` | Task guide | Brush teeth; judge alternatives | How to brush dog teeth | Page | GD-01 (IA) | P1 | Build → verify | **V-3**, V-4 |
| GD-10 | Dog grooming tools | `/dog-grooming-tools/` | Decision support | Choose the few tools a coat needs | Which grooming tools do I need | Page | Home | P2 | Build → verify | V-4 |
| GD-11 | Puppy grooming | `/puppy-grooming/` | Life-stage guide | Make grooming normal early | Puppy grooming | Page | Home | P2 | Build → verify | V-3, V-4 |
| GD-12 | Grooming an anxious dog | `/grooming-an-anxious-dog/` | Task / problem guide | Groom a fearful or resistant dog | Dog hates being groomed / won't let me | Page | Home | P2 | Build → verify | **V-3**, V-4 |
| GD-13 | Senior dog grooming | `/senior-dog-grooming/` | Life-stage guide | Adapt grooming to an older dog | Grooming an old dog | Page | Home | P2 | Build → verify | **V-3**, V-4 |
| GD-14 | Dog grooming problems | `/dog-grooming-problems/` | Task / problem guide (router) | Understand a post-grooming symptom and where to go | Dog grooming problems | Page | Home | P2 | Build → verify | **V-3**, V-4 |
| GD-15 | Choosing a dog groomer | `/choosing-a-dog-groomer/` | Decision support | Choose, prepare for and evaluate a groomer | How to choose a dog groomer | Page | Home | P2 | Build → verify | V-4 |
| GD-16 | Dog grooming cost | `/dog-grooming-cost/` | Decision support | Budget; understand quotes | How much does dog grooming cost | Page | GD-15 (IA) | P3 | Build → verify | **V-2**, V-4 |
| GD-17 | Dog grooming glossary | `/dog-grooming-glossary/` | Reference | Look up a term | Grooming term meanings | Page | Footer / contextual | P3 | Build → verify | — |
| GD-18 | About | `/about/` | Utility / trust | Find out who runs the site | About | Page | Footer | P0 | Build | — |
| GD-19 | Editorial & sourcing policy | `/editorial-policy/` | Utility / trust | Judge how far to trust the content and how it is funded | Editorial policy / disclosure | Page | Footer | P0 | Build | — |
| GD-20 | Contact & corrections | `/contact/` | Utility | Report an error or ask a question | Contact | Page | Footer | P0 | Build | — |
| GD-21 | Privacy policy | `/privacy-policy/` | Utility | Find out what data the site collects | Privacy | Page | Footer | P0 | Build | — |
| GD-22 | Articles index | `/guides/` | Utility (index for Posts) | Browse ongoing articles | Browse | Page (with a Posts loop) | Nav, when active | — | Reserved | — |
| GD-23 | Reviews index | `/reviews/` | Commercial (index) | Browse product reviews | Browse reviews | Page (parent of review Pages) | Decision-support links, when active | — | Reserved | Commercial rules (§G) |

**Launch set:** 22 Pages (GD-00 to GD-21). GD-22 and GD-23 activate only when they have content.

**Page boundaries:** the "Owns / Does not own" boundaries from v1 §C/§D apply unchanged. They are restated in the ownership register below.

---

## D. Canonical ownership register

One intent has one owner. Other pages may give one line of context and a link, but never a competing full answer. FAQ entries may not repeat another page's primary intent. Posts and commercial pages may **not** take an intent owned here (§G, §I).

| User intent | Canonical owner | Supporting (context and link only) |
|---|---|---|
| Where to start / what the site covers | GD-00 | — |
| How to groom a dog at home (whole routine, order of steps) | GD-01 | GD-00 |
| Kit overview: what I need to groom my dog | GD-10 | GD-01 (short checklist → GD-10) |
| How often to groom / bathe / brush / trim nails / clean ears / brush teeth / brush a puppy | GD-02 | GD-04, 05, 07, 08, 09, 11 |
| Grooming schedule by coat type | GD-02 | GD-03 |
| What coat type my dog has; breed → coat lookup | GD-03 | GD-02 |
| Should I shave a double coat | GD-03 | GD-06 |
| How to bathe a dog; shampoo choice; human shampoo; drying after a bath | GD-04 | GD-01 |
| How to brush; remove mats; de-shed | GD-05 | GD-13, GD-15 |
| Which brush, rake, clipper or dryer to buy | GD-10 | GD-05, 06, 07 |
| How to trim a dog's hair; sanitary trim; paw pads; face | GD-06 | — |
| Using clipper blades | GD-06 | GD-10 (choosing a clipper) |
| Cut-style names | GD-06 | GD-17 (definition), GD-15 (what to ask for) |
| How to trim nails; black nails; the quick; grinder vs clipper | GD-07 | GD-10, GD-13 |
| Dog won't let me trim nails / hates baths / hates grooming / scared of the dryer | GD-12 | GD-04, 07 |
| How to clean ears; ear cleaner; ear-hair plucking | GD-08 | — |
| Head shaking, itching, redness, bumps, smell or flaky skin after grooming; tear stains | GD-14 | Task pages; vet referral |
| How to brush teeth; toothpaste; do dental chews work | GD-09 | — |
| First bath, first groom, handling a puppy | GD-11 | GD-04, 12 |
| Grooming a senior or arthritic dog | GD-13 | GD-07 |
| Choosing a groomer; what happens at an appointment; salon vs mobile; tipping; complaints | GD-15 | GD-16 |
| How much grooming costs; why quotes differ | GD-16 | GD-15 |
| What a grooming term means | GD-17 | All pages (link on first use) |
| Who runs the site | GD-18 | — |
| How content is sourced; how the site is funded; affiliate and advertising disclosure | GD-19 | GD-18; inline disclosures |
| Contact / corrections | GD-20 | — |
| Data collected | GD-21 | — |
| "Best [product]" / reviews of a specific product (commercial) | Individual review Page under GD-23 (when built) | GD-10 links out, with disclosure |

**Rejected as standalone pages** (kept as sections or not built):
- **Sections:**
  - Mats → GD-05
  - Human shampoo → GD-04
  - Sanitary trim and paw pads → GD-06
- **Referral only:** anal glands
- **Not built:**
  - FAQ page
  - Per-breed pages
  - Standalone comparison pages
  - Per-question pages

---

## E. Navigation

### E.1 Primary navigation (five items, unchanged)

1. **Start here**: Full routine · Grooming schedule · Coat types
2. **Grooming tasks**: Bathing · Brushing · Haircuts & trimming · Nails · Ears · Teeth
3. **Your dog**: Puppies · Senior dogs · Anxious dogs
4. **Problems**: a direct link to GD-14
5. **Tools & groomers**: Grooming tools · Choosing a groomer · Grooming cost (GD-16 shown only once published)

**Rules:**
- **No commercial item in the primary navigation.** GD-23 is not a nav item.
- **No header sales CTA.**
- **When GD-22 is active,** an "Articles" text link may be added in the utility area (the header's secondary row), not as a sixth primary item.

### E.2 Footer navigation (unchanged)
- **Guides:** Full routine · Schedule · Coat types · Grooming tasks (the six) · Problems · Tools · Choosing a groomer · Grooming cost (when published) · Glossary · [Articles, when active] · [Reviews, when active]
- **Site:** About · Editorial & sourcing policy (includes disclosure) · Contact & corrections · Privacy policy
- **Never:** invented address, phone, email or social profiles.

### E.3 Contextual and internal navigation rules

**Breadcrumbs:** Home › Page (Rank Math breadcrumbs). Pages are flat, so there is no section level. This is the one adjustment caused by the Pages decision.

**Link types, with a user reason for each:**

| Link | Rule |
|---|---|
| **Read first** | At most one per guide, only where a real prerequisite exists |
| **Next-step cards** | 3–4 per guide, each with a written reason |
| **Owner links** | Any intent mentioned but owned elsewhere (§D) links to its owner. In particular, task pages link to GD-02 (frequency), GD-12 (refusal), GD-10 (tool choice) and GD-14 (symptoms). |
| **Glossary** | Linked on the first use of a term only |
| **Disclaimer** | Links to GD-19 |
| **Commercial links** | Only from decision support (and the "what you'll need" boxes, §G). Always disclosed. Never from vet or safety callouts. |
| **Posts** | Link to the canonical Page that owns the topic. Pages do not depend on Posts. |
| **No link directories** | No page is a link list. No links to internal project documents. |

---

## F. URL register

### F.1 Final canonical URLs

**Format:**
- Lowercase, hyphenated, trailing slash.
- No dates.
- No categories in Page URLs.

**Pages GD-00 to GD-21:**

| ID | URL |
|---|---|
| GD-00 | `/` |
| GD-01 | `/how-to-groom-your-dog-at-home/` |
| GD-02 | `/how-often-should-you-groom-your-dog/` |
| GD-03 | `/dog-coat-types/` |
| GD-04 | `/bathing-your-dog/` |
| GD-05 | `/brushing-your-dog/` |
| GD-06 | `/dog-haircuts-and-trimming/` |
| GD-07 | `/trimming-dog-nails/` |
| GD-08 | `/cleaning-dog-ears/` |
| GD-09 | `/brushing-dog-teeth/` |
| GD-10 | `/dog-grooming-tools/` |
| GD-11 | `/puppy-grooming/` |
| GD-12 | `/grooming-an-anxious-dog/` |
| GD-13 | `/senior-dog-grooming/` |
| GD-14 | `/dog-grooming-problems/` |
| GD-15 | `/choosing-a-dog-groomer/` |
| GD-16 | `/dog-grooming-cost/` |
| GD-17 | `/dog-grooming-glossary/` |
| GD-18 | `/about/` |
| GD-19 | `/editorial-policy/` |
| GD-20 | `/contact/` |
| GD-21 | `/privacy-policy/` |

**Reserved patterns:**

| Pattern | Use |
|---|---|
| `/guides/` | GD-22: a Page with a Posts loop |
| `/guides/<post-slug>/` | Posts. WordPress permalink setting `/guides/%postname%/`. |
| `/reviews/` | GD-23: parent Page |
| `/reviews/<slug>/` | Commercial review Pages (child Pages of GD-23) |

**WordPress settings:**
- Disable tag archives.
- Leave category archives for Posts `noindex` until the architecture-change process approves a category.
- Disable author archives unless a real named author exists (§H).
- Disable the date archives and the attachment pages.

### F.2 Historical URLs

| Historical URL | Future URL | Action | Reason |
|---|---|---|---|
| `/` | `/` | **RETAIN** (new content) | Same role |
| `/home-b/` | `/` | **REDIRECT 301** | Duplicate homepage |
| `/about/` | `/about/` | **RETAIN** (new content) | Same role |
| `/team/` | `/about/` | **REDIRECT 301** | Fabricated celebrity "staff". The intent belongs on About. |
| `/services/` | `/choosing-a-dog-groomer/` | **REDIRECT 301** | Editorial-first model confirmed. No service exists. |
| `/services-detail/` | `/choosing-a-dog-groomer/` | **REDIRECT 301** | Same |
| `/pricing/` | `/dog-grooming-cost/` | **REDIRECT 301 once GD-16 is published**; **410** until then | The legacy page was an arbitrary Dog/Cat/Other price grid (not "$52/month") |
| `/faq/` | — | **RETIRE 410** | Lorem ipsum / donation template |
| `/blog/` | `/how-to-groom-your-dog-at-home/` | **REDIRECT 301** | It held a routine-adjacent article. Re-point to `/guides/` only if GD-22 becomes active **and** carries on-topic routine content. |
| `/contact/` | `/contact/` | **RETAIN** (new content) | Same role |
| `/404-2/` | — | **RETIRE 410** | Demo page |
| `/top-dog-grooming-tips-for-a-happy-healthy-pup/` | `/how-to-groom-your-dog-at-home/` | **REDIRECT 301** (consolidate) | Outline of the routine |
| `/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/` | `/how-to-groom-your-dog-at-home/` | **REDIRECT 301** (consolidate) | Thin seed of the routine guide |
| `/locations.kml` | — | **RETIRE** | Empty Local SEO file. Local SEO stays disabled. |
| `/wp-content/uploads/*` (legacy media) | — | **RETIRE** | Template media |
| `/single-post/` | — | **UNKNOWN** (V-6). Default: no redirect. | Never captured |
| `/blog1/` | — | **UNKNOWN** (V-6). Default: no redirect. | Asserted only by LMArena |
| `/about-us/` | — | **NO ACTION** | No evidence it existed |
| 2004–2005 `*.htm` URLs | — | **UNKNOWN** (V-6). Default: no redirect. | A prior, unrelated site |

**Implementation:**
- Use Rank Math Redirections: 301 for redirects, 410 for retired URLs.
- Redirects go live with launch.
- The `/pricing/` redirect flips from 410 to 301 when GD-16 publishes.

---

## G. Editorial / commercial model

| Layer | Pages | Purpose | May contain | Must not contain |
|---|---|---|---|---|
| **Editorial Core** | GD-01–09, 11–14, 17; Posts | Teach the task; keep the dog safe | Procedure, safety, vet boundary, neutral "what you'll need" lists. **Optionally**, disclosed affiliate links inside that list box only. **Optionally**, ads (rules below). | Product rankings; affiliate links in steps, safety or vet callouts; topics chosen for commission; any change to ownership driven by monetization |
| **Decision Support** | GD-10, 15, 16 | Help the user choose (tool type, groomer, budget) using stated criteria | Criteria first, then options by type and function. **Optionally**, disclosed links to specific products or to GD-23 reviews. | Unsourced prices; "best" claims without a published method |
| **Commercial** | GD-23 and review Pages under `/reviews/` | Evaluate specific products | Affiliate links, product comparisons, a method statement | Taking an editorial intent from §D (e.g. a review may not become the "how to brush a dog" page); invented testing, ratings or reviewers; Review/AggregateRating schema without real evaluation; a presence in the primary nav |

### Advertising rules (all layers)
- **Placement:**
  - Never above the short answer.
  - Never inside step sequences, tables, or safety or vet callouts.
  - Never on GD-18 to GD-21.
- **Labelling:** ads are labelled "Advertisement".
- **Layout stability:** ad slots must not shift the layout.

### Disclosure rules
- **Where:**
  - A disclosure section on GD-19 (no separate URL).
  - A short inline disclosure on every page that contains affiliate links, before the first link.
- **Footer:** the GD-19 link label stays "Editorial & sourcing policy". The disclosure is inside it.

### Separation tests

| Check | Rule |
|---|---|
| **Activation** | A review Page is created only when it has a distinct purchase task. Its Owns/Does-not-own boundary must be recorded in this register's format before build. |
| **Removal** | Removing all commercial content must leave every editorial page complete. |
| **Not authorized** | Groomer lead-gen, directories, booking and sponsored editorial were not authorized by the owner, so none are built. |

### Positioning wording
- "Independent" may be used only together with the published disclosure.
- Never write "no affiliate links" or "no ads" statements. They contradict owner decision 2.

---

## H. Author / trust model

| Role | Definition | Rule |
|---|---|---|
| **Author** | The real person who wrote the page | Named only if real, attributable and willing to be presented, with a truthful one-line role (e.g. "Editor, Grooming Dogs"). Otherwise use the **organisation byline "Grooming Dogs"**, which implies no individual and no expertise. |
| **Editor** | A real person who checked the page for accuracy and policy | Named only if real. Never implies subject expertise unless it is true. |
| **Expert reviewer** | A real, qualified person (e.g. a vet or professional groomer) who reviewed **that specific page** | Shown only with name, the credential that can be checked, and the review date. **None exists now.** Do not write "vet-reviewed", "vet-approved" or "expert-checked". |
| **Source** | A named, citable publication behind a factual claim | Required for every quantitative or health claim (§J). Cited on the page. A source is not a reviewer. |
| **Testimonial** | A real user's statement | **None.** Do not create, paraphrase or import any. The legacy celebrity-signed reviews are fabricated. |
| **Credentials / awards / partnerships** | — | **None exist.** Do not claim any. |

### Rules for schema and page elements
- **Person schema** is only for real named authors.
- **Organization schema:** "Grooming Dogs", with no address or phone.
- **Article schema** goes on guides; **FAQPage** where a page has an FAQ.
- **No Review schema** on editorial pages.

### What GD-18 and GD-19 may state
- What the site is.
- The editorial-first model and its commercial funding (with the disclosure).
- The sourcing rules and the vet boundary.
- How corrections are handled, but only commitments the owner will keep.
- Real people, if any, named under the rules above.

### Do not carry forward
- Celebrity "staff".
- `petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03`.
- The "veterinary-reviewed" illness guide.
- Any "our groomers", "our team" or "our salon" wording.

---

## I. Content-type model

| Use | WordPress type | When | URL |
|---|---|---|---|
| Canonical evergreen guides (GD-01 to GD-17) | **Page** | The page owns a stable user task in §D | Flat `/<slug>/` |
| Homepage and site pages (GD-00, 18–21) | **Page** | Always | As in §F.1 |
| Ongoing articles | **Post** | Content with a genuine publication-date nature (updates, news, a dated piece) that does **not** take an intent owned by a Page | `/guides/<slug>/` |
| Articles index (GD-22) | **Page** with a Posts loop | Created with the first Post | `/guides/` |
| Commercial review pages | **Page** (child of GD-23) | Created per the §G activation test | `/reviews/<slug>/` |
| Reviews index (GD-23) | **Page** | Created with the first review | `/reviews/` |

### Rules
- **Posts never compete with Pages.** If a Post would answer a §D intent, it becomes an update to the owning Page instead.
- **Promotion.** If a Post proves to be an evergreen, distinct task, promote it to a Page through an architecture change, with a 301 from the Post URL.
- **No invented taxonomy.** One default category for Posts, `noindex`, no tags. New categories need an architecture change.
- **Templates:**
  - One Elementor template for guide Pages.
  - One for site Pages.
  - One single-Post template.
  - One for review Pages (when activated).
  - Build them with Elementor Pro Theme Builder, or free Elementor + UAE/HFE.
- **Content blocks:** short answer, sections, tables, steps, four callout tones (tip, safety, see-a-vet, sourcing note), FAQ (Rank Math FAQ block), next-step cards with reasons, inline disclosure (when needed).
- **No custom application code:**
  - The GD-02 schedule is a static table or tabs.
  - The GD-20 form uses Elementor Pro Form or a form plugin, covered by GD-21.

---

## J. Verification register

Each gate blocks **publication of the affected copy or component**, not the page structure or build. Pages may be built and staged in draft.

### Required before content publication

| ID | Verify | Affects | Pass criterion |
|---|---|---|---|
| **V-1** | Coat-care schedule figures (coat × brushing / bathing / nails / ears / teeth; puppy row) | GD-02; any cadence on GD-03 | A named, citable source per value, or the value is rewritten as clearly general guidance. Ranges where sources disagree. |
| **V-2** | Price ranges | GD-16 (and the `/pricing/` 301) | Choose one market and currency. Named, dated sources per range. Labelled indicative. No "near me" or local claims. |
| **V-3** | Health-related statements: ear infection signs, dental disease and VOHC, skin symptoms, senior conditions, anxiety and medication referrals, quick bleeding first aid, puppy vaccination timing | GD-01, 04–09, 11–14 | Each statement cited or reduced to recognise-and-refer. No treatment, dose or medication advice. Expert review, if used, follows §H. |
| **V-5** | LMArena draft copy reuse | All guides | Edited to the §D ownership (duplicate intents removed). The "no affiliate / no ads" lines removed. Meta-title typo fixed ("Safly"). No unsourced figures. |

### Required during image and asset QA

| ID | Verify | Affects | Pass criterion |
|---|---|---|---|
| **V-4** | Each image (the 27 Pexels candidates and any new ones) | All pages with images | The subject matches the caption and alt text. The licence is confirmed on the source page. The credit is recorded. No AI-generated or invented imagery. No visible placeholders at publication. The teeth-brushing and ear-cleaning images still need to be found. |

### Optional future verification

| ID | Verify | Use |
|---|---|---|
| **V-6** | Backlinks, and GSC if available, for `/single-post/`, `/blog1/` and the 2004-era `*.htm` URLs | Add redirects only where links exist |
| **V-7** | Demand check (SERP or GSC) for GD-16 and GD-17, and for any proposed Post or review Page | Prioritization; review-page activation |

---

## K. Implementation handoff

**Audience:** the person or agent implementing on WordPress + Elementor and producing content.
**Source of truth:** this file. Change control: any new page, URL, category, nav item or ownership change needs an architecture change that updates this document first.

### APPROVED TO BUILD
- **Site setup:**
  - WordPress on the blank baseline.
  - Static front page.
  - Permalinks `/%postname%/` for Pages, and `/guides/%postname%/` for Posts.
  - The archive settings in §F.1.
  - Rank Math (breadcrumbs, schema per §H, redirections per §F.2).
- **Pages:** all 22 (GD-00 to GD-21) as structure and templates, at their §F.1 URLs. GD-18 to GD-21 copy may be written and published now, within the §G and §H rules.
- **Navigation:** primary (5 items), footer and contextual rules (§E).
- **Homepage sections** per the validated orientation model:
  1. value proposition;
  2. start here (3);
  3. by situation (4);
  4. six tasks;
  5. using a professional;
  6. supportable trust strip;
  7. optional tools / commercial slot (only under §G);
  8. secondary exploration.
- **Templates and blocks** per §I.
- **Static schedule table component** on GD-02 (data waits for V-1).
- **Corrections form** on GD-20, with GD-21.
- **Redirects and 410s** in §F.2, except `/pricing/`, which stays 410 until GD-16 publishes.
- **Ownership rules** (§D) applied to all copy.

### BUILD AFTER CONTENT VERIFICATION
Build in draft; publish after the gate passes:

| Item | Gate |
|---|---|
| GD-02 figures (and any cadence on GD-03) | V-1 |
| GD-16 content, and the `/pricing/` 301 | V-2 |
| Health-adjacent copy on GD-01, 04–09, 11–14 | V-3 |
| All images | V-4 |
| Any reuse of LMArena draft copy | V-5 |

### OWNER-RESOLVED
| Decision | Resolution |
|---|---|
| Wipe | Intentional. The blank site is the baseline. |
| Platform | WordPress + Elementor |
| Business model | Editorial-first; commercial as a separate secondary layer |
| Commercial content | Affiliate links, review pages and ads allowed under §G. Lead-gen, directory and booking not authorized. |
| Content types | Pages for stable guides and site pages; Posts for ongoing articles under `/guides/`. Canonical URLs unchanged. |
| Authors | Real named people only; otherwise the organisation byline. Roles separated (§H). |

**Adopted defaults** (revisable without reopening the IA):
- No cross-site links.
- A breed lookup table only.
- The cost market is chosen in V-2.
- No visible placeholders.
- Visual identity is set in the design phase.
- Elementor Pro, or free Elementor + UAE/HFE.

### REMAINING VERIFICATION
- **Before publishing content:** V-1, V-2, V-3, V-5.
- **During asset QA:** V-4.
- **Optional:** V-6, V-7.

### DO NOT BUILD
- **The LMArena Next.js/Postgres application;** `/project-package/` in any form; the LMArena and ZIP redirect maps; the ZIP handoff as an authority.
- **Pages the validated IA rejects:** `/faq/` as a page, per-breed pages, per-question pages, standalone comparison pages.
- **An empty `/guides/` or `/reviews/`;** any review page without a distinct purchase task and a recorded boundary.
- **Commercial forms the owner didn't authorize:** groomer lead-gen, a directory, booking, "Appointment" CTAs, a Local SEO location.
- **Commercial content in the wrong place:** commercial items in the primary navigation, or affiliate links in steps, safety or vet callouts.
- **Off-topic sections:** food, supplements, accessories, adoption, sitting, mating, an illness guide, cat grooming.
- **Fabricated trust and contact details:** any invented author, editor, reviewer, credential, testimonial, rating, award, partnership, address, phone or email.
- **The WordPress-default palette** (`#0d3a4f`, `#fcb900`, `#ff6900`) presented as the brand.
- **Unsourced figures,** and "no affiliate / no ads" statements.

---

# ARCHITECTURE STATUS

**VALIDATED — OWNER CONDITIONS RESOLVED**

The owner decisions create no unresolved architectural contradiction. The only effect on the validated IA is that breadcrumbs become Home › Page, because Pages are flat and have no categories. That follows from the existing rule that section groups are navigation only, not hub pages, so the IA and URLs are unchanged.

The remaining items are pre-publication verification gates (V-1 to V-5). They control publication of specific copy and assets, not the architecture.


---

## Addendum (owner, 2026-10-06): primary navigation and blog status

- **Primary menu:** "Start here" (a `#` parent holding Full routine, Grooming schedule and Coat types) is **removed**. The menu is now Grooming tasks · Your dog · Problems · Tools & groomers.
- **Where those three pages are now reached:** the home page's "Start here" path, the site-wide footer, and contextual links. Their URLs, ownership and content are unchanged.
- **Hubs:** none. Menu groups remain navigation-only; the home page is the orientation hub. The §K growth rule (a hub Page only when a section exceeds about 8 Pages) still applies.
- **Blog:** none. Posts stay reserved for `/guides/` (GD-22, inactive until the first Post); `/blog/` keeps its 301 to GD-01.
