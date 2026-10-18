# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Wireframes and prototype as static HTML/CSS/JS (user's choice for the prototypes, 2026-10-16), published
as private claude.ai artifacts. Files stay local and uncommitted unless the user authorizes a commit.

## Users

Dog owners grooming at home, usually mid-task or just before it: a dog that needs a bath, a mat they
just found, nails clicking on the floor. They arrive with one concrete question, often on a phone.
Secondary: owners deciding whether to buy a tool or book a groomer, and owners worried that grooming
caused a problem.

## Product Purpose

The grooming-dogs.com homepage, refined: the live Editorial Concept (the published home and its
2026-10-06 owner redesign) combined with the Practical Grooming Desk's useful features: search,
tool and method comparisons, and clear paths between related guides. Success: a visitor finds a usable
answer for their dog's coat and task in a few taps, sees the trade-offs, and knows when a groomer or
vet should take over.

## Positioning

A practical owner's guide, not a salon, shop or vet. Advice changes with two facts, the dog's coat and
the task, and every safety limit sits beside the advice it limits.

## Operating Context

Home grooming: bathrooms, kitchens, floors; brushes, combs, rakes, clippers, grinders. Short sessions.
Owners compare methods (clip or grind nails; salon, mobile or home) before buying or booking.

## Capabilities and Constraints

- Isolated from production: never change the live site, its CMS, published content or URLs.
- Only the 22 published pages exist (BUILD/out build records, PRODUCTION records). Links use their
  real URLs and section anchors. No invented pages, answers or claims.
- The live site has no search; the prototype searches a static index of the published pages.
- Restructuring the homepage is allowed (user, 2026-10-17): sections may merge and reorder, H2 texts may
  be rewritten, as long as every real page and link stays reachable.
- No veterinary authority; health signals route to "see your vet".
- The site's photos cannot be fetched from this environment; they are referenced by published key and URL.

## Brand Commitments

Name: Grooming Dogs (grooming-dogs.com). Live identity (DS-OD-06): espresso brand, copper action,
honey shine; Literata and Source Sans 3. User, 2026-10-17: keep espresso and copper as the base, add
two or three accents so the palette is more varied. Voice: plain, calm, practical. Owner promise: "Find
grooming answers quickly. Compare tools and methods clearly. Move naturally between related guides."
Not a blog, directory, storefront or dashboard. "We're a guide, not a grooming salon, and we don't give
veterinary advice."

## Evidence on Hand

- Copy and tables of the 22 published pages (BUILD/out/*.json; prototype/hybrid-v2/content.js).
- Verified, credited photos listed in BUILD/images.tsv (Pexels; files live on grooming-dogs.com).
- Tool drawings from Hybrid V1 (prototype/hybrid-v1/art.js).
- No testimonials, statistics, partners or review claims; do not add badges or counts.

## Product Principles

1. Coat and task first: advice is specific to both, and coat appears only where it changes the advice.
2. Every answer ends in a next step to a real page.
3. Trade-offs shown as published, with their limits.
4. Safety limits sit beside the advice, never only in a footer.
5. Fast on a phone, usable one-handed.

## Accessibility & Inclusion

WCAG 2.1 AA as the target: contrast, keyboard operation, visible focus, reduced motion, labelled controls.
