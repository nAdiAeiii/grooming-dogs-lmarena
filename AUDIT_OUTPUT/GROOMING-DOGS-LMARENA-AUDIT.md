# Grooming-Dogs.com — LMArena Output Forensic Audit

**Audit date:** 2026-10-05
**Subject:** LMArena output in `grooming-dogs-lmarena/` (40 files, 392 KB). It is byte-identical to `Downloads/grooming-dogs-website-redesign (2).zip`.
**Scope:** Validation only. This audit adds no design, code, copy or deployment plan.
**Audit evidence:** Saved in `AUDIT_OUTPUT/evidence/`. Every "VERIFIED" or "CONTRADICTED" status below can be traced to a file in that folder or to a check that can be repeated.

### Evidence layers used in this audit

| ID | Source | What it is | Authority |
|---|---|---|---|
| **L** | LMArena output | Claims about the site, plus proposals | Assertion only. It contains no source evidence (see §02). |
| **E1** | Live server, read-only check over SSH | `~/domains/grooming-dogs.com/public_html` holds only Hostinger's `default.php`. The folder was modified **2026-10-04 23:47**. The domain error log shows WordPress and Elementor running with an admin session (User ID 1) until **2026-10-04 19:18 UTC**. | Primary source for the current hosting state |
| **E2** | Hostinger CDN edge cache, 2026-10-05 | The homepage, `/services-detail/` and one post are still served from stale cache (cache age about 25–29 h). Every other URL returns Hostinger's 404 or "Default page". Responses change from one request to the next. | Primary source, but stale and only partial |
| **E3** | Wayback Machine captures, **2026-03-06** | `/404-2/ /about/ /blog/ /contact/ /faq/ /home-b/ /pricing/ /services/ /services-detail/ /team/` and both posts. `/locations.kml` was captured 2026-04-21. | Independent primary source. This is the best evidence of the legacy site. |
| **E4** | `Downloads/grooming-dogs kit.zip` (Elementor kit export, created 2026-10-04 16:06, author "nadia") | Theme, plugin list, global colours and fonts | Primary source for the design system and plugin stack |
| **E5** | Wayback captures from 2004–2005, 2011 and 2022 | Earlier, unrelated uses of the domain: a directory-style site (`dog-grooming.htm`, `allergies-dogs.htm`, `pet_food.htm`, …), Intuit Websites assets, then `parking.php` | Domain history |

---

## 01 — Executive audit

**Verdict: Partially usable. Do not take it forward as an approved architecture.**

The LMArena output is not research. It is a **finished Next.js + PostgreSQL website** whose "project package" (`src/content/project-package.ts`) describes its own research. That package contains no captured evidence: no sitemap copies, crawl data, SERP captures, source URLs, query lists or screenshots. The file meant to show the evidence is itself written in the same pass as the production output. Its findings and its proposals are interleaved, and its "QA results" are mostly hard-coded strings.

**What holds up:**
- Most of its observations about the current site are correct when checked against E2, E3 and E4. These include the placeholder contact block, the lorem-ipsum FAQ, the 404 demo page in the navigation, the two homepages, the off-topic template sections, the two thin 2025 posts and the Comfortaa + Proza Libre typefaces.
- Its core structural reading is sound: the domain has almost no real content, and the legacy service, pricing and team pages present fabricated business facts.
- Several consolidation decisions are well argued and match user tasks. Examples: no per-breed pages, no separate mats page, no standalone FAQ page, and three distinct lifecycle pages.

**What fails:**
1. **Misattributed evidence.** LMArena says `/pricing/` showed "three tiers all priced $52/Month". The archived `/pricing/` actually showed a 21-cell Dog/Cat/Other price grid ($12–$98). The $52 tiers were a **homepage** block.
2. **Wrong "brand DNA".** Three of the four palette colours LMArena "extracted from the live stylesheet" are WordPress core preset colours or an ElementsKit hover default. The real global colours in E4 are different.
3. **Unexamined business model.** The output tells the owner to run the site as "independent, no affiliate links, no ads, no lead generation". But the live plugin stack (E4) includes **PrettyLinks, Convert Pro, WordPress Automatic Plugin, Koala AI, Rank Math Pro, Site Kit by Google and MainWP Child**. That stack suggests a managed, monetisable content site. The commercial boundary is an owner decision that LMArena made silently.
4. **Wrong platform.** The owner's site runs on WordPress + Elementor Pro on Hostinger, like the sister sites. LMArena built Next.js + Postgres. Two features depend on that stack: the schedule tool and the corrections form.
5. **Its own consolidation rules are broken.** The clearest case: "how often should I bathe my dog" is declared consolidated onto the schedule page but is still assigned to the bathing page. See §10.
6. **Its source attributions don't exist.** The cost page and schedule data are said to be "attributed to published third-party sources", but no source is named anywhere in the output.
7. **The current-state baseline no longer exists.** The origin WordPress install was emptied on 2026-10-04. Any future redirect or crawl work must rely on Wayback (E3) and the kit (E4), not on the live site. The owner needs to confirm whether the wipe was intentional (OD-01).

**Net:** About a third of the output is safe to carry forward (verified current-state facts and a few structural principles). About a third is useful after verification or reconciliation (the topic set and most page roles). The rest must not influence production: the implementation, platform, commercial posture, palette, cost figures, cadence figures, QA claims and the public `/project-package/` page.

---

## 02 — Artifact inventory

No screenshots, mockups, crawl exports, sitemap copies or SERP captures were supplied. All 40 files are code or content.

| File(s) | Artifact type | Purpose | Source of information | Facts or recommendations? | Appears authoritative? | Depends on | Possible contradictions | Classification | Preserve? |
|---|---|---|---|---|---|---|---|---|---|
| `src/content/project-package.ts` | Research and strategy dossier written as code | Sections 1–14: current state, evidence, topic universe, clusters, consolidation, inventory, SEO, linking, assets, design, QA | Says it came from a "live site crawl" and "open-web search". Nothing was captured. | **Mixed:** current-state claims (§1) sit next to proposals (§3–12) and self-graded QA (§14) | Presents itself as measured fact ("no estimates") | `index.ts`, `site.ts`, page files | Pricing evidence, palette, redirect count, sitemap count, QA hard-coding (§10) | DERIVED ANALYSIS + MODEL INTERPRETATION + STRATEGIC PROPOSAL | **Yes**, as the main record of LMArena's reasoning. Not as evidence. |
| `src/content/site.ts` | IA definition | `SITE` positioning, `NAV` (5 groups, 22 links), `CLUSTERS` (20 entries including "retired"), `LEGACY` (14 dispositions) | Model reasoning | Recommendations, with current-state facts embedded in the `LEGACY` reasons | Yes, as the IA source of truth | — | `LEGACY` /404-2 destination vs `next.config.ts`; cluster rules vs page queries | STRATEGIC PROPOSAL | Yes, as the proposal under review |
| `src/content/pages/*.ts` (6 files, 20 pages) | Final page copy plus per-page intent metadata | Full articles, FAQs, `primaryQuery`, `supportingQueries`, related links | Model-written. Sources not cited. | Recommendations and production copy | Reads as finished | `types.ts`, `images.ts` | Supporting queries duplicated across pages; cost figures; one meta-title typo ("Safly") | IMPLEMENTATION OUTPUT, with embedded STRATEGIC PROPOSAL (query mapping) | Keep for reference. Not approved copy. |
| `src/content/images.ts` | Photo registry | 27 Pexels photos with credit, source page, query and role; 2 declared placeholders | Pexels search (claimed) | Asset recommendations | Yes | — | §8 "Image requirement: None published" vs §11 (17 lead images) | IMPLEMENTATION OUTPUT | Hold. All 27 URLs return HTTP 200. Whether the photos show what their alt text says was not checked. |
| `src/db/seed-data.ts`, `src/db/schema.ts` | Data plus DB schema | Coat-type cadence values (6 coats); feedback table | "Guidance published by veterinary and grooming sources" (unnamed) | Factual claims with no sources | Yes | Postgres | None internal. Unsourced. | DERIVED ANALYSIS (unsourced) + IMPLEMENTATION | Content: verify before use. Schema: do not carry. |
| `next.config.ts` | Redirect map | 24 permanent redirects (12 paths × slash variants), `trailingSlash: true` | `LEGACY` dispositions | URL decisions in code | Yes | `site.ts` | QA says "22"; includes `/about-us` (never evidenced) and `/blog1` (not evidenced) | IMPLEMENTATION OUTPUT that implies URL decisions | Do not carry. Rebuild from the audited URL table. |
| `src/content/index.ts`, `types.ts` | Content model plus link audit | Page registry, archetypes, `auditInternalLinks()` | — | — | — | — | `allUrls()` returns 22 URLs; the package says 21 | IMPLEMENTATION OUTPUT | Only the archetype vocabulary is of interest |
| `scripts/qa-audit.ts` | QA script | Duplicate, length and orphan checks | — | — | No captured output was supplied | `index.ts` | The QA table in the package is mostly hard-coded and not produced by this script | IMPLEMENTATION OUTPUT | No |
| `src/app/page.tsx`, `src/components/*` | Homepage and UI templates | Hero, three "start here" cards, four "by situation" cards, library, schedule tool, feedback form | — | Visual and IA proposal | — | — | Homepage meta title competes with the pillar page | IMPLEMENTATION OUTPUT (the only visual evidence) | No (wrong platform). IA observations are in §16. |
| `src/app/project-package/page.tsx`, `src/app/api/project-package/route.ts`, `src/lib/package-export.ts` | Public rendering of the dossier | Publishes the research package at `/project-package/` and links it from the nav, footer and sitemap | — | — | — | — | Internal documentation exposed as a public page | IMPLEMENTATION OUTPUT | No |
| `src/app/api/{schedule,feedback,health}` | API routes | DB-backed tool and form | — | — | — | Postgres | — | IMPLEMENTATION OUTPUT | No |
| `package.json` and config files | Scaffolding | `"name": "nextjs-postgresql-template"` | — | — | — | — | — | IMPLEMENTATION OUTPUT | No |

**Related item outside the supplied set:** `Downloads/grooming-dogs-website-redesign.zip` (2026-10-04 19:52) contains an `AGENT_HANDOFF_GROOMING_DOGS/` package built from this output (canonical inventory, legacy URL migration, SEO metadata, implementation contract). **This audit did not review it.** Because it is derived from L, it inherits every issue below. Do not use it until it has been reconciled with this audit.

---

## 03 — Current-state model (evidence only)

### 3.1 Hosting state (E1, E2)
- **The origin is empty.** WordPress was removed between 2026-10-04 19:18 and 23:47 UTC. `public_html` holds only Hostinger's `default.php`.
- **The public site is in a degraded state.** The CDN serves stale copies of the homepage, `/services-detail/` and one post. Every other legacy URL returns a 404. All sitemaps and REST endpoints return 404 or "Default page".
- **No backup** of grooming-dogs.com was found in `~/backups/` on the server.

### 3.2 Platform and stack before the wipe (E4, E2)
- **Theme and builder:** WordPress + Hello Elementor 3.5.1, Elementor 4.3.2 and Elementor Pro 4.1.0.
- **Plugins (23):** AMP, Convert Pro, CrawlWP SEO, ElementsKit Lite, Envato Elements, FileOrganizer, Instant Indexing, King Addons, **Koala AI**, LiteSpeed Cache, **MainWP Child**, Premium Addons, **PrettyLinks**, Rank Math SEO + **Pro**, **Site Kit by Google**, UAE, **WordPress Automatic Plugin**, WPCode Lite, WP Reset PRO, WP Webhooks.
- **Fonts:** Comfortaa and Proza Libre.
- **Global colours:** `#03031B`, `#F75634`, `#FFD500`, `#FEB82A`, `#FDE02C`, `#FFF9D8`, `#5F5F5F`, `#7A7A7A`, `#FFFFFF`.
- **Rank Math Local SEO** was active and produced an empty `locations.kml`.

### 3.3 Navigation (E2 homepage; E3 on every page)
- **Header:** Home (submenus Home A, Home B) · About · Services (`#`, submenus Services, Services Detail) · Page (`#`, submenus Pricing, FAQ, Team, 404) · Blog · Contact · **"Appointment"** button linking to `/contact/`.
- **Footer:** Home · About · Our Services · **Donation** (links to `/contact/`) · Contact Us.
- **Homepage-only links:** "Get Started" (to `/services/`) and "Learn More" (to **`/single-post/`**, a URL LMArena never mentions).

### 3.4 Content facts (E2, E3)
- **Homepage:**
  - Title: `Grooming Dogs – "Pawsitively Perfect Grooming!"`
  - Hero: "Care of your little pets hair"
  - Template sections: Cat Food, Pet supplement, Dog Food, Pet accessories, Adopt, Find a Mate, Become a Pet Sitter, Adopt a Pet, Looking for Pet Sitter?, Dog and Cat Illness Guide
  - Pricing block: Basic, Regular and Premium Care, **all "$52 / Month"**. The tier descriptions were customised for dog grooming.
  - Blog teasers and a contact block
- **Placeholder contact block on every page:** `petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03`, `Mon–Fri 09.00–17.00`.
- **`/pricing/`:** customised intro ("Look at you, a responsible pet parent"), then a **Dog/Cat/Other grid of 7 services × 3 columns with arbitrary prices ($12–$98)**.
- **`/team/`:** "Our Team" lists **celebrity names with roles**: Matt Damon "Doctor Pet", and Gal Gadot, Meryl Streep, Rihanna and Madonna as "Nurse". Below them are 4/5-star testimonials signed with celebrity names (Miley Cyrus, Will Smith, Nicole Kidman).
- **`/about/`:** repeats the team block and testimonials. Includes an "Adopt the perfect pets" paragraph that reads like pasted AI instructions ("create a dedicated adoption page featuring…").
- **`/services/`:** customised service list: Dog Mobile Grooming, Veterinary Care, Sanitary Trim, Pet Spa Treatments, Dog Oatmeal Bath, Dental Cleaning, Dog Blowout. Copy addresses "best dog grooming salons near you".
- **`/services-detail/`:** customised copy ("At Grooming Dogs, we offer expert dog grooming services… Book today!"), a 5-step process, and an "Ultimate Savings Package" with **"Buy Now"** buttons (buy 7–9 grooms, get 1–3 free).
- **`/faq/`:** lorem ipsum ("Class himenaeos…") **×15**. The questions come from a donation/finance template ("How do I know I'm donating?", "Can I prequalify over the phone?").
- **`/contact/`:** lorem-ipsum intro plus the placeholder contact block.
- **`/blog/`:** a static page (WP page ID 284). It has its own intro dated "February 29, 2022", a roughly 200-word article "Lending a Helping Paw: The Importance of Grooming Your Dog", and links to the two posts.
- **Posts:**
  - `/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/` (2025-02-25): about 180 words of body; benefits plus when to see a professional.
  - `/top-dog-grooming-tips-for-a-happy-healthy-pup/` (2025-02-26): five bullets (brushing, bath, nails, ears, teeth) plus a CTA.
- **`/home-b/`:** a second homepage with a service list, a pet price grid and a "Donate to Help Animals" section.
- **`/404-2/`:** a demo 404 page listed in the navigation.
- **Not evidenced anywhere:** `/blog1/`, `/about-us/`, and any sitemap file (none captured, all now 404).

### 3.5 What this evidence supports
- **Supported:** The site was a purchased Elementor pet-care template. The owner partly customised it toward dog grooming (tagline, tier copy, service copy, pricing intro, blog intro, two short posts). The rest was left as template data or filled with fabricated identity content (celebrity staff, celebrity-signed reviews).
- **Not supported:** Whether a real grooming business ever existed or was planned. Whether the owner intends affiliate, ad or lead-gen monetisation. The target market or currency. The plugin stack points toward a managed content-site portfolio (MainWP, WP Automatic, Koala AI, PrettyLinks), which is consistent with the owner's other domains, but that remains an inference.

---

## 04 — LMArena interpretation audit

### 4.1 What LMArena appears to have done
- **Fetched:** probably the homepage and the 12 pages and 2 posts it names (its quotes are accurate), and the Rank Math sitemaps (the `local-sitemap`/`locations.kml` detail is specific and correct).
- **Did not inspect, or misread:**
  - the body of `/pricing/` (it reused the homepage pricing block);
  - `/team/` (it said "placeholder names" where the page used celebrity names and celebrity testimonials);
  - the body of `/blog/`.
- **Did not use:** the Elementor kit, the plugin stack, Wayback, domain history, or any analytics or Search Console data.
- **Palette:** it appears to have scraped CSS custom properties without telling WordPress core and plugin defaults apart from the brand colours.
- **SERP and source research:** claimed but **not evidenced**. No query, date, URL or source is recorded.
- **Current state mixed with future state:** throughout. §1 of the package concludes "Unresolved questions: None that block an architectural decision". The `LEGACY` table puts observations and dispositions in the same row. Page files mix proposed intent with final copy.

### 4.2 Findings table

| # | Finding (LMArena's claim) | Evidence in LMArena output | Confidence | Audit status |
|---|---|---|---|---|
| F1 | 12 pages: `/ /home-b/ /about/ /services/ /services-detail/ /pricing/ /team/ /faq/ /blog/ /blog1/ /contact/ /404-2/` | §1 table, "page-sitemap.xml" | 11 of 12 confirmed by E2/E3. `/blog1/` has no corroboration. The sitemap itself cannot be checked. | **PLAUSIBLE** (`/blog1/` UNVERIFIED) |
| F2 | 2 posts of about 150–250 words | §1 | Confirmed (about 180 and 210 words) | **VERIFIED** |
| F3 | "Two posts are the only on-domain content" | §1 narrative | `/blog/` contains a third article of about 200 words | **CONTRADICTED** (minor) |
| F4 | `locations.kml` with no location data | §1 | E3, 2026-04-21 | **VERIFIED** |
| F5 | FAQ body is lorem ipsum ×15 | §1, LEGACY | E3 | **VERIFIED** |
| F6 | `/pricing/` showed three tiers all at $52/Month | §1, LEGACY, cluster "cost" | E3: `/pricing/` is a Dog/Cat/Other grid; the $52 tiers are on the homepage | **CONTRADICTED** |
| F7 | Placeholder contact block (`petcute@mail.com`, etc.) | §1, LEGACY | E2, E3 | **VERIFIED** |
| F8 | Navigation has a 404 link, two homepages and Services → `#` | §1 | E2, E3 | **VERIFIED** |
| F9 | "Donation" links to `/contact/` on the homepage and to `/services-detail/` on the blog | §1 | The homepage link is confirmed. The blog variant was not confirmed. | **PLAUSIBLE** |
| F10 | Homepage template sections (food, adoption, sitting, mating, illness guide) are empty and have no supporting pages | §1, §3 | Confirmed. These sections also appear on `/about/`, `/services/` and `/home-b/`. | **VERIFIED** |
| F11 | No commercial mechanics: no booking, cart, payment, affiliate disclosure or service area | §1 | No working transaction is evidenced. But there are "Appointment", "Book today" and "Buy Now" CTAs, and Convert Pro and PrettyLinks are installed. | **PLAUSIBLE**, overstated |
| F12 | Unedited template; "not an operating business" | §1 | "Unedited" is **contradicted** by the customised copy (§3.5). "Not operating" is a reasonable inference but unverified. | **CONTRADICTED** / **UNVERIFIED** |
| F13 | Theme is `hello-elementor` | §1 | E4 | **VERIFIED** |
| F14 | Fonts are Comfortaa and Proza Libre | §1, §12 | E4, E2 | **VERIFIED** |
| F15 | Palette is #0d3a4f, #fcb900, #feb82a, #ff6900 "from the live stylesheet" | §1, §12 | E4 globals differ. #fcb900 and #ff6900 are WP core presets; #0d3a4f is an ElementsKit hover default. Only #FEB82A matches. | **CONTRADICTED** |
| F16 | Team used template portraits and placeholder names | LEGACY | The names are celebrities with medical-sounding roles, and the testimonials are signed by celebrities | **VERIFIED, with a material correction** |
| F17 | About page implied a staffed salon | LEGACY | E3 (team block, testimonials, adoption copy) | **VERIFIED** |
| F18 | Legacy images are AI-generated portraits named like `output-onlinepngtools-1.png` | §11 | E2 shows `petpng010.png`, `prtjpg05.jpg` and `hero-627x1024.png`. The named files were not found. | **UNVERIFIED** |
| F19 | SERP for head queries is dominated by long coat-type guides | §2 | No captures, queries or dates | **UNSUPPORTED** |
| F20 | Frequency guidance and price ranges come from published sources | §2, cost page, seed data | No source is named anywhere | **UNSUPPORTED** |
| F21 | No Search Console or analytics data available | §2 | True for LMArena. But Site Kit and Rank Math Pro were installed, so the owner may have this data. | **PLAUSIBLE** (and actionable) |
| F22 | The exact-match domain has informational value | §1 | Domain history (E5) not examined | **UNVERIFIED** |
| F23 | "No unresolved questions block an architectural decision" | §1 | See the owner-decision register (§13) | **CONTRADICTED** |
| F24 | Legacy URLs use a trailing slash | `next.config.ts` | E2, E3 | **VERIFIED** |

---

## 05 — Page inventory audit (current site)

**Evidence quality:**
- **High:** primary capture in E2 or E3.
- **Medium:** linked from a primary capture, but not captured itself.
- **Low:** asserted by L only.

| URL | Existing topic | Existing role | Evidence quality | Overlap | Future status |
|---|---|---|---|---|---|
| `/` | "Pawsitively Perfect Grooming!": a multi-purpose pet template with a $52/month tier block | Homepage, plus service and pricing teaser | High (E2) | `/home-b/`, `/services/`, `/pricing/` | **REWRITE** |
| `/home-b/` | Second demo homepage: services, price grid, donations | Duplicate homepage | High (E3) | `/` | **DEPRECATE** |
| `/about/` | About Us, adoption copy, celebrity team, testimonials | About page | High (E3) | `/team/` | **REWRITE** |
| `/services/` | Service catalogue (mobile grooming, "veterinary care", spa, etc.) | Commercial service page | High (E3) | `/services-detail/`, `/` | **UNCLEAR** (depends on OD-02; default is DEPRECATE) |
| `/services-detail/` | Service intro, process, "Ultimate Savings Package / Buy Now" | Commercial offer | High (E2, E3) | `/services/` | **CONSOLIDATE** with `/services/` disposition |
| `/pricing/` | Dog/Cat/Other price grid with arbitrary prices | Price list | High (E3) | Homepage tier block | **DEPRECATE**, or **TRANSFORM** if a cost guide is approved |
| `/team/` | Celebrity "staff" and celebrity-signed reviews | Team page | High (E3) | `/about/` | **DEPRECATE**: fabricated identities. Consolidate any intent into `/about/`. |
| `/faq/` | Lorem-ipsum donation FAQ | Support | High (E3) | None | **DEPRECATE** |
| `/blog/` | Static page: blog intro, one article ("Lending a Helping Paw"), post links | Archive plus content | High (E3) | Both posts, and the routine topic | **UNCLEAR** (depends on OD-07) |
| `/blog1/` | Unknown | Unknown | Low (L only) | — | **UNCLEAR**: not supported by evidence |
| `/single-post/` | Unknown (homepage "Learn More" target) | Unknown | Medium (linked from E2) | — | **UNCLEAR** |
| `/contact/` | Lorem intro plus placeholder contact block | Contact | High (E3) | — | **REWRITE** (keep the URL) |
| `/404-2/` | Demo 404 page | Template artefact | High (E3) | — | **DEPRECATE** |
| `/top-dog-grooming-tips-for-a-happy-healthy-pup/` | Five-bullet routine outline (2025-02-26) | Editorial post | High (E3) | The other post and `/blog/` | **CONSOLIDATE** |
| `/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/` | Benefits of home grooming; when to go professional (2025-02-25) | Editorial post | High (E2, E3) | The other post | **CONSOLIDATE**, as the seed for the routine guide |
| `/locations.kml` | Empty Local SEO file | Technical | High (E3) | — | **DEPRECATE** (disable Local SEO unless OD-02 says otherwise) |
| 2004–2005 `*.htm` URLs (`dog-grooming.htm`, `grooming-dogs.htm`, …) | A previous, unrelated site | Historic | Medium (E5) | — | **UNCLEAR**. Check backlinks before deciding whether any redirects are worth adding. |

---

## 06 — URL / canonical audit (LMArena's proposed pages)

LMArena proposes 22 public URLs: the hub, 20 guides and `/project-package/`. Its own package says 21.

The "Canonical URL" column records this audit's recommendation. For new URLs, LMArena's slug is kept wherever no conflict was found. That is not approval of the slug itself (see OD-11).

| Proposed page | Existing candidates | Recommended action | Canonical URL | Reason | Confidence |
|---|---|---|---|---|---|
| `/` (hub) | `/`, `/home-b/` | **RETAIN EXISTING URL** (rewrite); consolidate `/home-b/` into it | `/` | One homepage. Its role is brand and overview. **It must not target "how to groom your dog at home"** (see C-01). | High |
| `/how-to-groom-your-dog-at-home/` | Both 2025 posts; the `/blog/` article | **CONSOLIDATE**, then **ASSIGN NEW CANONICAL URL** | `/how-to-groom-your-dog-at-home/` | All three legacy pieces cover the same task. The legacy slugs are long and their link equity is unknown. Check backlinks first (VERIFY-03). | Medium-High |
| `/how-often-should-you-groom-your-dog/` | None | **ASSIGN NEW CANONICAL URL** | as proposed | A planning task, distinct from technique. It must own every "how often" query (C-02). | Medium |
| `/coat-types-and-breed-grooming/` | None | **HOLD** (the slug and scope depend on OD-06) | TBD | The title promises breed grooming while breed pages are rejected, and breed queries are assigned to it. Settle the coat-ID role versus breed coverage first. | Medium |
| `/bathing-your-dog/` | None | **ASSIGN NEW CANONICAL URL** after removing the duplicate frequency and drying queries | as proposed | A distinct task | Medium-High |
| `/brushing-mats-and-shedding/` | None | **ASSIGN NEW CANONICAL URL** | as proposed | The consolidation reasoning (same job at three severities) is sound | High |
| `/dog-haircuts-and-trimming/` | `/services/` mentions sanitary trim (service intent, not how-to) | **ASSIGN NEW CANONICAL URL** | as proposed | A distinct task | Medium-High |
| `/trimming-dog-nails/` | None | **ASSIGN NEW CANONICAL URL** after removing "how often" and "won't let me" queries | as proposed | A distinct task | High |
| `/cleaning-dog-ears/` | None | **ASSIGN NEW CANONICAL URL** | as proposed | A distinct task with a clinical boundary | Medium-High |
| `/brushing-dog-teeth/` | The legacy tips post includes teeth | **ASSIGN NEW CANONICAL URL** | as proposed | Supported as part of the routine. Adjacent to YMYL dental content. | Medium |
| `/grooming-tools/` | None | **HOLD** (scope depends on OD-03) | TBD | The user task is real, but whether the page is buyer-literacy or affiliate is an owner decision. The slug might change (e.g. to `/dog-grooming-tools/`). | Medium |
| `/puppy-grooming/` | None | **ASSIGN NEW CANONICAL URL**, subject to OD-05 (overlap with puppy-s.com) | as proposed | A distinct lifecycle task | Medium |
| `/senior-dog-grooming/` | None | **ASSIGN NEW CANONICAL URL** | as proposed | A distinct task with a safety element | Medium |
| `/grooming-anxious-dog/` | None | **ASSIGN NEW CANONICAL URL** | as proposed | A distinct behavioural task. Must own every "won't let me" and "hates" query (C-04). | Medium-High |
| `/dog-grooming-problems/` | `/faq/` (a redirect source only; no intent to keep) | **ASSIGN NEW CANONICAL URL**, narrowed to a symptom router | as proposed | It risks becoming a medical-symptom page. Keep it routing outward. | Medium |
| `/choosing-a-dog-groomer/` | `/services/`, `/services-detail/` | **TRANSFORM** (only if OD-02 = no service business); otherwise **HOLD** | as proposed | Redirecting a service page to an editorial page changes intent. That is acceptable once the service model is formally retired. | Low-Medium |
| `/dog-grooming-cost/` | `/pricing/` | **TRANSFORM**, with **HOLD on content** until sources are attributed and a market is chosen (OD-10) | as proposed | The intent is real. The figures are unsourced and in US dollars by assumption. | Medium |
| `/glossary/` | None | **HOLD** | — | No evidence of demand. Can be deferred without loss (§08). | Low |
| `/about/` | `/about/`, `/team/` | **RETAIN EXISTING URL**; consolidate `/team/` into it | `/about/` | The URL already exists and is linked | High |
| `/editorial-policy/` | None | **ASSIGN NEW CANONICAL URL**, after OD-03/OD-09 | as proposed | Its content commits the owner to policies that haven't been decided | Medium |
| `/contact/` | `/contact/` | **RETAIN EXISTING URL** | `/contact/` | The URL exists. Its function depends on platform (OD-04) and business model (OD-02). | High |
| `/project-package/` | — | **DEPRECATE** (never publish) | none | Internal documentation in the public nav, footer and sitemap | High |

**Legacy URL dispositions this audit does not accept as LMArena wrote them:**

| URL | Problem with LMArena's handling | Corrected position |
|---|---|---|
| `/404-2/` | `LEGACY` says the destination is `/not-found`, but the code redirects to `/` | Decide between a 301 to `/` and a 410. Low stakes. |
| `/blog/` | Redirected to `/` with "two posts do not justify an archive", but the page carries its own article | HOLD until OD-07 (ongoing publishing). If there is no blog, 301 to the routine guide or to `/`. |
| `/blog1/`, `/about-us/` | Redirected without any evidence that they existed | Harmless, but not evidence-backed. Keep only if a later crawl or backlink check finds them. |
| `/single-post/` | Missed | Verify (VERIFY-02) |
| `/faq/` → `/dog-grooming-problems/` | Defensible. The legacy page had no real intent. | Accept, or 301 to `/`. Low stakes. |

---

## 07 — IA / structure audit

### 7.1 Current structure (§3.3)

| Element | Classification |
|---|---|
| Homepage as a multi-purpose pet portal | **NEEDS RESTRUCTURING** |
| Two-homepage menu (Home A/B) | **LEGACY / QUESTIONABLE** |
| "Services" group (Services, Services Detail) | **UNCLEAR** (OD-02) |
| "Page" group (Pricing, FAQ, Team, 404) | **LEGACY / QUESTIONABLE**: template menu |
| Blog (static page plus 2 posts, no categories in use) | **NEEDS RESTRUCTURING** (OD-07) |
| Footer "Donation" | **LEGACY / QUESTIONABLE** |
| "Appointment" CTA | **UNCLEAR** (OD-02) |
| Off-topic template sections (food, adoption, sitting, mating, illness) | **NOT SUPPORTED BY EVIDENCE** as real offers |
| Local SEO (`locations.kml`) | **NOT SUPPORTED BY EVIDENCE** (no location exists) |
| URL pattern: flat `/slug/` with trailing slash, no category base | **KEEP AS EVIDENCED** (a pattern worth keeping, not a page set) |

### 7.2 LMArena's proposed structure
- **Navigation:** 5 groups ("Start here", "Grooming tasks", "Your dog", "Using a groomer", "About") with 22 links.
- **URLs:** flat. No categories or tags.
- **Page roles:** an archetype vocabulary of hub, pillar, task-guide, reference, lifecycle, commercial-info, trust and glossary.

**Structural problems:**
- **Archetype taxonomy doesn't match the cluster intents** (C-12):
  - The problems page is labelled `task-guide` but its cluster is "diagnostic".
  - The anxious-dog page is labelled `lifecycle` but its cluster is "behavioural".
  - The groomer page is labelled `task-guide` but its cluster is "commercial-informational".
- **The "Your dog" nav group mixes lifecycle pages with the troubleshooting router.**
- **No future publishing model.** A flat structure suits a fixed 20-page reference site. Whether the owner intends ongoing content (OD-07) was never decided, and the plugin stack suggests they might.

### 7.3 Conflicts
Each conflict below gives the evidence, impact, possible resolutions, recommended decision and confidence. Contradictions internal to the LMArena output are in §10.

#### C-01 · Homepage and pillar page target the same head term
- **Evidence:** The homepage title is "Dog Grooming Guide: How to Groom Your Dog at Home" (`project-package.ts` SEO table). The pillar's primary query is "how to groom a dog at home".
- **Impact:** The homepage and pillar compete with each other. The hub stops being "not a keyword page", which contradicts LMArena's own cluster rule.
- **Possible resolutions:**
  - (a) Give the homepage a brand/overview title.
  - (b) Merge the pillar into the homepage.
- **Recommended decision:** (a). The pillar owns the task. The homepage is the brand and overview.
- **Confidence:** High

#### C-02 · Ownership of "how often" queries
- **Evidence:** The cluster rule gives "how often" for bathing, brushing, nails and ears to `/how-often-…/`. But the bathing, nails, ears and teeth pages each list a "how often" supporting query.
- **Impact:** The cannibalisation the rule was written to prevent happens anyway.
- **Possible resolutions:**
  - (a) The schedule page owns every frequency query, and task pages link to it.
  - (b) Each task page owns its own frequency.
- **Recommended decision:** (a), as LMArena itself decided. Remove the duplicates from the task pages.
- **Confidence:** High

#### C-03 · Coat-types page promises breed grooming
- **Evidence:** The slug and title include "breed". Breed queries are assigned to it ("how to groom a golden retriever", "…poodle"). Per-breed pages are rejected.
- **Impact:** Breed-intent searchers land on a coat taxonomy page. The intent fit is unproven.
- **Possible resolutions:**
  - (a) A coat-ID page with a breed lookup table.
  - (b) A coat page now, breed pages later if evidence appears.
  - (c) Breed pages now.
- **Recommended decision:** (a) or (b). OWNER DECISION (OD-06). Hold the slug until then.
- **Confidence:** Medium

#### C-04 · Ownership of "won't let me" and "hates" queries
- **Evidence:**
  - The nails page has "my dog won't let me cut his nails"; the anxious-dog page has "dog won't let me trim nails".
  - The bathing page has "dog hates baths"; the anxious-dog page has "dog hates being groomed".
- **Impact:** The behavioural intent is split across pages.
- **Possible resolutions:**
  - (a) The anxious-dog page owns all resistance queries, and task pages link to it.
  - (b) Task pages keep task-specific resistance content.
- **Recommended decision:** (a). Task pages may keep a short pointer.
- **Confidence:** Medium-High

#### C-05 · Ownership of tool-selection queries
- **Evidence:** "Best brush for a double coat" is on the brushing page; "best brush for my dog" is on the tools page. Grinder vs clipper is on the nails page. Blade sizes are on the haircuts page.
- **Impact:** "Which tool" intent is split across pages, and it may become the commercial page if OD-03 allows affiliates.
- **Possible resolutions:**
  - (a) The tools page owns selection; task pages own use.
  - (b) Distributed ownership.
- **Recommended decision:** (a)
- **Confidence:** Medium

#### C-06 · Commercial posture vs evidence
- **Evidence:** The editorial policy and cluster decisions forbid affiliates, ads and lead-gen. The installed stack includes PrettyLinks, Convert Pro, WP Automatic and Koala AI.
- **Impact:** If the owner does monetise, the whole trust layer (about, editorial policy, tools and cost pages) would be false.
- **Possible resolutions:**
  - (a) Editorial-only.
  - (b) Disclosed affiliate.
  - (c) Ads.
  - (d) Lead-gen to groomers.
- **Recommended decision:** OWNER DECISION (OD-02/OD-03). Do not publish policy statements before it is made.
- **Confidence:** High that this is an open decision

#### C-07 · Platform
- **Evidence:** The output is Next.js + Postgres. The real site is WordPress + Elementor Pro on Hostinger, as are the sister sites.
- **Impact:** The schedule tool, corrections form, redirect config and structured-data code can't be carried over.
- **Possible resolutions:**
  - (a) WordPress/Elementor.
  - (b) Next.js hosting.
- **Recommended decision:** OWNER DECISION (OD-04). Treat the code as reference only.
- **Confidence:** High

#### C-08 · Internal documentation published publicly
- **Evidence:** `/project-package/` appears in the nav "About" group, the footer download links and `allUrls()`/sitemap.
- **Impact:** Internal strategy (including "fabricated team" language about the domain's own past) would be indexed.
- **Possible resolutions:** Remove it from the public site.
- **Recommended decision:** Remove it.
- **Confidence:** High

#### C-09 · Service URLs redirected to editorial pages
- **Evidence:** `/services/` and `/services-detail/` redirect to `/choosing-a-dog-groomer/`; `/pricing/` redirects to `/dog-grooming-cost/`.
- **Impact:** The intent changes from "buy from us" to "how to choose someone else". That is only valid if the service model is retired.
- **Possible resolutions:**
  - (a) A 301 to the editorial equivalent.
  - (b) A 410.
  - (c) A 301 to `/`.
- **Recommended decision:** (a) if OD-02 retires the service model. Before then, HOLD.
- **Confidence:** Medium

#### C-10 · No baseline site exists
- **Evidence:** E1. The origin was emptied on 2026-10-04 and no backup was found.
- **Impact:**
  - The legacy URLs are currently erroring for search engines.
  - The "current state" can't be re-crawled; only E3 and E4 remain.
  - If the wipe was intentional and a rebuild is planned, the old content is gone except in Wayback.
- **Possible resolutions:**
  - (a) Confirm the wipe was intentional and work from E3/E4.
  - (b) Restore from a Hostinger backup.
- **Recommended decision:** OWNER DECISION (OD-01)
- **Confidence:** High that it needs a decision

#### C-11 · Legacy pricing rationale rests on misread evidence
- **Evidence:** F6
- **Impact:** The conclusion (fabricated prices, retire them) still holds, but the stated reason is wrong. Downstream documents repeat "$52/month on /pricing/".
- **Possible resolutions:** Correct the record.
- **Recommended decision:** Correct the rationale to "an arbitrary Dog/Cat/Other price grid". Keep the disposition, subject to OD-02.
- **Confidence:** High

---

## 08 — Independent editorial guide audit

Each of LMArena's 20 guides is an independent editorial guide with its own canonical URL. The real user task, not LMArena's proposal, is the test applied here.

| Guide | User task | Evidence | Already addressed on the existing site? | Independent page better than a section? | Fragmentation risk | Editorial or commercial | Canonical role | Classification |
|---|---|---|---|---|---|---|---|---|
| How to groom your dog at home | Carry out the whole routine | Both legacy posts and the `/blog/` article cover it | Thinly (3 pieces, about 600 words in total) | Yes | Low if C-01 is fixed | Editorial | Pillar | **JUSTIFIED WITH CHANGES** (C-01) |
| How often to groom | Build a calendar | Universal task. The legacy tips post mentions "not too often". | No | Yes. Different task from technique. | Medium (C-02) | Editorial | Planning pillar | **JUSTIFIED WITH CHANGES** (C-02; cadence data unsourced) |
| Coat types and breed grooming | Identify the coat, then apply the right care | Plausible. No evidence on breed demand. | No | Yes for coat ID | Medium (C-03) | Editorial | Reference | **JUSTIFIED WITH CHANGES** (OD-06) |
| Bathing | Wash and dry safely | Legacy tips post | One bullet | Yes | Low after dedupe | Editorial | Task | **JUSTIFIED WITH CHANGES** |
| Brushing, mats and shedding | Brush, de-mat, de-shed | Legacy tips post | One bullet | Yes | Low | Editorial | Task | **JUSTIFIED** |
| Haircuts and trimming | Trim at home; understand cut styles | `/services/` lists sanitary trim | Service listing only | Yes | Low | Editorial | Task | **JUSTIFIED** |
| Nail trimming | Trim without hitting the quick | Legacy tips post | One bullet | Yes | Low after dedupe | Editorial | Task | **JUSTIFIED WITH CHANGES** |
| Ear cleaning | Clean safely; know when to stop | Legacy tips post | One bullet | Yes | Low | Editorial (YMYL-adjacent) | Task | **JUSTIFIED WITH CHANGES** (author/reviewer decision OD-09; meta typo) |
| Teeth brushing | Brush teeth; judge alternatives | Legacy tips post | One bullet | Yes | Low | Editorial (YMYL-adjacent) | Task | **JUSTIFIED WITH CHANGES** (OD-09) |
| Grooming tools | Choose and buy the right few tools | Plausible | No | Yes | Medium (C-05) | **Owner-dependent** | Reference or commercial | **PREMATURE** (OD-03) |
| Puppy grooming | Build a positive association early | Plausible | No | Yes | Low on this site; possible overlap with puppy-s.com | Editorial | Lifecycle | **JUSTIFIED WITH CHANGES** (OD-05) |
| Senior dog grooming | Adapt to physical limits | Plausible | No | Yes | Low | Editorial (safety) | Lifecycle | **JUSTIFIED** |
| Anxious/resistant dog | Handle fear and resistance | Plausible | No | Yes | Medium (C-04) | Editorial | Behavioural | **JUSTIFIED WITH CHANGES** |
| Grooming problems | Diagnose a post-grooming symptom and get routed | Plausible | No (the FAQ was lorem) | Yes, as a router | Medium. Could drift into medical content. | Editorial (YMYL-adjacent) | Router | **JUSTIFIED WITH CHANGES** (narrow it) |
| Choosing a groomer | Prepare for, evaluate and complain about a groomer | Plausible | The opposite role was on `/services/` | Yes, if there is no service model | Low | Editorial (commercial-informational) | Commercial-info | **JUSTIFIED WITH CHANGES** (OD-02) |
| Grooming cost | Set a budget; understand quotes | Plausible. The legacy `/pricing/` shows the intent existed. | Fabricated prices only | Yes | Low | Commercial-informational | Commercial-info | **PREMATURE** (unsourced figures; OD-10) |
| Glossary | Look up a term mid-task | None | No | Not proven. Definitions can sit inline. | Low | Editorial | Reference | **PREMATURE** |
| About | Understand who runs the site | Required | Yes (fabricated) | Yes | — | Trust | Trust | **JUSTIFIED WITH CHANGES** (content depends on OD-02/OD-09) |
| Editorial policy | Understand sourcing and limits | Required by YMYL-adjacent pages | No | Possibly; could be a section of About | Low | Trust | Trust | **JUSTIFIED WITH CHANGES** (it commits to policies first decided in OD-03) |
| Contact | Reach the site | Required | Yes (placeholder) | Yes | — | Trust | Trust | **JUSTIFIED WITH CHANGES** (OD-04) |
| Project package | — | — | — | — | — | Internal | — | **UNSUPPORTED** as a public page |

**Topics LMArena retired.** Classified on the same scale, as proposals to *not* create pages:
- **Food, supplements, accessories:** agreed. Note that the owner has **dogs-food.com** in the same portfolio, so food intent has a natural owner elsewhere (OD-05).
- **Adoption, sitting, mating:** agreed. Unrelated to grooming.
- **Illness guide:** agreed. YMYL, with no reviewer.
- **Per-breed pages:** reasonable for now (OD-06).
- **Cat grooming:** reasonable, given the domain name. The legacy `/pricing/` did include Cat/Other columns, so confirm (OD-05).

---

## 09 — Content strategy audit

### Evidence-supported
- The domain has essentially no substantive content. Fewer than 1,000 real words existed across all pages.
- The legacy service, pricing and team content presents fabricated business facts: placeholder contacts, arbitrary prices, celebrity staff and celebrity reviews. Publishing any of it again would be dishonest.
- The real on-domain topic is home dog grooming: the routine and its five component tasks (brush, bathe, nails, ears, teeth).
- The off-topic template sections have no content behind them.
- A flat `/slug/` URL pattern with a trailing slash matches the legacy site.

### Reasonable interpretation
- The dominant intent for this domain's subject is informational how-to. That fits the domain name, but the SERP check was never captured.
- Task-based page separation (bathing, brushing, haircuts, nails, ears, teeth), three lifecycle and behavioural pages, and a symptom router.
- The consolidation decisions in §5 of the package: no mats page, no human-shampoo page, no FAQ page, coat and breed on one page, cost separate from choosing a groomer.
- Putting FAQs on the pages they relate to instead of on one FAQ page.
- Making the clinical boundary explicit on the ears, teeth, senior, anxious and problems pages.

### Strategic hypotheses (owner approval required)
- The site should be an independent, non-commercial editorial guide with no affiliates, ads or lead-gen (C-06).
- No individual breed pages (OD-06).
- A cost page with US-dollar ranges (OD-10).
- A glossary and a standalone editorial-policy page.
- No ongoing blog or publishing cadence (OD-07).
- An interactive schedule tool and a corrections form (OD-04).
- Shipping pages with visible "photography placeholder" blocks (teeth, ears).
- Keeping the legacy brand name "Grooming Dogs". The tagline is replaced.

### Unsupported
- "SERP evidence established" the page structure (F19).
- Price ranges and coat cadences "attributed to published sources" (F20).
- The "brand DNA" palette (F15).
- "No unresolved questions" (F23).
- All QA "Pass" and "0" results that aren't computed, and the "21 sitemap URLs" and "22 redirects" figures (§10).
- That the legacy images were AI-generated with the named filenames (F18).

---

## 10 — Contradiction register

| # | Contradiction | Source A | Source B | Severity | Resolution needed |
|---|---|---|---|---|---|
| X-01 | The commercial posture assumed to be "none" | `site.ts` SITE/CLUSTERS, editorial policy ("no affiliate, no ads, no lead-gen") | E4 plugin stack (PrettyLinks, Convert Pro, WP Automatic, Koala AI, Rank Math Pro) | **CRITICAL** | OD-02/OD-03 |
| X-02 | Platform | All of L (Next.js + Postgres) | E4 (WordPress + Elementor Pro, Hostinger) | **CRITICAL** | OD-04 |
| X-03 | Current-state baseline | L §1 "read directly from the live markup" | E1/E2 (origin wiped 2026-10-04; live site degraded) | **CRITICAL** | OD-01 |
| X-04 | `/pricing/` content | L §1, LEGACY ("three tiers $52/Month") | E3 `/pricing/` (Dog/Cat/Other grid, $12–$98) | **HIGH** | Correct the record (C-11) |
| X-05 | Brand palette | L §1, §12 (#0d3a4f, #fcb900, #feb82a, #ff6900) | E4 globals (#03031B, #F75634, #FFD500, #FEB82A, #FDE02C, #FFF9D8) | **HIGH** | Discard L's palette. Use E4 if legacy DNA matters. |
| X-06 | Bathing frequency ownership | `site.ts` cluster "frequency" and package §5 | `tasks-a.ts` bathing `supportingQueries` ("how often should I bathe my dog") | **HIGH** | C-02 |
| X-07 | Cost figures "attributed" | Cluster "cost", package §2, editorial policy | `pro.ts` cost page (no source named anywhere) | **HIGH** | Source them or remove them |
| X-08 | QA "cannot drift from what is published" | Package §14 narrative | Package §14 tables (hard-coded "0", "21", "22", "Pass"); a meta-title typo ("Safly") passed QA | **HIGH** | Treat all QA claims as unverified |
| X-09 | "Unedited template" | L §1 | E2/E3 customised copy (tagline, tiers, services, pricing intro, blog intro, posts) | **MEDIUM** | Reword the current-state record |
| X-10 | Hub "not a keyword page" | Cluster "overview" | Homepage title "…How to Groom Your Dog at Home" | **MEDIUM** | C-01 |
| X-11 | Frequency tables "stay on the schedule page" | Cluster "nails" decision | Nails ("how often to trim dog nails"), ears ("how often to clean dog ears") and teeth ("how often should I brush my dog's teeth") queries | **MEDIUM** | C-02 |
| X-12 | No local intent "assigned anywhere" | Package §2 | Cost page query "dog grooming prices near me" | **MEDIUM** | Drop the query or accept local intent |
| X-13 | Resistance and tool queries split | `situations.ts` anxious; `pro.ts` tools | `tasks-b.ts` nails; `tasks-a.ts` bathing and brushing | **MEDIUM** | C-04, C-05 |
| X-14 | Image requirements | Package §7 PAGE_ARCHITECTURE ("None published") | Package §11 (17 lead and 10 instructional images) | **MEDIUM** | Stale field. Ignore §7's image line. |
| X-15 | "Only on-domain content is two posts" | L §1 | E3 `/blog/` article | **LOW-MEDIUM** | Add it to the consolidation inputs |
| X-16 | Canonical URL count | Package §6, §9, §14 ("21") | `allUrls()` (22, including `/project-package/`) | **LOW-MEDIUM** | C-08 |
| X-17 | Redirect count | Package §14 ("22, all permanent") | `next.config.ts` (24 entries) | **LOW** | Rebuild the redirect map from §06 |
| X-18 | `/404-2/` destination | `LEGACY` (`/not-found`) | `next.config.ts` (`/`) | **LOW** | §06 |
| X-19 | Archetype vs cluster intent | `CLUSTERS` (diagnostic, behavioural, commercial-informational) | Page `archetype` (task-guide, lifecycle, task-guide) | **LOW-MEDIUM** | Settle the page-role vocabulary |
| X-20 | Cost range | Cost answer ("about $40–$120") | Cost table ("giant… $100–$160", "mobile $60–$150+") | **LOW** | Moot until sourced |
| X-21 | Redirects for URLs never evidenced | `next.config.ts` (`/about-us`, `/blog1`) | E2/E3 (no trace) | **LOW** | §06 |

---

## 11 — Assumption register

| # | Assumption | Where it is assumed | Status |
|---|---|---|---|
| A-01 | The owner has no grooming business and wants none | SITE positioning, about page, contact ("no booking requests") | **NEEDS VERIFICATION** (OD-02) |
| A-02 | No commercial relationships: no affiliates, ads or lead-gen | Editorial policy, tools and cost pages | **NEEDS VERIFICATION**. The E4 stack suggests otherwise (OD-03). |
| A-03 | The platform is Next.js + Postgres | The entire codebase | **UNSUPPORTED** (OD-04) |
| A-04 | The audience is US-based (prices in USD) | Cost page | **NEEDS VERIFICATION** (OD-10) |
| A-05 | The audience is dog owners grooming at home, plus some using professionals | All pages | **REASONABLE** |
| A-06 | The site has no authority signals (no vet review, no named author) | Editorial policy, about | **REASONABLE** as a current fact. Whether to add them is OD-09. |
| A-07 | No analytics or GSC data exists | Package §2 | **NEEDS VERIFICATION**. Site Kit and Rank Math Pro were installed (VERIFY-01). |
| A-08 | The exact-match domain has SEO value | Package §1 | **NEEDS VERIFICATION**. Domain history (E5) and backlinks not checked. |
| A-09 | Legacy URLs earned links worth redirecting | `next.config.ts` comment | **NEEDS VERIFICATION** (VERIFY-03) |
| A-10 | The coat cadence values reflect published veterinary and grooming guidance | `seed-data.ts`, schedule page | **UNSUPPORTED**. No sources. |
| A-11 | The price ranges reflect published third-party sources | Cost page | **UNSUPPORTED**. No sources. |
| A-12 | The SERP favours long coat-type and task guides | Package §2 | **UNSUPPORTED** (no capture) |
| A-13 | The scope is dogs only | Topic universe | **REASONABLE** (domain name). The legacy pricing had Cat/Other columns (OD-05). |
| A-14 | Topics don't overlap with the owner's other sites | Never considered | **NEEDS VERIFICATION**. dogs-food.com and puppy-s.com exist (OD-05). |
| A-15 | The site is a fixed reference set with no ongoing publishing | No blog or taxonomy | **NEEDS VERIFICATION** (OD-07) |
| A-16 | The Pexels photos are real, licensed and show what they claim | `images.ts` | **NEEDS VERIFICATION**. All 27 URLs resolve; the subjects and licence weren't checked. |
| A-17 | Trailing-slash canonicals | `next.config.ts` | **VERIFIED** (legacy links) |
| A-18 | The legacy brand name "Grooming Dogs" is kept and the tagline dropped | SITE | **REASONABLE**. Owner to confirm. |
| A-19 | The legacy site was abandoned rather than operated | Package §1 | **REASONABLE** but unverified. The owner was editing it until 2026-10-04. |
| A-20 | Page ownership rules: one cluster per page, with exceptions only where tasks differ | `site.ts` header comment | **REASONABLE** as a principle, but L's own pages break it (X-06, X-11, X-13) |

---

## 12 — Trust / Verify / Reconcile / Do-not-trust matrix

| LMArena conclusion | Classification | Why |
|---|---|---|
| The legacy site is a template with fabricated business facts (contacts, prices, team, reviews) | **TRUST** | E2/E3. If anything, LMArena understated the team problem. |
| The two 2025 posts are thin, on-topic seeds for a routine guide | **TRUST** | E2/E3 |
| FAQ, `/404-2/`, `/home-b/` and `/team/` should not survive as pages | **TRUST** | E3. No legitimate intent. |
| Off-topic template sections (food, adoption, sitting, mating, illness) are retired from this domain | **TRUST** (OD-05 decides where food goes) | No content and no relevance |
| Fonts: Comfortaa and Proza Libre | **TRUST** | E4 |
| Flat URLs with a trailing slash | **TRUST** | E2/E3 |
| Topic set: routine, frequency, coat, five tasks, three situations, problems, groomer, cost | **VERIFY** | Plausible user tasks. Demand is unmeasured (VERIFY-01/04). |
| Consolidation decisions (no mats page, no shampoo page, no per-page FAQ hub, coat and breed together) | **VERIFY** | Sound reasoning. The breed question is open (OD-06). |
| Separate cost and choosing-a-groomer pages | **VERIFY** | Plausible. Depends on OD-02/OD-10. |
| Three separate puppy, senior and anxious pages | **VERIFY** | Sound reasoning. Check overlap with puppy-s.com (OD-05). |
| Retiring `/services/` and `/pricing/` into editorial pages | **RECONCILE** | Depends on OD-02. The pricing rationale is misattributed (X-04). |
| Page-level query ownership | **RECONCILE** | X-06, X-11, X-12, X-13 |
| Homepage as hub vs pillar | **RECONCILE** | C-01 |
| Archetype vocabulary | **RECONCILE** | X-19 |
| `/blog/` → `/` | **RECONCILE** | X-15, OD-07 |
| Non-commercial, independent positioning and editorial-policy commitments | **DO NOT TRUST YET** | X-01. An owner decision made silently. |
| Next.js platform, schedule tool, Postgres corrections form, API routes | **DO NOT TRUST YET** | X-02 |
| Brand palette | **DO NOT TRUST YET** | X-05 |
| Cost figures and coat-cadence values | **DO NOT TRUST YET** | X-07, A-10, A-11 |
| SERP and "research" claims | **DO NOT TRUST YET** | F19 |
| QA results (other than the computed orphan and broken-link check) | **DO NOT TRUST YET** | X-08 |
| Redirect map as coded | **DO NOT TRUST YET** | X-17, X-18, X-21 |
| `/project-package/` as a public page | **DO NOT TRUST YET** | C-08 |
| The 20 pages of written copy | **DO NOT TRUST YET** as production copy | Unsourced. YMYL-adjacent claims were not reviewed. Queries not deduplicated. |

---

## 13 — Owner decision register

> **OWNER DECISION REQUIRED** for each item below. None of them can be settled from the LMArena output or from the evidence gathered here.

| ID | Decision | Why it can't be inferred | What it unblocks |
|---|---|---|---|
| **OD-01** | Was the 2026-10-04 wipe of `grooming-dogs.com/public_html` intentional? Should the old site be restored from a Hostinger backup, or is Wayback (E3) plus the kit (E4) the accepted record? | E1 shows the wipe but not the reason. No backup was found in `~/backups/`. | The baseline, redirect timing, and whether legacy URLs are erroring right now |
| **OD-02** | Business model: editorial guide only, real grooming service, or lead-gen to groomers? | The legacy site imitated a service. The stack suggests a content portfolio. | Whether `/services/`, `/pricing/`, the "Appointment" CTA and the choosing-a-groomer role survive |
| **OD-03** | Commercial/editorial boundary: are affiliate links, ads or email capture permitted? | PrettyLinks and Convert Pro were installed; L forbids all of them | The tools and cost page roles, and the editorial-policy and about copy |
| **OD-04** | Platform: WordPress + Elementor (as on the sister sites) or Next.js? | L assumes Next.js; E4 is WordPress | Whether the schedule tool and corrections form are built at all, and how |
| **OD-05** | Topic territory across the portfolio: food → dogs-food.com? Puppy grooming vs puppy-s.com? Is cat content excluded? | L considered this domain alone | Retirement of the off-topic sections; scope of the puppy page |
| **OD-06** | Breed coverage: one coat-type page, or a coat page plus a future breed hub? | No demand data | The coat page's slug, title and queries (C-03) |
| **OD-07** | Will the site publish ongoing articles (a blog), or stay a fixed reference set? | WP Automatic and Koala AI suggest automated publishing; L assumes none | `/blog/`, taxonomy, and the URL pattern for future posts |
| **OD-08** | Brand: keep "Grooming Dogs"? Keep or replace the tagline? Keep the legacy palette (E4) or redesign? | Not addressed in the evidence | Design phase |
| **OD-09** | Authority: will there be a named author or reviewer, especially for the ears, teeth, senior, anxious and problems pages? | L disclaims all credentials | YMYL handling and trust pages |
| **OD-10** | Target market and currency for the cost page (US? UK? global ranges?) | L assumes USD with no evidence | Whether `/dog-grooming-cost/` can launch |
| **OD-11** | Slug style: the proposed slugs mix patterns (`bathing-your-dog`, `trimming-dog-nails`, `dog-haircuts-and-trimming`, `brushing-mats-and-shedding`). Accept them, or normalise? | A style preference | Final canonical URLs |
| **OD-12** | Launch scope: do the glossary and the standalone editorial-policy page launch now or later? | No evidence of demand | Final page count |

---

## 14 — Downstream handoff

**Page count:** No page count is locked. The evidence supports roughly 14–18 canonical URLs for launch: the hub, the routine pillar, frequency, coat, five tasks, three situations, problems, about and contact, plus the groomer, cost, tools, glossary and editorial-policy pages, each depending on its owner decision. That range is a result of the analysis, not a target.

**Pass on to the next phase:** this file, `AUDIT_OUTPUT/evidence/`, and the LMArena `site.ts` and `project-package.ts`, labelled "proposal under review". **Do not pass on:** the Next.js code, `next.config.ts`, `seed-data.ts`, or the derived `AGENT_HANDOFF_GROOMING_DOGS` package, until it has been reconciled.

---

## SAFE TO CARRY FORWARD
1. **Current-state facts** in §3, with their E-source labels. This replaces L §1 as the current-state record.
2. **Legacy service, pricing and team content is fabricated** (placeholder contacts, arbitrary prices, celebrity staff and reviews) and must not be republished in any form.
3. **Pages that do not survive as pages:** `/home-b/`, `/faq/`, `/404-2/`, `/team/`. Their intent goes to `/`, the problems router (or `/`), and `/about/`.
4. **The two 2025 posts and the `/blog/` article are the content seed** for one routine guide. They consolidate into a single canonical page.
5. **Kept URLs:** `/`, `/about/` and `/contact/` remain the canonical URLs for their roles.
6. **Retired off-topic sections:** food, supplements, accessories, adoption, sitting, mating and the illness guide are retired from this domain.
7. **Flat `/slug/` URLs with a trailing slash.**
8. **Typefaces:** Comfortaa and Proza Libre, if legacy brand continuity is wanted (OD-08).
9. **Principles:** one task per canonical page; FAQs placed with the page they answer; explicit clinical boundaries on health-adjacent pages; no per-symptom or per-question thin pages.
10. **`/project-package/` is never a public URL.**

## CARRY FORWARD AFTER VERIFICATION
| Item | Verification step |
|---|---|
| The topic and page set in §06/§08 | **VERIFY-01:** export Search Console and GA data (Site Kit was installed) for any queries or pages with impressions. **VERIFY-04:** capture a dated SERP check for the main query of each proposed page. |
| Legacy redirects (posts → routine guide; `/pricing/` → cost; `/services*` → groomer) | **VERIFY-03:** backlink check on the legacy URLs and the 2004-era `*.htm` URLs. Adopt only after OD-02. |
| `/single-post/`, `/blog1/`, `/about-us/` | **VERIFY-02:** check Wayback, GSC and backlink data. Keep redirects only for URLs with evidence. |
| Coat-type cadence values | **VERIFY-05:** attach a named source to each value, or rewrite it as clearly general guidance |
| Cost ranges | **VERIFY-06:** name the sources, date them, and fix the market (OD-10) |
| Consolidation decisions (no mats page, coat and breed together, cost separate from groomer, three situation pages) | Confirm against VERIFY-01/04 data and OD-05/OD-06 |
| Pexels photography | **VERIFY-07:** check that each image shows its stated subject; confirm the licence on each source page |
| Clinical boundary content on the ears, teeth, senior, anxious and problems pages | **VERIFY-08:** an expert or source review before publishing (OD-09) |

## REQUIRES RECONCILIATION
| Item | Conflict | Resolve by |
|---|---|---|
| Hub vs pillar head term | C-01 / X-10 | The homepage title and role move to brand/overview |
| "How often" ownership | C-02 / X-06 / X-11 | The schedule page owns it; remove it from the task pages |
| Resistance-query ownership | C-04 / X-13 | The anxious-dog page owns it |
| Tool-selection ownership | C-05 / X-13 | The tools page owns it, after OD-03 |
| Coat page breed promise | C-03 | OD-06 |
| `/blog/` disposition | X-15 | OD-07 |
| Page-role vocabulary | X-19 | Settle one list of roles before writing the canonical inventory |
| `/pricing/` rationale | X-04 / C-11 | Correct the record. The disposition follows OD-02. |
| Services → editorial redirects | C-09 | OD-02 |
| Current-state baseline | X-03 / C-10 | OD-01 |

## DO NOT CARRY FORWARD
1. The **Next.js + Postgres implementation**: all of `src/app`, `src/components`, `src/db`, `src/lib`, the API routes and the config.
2. **`next.config.ts` redirect map** as written: wrong count, unevidenced sources, inconsistent destinations.
3. The **"independent, no affiliate, no ads, no lead-gen" positioning** and every copy line that states it (about, editorial policy, contact, tools, cost), until OD-02/OD-03 are made.
4. **LMArena's palette** (#0d3a4f, #fcb900, #ff6900) described as "brand DNA".
5. **Cost figures and coat-cadence values** as sourced facts.
6. **SERP and research claims** in package §2, and "no unresolved questions" in §1.
7. **QA results** in package §14, other than the computed orphan and broken-link check.
8. **"/pricing/ showed three tiers at $52/Month"** and **"unedited template"** as current-state facts.
9. The **`/project-package/` page**, its nav and footer links, and its sitemap entry.
10. The **20 pages of written copy as production copy.** Use them as drafts only, after reconciliation and verification.
11. The **derived `AGENT_HANDOFF_GROOMING_DOGS` package** (Downloads zip), until it has been reconciled with this audit.
