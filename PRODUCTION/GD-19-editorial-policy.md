# GD-19 — Production Record: Editorial, sourcing and disclosure policy

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-19
**Upstream records:** `PRODUCTION/GD-01` … `GD-18`. Every produced guide's disclaimer line links here ("How we write, source and fund our guides").
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-19 |
| Title | Editorial, sourcing and disclosure policy |
| Canonical URL | `https://grooming-dogs.com/editorial-policy/` |
| Page type | WordPress Page, top level; footer link label "Editorial & sourcing policy" (architecture §E.2) |
| Page role | **Trust page that also hosts the site's affiliate and advertising disclosure** (`#disclosure`) |
| Market | United States (owner decision recorded in GD-16 §B); disclosure wording checked against US FTC guidance (PC-13) |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

---

## B. Architecture Authority

| Source | What it fixes |
|---|---|
| Architecture (final) §A, owner decisions 1–4 | Editorial-first; affiliate links, review pages and ads allowed as a separate layer; named authors only if real; roles never conflated |
| Architecture §G | Layer rules (where affiliate links may appear); **advertising rules** (never above the short answer; never inside steps, tables, or safety or vet callouts; never on GD-18 to GD-21; labelled "Advertisement"); **disclosure rules** (a section on GD-19 with no separate URL, plus an inline disclosure before the first affiliate link); separation tests; **"Not authorized: groomer lead-gen, directories, booking and sponsored editorial"**; positioning wording ("independent" only with the disclosure; never "no affiliate links" or "no ads") |
| Architecture §H | Author / editor / expert reviewer / source / testimonial roles; "Expert reviewer… **None exists now.** Do not write 'vet-reviewed', 'vet-approved' or 'expert-checked'"; "What GD-18 and GD-19 may state" |
| Architecture §J V-4 and spec R10 | Images: verified subject, confirmed licence, recorded credit, **no AI-generated imagery**, no placeholders |
| Architecture v1 §L (carried into the final architecture via OD-C) | Cross-domain scope: what Grooming Dogs doesn't cover |
| Spec §4 GD-19 | H1; **8 H2s** in order; **3 H3s under the funding H2** (affiliate links; advertising; review pages); `#disclosure` anchor; no FAQ; no images; WebPage schema; byline Grooming Dogs; outgoing links to GD-18, GD-20 and GD-21; no ads |
| Spec PC-12 / PC-13 | PC-12: the corrections commitment is owner input (default: no response-time promise). PC-13: legal/regulatory guidance for the disclosure wording in the chosen market. |

**Role confirmed:** Editorial & sourcing policy, including the disclosure. Matches the owner's prompt.

**Conflicts:**
- **Spec "Table of Contents (anchors)":** Elementor's Table of Contents widget is **Pro**. Resolved with an Icon List of anchor links, as on GD-17.
- **Spec SEO title:** the spec writes "Editorial, Sourcing and Disclosure Policy, Grooming Dogs". Kept as specified (PC-14 brand suffix rule).

---

## C. Owner Decisions Used

| Decision | Source | Used for |
|---|---|---|
| Editorial-first; commerce is a separate layer | Owner decision 1 | Funding section |
| Affiliate links, review pages and ads permitted | Owner decision 2 | Funding H3s |
| Named authors only if real; roles separate | Owner decision 4 | "How our guides are written"; "Expert review" |
| **No named people supplied; keep the organization byline; no Person schema** | Owner closure of GD-18, 2026-10-05 | Byline rules |
| Market US / USD | Owner decision, 2026-10-05 (GD-16 §B) | PC-13: FTC guidance |
| Lead-gen, directories, booking and sponsored editorial **not authorized** | Architecture §G (owner decision 1) | "We don't publish sponsored guides"; "What we don't cover" |

### Owner-dependent statements (not published; defaults applied)

| # | Statement that would need the owner | Default on the page | Why |
|---|---|---|---|
| O-1 | **How correction reports are handled** (who reviews them, whether and how corrections are noted, any timing) | **Not stated.** The page says only where to send a report and what to include, plus the existing "Updated" date on guides. | PC-12: "only commitments the owner keeps"; owner prompt: no response time, no accepted-correction promise |
| O-2 | **Specific affiliate programs, retailers or ad networks** | Conditional language ("may"), with **no named programs**. **None is active at launch.** | Not supplied. **GD-19 and GD-21 must be updated when any is activated** (spec PC-13). |
| O-3 | **Whether and how AI tools are used in producing guides** | **Not stated either way.** The page makes no claim of human-only authorship and no AI claim. | No owner decision exists; the spec doesn't require it. Recommended for an owner decision (§L). |
| O-4 | **Statements about free products, sponsorships or gifts** | Not stated (except "no sponsored guides", which is authorized) | No owner facts |
| O-5 | **Legal review of the disclosure** | Not claimed. The wording follows FTC guidance (§F); it is **not** a legal opinion. | PC-13 asks for guidance, not counsel |

---

## D. Ownership

**GD-19 owns:**
- how content is written and attributed;
- how it's sourced;
- whether it's vet-reviewed (truthful answer);
- whether the site uses affiliate links or ads;
- how the site makes money;
- how corrections work (policy level);
- what the site doesn't cover.

**GD-19 doesn't own:**

| Topic | Owner | Treatment |
|---|---|---|
| Who runs the site; "is this a salon?"; site organization | GD-18 | Link ("about the site") |
| Sending a correction; contact form | GD-20 | Link ("send a correction") |
| Data, cookies, analytics and ad/affiliate tracking | GD-21 | Link ("privacy") |
| Recognizing problems after grooming | GD-14 | One link from the health-boundary section (addition) |
| Guide content | GD-01 to GD-17 | Not repeated |

**Anti-cannibalization with GD-18:** GD-18 summarizes in one paragraph; GD-19 holds the rules. GD-19 doesn't restate "not a salon" or the site organization.

---

## E. Final Structure and Copy

**Structure:**
- H1, plus 8 H2s, plus 3 H3s (under the funding H2 only).
- No FAQ, no images, no ads.
- Byline "Grooming Dogs".

> *[Square-bracketed italics]* are builder notes.

*[Breadcrumb: Home › Editorial policy]*

# Editorial, sourcing and disclosure policy

*[Byline]* By Grooming Dogs · Updated *[publish date]*

This page explains how Grooming Dogs guides are written and sourced, where our guidance stops and your vet takes over, and how the site is paid for. If you came here from a link next to an affiliate link, the [disclosure](#disclosure) is the part you're looking for.

*[Jump links: Icon List, anchors to each H2]* How our guides are written · How we use sources · Health and safety · Expert review · How the site is funded · Images · Corrections and updates · What we don't cover

## How our guides are written {#how-written}

- **One task per guide.** Each guide covers one task, such as bathing, brushing or trimming nails. Where another guide already covers something, we link to it rather than repeat it.
- **Short answer first.** Most guides start with a short answer, then give the detail.
- **Bylines.** Guides are published under the byline **"Grooming Dogs"**. A guide shows a person's name only if a real person wrote, edited or reviewed it, and then with their real name and their actual role.
- **Separate roles.** We keep four roles separate:
  - the **author**, who wrote the page;
  - the **editor**, who checked it;
  - an **expert reviewer**, who reviewed that specific page;
  - the **sources**, the publications behind its facts.

  A source isn't a reviewer, and citing a veterinary organization doesn't mean a vet reviewed the page.
- **Dates.** Each guide shows the date it was last updated.

## How we use sources {#sources}

- **Health and safety statements get extra scrutiny.** They're checked against named sources: veterinary organizations, veterinary hospitals and schools, veterinary reference manuals, and established animal-welfare organizations. The sources are listed at the end of the guide.
- **Where sources disagree,** we say so, or we give the more cautious advice.
- **If we can't support a claim,** we narrow it, qualify it or leave it out. We don't present unsupported claims as facts.
- **Product and equipment facts,** such as how a clipper blade behaves, may come from the manufacturer's own instructions. Those are labelled as such.
- **Prices** come from businesses' own published price lists. Each price shows the date we checked it. They're labelled as examples, not averages, unless we can show a sound basis for an average.
- **Not every sentence carries a citation.** Practical tips and plain explanations are written by us. Factual health, safety and price claims are the ones we source.

## Health and safety: where our guidance stops {#health}

Our guides are general information about grooming. They are **not veterinary advice**, and they can't diagnose your dog.
- **What we do:** help you recognize when something may be wrong, then refer you to your vet.
- **What we don't do:** diagnose conditions, or recommend treatments, medications, supplements or home remedies.
- **When to see your vet:** whenever a guide mentions signs of pain, injury or illness, contact your vet. Get urgent help if your dog is badly hurt or unwell.

If something looks wrong after grooming, start with [problems after grooming](/dog-grooming-problems/).

## Expert review {#expert-review}

At the moment, our guides are **not reviewed by a veterinarian or other outside expert.**

If a qualified expert reviews a guide in future, that page will show their name, a credential you can check, and the date they reviewed it. The review applies only to that page. We don't use labels like "vet-approved" or "expert-checked".

## How the site is funded: affiliate links and advertising {#disclosure}

Grooming Dogs is editorial first. We choose topics, and write our guides, around what dog owners need to know. Some pages may earn money through affiliate links or advertising, which helps pay for the site. **Commercial content doesn't decide what we cover, what our guides recommend, or the order things appear in.** We don't publish sponsored guides.

### Affiliate links {#affiliate-links}

- **What they are:** some pages may link to products at online retailers. If you buy through one of those links, Grooming Dogs may earn a commission.
- **Where they can appear:** only in a page's "What you'll need" box, or in sections that help you choose a type of tool.
- **Where they never appear:** in step-by-step instructions, safety warnings, or advice about when to see your vet.
- **Disclosure on the page:** a page with affiliate links says so **on that page, before the first affiliate link**, in plain words, for example: "Some links in this box are affiliate links. If you buy through them, Grooming Dogs may earn a commission."
- **No unsupported "best" claims:** we don't call a product "best" or rank products without explaining how we compared them.

### Advertising {#advertising}

Some guides may show advertisements:
- **Labelling:** ads are labelled **"Advertisement"**.
- **Where ads never appear:**
  - above a guide's short answer;
  - inside step-by-step instructions or tables;
  - inside safety warnings or advice about when to see your vet;
  - on this page, the About page, the contact page or the privacy policy.
- **No influence:** advertisers don't decide what our guides say.

### Review pages {#review-pages}

If we publish product reviews, they'll be separate pages:
- **Clearly labelled** as reviews.
- **With a method:** each will explain how the products were evaluated.
- **No invented testing:** we won't claim testing, ratings or reviewers that don't exist.
- **Separate from guides:** a review page never replaces the guide for a task. For example, how to brush a dog stays in our brushing guide.

*[Builder: O-2. When any affiliate program, ad network or review page goes live, update this section and the privacy policy (GD-21) before or with activation.]*

## Images {#images}

- **Source:** photos come from a free stock photo library and are used under its license, with the photographer credited.
- **Checking:** we look at each image ourselves before using it, to check it shows what the caption or description says. Photos that don't match, or that could mislead, aren't used.
- **No AI-generated images,** and no images of injuries or skin problems presented as a way to diagnose your dog.
- **No image rather than a wrong one:** if we can't find a suitable photo, the page goes up without one.

## Corrections and updates {#corrections}

If you think something on Grooming Dogs is wrong, out of date, or missing a source, please [send a correction](/contact/). It helps to tell us:
- which page;
- what you think is wrong;
- if you can, a source.

Each guide shows the date it was last updated.

*[Builder: O-1 / PC-12. Add a description of how reports are handled ONLY when the owner confirms a commitment they'll keep. No response times, and no promise that every report will lead to a change.]*

## What we don't cover {#not-covered}

Grooming Dogs is about grooming. We don't cover:
- **Veterinary care:** diagnosing or treating skin, ear or dental disease, or treating fleas, ticks or other parasites. We help you recognize when to see your vet.
- **Dog food and nutrition,** including supplements.
- **Puppy training,** such as house training or crate training. Our puppy guide covers grooming only.
- **Cat grooming.**
- **Adoption, pet sitting or breeding.**
- **Allergies to dog hair** in people, beyond keeping shedding under control.
- **Local groomer listings or bookings.** We don't list, rank or book groomers, but we do explain how to choose one.

---

*["Where to go next": 3 cards (C-NEXT)]*

| Card title | Link | Reason shown on card |
|---|---|---|
| About Grooming Dogs | `/about/` | "About the site." |
| Contact & corrections | `/contact/` | "Send a correction or a question." |
| Privacy policy | `/privacy-policy/` | "How the site handles your data." |

### Page outline

- **H1:** Editorial, sourcing and disclosure policy
- **H2:** How our guides are written
- **H2:** How we use sources
- **H2:** Health and safety: where our guidance stops
- **H2:** Expert review
- **H2:** How the site is funded: affiliate links and advertising (`#disclosure`)
  - **H3:** Affiliate links
  - **H3:** Advertising
  - **H3:** Review pages
- **H2:** Images
- **H2:** Corrections and updates
- **H2:** What we don't cover

---

## F. Evidence / Sourcing Decisions

| # | Statement on the page | Basis | Type | Evidence |
|---|---|---|---|---|
| 1 | One task per guide; link instead of repeating | Architecture §D ownership; §E.3 owner links; GD-01 to GD-17 records | Owner-approved rule plus practice | Each record's "Delegated" table |
| 2 | Short answer first | Spec R-rules; production records | Practice | Short-answer box on the task pages (not on GD-17 to GD-21) |
| 3 | Organization byline; names only if real; four separate roles | Architecture §H; owner decision 4; GD-18 closure | Owner decision | §H table |
| 4 | "Updated" date on each guide | GD-01 to GD-17 records ("Updated *[publish date]*") | Practice | Byline block in every record |
| 5 | Health and safety claims checked against named sources of these types and listed on the page | Architecture §H "Source… Required for every quantitative or health claim. Cited on the page."; V-3; records' Sources lists and claim registers | Rule plus verified practice | E.g. GD-14 (MSD, peer-reviewed case reports, UMN); GD-08 (AKC, MSD, HW, dvm360); GD-13 (AAHA) |
| 6 | Conflicts stated, or the cautious option given | Production practice | Practice | GD-07 guillotine clippers (both views stated); GD-08 peroxide (excluded, attributed); GD-14 cotton balls (cautious) |
| 7 | Unsupported claims narrowed, qualified or removed | V-3 "cited or reduced to recognise-and-refer"; records' "Narrowed"/"Excluded" rows | Rule plus practice | Every record §E |
| 8 | Manufacturer facts labelled | GD-06 S4 (Andis manual); GD-10 | Practice | Attributed as the manufacturer's instructions |
| 9 | Prices from published lists, dated, examples not averages | V-2; GD-16 §E/§F | Rule plus practice | "No average or median is published" |
| 10 | Not every sentence cited | Owner prompt; actual practice (editorial tips are uncited) | Accuracy statement | — |
| 11 | Not veterinary advice; recognize and refer; no diagnosis, treatment, medication, supplements or home remedies | V-3; GD-14 §B; architecture §L "Recognise and refer only" | Rule plus practice | GD-14 "Rejected home remedies"; GD-12 and GD-13 no-medication |
| 12 | Not currently reviewed by a vet or outside expert; future review shows name, credential and date; no "vet-approved" | Architecture §H "None exists now…" | Owner-approved rule | As quoted |
| 13 | Editorial first; ads and affiliate links "may" appear; commercial content doesn't decide topics, recommendations or order | Owner decisions 1–2; architecture §A ("Commercial content never sets the IA, editorial priorities, canonical ownership, navigation or topic choice"); §G Editorial Core "Not permitted: product rankings… topics chosen for commission" | Owner decision | As quoted |
| 14 | No sponsored guides | Architecture §G: "Not authorized: … sponsored editorial" | Owner decision | As quoted |
| 15 | Affiliate placement: "What you'll need" box or tool-choice sections; never in steps, safety or vet callouts | §G layer table: Editorial Core "disclosed affiliate links inside that list box only"; Decision Support "disclosed links to specific products"; Not permitted: "affiliate links in steps, safety or vet callouts" | Owner-approved rule | GD-15 and GD-16 are editorial-only per spec, hence "tool-choice sections" (GD-10) |
| 16 | Inline disclosure on the page before the first affiliate link, in plain words | §G disclosure rules; **FTC (F1, F2)** | Rule plus regulator guidance | F1: "A single disclosure on your home page won't be sufficient… A disclosure is more likely to be seen if it's very close to, or – even better – part of, the endorsement"; F2: "The disclosure should be placed with the endorsement message itself. Disclosures are likely to be missed if they appear only on an ABOUT ME or profile page"; "Use simple and clear language" |
| 17 | Example wording "Some links in this box are affiliate links. If you buy through them, Grooming Dogs may earn a commission." | F2 ("Simple explanations… are often enough if placed in a way that is hard to miss") | Regulator guidance | **"At no extra cost to you" is NOT used** (not established for any program) |
| 18 | No "best" or ranking without a method | §G Decision Support: "Not permitted: 'best' claims without a published method" | Owner-approved rule | — |
| 19 | Ads labelled "Advertisement"; placement exclusions; none on GD-18 to GD-21 | §G advertising rules | Owner-approved rule | As quoted |
| 20 | Advertisers don't decide what guides say | §A / §G separation | Owner-approved rule | — |
| 21 | Review pages: labelled, with a method, no invented testing, never replacing a guide | §G Commercial layer: "Affiliate links, product comparisons, a method statement"; Not permitted "invented testing, ratings or reviewers"; "a review may not become the 'how to brush a dog' page" | Owner-approved rule | Path `/reviews/` not named on the page (inactive) |
| 22 | Images: stock library licence, credited, checked by viewing, no AI, no diagnostic imagery, none rather than wrong | V-4 / R10; GD-14 spec §L ("No symptom photos"); production practice (images viewed; failures recorded) | Rule plus practice | E.g. rejected `lead-problems`, `lead-about`, `lead-nails` |
| 23 | Corrections: send via the contact page with page, issue and source; "Updated" date | GD-20 role (architecture §B); owner prompt | Owner-approved | **No handling commitment** (O-1) |
| 24 | Not covered: vet care, food, training, cats, adoption/sitting/breeding, human allergies, groomer listings | v1 §L cross-domain table (OUT OF SCOPE / other properties); §G not-authorized list | Owner-approved scope | **Other properties (dogs-food.com, puppy-s.com) not named** (OD-C: no cross-site links unless the owner adds them) |

**External sources (PC-13), accessed 2026-10-05:**
- **F1:** Federal Trade Commission, "FTC's Endorsement Guides: What People Are Asking". https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking
- **F2:** Federal Trade Commission, "Disclosures 101 for Social Media Influencers". https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers

**Limitation:** the FTC guidance addresses endorsements and affiliate relationships generally. It is applied here as US regulatory guidance, **not legal advice** (O-5). The FTC pages are **not cited on the public page** (the policy states practice, not law).

---

## G. Commercial Disclosure Rules (as implemented)

| Rule | Implementation |
|---|---|
| Disclosure section with no separate URL | `#disclosure` on GD-19 |
| Inline disclosure before the first affiliate link | Required on every page with affiliate links (the GD-10 "What you'll need" boxes, etc.). The text template is given on the page. |
| Footer label | "Editorial & sourcing policy" (disclosure inside) |
| Banned wording | "no affiliate links", "no ads", "not monetized", "completely independent", "vet-approved", "at no extra cost to you" (not established) |
| "Independent" | **Not used** (allowed only with the disclosure; avoided) |
| No ads on GD-19 | Confirmed |

## H. Author / Reviewer Rules (as implemented)

Organization byline; names only if real; four roles separate; no expert reviewer now; future review = name, checkable credential and date, for that page only. **No Person schema** (no real named people supplied).

## I. Correction Rules (as implemented)

Report via GD-20 (page, issue, source); guides show an "Updated" date. **No response time; no promise of acceptance; no legal guarantee.** Handling process pending (O-1).

---

## J. Internal Links

| # | Destination | Anchor | Reason | Ownership |
|---|---|---|---|---|
| 1 | GD-19 `#disclosure` (in-page) | disclosure | Readers arriving from inline disclosures | Self |
| 2 | GD-14 `/dog-grooming-problems/` | problems after grooming | The next step from the vet-boundary section | GD-14 owns symptoms (addition) |
| 3 | GD-20 `/contact/` | send a correction / Next card | Corrections channel | Spec-required |
| 4 | GD-18 `/about/` | Next card "About the site" | Who runs the site | Spec-required |
| 5 | GD-21 `/privacy-policy/` | Next card | Data and tracking | Spec-required |

**Spec coverage:** all three required targets are present (GD-18, GD-20, GD-21). Jump links are in-page anchors.

**Incoming (verified):** the disclaimer lines in GD-01 to GD-17 link to `/editorial-policy/`; GD-18 links twice.

---

## K. SEO / Schema

| Field | Value |
|---|---|
| SEO title | Editorial, Sourcing and Disclosure Policy, Grooming Dogs (**56** characters) |
| Meta description | How Grooming Dogs guides are written and sourced, where our guidance stops and a vet takes over, and how affiliate links and advertising fund the site. (**151** characters) |
| Canonical | `https://grooming-dogs.com/editorial-policy/` |
| H1 | Editorial, sourcing and disclosure policy |
| Schema | Rank Math **WebPage** (publisher: Organization "Grooming Dogs", no contact data). **No FAQPage, Article, Person, Review, Product or Offer.** |
| Indexability | index, follow |
| Breadcrumb | Home › Editorial policy |

---

## L. Elementor Implementation (Elementor Free only)

**Template:** F7 site-page.

**Widgets used:** Shortcode (breadcrumb), Heading, Text Editor, Icon List (jump links and lists), Icon Box (Next cards). **Table of Contents (Pro) is replaced by Icon List anchors.** No Image, no Accordion, **no ad slots**.

**Saved templates:** "Where to go next" cards.

**Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Header | Shortcode · **H1** · Text Editor (byline, intro with `#disclosure` link) · Icon List (8 jump links to the H2 CSS IDs) |
| 2–5 | Written / Sources / Health / Expert review | **H2** (CSS IDs `how-written`, `sources`, `health`, `expert-review`) · Text Editor / Icon List |
| 6 | Funding | **H2** with **CSS ID `disclosure`** (must be exact; inline disclosures link to `/editorial-policy/#disclosure`) · Text Editor · **H3** "Affiliate links" (`affiliate-links`) + Icon List · **H3** "Advertising" (`advertising`) + Icon List · **H3** "Review pages" (`review-pages`) + Icon List |
| 7–9 | Images / Corrections / Not covered | **H2** (`images`, `corrections`, `not-covered`) · Icon List / Text Editor |
| 10 | Next | C-NEXT (3 cards) |

**Confirmed:** no Pro-only widget required.

---

## M. Dependencies

| # | Item | Type | Blocking? | Action |
|---|---|---|---|---|
| M-1 | **O-1 corrections handling** not supplied | Owner input (PC-12) | **Non-blocking.** The page is truthful without it; the spec default is "no response-time promise", and the owner prompt forbids promises. | Owner may add a commitment later |
| M-2 | **O-2:** no affiliate program, ad network or review page is active; named programs unknown | Owner input / activation | Non-blocking (conditional wording) | **Update GD-19 and GD-21 on activation** (PC-13). Add inline disclosures on affected pages. |
| M-3 | **O-3:** AI-use statement undecided | Owner decision (optional) | Non-blocking | Owner decides whether to state how AI tools are used. If stated, add it to "How our guides are written". |
| M-4 | GD-20 (contact) and GD-21 (privacy) not produced | Downstream / launch | Non-blocking | Launch QA |
| M-5 | GD-00 trust strip must follow GD-19 (spec §13) | Downstream | Non-blocking | When producing GD-00, its "How this guide works" points must match §E here (organization byline, sourced health claims, recognize and refer, funding disclosure) |
| M-6 | Disclosure wording follows FTC guidance; not legally reviewed | O-5 | Non-blocking | Optional legal review |
| M-7 | GD-15 US market pass (tipping, licensing, complaints) | Unrelated pending item | — | Still pending |

**Launch blockers for GD-19 itself:** none, other than GD-20 and GD-21 existing for its links.

---

## Anti-drift checklist

- [x] Role verified from the architecture and spec (Editorial & sourcing policy plus disclosure); URL `/editorial-policy/`
- [x] Structure exact: H1, 8 H2s in spec order, 3 H3s under funding, `#disclosure`; no FAQ, no images, no ads
- [x] Describes actual practice only; every statement traced (§F)
- [x] No invented ownership, staff, reviewers, credentials, programs, ad networks, response times or guarantees
- [x] No "no affiliate", "no ads" or "independent" claims; no "every sentence cited"; no peer-review or vet-review claim
- [x] Disclosure rules match architecture §G and FTC guidance (inline, near the link, plain words)
- [x] Owner-dependent statements identified (O-1 to O-5) and not fabricated
- [x] SEO title 56; meta description 151; WebPage schema; no Person or commercial schema
- [x] Elementor Free (TOC replaced by Icon List anchors); global design kept
- [x] Record complete

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**
