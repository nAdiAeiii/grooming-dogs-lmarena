# The Practical Grooming Desk: design decisions

Concept prototype, independent of the live grooming-dogs.com site. Sample content throughout.

## How the directions were generated

- **taste-skill** (`design-taste-frontend`, `scripts/draw.mjs`, sector `education`, seed 1260485790)
  dealt three compositions: *borrowed category*, *sentence as layout*, *one motif*.
- **impeccable** (`new-work` flow, `concept-seed --scope direction --mode read`, seed reference
  `seed:52b86fc87a0e10b2`) assigned candidate 3 of a seven-item world list drawn from the audience's
  life: field-guide key, recipe card, workshop pegboard / shadow board, timetable, salon intake card,
  dog-show catalogue, breed-standard booklet. The roll ran degraded (impeccable.style unreachable from
  the build sandbox), so no catalogue challengers were dealt.
- **emilkowalski** (`emil-design-eng`, `review-animations`) set the interaction rules: what may
  animate at all, durations, easing, press feedback, touch hover gating.

## Three directions, compared

| | A. The Key | B. The Sentence | C. The Shadow Board |
| --- | --- | --- | --- |
| Source | taste *borrowed category* + impeccable world 1 (field-guide key) | taste *sentence as layout* | impeccable assignment (world 3) + taste *one motif* |
| Layout logic | One question per screen, branching to a guide | A poster-scale question whose blank is the dog's coat; answer sheet beside it | The tool wall is the page; guides hang off tools |
| Interaction | Step through 3–4 yes/no questions | Two taps: coat, task; answer updates in place | Pick a tool, see where it fits and where it does not |
| 1. Speed to an answer | 3/5 (several steps, good when coat unknown) | **5/5** (two taps, answer on first screen) | 2/5 (tool-first, but people arrive with a task) |
| 2. Clarity of comparison | 2/5 | 3/5 | **5/5** (side by side, by coat) |
| 3. Moving between guides | 4/5 (branches) | 4/5 (answer links on) | 3/5 |
| 4. Editorial distinctiveness | 4/5 | 4/5 | 4/5 |
| 5. Mobile | 4/5 | **5/5** (thumb chips, stacked) | 3/5 (wide board needs care) |
| 6. Accessibility, readability | 4/5 | 5/5 (native buttons, reading column) | 3/5 (spatial, needs a list fallback) |
| 7. Build complexity | medium | medium | high |
| **Total** | 25 | **31** | 24 |

## Decision

**B leads, C is fused in as the comparison system.** The Sentence answers fastest and survives a phone;
the Shadow Board is the clearest way to compare tools, so it becomes the second chapter and the page's
signature, sharing the coat chosen in the sentence. A's key survives only as the short coat descriptions
on the coat chips (the "not sure which coat?" help).

- **Idea:** on this page the dog's own coat becomes the missing word in the sentence. A drawn swatch of
  the coat sits in the headline where the coat's name would be, and everything below re-reads itself
  for that coat.
- **Live thing:** the two-tap answer sheet (coat + task), backed by a plain list of guides when script
  is off.
- **Signature:** the shadow board, a dark workshop panel where each tool hangs in its own filled
  silhouette; tools that suit the chosen coat light up in mint, the rest step back.

## Rules the skills imposed (and where they overrode habit)

- taste house rules: no eyebrows, no tiny tracked caps, no 01/02/03, no hairlines, no gradients, no
  shadows at rest, no card grids, two typefaces (Big Shoulders, Public Sans), one accent (mint).
- impeccable *read* mode: the world owns the frame (masthead, board, section openers); the reading
  column stays calm, at a real measure, with standard navigation.
- emil: selection changes are instant with a short cross-fade (frequent action), section entrances
  run once, press feedback scale(0.97) at 160ms, custom ease-out, hover effects gated to fine pointers,
  everything off under `prefers-reduced-motion`.

## Honest gaps

- No real photographs: the open collections could not be reached from the build sandbox, so coat
  swatches and tool silhouettes are drawn in code. taste-skill's picture floor (four real pictures)
  is therefore not met; this is reported, not hidden.
- All guide text is sample content written for this prototype and is not professionally reviewed.
