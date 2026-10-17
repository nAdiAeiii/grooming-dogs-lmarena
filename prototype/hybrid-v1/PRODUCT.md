# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (user's choice, 2026-10-16). No build step; served with `python3 -m http.server`.
The same files are published as an isolated, private live preview. Files stay local and uncommitted
unless the user authorizes a commit.

## Users

Dog owners grooming at home, usually mid-task or just before it: a dog that needs a bath, a mat they
just found, nails clicking on the floor. They arrive with one concrete question, often on a phone,
sometimes with a wet or wriggling dog nearby. Secondary: owners deciding whether to buy a tool or book
a groomer.

## Product Purpose

Hybrid Concept V1 is an independent concept for grooming-dogs.com: an editorial reference that
lets a visitor find a grooming answer quickly, compare tools and methods clearly, and move naturally
from one guide to the next useful one. Success: the visitor reaches a usable answer for their dog's coat
and task in a few taps, understands the trade-offs between methods, and knows when to stop and ask a
groomer or vet.

## Positioning

Answers are organised by the two facts that actually change grooming advice: the dog's coat and the task
at hand. Everything is cross-referenced so an answer always leads to a next step, and safety limits sit
beside the advice rather than in a footer.

## Operating Context

Home grooming: bathrooms, kitchens, floors; brushes, combs, clippers, grinders. Short sessions with
treats. Visitors compare methods (clip vs grind nails, brush types by coat) before buying or trying.

## Capabilities and Constraints

- Concept prototype, independent of the live grooming-dogs.com site, its URLs and its content model.
  Must never be deployed to or alter the production site.
- All guide content is illustrative sample content written for the prototype. It is not existing
  grooming-dogs.com content and has not been professionally validated; the interface must say so.
- No veterinary authority or medical claims. Health-adjacent signals route to "see a vet".
- No network images are reachable from the build environment; imagery is drawn in code.

## Brand Commitments

Name: grooming-dogs.com, Hybrid Concept V1. Visual identity inherited from the live editorial system (DS-OD-06: espresso, copper, honey; Literata and Source Sans 3). Core promise, verbatim from the
owner: "Find grooming answers quickly. Compare tools and methods clearly. Move naturally between related
guides." Not a blog, directory, storefront, or dashboard.

## Evidence on Hand

None: no photographs, testimonials, partners, or statistics. Do not fabricate any.

## Product Principles

1. Coat and task first: advice is always specific to both.
2. Every answer ends in a next step; no dead ends.
3. Show trade-offs honestly; no "best" tool without its limits.
4. Limits are visible where the advice is, not hidden.
5. Fast on a phone, usable one-handed.

## Accessibility & Inclusion

WCAG 2.1 AA as the target (not claimed): contrast, keyboard operation, visible focus, reduced motion,
labelled controls.
