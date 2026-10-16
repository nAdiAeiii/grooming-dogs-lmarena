import Link from "next/link";
import type { ReactNode } from "react";
import { FeedbackForm } from "@/components/feedback-form";
import { InstructionalFigure, ImagePlaceholder } from "@/components/media";
import { PLACEHOLDERS } from "@/content/images";
import { ScheduleTool } from "@/components/schedule-tool";
import type { Block, CalloutTone } from "@/content/types";

/**
 * Minimal inline markup renderer. Content is authored as plain strings using
 * **bold** and [label](/href/) so that the source stays readable and diffable.
 */
export function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const label = token.slice(1, token.indexOf("]"));
      const href = token.slice(token.indexOf("(") + 1, -1);
      nodes.push(
        <Link key={key++} href={href}>
          {label}
        </Link>,
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

const CALLOUT: Record<
  CalloutTone,
  { label: string; wrap: string; icon: string; title: string }
> = {
  vet: {
    label: "See a vet",
    icon: "🩺",
    wrap: "border-ink-600 bg-mist",
    title: "text-ink",
  },
  safety: {
    label: "Stop and reassess",
    icon: "⚠️",
    wrap: "border-tangerine bg-[#fff3ec]",
    title: "text-[#a63d00]",
  },
  tip: {
    label: "Practical tip",
    icon: "💡",
    wrap: "border-amber bg-sand",
    title: "text-amber-dark",
  },
  evidence: {
    label: "Where this comes from",
    icon: "🔍",
    wrap: "border-ink-300 bg-white",
    title: "text-ink",
  },
};

export function Callout({
  tone,
  title,
  text,
}: {
  tone: CalloutTone;
  title: string;
  text: string;
}) {
  const c = CALLOUT[tone];
  return (
    <aside
      className={`my-7 rounded-card border-l-4 ${c.wrap} px-5 py-4`}
    >
      <p
        className={`head-font text-[0.68rem] font-bold uppercase tracking-[0.14em] ${c.title}`}
      >
        <span aria-hidden className="mr-1.5">
          {c.icon}
        </span>
        {c.label}
      </p>
      <p className={`head-font mt-1.5 text-[1.02rem] font-bold ${c.title}`}>
        {title}
      </p>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[#33505c]">
        <Inline text={text} />
      </p>
    </aside>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-dog max-w-none">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="head-font mt-14 mb-4 scroll-mt-28 text-[1.6rem] leading-tight font-bold text-ink"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="head-font mt-9 mb-2.5 scroll-mt-28 text-[1.18rem] font-bold text-ink"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="my-4 space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-amber"
                    />
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-4 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="head-font mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-[0.75rem] font-bold text-white">
                      {j + 1}
                    </span>
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "steps":
            return (
              <div key={i} className="my-7">
                {block.intro ? (
                  <p className="mb-4">
                    <Inline text={block.intro} />
                  </p>
                ) : null}
                <ol className="space-y-3">
                  {block.items.map((step, j) => (
                    <li
                      key={j}
                      className="rounded-card border border-mist bg-white p-5 shadow-sm"
                    >
                      <p className="head-font flex items-baseline gap-2.5 text-[1.02rem] font-bold text-ink">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber text-[0.8rem] font-bold text-ink">
                          {j + 1}
                        </span>
                        {step.title}
                      </p>
                      <p className="mt-2 pl-9 text-[0.96rem] leading-relaxed">
                        <Inline text={step.text} />
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            );
          case "callout":
            return (
              <Callout key={i} tone={block.tone} title={block.title} text={block.text} />
            );
          case "table":
            return (
              <figure key={i} className="my-7">
                <div className="overflow-x-auto rounded-card border border-mist">
                  <table className="w-full border-collapse text-left text-[0.9rem]">
                    <thead>
                      <tr className="bg-ink text-white">
                        {block.head.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="head-font px-4 py-3 text-[0.78rem] font-bold uppercase tracking-wide"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr
                          key={j}
                          className={j % 2 ? "bg-mist/60" : "bg-white"}
                        >
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className={`border-t border-mist px-4 py-3 align-top ${
                                k === 0 ? "font-semibold text-ink" : ""
                              }`}
                            >
                              <Inline text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.caption ? (
                  <figcaption className="mt-2 text-[0.8rem] text-ink-600">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "figure":
            return (
              <InstructionalFigure
                key={i}
                id={block.imageId}
                caption={block.caption}
              />
            );
          case "placeholder": {
            const ph = PLACEHOLDERS[block.placeholderId];
            return ph ? (
              <ImagePlaceholder key={i} placeholder={ph} />
            ) : null;
          }
          case "widget":
            return (
              <div key={i} className="my-8">
                {block.widget === "schedule" ? <ScheduleTool /> : <FeedbackForm />}
              </div>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-7 rounded-card bg-mist px-6 py-5"
              >
                <p className="text-[1.02rem] leading-relaxed text-ink italic">
                  “{block.text}”
                </p>
                <footer className="mt-2 text-[0.82rem] font-semibold text-ink-600">
                  — {block.source}
                </footer>
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
