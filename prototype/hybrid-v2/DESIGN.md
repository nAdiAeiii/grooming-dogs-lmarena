# Hybrid V2 design system

One system for the publication and the desk. Tokens live at the top of `styles.css`; this file explains them.

## Direction

- **Composition:** taste-skill *split stage* (seed 1671326063, dealt 2026-10-16; palette proportions kept, colours adjusted for a daylight reading scene): a scrolling publication
  beside a sticky desk, meeting at a clean vertical edge.
- **World:** impeccable roll `seed:ea29c046952b5b18` (degraded, no challengers), candidate 3: the salon intake
  card. The desk is a card the reader fills in; ruled fields belong to it because it is a form.
- **Motion:** emil-design-eng. Frequent actions are near-instant; only section entrances, run once, take longer.

## Colour roles

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#efefeb` | Publication ground (pale concrete) |
| `--paper-2` | `#e4e4df` | Tone step for bands and table heads (no lines between surfaces) |
| `--ink` | `#1c1c1c` | Body text and headings on paper |
| `--muted` | `#5b5c57` | Secondary text on paper (6.3:1) |
| `--link` | `#40593f` | Links and active marks on paper (deep sage, 7:1) |
| `--desk` | `#1c1c1c` | Desk ground (charcoal) |
| `--desk-2` | `#2a2a29` | Desk tone step |
| `--desk-ink` | `#f1f1ef` | Text on the desk |
| `--desk-muted` | `#a8a9a3` | Secondary text on the desk (7.6:1) |
| `--sage` | `#8fa68e` | The one accent: the desk's action and active states |
| `--card` | `#f9f9f9` | Intake-card stock on the desk |
| `--alert` | `#8f3b25` | Semantic only: "see a vet" lines (never decorative) |

## Type

- **Display:** Imbue (condensed high-contrast serif), uppercase, optical sizing on, leading 0.9.
- **Text:** Albert Sans 400/500/600.
- **Scale, six steps:** small 15 · body 16–19 · lead 20–26 · sub 28–40 · head 36–64 · display 42–122 (fluid; the display is sized to its column with container units so the H1 always sets in two lines).
- Headlines two lines at most at every width; running text 45–70 characters.

## Space and grid

- Spacing scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 160 px.
- Desktop (≥ 64em): publication 58%, desk 42%, desk `position: sticky; top: 0; height: 100svh`.
- Below 64em: one column. The desk moves above the publication as an intake card; a compact search bar stays in the
  masthead so search is never more than one tap away.
- Margins 16–40px; section gap 96–160px; corners square everywhere (radius 0).

## Components

| Component | Rule |
| --- | --- |
| Masthead | Wordmark, the four real menu items, a search button (`/` focuses search). |
| Intake card | One ruled field (the search input); results and preview separate by space, not lines. |
| Preview | Published short answer, sections as deep links, "readers go next" from the real link graph, open-page link. |
| Contents row | Guide title, first line of its short answer, chapter marker by position not number. Pointing at a row previews it on the desk. |
| Comparison | Tabs over real published tables; source link to the exact section anchor. |
| Symptom finder | Real "symptoms at a glance" rows; "see a vet if" in the alert role. |
| Coat lens | Real identification rows → that coat's real schedule row and starter kit. |
| Buttons | Square, flat, one fill (sage on the desk, ink on paper). Press: scale 0.97, 140ms. |

## Responsive rules

- Every row that holds text wraps; tables restack into label/value pairs under 40em.
- Touch targets ≥ 44px; hover effects only behind `(hover: hover) and (pointer: fine)`.

## Motion

- Desk preview swap: cross-fade 160ms, ease-out (frequent, so short). The desk follows the reading: each section puts its source guide on the desk, paused for 4s after the reader picks something.
- Section entrances: once, from a visible state (opacity 0.35 → 1, 20px rise), 600–800ms.
- No motion for keyboard-driven changes beyond the cross-fade; everything off under `prefers-reduced-motion`.
- Only `transform` and `opacity` animate.
