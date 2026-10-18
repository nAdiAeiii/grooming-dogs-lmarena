/* eslint-disable @next/next/no-img-element */
/**
 * Photography components for Design A.
 *
 * Deliberately uses plain <img> with a hand-built responsive srcSet rather than
 * next/image: the source URLs already carry the provider's own compression and
 * crop parameters, so client-side re-optimisation adds nothing, and this avoids
 * a remote-pattern configuration and a runtime image-optimisation dependency
 * for what are already correctly sized assets.
 *
 * Every photograph renders its own credit line, so attribution travels with the
 * image wherever it appears.
 */
import { getPhoto, srcAt, srcSet, type Photo, type Placeholder } from "@/content/images";

const RATIO = 627 / 1200;

function Credit({ photo, dark }: { photo: Photo; dark?: boolean }) {
  return (
    <p
      className={`mt-1.5 text-[0.68rem] ${
        dark ? "text-white/45" : "text-ink-300"
      }`}
    >
      Photograph:{" "}
      <a
        href={photo.sourcePage}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`underline decoration-dotted underline-offset-2 hover:text-tangerine ${
          dark ? "hover:text-white" : ""
        }`}
      >
        {photo.credit}
      </a>{" "}
      · Pexels
    </p>
  );
}

/** The single homepage hero photograph. Eager-loaded: it is above the fold. */
export function HeroPhoto({ id, className = "" }: { id: string; className?: string }) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-card border border-white/15 bg-ink-800">
        <img
          src={srcAt(photo, 1200)}
          srcSet={srcSet(photo)}
          sizes="(min-width: 1024px) 42vw, 100vw"
          width={1200}
          height={Math.round(1200 * RATIO)}
          alt={photo.alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-1">
        <Credit photo={photo} dark />
      </figcaption>
    </figure>
  );
}

/** Editorial image block opening a guide. Sits between the H1 and the short answer. */
export function LeadFigure({ id }: { id: string }) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <figure className="mt-7">
      <div className="overflow-hidden rounded-card bg-mist">
        <img
          src={srcAt(photo, 1200)}
          srcSet={srcSet(photo)}
          sizes="(min-width: 1024px) 760px, 100vw"
          width={1200}
          height={Math.round(1200 * RATIO)}
          alt={photo.alt}
          loading="eager"
          decoding="async"
          className="aspect-21/9 w-full object-cover sm:aspect-16/9"
        />
      </div>
      <figcaption>
        <Credit photo={photo} />
      </figcaption>
    </figure>
  );
}

/**
 * Instructional figure: placed immediately after the prose it illustrates.
 * Uses a taller crop so the detail the caption refers to is actually visible.
 */
export function InstructionalFigure({
  id,
  caption,
}: {
  id: string;
  caption: string;
}) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-card bg-mist">
        <img
          src={srcAt(photo, 1200)}
          srcSet={srcSet(photo)}
          sizes="(min-width: 1024px) 700px, 100vw"
          width={1200}
          height={Math.round(1200 * RATIO)}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="aspect-16/9 w-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-[0.82rem] leading-relaxed text-ink-600">
        {caption}
      </figcaption>
      <Credit photo={photo} />
    </figure>
  );
}

/** Image-supported navigation card thumbnail. */
export function CardPhoto({ id, priority = false }: { id: string; priority?: boolean }) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-mist">
        <img
          src={srcAt(photo, 828)}
          srcSet={srcSet(photo)}
          sizes="(min-width: 768px) 33vw, 100vw"
          width={828}
          height={Math.round(828 * RATIO)}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="aspect-3/2 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <span className="sr-only">
        Photograph by {photo.credit}, via Pexels.
      </span>
    </>
  );
}

/** Small contextual image used inside a section band. */
export function ContextPhoto({ id, sizes = "50vw" }: { id: string; sizes?: string }) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <div className="overflow-hidden rounded-card bg-mist">
      <img
        src={srcAt(photo, 828)}
        srcSet={srcSet(photo)}
        sizes={sizes}
        width={828}
        height={Math.round(828 * RATIO)}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="aspect-4/3 w-full object-cover"
      />
    </div>
  );
}

/**
 * A clearly identified placeholder, used where no authentic photograph could be
 * sourced. States the asset brief and the reason the slot is empty, so the
 * gap is visible rather than papered over.
 */
export function ImagePlaceholder({ placeholder }: { placeholder: Placeholder }) {
  return (
    <figure className="my-8">
      <div className="flex flex-col items-center justify-center gap-3 rounded-card border-2 border-dashed border-ink-300/70 bg-mist/60 px-6 py-12 text-center">
        <span aria-hidden className="text-2xl opacity-50">
          🖼
        </span>
        <p className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-600">
          Photography placeholder — no suitable authentic image located
        </p>
        <p className="max-w-xl text-[0.86rem] leading-relaxed text-ink-600">
          <span className="font-semibold text-ink">Asset brief:</span>{" "}
          {placeholder.brief}
        </p>
        <p className="max-w-xl text-[0.78rem] leading-relaxed text-ink-600">
          {placeholder.reason}
        </p>
        <p className="max-w-xl text-[0.72rem] text-ink-300">
          Searched: {placeholder.queries.join(" · ")}
        </p>
      </div>
      <figcaption className="mt-2 text-[0.78rem] text-ink-300">
        Deliberately unfilled rather than substituted with generated or
        approximate imagery.
      </figcaption>
    </figure>
  );
}
