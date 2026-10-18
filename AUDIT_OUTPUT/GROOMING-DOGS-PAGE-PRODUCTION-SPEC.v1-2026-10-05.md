# GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05

**Authority:** `AUDIT_OUTPUT/GROOMING-DOGS-ARCHITECTURE-VALIDATION.md`. This is the final resolved version, status **VALIDATED — OWNER CONDITIONS RESOLVED**. It supersedes the `.v1-conditional-2026-10-05.md` file named in the request; where the two differ, the final version wins.

**Not an authority:**
- The LMArena Next.js build and its draft copy. The copy may only be reused under V-5.
- `grooming-dogs-website-redesign.zip`.

**Workflow position:** Validated architecture → **this document** → content production → Elementor implementation → QA.

---

## 1. Executive Summary

This document turns the locked architecture into a build-ready specification for the **22 launch Pages (GD-00 to GD-21)**. All 22 are WordPress Pages at flat canonical URLs.

It contains no article copy, Elementor JSON, HTML or WordPress content.

**Status:**
- **No page has an architecture conflict.**
- **5 pages are ready for content production with no gate:** GD-17, GD-18, GD-19, GD-20, GD-21.
- **17 pages are ready behind verification gates (V-1 to V-5).** The gates control publication of specific copy and images, not page structure.
- **14 production clarifications** are recorded (§12). None changes the architecture.

**Points readers most often get wrong:**
- **GD-02 owns every "how often" question.** That is the schedule page. The routine page, GD-01, does not.
- **Six task pages carry one-line pointers, never full answers,** for:
  - frequency → GD-02
  - resistance → GD-12
  - tool choice → GD-10
  - post-grooming symptoms → GD-14
- **The LMArena drafts break these rules in 20 places** (§8, V-5). Those sections are relocated, not reused.
- **Two instructional photos don't exist yet:** teeth brushing and ear cleaning (V-4b). The pages ship **without** those figures. There are no visible placeholders.
- **No page is a review page.**
  - Pages eligible for affiliate links in a "What you'll need" box: GD-01, GD-04 to GD-09, GD-11 to GD-13.
  - GD-10 is the decision-support page where affiliate links are also allowed.

---

## 2. Production Rules

These rules apply to every page. The per-page specs only record exceptions.

| # | Rule |
|---|---|
| R1 | **One owner per question** (§6). A non-owner page gives one sentence and a contextual link at most. It never has an H2 or an FAQ on an owned question. |
| R2 | **Redirected topics use a scope note**: one line inside the intro, or a "See also" line in the relevant section. Never a dedicated H2. |
| R3 | **Short answer first.** Every guide (GD-01 to GD-17) opens with a 2–4 sentence short-answer box directly below the H1 intro. Ads never go above it. |
| R4 | **The health boundary (V-3).** A health statement either cites a source or is reduced to "recognise it and see a vet". The site never advises on treatment, medication, dosing or home remedies. |
| R5 | **Numbers need sources.** Any frequency, age, temperature, price or percentage needs a source (V-1, V-2, V-3). Otherwise it is written as non-numeric guidance. |
| R6 | **Callout tones** are fixed. They are not decoration. **Tip:** practical advice. **Safety:** stop and reassess. **See a vet:** when to get veterinary help. **Sourcing note:** where the figures come from. |
| R7 | **FAQs** are included only for genuine leftover questions the page owns (§4). They use Elementor's Accordion widget with FAQ schema on, or Rank Math FAQ schema. **Never both** (PC-06). |
| R8 | **Byline.** "Grooming Dogs" by default. A named author or editor appears only if they are a real person (§H of the architecture). There is no expert-review claim unless a real review exists. |
| R9 | **Commercial layer** (architecture §G). Affiliate links go only in the "What you'll need" box or a decision-support block. An inline disclosure comes before the first affiliate link. No affiliate links in steps or callouts. Ads never above the short answer, inside steps, or inside callouts, and never on GD-18 to GD-21. |
| R10 | **Images** (V-4). Use only verified photos with a credit and confirmed licence. Captions are required on instructional images. No AI-generated images. No visible placeholders. |
| R11 | **LMArena draft reuse (V-5).** Allowed only after the section has been checked against §6 and its claims checked against V-1 to V-3. Relocated sections are deleted from the non-owner page. |
| R12 | **Design.** No visual system is defined yet (it belongs to the design phase). Specs refer only to Elementor Kit global roles: Primary, Secondary, Text, Accent, H1–H6, Body. They set no colours or fonts (PC-01). |
| R13 | **Every guide ends** with "Where to go next" (3–4 cards, each with a written reason), a disclaimer line linking to GD-19, and, where cited, a Sources block. |
| R14 | **Breadcrumbs** read Home › [breadcrumb label]. Pages are flat, so there is no section level. |
| R15 | **Images and media.** No YouTube embeds, video or downloadable files are specified for any page. Adding them would be a new decision. |

### Shared components

These are built once as Elementor saved templates or global widgets.

| Code | Component | Elementor-native implementation |
|---|---|---|
| C-INTRO | Page intro: H1, one-line intent statement, byline, "Updated" date | Heading + Text Editor; Post Info/Dynamic tags (Pro) or a text field. Global template. |
| C-SHORT | Short-answer box | Container + Text Editor, saved as a global widget |
| C-SCOPE | Scope note ("This page covers… For X, see Y") | Text Editor inside C-INTRO |
| C-CALL-TIP / -SAFE / -VET / -SRC | The four callout tones | Container + Icon + Text; 4 saved templates |
| C-NEED | "What you'll need" box, with a disclosure slot | Container + Icon List; an optional disclosure line on top |
| C-STEPS | Numbered procedure | Icon List (numbered) or a container sequence |
| C-TABLE | Data/reference table | Table widget (Pro/addon) or Text Editor table; horizontal scroll on mobile |
| C-FAQ | FAQ | Accordion with FAQ Schema on |
| C-NEXT | "Where to go next" cards | 3–4 Icon Box / Call to Action cards |
| C-DISC | Disclaimer line ("General information, not veterinary advice" → GD-19) | Saved global widget |
| C-SOURCES | Sources list | Text Editor (numbered list) |
| C-AD | Ad slot | Shortcode/HTML widget, placed only in the permitted positions (§11) |
| C-CRUMB | Breadcrumb | Rank Math breadcrumb shortcode |
| C-FIG | Captioned instructional figure | Image widget, with caption and credit |

---

## 3. Page Inventory

| ID | Page | URL | Type | Primary task | Intent | Commercial class |
|---|---|---|---|---|---|---|
| GD-00 | Home | `/` | Page (static front page) | Work out where to start and what the site covers | Navigational / brand orientation | EDITORIAL ONLY |
| GD-01 | How to groom your dog at home | `/how-to-groom-your-dog-at-home/` | Page | Do a full home groom in the right order | Informational: task (routine) | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-02 | Grooming schedule by coat type | `/how-often-should-you-groom-your-dog/` | Page | Plan how often to do each grooming task | Informational: planning | EDITORIAL ONLY |
| GD-03 | Dog coat types | `/dog-coat-types/` | Page | Identify the dog's coat and what it implies | Informational: reference | EDITORIAL ONLY |
| GD-04 | Bathing your dog | `/bathing-your-dog/` | Page | Wash and dry a dog safely | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-05 | Brushing your dog | `/brushing-your-dog/` | Page | Brush properly; remove mats; manage shedding | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-06 | Dog haircuts and trimming at home | `/dog-haircuts-and-trimming/` | Page | Decide what to trim at home, and do it safely | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-07 | Trimming your dog's nails | `/trimming-dog-nails/` | Page | Trim nails without hitting the quick | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-08 | Cleaning your dog's ears | `/cleaning-dog-ears/` | Page | Clean the visible ear safely; know when not to | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-09 | Brushing your dog's teeth | `/brushing-dog-teeth/` | Page | Brush teeth and judge the alternatives | Informational: task | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-10 | Dog grooming tools | `/dog-grooming-tools/` | Page | Choose the few tools a coat actually needs | Commercial-investigation (pre-purchase) | EDITORIAL + DECISION SUPPORT (affiliate eligible) |
| GD-11 | Puppy grooming | `/puppy-grooming/` | Page | Make grooming normal from the start | Informational: life stage | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-12 | Grooming an anxious dog | `/grooming-an-anxious-dog/` | Page | Groom a fearful or resistant dog | Informational: problem (behaviour) | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-13 | Senior dog grooming | `/senior-dog-grooming/` | Page | Adapt grooming to an older or frail dog | Informational: life stage | EDITORIAL + AFFILIATE ELIGIBLE |
| GD-14 | Dog grooming problems | `/dog-grooming-problems/` | Page | Understand a post-grooming symptom and where to go | Informational: diagnostic routing | EDITORIAL ONLY |
| GD-15 | Choosing a dog groomer | `/choosing-a-dog-groomer/` | Page | Choose, prepare for and evaluate a groomer | Commercial-investigation (service) | EDITORIAL + DECISION SUPPORT |
| GD-16 | Dog grooming cost | `/dog-grooming-cost/` | Page | Budget for grooming and understand quotes | Commercial-investigation (price) | EDITORIAL + DECISION SUPPORT |
| GD-17 | Dog grooming glossary | `/dog-grooming-glossary/` | Page | Look up a grooming term | Informational: definitional | EDITORIAL ONLY |
| GD-18 | About | `/about/` | Page | Find out who runs the site and what it is | Navigational / trust | EDITORIAL ONLY (no ads) |
| GD-19 | Editorial & sourcing policy | `/editorial-policy/` | Page | Judge how far to trust the content and how it is funded | Navigational / trust | EDITORIAL ONLY (no ads) |
| GD-20 | Contact & corrections | `/contact/` | Page | Report an error or ask a question | Navigational / utility | EDITORIAL ONLY (no ads) |
| GD-21 | Privacy policy | `/privacy-policy/` | Page | Find out what data the site collects | Navigational / legal | EDITORIAL ONLY (no ads) |

Reserved, and **not** in the launch set: GD-22 `/guides/` (Posts index) and GD-23 `/reviews/` (review pages).

---

## 4. Individual Page Specifications

**How to read the specs below:**
- **Section types:** INSTR = instructional; EXPL = explanatory; DS = decision support; SAFE = safety; REF = reference.
- **"→ GD-xx"** means the question belongs to that page (R1/R2).
- **Fold:** ▲ = above the fold; ▼ = below the fold.

---

### GD-00 — Home

**A. Identity**

| Field | Value |
|---|---|
| Page title | Home |
| Canonical URL | `/` |
| WordPress type | Page, set as the static front page |
| Primary task | Find out what the site covers and where to start |
| Primary intent | Navigational / brand orientation |
| Secondary intents | Recognise the site's limits: not a salon, not veterinary advice |
| Audience | Dog owners at any level, mostly first-time visitors |
| Funnel role | Entry and routing |

**B. Purpose**

The homepage tells a visitor what Grooming Dogs is: practical grooming guidance for dog owners. It also says what the site is not. It then sends each visitor to the right starting point: the full routine, the schedule, a specific task, their dog's situation, a problem, or help choosing a groomer. It answers no grooming question itself.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| A value proposition and the site's limits | Answering "how to groom a dog at home" (→ GD-01) |
| Start-here routing (3 links) | Any schedule figures (→ GD-02) |
| Routing by situation (4 links) | An article index or "latest posts" feed |
| Six task links | Product promotion above the trust strip |
| Professional-help routing | Testimonials, badges, "vet-approved" or similar claims |
| A trust strip limited to claims the site can back up | Contact details |
| An optional tools / commercial slot (architecture §G) | |
| Secondary links: glossary | |

**D. Question ownership**
- **Owns:** "What is Grooming Dogs?" and "Where should I start?"
- **May answer:** "Is this a grooming salon?" in one line, linking to GD-18.
- **Redirects:**

| Question | Owner |
|---|---|
| How to groom at home | GD-01 |
| How often | GD-02 |
| Coat type | GD-03 |
| Tasks | GD-04 to GD-09 |
| Situations | GD-11 to GD-14 |
| Groomer and cost | GD-15, GD-16 |

**E. H1:** "Practical dog grooming, explained for owners"

**F. H2 architecture**

| H2 | Purpose | Questions answered | Type |
|---|---|---|---|
| Start here | Route new visitors to the three foundation pages | "Where do I begin?" | EXPL |
| Grooming for your dog's situation | Route by puppy, senior, anxious or "something's wrong" | "My dog is different. Where do I go?" | EXPL |
| Grooming tasks | Direct access to the six task pages | "I need to do one job" | EXPL |
| Using a professional groomer | Route to GD-15 and GD-16 | "Should I pay someone?" | DS |
| How this guide works | Trust strip | "Can I trust this?" | EXPL |

The tools slot (homepage section 7) and secondary exploration (section 8) are visual sections with no H2. Use a small heading or link list.

**G. H3s:** None. Card titles are styled text, not H3s (PC-02).

**H. Content depth**
- Light copy: one line per card.
- Short answer: not applicable. The value proposition does that job.
- No procedure, no table, no FAQ.

**I. Safety / health:** **V-3: NOT MATERIAL.** The trust strip may state the vet-referral boundary as a policy, not as a claim.

**J. Evidence:** No special source requirement. Trust-strip claims must match GD-19 exactly. The "real, credited photography" claim may only appear after V-4 passes for every image on the site.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-01 | Start with the full routine | "the full grooming routine" |
| GD-02 | Plan how often | "a grooming schedule for your dog's coat" |
| GD-03 | Identify the coat first | "find your dog's coat type" |
| GD-11 | Puppy | "grooming a puppy" |
| GD-13 | Senior dog | "grooming an older dog" |
| GD-12 | Anxious dog | "a dog who hates grooming" |
| GD-14 | Something's wrong | "something wrong after grooming" |
| GD-04 to GD-09 | Task names | the task name |
| GD-15 | Choosing a groomer | "choosing a groomer" |
| GD-16 | Cost (only once published) | "what grooming costs" |
| GD-10 | Tools slot | "the tools you actually need" |
| GD-19 | Trust strip | "how our guides are written and funded" |
| GD-17 | Secondary | "grooming glossary" |

- **Incoming:** site logo, breadcrumb root, GD-18.

**L. Images**
- **Hero (primary image):** useful. The registry candidate is `hero-brush`, subject to V-4a. It should show an owner brushing a dog at home, with a calm dog and the coat visible.
- **Alt-text intent:** describe the action, not keywords.
- **Situation cards:** may reuse the verified lead images of their destination pages.
- **No instructional images.**

**M. SEO**

| Field | Value |
|---|---|
| SEO title draft | Grooming Dogs: Practical Dog Grooming Guides for Owners |
| Meta description draft | Plain-English dog grooming guidance for owners: the full routine, schedules by coat type, each task step by step, and when a groomer or vet should take over. |
| Primary keyword concept | Brand ("grooming dogs") plus "dog grooming guide" (navigational) |
| Secondary concepts | None. Do **not** target "how to groom a dog at home". |
| Likely SERP intent | Navigational / brand |
| Schema | WebSite + Organization ("Grooming Dogs"; no address or phone). No FAQ. |
| Breadcrumb label | Home |

**N. Commercial**
- **Class:** EDITORIAL ONLY.
- **Optional commercial slot:** homepage section 7 may contain a GD-10 tools entry. If affiliate content is placed there, a disclosure line comes before it.
- **Ads:** no ads above the trust strip. The PC-07 recommendation is no ads on the homepage at launch.

**O. Author / trust**
- **Byline:** none (homepage).
- **Expert review:** not applicable.
- **Trust risk:** over-claiming in the trust strip. Allowed claims:
  - a sourcing policy exists;
  - the vet boundary;
  - a corrections channel;
  - credited photography (only after V-4).

**P. Elementor structure**

| # | Section | Content type | Component | Reusable | Fold |
|---|---|---|---|---|---|
| 1 | Value proposition hero | H1, one-line limits statement, primary button "Start with the full routine" (→ GD-01), text link "Find your coat type" (→ GD-03) | Container + Heading + Text + Button + Image | No | ▲ |
| 2 | Start here | 3 cards | Icon Box / CTA ×3 | Card style is a global | ▲/▼ |
| 3 | By situation | 4 cards | Icon Box / Image Box ×4 | Card style is a global | ▼ |
| 4 | Grooming tasks | 6 compact links | Icon List, 2–3 columns | No | ▼ |
| 5 | Using a professional | 2 cards | Icon Box ×2 | Card style is a global | ▼ |
| 6 | How this guide works | 3–4 trust points | Icon List + link | Saved template (reused on GD-18) | ▼ |
| 7 | Tools entry / optional commercial slot | 1 card; disclosure line if commercial | CTA + C-NEED-style disclosure | No | ▼ |
| 8 | Secondary exploration | Glossary link | Text links | No | ▼ |

---

### GD-01 — How to groom your dog at home

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/how-to-groom-your-dog-at-home/` |
| WordPress type | Page |
| Primary task | Do a complete home groom in the correct order |
| Primary intent | How to groom a dog at home |
| Secondary intents | What order to groom in; can I groom my dog myself; when to use a professional instead |
| Audience | Owners about to groom at home, often for the first time |
| Funnel role | Core "learn and do". It feeds the task pages and GD-10. |

**B. Purpose**

This page gives the owner the whole home-grooming routine in the right order. It covers preparing the dog and kit, the order of the steps, and the point where the job stops being a home job. Each step is summarised at overview depth, then hands off to its task page for technique, so this page never competes with those pages.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Why order matters (dry brush before the bath; nails and ears while the dog is dry and calm) | Step-level technique depth (each task page owns it) |
| A 6-step routine overview, one short summary per step | Any frequency figures (→ GD-02) |
| A short kit checklist (tool *types* only) | Tool selection and comparison (→ GD-10) |
| Session length and pacing as practical guidance | Handling a resistant dog (→ GD-12) |
| The most costly mistakes | Symptoms after grooming (→ GD-14) |
| When to hand over to a groomer or vet | Coat identification (→ GD-03) |

**D. Question ownership**
- **Owns:**
  - How to groom a dog at home
  - In what order to groom
  - Can I groom my dog myself
  - How long a home groom takes (practical, non-numeric unless sourced)
  - Do I need a grooming table
- **May answer:** the kit overview, at checklist level only → GD-10 for selection.
- **Redirects:**

| Question | Owner |
|---|---|
| How often to do all this | GD-02 |
| Human shampoo | GD-04 |
| Human clippers | GD-06 |
| Drying technique | GD-04 |
| Dog won't cooperate | GD-12 |

**E. H1:** "How to groom your dog at home, from start to finish"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Before you start | Readiness: the dog's state, the environment, the kit | "What do I need? Is my dog ready?" | INSTR |
| Why the order matters | The logic of the sequence | "Does order matter?" | EXPL |
| The routine, step by step | Six steps at overview depth, each with a link to its task page | "What do I do, in what order?" | INSTR |
| Mistakes that cost the most | Avoiding harm and wasted effort | "What do people get wrong?" | SAFE |
| When it stops being a home job | Hand-over criteria for a groomer or vet | "Should I stop and call someone?" | DS / SAFE |

**G. H3s:** One per routine step, so a reader can jump to it:
1. Brush the whole coat dry
2. Nails
3. Ears
4. Bath and dry
5. Face, eyes and teeth
6. Trim only what needs it

**H. Content depth**
- **Short answer:** required. Give the order of the routine in 2–3 sentences.
- **Procedure:** overview depth only, 1 short paragraph per step plus a link to its task page.
- **Tables / steps / checklist:** C-NEED checklist and a C-STEPS summary.
- **FAQ:** optional, at most 3 questions. Candidates: session length; whether a grooming table is needed; "Can I do it all in one session?"

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Eye-area cleaning | Reduce to "recognise discharge or redness → see a vet" | Veterinary guidance |
| Hand-over criteria (skin wounds, severe matting, pain) | Recognise and refer | Veterinary / professional grooming guidance |
| Water/drying temperature (if any figure is used) | Cite the figure, or make it non-numeric | Professional grooming guidance |

**J. Evidence:** professional grooming guidance for the order of steps (to cite, or present as practical guidance); V-3 as above; V-5 (draft reuse).

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-03 (read first) | The routine depends on coat type | "know your dog's coat type" |
| GD-10 | Choosing the kit | "choosing the right tools" |
| GD-05, GD-07, GD-08, GD-04, GD-09, GD-06 | Technique for each step | The step's task name |
| GD-02 | Frequency | "how often to do each step" |
| GD-12 | If the dog resists | "if your dog won't cooperate" |
| GD-15 | Hand-over | "choosing a groomer" |
| GD-14 | If something looks wrong afterwards | "problems after grooming" |

- **Incoming:** GD-00, GD-02, GD-03, GD-04 to GD-09 ("the full routine"), GD-16, GD-18.

**L. Images**
- **Primary (lead) image:** useful. Candidate `lead-routine` (V-4a). It should show a home grooming setting, with the dog calm and the owner working.
- **Instructional images:** none required. The task pages carry them.
- **Alt-text intent:** describe the setting and the action.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Groom Your Dog at Home: The Full Routine, in Order |
| Meta description | The complete at-home grooming routine in the right order: brush, nails, ears, bath and dry, face and teeth, trimming. Plus what you need and when to stop. |
| Primary keyword concept | how to groom a dog at home |
| Secondary concepts | dog grooming at home for beginners; dog grooming steps in order; can I groom my dog myself |
| SERP intent | Informational how-to |
| Schema | Article; FAQPage only if the FAQ is kept |
| Breadcrumb label | Groom at home |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** assembling a basic home kit.
- **Where:** the C-NEED box in "Before you start". Inline disclosure before the first link.
- **Must stay editorial:** every step and the hand-over section.
- **Ads:** allowed after the short answer, and between H2 sections that aren't steps. Never inside "The routine, step by step".

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Named author:** not necessary.
- **Expert review:** not required.
- **Source attribution:** required for any V-3 statement.
- **Trust risk:** implying professional status ("the order professionals use"). Use that wording only if it is sourced.

**P. Elementor structure**

| # | Section | Component | Reusable | Fold |
|---|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | Global | ▲ |
| 2 | Short answer | C-SHORT | Global | ▲ |
| 3 | Before you start + kit | Text + C-NEED (+ disclosure) | C-NEED global | ▼ |
| 4 | Why the order matters | Text + optional C-CALL-TIP | — | ▼ |
| 5 | Routine steps | H3 per step + C-STEPS + link line | — | ▼ |
| 6 | Mistakes | Icon List + C-CALL-SAFE | — | ▼ |
| 7 | When it stops being a home job | Text + C-CALL-VET | — | ▼ |
| 8 | FAQ (optional) | C-FAQ | Global | ▼ |
| 9 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | Global | ▼ |

---

### GD-02 — Grooming schedule by coat type

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/how-often-should-you-groom-your-dog/` |
| WordPress type | Page |
| Primary task | Plan how often to brush, bathe, trim nails, check ears and brush teeth, and when to book a groomer |
| Primary intent | How often should you groom (and bathe, brush, trim) your dog |
| Secondary intents | Grooming calendar; puppy schedule; professional-groom interval |
| Audience | Owners building a routine |
| Funnel role | Planning. It is the owner page for all frequency questions. |

**B. Purpose**

This page lets the owner build a realistic grooming calendar for their dog. It starts from coat type and adjusts for the individual dog. It is the **only** page on the site that answers "how often", for every task and for professional visits. It doesn't teach technique.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| A coat type × task frequency table (brushing, bathing, nails, ear checks, teeth, professional groom) | How to perform any task (→ GD-04 to GD-09) |
| Adjustments (activity, swimming, skin sensitivity, age) | Coat identification method (→ GD-03; link only) |
| A puppy row; a senior adjustment line | Detailed puppy or senior handling (→ GD-11, GD-13) |
| The checks that tell you it's time | Tool choice (→ GD-10) |
| A sample weekly / monthly / seasonal calendar | Cost of professional visits (→ GD-16) |
| How often to see a professional groomer | |

**D. Question ownership**
- **Owns:**
  - How often to bathe / brush / trim nails / clean ears / brush teeth
  - How often to groom a short-haired dog
  - How often to groom a puppy
  - How often an old dog should be groomed
  - How often to go to the groomer
  - Can I bathe my dog weekly
  - Is it bad never to bathe
- **May answer:** "What coat type is my dog?" in one line → GD-03.
- **Redirects:** technique questions → their task pages; budgeting → GD-16.

**E. H1:** "How often to groom your dog, by coat type"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Why coat type sets the schedule | The logic behind the table | "Why does my dog need more or less?" | EXPL |
| The grooming schedule by coat type | The reference table | "How often for my dog?" | REF |
| Adjusting the schedule for your dog | Activity, swimming, skin, age, season | "My dog is different" | DS |
| Signs it's time | Checks that override the calendar (nail click, mats, odour, coat feel) | "How do I know it's due?" | INSTR |
| How often to see a professional groomer | Visit interval by coat | "How often should my dog go to the groomer?" | REF |
| Putting it into a calendar | An example weekly / monthly / seasonal plan | "What does that look like in practice?" | INSTR |

**G. H3s:** Under "Adjusting…":
- Puppies (one paragraph → GD-11)
- Older dogs (→ GD-13)
- Active and swimming dogs
- Sensitive skin (V-3)

**H. Content depth**
- **Short answer:** required. It must stay valid before and after V-1: "it depends on coat type; see the table".
- **The table is the core component.** It is a static table, or Elementor Tabs with one tab per coat (PC-08). There is no application code.
- **FAQ:** up to 4 questions (weekly bathing; never bathing; short-haired dogs; groomer interval if it isn't its own section).

**I. Safety / health:** **V-3: REQUIRED.** Over-bathing and skin, and skin-condition adjustments: cite a source, or reduce to "your vet may advise a different bathing routine for skin conditions".

**J. Evidence:**
- **V-1 (blocking for the table):** a named source for each cadence value, or the value is rewritten as non-numeric guidance. Where sources disagree, show a range. Source types: professional grooming guidance; veterinary guidance.
- **V-3:** as above.
- **V-5:** the draft table values in `seed-data.ts` are unsourced and must not be published as they stand.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-03 | Identify the coat before using the table | "identify your dog's coat" |
| GD-04, 05, 07, 08, 09 | How to do each task | "how to bathe your dog", etc. |
| GD-11 | Puppy detail | "grooming a puppy" |
| GD-13 | Senior detail | "grooming an older dog" |
| GD-15 | Booking a groomer | "choosing a groomer" |
| GD-16 | Budgeting | "what grooming costs over a year" |

- **Incoming:** GD-00, 01, 03, 04, 05, 07, 08, 09, 11, 13, 15, 16. These are the "how often" pointers from every other page.

**L. Images**
- **Primary (lead) image:** optional. Candidate `lead-frequency` (V-4a).
- **Instructional images:** none needed. The table is the content.
- **Alt-text intent:** describe the scene.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How Often Should You Groom Your Dog? A Schedule by Coat Type |
| Meta description | How often to brush, bathe, trim nails, check ears and brush teeth, set by your dog's coat type, with the signs that a task is due and when to book a groomer. |
| Primary keyword concept | how often should you groom your dog |
| Secondary concepts | how often to bathe a dog; how often to brush a dog; dog grooming schedule; how often to take a dog to the groomer |
| SERP intent | Informational, with a short-answer style |
| Schema | Article; FAQPage if the FAQ is kept |
| Breadcrumb label | Grooming schedule |

The meta description contains no figures until V-1 passes.

**N. Commercial:** EDITORIAL ONLY. No C-NEED box (it's a planning page). Ads may go after the table section, never inside the table.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** **required.** A C-CALL-SRC callout sits above the table.
- **Trust risk:** a false sense of precision. Present ranges, never a single "correct" number.

**P. Elementor structure**

| # | Section | Component | Reusable | Fold |
|---|---|---|---|---|
| 1 | Intro + breadcrumb | C-CRUMB, C-INTRO | Global | ▲ |
| 2 | Short answer | C-SHORT | Global | ▲ |
| 3 | Why coat type matters | Text + a link to GD-03 | — | ▲/▼ |
| 4 | Schedule table + sourcing note | C-CALL-SRC + C-TABLE, or Tabs per coat | C-TABLE global | ▼ |
| 5 | Adjustments | H3 blocks + C-CALL-VET (skin) | — | ▼ |
| 6 | Signs it's time | Icon List | — | ▼ |
| 7 | Professional interval | C-TABLE (small) or Text | — | ▼ |
| 8 | Calendar example | C-TABLE or Icon List | — | ▼ |
| 9 | FAQ | C-FAQ | Global | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | Global | ▼ |

---

### GD-03 — Dog coat types

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-coat-types/` |
| WordPress type | Page |
| Primary task | Identify the dog's coat type and understand what it implies for grooming |
| Primary intent | What coat type is my dog / dog coat types |
| Secondary intents | Which coat a breed has (lookup); single vs double coat; should I shave a double-coated dog; doodle and mixed-breed coats |
| Audience | Owners unsure of their dog's coat, including mixed breeds |
| Funnel role | Foundation reference for GD-02, GD-05, GD-06 and GD-10 |

**B. Purpose**

This page helps the owner work out which coat type their dog has, including mixed breeds and doodles. It explains what each coat type means for brushing technique, trimming and the risks specific to that coat. It holds the site's breed-to-coat lookup. It does not hold frequency tables or breed grooming guides.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| A coat identification aid (questions and visual cues) | Frequency or cadence figures (→ GD-02) |
| The six coat types: characteristics, care focus, common trouble spots | Step-by-step brushing or trimming (→ GD-05, GD-06) |
| A breed → coat lookup table (examples only) | Per-breed grooming guides (not built) |
| Mixed breeds and doodles | Tool selection (→ GD-10; link only) |
| Shaving double coats (owned) | |
| Hand stripping, as a coat-specific concept (definition → GD-17; technique note only) | |

**D. Question ownership**
- **Owns:**
  - What coat type is my dog
  - Single vs double coat
  - Is a doodle a curly coat
  - What if my dog is two coat types at once
  - Which coat does [breed] have
  - Should I shave my double-coated dog
- **Redirects:**

| Question | Owner |
|---|---|
| How often for my coat | GD-02 |
| Which brush for my coat | GD-10 |
| How to brush | GD-05 |
| How to clip | GD-06 |
| Hand-stripping term | GD-17 (definition) |

**E. H1:** "Dog coat types: how to identify your dog's coat"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| How to identify your dog's coat | A decision aid | "Which coat is this?" | DS |
| The six coat types | What each coat type is and what it needs | "What does my coat need?" | REF |
| Common breeds by coat type | The lookup table | "Which coat does my breed have?" | REF |
| Mixed breeds and doodles | Identify the coat, not the breed | "My dog is a mix" | DS |
| Should you shave a double-coated dog? | An owned decision, with risks | "Can I shave my husky?" | SAFE / DS |

**G. H3s:** One per coat type under "The six coat types": smooth; double; long and silky; curly or wavy; wire; hairless. The six-type taxonomy needs to be confirmed by a source (V-1; PC-09).

**H. Content depth**
- **Short answer:** required.
- **Per coat:** a short description and 3–5 care-focus points, with **no frequencies**.
- **Lookup table:** examples, not an exhaustive breed list.
- **FAQ:** optional, at most 3 (doodle coat; two coat types; how to tell single from double).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Shaving double coats (regrowth, temperature regulation, sun exposure) | Cite | Professional grooming guidance or veterinary dermatology source |
| Hairless-breed skin care (sun, dryness) | Cite, or reduce to "ask your vet about skin protection" | Veterinary guidance |

**J. Evidence:**
- **V-1:** confirm the coat taxonomy and the breed-to-coat assignments. Source types: professional grooming guidance; breed-standard bodies.
- **V-3:** as above.
- **V-5:** the draft coat sections contain cadence lines. Move them to GD-02.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Frequency for this coat | "how often to groom this coat" |
| GD-05 | Technique | "brushing to the skin" |
| GD-06 | Trimming / clipping | "trimming at home" |
| GD-10 | Tools for this coat | "tools for this coat type" |
| GD-17 | Terms | "grooming terms" |

- **Incoming:** GD-00, 01 (read first), 02, 05, 06, 10, 11, 17.

**L. Images**
- **Primary (lead) image:** useful. Candidate `lead-coat` (V-4a).
- **Instructional images:** six coat figures, candidates `coat-smooth`, `coat-double`, `coat-silky`, `coat-curly`, `coat-wire`, `coat-hairless` (V-4a). Each must clearly show that coat's texture. They appear after each H3's description.
- **Alt-text intent:** name the coat feature shown, not the breed alone.
- **Optional:** `fur-texture` (coat parted to the skin) in the "identify" section.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Dog Coat Types: How to Identify Your Dog's Coat |
| Meta description | Smooth, double, silky, curly, wire or hairless? How to identify your dog's coat, including mixed breeds and doodles, and what each coat type means for grooming. |
| Primary keyword concept | dog coat types |
| Secondary concepts | what coat type is my dog; double coat breeds; should I shave my double coated dog; doodle coat type |
| SERP intent | Informational reference |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Coat types |

**N. Commercial:** EDITORIAL ONLY. Tool links go to GD-10. There is no affiliate box. Ads may go after the six-coat section.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** required for the taxonomy and for the shaving guidance.
- **Trust risk:** stating breed coat assignments as absolute. Present them as typical.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | How to identify | Icon List or a decision table; C-FIG `fur-texture` | ▼ |
| 4 | Six coat types | H3 + Text + C-FIG, ×6 (or Tabs) | ▼ |
| 5 | Breed lookup | C-TABLE | ▼ |
| 6 | Mixed breeds and doodles | Text + C-CALL-TIP | ▼ |
| 7 | Shaving double coats | Text + C-CALL-SAFE | ▼ |
| 8 | FAQ (optional) | C-FAQ | ▼ |
| 9 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-04 — Bathing your dog

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/bathing-your-dog/` |
| WordPress type | Page |
| Primary task | Wash and dry a dog safely and effectively |
| Primary intent | How to bathe a dog |
| Secondary intents | Which shampoo; can I use human/baby shampoo; how to dry a dog; washing a dog's face; bathing without a bathtub |
| Audience | Owners about to bathe their dog |
| Funnel role | Task |

**B. Purpose**

This page teaches the owner to bathe their dog from preparation to a fully dry coat. It covers shampoo choice and keeping water and product out of the eyes and ears. It owns drying technique for the whole site. It does not own how often to bathe or how to handle a dog that fights the bath.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Pre-bath brushing (one paragraph → GD-05 for technique) | Bath frequency (→ GD-02, one line) |
| Setting up the space | Bath-hating dogs (→ GD-12, one line) |
| The bath step by step | Tool or product selection beyond the shampoo type (→ GD-10) |
| Rinsing | Post-bath itching or smell (→ GD-14) |
| Drying (owned) | Ear cleaning (→ GD-08) |
| Shampoo choice, including human and baby shampoo | |
| Face washing | |
| Bathing without a tub | |

**D. Question ownership**
- **Owns:**
  - How to bathe a dog
  - How to dry a dog after a bath
  - Can I use a hair dryer on my dog
  - Which shampoo
  - Can I use human or baby shampoo
  - How to wash a dog's face
  - How to bathe without a bath or hose
  - Bathe before or after a haircut (→ answer here; GD-06 links to it)
- **Redirects:**

| Question | Owner |
|---|---|
| How often to bathe | GD-02 |
| Dog hates baths | GD-12 |
| Smells two days after a bath | GD-14 |
| Itchy after a bath | GD-14 |

**E. H1:** "How to bathe your dog"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Before the bath | Brush first; set up the space and supplies | "What do I prepare?" | INSTR |
| Bathing your dog, step by step | The procedure | "How do I actually do it?" | INSTR |
| Rinsing thoroughly | Why rinsing matters, and how | "How much rinsing?" | INSTR |
| Drying your dog | Towel, air and dryer methods, with heat safety | "How do I dry them?" | INSTR / SAFE |
| Choosing a shampoo | Shampoo types; human and baby shampoo | "Which shampoo?" | DS |
| Washing the face and around the ears | Avoiding the eyes and ear canals | "How do I wash the face?" | INSTR / SAFE |

**G. H3s:** Under "Drying": towel drying; using a dryer safely; dogs that should not be air-dried, by coat (→ GD-03).

**H. Content depth**
- **Short answer:** required.
- **Steps:** full procedural depth (C-STEPS).
- **Shampoo:** decision-support depth by type, with no brands (brands only via C-NEED under R9).
- **FAQ:** at most 3 (no-tub bathing; before or after a haircut; hair dryer use).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Human shampoo and skin pH | Cite | Veterinary dermatology / veterinary guidance |
| Water and dryer temperature | Cite any figure, or keep it non-numeric | Professional grooming guidance |
| Medicated shampoos | Reduce to "only on veterinary advice" | — |
| Water in the ears | Reduce, and link to GD-08 | — |

**J. Evidence:**
- **V-3:** as above.
- **V-4a:** the bath image.
- **V-5:** draft H2s "How often to bathe" and "If your dog hates the bath" must be **removed** and replaced with scope lines. The draft FAQ "Why does my dog smell bad two days after a bath?" moves to GD-14.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-05 (read first) | Brush before bathing | "brush out the coat first" |
| GD-02 | Frequency | "how often to bathe" |
| GD-12 | Resistance | "if your dog hates the bath" |
| GD-08 | Ear care around bathing | "cleaning your dog's ears" |
| GD-10 | Equipment choice | "choosing a dryer and bathing kit" |
| GD-14 | Itch or smell afterwards | "itching or smell after a bath" |

- **Incoming:** GD-00, 01, 02, 06, 11, 12, 13, 14.

**L. Images**
- **Primary (lead) image:** `lead-bathing` (V-4a).
- **Instructional image:** `fig-bath-tub` (V-4a). It must show a dog being washed, with the head kept dry and the water directed away from the face. It goes in the step-by-step section.
- **Alt-text intent:** describe the technique shown.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Bathe a Dog: Setup, Shampoo, Rinsing and Drying |
| Meta description | Bathe your dog step by step: brush first, set up the space, choose a dog shampoo, rinse properly and dry completely, keeping water out of the eyes and ears. |
| Primary keyword concept | how to bathe a dog |
| Secondary concepts | how to dry a dog after a bath; can I use human shampoo on my dog; how to wash a dog's face |
| SERP intent | Informational how-to |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Bathing |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** shampoo type, towels, non-slip mat, dryer.
- **Where:** a C-NEED box in "Before the bath". Disclosure before the first link.
- **Must stay editorial:** the steps, the drying-safety guidance and the shampoo criteria.
- **Ads:** not in the steps.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** required for skin and temperature claims.
- **Trust risk:** product claims such as "pH-balanced is essential" without a source.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope note: frequency → GD-02; dislike of baths → GD-12) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Before the bath | Text + C-NEED | ▼ |
| 4 | Step by step | C-STEPS + C-FIG | ▼ |
| 5 | Rinsing | Text + C-CALL-TIP | ▼ |
| 6 | Drying | H3s + C-CALL-SAFE | ▼ |
| 7 | Shampoo | Text or C-TABLE (types) | ▼ |
| 8 | Face and ears | Text + C-CALL-SAFE | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-05 — Brushing your dog

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/brushing-your-dog/` |
| WordPress type | Page |
| Primary task | Brush a dog properly to the skin, deal with mats, and manage shedding |
| Primary intent | How to brush a dog |
| Secondary intents | How to remove mats; how to de-shed; line brushing; my dog is matted, what do I do |
| Audience | Owners of any coat, especially long, double and curly coats |
| Funnel role | Task |

**B. Purpose**

This page teaches the owner to brush effectively, all the way to the skin, using line brushing. It shows how to judge and safely remove small mats, when matting needs a professional, and how to manage shedding. It owns brushing technique, de-matting and de-shedding. It does not own tool selection or frequency.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Why surface brushing fails | Which brush to buy (→ GD-10) |
| Line brushing (owned) | How often (→ GD-02) |
| Technique by coat (link to GD-03 for identification) | Coat identification (→ GD-03) |
| Mat severity assessment | Shaving decisions (→ GD-03) |
| Removing small mats | Skin problems found under mats (→ GD-14 / vet) |
| When to hand over severe matting | |
| Shedding management | |

**D. Question ownership**
- **Owns:**
  - How to brush a dog
  - Line brushing
  - How to remove mats
  - My dog is matted, what do I do
  - Can I brush a matted dog after a bath
  - How to de-shed
  - How to reduce shedding
  - Do de-shedding shampoos work (technique angle; V-3 / evidence)
- **Redirects:**

| Question | Owner |
|---|---|
| Best brush for my dog / for a double coat | GD-10 |
| How often to brush | GD-02 |
| Is it OK to shave a matted dog | GD-03 for double coats; GD-15 for a professional shave-down |
| Dog yelps when brushed | GD-14 / vet |

**E. H1:** "How to brush your dog properly"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Why surface brushing doesn't work | Diagnose the common mistake | "I brush but still get mats" | EXPL |
| Line brushing, step by step | The core technique | "How do I brush to the skin?" | INSTR |
| Brushing different coat types | Technique differences by coat | "Does my coat need something different?" | INSTR |
| Dealing with mats | Assess, remove or hand over | "How bad is it? Can I fix it?" | INSTR / SAFE / DS |
| Managing shedding | De-shedding technique and seasonal coat loss | "How do I reduce shedding?" | INSTR |

**G. H3s:**
- Under "Dealing with mats": how to judge a mat; removing a small mat; when matting needs a professional.
- Under "Brushing different coat types": one H3 per coat group, kept short (technique only).

**H. Content depth**
- **Short answer:** required.
- **Line brushing:** full step-by-step.
- **Mats:** a decision table (severity → action).
- **FAQ:** at most 3 (matted dog after a bath; de-shedding shampoos; "How do I stop shedding?" if it isn't covered in the body).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Never cutting mats with scissors near the skin | Safety statement; cite if a claim is attached | Professional grooming guidance |
| Skin damage under severe mats | Recognise and refer | — |
| Pain on brushing (yelping) | Recognise and refer (→ GD-14 / vet) | — |
| Seasonal coat-loss timing | Cite, or keep non-specific | V-1-type source |

**J. Evidence:**
- **V-3:** as above.
- **V-4a:** brushing images.
- **V-5:** draft H2s "Matching the brush to the coat" (→ GD-10) and "How often to brush" (→ GD-02) must be **removed**. The draft FAQ "Is it okay to shave a matted dog?" → GD-03 / GD-15. The draft FAQ "dog yelps…" → GD-14.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-03 | Identify the coat | "your dog's coat type" |
| GD-10 | Choose the brush | "choosing the right brush" |
| GD-02 | Frequency | "how often to brush" |
| GD-04 | Next step | "bathing after brushing" |
| GD-15 | Severe matting | "when to book a groomer" |
| GD-14 | Skin problems | "skin problems under mats" |

- **Incoming:** GD-00, 01, 02, 03, 04, 06, 10, 13, 16.

**L. Images**
- **Primary (lead) image:** `lead-brushing` (V-4a).
- **Instructional image:** `fur-texture`, showing the coat parted to the skin for line brushing (V-4a), in the line-brushing section.
- **Optional:** additional brushing candidates from the registry, after V-4a.
- **Alt-text intent:** show the technique (coat parted, brush at the skin).

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Brush a Dog: Line Brushing, Mats and Shedding |
| Meta description | Brush your dog to the skin with line brushing, remove small mats safely, know when matting needs a groomer, and manage shedding instead of chasing it. |
| Primary keyword concept | how to brush a dog |
| Secondary concepts | how to remove mats from dog hair; how to deshed a dog; line brushing |
| SERP intent | Informational how-to |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Brushing |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** brush, comb, de-matting tool.
- **Where:** a C-NEED box at the start of "Line brushing". It links to GD-10 for selection. Disclosure before the first link.
- **Must stay editorial:** the mat severity decision and the safety guidance.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for the safety and coat-loss claims.
- **Trust risk:** recommending de-shedding tools without the safety caveat.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: tool choice → GD-10; frequency → GD-02) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Why surface brushing fails | Text | ▼ |
| 4 | Line brushing | C-NEED + C-STEPS + C-FIG | ▼ |
| 5 | Coat-type technique | H3 blocks | ▼ |
| 6 | Mats | C-TABLE (severity) + C-STEPS + C-CALL-SAFE | ▼ |
| 7 | Shedding | Text + C-CALL-TIP | ▼ |
| 8 | FAQ | C-FAQ | ▼ |
| 9 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-06 — Dog haircuts and trimming at home

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-haircuts-and-trimming/` |
| WordPress type | Page |
| Primary task | Decide what to trim at home and do it safely; communicate cuts to a groomer |
| Primary intent | How to cut a dog's hair at home |
| Secondary intents | Sanitary trim; trimming paw pads; trimming around the eyes and face; clipper blade numbers; cut-style names |
| Audience | Owners of coats that need trimming; owners preparing to brief a groomer |
| Funnel role | Task (and hand-over to GD-15) |

**B. Purpose**

This page helps the owner decide which trims are realistic at home: paw pads, sanitary area, the eye area, feet. It shows how to do those safely with scissors or clippers, and how blade lengths work. It explains cut-style names so the owner can ask a groomer for the right result. It owns trimming technique and blade use.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Home vs professional boundary | Choosing which clipper or scissors to buy (→ GD-10) |
| Preparation (clean, dry and brushed → GD-04, GD-05) | Shaving double coats (→ GD-03) |
| Paw pads; sanitary trim; eyes and face | Full-body styling as a home project |
| Using clipper blades and guards | Anal gland expression (see-a-vet callout only) |
| Cut-style names (owned; short definitions also appear in GD-17) | Clipper irritation afterwards (→ GD-14) |
| Mistakes (patchiness, cutting too short) | |

**D. Question ownership**
- **Owns:**
  - How to trim a dog's hair at home
  - Sanitary trim
  - Trimming between paw pads
  - Trimming around the eyes
  - What blade to use
  - Can I use regular or human scissors / clippers
  - Why my dog looks patchy after clipping
  - How short is too short
  - Teddy bear vs kennel cut (and other cut names)
- **Redirects:**

| Question | Owner |
|---|---|
| Bathe before or after a haircut | GD-04 |
| Which clipper to buy | GD-10 |
| Shaving a double coat | GD-03 |
| Redness after clipping | GD-14 |
| What to ask a groomer for | GD-15, which links back here for cut names |

**E. H1:** "Trimming and haircuts at home: what's realistic"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| What to trim at home, and what to leave | Decide the boundary | "Should I attempt this?" | DS |
| Preparing the coat | Clean, dry, brushed | "What do I do first?" | INSTR |
| Trimming the paw pads | Procedure | "How do I trim the feet?" | INSTR |
| The sanitary trim | Procedure | "How do I do a sanitary trim?" | INSTR |
| Trimming around the eyes and face | Procedure with safety | "How do I trim near the eyes?" | INSTR / SAFE |
| Using clippers and blades | Blade numbers, guards, heat | "What blade? How short?" | INSTR / REF |
| Cut styles and what to ask for | Name reference | "What is a teddy bear cut?" | REF |

**G. H3s:** Under "Using clippers and blades": blade numbers and guard combs; clipper heat and skin safety; avoiding a patchy finish.

**H. Content depth**
- **Short answer:** required.
- **Three procedures:** full step depth.
- **Blade table:** C-TABLE (blade or guard → typical use). Lengths are given only if sourced.
- **Cut-style table:** name → description → coats it suits.
- **FAQ:** at most 3 (regular scissors; patchy finish; how short is too short).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Clipper heat burns; cutting near eyes; blunt-tip scissors | Safety guidance; cite claims | Professional grooming guidance |
| Clipper rash, if mentioned | Reduce to one line → GD-14 | — |
| Anal glands | **Referral only:** "if your dog scoots or licks persistently, see a vet". No how-to. | — |

**J. Evidence:**
- Professional grooming guidance for blade conventions and cut names. Blade numbering conventions vary by manufacturer, so manufacturer documentation is acceptable for blade lengths.
- V-3.
- V-5: the draft "A note on anal glands" H2 becomes a C-CALL-VET callout, not an H2. The draft FAQ "Should I trim before or after the bath?" moves to GD-04.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-04 | Prep: bath first | "bathing before you trim" |
| GD-05 | Prep: brushing | "brushing out the coat" |
| GD-10 | Choosing clippers or scissors | "choosing clippers" |
| GD-03 | Shaving double coats | "why not to shave a double coat" |
| GD-17 | More terms | "grooming glossary" |
| GD-15 | Briefing a groomer | "what to ask your groomer" |
| GD-14 | Irritation afterwards | "redness after clipping" |

- **Incoming:** GD-00, 01, 03, 05, 10, 14, 15, 17.

**L. Images**
- **Primary (lead) image:** `lead-haircuts` (V-4a).
- **Instructional images:** paw-pad and sanitary-area trims would be useful, but no verified candidate exists. **Do not show placeholders.** Add images later only if verified photos are found (V-4a).
- **Alt-text intent:** name the trim being shown.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Dog Haircuts at Home: What to Trim and What to Leave |
| Meta description | What you can realistically trim at home (paw pads, sanitary area, around the eyes), how clipper blades work, and the cut names to use with your groomer. |
| Primary keyword concept | how to cut a dog's hair at home |
| Secondary concepts | sanitary trim dog; trimming dog paw pads; dog clipper blade sizes; teddy bear cut vs kennel cut |
| SERP intent | Informational how-to, plus reference |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Haircuts & trimming |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** scissors (blunt-tip), clippers, guards.
- **Where:** a C-NEED box in "Preparing the coat". Disclosure before the first link.
- **Must stay editorial:** the boundary decision, the procedures and the safety content.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for blade conventions and safety claims.
- **Trust risk:** encouraging full-body styling at home.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | What to trim / leave | C-TABLE or Icon List (home vs pro) | ▼ |
| 4 | Preparing the coat | Text + C-NEED | ▼ |
| 5 | Paw pads / sanitary / face | C-STEPS ×3 + C-CALL-SAFE | ▼ |
| 6 | Clippers and blades | H3s + C-TABLE + C-CALL-SAFE | ▼ |
| 7 | Cut styles | C-TABLE | ▼ |
| 8 | Anal-gland referral | C-CALL-VET | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-07 — Trimming your dog's nails

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/trimming-dog-nails/` |
| WordPress type | Page |
| Primary task | Trim a dog's nails without hitting the quick |
| Primary intent | How to trim dog nails |
| Secondary intents | Black nails; finding the quick; grinder vs clipper; what to do if a nail bleeds; shortening overgrown nails |
| Audience | Owners trimming nails at home |
| Funnel role | Task |

**B. Purpose**

This page teaches the owner to find the quick, including on black nails, and to trim or grind nails safely. It shows how to shorten overgrown nails gradually and what to do if a nail bleeds. It owns the grinder-vs-clipper comparison. Frequency and resistance belong elsewhere.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Why nail length matters | How often (→ GD-02) |
| Finding the quick, including black nails | A dog that won't allow nail trims (→ GD-12) |
| Clipper and grinder technique | Buying a specific tool (→ GD-10) |
| Grinder vs clipper (owned) | Nail injuries beyond a minor quick bleed (→ vet) |
| Bleeding response (minor quick bleed) | |
| Gradually shortening overgrown nails | |
| Dewclaws | |

**D. Question ownership**
- **Owns:**
  - How to trim dog nails
  - How short should nails be
  - How to cut black nails
  - Grinder vs clipper
  - What to do if I cut the quick
  - Will the quick recede (technique angle)
  - Does walking on pavement file nails
  - Can I use human nail clippers
- **Redirects:**

| Question | Owner |
|---|---|
| How often to trim | GD-02 |
| My dog won't let me | GD-12 |
| Senior nail adaptations | GD-13 (this page gives the base technique) |

**E. H1:** "How to trim your dog's nails"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Why nail length matters | Motivation and signs that nails are too long | "Do I need to?" | EXPL |
| Finding the quick | Light and black nails | "Where do I cut?" | INSTR |
| Trimming step by step | Procedure | "How do I trim?" | INSTR |
| Grinder or clipper? | An owned comparison | "Which should I use?" | DS |
| If you cut the quick | First response | "It's bleeding. What now?" | SAFE |
| Shortening overgrown nails | A gradual approach | "The nails are very long" | INSTR |

**G. H3s:** Under "Finding the quick": light-coloured nails; black nails. Optional H3 on dewclaws in the step section.

**H. Content depth**
- **Short answer:** required.
- **Procedure:** full depth.
- **Comparison table:** grinder vs clipper.
- **FAQ:** at most 3 (how short; pavement; human clippers).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Effects of long nails on gait and joints | Cite, or reduce | Veterinary guidance |
| Quick-bleed first aid (styptic, pressure, when to see a vet) | Cite | Veterinary first-aid guidance |
| Quick recession with regular trimming | Cite, or present as commonly reported guidance | Professional grooming guidance |
| Torn or infected nails | Recognise and refer | — |

**J. Evidence:**
- V-3.
- V-4a: the nail image.
- V-5: draft H2s "How often, and the receding quick" (split: frequency → GD-02; recession technique stays here, sourced) and "When your dog won't let you" (→ GD-12) must be **removed** from their draft form.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Frequency | "how often to trim nails" |
| GD-12 | Resistance | "if your dog won't let you" |
| GD-10 | Choosing tools | "choosing clippers or a grinder" |
| GD-13 | Older dogs | "nail care for older dogs" |

- **Incoming:** GD-00, 01, 02, 10, 11, 12, 13, 14.

**L. Images**
- **Primary (lead) image:** `lead-nails` (V-4a).
- **Instructional image:** `fig-nail-cut` (V-4a). It must show the trim position and how much to take off. It goes in "Trimming step by step".
- **Would help, if a verified photo is found:** a black-nail quick-identification image. Otherwise text only.
- **Alt-text intent:** describe the trim angle and position.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Trim Dog Nails Safely, Including Black Nails |
| Meta description | Find the quick, including on black nails, trim or grind safely, shorten overgrown nails gradually, and know what to do if a nail bleeds. |
| Primary keyword concept | how to trim dog nails |
| Secondary concepts | how to cut black dog nails; nail grinder vs clipper; dog nail bleeding quick |
| SERP intent | Informational how-to |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Nail trimming |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** clippers, grinder, styptic powder.
- **Where:** a C-NEED box before "Trimming step by step". Disclosure before the first link.
- **Must stay editorial:** the grinder vs clipper criteria, written by function. Links from that section go only to GD-10.
- **Ads:** never in the bleed-response section.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for the first-aid and joint claims.
- **Trust risk:** dismissing bleeding or injury.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: frequency → GD-02; refusal → GD-12) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Why length matters | Text | ▼ |
| 4 | Finding the quick | H3s + Text | ▼ |
| 5 | Step by step | C-NEED + C-STEPS + C-FIG | ▼ |
| 6 | Grinder vs clipper | C-TABLE | ▼ |
| 7 | If you cut the quick | C-CALL-SAFE + C-CALL-VET | ▼ |
| 8 | Overgrown nails | Text | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-08 — Cleaning your dog's ears

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/cleaning-dog-ears/` |
| WordPress type | Page |
| Primary task | Clean the visible part of the ear safely, and recognise when cleaning is the wrong move |
| Primary intent | How to clean dog ears |
| Secondary intents | Choosing an ear cleaner (type); what not to put in a dog's ear; ear-hair plucking |
| Audience | Owners doing routine ear care |
| Funnel role | Task |

**B. Purpose**

This page teaches the owner to clean only the visible outer ear, without pushing anything into the canal. It covers what must never go into a dog's ear and the signs that mean the owner should stop and see a vet. It frames ear-hair plucking as a decision for the vet or groomer. It does not diagnose or treat ear conditions.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| What you're cleaning (outer ear) and what you're not (the canal) | How often (→ GD-02) |
| The cleaning method | Diagnosing or treating infection |
| Cleaner type (non-medicated, dog-specific) | Medicated drops |
| What never goes in an ear | Head shaking after a groom (→ GD-14) |
| Stop signs → vet | Handling resistance (→ GD-12) |
| Ear-hair plucking (decision framing) | |

**D. Question ownership**
- **Owns:**
  - How to clean dog ears
  - Can I use hydrogen peroxide / cotton buds
  - Should I pluck ear hair
  - My dog's ears smell but aren't red: should I clean them (answer: recognise and refer)
  - Why does my dog yelp when I touch its ear (answer: refer)
- **Redirects:**

| Question | Owner |
|---|---|
| How often to clean ears | GD-02 |
| Head shaking after grooming | GD-14 |
| Dog won't let me | GD-12 |

**E. H1:** "How to clean your dog's ears safely"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| What you're cleaning, and what you're not | The outer ear vs the canal | "How far in?" | EXPL / SAFE |
| Cleaning your dog's ears, step by step | Procedure | "How do I do it?" | INSTR |
| What never goes in a dog's ear | Hazards | "Can I use peroxide or cotton buds?" | SAFE |
| Signs it's time to stop and see a vet | Recognise and refer | "Is this an infection?" | SAFE |
| Should you pluck ear hair? | A decision, framed for the vet or groomer | "Should I pluck?" | DS |

**G. H3s:** None needed.

**H. Content depth**
- **Short answer:** required.
- **Procedure:** full depth, outer ear only.
- **Stop-signs list:** recognition only.
- **FAQ:** at most 3 (peroxide; smelly but not red; yelping). All answered as refer-out where relevant.

**I. Safety / health:** **V-3: REQUIRED (high).**

| Topic | Treatment | Source type |
|---|---|---|
| Infection signs (odour, discharge, redness, pain, head tilt) | **Recognise and refer.** No causes or treatments listed beyond "see a vet". | Veterinary guidance |
| Hydrogen peroxide, alcohol and cotton buds | Cite | Veterinary guidance |
| Ear-hair plucking | Present as an open question ("ask your vet or groomer"), or cite | Veterinary / professional grooming guidance |

**J. Evidence:**
- V-3 (high).
- **V-4b: no verified ear-cleaning instructional photo exists.**
- V-5: draft H2s "How often to clean ears" (→ GD-02) and "Head shaking after a groom" (→ GD-14) must be **removed**.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Frequency | "how often to check and clean ears" |
| GD-14 | Head shaking after grooming | "head shaking after a groom" |
| GD-12 | Resistance | "if your dog won't let you handle its ears" |
| GD-10 | Supplies selection (optional) | "grooming supplies" |

- **Incoming:** GD-00, 01, 02, 04, 14.

**L. Images**
- **Primary (lead) image:** `lead-ears` (V-4a). It must show a dog's ear without implying a medical procedure.
- **Instructional image (ear-cleaning step):** **V-4b gap. No verified image exists.** The page is published **without** this figure. The section relies on the C-STEPS text. **No placeholder.** Add the image later only if a verified photo is found.
- **Alt-text intent:** describe the outer ear only.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Clean Dog Ears Safely, and When Not To |
| Meta description | Clean the visible part of your dog's ear without pushing into the canal, what never goes in a dog's ear, and the signs that mean you should see a vet instead. |
| Primary keyword concept | how to clean dog ears |
| Secondary concepts | can I use hydrogen peroxide in my dog's ear; dog ear cleaner; should I pluck my dog's ear hair |
| SERP intent | Informational how-to with a medical-adjacent element |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Ear cleaning |

The LMArena title typo ("Safly") must not be reused.

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** a non-medicated ear cleaner and cotton pads.
- **Where:** a C-NEED box before the steps. Disclosure before the first link.
- **Must not be linked:** medicated products. No affiliate link in the stop-signs or vet section.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** recommended if a real qualified reviewer is available (shown per architecture §H). Not required.
- **Source attribution:** required.
- **Trust risk:** drifting into diagnosis.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: frequency → GD-02; head shaking → GD-14) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | What you're cleaning | Text + C-CALL-SAFE | ▼ |
| 4 | Step by step | C-NEED + C-STEPS (no figure until V-4b) | ▼ |
| 5 | What never goes in | Icon List + C-CALL-SAFE | ▼ |
| 6 | Stop signs | C-CALL-VET (list) | ▼ |
| 7 | Plucking | Text | ▼ |
| 8 | FAQ | C-FAQ | ▼ |
| 9 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-09 — Brushing your dog's teeth

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/brushing-dog-teeth/` |
| WordPress type | Page |
| Primary task | Brush a dog's teeth at home, and judge whether the alternatives help |
| Primary intent | How to brush dog teeth |
| Secondary intents | Dog-safe toothpaste; can I use human toothpaste; do dental chews work; when dental care needs a vet |
| Audience | Owners starting or improving home dental care |
| Funnel role | Task |

**B. Purpose**

This page teaches the owner to introduce tooth brushing gradually and to brush effectively with dog-safe products. It sets out what the alternatives (chews, additives) can and cannot do, judged against citable evidence. It is clear about when tartar, bad breath or gum changes need a vet rather than a toothbrush.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Why home dental care matters (sourced) | How often (→ GD-02) |
| Introducing brushing gradually | Dental disease diagnosis or treatment |
| Brushing technique | Professional/anaesthetic dental cleaning detail (refer) |
| Toothpaste safety (human toothpaste) | Dogs that won't tolerate it (→ GD-12) |
| Alternatives and the evidence for them (including the VOHC scheme, cited) | Bones and chews as food (contextual only; architecture §L) |
| When it's a vet job | |

**D. Question ownership**
- **Owns:**
  - How to brush a dog's teeth
  - Can I use human toothpaste
  - Do dental chews work
  - Dog teeth cleaning without brushing
  - How do I get tartar off at home (answer: you can't safely remove established tartar → vet)
  - Are bones good for teeth (answer: refer to veterinary guidance on fracture risk; cite)
- **Redirects:**

| Question | Owner |
|---|---|
| How often to brush teeth | GD-02 |
| My dog won't let me brush its teeth | GD-12 |
| Puppy introduction | GD-11 (this page gives the base technique) |

**E. H1:** "How to brush your dog's teeth"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Why home dental care matters | Motivation (sourced) | "Is it worth it?" | EXPL |
| Getting your dog used to it | Gradual introduction | "How do I start?" | INSTR |
| Brushing step by step | Procedure | "How do I brush?" | INSTR |
| Choosing a toothpaste and brush | Safety and type criteria | "What toothpaste?" | DS / SAFE |
| Do the alternatives work? | An evidence-based view of chews, additives, wipes | "Do chews work?" | DS |
| When it's a job for the vet | Recognise and refer | "Is this dental disease?" | SAFE |

**G. H3s:** Under "Do the alternatives work?": dental chews; water additives and gels; what an accepted-product seal means (VOHC, cited).

**H. Content depth**
- **Short answer:** required.
- **Procedure:** full depth.
- **Alternatives:** a decision-support table (type → what the evidence says → caveat), with sources.
- **FAQ:** at most 3 (human toothpaste; tartar at home; bones).

**I. Safety / health:** **V-3: REQUIRED (high).**

| Topic | Treatment | Source type |
|---|---|---|
| Prevalence of dental disease | Cite, or avoid numbers | Veterinary guidance |
| Human toothpaste ingredients (e.g. xylitol, fluoride) | Cite | Veterinary toxicology guidance |
| Product-efficacy claims | Cite | VOHC primary source / product documentation |
| Bones and fracture risk | Cite | Veterinary guidance |
| Signs of dental disease (bad breath, bleeding, loose teeth) | Recognise and refer | — |

**J. Evidence:**
- V-3 (high).
- **V-4b: no verified teeth-brushing instructional photo exists.**
- V-5: draft H2 "How often" (→ GD-02) must be **removed**. The draft FAQ "My dog won't let me brush its teeth" → GD-12.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Frequency | "how often to brush teeth" |
| GD-12 | Resistance | "if your dog won't let you" |
| GD-11 | Starting in puppyhood | "starting with a puppy" |
| GD-10 | Supply choice (optional) | "grooming supplies" |

- **Incoming:** GD-00, 01, 02, 11, 13.

**L. Images**
- **Primary (lead) image:** `lead-teeth` (V-4a). It must show a dog's mouth or teeth in a non-clinical setting.
- **Instructional image (brushing step):** **V-4b gap. No verified image exists.** Publish **without** the figure, using text steps only. **No placeholder.**
- **Alt-text intent:** describe what is visible.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Brush Your Dog's Teeth, and What Else Helps |
| Meta description | Get your dog used to tooth brushing, brush with a dog-safe toothpaste, see what chews and additives can and can't do, and know when the vet should take over. |
| Primary keyword concept | how to brush dog teeth |
| Secondary concepts | can I use human toothpaste on my dog; do dental chews work; dog teeth cleaning without brushing |
| SERP intent | Informational how-to with a health element |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Teeth brushing |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** toothbrush type, dog toothpaste.
- **Where:** a C-NEED box before the steps. Disclosure before the first link.
- **Alternatives section:** may link products only if each claim matches a cited source. Otherwise there are no product links in that section.
- **Never:** links in the vet section.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** recommended if a real reviewer is available. Not required.
- **Source attribution:** required.
- **Trust risk:** product-efficacy claims tied to affiliate links.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: frequency → GD-02; refusal → GD-12) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Why it matters | Text + C-CALL-SRC | ▼ |
| 4 | Getting used to it | C-STEPS | ▼ |
| 5 | Step by step | C-NEED + C-STEPS (no figure until V-4b) | ▼ |
| 6 | Toothpaste and brush | Text + C-CALL-SAFE | ▼ |
| 7 | Alternatives | H3s + C-TABLE | ▼ |
| 8 | Vet job | C-CALL-VET | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-10 — Dog grooming tools

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-grooming-tools/` |
| WordPress type | Page |
| Primary task | Choose the few grooming tools a specific coat actually needs |
| Primary intent | Which dog grooming tools do I need |
| Secondary intents | Best brush for my dog / for a double coat; slicker vs pin brush; undercoat rake vs de-shedding tool; is a grooming dryer worth it; beginner kit |
| Audience | Owners about to buy or replace tools |
| Funnel role | Decision support. This is the main affiliate-eligible decision page. |

**B. Purpose**

This page helps the owner choose tools by function and coat type. It explains what each tool family does, which coats need it, and which tools are unnecessary or unsafe if misused. It ends with starter kits by coat type. It owns every "which tool" question on the site. How to use each tool belongs to the task pages.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Selection criteria | How to use each tool (→ GD-04 to GD-09) |
| Tool families: brushes and combs; de-shedding tools; bathing and drying equipment; nail tools; clippers, blades, scissors; ear and dental supplies (selection only) | Ranked "best of" product lists, or claims of hands-on testing (would be a review page, GD-23, not launched) |
| Starter kits by coat type | |
| Safety caveats for tools that cause harm when misused | |

**D. Question ownership**
- **Owns:**
  - What tools do I need
  - Best brush for my dog / for a double coat / for a short-haired dog
  - Slicker vs pin brush
  - Do I need a slicker and a rake
  - Are de-shedding tools safe
  - Is a grooming dryer worth it
  - What should a beginner buy first
  - Which clipper to buy
- **Redirects:**

| Question | Owner |
|---|---|
| How to brush | GD-05 |
| How to clip | GD-06 |
| Grinder vs clipper (technique comparison) | GD-07; this page covers buying criteria only |
| Coat identification | GD-03 |

**E. H1:** "Grooming tools: what each one does and which you need"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| How to choose grooming tools | Criteria (coat, size, task, budget) | "Where do I start?" | DS |
| Brushes and combs | What each type does and which coats it suits | "Which brush?" | DS / REF |
| De-shedding tools | Function and safety | "Are they safe?" | DS / SAFE |
| Bathing and drying equipment | Shampoo types, towels, dryers | "Do I need a dryer?" | DS |
| Nail tools | Clippers, grinders, styptic (buying criteria) | "Which nail tool?" | DS |
| Clippers, blades and scissors | Buying criteria | "Which clipper?" | DS |
| Ear and dental supplies | Selection only | "What do I need for ears and teeth?" | DS |
| Starter kits by coat type | Decision output | "What should I buy first?" | DS |

**G. H3s:** Under "Brushes and combs", one H3 per tool type: slicker; pin; bristle; rubber curry or mitt; undercoat rake; comb. These help with scanning and decisions.

**H. Content depth**
- **Short answer:** required.
- **Decision-support depth:** high. Each tool type gets: what it does, which coats, a caveat.
- **Starter-kit table:** coat type → tools.
- **FAQ:** at most 3 (slicker plus rake; dryer worth it; first purchase), only if not answered in the body.

**I. Safety / health:** **V-3: REQUIRED (low–medium).**

| Topic | Treatment | Source type |
|---|---|---|
| De-shedding tools and skin/coat damage | Cite, or present as general caution | Professional grooming guidance / manufacturer documentation |
| Dryer heat | Cite | Professional grooming guidance |
| Clipper heat | Cite | Professional grooming guidance |

**J. Evidence:**
- Manufacturer documentation for any product-specific statement.
- Professional grooming guidance for coat-to-tool matching.
- V-3 (as above).
- V-5: the draft "no product links" lines must be removed (they conflict with owner decision 2).

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-03 | Identify the coat | "identify your dog's coat first" |
| GD-05 | Using brushes | "how to brush" |
| GD-06 | Using clippers | "trimming at home" |
| GD-07 | Using nail tools | "how to trim nails" |
| GD-04 | Bathing and drying | "how to bathe" |
| GD-16 | Home vs professional cost | "what grooming costs" |

- **Incoming:** GD-00 (section 7), GD-01, GD-03, GD-04 to GD-09, GD-11, GD-16.

**L. Images**
- **Primary (lead) image:** `lead-tools` (V-4a).
- **Useful:** images of individual tool types, if verified (V-4a). No product shots implying an endorsement unless a commercial page later requires them.
- **Alt-text intent:** name the tool type.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Dog Grooming Tools: What You Need for Your Dog's Coat |
| Meta description | What each grooming tool does, which coats need it, and the starter kit for your dog's coat type, from brushes and rakes to clippers, nail tools and dryers. |
| Primary keyword concept | dog grooming tools |
| Secondary concepts | best brush for my dog; slicker brush vs pin brush; dog grooming kit for beginners; is a dog grooming dryer worth it |
| SERP intent | Commercial investigation |
| Schema | Article; FAQPage if kept. **No Product or Review schema.** |
| Breadcrumb label | Grooming tools |

**N. Commercial:** EDITORIAL + DECISION SUPPORT (affiliate eligible).
- **Product decision:** which tool type and which product.
- **Where:** an optional "options" block **after** each tool type's criteria. Inline disclosure before the first affiliate link on the page.
- **Must stay editorial:**
  - the selection criteria;
  - the coat-to-tool matching;
  - the safety caveats;
  - the starter-kit logic (expressed by tool type; products are optional additions).
- **No "best" ranking without a published method.** That would be a review page under `/reviews/`, which needs the activation test (PC-11).
- **Ads:** allowed between tool-family sections.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for safety claims.
- **Trust risk:** implying products were tested. Never write "we tested" unless that is true and documented.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | How to choose | Icon List (criteria) + link to GD-03 | ▼ |
| 4 | Tool families | H2/H3 + Text + optional options block (C-NEED variant with disclosure) | ▼ |
| 5 | De-shedding safety | C-CALL-SAFE | ▼ |
| 6 | Starter kits | C-TABLE | ▼ |
| 7 | FAQ | C-FAQ | ▼ |
| 8 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-11 — Puppy grooming

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/puppy-grooming/` |
| WordPress type | Page |
| Primary task | Make grooming a normal, calm experience from puppyhood |
| Primary intent | Puppy grooming |
| Secondary intents | When can I bathe my puppy; puppy's first groom or haircut; getting a puppy used to handling; do I need to trim puppy nails |
| Audience | New puppy owners |
| Funnel role | Life stage |

**B. Purpose**

This page helps the owner use puppyhood to build lasting tolerance for handling and grooming. It covers a gradual handling programme, first baths, first nail trims and brushing, and the first professional groom. It explains how the coat changes as the puppy grows. Puppy frequency belongs to GD-02, and fear that is already established belongs to GD-12.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| The early-handling window (sourced) | How often to brush or bathe a puppy (→ GD-02) |
| A handling programme | Puppy shopping lists beyond grooming (architecture §L: Puppy-S primary; no cross-link by default) |
| First bath | Vaccination schedules (refer to vet) |
| First nail trims and brushing | Established fear (→ GD-12) |
| First professional groom (incl. vaccination requirements → vet) | |
| The puppy-to-adult coat transition | |
| What not to do | |

**D. Question ownership**
- **Owns:**
  - When can I bathe my puppy
  - Puppy first haircut / first groom
  - How to get a puppy used to grooming
  - Do I need to trim puppy nails
  - My puppy bites the brush
  - Puppy coat transition
- **Redirects:**

| Question | Owner |
|---|---|
| How often should I brush or groom my puppy | GD-02 (puppy row) |
| Full bath technique | GD-04 |
| Full nail technique | GD-07 |
| Fearful puppy | GD-12 |

**E. H1:** "Grooming a puppy: building a calm routine for life"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Why puppyhood matters for grooming | The early-handling window (sourced) | "Why start now?" | EXPL |
| A handling programme, step by step | Gradual desensitisation | "How do I start?" | INSTR |
| Your puppy's first bath | Timing (sourced) and adaptations | "When and how?" | INSTR |
| First nail trims and brushing | Puppy-specific adaptations (→ GD-07, GD-05) | "How do I start nails and brushing?" | INSTR |
| The first professional groom | Readiness, vaccination (→ vet), choosing a groomer (→ GD-15) | "When is the first groom?" | DS |
| When the puppy coat changes | The transition, and why matting can increase | "Why is the coat changing?" | EXPL |
| What not to do | Mistakes that create fear | "What should I avoid?" | SAFE |

**G. H3s:** None required.

**H. Content depth**
- **Short answer:** required.
- **Handling programme:** steps.
- **Timing statements:** sourced (age claims).
- **FAQ:** at most 3 (first bath age; puppy bites the brush; first haircut age).

**I. Safety / health:** **V-3: REQUIRED.**

| Topic | Treatment | Source type |
|---|---|---|
| Socialisation-window ages | Cite | Veterinary behaviour / animal welfare guidance |
| First-bath age and temperature (chilling) | Cite | Veterinary guidance |
| Vaccination before a groomer visit | Reduce to "ask your vet; groomers may require proof" | — |
| Coat-transition timing | Cite, or keep non-numeric | V-1-type source |

**J. Evidence:**
- V-3.
- V-1, if coat-transition ages are given.
- V-5: the draft FAQ "How often should I brush my puppy?" → GD-02.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Puppy schedule | "a puppy grooming schedule" |
| GD-04 | Bath technique | "how to bathe your dog" |
| GD-05 | Brushing technique | "brushing technique" |
| GD-07 | Nail technique | "trimming nails" |
| GD-09 | Teeth introduction | "brushing teeth" |
| GD-12 | If fear develops | "if your puppy becomes fearful" |
| GD-15 | First professional groom | "choosing a groomer" |
| GD-03 | The adult coat | "your dog's coat type" |

- **Incoming:** GD-00, 02, 09, 12, 15.

**L. Images**
- **Primary (lead) image:** `lead-puppy` (V-4a). It should show a puppy calm during handling.
- **Instructional images:** none required.
- **Alt-text intent:** describe the handling shown.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Puppy Grooming: First Baths, Handling and First Groom |
| Meta description | Make grooming normal from puppyhood: gentle handling practice, the first bath, first nail trims and brushing, the first professional groom and the coat change. |
| Primary keyword concept | puppy grooming |
| Secondary concepts | when can I bathe my puppy; puppy first groom; how to get a puppy used to grooming |
| SERP intent | Informational |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Puppy grooming |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** puppy-appropriate brush, nail tool, shampoo.
- **Where:** a C-NEED box in "A handling programme" (after the intro, not inside the steps). Disclosure before the first link.
- **Must stay editorial:** the handling programme.
- **Cross-site:** no Puppy-S cross-link unless the owner decides otherwise (architecture default).

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for age claims.
- **Trust risk:** giving precise ages without a source.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: frequency → GD-02; established fear → GD-12) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Why puppyhood matters | Text + C-CALL-SRC | ▼ |
| 4 | Handling programme | C-NEED + C-STEPS | ▼ |
| 5 | First bath / nails and brushing | Text + links | ▼ |
| 6 | First professional groom | Text + C-CALL-VET (vaccination) | ▼ |
| 7 | Coat change | Text | ▼ |
| 8 | What not to do | Icon List + C-CALL-SAFE | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-12 — Grooming an anxious dog

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/grooming-an-anxious-dog/` |
| WordPress type | Page |
| Primary task | Groom a dog that is fearful, resistant or reactive, and reduce that fear over time |
| Primary intent | My dog hates being groomed / won't let me |
| Secondary intents | Won't let me trim nails / brush teeth / bathe; scared of the dryer or clippers; muzzle training for grooming; fine with me but bites the groomer |
| Audience | Owners of fearful or resistant dogs |
| Funnel role | Problem (behaviour). It owns all resistance intents. |

**B. Purpose**

This page helps the owner understand why a dog resists grooming. It explains why restraint makes things worse and gives a gradual, reward-based plan for the most common fears. It covers muzzle training as a safety tool, working with a groomer, and when a vet or qualified behaviour professional should be involved. It is the site's single owner for every "my dog won't let me…" question.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Recognising stress signals | Technique for each task (→ GD-04 to GD-09) |
| Why restraint backfires | Medication names or doses (referral only) |
| A desensitisation and counter-conditioning plan | Sedation advice (referral only) |
| Specific fears: nail trims, baths, dryer and clipper noise, handling face, ears and paws, tooth brushing | Puppy prevention (→ GD-11; link) |
| Muzzle training | |
| Working with a groomer | |
| When to stop and seek help | |

**D. Question ownership**
- **Owns:**
  - Dog hates being groomed
  - Won't let me trim nails / brush teeth / clean ears
  - Hates baths
  - Scared of the dryer or clippers
  - Bites at the clippers
  - Should I muzzle my dog for grooming
  - How long does it take to fix grooming fear (non-numeric unless sourced)
  - Fine with me but bites the groomer
  - Shakes at the groomer
- **May answer (referral only):** are sedated grooms safe; can my vet prescribe something.
- **Redirects:**

| Question | Owner |
|---|---|
| Task technique | GD-04 to GD-09 |
| Choosing a groomer (general) | GD-15; this page covers a groomer for a difficult dog |
| Pain-related resistance in older dogs | GD-13 |

**E. H1:** "Grooming a dog who is anxious, fearful or resistant"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Recognising fear and stress | Read the dog | "Is my dog scared or stubborn?" | EXPL |
| Why holding on tighter makes it worse | Reframe | "Why does restraint fail?" | EXPL |
| A step-by-step plan to reduce grooming fear | The core method | "What do I do?" | INSTR |
| Common fears and how to approach them | Specific fears | "Nails? Bath? Dryer?" | INSTR |
| Muzzle training, done properly | Safety tool | "Should I muzzle?" | INSTR / SAFE |
| Working with a groomer | Choosing and briefing for a difficult dog | "Which groomer?" | DS |
| When to stop and get help | Pain, aggression → vet or behaviour professional | "When is this beyond me?" | SAFE |

**G. H3s:** Under "Common fears": nail trims; baths; dryers and clippers; handling the face, ears and paws; tooth brushing. These are the owned resistance intents gathered from the task pages.

**H. Content depth**
- **Short answer:** required.
- **The plan:** steps.
- **Each fear:** 1 short sub-section that points back to the task page for technique.
- **FAQ:** at most 3 (muzzle; time to fix; bites the groomer), plus sedation as a referral-only answer.

**I. Safety / health:** **V-3: REQUIRED (high).**

| Topic | Treatment | Source type |
|---|---|---|
| Stress-signal descriptions | Cite | Animal behaviour / animal welfare guidance |
| Pain as a cause of resistance | Recognise and refer | — |
| Medication and sedation | **Referral only**: no names, doses or safety judgements | — |
| Muzzle-training method | Cite | Animal behaviour / welfare guidance |
| Bite risk | Safety guidance | — |

**J. Evidence:**
- V-3 (high).
- V-5: absorb the resistance sections removed from GD-04, GD-07 and GD-09 and rewrite them here. Check the draft H2 "Choosing a groomer for a difficult dog" against GD-15 for overlap.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-07, GD-04, GD-09, GD-08 | Task technique once the dog tolerates handling | The task name |
| GD-15 | General groomer choice | "choosing a groomer" |
| GD-11 | Prevention | "starting with a puppy" |
| GD-13 | Older dogs and pain | "grooming an older dog" |

- **Incoming:** GD-00, 01, 04, 07, 08, 09, 11, 13, 15.

**L. Images**
- **Primary (lead) image:** `lead-anxious` (V-4a). It must show a dog in a non-distressing context. **Do not show a visibly distressed dog** (welfare and trust risk).
- **Instructional images:** a muzzle-training image would help if a verified one is found. Otherwise none.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Groom an Anxious Dog Who Hates Being Groomed |
| Meta description | Why dogs resist grooming, why restraint backfires, and a gradual plan for nails, baths, dryers and handling, plus muzzle training and when to get help. |
| Primary keyword concept | dog hates being groomed |
| Secondary concepts | dog won't let me cut nails; dog scared of hair dryer; muzzle training for grooming; how to groom an anxious dog |
| SERP intent | Informational problem-solving |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Anxious dogs |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE (narrow).
- **Product decision:** a basket muzzle and high-value treats only.
- **Where:** a C-NEED box at the start of "Muzzle training", before the steps. Disclosure before the first link.
- **Must stay editorial:** the fear plan, the specific-fear sections and the "get help" section.
- **Never:** calming products or supplements (health and behaviour claims; architecture §L dogs-food/vet boundary).

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** recommended if a real qualified behaviour professional or vet is available. Not required.
- **Source attribution:** required.
- **Trust risk:** implying behaviour credentials; giving medication advice.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Recognising fear | Icon List + C-CALL-SRC | ▼ |
| 4 | Why restraint fails | Text | ▼ |
| 5 | The plan | C-STEPS | ▼ |
| 6 | Common fears | H3 ×5 + link lines | ▼ |
| 7 | Muzzle training | C-NEED + C-STEPS + C-CALL-SAFE | ▼ |
| 8 | Working with a groomer | Text | ▼ |
| 9 | When to get help | C-CALL-VET | ▼ |
| 10 | FAQ | C-FAQ | ▼ |
| 11 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-13 — Senior dog grooming

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/senior-dog-grooming/` |
| WordPress type | Page |
| Primary task | Adapt grooming to an older, stiffer or health-compromised dog |
| Primary intent | Grooming an old dog |
| Secondary intents | Grooming a dog with arthritis; old dog can't stand for a bath; lumps found while grooming; thin skin; senior nails |
| Audience | Owners of older dogs |
| Funnel role | Life stage |

**B. Purpose**

This page helps the owner change the grooming routine as their dog ages. It covers shorter sessions, supported positions, gentler tools on thinner skin and closer attention to nails. It treats grooming as a chance to notice changes such as lumps or coat changes, which are reported to a vet rather than interpreted.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| What changes with age (sourced) | Frequency (→ GD-02) |
| Restructuring sessions | Diagnosing lumps, skin or coat changes |
| Handling and positioning for stiff joints | Sedation advice (referral only) |
| Bathing a dog that can't stand | Base nail technique (→ GD-07) |
| Senior nail adaptations | |
| Noticing lumps and skin or coat changes (recognise and refer) | |
| Working with a groomer for an older dog | |

**D. Question ownership**
- **Owns:**
  - How to groom an old dog
  - Grooming a dog with arthritis
  - My old dog can't stand for a bath
  - Should I still brush a dog with thin skin
  - Senior coat not regrowing after a clip (recognise and refer)
  - Old dog nails (adaptations)
- **May answer (referral only):** is it safe to sedate a dog for grooming.
- **Redirects:**

| Question | Owner |
|---|---|
| How often should an old dog be groomed | GD-02 |
| Base nail technique | GD-07 |
| Fearful older dog | GD-12 |
| Symptoms after grooming | GD-14 |

**E. H1:** "Grooming an older dog safely"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| What changes as dogs age | Skin, coat, joints, tolerance (sourced) | "Why is it harder now?" | EXPL |
| Adapting the routine | Shorter sessions, splitting tasks | "How do I change the routine?" | INSTR |
| Handling and positioning | Support, non-slip surfaces, lying-down grooming | "My dog can't stand" | INSTR / SAFE |
| Bathing an older dog | Adaptations (→ GD-04 for base technique) | "How do I bathe them?" | INSTR |
| Nail care for older dogs | Adaptations (→ GD-07) | "Nails grow long fast" | INSTR |
| What to watch for while grooming | Lumps, skin and coat changes → vet | "I found a lump" | SAFE |
| Working with a groomer | Briefing a groomer about an older dog (→ GD-15) | "Should a groomer do it?" | DS |

**G. H3s:** None required.

**H. Content depth**
- **Short answer:** required.
- **Adaptation lists and steps.**
- **"Watch for" list:** recognition only.
- **FAQ:** at most 3 (can't stand for a bath; thin skin; coat not regrowing), plus sedation as a referral.

**I. Safety / health:** **V-3: REQUIRED (high).**

| Topic | Treatment | Source type |
|---|---|---|
| Age-related changes | Cite | Veterinary guidance |
| Lumps, warts, growths | **Recognise and refer only** | — |
| Coat-regrowth problems | Recognise and refer | — |
| Pain and arthritis handling | Cite handling guidance; pain → vet | Veterinary guidance |
| Sedation | Referral only | — |

**J. Evidence:**
- V-3 (high).
- V-5: the draft FAQ "How often should an old dog be groomed?" → GD-02.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-02 | Schedule | "adjusting the grooming schedule" |
| GD-04 | Bath technique | "bathing technique" |
| GD-07 | Nail technique | "trimming nails" |
| GD-12 | Fear and resistance | "if your dog resists" |
| GD-14 | Skin and coat changes after grooming | "problems after grooming" |
| GD-15 | Groomer | "choosing a groomer" |

- **Incoming:** GD-00, 02, 05, 07, 12, 15.

**L. Images**
- **Primary (lead) image:** `lead-senior` (V-4a). It should show an older dog being gently handled.
- **Instructional images:** a supported-positioning image would help if a verified one is found.
- **Alt-text intent:** describe the support shown.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Senior Dog Grooming: Adapting the Routine Safely |
| Meta description | Adapt grooming for an older dog: shorter sessions, supported positions, gentle handling for stiff joints and thin skin, nail care, and changes to tell a vet. |
| Primary keyword concept | senior dog grooming |
| Secondary concepts | grooming an old dog; grooming a dog with arthritis; old dog can't stand for bath |
| SERP intent | Informational |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Senior dogs |

**N. Commercial:** EDITORIAL + AFFILIATE ELIGIBLE.
- **Product decision:** non-slip mat, support sling, soft brush.
- **Where:** a C-NEED box in "Handling and positioning". Disclosure before the first link.
- **Must stay editorial:** the "watch for" and vet content. No mobility supplements (health claims; out of scope).

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** recommended if a real reviewer is available.
- **Source attribution:** required.
- **Trust risk:** interpreting lumps.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (scope: frequency → GD-02) + breadcrumb + lead image | C-CRUMB, C-INTRO, C-SCOPE, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | What changes | Text + C-CALL-SRC | ▼ |
| 4 | Adapting the routine | Icon List | ▼ |
| 5 | Handling and positioning | C-NEED + C-STEPS + C-CALL-SAFE | ▼ |
| 6 | Bathing / nails | Text + links | ▼ |
| 7 | Watch for | C-CALL-VET (list) | ▼ |
| 8 | Groomer | Text | ▼ |
| 9 | FAQ | C-FAQ | ▼ |
| 10 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-14 — Dog grooming problems

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-grooming-problems/` |
| WordPress type | Page |
| Primary task | Understand a symptom noticed during or after grooming and know where to go next |
| Primary intent | Dog grooming problems (symptoms after grooming) |
| Secondary intents | Dog itchy, red or bumpy after grooming; smells after a bath; head shaking after grooming; dry, flaky skin; tear stains; coat not growing back; injured during grooming |
| Audience | Owners who have noticed something wrong |
| Funnel role | Problem router |

**B. Purpose**

This page is the site's single symptom-led entry point. It helps the owner tell a likely grooming-related cause (technique, product, clipping) from a sign that needs a vet. It then sends them to the task page that fixes the technique, or to a vet. It routes. It does not diagnose or treat.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| A triage rule (grooming cause vs vet) | Diagnosis |
| A symptom index table | Treatment, home remedies, medication |
| One short section per symptom group: common grooming-related contributors (sourced), what to change, see-a-vet signs, owner-page link | Full task technique (→ task pages) |
| Injury during grooming (first response → vet; complaint → GD-15) | Ear cleaning method (→ GD-08) |
| | Non-grooming skin disease content |

**D. Question ownership**
- **Owns:**
  - Why is my dog itching after grooming
  - Bumps or scabs after a haircut
  - Redness after clipping
  - Dog shaking its head after grooming
  - Dog smells even after a bath
  - Dry, flaky skin (grooming angle)
  - Tear staining (grooming angle)
  - Coat not growing back after clipping (also on GD-13 for seniors; recognise and refer)
  - My dog was hurt at the groomer (first response)
- **Answered only as "see a vet":**
  - Can I use coconut oil on dry skin
  - Can I treat a hot spot at home
- **Redirects:**

| Question | Owner |
|---|---|
| Fixing bathing technique | GD-04 |
| Brushing / mats | GD-05 |
| Clipping technique | GD-06 |
| Ear cleaning | GD-08 |
| Quick bleed | GD-07 |
| Complaints about a groomer | GD-15 |

**E. H1:** "Problems after grooming: what they mean and what to do"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Is it a grooming problem or a vet problem? | The triage rule | "Should I worry?" | SAFE / DS |
| Symptoms at a glance | Index table: symptom → likely grooming factor → what to change → when to see a vet → owner page | "What does this mean?" | REF |
| Itching, redness and bumps after grooming | Symptom group | "Why is my dog itchy?" | SAFE / EXPL |
| Head shaking or ear scratching after grooming | Symptom group | "Why the head shaking?" | SAFE |
| A dog that still smells after a bath | Symptom group | "Why the smell?" | EXPL / SAFE |
| Dry or flaky skin | Symptom group | "Why flaky skin?" | SAFE |
| Tear staining | Symptom group | "How do I deal with tear stains?" | EXPL / SAFE |
| Coat not growing back after clipping | Symptom group | "Will it regrow?" | SAFE |
| If your dog was hurt during grooming | First response and next steps | "My dog was cut" | SAFE |

**G. H3s:** None. Each symptom is its own H2 so readers can scan.

**H. Content depth**
- **Short answer:** required. It states the triage rule.
- **Index table:** the core component.
- **Each symptom section:** short. It always ends with the see-a-vet signs and a link to the owner page.
- **FAQ:** at most 3 (scabs after a haircut; coconut oil → refer; hot spot → refer). Optional, because the body covers most of it.

**I. Safety / health:** **V-3: REQUIRED (highest on the site).**
- **Every causal statement** (clipper irritation, product sensitivity, residue, moisture) is cited, or reduced to "may be related to … ; if it persists or worsens, see a vet".
- **No treatments.** "See a vet" signs are a recognition list only.
- **Source types:** veterinary guidance; veterinary dermatology sources.

**J. Evidence:**
- V-3 (highest).
- V-5:
  - Absorb the draft "Head shaking after a groom" (from GD-08) and "smells two days after a bath" (from GD-04).
  - Remove the home-remedy content from the draft FAQs (coconut oil, hot spots).

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-04 | Bathing technique causes (residue, drying) | "rinsing and drying properly" |
| GD-05 | Mats and skin | "brushing and mats" |
| GD-06 | Clipping technique | "clipping safely" |
| GD-08 | Ear care | "cleaning ears safely" |
| GD-07 | Nail bleed | "if a nail bleeds" |
| GD-15 | Groomer injury or complaint | "if something goes wrong at the groomer" |
| GD-13 | Senior coat changes | "grooming an older dog" |

- **Incoming:** GD-00 (and the primary nav item "Problems"), GD-01, 04, 05, 06, 08, 13, 15.

**L. Images**
- **Primary (lead) image:** optional. `lead-problems` (V-4a). It must **not** show medical conditions or injury (trust, accuracy and distress risk).
- **No symptom photos** (diagnostic imagery implies diagnosis).
- **Alt-text intent:** neutral description.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Dog Grooming Problems: What Symptoms After Grooming Mean |
| Meta description | Itching, redness, bumps, head shaking or odour after grooming: what is likely grooming-related, what to change, and the signs that mean you should see a vet. |
| Primary keyword concept | dog grooming problems |
| Secondary concepts | dog itchy after grooming; dog shaking head after grooming; dog smells after bath; bumps after dog haircut |
| SERP intent | Informational, symptom-led (medical-adjacent) |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Grooming problems |

**N. Commercial:** EDITORIAL ONLY.
- No C-NEED box. No affiliate links anywhere on the page.
- Ads only between symptom sections, never inside see-a-vet blocks (PC-07 recommends none).

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** **recommended** if a real veterinarian review is available. If it is used, it is shown per architecture §H (name, credential, date).
- **Source attribution:** required.
- **Trust risk:** the highest on the site. This page must not read as diagnosis.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb | C-CRUMB, C-INTRO (scope: "this page helps you decide where to go; it does not diagnose") | ▲ |
| 2 | Short answer / triage rule | C-SHORT + C-CALL-VET | ▲ |
| 3 | Symptoms at a glance | C-TABLE | ▲/▼ |
| 4 | Symptom sections ×7 | H2 + Text + C-CALL-VET + link line | ▼ |
| 5 | Hurt during grooming | C-CALL-SAFE + C-CALL-VET | ▼ |
| 6 | FAQ (optional) | C-FAQ | ▼ |
| 7 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-15 — Choosing a dog groomer

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/choosing-a-dog-groomer/` |
| WordPress type | Page |
| Primary task | Choose a groomer, prepare the dog for an appointment, and evaluate the result |
| Primary intent | How to choose a dog groomer |
| Secondary intents | What happens at a grooming appointment; salon vs mobile vs self-wash; questions to ask a groomer; how long an appointment takes; should I tip; my groomer hurt my dog |
| Audience | Owners considering professional grooming |
| Funnel role | Decision support (service) |

**B. Purpose**

This page helps the owner decide which kind of grooming service suits their dog and how to evaluate a specific groomer. It covers preparing for the first appointment, explaining what they want, and what to do if something goes wrong. It recommends no specific groomers and generates no leads.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| What happens at an appointment | Prices (→ GD-16) |
| Service types compared (salon, mobile, self-wash, home visit) | Visit frequency (→ GD-02) |
| Questions to ask, and evaluation criteria (training, handling, hygiene, policies) | Named groomers, directories, booking or lead-gen (not authorised; architecture §G) |
| Preparing for the first appointment | Certification claims for a specific country unless sourced (PC-10) |
| Communicating the cut (cut names → GD-06) | |
| Warning signs | |
| Complaints and injuries | |
| Etiquette, including tipping (market-dependent; PC-10) | |

**D. Question ownership**
- **Owns:**
  - How to choose a dog groomer
  - What happens at an appointment
  - Mobile vs salon
  - Questions to ask a groomer
  - How long an appointment takes
  - Can I stay with my dog
  - Should I tip
  - Why was my dog shaved when I asked for a trim
  - My groomer hurt my dog (complaint route; first aid → vet; symptoms → GD-14)
- **Redirects:**

| Question | Owner |
|---|---|
| Cost | GD-16 |
| How often to go | GD-02 |
| Groomers for nervous dogs | GD-12 (this page links to it) |
| Cut names | GD-06 |

**E. H1:** "Choosing a dog groomer and knowing what to expect"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| What happens at a grooming appointment | Set expectations | "What will they do?" | EXPL |
| Salon, mobile, self-wash or home visit? | An owned comparison | "Which type suits my dog?" | DS |
| How to choose a groomer | Criteria and questions to ask | "How do I pick one?" | DS |
| Preparing for the first appointment | Practical preparation | "How do I prepare?" | INSTR |
| Asking for the cut you want | Communication (→ GD-06) | "How do I explain it?" | INSTR |
| Warning signs | Red flags | "Is this groomer OK?" | SAFE / DS |
| If something goes wrong | Complaints, injuries, escalation | "My dog was hurt" | SAFE |

**G. H3s:** Under "How to choose a groomer": questions to ask; what to look for on a visit.

**H. Content depth**
- **Short answer:** required.
- **Comparison table:** service types.
- **Checklist:** questions to ask.
- **FAQ:** at most 3 (tipping; can I stay; shaved instead of trimmed).

**I. Safety / health:** **V-3: REQUIRED (low).**
- **Injury first response:** → vet (recognise and refer).
- **Animal-welfare complaint route:** the authority depends on the market (PC-10). Source type: animal welfare guidance for the chosen market.

**J. Evidence:**
- Professional grooming association guidance (market-specific) for criteria and certification.
- Tipping norms are market-specific (PC-10), so tie them to the V-2 market choice.
- V-5: the draft FAQ "How often should my dog go to the groomer?" → GD-02.
- **Gate status:** no V-1 or V-2 dependency. V-3 (low) and V-4a apply. Market-dependent items follow PC-10.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-16 | Cost | "what grooming costs" |
| GD-02 | Visit interval | "how often to book" |
| GD-12 | Nervous dogs | "groomers for anxious dogs" |
| GD-13 | Older dogs | "grooming an older dog" |
| GD-11 | First puppy groom | "a puppy's first groom" |
| GD-06 | Cut names | "cut styles" |
| GD-17 | Terms | "grooming terms" |
| GD-14 | Problems after a groom | "problems after grooming" |

- **Incoming:** GD-00, 01, 02, 05, 06, 11, 12, 13, 14, 16.

**L. Images**
- **Primary (lead) image:** `lead-groomer` (V-4a). It must not imply a specific business or an endorsement.
- **Instructional images:** none.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How to Choose a Dog Groomer, and What to Expect |
| Meta description | What happens at a grooming appointment, salon vs mobile vs self-wash, the questions to ask a groomer, warning signs, and what to do if something goes wrong. |
| Primary keyword concept | how to choose a dog groomer |
| Secondary concepts | what happens at a dog grooming appointment; mobile dog grooming vs salon; questions to ask a dog groomer |
| SERP intent | Commercial investigation (service) |
| Schema | Article; FAQPage if kept |
| Breadcrumb label | Choosing a groomer |

**N. Commercial:** EDITORIAL + DECISION SUPPORT.
- No affiliate links. No groomer listings, lead forms or booking (not authorised).
- Ads allowed between sections.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** for any market-specific regulation or certification.
- **Trust risk:** inventing certification schemes; implying partnerships with groomers.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb + lead image | C-CRUMB, C-INTRO, Image | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Appointment | C-STEPS (what happens) | ▼ |
| 4 | Service types | C-TABLE | ▼ |
| 5 | How to choose | H3s + Icon List checklist | ▼ |
| 6 | Preparing | Icon List | ▼ |
| 7 | Asking for the cut | Text + links | ▼ |
| 8 | Warning signs | C-CALL-SAFE | ▼ |
| 9 | If something goes wrong | C-CALL-VET + Text | ▼ |
| 10 | FAQ | C-FAQ | ▼ |
| 11 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

---

### GD-16 — Dog grooming cost

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-grooming-cost/` |
| WordPress type | Page |
| Primary task | Set a realistic grooming budget and understand why quotes differ |
| Primary intent | How much does dog grooming cost |
| Secondary intents | Price by dog size and coat; mobile grooming cost; why grooming is expensive; is home grooming cheaper; why was I charged more than quoted |
| Audience | Owners budgeting for professional grooming |
| Funnel role | Decision support (price) |

**B. Purpose**

This page gives the owner sourced, dated, indicative price ranges for **one stated market** (V-2). It explains what drives the price: size, coat, condition, location, service type and add-ons. It helps the owner budget for a year and compare home with professional grooming. It never presents a price as this site's own.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Sourced price ranges for one market, with a date stamp | This site's own prices |
| Price drivers | Local "near me" pricing |
| Add-ons and surcharges (matting, nervous dogs) | Groomer recommendations (→ GD-15 criteria only) |
| Why quotes differ | Tool-buying detail (→ GD-10) |
| Annual budget method (uses the GD-02 interval) | |
| Ways to reduce cost safely | |
| Home vs professional cost | |

**D. Question ownership**
- **Owns:**
  - How much does dog grooming cost
  - Grooming prices by size or coat
  - Mobile grooming cost
  - Why is grooming expensive
  - Why was I charged more than quoted
  - Is mobile grooming worth the extra
  - Is it cheaper to groom at home
  - How much to groom a doodle (sourced range or a driver explanation)
- **Redirects:**

| Question | Owner |
|---|---|
| How often to book | GD-02 |
| How to choose | GD-15 |
| Preventing matting fees | GD-05 |

**E. H1:** "What dog grooming costs, and why quotes vary"

**F. H2 architecture**

| H2 | Purpose | Key questions | Type |
|---|---|---|---|
| Typical grooming prices | Sourced ranges for one market | "What should I expect to pay?" | REF |
| What drives the price | Size, coat, condition, location, service type | "Why is mine more?" | EXPL |
| Extra charges to expect | Matting, handling, add-ons | "Why was I charged extra?" | EXPL |
| Budgeting for a year | Method using the GD-02 interval | "What will it cost annually?" | DS |
| Home grooming vs professional grooming | Cost comparison (→ GD-10 for tools) | "Is home cheaper?" | DS |
| Ways to reduce the cost safely | Maintenance between visits | "How do I spend less?" | DS |

**G. H3s:** None required.

**H. Content depth**
- **Short answer:** required, and it must name the market and the date of the figures.
- **Price table:** a C-TABLE with a source per row and a C-CALL-SRC sourcing note above it.
- **FAQ:** at most 3 (charged more than quoted; mobile worth it; doodle).

**I. Safety / health:** **V-3: NOT MATERIAL.** The "don't save money by skipping matting prevention" point is welfare guidance, not a health claim.

**J. Evidence:**
- **V-2 (blocking):**
  - Choose one market and currency.
  - Named, dated market/price sources for each range.
  - Ranges labelled indicative.
  - The page is published only after V-2 passes.
  - `/pricing/` stays **410** until then, then switches to a 301 to this page.
- **V-5:** all draft figures (including "$40–$120" and "$100–$160") are **not to be reused**.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-15 | Choosing a groomer | "choosing a groomer" |
| GD-02 | Interval for the budget | "how often to book" |
| GD-05 | Avoiding matting charges | "preventing mats" |
| GD-01 | Home maintenance | "grooming at home between visits" |
| GD-10 | Home tool cost | "the tools you'd need" |

- **Incoming:** GD-00 (after publication), GD-02, GD-10, GD-15.

**L. Images**
- **Primary (lead) image:** optional. `lead-cost` (V-4a).
- **Instructional images:** none.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | How Much Does Dog Grooming Cost? What Drives the Price |
| Meta description | Indicative dog grooming prices for [market], what drives the cost (size, coat, condition, mobile service, add-ons), and how to budget a year of grooming. |
| Primary keyword concept | how much does dog grooming cost |
| Secondary concepts | dog grooming prices; mobile dog grooming cost; why is dog grooming so expensive |
| SERP intent | Commercial investigation (price) |
| Schema | Article; FAQPage if kept. No Offer or Product schema. |
| Breadcrumb label | Grooming cost |

The meta description holds a market token to fill at V-2. It contains no figures until V-2 passes.

**N. Commercial:** EDITORIAL + DECISION SUPPORT.
- No affiliate links (there is no product decision; the GD-10 link is editorial).
- Ads allowed between sections, never inside the price table.

**O. Author / trust**
- **Byline:** Grooming Dogs.
- **Expert review:** not required.
- **Source attribution:** **required per figure.**
- **Trust risk:** stale or unsourced prices. Show the "figures as of [date]" label.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro (market and date stated) + breadcrumb | C-CRUMB, C-INTRO | ▲ |
| 2 | Short answer | C-SHORT | ▲ |
| 3 | Typical prices | C-CALL-SRC + C-TABLE | ▼ |
| 4 | Price drivers / extra charges | Icon List | ▼ |
| 5 | Budgeting | Text or C-TABLE (worked example) | ▼ |
| 6 | Home vs professional | C-TABLE | ▼ |
| 7 | Reduce cost | Icon List | ▼ |
| 8 | FAQ | C-FAQ | ▼ |
| 9 | Next / disclaimer / sources | C-NEXT, C-DISC, C-SOURCES | ▼ |

**Navigation:** "Grooming cost" appears in the primary-nav dropdown and on the homepage **only after publication** (architecture §E.1).

---

### GD-17 — Dog grooming glossary

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/dog-grooming-glossary/` |
| WordPress type | Page |
| Primary task | Look up a grooming term met mid-task or at a groomer, then get back to the job |
| Primary intent | Grooming term meanings |
| Secondary intents | Cut names; coat terms; "tidy", "in coat" and "out of coat"; hand stripping; the quick |
| Audience | Owners who meet unfamiliar terms |
| Funnel role | Reference |

**B. Purpose**

This page gives short, plain definitions of grooming terms, grouped by theme. Each term links to the page that owns the topic. It keeps jargon out of the task pages and adds no guidance or claims of its own.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| 1–2 sentence definitions, each with a link to its owner page | How-to content |
| Theme groups: coat and hair; brushing and de-matting; bathing and drying; cuts, trims and blades; nails, ears and teeth; at the groomer | Frequencies |
| | Prices |
| | Health explanations |

**D. Question ownership**
- **Owns:** "What does [term] mean?"
- **Redirects:** everything beyond the definition goes to the term's owner page:
  - cut names → GD-06
  - hand stripping → GD-03
  - quick → GD-07
  - "tidy" → GD-15

**E. H1:** "Dog grooming glossary"

**F. H2 architecture:** one H2 per theme group (6). Purpose: let readers scan. Type: REF.

**G. H3s:** None. Terms are styled definition entries with anchor IDs (so other pages can deep-link), not H3s (PC-02).

**H. Content depth**
- Definition entries only.
- An optional A–Z jump bar.
- **No FAQ** (PC-05): definitions already answer "what does X mean". The draft FAQs are folded into the entries.

**I. Safety / health:** **V-3: NOT MATERIAL**, provided the definitions stay non-clinical (e.g. "the quick" is defined anatomically, and bleeding guidance stays on GD-07).

**J. Evidence:**
- No special source requirement. Definitions must match the owner pages.
- V-5: the draft glossary must be checked so no definition carries guidance or figures.

**K. Internal links**
- **Outgoing:** to the owner pages (GD-03, 05, 06, 07, 08, 09, 15), on each term.
- **Incoming:** footer, GD-00 (section 8), GD-03, GD-06, GD-15. Other pages link on the **first use** of a term only (anchor deep-links).

**L. Images:** none.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Dog Grooming Glossary: Terms and Cut Names Explained |
| Meta description | Plain definitions of dog grooming terms (coat types, de-matting, cuts and blades, nails, ears, teeth and groomer jargon), each linked to the full guide. |
| Primary keyword concept | dog grooming terms |
| Secondary concepts | what is a kennel cut; what is hand stripping; what does tidy mean grooming |
| SERP intent | Informational, definitional |
| Schema | Article. No FAQPage. |
| Breadcrumb label | Glossary |

**N. Commercial:** EDITORIAL ONLY. No affiliate links. Ads allowed between theme groups (PC-07).

**O. Author / trust:** Byline Grooming Dogs. No expert review needed. Trust risk: low.

**P. Elementor structure**

| # | Section | Component | Fold |
|---|---|---|---|
| 1 | Intro + breadcrumb | C-CRUMB, C-INTRO | ▲ |
| 2 | Short answer | C-SHORT ("Find a term below; each links to the full guide") | ▲ |
| 3 | A–Z / theme jump links | Icon List (anchors) or Table of Contents (Pro) | ▲ |
| 4 | Theme groups ×6 | H2 + definition entries (Text Editor; anchor IDs) | ▼ |
| 5 | Next / disclaimer | C-NEXT, C-DISC | ▼ |

---

### GD-18 — About

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/about/` |
| WordPress type | Page |
| Primary task | Find out who is behind the site, what it is and isn't, and how it is funded |
| Primary intent | About Grooming Dogs |
| Secondary intents | Is this a grooming salon; who writes the guides |
| Audience | Visitors judging trust |
| Funnel role | Trust |

**B. Purpose**

This page states plainly what Grooming Dogs is: an editorial-first guide to dog grooming for owners. It also states what the site is not: not a salon, not a booking service, not veterinary advice. It names real people only if they exist. It summarises how the site is funded and points to the full policy (GD-19) and the corrections channel (GD-20).

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| What the site is and isn't | Invented team, history, credentials or testimonials |
| Who runs it (real person, or an organisation statement) | Celebrity or legacy content |
| A funding summary (editorial-first; affiliate links and ads may appear; → GD-19) | "No affiliates" or "no ads" statements |
| How the guides are organised | "Completely independent" claims |
| Corrections (→ GD-20) | |

**D. Question ownership**
- **Owns:** who runs Grooming Dogs; is this a salon; how the site is organised.
- **Redirects:**

| Question | Owner |
|---|---|
| Full sourcing, health and disclosure policy | GD-19 |
| Contact | GD-20 |

**E. H1:** "About Grooming Dogs"

**F. H2 architecture**

| H2 | Purpose | Type |
|---|---|---|
| What Grooming Dogs is | Positioning | EXPL |
| What this site is not | The limits | EXPL |
| Who runs the site | A real person, or an organisation statement | EXPL |
| How the site is funded | Summary → GD-19 | EXPL |
| How the guides are organised | The IA explained | EXPL |
| Corrections and feedback | → GD-20 | EXPL |

**G. H3s:** None.

**H. Content depth:** Short. No FAQ.

**I. Safety / health:** **V-3: NOT MATERIAL.**

**J. Evidence:**
- **First-party source:** owner-supplied facts only (who runs the site; any real named people).
- V-5: the LMArena about-page copy must **not** be reused where it states "no affiliate links" or similar.

**K. Internal links**
- **Outgoing:**

| Destination | Reason | Anchor concept |
|---|---|---|
| GD-19 | Policy | "editorial, sourcing and disclosure policy" |
| GD-20 | Corrections | "send a correction" |
| GD-01 | Start | "start with the full routine" |

- **Incoming:** footer, GD-00 (the one-line "is this a salon?"), GD-19, GD-20.

**L. Images:** Optional neutral image `lead-about` (V-4a). **No photos of people presented as staff** unless they are real staff.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | About Grooming Dogs |
| Meta description | What Grooming Dogs is and isn't: an editorial-first guide to grooming your dog at home, how the guides are written and funded, and how to send corrections. |
| Primary keyword concept | Brand / about |
| SERP intent | Navigational |
| Schema | AboutPage + Organization. Person only for real named people. |
| Breadcrumb label | About |

**N. Commercial:** EDITORIAL ONLY. **No ads** (architecture rule). No affiliate links.

**O. Author / trust:**
- **Byline:** none, or Grooming Dogs.
- **Named people:** only if real (owner input required: PC-12).
- **Trust risk:** fabricated identity. This is the highest-risk page for invented people.

**P. Elementor structure:** Site-page template.
- C-CRUMB
- H1
- Text sections
- The reused homepage "How this guide works" block (saved template)
- C-NEXT (GD-19, GD-20, GD-01)

All above or around the fold; this is a short page.

---

### GD-19 — Editorial & sourcing policy

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/editorial-policy/` |
| WordPress type | Page |
| Primary task | Judge how far to trust the guidance, and understand how the site is funded |
| Primary intent | Grooming Dogs editorial policy / affiliate disclosure |
| Secondary intents | Is the site vet-reviewed; does it use affiliate links; how corrections work |
| Audience | Trust-checking visitors; readers following disclaimer links |
| Funnel role | Trust. Also hosts the disclosure. |

**B. Purpose**

This page documents how content is produced. It covers the byline and authorship rules, sourcing and citation, the health boundary, expert review (only if real), the image policy and corrections. It also holds the site's **affiliate and advertising disclosure**. It is the destination of every guide's disclaimer line and of every inline affiliate disclosure.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| How content is written and attributed (architecture §H roles) | Claims of veterinary review |
| Sourcing and citations | Credentials that don't exist |
| The health-and-safety boundary (recognise and refer) | "No affiliates / no ads / completely independent" |
| Expert review status (truthful: none unless real) | |
| **Commercial model and disclosure:** affiliate links, ads and review pages, and the separation rules | |
| Image policy (verified, credited, no AI) | |
| Corrections and updates (only commitments the owner keeps) | |
| What the site deliberately does not cover (architecture §L) | |

**D. Question ownership**
- **Owns:**
  - How is content sourced
  - Is it vet-reviewed (truthful answer)
  - Does the site use affiliate links / ads
  - How the site makes money
  - How corrections are handled
- **Redirects:** sending a correction → GD-20.

**E. H1:** "Editorial, sourcing and disclosure policy"

**F. H2 architecture**

| H2 | Purpose | Type |
|---|---|---|
| How our guides are written | Byline and author/editor rules | EXPL |
| How we use sources | Citation rules | EXPL |
| Health and safety: where our guidance stops | The vet boundary | SAFE / EXPL |
| Expert review | Truthful status | EXPL |
| How the site is funded: affiliate links and advertising | **The disclosure** (anchor `#disclosure` for inline links) | EXPL |
| Images | Sourcing and credit policy | EXPL |
| Corrections and updates | The process | EXPL |
| What we don't cover | Scope limits | EXPL |

**G. H3s:** Under the funding H2: affiliate links; advertising; review pages (how they would be identified).

**H. Content depth:** Moderate. No FAQ.

**I. Safety / health:** **V-3: NOT MATERIAL.** The page states policy, not health claims.

**J. Evidence:**
- **First-party (owner):** the corrections commitment and any named people.
- **Legal/regulatory guidance** for the disclosure wording in the chosen market (PC-13).
- V-5: the LMArena "Commercial policy" and "no affiliate" text must **not** be reused.

**K. Internal links**
- **Outgoing:** GD-18 ("about the site"), GD-20 ("send a correction"), GD-21 ("privacy").
- **Incoming:**
  - every guide (C-DISC);
  - every inline affiliate disclosure (`#disclosure`);
  - GD-00 trust strip;
  - GD-18, GD-20;
  - footer.

**L. Images:** None.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Editorial, Sourcing and Disclosure Policy, Grooming Dogs |
| Meta description | How Grooming Dogs guides are written and sourced, where our guidance stops and a vet takes over, and how affiliate links and advertising fund the site. |
| Primary keyword concept | Brand + editorial policy |
| SERP intent | Navigational |
| Schema | WebPage |
| Breadcrumb label | Editorial policy |

**N. Commercial:** EDITORIAL ONLY (no ads). It hosts the disclosure.

**O. Author / trust:**
- **Byline:** Grooming Dogs.
- **Trust risk:** policy statements the owner won't uphold. Every commitment needs owner confirmation (PC-12).

**P. Elementor structure:** Site-page template.
- C-CRUMB
- H1
- A Table of Contents (anchors)
- Text sections with the `#disclosure` anchor
- C-NEXT

---

### GD-20 — Contact & corrections

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/contact/` |
| WordPress type | Page |
| Primary task | Report an error, ask a question about a page, or suggest a missing topic |
| Primary intent | Contact Grooming Dogs |
| Audience | Readers with corrections or questions |
| Funnel role | Utility |

**B. Purpose**

This page provides a working form for corrections, questions and suggestions. It states clearly what the channel cannot do: no bookings, no veterinary advice, no groomer recommendations. It shows no invented address, phone or email.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| What the channel is for | Address, phone, social profiles (unless real) |
| What it can't do | "Appointment" or booking language |
| The form | Vet advice |
| A privacy note (→ GD-21) | |

**D. Question ownership:** Owns "how do I contact Grooming Dogs / send a correction". Redirects: "how corrections are handled" → GD-19.

**E. H1:** "Contact and corrections"

**F. H2 architecture**

| H2 | Purpose | Type |
|---|---|---|
| What you can contact us about | Purpose | EXPL |
| What we can't help with | Limits | EXPL |
| Send a message | The form | INSTR |

**G. H3s:** None.

**H. Content depth:** Short. No FAQ.

**Form fields** (from the validated function):
- message type (correction / missing topic / question / site issue)
- message (required)
- optional email
- page URL (optional or auto-filled)
- consent and privacy line (→ GD-21)

**I. Safety / health:** **V-3: NOT MATERIAL.** The "we can't give veterinary advice" line is a policy statement.

**J. Evidence:** First-party (owner): the form destination, data retention and response commitment (PC-12).

**K. Internal links**
- **Outgoing:** GD-21 (privacy), GD-19 (corrections process).
- **Incoming:** footer, GD-18, GD-19.

**L. Images:** None.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Contact and Corrections, Grooming Dogs |
| Meta description | Send a correction, a question about a guide, or a topic suggestion to Grooming Dogs. We can't book grooming appointments or give veterinary advice. |
| Primary keyword concept | Brand + contact |
| SERP intent | Navigational |
| Schema | ContactPage |
| Breadcrumb label | Contact |

**N. Commercial:** EDITORIAL ONLY. No ads.

**O. Author / trust:** No byline. Trust risk: promising response times the owner won't keep.

**P. Elementor structure:** Site-page template.
- C-CRUMB
- H1
- Text ×2
- **Form:** Elementor Pro Form, or a form plugin (if no Pro licence)
- Privacy line

---

### GD-21 — Privacy policy

**A. Identity**

| Field | Value |
|---|---|
| Canonical URL | `/privacy-policy/` |
| WordPress type | Page (set as the WordPress privacy policy page) |
| Primary task | Find out what personal data the site collects and why |
| Primary intent | Privacy policy |
| Audience | All visitors; form users |
| Funnel role | Legal / utility |

**B. Purpose**

This page states what data the site collects and why, on the basis of the **actual** installed stack: the contact form, any analytics, ad partners and cookies, affiliate tracking, and the hosting/CDN. It also covers retention, user rights and how to get in touch.

**C. Scope**

| IN SCOPE | OUT OF SCOPE |
|---|---|
| Data collected | Generic boilerplate for services the site doesn't use |
| Purposes | |
| Third parties actually used | |
| Cookies | |
| Retention | |
| User rights | |
| Contact route (→ GD-20) | |
| Update date | |

**D. Question ownership:** Owns privacy questions. Redirects: contact → GD-20.

**E. H1:** "Privacy policy"

**F. H2 architecture:**
1. What we collect
2. How we use it
3. Cookies, analytics and advertising
4. Affiliate links
5. Who we share data with
6. How long we keep it
7. Your rights
8. Contact
9. Changes to this policy

All are reference sections.

**G. H3s:** Only where a specific third party needs its own explanation.

**H. Content depth:** Legal completeness for the chosen market. No FAQ.

**I. Safety / health:** **V-3: NOT MATERIAL.**

**J. Evidence:**
- **Legal/regulatory guidance** for the target market, plus owner confirmation of the actual plugins and services (PC-13).
- Must be updated whenever ads, analytics or affiliate tracking are activated.

**K. Internal links:** Outgoing: GD-20. Incoming: footer, the GD-20 form, any cookie notice.

**L. Images:** None.

**M. SEO**

| Field | Value |
|---|---|
| SEO title | Privacy Policy, Grooming Dogs |
| Meta description | What personal data Grooming Dogs collects through its contact form, analytics, advertising and affiliate links, how it is used, and your rights. |
| Primary keyword concept | Brand + privacy policy |
| Schema | WebPage |
| Breadcrumb label | Privacy policy |

Indexing: index (default). `noindex` is acceptable, as the owner prefers (PC-13).

**N. Commercial:** EDITORIAL ONLY. No ads.

**O. Author / trust:** No byline. Trust risk: describing services that aren't used, or leaving out ones that are.

**P. Elementor structure:** Site-page template. C-CRUMB, H1, updated date, Text sections.

---

## 5. Template Families

There are seven families. Pages are **not** forced into a single template. Every family uses the shared components in §2 and these global sections: C-CRUMB, C-INTRO, C-NEXT, C-DISC and C-SOURCES.

| Family | Pages | Shared structure | Variable sections | Reusable components | Must stay page-specific |
|---|---|---|---|---|---|
| **F1 Orientation** | GD-00 | Hero, start-here cards, situation cards, task links, professional cards, trust strip, optional tools/commercial slot, secondary links | None (single page) | Card styles; trust strip (shared with GD-18) | Value proposition; routing set |
| **F2 Core guide** | GD-01, GD-02 | Intro, short answer, explanation, core component (routine steps / schedule table), adjustments or mistakes, hand-over, FAQ, next | GD-01: H3 per routine step + C-NEED. GD-02: C-TABLE/Tabs + sourcing note, no C-NEED. | C-SHORT, C-STEPS, C-TABLE, C-CALL-* | GD-02 table data (V-1); GD-01 step summaries |
| **F3 Task / how-to** | GD-04 – GD-09 | Intro with C-SCOPE pointers, short answer, prep, C-NEED, C-STEPS (+ C-FIG), technique variants, safety/vet callouts, FAQ, next | Comparison table (GD-07); shampoo types (GD-04); blade and cut tables (GD-06); alternatives table (GD-09); stop-signs (GD-08) | C-SCOPE, C-NEED + disclosure, C-STEPS, C-FIG, C-CALL-SAFE/-VET | Procedures; health statements (V-3); images (V-4) |
| **F4 Life stage** | GD-11, GD-13 | Intro + scope, short answer, "what's different" (sourced), adapted programme/steps, C-NEED, task adaptations that link to F3, watch-for / vet, groomer, FAQ, next | Puppy: coat-change and first-groom sections. Senior: positioning and "watch for". | As F3 | Age-related claims (V-3) |
| **F5 Problem / behaviour** | GD-12, GD-14 | Intro, short answer (triage or core message), recognition, plan or index, per-issue sections, "get help" vet callout, FAQ, next | GD-12: plan steps + muzzle C-NEED. GD-14: symptom index table and **no** C-NEED. | C-TABLE, C-CALL-VET, C-STEPS | All causal/health statements (V-3 high) |
| **F6 Decision support** | GD-10, GD-15, GD-16 | Intro, short answer, criteria, comparison/option tables, decision output (kits / checklist / budget), FAQ, next | GD-10: affiliate options blocks. GD-15: no affiliate. GD-16: sourcing note + price table (V-2), no affiliate. | C-TABLE, C-CALL-SRC, options block (GD-10 only) | Criteria; prices; market-specific content (PC-10) |
| **F7 Reference / institutional** | GD-17, GD-18 – GD-21 | Breadcrumb, H1, short text sections; no short-answer box (except GD-17); no FAQ; no ads | GD-17: anchored definition entries. GD-19: `#disclosure` anchor. GD-20: form. GD-21: legal sections. | Site-page template; Table of Contents | Owner-supplied facts (PC-12); legal wording (PC-13) |

**Elementor build note.** Make F3 the master guide template, and derive F2, F4, F5 and F6 from it by hiding or adding sections. F1 and F7 use their own templates. Template choice never changes a page's URL or role.

---

## 6. Cross-Page Question Ownership Matrix

**Rule:** a supporting page gives one sentence and a link at most. It never has an H2, FAQ entry or table that rebuilds the owner's answer.

| Topic / question | Owning page | Supporting pages (pointer only) | Rule |
|---|---|---|---|
| Where to start; what the site is | GD-00 | GD-18 | The homepage answers no grooming question |
| How to groom at home (full routine, order) | GD-01 | GD-00 | Task pages don't restate the full sequence |
| **Any "how often…"** (bathe, brush, nails, ears, teeth, puppy, senior, groomer visits) | **GD-02** | GD-01, 04, 05, 07, 08, 09, 11, 13, 15, 16 | No frequency H2s or FAQs anywhere except GD-02 |
| Coat identification; breed → coat; single vs double; doodles | GD-03 | GD-02, 05, 10 | No cadence on GD-03 |
| Shaving a double coat | GD-03 | GD-05, 06 | — |
| Bathing technique; shampoo; drying; face washing | GD-04 | GD-01, 11, 13 | Drying is owned only here |
| Bathe before or after a haircut | GD-04 | GD-06 | — |
| Brushing technique; line brushing; mats; shedding | GD-05 | GD-01, 03, 13 | — |
| **Which brush / tool / clipper / dryer to buy** | **GD-10** | GD-01, 04 – 09 | Task pages carry a C-NEED list of tool *types* plus a link to GD-10 |
| Trims (pads, sanitary, face); blade use; cut-style names | GD-06 | GD-15, GD-17 (definition only) | — |
| Nail technique; the quick; black nails; grinder vs clipper (technique); bleeding | GD-07 | GD-10 (buying), GD-13 (adaptation) | — |
| Ear cleaning method; what not to use; plucking | GD-08 | GD-04 | — |
| Teeth brushing; toothpaste; chews and alternatives | GD-09 | GD-11 | — |
| Puppy handling; first bath; first groom; coat transition | GD-11 | GD-04, 07, 15 | Puppy frequency → GD-02 |
| **Resistance / fear / "won't let me" / hates baths / dryer fear / muzzles** | **GD-12** | GD-04, 07, 08, 09, 11, 15 | No resistance H2s on task pages |
| Senior adaptations; positioning; lumps noticed while grooming | GD-13 | GD-07, 12 | Lumps: recognise and refer only |
| **Symptoms during or after grooming** (itch, redness, bumps, head shaking, smell, flaky skin, tear stains, regrowth, injury) | **GD-14** | GD-04, 05, 06, 08, 13, 15 | Task pages point to GD-14; no symptom FAQs on task pages |
| Choosing a groomer; appointment; service types; tipping; complaints | GD-15 | GD-12, 13, 11, 16 | — |
| Grooming cost; quotes; budget; home vs pro cost | GD-16 | GD-10, 15 | Figures only on GD-16 (V-2) |
| Grooming terms | GD-17 | All (first-use link) | Definitions only |
| Who runs the site / is it a salon | GD-18 | GD-00 | — |
| Sourcing, health boundary, funding, **disclosure** | GD-19 | All guides (C-DISC), inline disclosures | — |
| Contact / corrections | GD-20 | GD-18, 19 | — |
| Privacy | GD-21 | GD-20 | — |
| Product reviews / "best X" | Reserved: GD-23 `/reviews/` (not launched) | GD-10 | No "best" rankings on launch pages (PC-11) |

---

## 7. Internal Linking Matrix

This matrix is generated from the outgoing links in §4 (section K of each spec). **Where a per-page "Incoming" list differs from this matrix, the matrix wins.**

Site-wide links are not counted here:
- logo → GD-00;
- footer;
- breadcrumb root;
- C-DISC (every guide GD-01 – GD-17 → GD-19).

| Page | Outgoing (editorial) | Incoming (editorial) | Out | In |
|---|---|---|---|---|
| GD-00 | GD-01, GD-02, GD-03, GD-04, GD-05, GD-06, GD-07, GD-08, GD-09, GD-10, GD-11, GD-12, GD-13, GD-14, GD-15, GD-16, GD-17, GD-19 | — (logo, breadcrumb, footer) | 18 | 0 |
| GD-01 | GD-02, GD-03, GD-04, GD-05, GD-06, GD-07, GD-08, GD-09, GD-10, GD-12, GD-14, GD-15 | GD-00, GD-16, GD-18 | 12 | 3 |
| GD-02 | GD-03, GD-04, GD-05, GD-07, GD-08, GD-09, GD-11, GD-13, GD-15, GD-16 | GD-00, GD-01, GD-03, GD-04, GD-05, GD-07, GD-08, GD-09, GD-11, GD-13, GD-15, GD-16 | 10 | 12 |
| GD-03 | GD-02, GD-05, GD-06, GD-10, GD-17 | GD-00, GD-01, GD-02, GD-05, GD-06, GD-10, GD-11, GD-17 | 5 | 8 |
| GD-04 | GD-02, GD-05, GD-08, GD-10, GD-12, GD-14 | GD-00, GD-01, GD-02, GD-05, GD-06, GD-10, GD-11, GD-12, GD-13, GD-14 | 6 | 10 |
| GD-05 | GD-02, GD-03, GD-04, GD-10, GD-14, GD-15 | GD-00, GD-01, GD-02, GD-03, GD-04, GD-06, GD-10, GD-11, GD-14, GD-16, GD-17 | 6 | 11 |
| GD-06 | GD-03, GD-04, GD-05, GD-10, GD-14, GD-15, GD-17 | GD-00, GD-01, GD-03, GD-10, GD-14, GD-15, GD-17 | 7 | 7 |
| GD-07 | GD-02, GD-10, GD-12, GD-13 | GD-00, GD-01, GD-02, GD-10, GD-11, GD-12, GD-13, GD-14, GD-17 | 4 | 9 |
| GD-08 | GD-02, GD-10, GD-12, GD-14 | GD-00, GD-01, GD-02, GD-04, GD-12, GD-14, GD-17 | 4 | 7 |
| GD-09 | GD-02, GD-10, GD-11, GD-12 | GD-00, GD-01, GD-02, GD-11, GD-12, GD-17 | 4 | 6 |
| GD-10 | GD-03, GD-04, GD-05, GD-06, GD-07, GD-16 | GD-00, GD-01, GD-03, GD-04, GD-05, GD-06, GD-07, GD-08, GD-09, GD-16 | 6 | 10 |
| GD-11 | GD-02, GD-03, GD-04, GD-05, GD-07, GD-09, GD-12, GD-15 | GD-00, GD-02, GD-09, GD-12, GD-15 | 8 | 5 |
| GD-12 | GD-04, GD-07, GD-08, GD-09, GD-11, GD-13, GD-15 | GD-00, GD-01, GD-04, GD-07, GD-08, GD-09, GD-11, GD-13, GD-15 | 7 | 9 |
| GD-13 | GD-02, GD-04, GD-07, GD-12, GD-14, GD-15 | GD-00, GD-02, GD-07, GD-12, GD-14, GD-15 | 6 | 6 |
| GD-14 | GD-04, GD-05, GD-06, GD-07, GD-08, GD-13, GD-15 | GD-00, GD-01, GD-04, GD-05, GD-06, GD-08, GD-13, GD-15 | 7 | 8 |
| GD-15 | GD-02, GD-06, GD-11, GD-12, GD-13, GD-14, GD-16, GD-17 | GD-00, GD-01, GD-02, GD-05, GD-06, GD-11, GD-12, GD-13, GD-14, GD-16, GD-17 | 8 | 11 |
| GD-16 | GD-01, GD-02, GD-05, GD-10, GD-15 | GD-00, GD-02, GD-10, GD-15 | 5 | 4 |
| GD-17 | GD-03, GD-05, GD-06, GD-07, GD-08, GD-09, GD-15 | GD-00, GD-03, GD-06, GD-15 | 7 | 4 |
| GD-18 | GD-01, GD-19, GD-20 | GD-19 | 3 | 1 |
| GD-19 | GD-18, GD-20, GD-21 | GD-00, GD-18, GD-20 | 3 | 3 |
| GD-20 | GD-19, GD-21 | GD-18, GD-19, GD-21 | 2 | 3 |
| GD-21 | GD-20 | GD-19, GD-20 | 1 | 2 |

**Check:** editorial orphans among GD-01 – GD-21: none. GD-00 is reached through the logo and breadcrumbs. GD-19 also receives C-DISC links from every guide.

**Linking rules:**
- **Every link needs a stated reason.** It is on the C-NEXT card, or implied by the sentence it sits in.
- **"Where to go next" cards:** 3–4 per guide, chosen from the outgoing list above.
- **Glossary links:** first use of a term only.
- **No page links to every other page.** GD-00 is the routing exception.
- **Commercial links:** never from callouts.
- **Disclosure link:** points to `/editorial-policy/#disclosure`.

---

## 8. Evidence / Verification Matrix

Gates block **publication of the affected copy or image**. They don't block building the page structure or drafting it.

**V-4 is split in two:**
- **V-4a:** the architecture's general image check (subject, caption, credit and licence) for every image.
- **V-4b:** the request's two known gaps: no verified photo exists for teeth brushing or ear cleaning.

| Gate | Requirement | Pages affected | Source type to use | Pass condition |
|---|---|---|---|---|
| **V-1** | Coat / schedule figures | **GD-02** (blocking for the table); GD-03 (coat taxonomy, breed assignments); GD-05, GD-11 (only if coat-cycle or transition timing is stated) | Professional grooming guidance; veterinary guidance; breed-standard bodies (for coat assignments) | Each figure sourced, or rewritten as non-numeric guidance; ranges where sources disagree |
| **V-2** | Prices for one chosen market | **GD-16** (blocking); `/pricing/` stays 410 until it passes. GD-15 tipping norms inherit the market (PC-10). | Market price sources (named, dated) | Market and currency named; every range sourced and dated; labelled indicative |
| **V-3** | Health statements cited, or reduced to "recognise it and see a vet" | **High:** GD-08, 09, 12, 13, 14. **Standard:** GD-01, 03, 04, 05, 06, 07, 11. **Low:** GD-10, 15. **Not material:** GD-00, 02 (except the skin note), 16, 17, 18, 19, 20, 21. | Veterinary guidance; veterinary dermatology / toxicology / first aid; animal behaviour and welfare guidance; the VOHC primary source | No uncited health claims; no treatment, medication or dose; vet signs as recognition lists |
| **V-4a** | Every image: subject matches caption and alt text; licence confirmed; credit recorded; not AI-generated | All pages with images (§9) | The Pexels source page for each image | Each registry candidate passes, or is dropped |
| **V-4b** | Teeth-brushing and ear-cleaning instructional photos | GD-09, GD-08 | Licensed stock or commissioned photography | Until found, the pages publish **without** those figures. No placeholders. |
| **V-5** | LMArena draft reuse | Every guide reusing draft text | — | Each reused section checked against §6, its claims against V-1 to V-3; the relocations below done; no "no affiliate / no ads" lines; "Safly" typo not reused; draft figures not reused |

**V-5 relocation list.** These are the draft sections that break ownership. Delete each from the source page, then rebuild it on the owner page.

| # | Draft location | Draft item | Moves to |
|---|---|---|---|
| 1 | routine (GD-01) FAQ | "How often should I do all of this?" | GD-02 |
| 2 | coat page (GD-03) | Cadence lines inside each coat section | GD-02 |
| 3 | bathing (GD-04) H2 | "How often to bathe" | GD-02 |
| 4 | bathing (GD-04) H2 | "If your dog hates the bath" | GD-12 |
| 5 | bathing (GD-04) FAQ | "Why does my dog smell bad two days after a bath?" | GD-14 |
| 6 | brushing (GD-05) H2 | "Matching the brush to the coat" | GD-10 |
| 7 | brushing (GD-05) H2 | "How often to brush" | GD-02 |
| 8 | brushing (GD-05) FAQ | "Is it okay to shave a matted dog?" | GD-03 / GD-15 |
| 9 | brushing (GD-05) FAQ | "My dog yelps when I brush a certain area" | GD-14 |
| 10 | haircuts (GD-06) FAQ | "Should I trim before or after the bath?" | GD-04 |
| 11 | nails (GD-07) H2 | "How often, and the receding quick" (frequency part) | GD-02 |
| 12 | nails (GD-07) H2 | "When your dog won't let you" | GD-12 |
| 13 | ears (GD-08) H2 | "How often to clean ears" | GD-02 |
| 14 | ears (GD-08) FAQ | "How often should I clean my dog's ears?" | GD-02 |
| 15 | ears (GD-08) H2 | "Head shaking after a groom" | GD-14 |
| 16 | teeth (GD-09) H2 | "How often" | GD-02 |
| 17 | teeth (GD-09) FAQ | "My dog won't let me brush its teeth" | GD-12 |
| 18 | puppy (GD-11) FAQ | "How often should I brush my puppy?" | GD-02 |
| 19 | senior (GD-13) FAQ | "How often should an old dog be groomed?" | GD-02 |
| 20 | groomer (GD-15) FAQ | "How often should my dog go to the groomer?" | GD-02 |

**V-5 content to remove entirely (not relocated):**
- Draft home-remedy FAQs (coconut oil; treating hot spots) → reduced to referral answers on GD-14.
- Draft cost figures.
- Draft cadence values (`seed-data.ts`).
- Draft commercial-policy and "no affiliate" statements (GD-10, GD-18, GD-19).
- Draft "anal glands" H2 (becomes a callout).
- Any wording that implies hands-on testing or a professional identity.

---

## 9. Image Requirements Matrix

Candidate IDs refer to the LMArena photo registry (`src/content/images.ts`). These are **candidates only**; each must pass V-4a.

| Page | Primary image | Candidate | Instructional images | Candidate / status | Must demonstrate | Alt-text intent |
|---|---|---|---|---|---|---|
| GD-00 | Hero (required) | `hero-brush` | — | — | Owner brushing a calm dog at home | The action |
| GD-01 | Lead (useful) | `lead-routine` | None | — | Home grooming setting | Setting and action |
| GD-02 | Lead (optional) | `lead-frequency` | None (the table is the content) | — | — | Scene |
| GD-03 | Lead (useful) | `lead-coat` | 6 coat figures + 1 parted-coat figure | `coat-smooth`, `coat-double`, `coat-silky`, `coat-curly`, `coat-wire`, `coat-hairless`, `fur-texture` | Texture of each coat; coat parted to the skin | Coat feature, not breed alone |
| GD-04 | Lead | `lead-bathing` | Bath technique | `fig-bath-tub` | Washing with water kept away from the face | Technique |
| GD-05 | Lead | `lead-brushing` | Line brushing | `fur-texture` (shared with GD-03) | Coat parted, brush at the skin | Technique |
| GD-06 | Lead | `lead-haircuts` | Paw-pad / sanitary trims (useful) | **None verified.** Text only. | — | — |
| GD-07 | Lead | `lead-nails` | Trim position | `fig-nail-cut` | Cut angle and amount; black-nail quick image useful if found | Angle and position |
| GD-08 | Lead | `lead-ears` | Ear-cleaning step | **V-4b gap. Publish without it.** | Outer-ear-only cleaning | Outer ear only |
| GD-09 | Lead | `lead-teeth` | Tooth-brushing step | **V-4b gap. Publish without it.** | Brushing angle at the gum line | What is visible |
| GD-10 | Lead | `lead-tools` | Tool types (useful) | Verify new ones if added | Tool type; no endorsement implied | Tool type |
| GD-11 | Lead | `lead-puppy` | None | — | Calm puppy being handled | Handling |
| GD-12 | Lead | `lead-anxious` | Muzzle training (useful) | None verified | **Never a visibly distressed dog** | Neutral |
| GD-13 | Lead | `lead-senior` | Supported positioning (useful) | None verified | Gentle support | Support shown |
| GD-14 | Lead (optional) | `lead-problems` | **None** (no symptom imagery) | — | **No medical conditions or injuries** | Neutral |
| GD-15 | Lead | `lead-groomer` | None | — | Not a specific business | Neutral |
| GD-16 | Lead (optional) | `lead-cost` | None | — | — | Neutral |
| GD-17 | None | — | None | — | — | — |
| GD-18 | Optional | `lead-about` | None | — | No people shown as staff unless real | Neutral |
| GD-19 – GD-21 | None | — | None | — | — | — |

**Image rules:**
- No visible placeholders.
- No AI-generated images.
- A credit line goes under every photo.
- Captions are required on instructional figures.
- Lead images use eager loading; others use lazy loading. Elementor image settings handle both.

---

## 10. SEO Specification Matrix

Titles and descriptions are **drafts**. Character counts were computed when this document was written. Targets: title ≤ 60 characters, description ≤ 160.

**Not allowed in any title or description:** "vet-approved", "best", "independent", or a figure that hasn't passed V-1 or V-2.

| ID | URL | SEO title draft (chars) | Meta description draft (chars) | Primary keyword concept | FAQ / schema | Breadcrumb |
|---|---|---|---|---|---|---|
| GD-00 | `/` | Grooming Dogs: Practical Dog Grooming Guides for Owners (55) | Plain-English dog grooming guidance for owners: the full routine, schedules by coat type, each task step by step, and when a groomer or vet should take over. (157) | Brand ("grooming dogs") plus "dog grooming guide" (navigational) | WebSite + Organization ("Grooming Dogs"; no address or phone). No FAQ. | Home |
| GD-01 | `/how-to-groom-your-dog-at-home/` | How to Groom Your Dog at Home: The Full Routine, in Order (57) | The complete at-home grooming routine in the right order: brush, nails, ears, bath and dry, face and teeth, trimming. Plus what you need and when to stop. (154) | how to groom a dog at home | Article; FAQPage only if the FAQ is kept | Groom at home |
| GD-02 | `/how-often-should-you-groom-your-dog/` | How Often Should You Groom Your Dog? A Schedule by Coat Type (60) | How often to brush, bathe, trim nails, check ears and brush teeth, set by your dog's coat type, with the signs that a task is due and when to book a groomer. (157) | how often should you groom your dog | Article; FAQPage if the FAQ is kept | Grooming schedule |
| GD-03 | `/dog-coat-types/` | Dog Coat Types: How to Identify Your Dog's Coat (47) | Smooth, double, silky, curly, wire or hairless? How to identify your dog's coat, including mixed breeds and doodles, and what each coat type means for grooming. (160) | dog coat types | Article; FAQPage if kept | Coat types |
| GD-04 | `/bathing-your-dog/` | How to Bathe a Dog: Setup, Shampoo, Rinsing and Drying (54) | Bathe your dog step by step: brush first, set up the space, choose a dog shampoo, rinse properly and dry completely, keeping water out of the eyes and ears. (156) | how to bathe a dog | Article; FAQPage if kept | Bathing |
| GD-05 | `/brushing-your-dog/` | How to Brush a Dog: Line Brushing, Mats and Shedding (52) | Brush your dog to the skin with line brushing, remove small mats safely, know when matting needs a groomer, and manage shedding instead of chasing it. (150) | how to brush a dog | Article; FAQPage if kept | Brushing |
| GD-06 | `/dog-haircuts-and-trimming/` | Dog Haircuts at Home: What to Trim and What to Leave (52) | What you can realistically trim at home (paw pads, sanitary area, around the eyes), how clipper blades work, and the cut names to use with your groomer. (152) | how to cut a dog's hair at home | Article; FAQPage if kept | Haircuts & trimming |
| GD-07 | `/trimming-dog-nails/` | How to Trim Dog Nails Safely, Including Black Nails (51) | Find the quick, including on black nails, trim or grind safely, shorten overgrown nails gradually, and know what to do if a nail bleeds. (136) | how to trim dog nails | Article; FAQPage if kept | Nail trimming |
| GD-08 | `/cleaning-dog-ears/` | How to Clean Dog Ears Safely, and When Not To (45) | Clean the visible part of your dog's ear without pushing into the canal, what never goes in a dog's ear, and the signs that mean you should see a vet instead. (158) | how to clean dog ears | Article; FAQPage if kept | Ear cleaning |
| GD-09 | `/brushing-dog-teeth/` | How to Brush Your Dog's Teeth, and What Else Helps (50) | Get your dog used to tooth brushing, brush with a dog-safe toothpaste, see what chews and additives can and can't do, and know when the vet should take over. (157) | how to brush dog teeth | Article; FAQPage if kept | Teeth brushing |
| GD-10 | `/dog-grooming-tools/` | Dog Grooming Tools: What You Need for Your Dog's Coat (53) | What each grooming tool does, which coats need it, and the starter kit for your dog's coat type, from brushes and rakes to clippers, nail tools and dryers. (155) | dog grooming tools | Article; FAQPage if kept. **No Product or Review schema.** | Grooming tools |
| GD-11 | `/puppy-grooming/` | Puppy Grooming: First Baths, Handling and First Groom (53) | Make grooming normal from puppyhood: gentle handling practice, the first bath, first nail trims and brushing, the first professional groom and the coat change. (159) | puppy grooming | Article; FAQPage if kept | Puppy grooming |
| GD-12 | `/grooming-an-anxious-dog/` | How to Groom an Anxious Dog Who Hates Being Groomed (51) | Why dogs resist grooming, why restraint backfires, and a gradual plan for nails, baths, dryers and handling, plus muzzle training and when to get help. (151) | dog hates being groomed | Article; FAQPage if kept | Anxious dogs |
| GD-13 | `/senior-dog-grooming/` | Senior Dog Grooming: Adapting the Routine Safely (48) | Adapt grooming for an older dog: shorter sessions, supported positions, gentle handling for stiff joints and thin skin, nail care, and changes to tell a vet. (157) | senior dog grooming | Article; FAQPage if kept | Senior dogs |
| GD-14 | `/dog-grooming-problems/` | Dog Grooming Problems: What Symptoms After Grooming Mean (56) | Itching, redness, bumps, head shaking or odour after grooming: what is likely grooming-related, what to change, and the signs that mean you should see a vet. (157) | dog grooming problems | Article; FAQPage if kept | Grooming problems |
| GD-15 | `/choosing-a-dog-groomer/` | How to Choose a Dog Groomer, and What to Expect (47) | What happens at a grooming appointment, salon vs mobile vs self-wash, the questions to ask a groomer, warning signs, and what to do if something goes wrong. (156) | how to choose a dog groomer | Article; FAQPage if kept | Choosing a groomer |
| GD-16 | `/dog-grooming-cost/` | How Much Does Dog Grooming Cost? What Drives the Price (54) | Indicative dog grooming prices for [market], what drives the cost (size, coat, condition, mobile service, add-ons), and how to budget a year of grooming. (153) | how much does dog grooming cost | Article; FAQPage if kept. No Offer or Product schema. | Grooming cost |
| GD-17 | `/dog-grooming-glossary/` | Dog Grooming Glossary: Terms and Cut Names Explained (52) | Plain definitions of dog grooming terms (coat types, de-matting, cuts and blades, nails, ears, teeth and groomer jargon), each linked to the full guide. (152) | dog grooming terms | Article. No FAQPage. | Glossary |
| GD-18 | `/about/` | About Grooming Dogs (19) | What Grooming Dogs is and isn't: an editorial-first guide to grooming your dog at home, how the guides are written and funded, and how to send corrections. (155) | Brand / about | AboutPage + Organization. Person only for real named people. | About |
| GD-19 | `/editorial-policy/` | Editorial, Sourcing and Disclosure Policy, Grooming Dogs (56) | How Grooming Dogs guides are written and sourced, where our guidance stops and a vet takes over, and how affiliate links and advertising fund the site. (151) | Brand + editorial policy | WebPage | Editorial policy |
| GD-20 | `/contact/` | Contact and Corrections, Grooming Dogs (38) | Send a correction, a question about a guide, or a topic suggestion to Grooming Dogs. We can't book grooming appointments or give veterinary advice. (147) | Brand + contact | ContactPage | Contact |
| GD-21 | `/privacy-policy/` | Privacy Policy, Grooming Dogs (29) | What personal data Grooming Dogs collects through its contact form, analytics, advertising and affiliate links, how it is used, and your rights. (144) | Brand + privacy policy | WebPage | Privacy policy |

**Notes:**
- **Title suffix (PC-14):** guides don't add the "| Grooming Dogs" suffix (set in Rank Math per page). Site pages GD-19 to GD-21 include the brand in the title itself.
- **Schema:** Article on GD-01 – GD-17.
- **FAQPage:** only where a visible FAQ is kept. One generator only (PC-06). Rich results are not expected; the FAQ exists for users.
- **No schema on launch pages for:** Product, Review, AggregateRating or Offer.
- **Breadcrumbs:** two levels (Home › label).

---

## 11. Commercial / Affiliate Eligibility Matrix

| Page | Class | Product decision | "What you'll need" / options location | Must remain editorial | Disclosure | Ads |
|---|---|---|---|---|---|---|
| GD-00 | EDITORIAL ONLY | — | Optional homepage section 7 (tools entry) | Sections 1–6 | Before any affiliate item in section 7 | None at launch (PC-07) |
| GD-01 | EDITORIAL + AFFILIATE ELIGIBLE | Basic home kit | C-NEED in "Before you start" | Steps; hand-over | Inline, before the first link | After the short answer; not in the steps |
| GD-02 | EDITORIAL ONLY | — | — | All | — | After the table section |
| GD-03 | EDITORIAL ONLY | — | — (tool links → GD-10) | All | — | After the coat section |
| GD-04 | EDITORIAL + AFFILIATE ELIGIBLE | Shampoo type, towels, mat, dryer | C-NEED in "Before the bath" | Steps; drying safety; shampoo criteria | Inline | Not in the steps or callouts |
| GD-05 | EDITORIAL + AFFILIATE ELIGIBLE | Brush, comb, de-matting tool | C-NEED at the start of "Line brushing" | Mat decision; safety | Inline | Same |
| GD-06 | EDITORIAL + AFFILIATE ELIGIBLE | Blunt-tip scissors, clippers, guards | C-NEED in "Preparing the coat" | Boundary decision; procedures; safety | Inline | Same |
| GD-07 | EDITORIAL + AFFILIATE ELIGIBLE | Clippers, grinder, styptic | C-NEED before the steps | Grinder vs clipper criteria; bleed response | Inline | Never in the bleed section |
| GD-08 | EDITORIAL + AFFILIATE ELIGIBLE | Non-medicated ear cleaner, pads | C-NEED before the steps | Stop signs; vet section; **no medicated products** | Inline | Same |
| GD-09 | EDITORIAL + AFFILIATE ELIGIBLE | Toothbrush, dog toothpaste | C-NEED before the steps; alternatives only where claims are cited | Vet section; efficacy claims | Inline | Same |
| GD-10 | EDITORIAL + DECISION SUPPORT (affiliate eligible) | Tool type and product | Options block after each tool family's criteria | Criteria; coat matching; safety; kit logic; **no ranking** (PC-11) | Inline, before the first link | Between families |
| GD-11 | EDITORIAL + AFFILIATE ELIGIBLE | Puppy brush, nail tool, shampoo | C-NEED after the programme intro | Handling programme | Inline | Not in the steps |
| GD-12 | EDITORIAL + AFFILIATE ELIGIBLE (narrow) | Basket muzzle, treats | C-NEED at the start of "Muzzle training" | Fear plan; get-help; **no calming products or supplements** | Inline | Not in the steps or callouts |
| GD-13 | EDITORIAL + AFFILIATE ELIGIBLE | Non-slip mat, sling, soft brush | C-NEED in "Handling and positioning" | Watch-for / vet; **no supplements** | Inline | Same |
| GD-14 | EDITORIAL ONLY | — | — | All | — | None recommended (PC-07); never in vet blocks |
| GD-15 | EDITORIAL + DECISION SUPPORT | Service type (no products) | — | All; no listings or leads | — | Between sections |
| GD-16 | EDITORIAL + DECISION SUPPORT | Budget (no products) | — | All | — | Not in the price table |
| GD-17 | EDITORIAL ONLY | — | — | All | — | Between groups (PC-07) |
| GD-18 – GD-21 | EDITORIAL ONLY | — | — | All | GD-19 hosts the disclosure | **None** (architecture rule) |

**Review pages:** none at launch. Any future `/reviews/<slug>/` page needs the architecture §G activation test, and its ownership boundary recorded, before it is built.

---

## 12. Final Architecture Drift Test

### PASS
- **Page set and URLs:** 22 launch Pages, IDs and canonical URLs match architecture §C/§F.1 exactly, including the slug renames: `/dog-coat-types/`, `/brushing-your-dog/`, `/dog-grooming-tools/`, `/grooming-an-anxious-dog/`, `/dog-grooming-glossary/`.
- **Content type:** all 22 are WordPress Pages. No Posts, categories, hubs or review pages are specified. GD-22 and GD-23 remain reserved.
- **Ownership:**
  - GD-02 owns all frequency questions.
  - GD-12 owns all resistance questions.
  - GD-10 owns tool selection.
  - GD-14 owns post-grooming symptoms.
  - GD-00 orients and doesn't target GD-01's head term.
  - Matrix §6 is consistent with architecture §D.
- **Navigation:**
  - The five-item primary nav and the footer are unchanged.
  - GD-16 appears only after publication.
  - No commercial items in the nav.
- **Commercial:** affiliate links only in C-NEED and decision-support blocks; disclosure on GD-19 plus inline; ad exclusions honoured; no ads on GD-18 – GD-21; no review pages.
- **Trust:** "Grooming Dogs" byline by default; no expert-review claims; no "no affiliates / no ads / completely independent" wording.
- **Verification:** V-1 to V-5 are mapped to pages as gates, not blockers.
- **Platform:** WordPress + Elementor-native components only. No application code.

### MINOR SPECIFICATION ISSUES (production clarifications; the architecture is unchanged)

| ID | Issue | Resolution in this spec |
|---|---|---|
| PC-01 | No visual system is defined yet (the architecture leaves visual identity to the design phase) | Elementor specs refer only to Kit global roles. No colours or fonts are set here. |
| PC-02 | Heading hierarchy for cards and glossary terms | Card titles and glossary terms are styled text with anchor IDs, not H3s |
| PC-03 | The request calls the frequency owner "the schedule/routine page" | Resolved as **GD-02** (schedule) per architecture §D. GD-01 (routine) does not own frequency. |
| PC-04 | GD-16 go-live dependencies | When V-2 passes, three things happen together: publish GD-16; switch `/pricing/` from 410 to a 301 to `/dog-grooming-cost/`; show "Grooming cost" in the nav and homepage |
| PC-05 | Glossary FAQ | None. The definitions are the answers, so an FAQ would duplicate them. |
| PC-06 | FAQ schema source | Use either the Elementor Accordion FAQ schema **or** Rank Math, never both. Rich results are not expected. |
| PC-07 | Ad placement where the architecture allows ads but the context is sensitive | Recommended: no ads on GD-00 at launch and none on GD-14. Ads between sections only elsewhere. This is the owner's choice and doesn't change the architecture. |
| PC-08 | Schedule component | A static table or Elementor Tabs. No interactive application. |
| PC-09 | The six-coat taxonomy is inherited from LMArena | It must be confirmed by a source under V-1. If sources use a different grouping, the H3 set on GD-03 and the GD-02 table rows change. URLs and ownership don't. |
| PC-10 | GD-15 content that depends on the market (tipping, certification, welfare-complaint authority) | Follows the V-2 market choice. Until then it is written in neutral, non-jurisdictional terms. |
| PC-11 | GD-10 "best" wording | No rankings or "best" claims on launch pages. Ranking needs a published method, which means a review page under `/reviews/`. |
| PC-12 | Owner-supplied facts for GD-18, GD-19, GD-20: who runs the site, any real named people, the corrections commitment, the form destination | Owner input needed before those pages publish. Defaults: organisation statement, no named people, no response-time promise. |
| PC-13 | Legal wording for the disclosure (GD-19) and the privacy policy (GD-21) | Legal/regulatory guidance for the chosen market, plus confirmation of the actual installed services. GD-21 is updated whenever ads, analytics or affiliate tracking are activated. |
| PC-14 | Title suffix convention | Guides: no brand suffix. Trust/utility pages: brand in the title. Set per page in Rank Math. |

### ARCHITECTURE CONFLICT
**None.**

---

## 13. Production Readiness Status

**Definitions:**
- **READY FOR CONTENT PRODUCTION:** no V-gate dependency. The page can be written and published once its owner inputs (PC-12/PC-13) are supplied.
- **READY WITH VERIFICATION GATE:** the structure can be built and the copy drafted now. Publishing the affected copy or images waits for the listed gates.

| ID | Page | Status | Gates / inputs |
|---|---|---|---|
| GD-00 | Home | **READY WITH VERIFICATION GATE** | V-4a (hero); trust-strip claims follow GD-19 |
| GD-01 | How to groom your dog at home | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 |
| GD-02 | Grooming schedule | **READY WITH VERIFICATION GATE** | **V-1 (table)**, V-3 (skin note), V-4a, V-5 |
| GD-03 | Dog coat types | **READY WITH VERIFICATION GATE** | V-1 (taxonomy, breeds), V-3, V-4a, V-5 |
| GD-04 | Bathing | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 |
| GD-05 | Brushing | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 (V-1 if timing is stated) |
| GD-06 | Haircuts & trimming | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 |
| GD-07 | Nails | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 |
| GD-08 | Ears | **READY WITH VERIFICATION GATE** | **V-3 (high)**, V-4a, **V-4b**, V-5 |
| GD-09 | Teeth | **READY WITH VERIFICATION GATE** | **V-3 (high)**, V-4a, **V-4b**, V-5 |
| GD-10 | Grooming tools | **READY WITH VERIFICATION GATE** | V-3 (low), V-4a, V-5 |
| GD-11 | Puppy grooming | **READY WITH VERIFICATION GATE** | V-3, V-4a, V-5 (V-1 if timing is stated) |
| GD-12 | Anxious dogs | **READY WITH VERIFICATION GATE** | **V-3 (high)**, V-4a, V-5 |
| GD-13 | Senior dogs | **READY WITH VERIFICATION GATE** | **V-3 (high)**, V-4a, V-5 |
| GD-14 | Grooming problems | **READY WITH VERIFICATION GATE** | **V-3 (highest)**, V-4a (optional image), V-5 |
| GD-15 | Choosing a groomer | **READY WITH VERIFICATION GATE** | V-3 (low), V-4a, V-5, PC-10 |
| GD-16 | Grooming cost | **READY WITH VERIFICATION GATE** | **V-2 (blocking for publication)**, V-4a (optional), V-5, PC-04 |
| GD-17 | Glossary | **READY FOR CONTENT PRODUCTION** | (V-5 if draft definitions are reused) |
| GD-18 | About | **READY FOR CONTENT PRODUCTION** | PC-12 owner facts |
| GD-19 | Editorial & sourcing policy | **READY FOR CONTENT PRODUCTION** | PC-12, PC-13 |
| GD-20 | Contact & corrections | **READY FOR CONTENT PRODUCTION** | PC-12 (form destination) |
| GD-21 | Privacy policy | **READY FOR CONTENT PRODUCTION** | PC-13 |

**Totals:**
- **5 READY FOR CONTENT PRODUCTION**
- **17 READY WITH VERIFICATION GATE**
- **0 BLOCKED BY ARCHITECTURE CONFLICT**

**Recommended production order** (from architecture priorities):
1. **P0:** GD-18 – GD-21, GD-00, GD-01, GD-02, GD-03. GD-02 publishes when V-1 passes.
2. **P1:** GD-04 – GD-09.
3. **P2:** GD-10 – GD-15.
4. **P3:** GD-16 (when V-2 passes) and GD-17.
