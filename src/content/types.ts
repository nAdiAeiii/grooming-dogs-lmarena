export type CalloutTone = "vet" | "safety" | "tip" | "evidence";

export type Block =
  | { kind: "h2"; id: string; text: string }
  | { kind: "h3"; id: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | {
      kind: "steps";
      intro?: string;
      items: { title: string; text: string }[];
    }
  | {
      kind: "callout";
      tone: CalloutTone;
      title: string;
      text: string;
    }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "quote"; text: string; source: string }
  /** An interactive element rendered inline within the article body. */
  | { kind: "widget"; widget: "schedule" | "feedback" }
  /**
   * An instructional photograph placed after the prose it illustrates.
   * `imageId` must exist in the photography registry; captions are required
   * because an instructional image without one is decoration, not instruction.
   */
  | { kind: "figure"; imageId: string; caption: string }
  /** A documented photography placeholder, used where no authentic image exists. */
  | { kind: "placeholder"; placeholderId: string };

export type Faq = { q: string; a: string };

export type RelatedLink = {
  href: string;
  label: string;
  why: string;
};

export type Archetype =
  | "hub"
  | "pillar"
  | "task-guide"
  | "reference"
  | "lifecycle"
  | "commercial-info"
  | "trust"
  | "glossary";

export type GuidePage = {
  slug: string;
  /** Editorial lead image from the photography registry. */
  leadImageId?: string;
  clusterId: string;
  archetype: Archetype;
  /** Primary query / topic this page exists to satisfy. */
  primaryQuery: string;
  /** Supporting queries consolidated onto the same canonical page. */
  supportingQueries: string[];
  /** Statement of the user's intent, used in the page header. */
  intent: string;
  h1: string;
  /** Meta title — unique across the site. */
  metaTitle: string;
  /** Meta description — unique across the site. */
  metaDescription: string;
  /** Short answer shown above the fold. */
  answer: string;
  blocks: Block[];
  faqs: Faq[];
  related: RelatedLink[];
  /** Prerequisite pages a reader should have read first. */
  prerequisites?: { href: string; label: string }[];
};

export type Cluster = {
  id: string;
  name: string;
  intent: string;
  decision: string;
  pages: string[];
};

export type LegacyPage = {
  url: string;
  title: string;
  verdict:
    | "Adopt with changes"
    | "Consolidate / transform"
    | "Rebuild"
    | "Retire / redirect";
  destination: string;
  reason: string;
};
