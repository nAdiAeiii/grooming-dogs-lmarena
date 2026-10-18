import Link from "next/link";

const SUGGESTIONS = [
  {
    href: "/how-to-groom-your-dog-at-home/",
    label: "Groom your dog at home, start to finish",
    note: "The full routine, in order",
  },
  {
    href: "/how-often-should-you-groom-your-dog/",
    label: "How often should you groom your dog?",
    note: "Cadences by coat type",
  },
  {
    href: "/coat-types-and-breed-grooming/",
    label: "Coat types and what each one needs",
    note: "Start here if you don't know your dog's coat",
  },
  {
    href: "/dog-grooming-problems/",
    label: "Grooming problems and troubleshooting",
    note: "Itching, smell, bumps, redness",
  },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <p className="head-font text-[0.75rem] font-bold uppercase tracking-[0.16em] text-amber-dark">
        404
      </p>
      <h1 className="head-font mt-3 text-[2.2rem] leading-tight font-bold text-ink">
        That page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-600">
        This site was rebuilt around a new structure, so a few old addresses have
        moved. If you arrived from a search engine or an old bookmark, the page you
        wanted is probably one of these.
      </p>
      <ul className="mt-8 space-y-3">
        {SUGGESTIONS.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="group block rounded-card border-2 border-mist px-5 py-4 transition hover:border-amber hover:bg-sand"
            >
              <span className="head-font block text-[1.02rem] font-bold text-ink group-hover:text-tangerine">
                {s.label}
              </span>
              <span className="mt-0.5 block text-[0.85rem] text-ink-600">
                {s.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-[0.9rem] text-ink-600">
        Or go back to the{" "}
        <Link href="/" className="font-semibold text-ink underline">
          full library
        </Link>
        .
      </p>
    </div>
  );
}
