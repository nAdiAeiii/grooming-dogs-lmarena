# GROOMING-DOGS.COM — Design System Owner Decisions

**Status:** FINAL / LOCKED (Site Owner, 2026-10-05)
**Applies to:** GD-00 to GD-21 and future pages, unless superseded by a new owner decision
**Implementation:** WordPress + Hello Elementor + Elementor Free + Header Footer Elementor
**Source:** transcribed from the owner's message of 2026-10-05 ("DESIGN SYSTEM OWNER DECISIONS"). **Resolves** spec R12/PC-01 and architecture OD-J ("visual identity is decided in the design phase").

**Legacy kit rejected:** `#FDE02C`, `#FEB82A`, Comfortaa, Proza Libre, and the legacy header, footer, card, button styles and hierarchy. The legacy kit (Elementor kit ID 9) may remain only as a historical artifact. **No launch page may depend on it.**

---

## DS-OD-01 — Color system (LOCKED)

| Token | Value | Role |
|---|---|---|
| color.brand | #17324D | Brand; H1–H3; primary navigation |
| color.brand-dark | #102538 | Dark hover / strong emphasis |
| color.surface | #FFFFFF | Primary content surface |
| color.surface-soft | #F5F7F8 | Secondary sections / cards |
| color.surface-warm | #FBF8F3 | Occasional editorial warm section (sparingly) |
| color.text | #263238 | Body text (never pure black) |
| color.text-muted | #5B6870 | Secondary text / metadata |
| color.border | #D9E0E4 | Borders / dividers (subtle) |
| color.link | #1E5FA7 | Text links (distinguishable without hover) |
| color.link-hover | #154A82 | Link hover |
| color.action | #1E5FA7 | Primary buttons (white text) |
| color.action-hover | #154A82 | Button hover |
| color.focus | #1E5FA7 | Keyboard focus |
| color.success | #2F6B45 | Success state only |
| color.warning | #8A5A00 | Caution state only |
| color.error | #A33A32 | Error / validation only |

**Rules:**
- Brand is never a full-page background.
- No extra button colors.
- White is the main surface; soft gray separates sections; warm is used sparingly.
- Semantic colors are never decorative.
- No new colors, no gradients, no yellow/orange.

## DS-OD-02 — Typography (LOCKED)

**Font stack:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. No second display font.

| Style | Weight | Desktop | Tablet | Mobile | Line height |
|---|---|---|---|---|---|
| H1 | 700 | ~48px | ~40px | ~34px | 1.1–1.2 |
| H2 | 700 | ~32px | ~29px | ~26px | ~1.2 |
| H3 | 700 | ~24px | — | ~21px | ~1.25 |
| Body | 400 | 17px | — | 16px | ~1.6 |
| Lead | 400–500 | 19px | — | 18px | ~1.55 (sparingly) |
| Small / metadata | — | 14–15px | — | — | ~1.5, color #5B6870 |

**Rules:**
- No all-caps headings.
- No decorative type.
- No oversized display type.
- Desktop prose measure is about 60–75 characters.

## DS-OD-03 — Shared shell (LOCKED)

- **Shell:** Header, main navigation, main content and footer, consistent on every page. The homepage hero may be stronger, but it uses the same header and footer.
- **Header (desktop):** wordmark left; the five-item primary nav; a clear current-page state; restrained spacing; a white or very light surface; a subtle bottom border if needed. No promotional banner.
- **Header (mobile):** wordmark; a compact menu trigger; an accessible drawer or dropdown; no horizontal overflow. Same design language as desktop.
- **Navigation:** the architecture's five items. No sixth item. No Articles, Blog, Reviews, Shop, Products or Groomers. `/guides/` inactive.
- **Footer:** quieter than the header; a dark brand surface or restrained neutral treatment; accessible contrast. Architecture-approved support links: About, Editorial Policy, Contact, Privacy Policy, Glossary. No filler categories.
- **Logo:** don't invent one. Use a text wordmark until a real logo is supplied. No Organization logo in schema.

## DS-OD-04 — Components and interaction (LOCKED)

- **Primary button:** #1E5FA7 background; white text; medium or bold weight; radius about 6px; generous horizontal padding; a comfortable touch target. Hover #154A82. No scale animation. Secondary actions are text links or outlined buttons only.
- **Cards:** only where they improve grouping. White or #F5F7F8 surface; #D9E0E4 border; radius about 8px; a restrained shadow or none. No heavy shadows, no dashboard cards, no equal weight for everything.
- **Homepage hierarchy (GD-00):** Hero > Start here > Situations > Tasks (compact) > Professional > Trust > quieter utility links. Never 20 equal cards.
- **Callouts:** only for safety boundaries, cautions and concise editorial notes. The warning token is used only for genuine caution.
- **Tables:** readable, restrained, accessible; scroll horizontally on narrow screens.
- **FAQ:** Elementor Accordion only where a record specifies one; a single schema source; no invented questions.
- **Forms:** the approved implementation; clear labels; no decorative fields.
- **Images:** verified only; approved alt text; no failed assets; no placeholders. A page may have no image.
- **Icons:** sparing and optional. No universal icon system; no decorative icons in place of headings.
- **Interaction:** subtle color and underline changes, button transitions, accordion toggles. No parallax, large transforms, autoplay carousels or unexpected motion.

## DS-OD-05 — Spacing, layout and responsive (LOCKED)

- **Container:** maximum about 1200px, centered, with generous side padding.
- **Prose measure:** about 680–760px.
- **Spacing scale:** 8 / 16 / 24 / 32 / 48 / 64 / 80px. No one-off values.
- **Section spacing (desktop):** compact 32–48px; standard 56–64px; major 72–80px. Mobile reduces proportionally.
- **Grids:** desktop 2–4 columns; tablet 2; mobile 1. Never cram 6 or more cards.
- **Homepage:** an asymmetric hierarchy. The hero is strongest; Start here second; Situations scannable but below the hero; Tasks compact; Professional, Trust and Utility progressively quieter.
- **Responsive:** tablet reduces type, padding, columns and spacing (not a straight scale-down). Mobile is single column, 16px minimum body text, touch targets, no horizontal scroll, compact navigation.
- **Breakpoints:** Elementor/theme defaults. Custom breakpoints only for a concrete failure.

## Design language and accessibility

- **Design language:** Practical · Editorial · Calm · Trustworthy · Modern · Uncluttered. Not a pet shop, clinic, salon, SaaS dashboard, affiliate site or generic blog.
- **Accessibility:** sufficient contrast; visible focus; meaningful link states; semantic headings; readable text; labelled forms; touch-friendly controls; no color-only information; no hover-only essentials. **No formal WCAG claim without an audit.**

## Elementor implementation (owner-specified)

- **Global colors:** Brand, Brand Dark, Surface, Surface Soft, Surface Warm, Text, Text Muted, Border, Link, Link Hover, Action, Action Hover, Focus, Success, Warning, Error.
- **Global typography:** H1, H2, H3, Body, Lead, Small. No extra global styles.

## Governance

- **The builder MAY:** implement tokens and global styles; build the shared header and footer; apply components; adjust responsive spacing; fix implementation defects.
- **The builder MAY NOT:** choose new colors or fonts; redesign the header or footer; add button families or card systems; add a primary-nav item; create a new identity; reinterpret the architecture; replace the editorial language with a commercial UI.
- **Deviations:** report as **DESIGN CHANGE REQUEST — OWNER DECISION REQUIRED**. Not implemented until approved.

| Decision | Status |
|---|---|
| DS-OD-01 Color | LOCKED |
| DS-OD-02 Typography | LOCKED |
| DS-OD-03 Shared shell | LOCKED |
| DS-OD-04 Components & interaction | LOCKED |
| DS-OD-05 Spacing, layout & responsive | LOCKED |

**GLOBAL DESIGN SYSTEM: CLOSED FOR LAUNCH**

---

## DS-OD-06 — Palette B "Copper & Espresso" + Literata (LOCKED, owner, 2026-10-05)

**Source:** owner messages of 2026-10-05: Literata approved; "پالت دوم یعنی B" (palette B), chosen from the preview at https://claude.ai/artifact/KdsNjnauCNrLHP2FcpiZ92.
**Reason given by the owner:** the previous palette and type looked too close to beagle-puppy (navy + Inter); the site should feel warmer, with more shine, and the font should be distinctive and suit long-form reading.
**Supersedes:** the color values in DS-OD-01, the font family in DS-OD-02, and DS-OD-01's "no gradients, no yellow/orange" rule, limited to the exceptions below. Sizes, line heights, spacing, layout, the 6px button radius and every other rule stay as they are.

| Token | Old | New |
|---|---|---|
| color.brand (H1–H3, footer) | #17324D | **#3A2318** |
| color.brand-dark | #102538 | **#28170F** |
| color.surface | #FFFFFF | **#FFFCF7** |
| color.surface-soft | #F5F7F8 | **#F7EFE4** |
| color.surface-warm | #FBF8F3 | **#FBE7CF** |
| color.text | #263238 | **#2B2420** |
| color.text-muted | #5B6870 | **#6B5E55** |
| color.border | #D9E0E4 | **#E6D8C8** |
| color.link / action / focus | #1E5FA7 | **#A84A24** |
| color.link-hover / action-hover | #154A82 | **#8A3A1A** |
| color.shine (new) | — | **#E3A33B**, decorative only, never for text |
| success / warning / error | unchanged | #2F6B45 / #8A5A00 / #A33A32 |

**Typography:** **Literata** for H1–H3, lead and body text. **Source Sans 3** for small text, captions, buttons, navigation, breadcrumbs, tables, sources and forms. Inter is retired.

**Shine (allowed exceptions):**
- honey underline on link hover;
- honey glow behind buttons on hover;
- a 2px honey line under the header;
- a honey dot before the wordmark;
- one faint honey radial sheen in the top corner of each page's first section. This is the only gradient allowed.

Honey is never used as a text color or a button fill.

**Contrast (AA 4.5:1):**
- text on surface: about 15:1;
- link on surface: 5.7:1;
- link on surface-soft: 5.0:1;
- link on surface-warm: 4.7:1;
- button text on action: 5.6:1;
- muted text on surface-soft: about 5.5:1.

**Implementation:** `BUILD/make_kit.py` → kit 15, retitled "Grooming Dogs Kit (DS-OD-06 2026-10-05)"; `BUILD/site.css` → Additional CSS (post 16); `BUILD/apply_ds06.php`. Backup taken first: `~/backups/grooming-dogs/db-20261005-155719-pre-palette-B.sql.gz`, plus the kit 15 settings and custom CSS copies with the same timestamp.
**Header (owner, later 2026-10-05):** **dark espresso header** as in the preview: brand #3A2318 background, cream (#FFFCF7) wordmark and top-level links, honey line underneath. The focus outline in the bar is honey. Submenus and the mobile/tablet panel stay light with espresso text.
**H1 highlight (owner, later 2026-10-05):** one key phrase per H1 is wrapped in `<span class="gd-hl">` (a honey marker band, about 38% opacity). **The H1 wording is unchanged.** The phrases are in `BUILD/h1-highlight.json`; the generators (`convert.py`, `build_home.py`) apply them, and `apply_h1hl.php` patched the existing drafts.
