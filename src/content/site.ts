import type { Cluster, LegacyPage } from "./types";

export const SITE = {
  name: "Grooming Dogs",
  tagline: "Practical dog grooming, explained properly",
  domain: "grooming-dogs.com",
  url: "https://grooming-dogs.com",
  /** Honest statement of what this site is — no invented salon, no invented staff. */
  positioning:
    "An independent guide to dog grooming: what to do at home, how often to do it, and when the job belongs to a professional.",
} as const;

export type NavItem = { href: string; label: string; note?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    label: "Start here",
    items: [
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home",
        note: "The full routine, in order",
      },
      {
        href: "/how-often-should-you-groom-your-dog/",
        label: "How often to groom",
        note: "Schedule by coat type",
      },
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types & breeds",
        note: "Start here if you don't know your dog's coat",
      },
      { href: "/grooming-tools/", label: "Tools & supplies" },
      { href: "/glossary/", label: "Grooming glossary" },
    ],
  },
  {
    label: "Grooming tasks",
    items: [
      { href: "/bathing-your-dog/", label: "Bathing & drying" },
      { href: "/brushing-mats-and-shedding/", label: "Brushing, mats & shedding" },
      { href: "/dog-haircuts-and-trimming/", label: "Haircuts & trimming" },
      { href: "/trimming-dog-nails/", label: "Nail trimming" },
      { href: "/cleaning-dog-ears/", label: "Ear cleaning" },
      { href: "/brushing-dog-teeth/", label: "Teeth brushing" },
    ],
  },
  {
    label: "Your dog",
    items: [
      { href: "/puppy-grooming/", label: "Puppies" },
      { href: "/senior-dog-grooming/", label: "Senior dogs" },
      { href: "/grooming-anxious-dog/", label: "Nervous & resistant dogs" },
      { href: "/dog-grooming-problems/", label: "Problems & troubleshooting" },
    ],
  },
  {
    label: "Using a groomer",
    items: [
      { href: "/choosing-a-dog-groomer/", label: "Choosing a groomer" },
      { href: "/dog-grooming-cost/", label: "What grooming costs" },
    ],
  },
  {
    label: "About",
    items: [
      { href: "/about/", label: "About this site" },
      { href: "/editorial-policy/", label: "Editorial & sourcing policy" },
      { href: "/contact/", label: "Contact & corrections" },
      {
        href: "/project-package/",
        label: "Project package & QA",
        note: "Research, architecture and audit documentation",
      },
    ],
  },
];

/**
 * Search-intent clusters and the consolidation decision taken for each.
 * One cluster can map to more than one page ONLY where the underlying task or
 * content requirement differs (e.g. "how often" vs "how to").
 */
export const CLUSTERS: Cluster[] = [
  {
    id: "overview",
    name: "Dog grooming overview / where do I start",
    intent:
      "Informational overview. The searcher wants a mental model of the whole subject before doing anything.",
    decision:
      "One hub page: the homepage. It is the site's front door and its topical summary, not a keyword page. All other clusters are reachable from it in one click.",
    pages: ["/"],
  },
  {
    id: "routine",
    name: "How to groom a dog at home / the full routine",
    intent:
      "Task intent. The searcher is about to do this, today, and wants an ordered procedure, a kit list and safety limits.",
    decision:
      "One pillar page. It owns the end-to-end routine and hands off to task pages for depth, so it never competes with them on their own task terms.",
    pages: ["/how-to-groom-your-dog-at-home/"],
  },
  {
    id: "frequency",
    name: "How often should I groom / bathe my dog",
    intent:
      "Planning intent. The searcher is building a calendar. The answer is driven by coat type, not by breed marketing copy.",
    decision:
      "One canonical page. Bathing frequency, brushing frequency, nail and ear cadence are consolidated here rather than repeated across every task page — otherwise the bathing page and this page would cannibalise each other on 'how often should I bathe my dog'. Task pages cross-link here instead of restating the tables.",
    pages: ["/how-often-should-you-groom-your-dog/"],
  },
  {
    id: "coat-type",
    name: "Coat types and breed-specific grooming",
    intent:
      "Reference intent, two overlapping entry points: 'what coat type is my dog' and 'how do I groom my [breed]'.",
    decision:
      "One reference page covering both. Splitting 'coat types' from 'breed grooming' would produce two pages answering the same question with the same tables. Individual breed pages were rejected: with no first-hand salon data on this domain, dozens of breed pages would be thin rewrites of the same coat-type guidance.",
    pages: ["/coat-types-and-breed-grooming/"],
  },
  {
    id: "bathing",
    name: "Bathing and drying",
    intent: "Task intent — how, with what, and how to dry safely.",
    decision:
      "One task page covering process, product choice, water temperature, drying and the 'how often' cross-link. 'Can I use human shampoo' is answered here and in the FAQ rather than on its own thin page.",
    pages: ["/bathing-your-dog/"],
  },
  {
    id: "brushing",
    name: "Brushing, de-matting and de-shedding",
    intent:
      "Task intent. Brushing, removing mats and reducing shed are the same physical job performed at different severity levels.",
    decision:
      "One task page. A separate 'how to remove mats from a dog' page was considered and rejected — the tools, techniques and safety warnings are identical, and severe matting is a referral case that this page handles explicitly.",
    pages: ["/brushing-mats-and-shedding/"],
  },
  {
    id: "haircuts",
    name: "Haircuts, clipping and trimming",
    intent:
      "Task and comparison intent: how to trim at home, which blade/comb, what cut styles exist, and sanitary trims.",
    decision:
      "One task page. Sanitary trims and paw-pad trimming are sections of it, not separate pages — they are steps within the same job using the same tools. Anal gland expression is mentioned only as a veterinary referral, not as a how-to.",
    pages: ["/dog-haircuts-and-trimming/"],
  },
  {
    id: "nails",
    name: "Nail care",
    intent: "Task intent plus a strong fear component: hitting the quick.",
    decision:
      "One task page, including grinder vs clipper comparison and what to do if the quick bleeds. Frequency tables stay on the schedule page.",
    pages: ["/trimming-dog-nails/"],
  },
  {
    id: "ears",
    name: "Ear care",
    intent: "Task intent, with a large adjacent medical cluster (otitis, head shaking).",
    decision:
      "One task page that teaches the safe cleaning procedure and stops at the clinical boundary. Treatment of infection is explicitly out of scope and referred out.",
    pages: ["/cleaning-dog-ears/"],
  },
  {
    id: "teeth",
    name: "Dental care at home",
    intent: "Task intent: how to brush, what with, and whether alternatives work.",
    decision:
      "One task page. Dental is retained because it appears in every mainstream grooming routine, but anaesthetic dental cleaning and dental disease are referred to a vet.",
    pages: ["/brushing-dog-teeth/"],
  },
  {
    id: "tools",
    name: "Grooming tools and supplies",
    intent:
      "Research intent before purchase: what each tool does and which one fits a given coat.",
    decision:
      "One reference page explaining tool families and matching them to coat type. No product feed, no affiliate links, no 'best of 2026' list — this domain has no verified commerce relationship, so the page is written as buyer literacy rather than as a storefront.",
    pages: ["/grooming-tools/"],
  },
  {
    id: "puppy",
    name: "Puppy grooming",
    intent:
      "Lifecycle intent: when to start, how short the sessions should be, how to socialise the process.",
    decision:
      "One lifecycle page. Kept separate from the anxious-dog page because the underlying job is different: teaching a new association, rather than managing an existing fear.",
    pages: ["/puppy-grooming/"],
  },
  {
    id: "senior",
    name: "Senior and health-compromised dogs",
    intent:
      "Lifecycle intent with a safety dimension: arthritis, mobility loss, lumps, thin skin, incontinence.",
    decision:
      "One lifecycle page focused on physical adaptation and veterinary coordination. Kept separate from the anxious-dog page because the constraints are physical rather than behavioural.",
    pages: ["/senior-dog-grooming/"],
  },
  {
    id: "anxious",
    name: "Nervous, resistant and handling-sensitive dogs",
    intent:
      "Behavioural intent: 'my dog hates the dryer / bites at the clippers / panics on the table'.",
    decision:
      "One page. Muzzle training, cooperative care, counter-conditioning and medication conversations with a vet are consolidated here rather than scattered across task pages.",
    pages: ["/grooming-anxious-dog/"],
  },
  {
    id: "problems",
    name: "Grooming problems and troubleshooting",
    intent:
      "Diagnostic intent: smell, itch after grooming, flaky skin, tear staining, sudden coat change.",
    decision:
      "One troubleshooting page. It is the site's single symptom-indexed entry point, so it must not duplicate the task pages — each symptom routes to the relevant task or to a vet.",
    pages: ["/dog-grooming-problems/"],
  },
  {
    id: "groomer",
    name: "Working with a professional groomer",
    intent:
      "Commercial-informational: what happens in an appointment, how to choose, mobile vs salon vs self-wash, how to complain.",
    decision:
      "One page. Booking functionality does not exist on this domain, so the page is written as preparation and evaluation guidance rather than as a service page.",
    pages: ["/choosing-a-dog-groomer/"],
  },
  {
    id: "cost",
    name: "Dog grooming prices and budgeting",
    intent: "Commercial-informational: what should I expect to pay, and why do quotes differ.",
    decision:
      "Separated from the groomer page. Price queries are a large, distinct cluster with distinct content requirements (price drivers, quoted ranges, budgeting) and merging them would bury the answer. Price figures are attributed to published third-party sources, never presented as this site's own price list — the legacy '$52/month' template pricing was fabricated demo data and is retired.",
    pages: ["/dog-grooming-cost/"],
  },
  {
    id: "terminology",
    name: "Grooming terminology",
    intent:
      "Definitional intent, usually arising mid-task ('what does the groomer mean by a kennel cut?').",
    decision:
      "One glossary page. It keeps jargon definitions out of the task pages, which keeps those pages on-task.",
    pages: ["/glossary/"],
  },
  {
    id: "trust",
    name: "Site trust and accountability",
    intent:
      "Not search-driven. Required because the site makes practical recommendations that touch on health.",
    decision:
      "Three small pages: what this site is, how content is sourced and what its limits are, and a working corrections channel. These replace the legacy team, pricing and contact templates, which displayed placeholder names, invented prices and a demo address.",
    pages: ["/about/", "/editorial-policy/", "/contact/"],
  },
  {
    id: "retired",
    name: "Off-topic legacy fragments (retired)",
    intent:
      "No demonstrable search intent connection to the domain's subject. Template filler with no underlying content.",
    decision:
      "Retired. Cat food, dog food, supplements, accessories, adoption, pet sitting, pet mating and the 'Dog and Cat Illness Guide' were unedited template sections. None had a supporting page, none had internal links, and an illness guide in particular would require veterinary review this site cannot evidence.",
    pages: [],
  },
];

/** Every URL in the legacy sitemap, with a disposition. */
export const LEGACY: LegacyPage[] = [
  {
    url: "/",
    title: "Home A — 'Care of your little pets hair'",
    verdict: "Rebuild",
    destination: "/",
    reason:
      "Nine competing hero messages, placeholder contact details, identical '$52/month' pricing on three tiers, and six unrelated template sections (food, supplements, adoption, sitting, mating, illness guide). Rebuilt as a single-purpose topical hub.",
  },
  {
    url: "/home-b/",
    title: "Home B (duplicate homepage)",
    verdict: "Retire / redirect",
    destination: "/",
    reason:
      "A second demo homepage. Two URLs competing for the same brand and head term is direct cannibalisation.",
  },
  {
    url: "/about/",
    title: "About Us",
    verdict: "Adopt with changes",
    destination: "/about/",
    reason:
      "An about page is worth keeping, but the legacy version implied a staffed salon with a physical location. Rewritten as an honest statement of what the site is and is not.",
  },
  {
    url: "/services/",
    title: "Services",
    verdict: "Retire / redirect",
    destination: "/choosing-a-dog-groomer/",
    reason:
      "A service catalogue requires a business, a service area and a booking path. None is verifiable on this domain. The genuine user need behind the page — 'what does a professional groom include' — is served editorially instead.",
  },
  {
    url: "/services-detail/",
    title: "Services Detail",
    verdict: "Retire / redirect",
    destination: "/choosing-a-dog-groomer/",
    reason:
      "A second, overlapping service page. Internal footer links pointed here and to /contact/ interchangeably under the label 'Donation', which indicates unedited template data rather than a real offer.",
  },
  {
    url: "/pricing/",
    title: "Pricing",
    verdict: "Consolidate / transform",
    destination: "/dog-grooming-cost/",
    reason:
      "The page showed three tiers all priced '$52 / Month' — template demo data. The legitimate intent behind the page is served by a costs explainer with attributed third-party price ranges and no invented price list.",
  },
  {
    url: "/team/",
    title: "Team",
    verdict: "Retire / redirect",
    destination: "/about/",
    reason:
      "Displayed template portraits and placeholder names. Publishing a fabricated team would be a fabricated credential, which this project explicitly will not do.",
  },
  {
    url: "/faq/",
    title: "FAQ",
    verdict: "Rebuild",
    destination: "/dog-grooming-problems/",
    reason:
      "Body copy was unedited lorem ipsum. The real questions users ask are distributed across the canonical pages, each with its own FAQ block and structured data, rather than concentrated on one empty page.",
  },
  {
    url: "/blog/",
    title: "Blog index",
    verdict: "Retire / redirect",
    destination: "/",
    reason:
      "Two posts do not justify an archive page and a 'Blog' nav slot. The guide structure replaces the chronological archive; every guide is a standalone canonical page reachable from the hub.",
  },
  {
    url: "/blog1/",
    title: "Blog 1 (secondary archive)",
    verdict: "Retire / redirect",
    destination: "/",
    reason: "Unused template archive, published with no posts.",
  },
  {
    url: "/404-2/",
    title: "404 (listed in the navigation menu)",
    verdict: "Retire / redirect",
    destination: "/not-found",
    reason:
      "A template demo of an error page, exposed as a navigation item — clear evidence the menu was never edited. Replaced by a real 404.",
  },
  {
    url: "/contact/",
    title: "Contact",
    verdict: "Adopt with changes",
    destination: "/contact/",
    reason:
      "The mechanism is worth keeping; the content was not. Address, phone and email were theme placeholders ('petcute@mail.com'). Rebuilt as a corrections-and-questions channel with a working form and no invented location.",
  },
  {
    url: "/top-dog-grooming-tips-for-a-happy-healthy-pup/",
    title: "Top Dog Grooming Tips for a Happy, Healthy Pup!",
    verdict: "Consolidate / transform",
    destination: "/how-to-groom-your-dog-at-home/",
    reason:
      "Five bullet points (brush, bathe, nails, ears, teeth) that are an outline of the routine, not an article. Its headings map exactly onto the routine page's sections, so the intent is served there at full depth.",
  },
  {
    url: "/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/",
    title: "Dog Grooming at Home: A Guide…",
    verdict: "Adopt with changes",
    destination: "/how-to-groom-your-dog-at-home/",
    reason:
      "The only legacy page with a genuine, on-domain topic and a defensible structure. Too thin to rank as written, so its scope — benefits of home grooming, and when to hand over to a professional — is absorbed into the pillar page and expanded.",
  },
];
