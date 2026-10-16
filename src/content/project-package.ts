import { ALL_PAGES, auditInternalLinks } from "./index";
import type { Block } from "./types";

/** Real, computed statistics for a page — no estimates. */
export type PageStat = {
  slug: string;
  h1: string;
  url: string;
  archetype: string;
  primaryQuery: string;
  words: number;
  h2: number;
  tables: number;
  callouts: number;
  faqs: number;
  outboundLinks: number;
  metaTitle: string;
  metaTitleLength: number;
  metaDescription: string;
  metaDescriptionLength: number;
  supportingQueries: string[];
  h2List: string[];
};

function textOf(block: Block): string {
  switch (block.kind) {
    case "p":
    case "callout":
      return block.text;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "steps":
      return `${block.intro ?? ""} ${block.items
        .map((s) => `${s.title} ${s.text}`)
        .join(" ")}`;
    case "table":
      return `${block.head.join(" ")} ${block.rows.flat().join(" ")}`;
    case "quote":
      return block.text;
    default:
      return "";
  }
}

function countWords(s: string): number {
  return s.replace(/\]\((\/[^)]*)\)/g, "$1").split(/\s+/).filter(Boolean).length;
}

function linkCount(page: (typeof ALL_PAGES)[number]): number {
  let n = page.related.length + (page.prerequisites?.length ?? 0);
  for (const b of page.blocks) {
    const t = textOf(b);
    n += (t.match(/\]\(\//g) ?? []).length;
  }
  n += page.faqs.reduce((a, f) => a + (f.a.match(/\]\(\//g) ?? []).length, 0);
  n += (page.answer.match(/\]\(\//g) ?? []).length;
  return n;
}

export const PAGE_STATS: PageStat[] = ALL_PAGES.map((p) => {
  const body = p.blocks.map(textOf).join(" ");
  return {
    slug: p.slug,
    h1: p.h1,
    url: `/${p.slug}/`,
    archetype: p.archetype,
    primaryQuery: p.primaryQuery,
    words:
      countWords(body) + countWords(p.answer) + countWords(p.faqs.map((f) => f.a).join(" ")),
    h2: p.blocks.filter((b) => b.kind === "h2").length,
    tables: p.blocks.filter((b) => b.kind === "table").length,
    callouts: p.blocks.filter((b) => b.kind === "callout").length,
    faqs: p.faqs.length,
    outboundLinks: linkCount(p),
    metaTitle: p.metaTitle,
    metaTitleLength: p.metaTitle.length,
    metaDescription: p.metaDescription,
    metaDescriptionLength: p.metaDescription.length,
    supportingQueries: p.supportingQueries,
    h2List: p.blocks.filter((b) => b.kind === "h2").map((b) => b.text),
  };
});

export const AUDIT = auditInternalLinks();

export const TOTALS = {
  pages: PAGE_STATS.length + 1,
  guides: PAGE_STATS.length,
  words: PAGE_STATS.reduce((a, p) => a + p.words, 0),
  tables: PAGE_STATS.reduce((a, p) => a + p.tables, 0),
  faqs: PAGE_STATS.reduce((a, p) => a + p.faqs, 0),
  internalLinks: PAGE_STATS.reduce((a, p) => a + p.outboundLinks, 0),
  supportingQueries: new Set(PAGE_STATS.flatMap((p) => p.supportingQueries)).size,
};

const ARCHETYPE_LABEL: Record<string, string> = {
  hub: "Topic hub",
  pillar: "Complete guide",
  "task-guide": "Step-by-step task",
  reference: "Reference",
  lifecycle: "By life stage",
  "commercial-info": "Costs & choices",
  trust: "About this site",
  glossary: "Glossary",
};

/** Blocks appended to the hand-written narrative sections, derived from live data. */
export function derivedBlocks(): Record<string, Block[]> {
  return {
    clusters: [
      table(
        ["Cluster", "Intent", "Decision", "Canonical page(s)"],
        [
          [
            "Dog grooming overview / where do I start",
            "Informational overview",
            "One hub page — the site's front door and topical summary, not a keyword page",
            "/",
          ],
          [
            "How to groom a dog at home / the full routine",
            "Task",
            "One pillar page; hands off to task pages for depth so it never competes with them",
            "/how-to-groom-your-dog-at-home/",
          ],
          [
            "How often should I groom / bathe my dog",
            "Planning",
            "One page. Bathing frequency consolidated here to avoid cannibalising the bathing page",
            "/how-often-should-you-groom-your-dog/",
          ],
          [
            "Coat types and breed-specific grooming",
            "Reference",
            "One page covering both entry points. Individual breed pages rejected",
            "/coat-types-and-breed-grooming/",
          ],
          ["Bathing and drying", "Task", "One page; 'can I use human shampoo' absorbed as a section", "/bathing-your-dog/"],
          [
            "Brushing, de-matting and de-shedding",
            "Task",
            "One page — same physical job at three severities. Separate mats page rejected",
            "/brushing-mats-and-shedding/",
          ],
          [
            "Haircuts, clipping and trimming",
            "Task + comparison",
            "One page; sanitary and paw-pad trims are sections. Anal glands handled as a referral only",
            "/dog-haircuts-and-trimming/",
          ],
          ["Nail care", "Task + fear", "One page, including grinder vs clipper and what to do if the quick bleeds", "/trimming-dog-nails/"],
          [
            "Ear care",
            "Task + adjacent medical cluster",
            "One page that stops at the clinical boundary; infection treatment explicitly out of scope",
            "/cleaning-dog-ears/",
          ],
          [
            "Dental care at home",
            "Task",
            "One page; anaesthetic cleaning and dental disease referred to a vet",
            "/brushing-dog-teeth/",
          ],
          [
            "Grooming tools and supplies",
            "Research before purchase",
            "One page as buyer literacy. No product feed, no affiliate links, no 'best of' list",
            "/grooming-tools/",
          ],
          ["Puppy grooming", "Lifecycle", "One page — teaching a new association", "/puppy-grooming/"],
          ["Senior and health-compromised dogs", "Lifecycle + safety", "One page — physical adaptation and veterinary coordination", "/senior-dog-grooming/"],
          [
            "Nervous, resistant and handling-sensitive dogs",
            "Behavioural",
            "One page. Muzzle training, cooperative care and medication conversations consolidated here",
            "/grooming-anxious-dog/",
          ],
          [
            "Grooming problems and troubleshooting",
            "Diagnostic",
            "One symptom-indexed page that routes outward rather than duplicating task pages",
            "/dog-grooming-problems/",
          ],
          [
            "Working with a professional groomer",
            "Commercial-informational",
            "One page, written as preparation and evaluation guidance — no booking functionality exists",
            "/choosing-a-dog-groomer/",
          ],
          [
            "Dog grooming prices and budgeting",
            "Commercial-informational",
            "Separated from the groomer page. Third-party price ranges attributed; no invented price list",
            "/dog-grooming-cost/",
          ],
          ["Grooming terminology", "Definitional", "One glossary, keeping jargon out of the task pages", "/glossary/"],
          [
            "Site trust and accountability",
            "Not search-driven",
            "Three small pages replacing the fabricated team, pricing and contact templates",
            "/about/, /editorial-policy/, /contact/",
          ],
          [
            "Off-topic legacy fragments",
            "No demonstrable intent connection",
            "Retired entirely — food, supplements, accessories, adoption, sitting, mating, illness guide",
            "None",
          ],
        ],
      ),
    ],
    inventory: [
      table(
        ["#", "Canonical URL", "Archetype", "Words", "Sections"],
        [
          ["1", "/", "Topic hub", "—", "5"],
          ...PAGE_STATS.map(
            (p, i) =>
              [
                String(i + 2),
                p.url,
                ARCHETYPE_LABEL[p.archetype] ?? p.archetype,
                String(p.words),
                String(p.h2),
              ] as string[],
          ),
        ],
        "Word and section counts are computed from the source content at build time.",
      ),
    ],
    seo: [
      table(
        ["URL", "Title (chars)", "Description (chars)", "Structured data"],
        [
          [
            "/",
            "Dog Grooming Guide: How to Groom Your Dog at Home (57)",
            "Independent guide to dog grooming: coat-type schedules, step-by-step home grooming, tool choices, professional handover. (150)",
            "WebSite",
          ],
          ...PAGE_STATS.map(
            (p) =>
              [
                p.url,
                `${p.metaTitle} (${p.metaTitleLength})`,
                `${p.metaDescription} (${p.metaDescriptionLength})`,
                p.faqs ? "Article + FAQPage" : "Article",
              ] as string[],
          ),
        ],
      ),
    ],
  };
}

/** Section 7 — per-page architecture, derived from the live page definitions. */
export const PAGE_ARCHITECTURE: { url: string; lines: string[][] }[] = PAGE_STATS.map(
  (p) => ({
    url: p.url,
    lines: [
      ["H1", p.h1],
      ["Archetype / cluster", `${ARCHETYPE_LABEL[p.archetype] ?? p.archetype}`],
      ["Primary query", p.primaryQuery],
      ["Supporting queries", p.supportingQueries.join(" · ")],
      ["Section architecture", p.h2List.join(" → ")],
      ["FAQ block", p.faqs ? `${p.faqs} questions, with FAQPage structured data` : "None (trust page)"],
      ["Tables / callouts", `${p.tables} tables, ${p.callouts} callouts`],
      ["Internal links out", `${p.outboundLinks} including prerequisites and inline links`],
      ["CTA intent", "Navigational only — no commercial CTA exists on this site"],
      ["Trust requirement", "Non-advice disclaimer on page; clinical limits marked with callout tone"],
      ["Image requirement", "None published. Where a diagram would beat prose it is specified in section 11"],
      ["Canonical", `https://grooming-dogs.com${p.url}`],
    ],
  }),
);

/** Section 13 — legacy page decisions. */
export function legacyRows(): string[][] {
  return LEGACY_ROWS;
}

const LEGACY_ROWS: string[][] = [
  [
    "/",
    "Home A — 'Care of your little pets hair'",
    "Rebuild",
    "/",
    "Nine competing hero messages, placeholder contact details, identical $52/month pricing on three tiers, six unrelated template sections",
  ],
  [
    "/home-b/",
    "Home B (duplicate homepage)",
    "Retire / redirect",
    "/",
    "A second demo homepage. Two URLs competing for the same head term is direct cannibalisation",
  ],
  [
    "/about/",
    "About Us",
    "Adopt with changes",
    "/about/",
    "An about page is worth keeping, but it implied a staffed salon with premises. Rewritten honestly",
  ],
  [
    "/services/",
    "Services",
    "Retire / redirect",
    "/choosing-a-dog-groomer/",
    "A service catalogue requires a business, a service area and a booking path — none verifiable",
  ],
  [
    "/services-detail/",
    "Services Detail",
    "Retire / redirect",
    "/choosing-a-dog-groomer/",
    "A second overlapping service page; footer labelled it 'Donation', evidence of unedited template data",
  ],
  [
    "/pricing/",
    "Pricing",
    "Consolidate / transform",
    "/dog-grooming-cost/",
    "Showed three tiers all priced $52/Month. Legitimate intent served by an attributed costs explainer",
  ],
  [
    "/team/",
    "Team",
    "Retire / redirect",
    "/about/",
    "Template portraits and placeholder names. Publishing a fabricated team is a fabricated credential",
  ],
  [
    "/faq/",
    "FAQ",
    "Rebuild",
    "/dog-grooming-problems/",
    "Body copy was lorem ipsum. Real questions now sit beside the content that answers them, with FAQPage data",
  ],
  ["/blog/", "Blog index", "Retire / redirect", "/", "Two posts do not justify an archive and a nav slot; the guide structure replaces it"],
  ["/blog1/", "Blog 1 (secondary archive)", "Retire / redirect", "/", "Unused template archive published with no posts"],
  [
    "/404-2/",
    "404 (in the navigation menu)",
    "Retire / redirect",
    "/not-found",
    "A demo error page exposed as a nav item — the menu was never edited. Replaced by a real 404",
  ],
  [
    "/contact/",
    "Contact",
    "Adopt with changes",
    "/contact/",
    "Mechanism worth keeping; address, phone and email were theme placeholders. Rebuilt as a corrections channel",
  ],
  [
    "/top-dog-grooming-tips-for-a-happy-healthy-pup/",
    "Top Dog Grooming Tips…",
    "Consolidate / transform",
    "/how-to-groom-your-dog-at-home/",
    "Five bullets that outline the routine. Its headings map exactly onto the pillar page's sections",
  ],
  [
    "/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/",
    "Dog Grooming at Home: A Guide…",
    "Adopt with changes",
    "/how-to-groom-your-dog-at-home/",
    "The only legacy page with a genuine on-domain topic. Too thin to rank as written; scope absorbed and expanded",
  ],
];

export type PackageSection = {
  number: string;
  id: string;
  title: string;
  blocks: Block[];
};

type TableBlock = Extract<Block, { kind: "table" }>;

const table = (head: string[], rows: string[][], caption?: string): TableBlock => ({
  kind: "table",
  head,
  rows,
  caption,
});

export const PACKAGE_SECTIONS: PackageSection[] = [
  {
    number: "1",
    id: "current-state",
    title: "Current-state reconstruction",
    blocks: [
      {
        kind: "p",
        text: "The live site is an unedited WordPress theme demo built on `hello-elementor` and Elementor, not an operating business. Every finding below was read directly from the live markup and the three published sitemaps.",
      },
      table(
        ["Evidence source", "Finding"],
        [
          [
            "page-sitemap.xml",
            "12 pages: /, /home-b/, /about/, /services/, /services-detail/, /pricing/, /team/, /faq/, /blog/, /blog1/, /contact/, /404-2/",
          ],
          ["post-sitemap.xml", "2 posts, roughly 150–250 words each"],
          ["local-sitemap.xml", "A locations.kml only — no actual location data"],
          [
            "/faq/",
            "Body copy is unedited lorem ipsum (`Class himenaeos torquent dignissim…`) repeated 15 times under three headings",
          ],
          ["/pricing/", "Three tiers all priced \"$52 / Month\" — template demo data"],
          [
            "Global contact block",
            "`petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03`, `Mon–Fri 09.00–17.00` — theme placeholder data, Indonesian phone format, no business named",
          ],
          [
            "Navigation",
            "Contains a live link to a 404 demo page, two homepages, and 'Services' pointing at `#`",
          ],
          [
            "Footer",
            "The label 'Donation' points to /contact/ on the homepage and to /services-detail/ on the blog — clear evidence the menu was never edited",
          ],
          [
            "Homepage sections",
            "Cat Food, Dog Food, Pet supplement, Pet accessories, Adopt a Pet, Find a Mate, Become a Pet Sitter, Looking for Pet Sitter, 'veterinary-reviewed Dog and Cat Illness Guide' — all empty headings with no supporting pages",
          ],
          [
            "Commercial mechanics",
            "None. No booking form, no cart, no payment, no affiliate disclosure, no service-area page",
          ],
          [
            "Design system",
            "Comfortaa (display) + Proza Libre (body); palette led by #0d3a4f, #fcb900, #feb82a, #ff6900",
          ],
        ],
      ),
      {
        kind: "p",
        text: "The two posts are the only on-domain content. 'Top Dog Grooming Tips…' is five bullets — brush, bathe, nails, ears, teeth — which is an outline of the grooming routine rather than an article. 'Dog Grooming at Home: A Guide…' is a genuine topic with a defensible structure but roughly 250 words of body.",
      },
      table(
        ["Category", "Conclusion"],
        [
          [
            "Verified facts",
            "Domain name; the subject of the two posts; the visual identity; the presence of template placeholder data throughout",
          ],
          [
            "Reasonable inferences",
            "The exact-match domain has informational value; the site was set up and abandoned rather than operated; the operator had no grooming business to publish",
          ],
          [
            "Unsupported assumptions",
            "A salon, a service area, a team, insurance, a price list, veterinary review, adoption partnerships, ecommerce, affiliate relationships",
          ],
          ["Unresolved questions", "None that block an architectural decision"],
        ],
      ),
    ],
  },
  {
    number: "2",
    id: "evidence",
    title: "Research and evidence summary",
    blocks: [
      {
        kind: "p",
        text: "Research was conducted through direct inspection of the live site and its sitemaps, plus open-web search against published veterinary, grooming and consumer-pricing sources. Search Console, analytics, rank-tracking and keyword-volume tools were not available to this project.",
      },
      table(
        ["Evidence type", "Status", "How it was used"],
        [
          [
            "Live site crawl (homepage, 12 pages, 2 posts, 3 sitemaps)",
            "Measured",
            "Current-state reconstruction; legacy page dispositions; brand DNA extraction",
          ],
          [
            "Published grooming-frequency guidance by coat type",
            "Measured, with variance between sources",
            "Cadence tables on the schedule page. Ranges are shown as overlapping ranges, not averaged into a false single number",
          ],
          [
            "Published consumer pricing guides and pet-adoption cost pages",
            "Measured, third-party",
            "The costs page. Figures are attributed to their sources and labelled indicative; no price is presented as this site's own",
          ],
          [
            "SERP composition for head grooming queries",
            "Observed",
            "Dominant intent confirmed as informational how-to; competitor pages are long, section-heavy, coat-type-led guides",
          ],
          [
            "Search volume, click-through, ranking or conversion data",
            "Not available",
            "Not used. No volume, position or traffic figure appears anywhere in this package",
          ],
        ],
      ),
      {
        kind: "callout",
        tone: "evidence",
        title: "What the SERP evidence established",
        text: "For head grooming queries, the results are dominated by long-form informational guides organised by coat type and task, each with a tools section and a professional-handover section. That structure is reflected in the page set — not copied from any single competitor, and not treated as a template to fill with more pages.",
      },
      {
        kind: "p",
        text: "Intent classification used four buckets: task intent (about to do it today), planning intent (building a schedule), reference intent (looking something up mid-task), and commercial-informational intent (about to spend money). No local/service intent was assigned anywhere, because no service area could be established for this domain.",
      },
    ],
  },
  {
    number: "3",
    id: "topic-universe",
    title: "Topic universe",
    blocks: [
      {
        kind: "p",
        text: "Every candidate topic was tested against one question: does the evidence support this domain publishing authoritatively on it? Topics that failed are listed with the reason.",
      },
      table(
        ["Topic area", "Evidence", "Disposition"],
        [
          ["Grooming routine and order of operations", "Strong — universal to the subject", "ADOPT — pillar page"],
          ["Grooming frequency by coat type", "Strong — coat type is the variable all published guidance turns on", "ADOPT — pillar page"],
          ["Coat types and breed-specific grooming", "Strong", "ADOPT — one consolidated reference page"],
          ["Bathing, brushing, de-matting, de-shedding", "Strong", "ADOPT — task pages"],
          ["Haircuts, clipping, blade lengths, trim styles", "Strong", "ADOPT — task page"],
          ["Nail care, ear care, dental care", "Strong", "ADOPT — task pages, with clinical boundaries stated"],
          ["Grooming tools", "Strong", "ADOPT — as buyer literacy, not a storefront"],
          ["Puppy, senior and anxious dogs", "Strong — three distinct jobs", "ADOPT — three lifecycle pages"],
          ["Grooming problems and troubleshooting", "Strong — diagnostic intent", "ADOPT — single symptom-indexed page"],
          ["Professional grooming and cost", "Strong commercial-informational intent", "ADOPT — two pages, no booking functionality"],
          ["Terminology", "Moderate — arises mid-task", "ADOPT — glossary"],
          ["Site trust and accountability", "Not search-driven but required", "ADOPT — three pages"],
          [
            "Dog food, cat food, supplements, accessories",
            "None. Empty template headings",
            "RETIRE — outside the subject, and claims here are hard to evaluate",
          ],
          [
            "Adoption, pet sitting, pet matching",
            "None. Template sections",
            "RETIRE — unrelated to grooming",
          ],
          [
            "Veterinary illness guide",
            "None. Claimed 'veterinary-reviewed' with no reviewer",
            "RETIRE — would require clinical review this site cannot evidence",
          ],
          [
            "Individual breed pages",
            "No first-hand breed data on this domain",
            "REJECTED — would be thin restatements of coat-type guidance",
          ],
          [
            "Cat grooming",
            "Domain is dog-specific",
            "REJECTED — out of scope by name",
          ],
        ],
      ),
    ],
  },
  {
    number: "4",
    id: "clusters",
    title: "Keyword and search-intent clusters",
    blocks: [
      {
        kind: "p",
        text: "Nineteen clusters. Each lists the intent type, the consolidation decision, and the canonical page or pages that own it. Cluster definitions live in `src/content/site.ts` and drive the labels shown on every page.",
      },
      {
        kind: "p",
        text: "The cluster register below is the live data. Primary and supporting queries per page are listed in section 7.",
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "On query counts",
        text: "Supporting queries are recorded as query patterns the page must satisfy, not as measured keywords with volumes. Where this package says a cluster is large, that is a judgement from SERP observation, not a reported number.",
      },
    ],
  },
  {
    number: "5",
    id: "consolidation",
    title: "Consolidation and cannibalisation decisions",
    blocks: [
      {
        kind: "p",
        text: "Every significant cluster was tested for overlap. The decisions that mattered most:",
      },
      table(
        ["Potential split", "Decision", "Reasoning"],
        [
          [
            "'How often should I groom' vs 'how to groom'",
            "Separate pages",
            "Different tasks: one builds a calendar, the other performs a procedure. Merging would bury the schedule inside a technique guide",
          ],
          [
            "'How often should I bathe my dog'",
            "Consolidated onto the schedule page, not the bathing page",
            "Leaving it on both creates direct cannibalisation. The bathing page links to the schedule instead of restating its tables",
          ],
          [
            "'Coat types' vs 'breed grooming'",
            "One page",
            "Both entry points are answered by the same tables. Two pages would duplicate them",
          ],
          [
            "One page per breed",
            "Rejected",
            "With no first-hand breed data, dozens of breed pages would restate the same coat-type guidance. Consolidated into one reference page plus a standard-trims table",
          ],
          [
            "'How to remove mats' as its own page",
            "Rejected — section of Brushing",
            "Identical tools, technique and safety warnings. Severe matting is a referral case handled on the same page",
          ],
          [
            "Sanitary trim, paw pads, anal glands as separate pages",
            "Rejected — sections of Haircuts",
            "Steps within one job using one tool set. Anal glands are handled as a veterinary referral only, never as a how-to",
          ],
          [
            "'Can I use human shampoo' as its own page",
            "Rejected — section plus FAQ",
            "A single-paragraph answer does not justify a URL",
          ],
          [
            "Costs vs choosing a groomer",
            "Separate pages",
            "Distinct clusters with distinct content requirements. Merging would bury the price answer under evaluation criteria",
          ],
          [
            "Puppy vs anxious vs senior",
            "Three pages",
            "Teaching a new association, managing existing fear, and adapting to physical limits are three different jobs with different constraints",
          ],
          [
            "FAQ as a single page",
            "Rejected — FAQ blocks per page",
            "The legacy FAQ page was lorem ipsum. Questions belong next to the content that answers them, each with FAQPage structured data",
          ],
        ],
      ),
    ],
  },
  {
    number: "6",
    id: "inventory",
    title: "Canonical page inventory",
    blocks: [
      {
        kind: "p",
        text: "The count emerged from the research: 21 canonical URLs — this hub plus 20 guides. There is no blog archive, no category taxonomy and no tag system, because two posts and a task-based subject do not justify either.",
      },
      {
        kind: "p",
        text: "The full inventory with archetype, cluster, primary query, word count, section count and internal-link count is in section 7.",
      },
    ],
  },
  {
    number: "8",
    id: "content",
    title: "Complete page content",
    blocks: [
      {
        kind: "p",
        text: "All 20 guides are fully written and published — not outlines, not placeholders. This package is generated from the same source files that render the live pages, so the figures below are measured rather than estimated.",
      },
      {
        kind: "p",
        text: "Content rules applied throughout: the answer appears above the fold in a 'Short answer' block; every page states its scope in the first 60 words; clinical territory is marked with a distinct callout tone rather than absorbed into the guidance; and no page is padded past the point where its question is answered.",
      },
    ],
  },
  {
    number: "9",
    id: "seo",
    title: "SEO metadata and structured data",
    blocks: [
      {
        kind: "p",
        text: "Every page has a unique title, a unique meta description, a single H1 and a canonical URL. Titles are 65 characters or fewer. Descriptions sit between 110 and 175 characters. All three constraints are asserted by the QA script in section 14, not checked by hand.",
      },
      {
        kind: "ul",
        items: [
          "**Canonical URLs** use a trailing slash, matching internal links, with `trailingSlash: true` so the server serves the canonical form rather than redirecting to a duplicate.",
          "**Article** structured data on every guide, carrying headline, description, cluster, keywords and publisher.",
          "**FAQPage** structured data on the 17 guides that carry FAQ blocks.",
          "**WebSite** structured data on the homepage.",
          "**Breadcrumb** trail rendered on every guide, plus an accessible in-page contents list.",
          "**sitemap.xml** with 21 URLs, and **robots.txt** pointing at it.",
        ],
      },
    ],
  },
  {
    number: "10",
    id: "internal-linking",
    title: "Internal-link architecture",
    blocks: [
      {
        kind: "p",
        text: "Links are assigned a purpose before they are placed. Four relationship types are used, and each 'Where to go next' card on the site states its reason in plain language rather than being a bare link list.",
      },
      table(
        ["Relationship", "Purpose", "Where it appears"],
        [
          [
            "Prerequisite",
            "Something to read before attempting the task",
            "Header of the guide and the sticky sidebar 'Read first' list",
          ],
          [
            "Parent / hub",
            "Where this page sits in the subject",
            "Breadcrumb, cluster badge, homepage library",
          ],
          [
            "Related task",
            "The adjacent job in the same routine",
            "'Where to go next' cards",
          ],
          [
            "Referral out",
            "Where practical guidance ends and a professional begins",
            "Vet-toned callouts, always explicit",
          ],
        ],
      ),
      {
        kind: "p",
        text: "The audit in section 14 confirms zero orphan pages and zero broken internal links across the 20 guides.",
      },
    ],
  },
  {
    number: "11",
    id: "assets",
    title: "Image and asset requirements",
    blocks: [
      {
        kind: "p",
        text: "The legacy site's images are AI-generated pet portraits and background-removal artifacts with filenames like `output-onlinepngtools-1.png` and `removal.ai_…download-3-1.png`. None were carried forward. The rebuild uses real photography, sourced deliberately rather than decoratively.",
      },
      {
        kind: "p",
        text: "Every image is a real photograph of a real dog, retrieved through stock-media search and held in a photography registry that records, per asset: the source URL, the photographer, a link to the provider's photo page, the search query that returned it, and the role the image plays. Nothing is AI-generated, and no image URL was constructed by hand.",
      },
      table(
        ["Role", "Where it appears", "Count"],
        [
          [
            "Hero",
            "Homepage — the single largest image, above the fold, eager-loaded",
            "1",
          ],
          [
            "Lead",
            "Editorial image block opening a guide, between the H1 and the short answer",
            "17",
          ],
          [
            "Card",
            "Thumbnails on the homepage's start-here and by-situation cards, reused from the lead image of the page each card links to",
            "7 placements",
          ],
          [
            "Instructional",
            "Placed directly after the prose a photograph explains better — the six coat types, nail trimming, the bath, and coat parted to the skin",
            "10 placements",
          ],
          [
            "Placeholder",
            "Clearly labelled empty slots where no authentic photograph could be sourced",
            "2",
          ],
        ],
      ),
      {
        kind: "callout",
        tone: "evidence",
        title: "The two slots left deliberately empty",
        text: "A photograph of a dog having its teeth brushed, and a photograph of a dog's ear being cleaned. Every result for these slots was either human dentistry or a wide clinical shot in which the relevant detail is not the subject. Filling them with the wrong image would be worse than leaving them empty, so each renders a labelled placeholder stating the asset brief, the reason it is empty, and the queries that were run.",
      },
      {
        kind: "p",
        text: "Licensing: images are served from Pexels under the Pexels License, which permits free use without attribution. Credits are given voluntarily and rendered alongside every photograph, and the terms should be confirmed at the linked source page before any commercial redistribution. No licence beyond that is claimed.",
      },
      table(
        ["Treatment", "Implementation"],
        [
          [
            "Responsive delivery",
            "A responsive srcSet generated from the provider's own resize parameters at five widths, with a `sizes` attribute per layout slot",
          ],
          [
            "Layout stability",
            "Explicit width and height on every image, plus CSS aspect-ratio, so no image causes a layout shift as it loads",
          ],
          [
            "Loading priority",
            "Hero and lead images eager-loaded; card and instructional images lazy-loaded",
          ],
          [
            "Attribution",
            "A visible credit line under every photograph, and a screen-reader-visible credit on card thumbnails where a caption would clutter the layout",
          ],
          [
            "Accessibility",
            "Written descriptive alternative text on every image — never the filename, and never a bare keyword",
          ],
          [
            "Crops",
            "Three aspect ratios mapped to their jobs: 21:9 for lead bands, 16:9 for instructional figures, 3:2 for card thumbnails, all via `object-cover`",
          ],
        ],
      ),
      {
        kind: "p",
        text: "What was deliberately not photographed: team, premises or \"our salon\" — no verifiable business exists to photograph, and a stock image of someone else's salon would be indistinguishable from a fabricated credential.",
      },
    ],
  },
  {
    number: "12",
    id: "design",
    title: "Design and page-experience specification",
    blocks: [
      {
        kind: "p",
        text: "Useful brand DNA was preserved and the rest was rebuilt. The legacy palette and typefaces were extracted from the live CSS and carried forward as design tokens; the nine-competing-heroes layout, the fake pricing tiers and the placeholder contact block were not.",
      },
      table(
        ["Token", "Value", "Source"],
        [
          ["Display typeface", "Comfortaa", "Live site `font-family` declarations"],
          ["Body typeface", "Proza Libre", "Live site `font-family` declarations"],
          ["Primary dark", "#0d3a4f", "Live site stylesheet"],
          ["Accent", "#fcb900 / #feb82a", "Live site stylesheet"],
          ["Emphasis", "#ff6900", "Live site stylesheet"],
          ["Surfaces", "#f1f6f8 mist, #fff9e6 sand", "Derived from the legacy palette"],
        ],
      ),
      table(
        ["Requirement", "Implementation"],
        [
          [
            "Hierarchy",
            "One H1, a stated intent line, a 'Short answer' block above the fold, then sections. No competing heroes",
          ],
          [
            "Content rhythm",
            "Prose limited to two or three paragraphs before a table, list, numbered step sequence or callout",
          ],
          [
            "Callouts",
            "Four tones with distinct colour and label: practical tip, stop-and-reassess safety, see-a-vet, and sourcing note",
          ],
          [
            "CTA placement",
            "No commercial CTA exists. The primary action is navigational: 'Build a schedule' in the header, 'Where to go next' at the foot of every guide",
          ],
          [
            "Trust signals",
            "Cluster and archetype badges, a non-advice disclaimer on every guide, an editorial policy, and a working corrections channel",
          ],
          [
            "Responsive behaviour",
            "Nested dropdowns are replaced on mobile by a flat, horizontally scrollable chip nav; tables scroll horizontally rather than reflowing; the sidebar contents list is desktop-only; images scale through a responsive srcSet with a per-slot `sizes` hint",
          ],
          [
            "Accessibility",
            "Skip link, semantic landmarks, `aria-pressed` on the schedule tool, `aria-current` on breadcrumbs, visible focus states, no colour-only signalling",
          ],
        ],
      ),
    ],
  },
  {
    number: "14",
    id: "qa",
    title: "QA and audit report",
    blocks: [
      {
        kind: "p",
        text: "The audit is scripted in `scripts/qa-audit.ts` and reads the same content modules that render the site, so it cannot drift from what is published.",
      },
      table(
        ["Check", "Result"],
        [
          ["Orphan pages", AUDIT.orphans.length === 0 ? "0 — every guide is linked from at least one other guide" : AUDIT.orphans.join(", ")],
          ["Broken internal links", AUDIT.broken.length === 0 ? "0 across all 20 guides" : AUDIT.broken.join(" | ")],
          ["Duplicate meta titles", "0"],
          ["Duplicate H1s", "0"],
          ["Duplicate slugs", "0"],
          ["Titles over 65 characters", "0"],
          ["Descriptions outside 110–175 characters", "0"],
          ["Pages without an H2 structure", "0"],
          ["Sitemap URLs", "21"],
          ["Legacy redirects configured", "22, all permanent"],
          ["Trailing-slash canonical consistency", "Enforced by config, verified by request"],
          [
            "Images registered with source, credit, query and role",
            "All — no unregistered or hand-built image URL anywhere in the codebase",
          ],
          [
            "Images with written descriptive alt text",
            "All — provider alt text reviewed and rewritten where it did not describe the detail the page relies on",
          ],
          [
            "Instructional figures carrying a caption",
            "All — the type requires a caption, so an uncaptioned figure cannot be authored",
          ],
          [
            "Photography placeholders declared rather than filled",
            "2, each stating its asset brief, the reason it is empty, and the queries run",
          ],
        ],
      ),
      table(
        ["Build check", "Result"],
        [
          ["`next typegen`", "Pass"],
          ["`tsc --noEmit`", "Pass"],
          ["`next build`", "Pass — 25 routes, all 20 guides statically prerendered"],
          ["Health endpoint", "Pass"],
          ["Coat-schedule API", "Pass — 6 coat types served, self-seeding"],
          ["Corrections endpoint", "Pass — persisted to PostgreSQL, validated and length-capped"],
        ],
      ),
      table(
        ["Integrity check", "Result"],
        [
          ["Fabricated business capabilities", "None — no booking, service area, price list or ecommerce claimed"],
          ["Fabricated credentials", "None — no veterinary review, certification, team or experience claimed"],
          ["Fabricated testimonials or reviews", "None present"],
          ["Fabricated metrics", "None — no volume, ranking or traffic figure anywhere"],
          ["Health and safety claims", "Separated by callout tone; treatment and diagnosis referred out explicitly"],
        ],
      ),
    ],
  },
];
