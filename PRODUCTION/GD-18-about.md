# GD-18 — Production Record: About

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-18
**Upstream records:** `PRODUCTION/GD-01` … `GD-17`
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-18 |
| Title | About |
| Canonical URL | `https://grooming-dogs.com/about/` (RETAIN with new content; `/team/` 301 → here, per architecture §F.2) |
| Page type | WordPress Page, top level; linked from the footer ("Site" group) |
| Page role | **Utility / trust**: states what the site is and isn't, who runs it, how it's funded and organized, and where to send corrections |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS.** Publication is gated on owner confirmation under PC-12 (§L). |

---

## B. Architecture Authority

| Source | What it fixes for GD-18 |
|---|---|
| `AUDIT_OUTPUT/GROOMING-DOGS-ARCHITECTURE-VALIDATION.md` (final) | URL `/about/` (§F.1); "Who runs the site" owned by GD-18 (§D); owner decisions 1–4; §G positioning wording ("never write 'no affiliate links' or 'no ads'"; "independent" only with the disclosure); **ads never on GD-18 to GD-21**; §H author/trust model, including "What GD-18 and GD-19 may state" and "Do not carry forward"; §E.1 primary nav; §E.2 footer |
| Production spec §4 GD-18 | H1, 6 H2s, no H3s, no FAQ, short page; links to GD-19, GD-20 and GD-01; optional neutral image (no people presented as staff); **AboutPage + Organization schema; Person only for real people**; Elementor: C-CRUMB, H1, text sections, reused "How this guide works" saved template, C-NEXT |
| Spec §12 PC-12 | "Owner-supplied facts for GD-18, GD-19, GD-20: who runs the site, any real named people, the corrections commitment… **Owner input needed before those pages publish. Defaults: organisation statement, no named people, no response-time promise.**" |
| Spec §13 | GD-18 "READY FOR CONTENT PRODUCTION": gate = PC-12 owner facts |

**Conflicts found:**
- **None in the role.**
- **Ambiguity resolved:** PC-12 says owner input is needed before publishing, and also supplies defaults. Production applies the **defaults** (no fabrication is needed), and **publication waits for the owner to confirm the defaults or supply facts** (§L, L-1).
- Role confirmed exactly as specified. Not inferred from the page number.

---

## C. User Task

- **Primary:** find out who is behind the site, what it is and isn't, and how it's funded.
- **Secondary:** "Is this a grooming salon?" "Who writes the guides?"
- **Intended outcome:** the visitor can judge how far to trust the site. They know it's an information site (not a salon, booking service or vet), how the guides are written and funded, and where to report a problem. Every statement is something the site actually does.

---

## D. Ownership

**GD-18 owns:**
- who runs Grooming Dogs;
- whether this is a salon;
- how the site is organized;
- a one-paragraph funding summary.

**GD-18 does not own:**

| Topic | Owner | GD-18 treatment |
|---|---|---|
| Full sourcing, health and disclosure policy | **GD-19** `/editorial-policy/` | One-paragraph summary plus link |
| Contact and corrections | **GD-20** `/contact/` | One sentence plus link. **No response-time promise.** |
| Privacy | GD-21 | Footer only; not linked here (no user reason) |
| Where to start grooming | GD-01 | Link |
| Choosing a groomer (for "is this a salon?" visitors who want one) | GD-15 | One link. GD-18 doesn't recommend groomers. |
| Homepage "How this guide works" trust strip | **GD-00** (saved template, reused here) | Placed as the spec requires. Its copy is produced with GD-00 (§L, L-2). |

**Anti-cannibalization check:**
- **GD-19:** GD-18 states the model in plain words; the rules, disclosure text and sourcing method stay on GD-19.
- **GD-20:** no form, email or process on GD-18.
- **GD-01 to GD-17:** no task content; "How the guides are organized" describes the structure only.

---

## E. Final Structure and Content

**Structure:**
- H1, plus 6 H2s, no H3s, no FAQ.
- **No ads** (architecture §G).
- **No short-answer box** (spec F7 template: "no short-answer box (except GD-17)").
- **No byline** (spec §O allows none).
- **No image** (§I).

> *[Square-bracketed italics]* are builder notes.

*[Breadcrumb: Home › About]*

# About Grooming Dogs

Grooming Dogs is a guide to looking after your dog's coat, skin, nails, ears and teeth at home. It also helps you decide when to hand a job over to a professional groomer or your vet. This page explains what the site is, who's behind it, how it's paid for, and how to tell us if we've got something wrong.

## What Grooming Dogs is

- **Practical guides for dog owners:** an editorial site covering bathing, brushing, haircuts and trimming, nails, ears and teeth, plus how often to do each job, which tools you need, and how to adapt grooming for puppies, older dogs and nervous dogs.
- **One task per guide:** each guide covers one job and starts with a short answer. Where another guide already covers something, we link to it instead of repeating it.
- **Named sources:** health and safety statements are backed by named sources, such as veterinary organizations and animal-welfare groups, and cited on the page.
- **Dated prices:** prices come from published price lists, with the date we checked them.

## What this site is not

- **Not a grooming salon or grooming business.** We don't groom dogs, take bookings, or list or recommend individual groomers. If you're looking for one, our guide to [choosing a groomer](/choosing-a-dog-groomer/) explains what to look for.
- **Not veterinary advice.** Our guides are general information. They point you to your vet whenever a sign could mean pain, injury or illness, and they don't diagnose or recommend treatments.
- **Not vet-reviewed unless a page says so.** If a qualified expert reviews a guide, that page will show their name, their credential and the date they reviewed it.

## Who runs the site

Grooming Dogs publishes its guides under the name **Grooming Dogs**, so the guides carry the byline "Grooming Dogs" rather than an individual's name. If a guide is written, edited or reviewed by a named person, the page will say so, with their real name and role.

*[Builder: PC-12. Replace or extend this section ONLY with owner-supplied facts (the person or entity that runs the site, and any real named people with truthful roles). Until then this default organization statement stands. Do not add names, photos, history or credentials.]*

## How the site is funded

Grooming Dogs is editorial first. Our guides are planned around what dog owners need to know, not around what earns money. To pay for the site:
- **Affiliate links:** some pages may include affiliate links. A page with affiliate links says so before the first one.
- **Ads:** some pages may show clearly labelled advertisements.

Commercial content doesn't decide which topics we cover or what our guides recommend. The details are in our [editorial, sourcing and disclosure policy](/editorial-policy/).

## How the guides are organized

The guides are grouped the way you'd look for them:
- **Start here:** the [full grooming routine](/how-to-groom-your-dog-at-home/), how often to groom, and coat types.
- **Grooming tasks:** one guide each for bathing, brushing, haircuts and trimming, nails, ears and teeth.
- **Your dog:** puppies, senior dogs and anxious dogs.
- **Problems:** what to do if something looks wrong after grooming.
- **Tools and groomers:** choosing tools, choosing a groomer, and what grooming costs.

A glossary explains grooming terms, and the guides link to it.

*[Builder: render "and what grooming costs" only once GD-16 is published (PC-04). Until then, end the item after "choosing a groomer".]*

*[Saved template: "How this guide works" (GD-00 section 6). Insert here when GD-00's template is produced (L-2).]*

## Corrections and feedback

If you spot a mistake, an out-of-date source or a broken link, please [send a correction](/contact/). How we handle corrections is described in our [editorial, sourcing and disclosure policy](/editorial-policy/).

*[Builder: PC-12. No response-time promise and no correction-process commitment beyond what GD-19 and GD-20 state with owner approval.]*

---

*["Where to go next": 3 cards (C-NEXT)]*

| Card title | Link | Reason shown on card |
|---|---|---|
| Editorial & sourcing policy | `/editorial-policy/` | "How we write, source and fund our guides." |
| Contact & corrections | `/contact/` | "Send a correction or a question." |
| How to groom your dog at home | `/how-to-groom-your-dog-at-home/` | "Start with the full routine." |

### Page outline

- **H1:** About Grooming Dogs
- **H2:** What Grooming Dogs is
- **H2:** What this site is not
- **H2:** Who runs the site
- **H2:** How the site is funded
- **H2:** How the guides are organized
- **H2:** Corrections and feedback

**Spelling note:** the spec's H2 "How the guides are organised" uses British spelling, but the site is US English (GD-04 rule). **Published heading: "How the guides are organized".** It's a spelling-only deviation and doesn't change the structure.

---

## F. Evidence Register

All claims on this page are **first-party statements about the site**. Their evidence is the owner-approved architecture and the completed production records. No external sources are needed (spec §J: "First-party source: owner-supplied facts only"). Access date for all project files: 2026-10-05.

| # | Claim | Source | Source type | Evidence | Final wording | Qualification |
|---|---|---|---|---|---|---|
| 1 | An editorial guide to grooming at home and deciding when to use a groomer or vet | Architecture §A ("Editorial-first"), owner decision 1; spec GD-18 §B | Owner decision | "Business model: Editorial-first" | §E para 1, "What Grooming Dogs is" | — |
| 2 | The topics covered | Architecture §B IA; GD-01 to GD-17 records | Project records | Launch page set | "covering bathing, brushing…" | Lists only produced or launch pages |
| 3 | Each guide covers one task, starts with a short answer, and links instead of repeating | Spec R-rules; production records (C-SHORT on task pages; owner links) | Project records | Short answer required on task pages; "owner links" rule (architecture §E.3) | "One task per guide…" | — |
| 4 | Health and safety statements are backed by named sources cited on the page | Architecture §H ("Source… Required for every quantitative or health claim. Cited on the page."); V-3; GD-01 to GD-17 Sources lists | Owner-approved rule, plus verified practice | Every produced record carries a Sources list and a V-3 claim register | "…backed by named sources… cited on the page" | "such as veterinary organizations and animal-welfare groups" matches the records' source types |
| 5 | Prices come from published price lists, with the date | GD-16 §E/§F | Project record | "accessed 2026-10-05" per row | "Dated prices…" | Holds only while GD-16 is the only price page |
| 6 | Not a salon; no grooming, bookings, listings or recommendations of individual groomers | Architecture owner decision 1 ("Groomer lead-gen and directories are not authorized"); §F.2 (`/services/` 301: "No service exists"); §G "Not authorized" | Owner decision | As quoted | "Not a grooming salon…" | — |
| 7 | Not veterinary advice; vet referral; no diagnosis or treatment | Site-wide disclaimer convention (GD-01 to GD-17); V-3 rules | Project records | "general information… not veterinary advice" disclaimers | "Not veterinary advice…" | — |
| 8 | Not vet-reviewed unless a page shows the name, credential and date | Architecture §H: Expert reviewer "Shown only with name, the credential that can be checked, and the review date. None exists now. Do not write 'vet-reviewed'…" | Owner-approved rule | As quoted | "Not vet-reviewed unless a page says so…" | True now and stays true |
| 9 | Byline "Grooming Dogs"; named people only if real, with real name and role | Architecture §H Author rule; owner decision 4; PC-12 default | Owner decision | "Otherwise use the organisation byline 'Grooming Dogs'" | "Who runs the site" | **The PC-12 default organization statement.** It doesn't name the operator (owner input missing; §L). |
| 10 | Editorial first; affiliate links and labelled ads may appear; disclosure before the first affiliate link | Owner decisions 1–2; architecture §G (disclosure rules, "labelled 'Advertisement'") | Owner decision | As quoted | "How the site is funded" | **No "no affiliate/no ads" statement; no "independent" claim** (§G) |
| 11 | Commercial content doesn't decide topics or recommendations | Architecture §A ("Commercial content never sets the IA, editorial priorities, canonical ownership, navigation or topic choice"); §G Editorial Core "Not permitted: topics chosen for commission" | Owner-approved rule | As quoted | "Commercial content doesn't decide…" | A commitment already approved in the architecture |
| 12 | Site organization (5 groups, glossary) | Architecture §E.1 primary nav, §B | Owner-approved IA | Nav items as quoted | "How the guides are organized" | The GD-16 item is conditional (PC-04) |
| 13 | Corrections via the contact page; handling described in GD-19 | Architecture §B (GD-20 "Contact & corrections"); spec GD-18 §F | Owner-approved IA | — | "Corrections and feedback" | **No process or timing promise** (PC-12 default) |

---

## G. Rejected Claims

| Claim | Reason |
|---|---|
| A named founder, team, writers, photos, history, "since 20XX", credentials, awards, partnerships | **Owner dependency (PC-12)**, and architecture §H: "None exist." Fabrication risk. |
| "Our groomers", "our team", "our salon" | Architecture §H "Do not carry forward" |
| Legacy celebrity staff, `petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03` | §H "Do not carry forward"; `/team/` 301s here |
| "No affiliate links", "no ads", "not monetized" (LMArena about copy) | Architecture §G; spec V-5 |
| "Completely independent" / "independent" | §G: only with the published disclosure. Avoided entirely. |
| "Vet-reviewed", "expert-checked", "trusted by vets" | §H: no expert reviewer exists |
| "We reply within X days" / "we correct errors within X" | PC-12 default: no response-time promise |
| "We currently have no affiliate links" | True at launch, but would go stale without notice. The funding summary uses "may". |
| Sourcing method details, the disclosure text, AI-use statements | GD-19 owns them (duplication) |
| Testimonials | §H: none |

---

## H. Internal-Link Register

| # | Destination | Anchor | Reason | Ownership justification |
|---|---|---|---|---|
| 1 | GD-15 `/choosing-a-dog-groomer/` | choosing a groomer | A "salon-seeking" visitor needs the real next step | GD-15 owns groomer choice |
| 2 | GD-19 `/editorial-policy/` | editorial, sourcing and disclosure policy (×2) | Full funding and corrections policy | GD-19 (spec-required) |
| 3 | GD-01 `/how-to-groom-your-dog-at-home/` | full grooming routine / Next card | Where to start | Spec-required ("start with the full routine") |
| 4 | GD-20 `/contact/` | send a correction / Next card | Corrections channel | GD-20 (spec-required) |

**Checks:**
- **Spec coverage:** all three required targets are present (GD-19, GD-20, GD-01).
- **The organization list is plain text** except GD-01. That avoids a link directory (architecture §E.3 "No page is a link list"); the primary nav already exposes those pages.
- **Launch dependency:** GD-19 and GD-20 aren't produced yet.

---

## I. Image Register

| Asset | Source | Visible content (viewed directly, 2026-10-05) | Purpose | Rights | Alt text | Result |
|---|---|---|---|---|---|---|
| `lead-about` (Pexels 7474087) | Mikhail Nilov, Pexels. https://www.pexels.com/photo/person-hugging-the-dog-7474087/ | Overhead view of a person in a **teal printed T-shirt with partial lettering "…EER" (likely "VOLUNTEER")** and jeans, lying on a beige backdrop and hugging a relaxed light-tan dog | Optional lead | Pexels License | — | **FAIL.** On an About page, a person in what reads as a volunteer or staff shirt implies people or volunteers behind the site who don't exist. Spec §L: "No photos of people presented as staff unless they are real staff." |

**Decision:** publish **without an image** (optional per spec). No placeholder.

---

## J. SEO / Schema

| Field | Value |
|---|---|
| SEO title | About Grooming Dogs (**19** characters) |
| Meta description | What Grooming Dogs is and isn't: an editorial-first guide to grooming your dog at home, how the guides are written and funded, and how to send corrections. (**155** characters) |
| Canonical | `https://grooming-dogs.com/about/` |
| H1 | About Grooming Dogs (one) |
| Schema | Rank Math: **AboutPage** (WebPage type) with **Organization** `{"name": "Grooming Dogs", "url": "https://grooming-dogs.com/"}`. **No logo, address, phone, email or sameAs** (none supplied; §E.2 "Never: invented address, phone, email or social profiles"). **No Person** (no real named people). No FAQPage, Article or Review. |
| Indexability | index, follow |
| Breadcrumb | Home › About |
| Redirects | `/team/` → 301 `/about/` (architecture §F.2, deployment phase; **not performed here**) |

---

## K. Elementor Build (Elementor Free only)

**Template:** F7 site-page.

**Widgets used:** Shortcode (breadcrumb), Heading, Text Editor, Icon List, Icon Box (Next cards). **No Image widget, no ad slot, no Accordion. No Pro widgets.**

**Saved templates:** "How this guide works" (from GD-00), "Where to go next" cards.

**Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Header | Shortcode (breadcrumb) · **H1** · Text Editor (intro) |
| 2 | What it is | **H2** · Icon List (4) |
| 3 | What it isn't | **H2** · Icon List (3) |
| 4 | Who runs it | **H2** · Text Editor (PC-12 default) |
| 5 | Funding | **H2** · Text Editor · Icon List (2) · Text Editor |
| 6 | Organization | **H2** · Text Editor · Icon List (5; GD-16 phrase conditional) · Text Editor |
| 7 | Trust strip | Saved template "How this guide works" (GD-00; L-2) |
| 8 | Corrections | **H2** · Text Editor |
| 9 | Next | C-NEXT (3 cards) |

**Mobile:** single column.

**Confirmed:** Elementor Free compatible.

---

## L. Dependencies

| # | Item | Type | Blocking? | Action |
|---|---|---|---|---|
| **L-1** | **PC-12 owner facts:** (a) who runs the site, whether a named person or a registered/trading entity name; (b) any real named authors, editors or reviewers, with truthful roles; (c) confirmation that the default organization statement may publish. **None is in the project files.** | Owner input (upstream) | **Blocks publication, not production.** The page is complete on the spec's defaults and contains no fabricated fact. Per PC-12, the owner must confirm the defaults or supply facts before it goes live. | Owner answers (a)–(c). If they supply facts: replace §E "Who runs the site" and add Person schema only for real named people. |
| L-2 | "How this guide works" saved template is owned by GD-00, which isn't produced | Upstream (GD-00) | Non-blocking for GD-18 copy. **Launch placement waits for GD-00.** | Produce GD-00. Its trust-strip claims must follow GD-19 (spec §13). |
| L-3 | GD-19 and GD-20 not produced (link targets; corrections handling) | Downstream/launch | Non-blocking (launch QA) | Produce GD-19 and GD-20 |
| L-4 | GD-16 phrase in "How the guides are organized" is conditional (PC-04) | Launch | Non-blocking | Render with GD-16's publication |
| L-5 | `/team/` → `/about/` 301 not deployed | Deployment | Non-blocking | Deployment phase |
| L-6 | No lead image (`lead-about` failed) | Image (optional) | Non-blocking | Optional: a neutral photo of a dog alone, or none |
| L-7 | US spelling replaces the spec's "organised" in one H2 | Copy | Non-blocking | — |

**Non-blocking exceptions:** L-2 to L-7.

---

## Anti-drift checklist

- [x] Role taken from the architecture and spec (About / trust), not inferred; URL `/about/` verified
- [x] Structure exact: H1 plus 6 H2s, no H3s, no FAQ, short; one H1; no unauthorized sections
- [x] Every statement is first-party and traced to owner decisions or records (§F); no external claims needed
- [x] **No invented people, history, credentials, reviews, testimonials, prices, policies, contact details or response times**
- [x] No "no affiliate", "no ads" or "independent" claims; funding summary links to GD-19
- [x] No duplication of GD-01 to GD-17; GD-19 and GD-20 ownership respected
- [x] Canonical internal links only; required targets present
- [x] Image viewed and rejected (implies staff); no placeholder
- [x] SEO title 19; meta description 155; AboutPage + Organization schema (no Person, no contact data)
- [x] Elementor Free only; no ads; global design kept
- [x] Dependencies recorded (PC-12 publish gate)

---

## M. Final Status

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**

*Production is complete on the spec's PC-12 defaults, with no fabrication. **Publication requires the owner's PC-12 confirmation (L-1).***

---

## Owner closure (2026-10-05)

The owner's instruction this session (the "GD-18 CLOSURE + GD-19" prompt) resolves L-1:
1. **Who runs the site:** keep the existing fallback wording. No personal name, history, credentials or founder story.
2. **Named people:** none supplied. No Person schema; no named authors or reviewers.
3. **Publication approval:** the current wording is **approved**, subject only to the documented dependencies (L-2 to L-5).

**L-1 is closed.** The US spelling "organized" is confirmed. The `lead-about` rejection stands. **Status unchanged: PRODUCTION-READY WITH VERIFIED EXCEPTIONS.**
