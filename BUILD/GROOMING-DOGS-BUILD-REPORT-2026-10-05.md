# Grooming-Dogs.com — Build Report (2026-10-05)

**Scope:** Phase A (foundation), Phase B (22 launch pages), Phase C (configuration), Phase D (QA).
**Not done:** Phase E (deployment), by instruction. **All 22 pages are DRAFTS. Nothing has been published.**

**Authorities used:**
- the final architecture;
- `GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md`;
- `PRODUCTION/GD-00` to `GD-21`;
- `AUDIT_OUTPUT/GROOMING-DOGS-DESIGN-SYSTEM-OWNER-DECISIONS-2026-10-05.md`.

**Reproducible build:**
- **Scripts:** this folder (`convert.py`, `build_all.py`, `build_home.py`, `wp_*.php`, `site.css`, `gd-site-rules.php`).
- **Inputs:** `content/` holds the extracted record content. `content/GD-21.md` is the resolved build input; the unmodified record extract is `GD-21.record.md`.
- **Output:** `out/` holds the generated Elementor JSON.
- **Server copies:** `~/backups/grooming-dogs/build/`.
- **Database backup taken before the build:** `~/backups/grooming-dogs/db-20261005-124808-pre-build.sql.gz`.

---

## BUILD STATUS

| Item | Status | Notes |
|---|---|---|
| Plugins | **PASS** | The 17 owner-listed plugins are deactivated, none deleted. Active: Elementor, Header Footer Elementor, Rank Math, LiteSpeed Cache; WPForms Lite (installed, as GD-20 requires); and `hostinger` and `fileorganizer`, which are unlisted and left untouched (see O-5). |
| Design system | **PASS** | Kit 15 is active and matches DS-OD-01 to 05 exactly (16 global colors, 6 global type styles, Inter, 1200px container, 6px buttons). Legacy kit 9 is unused. Google Fonts load locally. "Disable default colors/fonts" is on, so widgets inherit the kit's theme styles. |
| GD-00 to GD-21 | **22/22 built** | Drafts with IDs 38–58, plus 3 (privacy page). Copy is generated verbatim from the records; builder notes are stripped. Verified images only: 20 attachments (IDs 18–37), with the record alt text and credits. |
| Navigation | **PASS** | Menu "Primary" (5 items, per architecture §E.1); no sixth item, no `/guides/`. Desktop on one row; mobile toggle with a full-width panel; Enter opens submenus. |
| Header/footer | **PASS** | HFE header 80 and footer 82, built to DS-OD-03. Text wordmark, no logo. Footer per architecture §E.2. **Targeted to the 22 launch pages only until deployment.** |
| SEO | **PASS** | Rank Math title, meta description, focus keyword and breadcrumb label on all 22 pages. Rendered `<title>` and meta description match the records on all 22 (titles ≤60, metas ≤160). Breadcrumbs render (e.g. "Home › Bathing"). Canonicals are checked at deployment (drafts use `?page_id`). |
| Schema | **PASS (pre-publish scope); final check at deployment** | One FAQPage on each of the 17 pages with an FAQ, generated only by the Elementor Accordion; none elsewhere. Organization "Grooming Dogs", with no logo or contact data. Article set for GD-01 to 17; off for GD-00 and 18 to 21. The must-use plugin sets the Article author to the Organization, removes Person, and sets AboutPage (GD-18) and ContactPage (GD-20). **Rank Math doesn't output its main graph on draft previews, so Article, AboutPage and ContactPage must be verified on published pages.** |
| Links | **PASS** | Every internal link resolves to a launch URL, and every deep anchor exists on its target page, including all `#sN`/`#pN` citations. No links to `/guides/` and no email links. The PC-04 GD-16 references are included because GD-16 publishes in the same release. |
| Redirects | **PASS (staged)** | 11 Rank Math rules from architecture §F.2: 8 × 301 and 3 × 410. **All are INACTIVE until deployment.** `/pricing/` is the 301 that goes live together with GD-16 (PC-04). |
| Responsive QA | **PASS** | 66 renders (22 pages × 1366 / 820 / 390px): all return 200 and none has horizontal overflow. Tables scroll inside their wrappers. |
| Accessibility QA | **PASS with 1 non-blocking note** | One H1 per page; H2 order matches the records on all 22. Focus is visible everywhere, including the header nav. A skip link is present. Every image has alt text. Form fields are labelled, with required fields marked and errors announced. Contrast for all locked token pairs is 5.34:1 to 13.16:1. **Note:** the HFE nav gives each parent item two tab stops (plugin quirk). **No formal WCAG claim.** |

---

## Implementation fixes made (spec preserved)

1. **Container CSS classes.** Containers use `css_classes`, not `_css_classes`, so the header and footer styles now apply.
2. **Header CSS.** Header and footer styling is done with the locked tokens through WordPress Additional CSS, because the HFE free nav and site-title widgets expose no style controls.
3. **Mobile overflow.** The HFE dropdown widened the page; fixed with CSS that positions the panel under the header at full width.
4. **Mid-line builder notes.** These leaked on GD-02, 10 and 15 and are now stripped. The PC-04 notes are applied because GD-16 launches in the same release, which includes adding GD-15's "What it costs" sentence.
5. **Table cells.** A note-stripping pattern was removing `**[S1]**` citations inside cells; fixed.
6. **Anchor slugs.** Apostrophes are now dropped (`how-to-identify-your-dogs-coat`, `signs-its-time-to-stop-and-see-a-vet`) to match the records' CSS IDs.
7. **GD-18 heading count.** The copied "How this guide works" block uses a styled label instead of an H2, so GD-18 keeps its 6 spec H2s.
8. **Rank Math front end.** It needed `rank_math_registration_skip` set before it would output breadcrumbs and meta.
9. **Form button color.** The WPForms submit button is restyled to the locked action color.
10. **Must-use plugin `gd-site-rules.php`.** It (a) switches off WPForms 2.x form analytics (data minimization; GD-21 says no analytics) and (b) applies the schema rules above.

## PRIVACY FACTS (verified basis for GD-21)

| Item | Verified behavior |
|---|---|
| Contact form | WPForms Lite 2.0.2.1 (form 88). Fields exactly per GD-20 §F. A test submission showed a confirmation, and **no message is stored in the WordPress database** (no entries table in Lite; checked logs, options, posts and postmeta). Lite Connect (cloud backup) is off. |
| IP / user agent | The form records neither. The analytics throttle that hashed IPs is disabled with WPForms analytics. |
| Email delivery | **Notifications are OFF. No inbox has been supplied (O-1). Submissions currently go nowhere.** |
| Spam filtering | WPForms built-in honeypot and anti-spam token, processed on the site. No third-party CAPTCHA. |
| Cookies | An anonymous page load sets **no cookies**. WPForms, Elementor and HFE front ends set none; WordPress login cookies apply to administrators only. **Re-check anonymously on the published pages.** |
| Analytics | None. Site Kit is deactivated; WPForms analytics is off. |
| Hosting/CDN | Hostinger; pages are served through Hostinger's CDN (`Server: hcdn`, Frankfurt edge). **Server-log fields and retention are not yet confirmed (V-6).** |
| Comments | Closed on all 22 pages; the site default is now closed. |
| Third-party requests | Fonts are self-hosted; images come from the media library; no embeds. |

**GD-21 resolved from these facts:** V-1, V-2 (form part), V-3, V-4, V-5 and V-8, plus hosting; O-3 was confirmed by the owner.
**Still unresolved (shown as ⟦⟧ in the draft):** V-6 (server-log fields and retention), V-7 (email provider), O-2 (retention), with the effective date set at publication.

## OPEN ITEMS

| # | Item | Blocks | Owner action | Builder action |
|---|---|---|---|---|
| O-1 | **Contact-form inbox** | **Launch of GD-20** (the form discards submissions) | Supply the inbox | Enable WPForms notification to it; run a delivery test; name the email provider in GD-21 (V-7) |
| O-2 | **Message retention period** | **GD-21 publication** | Decide the period | Fill "How long we keep it" |
| V-6 | Hostinger server-log fields and retention | **GD-21 publication** | (Hostinger account info, if available) | Confirm with Hostinger and fill both V-6 statements, or remove the log sentences if no logs are kept |
| O-5 | `hostinger` and `fileorganizer` plugins weren't in the owner's keep or deactivate lists | No (left active, untouched) | Decide keep or deactivate | — |
| A-1 | HFE nav double tab stop on parent items | No | — | Optional: replace with a simpler accessible menu later (design change request) |
| D-1 | Schema graph (Article, AboutPage, ContactPage), canonicals and sitemap can only be verified on published pages | No (verify at deployment) | — | Post-publish QA |

## Deployment checklist (for when it's authorized)

1. Resolve O-1, O-2 and V-6, then rebuild GD-21 with no ⟦⟧ left (`qa.py` fill-ins = 0).
2. Replace the "Updated" date token with the publication date, then rebuild and redeploy (`wp_build.php`).
3. Publish the 22 pages. Set Settings › Reading to a static front page = ID 38 (GD-00), with no posts page.
4. Trash the "Hello world!" post and the draft "Elementor #7" (no Posts at launch; both can be restored).
5. Switch the HFE header and footer targeting from the 22 specific pages to Entire Website.
6. Activate the 11 Rank Math redirects (`/pricing/` 301 together with GD-16). Flush rewrites and regenerate the sitemap.
7. Purge LiteSpeed and the CDN, then run post-publish QA anonymously:
   - status codes;
   - canonicals;
   - schema graph;
   - cookies;
   - redirects (no chains or loops);
   - a sitemap with only the 22 pages.

## DEPLOYMENT STATUS

**DEPLOYED 2026-10-05** (see the readiness doc, "DEPLOYED" section). Earlier status: **NOT READY.** The build is complete (22/22) and QA passes, but the contact form has no inbox, and the privacy policy has three unresolved facts (retention, server logs, email provider). Publishing now would put a non-working form and an incomplete privacy policy live.

---

## Update: DS-OD-06 applied (2026-10-05)

**Owner decision:** palette B "Copper & Espresso", Literata (headings and text) and Source Sans 3 (UI). Recorded as DS-OD-06 in the design-system decisions document.

**Applied:**
- `make_kit.py` → kit 15, retitled "Grooming Dogs Kit (DS-OD-06 2026-10-05)". Adds the `gdshine` color (#E3A33B, decorative only).
- `site.css` → Additional CSS (post 16).
- Both pushed with `apply_ds06.php`.

**Backup:** `db-20261005-155719-pre-palette-B.sql.gz`, plus copies of the kit 15 settings and the custom CSS. (`wp db export` writes an empty file on this host, so the backup used mysqldump.)

**QA (admin preview):**

| Check | Result |
|---|---|
| Renders | 66/66 return 200 (22 pages × 1366/820/390) |
| Horizontal overflow | None |
| Fonts | Literata and Source Sans 3 served locally (`uploads/elementor/google-fonts`); no Google requests; no Inter |
| Computed colors | Match DS-OD-06 |
| `qa.py` | Unchanged: 1 H1 per page, H2 counts as before, 0 fill-ins. The same 19 schema items only appear after publishing (D-1). |
| Mobile menu and contact form | Checked visually |

Report with screenshots: https://claude.ai/artifact/EFHentjPfKSFFRm5FPNvjx. Check scripts: `fontcheck.py`, `menucheck.py`.

**Follow-up (owner-approved, same day):**
- **Dark espresso header** (`wp_shell.php` + `site.css`).
- **H1 key-phrase highlight** on all 22 pages (`h1-highlight.json`, `apply_h1hl.php`, via the Elementor document API). All pages stay drafts.
- **Backup:** `db-20261005-161521-pre-header-h1.sql.gz`.
- **QA:** 66/66 renders return 200 with no overflow; `qa.py` is unchanged.
- **Defect found and fixed:** on phone/tablet, parent items in the open menu were cream on white. They're now espresso, via a higher-specificity rule for the panel.


---

## Guide enhancements: GD-04 pilot (owner-approved 2026-10-05)

**Scope:** prototype ideas 2, 4, 6, 7, 8 and 9 on **GD-04 only**. Ideas 1, 3 and 5 were not implemented.
**Backup:** `db-20261005-183620-pre-guide-pilot.sql.gz`.

**Files:**
- `gd-guide-pilot.php` (mu-plugin, loads assets on page 42 only via `gd_guide_pilot_ids()`)
- `gd-guide/gd-guide.css` and `gd-guide/gd-guide.js` (local; about 7.4 KB transferred)
- `wp_guide_pilot.php`:
  - styling-hook classes on GD-04's 5 boxes and the closing band;
  - pilot footer **HFE 143** targeted to post-42;
  - site footer 82 now **excludes post-42**.
- `convert.py` emits the same `gd-box--*` / `gd-band` classes for future builds.
- `wp_shell.php` keeps existing exclusions.

**QA:**
- `seo_snapshot.py --diff`: GD-04 and GD-05 are **IDENTICAL** to the baseline for title, meta, canonical, robots, OG title, breadcrumb, schema (excluding dateModified), headings and all server-rendered copy.
- `pilotqa.py`: **58/58** checks across 3 widths, keyboard, touch, back-links, copy-link, reduced motion, contrast, network/cookies and the GD-05 control.
- `pilotperf.py`: same request count as the control; CLS 0.021.

**Rollback:**
- Delete `mu-plugins/gd-guide-pilot.php`.
- Trash HFE 143.
- Clear the `ehf_target_exclude_locations` meta on 82.

The box classes are inert without the CSS.


---

## Guide roll-out + skip link + dateModified (owner-approved, 2026-10-05/06)

**Skip link:**
- **Problem:** HFE already printed `<a class="hfe-skip-link" href="#content">`, but Elementor full-width pages had no `#content`, so the link went nowhere.
- **Fix:**
  - `gd-site-rules.php` v1.3.0 rule (6) wraps the page's own content in `<main id="content" class="gd-main" tabindex="-1">` (a real main landmark; no JS).
  - `site.css` restyles `.hfe-skip-link:focus` with kit tokens.
- **QA:** `skipqa.py`, 54/54 at 1366/820/390.

**dateModified:**
- **Finding:** the pilot save (styling classes only; copy verified identical) moved GD-04's `post_modified` from 17:26:37 to 18:36:24.
- **Action:** restored to 2026-10-05 17:26:37, the pre-pilot value in backup `db-20261005-183620`, equal to datePublished. The roll-out script restores `post_modified` after every style-only save.
- **Result:** all 22 pages report dateModified = their 17:26 content date. The visible "Updated" date is unchanged.

**Roll-out:**
- **Guide plugin:** `gd-guide.php` (replaces `gd-guide-pilot.php`; guide pages = `_gd_page_id` GD-01 to GD-17) and `gd-guide/{css,js}`, generalised and source-aware. `wp_guide_rollout.php`: 152 styling-hook classes on GD-01 to 17, with `post_modified` kept.
- **Footer:** `footer_v2.php` is now the single site-wide footer 82. The pilot footer 143 was trashed and the exclusion cleared. `wp_shell.php` uses `footer_v2.php`, and the footer CSS lives in Additional CSS.
- **Backup:** `db-20261005-194833-pre-guide-rollout.sql.gz`; pilot files kept in `pilot-files-*`.

**Feature omissions (by design):**
- GD-00 and GD-18 to 21 are not guides: no guide UI; they get the footer and skip link only.
- GD-17 has no sources: no source previews, section sources, back-links or source count. It already has its own jump list, so there's no collapsed contents list on small screens; the desktop contents column is kept.
- Contents appears only with at least 3 H2s, and section-source lines only where a section cites.

**QA:**
- `rolloutqa.py`: 1030/1030 checks on all 22 pages × 3 widths, plus keyboard, touch, reduced motion, contrast, network and cookies.
- `snap_all.py`: SEO and copy IDENTICAL on all 22 pages.
- `deploycheck.py`: 0 issues.

**Defects found and fixed:**
1. Adjacent markers share one `<sup>` (GD-05, 10, 12, 14, 15, 16), so Tab skipped past the preview. The preview is now inserted right after the activated marker.
2. GD-17's collapsed contents duplicated its own jump list; it's now omitted there.

**Remaining issue, NOT caused by the roll-out (left untouched, out of scope):**
- GD-10: CLS 0.179 from the image widget. It's identical with the guide JS blocked.
- Home: CLS ≈ 0.21 from the hero container; the home page loads no guide assets.


---

## Owner decisions 2026-10-06: sources, tagline, focus keywords, site icon

- **Sources list collapsible** (guides with sources: GD-01 to GD-16):
  - The bottom list is now `<details id="sources">` with the summary "Sources (N)".
  - Every link to a source or to `#sources` opens it first: "See all sources", section-source lines, contents, the byline count, and deep links like `#s1`.
  - Source markers still open their preview card. Without JS the list stays open as published.
  - GD-17 has no sources and is unaffected.
- **Tagline:** "Practical dog grooming, explained for owners" (home H1, existing copy). No title, meta or schema changed on any page.
- **Focus keyword:**
  - GD-04 set to "how to bathe a dog" from its production record. The build had missed it because the record lists it as a bullet, not in a table. Its Article schema now carries `keywords`, like the other guides.
  - GD-00 and GD-18 to 21: left empty (owner decision; the records define none).
- **Titles, SEO titles, meta descriptions and slugs:** already present on all 22 pages from the locked records. Not regenerated.
- **Site Icon:** three candidates (`site-icon/`); awaiting owner choice. Logo stays a text wordmark (DS-OD-03).
- **QA:** `rolloutqa.py` 1174/1174; SEO/copy identical; `deploycheck.py` 0 issues. Backup: `db-20261005-212027-pre-tagline-sources.sql.gz`.
- **Copy finding (not changed):** GD-16's price-sources label reads "(all accessed October 5, 2026; links are rel="nofollow", citations only)". The "links are rel="nofollow"" part looks like a builder note in published copy and needs an owner decision.


---

## Owner decisions 2026-10-06 (later): icon, GD-16 note, home redesign, menu

**Site Icon:** B (honey dot on espresso), attachment 166.

**GD-16 label:** now "(all accessed October 5, 2026; citations only)". The `nofollow` stays on all 11 price links. A real copy change, so post_modified updated. Record addendum added.

**Home redesign** (`build_home.py` + `home_parts.py`, deployed by `wp_home_redesign.php` via the document API; the page stays published):
- **Assets:** mu-plugin `gd-home.php` (front page only) loads:
  - `gd-home/gd-home.css` and `gd-home.js` (path draw, icon animations; nothing under reduced motion);
  - `gd-carousel.js` (17.5 KB, about 7 KB compressed) and `gd-carousel.css`.
- **Carousel build:** esbuild bundle of the unmodified React Bits CircularCarousel source (`gd-home/src`, license header kept), using WordPress core React 18.3.1 (handles `react`, `react-dom`). No external requests.
- **Carousel fixes:**
  - The ring repeats the 4 items to 12 (4 cards collapse into overlapping strips), and the counter is hidden.
  - Elementor's `.elementor img { max-width:100% }` was squeezing the card slices; overridden for the carousel only.
- **Backup:** `db-20261005-225725-pre-home-redesign.sql.gz`.

**Menu and submenus:**
- "Start here" and its 3 children were removed from menu Primary (the pages are unchanged).
- Dark submenus (Brand Dark) on desktop and in the mobile/tablet panel (`site.css`).

**QA:**
- `homeqa.py` 35/35:
  - render, network and cookies at 3 widths;
  - carousel mount, keyboard Enter and pause;
  - dark menus;
  - reduced motion;
  - no React on other pages.
- `rolloutqa.py` 1174/1174 and `deploycheck.py` 0 issues.
- `snap_all`: only GD-00 copy differs, with words regrouped into cards plus the two approved lines and the screen-reader "Step n:" text. Headings, SEO and schema are unchanged.

**License:** React Bits is MIT + Commons Clause. Use as part of a website, including a site that is sold, is permitted; the component itself must not be sold or redistributed. The notice is kept in the source and the bundle.
