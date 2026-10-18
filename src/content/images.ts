/**
 * PHOTOGRAPHY REGISTRY
 *
 * Every entry is a real photograph sourced through the stock-media search tool.
 * No image in this file is AI-generated, and no URL is invented: each `base`
 * was returned by the search API together with the photographer credit and the
 * source page recorded below.
 *
 * Provenance fields per entry:
 *   base       — Pexels image URL, query string stripped so responsive sizes
 *                can be generated from the provider's own resize parameters
 *   alt        — descriptive alternative text (written for this site)
 *   credit     — photographer name as returned by the provider
 *   creditUrl  — photographer profile as returned by the provider
 *   sourcePage — the photo's page on the provider's site
 *   query      — the search terms that returned it, for auditability
 *   role       — why the image exists (see the roles list below)
 *
 * LICENSING: images are served from Pexels and are used under the Pexels
 * License, which permits free use without attribution. Photographer credits are
 * included here voluntarily and rendered on the page, and the terms should be
 * confirmed at the linked source page before any commercial redistribution.
 * No licence beyond that is claimed anywhere on this site.
 *
 * Roles:
 *   hero          — the single largest image on the homepage
 *   lead          — editorial image block at the top of a guide
 *   instructional — supports a specific technique the prose alone cannot show
 *   contextual    — situates a page in a real environment
 *   card          — thumbnail on a navigation card
 */

export type ImageRole =
  | "hero"
  | "lead"
  | "instructional"
  | "contextual"
  | "card";

export type Photo = {
  id: string;
  base: string;
  alt: string;
  credit: string;
  creditUrl: string;
  sourcePage: string;
  query: string;
  role: ImageRole;
};

export const PHOTOS: Record<string, Photo> = {
  /* ---- Hero ---- */
  "hero-brush": {
    id: "hero-brush",
    base: "https://images.pexels.com/photos/8498543/pexels-photo-8498543.jpeg",
    alt: "A person brushing the coat of a large fluffy dog at home, working the brush into the fur.",
    credit: "Yaroslav Shuraev",
    creditUrl: "https://www.pexels.com/@yaroslav-shuraev",
    sourcePage: "https://www.pexels.com/photo/a-person-brushing-the-dog-s-fur-8498543/",
    query: "dog being brushed grooming at home",
    role: "hero",
  },

  /* ---- Lead images: one per guide ---- */
  "lead-routine": {
    id: "lead-routine",
    base: "https://images.pexels.com/photos/4148864/pexels-photo-4148864.jpeg",
    alt: "A woman grooming her dog outdoors in a sunlit field.",
    credit: "Gustavo Fring",
    creditUrl: "https://www.pexels.com/@gustavo-fring",
    sourcePage: "https://www.pexels.com/photo/photo-of-woman-brushing-her-dog-4148864/",
    query: "dog being brushed grooming at home",
    role: "lead",
  },
  "lead-frequency": {
    id: "lead-frequency",
    base: "https://images.pexels.com/photos/9986360/pexels-photo-9986360.jpeg",
    alt: "A man sitting in an armchair brushing his dog in a relaxed home setting.",
    credit: "Ron Lach",
    creditUrl: "https://www.pexels.com/@ron-lach",
    sourcePage: "https://www.pexels.com/photo/a-man-brushing-his-pet-dog-9986360/",
    query: "dog being brushed grooming at home",
    role: "lead",
  },
  "lead-coat": {
    id: "lead-coat",
    base: "https://images.pexels.com/photos/19145879/pexels-photo-19145879.jpeg",
    alt: "A Cocker Spaniel being groomed on a table, showing a long feathered coat.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage: "https://www.pexels.com/photo/groomer-brushing-a-dog-19145879/",
    query: "dog being brushed grooming at home",
    role: "lead",
  },
  "lead-bathing": {
    id: "lead-bathing",
    base: "https://images.pexels.com/photos/20741414/pexels-photo-20741414.jpeg",
    alt: "A French Bulldog being washed in a kitchen sink at home.",
    credit: "David Kanigan",
    creditUrl: "https://www.pexels.com/@david-kanigan-239927285",
    sourcePage:
      "https://www.pexels.com/photo/close-up-of-a-french-bulldog-being-washed-in-a-kitchen-sink-20741414/",
    query: "dog dried with towel after bath",
    role: "lead",
  },
  "lead-brushing": {
    id: "lead-brushing",
    base: "https://images.pexels.com/photos/8498547/pexels-photo-8498547.jpeg",
    alt: "A long-haired white dog being brushed along its side on a wooden floor.",
    credit: "Yaroslav Shuraev",
    creditUrl: "https://www.pexels.com/@yaroslav-shuraev",
    sourcePage: "https://www.pexels.com/photo/a-person-brushing-a-dog-8498547/",
    query: "dog being brushed grooming at home",
    role: "lead",
  },
  "lead-haircuts": {
    id: "lead-haircuts",
    base: "https://images.pexels.com/photos/19145893/pexels-photo-19145893.jpeg",
    alt: "A groomer trimming a Shih Tzu on a grooming table, with another dog waiting alongside.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage: "https://www.pexels.com/photo/dog-groomer-at-work-19145893/",
    query: "dog clippers haircut groomer table",
    role: "lead",
  },
  "lead-nails": {
    id: "lead-nails",
    base: "https://images.pexels.com/photos/12612095/pexels-photo-12612095.jpeg",
    alt: "Close-up of a dog's nail being trimmed with clippers, with the paw held firmly.",
    credit: "Mirko Fabian",
    creditUrl: "https://www.pexels.com/@mirkofabian",
    sourcePage:
      "https://www.pexels.com/photo/a-close-up-shot-of-a-person-cutting-a-dog-s-nail-12612095/",
    query: "dog paw nail trimming closeup",
    role: "lead",
  },
  "lead-ears": {
    id: "lead-ears",
    base: "https://images.pexels.com/photos/7470755/pexels-photo-7470755.jpeg",
    alt: "A veterinarian examining a dog's head and ears during a clinic check-up.",
    credit: "Mikhail Nilov",
    creditUrl: "https://www.pexels.com/@mikhail-nilov",
    sourcePage:
      "https://www.pexels.com/photo/a-dog-having-a-checkup-on-a-veterinary-7470755/",
    query: "dog ear cleaning check veterinary",
    role: "lead",
  },
  "lead-teeth": {
    id: "lead-teeth",
    base: "https://images.pexels.com/photos/7468978/pexels-photo-7468978.jpeg",
    alt: "A veterinarian wearing a mask examining a dog's mouth during a check-up.",
    credit: "Mikhail Nilov",
    creditUrl: "https://www.pexels.com/@mikhail-nilov",
    sourcePage: "https://www.pexels.com/photo/man-checking-on-a-dog-7468978/",
    query: "vet cleaning dog teeth oral examination",
    role: "lead",
  },
  "lead-tools": {
    id: "lead-tools",
    base: "https://images.pexels.com/photos/4432261/pexels-photo-4432261.jpeg",
    alt: "Pet grooming essentials laid out on a wooden floor beside a dog's paws: shampoo, towel and brush.",
    credit: "Mathew Coulton",
    creditUrl: "https://www.pexels.com/@mathew-coulton-2358287",
    sourcePage:
      "https://www.pexels.com/photo/white-short-coated-dog-on-a-wooden-floor-with-towel-and-bath-essentials-4432261/",
    query: "dog dried with towel after bath",
    role: "lead",
  },
  "lead-puppy": {
    id: "lead-puppy",
    base: "https://images.pexels.com/photos/32378664/pexels-photo-32378664.jpeg",
    alt: "A woman lying in a meadow with a Golden Retriever puppy among daisies.",
    credit: "JacLou- DL",
    creditUrl: "https://www.pexels.com/@jaclou-dl",
    sourcePage:
      "https://www.pexels.com/photo/woman-and-golden-retriever-puppy-relaxing-in-meadow-32378664/",
    query: "puppy golden retriever with owner",
    role: "lead",
  },
  "lead-senior": {
    id: "lead-senior",
    base: "https://images.pexels.com/photos/5255270/pexels-photo-5255270.jpeg",
    alt: "A woman gently touching a light-coated Labrador Retriever lying on a bed.",
    credit: "Samson Katt",
    creditUrl: "https://www.pexels.com/@samson-katt",
    sourcePage:
      "https://www.pexels.com/photo/crop-faceless-woman-caressing-purebred-labrador-retriever-in-light-room-5255270/",
    query: "senior old dog grey muzzle owner",
    role: "lead",
  },
  "lead-anxious": {
    id: "lead-anxious",
    base: "https://images.pexels.com/photos/7114115/pexels-photo-7114115.jpeg",
    alt: "A dog peering out cautiously from behind a sofa on a wooden floor.",
    credit: "cottonbro studio",
    creditUrl: "https://www.pexels.com/@cottonbro",
    sourcePage: "https://www.pexels.com/photo/dog-lying-on-wood-floor-7114115/",
    query: "nervous anxious dog hiding scared",
    role: "lead",
  },
  "lead-problems": {
    id: "lead-problems",
    base: "https://images.pexels.com/photos/19145881/pexels-photo-19145881.jpeg",
    alt: "A wet dog at a grooming station being checked over during a wash.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage: "https://www.pexels.com/photo/washing-dog-at-saloon-19145881/",
    query: "dog bath washing shampoo tub",
    role: "lead",
  },
  "lead-groomer": {
    id: "lead-groomer",
    base: "https://images.pexels.com/photos/19145895/pexels-photo-19145895.jpeg",
    alt: "A groomer bathing a small dog in a professional grooming salon.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage: "https://www.pexels.com/photo/groomer-washing-dog-19145895/",
    query: "dog grooming salon interior groomer working",
    role: "lead",
  },
  "lead-cost": {
    id: "lead-cost",
    base: "https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg",
    alt: "A groomer washing a curly-coated dog at a grooming salon.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage:
      "https://www.pexels.com/photo/groomer-standing-and-washing-dog-19145897/",
    query: "dog grooming salon interior groomer working",
    role: "lead",
  },
  "lead-about": {
    id: "lead-about",
    base: "https://images.pexels.com/photos/7474087/pexels-photo-7474087.jpeg",
    alt: "A person in a blue shirt hugging a dog, the dog leaning into them.",
    credit: "Mikhail Nilov",
    creditUrl: "https://www.pexels.com/@mikhail-nilov",
    sourcePage: "https://www.pexels.com/photo/person-hugging-the-dog-7474087/",
    query: "woman hugging dog trust bond",
    role: "lead",
  },

  /* ---- Instructional figures ---- */
  "coat-smooth": {
    id: "coat-smooth",
    base: "https://images.pexels.com/photos/28802002/pexels-photo-28802002.jpeg",
    alt: "A Beagle standing in profile, showing a short close-lying smooth coat.",
    credit: "Doğan Alpaslan Demir",
    creditUrl: "https://www.pexels.com/@izafi",
    sourcePage:
      "https://www.pexels.com/photo/beagle-standing-on-quiet-street-in-izmir-28802002/",
    query: "beagle short smooth coat standing",
    role: "instructional",
  },
  "coat-double": {
    id: "coat-double",
    base: "https://images.pexels.com/photos/29192690/pexels-photo-29192690.jpeg",
    alt: "A Siberian Husky outdoors, showing a dense double coat with a thick undercoat.",
    credit: "Sergei Starostin",
    creditUrl: "https://www.pexels.com/@sejio402",
    sourcePage:
      "https://www.pexels.com/photo/close-up-of-a-siberian-husky-outdoors-29192690/",
    query: "siberian husky double coat portrait",
    role: "instructional",
  },
  "coat-silky": {
    id: "coat-silky",
    base: "https://images.pexels.com/photos/12495815/pexels-photo-12495815.jpeg",
    alt: "A Yorkshire Terrier portrait showing long fine silky hair falling either side of the face.",
    credit: "Mirko Fabian",
    creditUrl: "https://www.pexels.com/@mirkofabian",
    sourcePage:
      "https://www.pexels.com/photo/close-up-photo-of-dog-near-white-wall-12495815/",
    query: "yorkshire terrier long silky hair",
    role: "instructional",
  },
  "coat-curly": {
    id: "coat-curly",
    base: "https://images.pexels.com/photos/8819909/pexels-photo-8819909.jpeg",
    alt: "A brown Poodle standing on a wooden floor, showing a dense curly coat.",
    credit: "Afif Ramdhasuma",
    creditUrl: "https://www.pexels.com/@javaistan",
    sourcePage: "https://www.pexels.com/photo/brown-poodle-8819909/",
    query: "poodle curly coat grooming",
    role: "instructional",
  },
  "coat-wire": {
    id: "coat-wire",
    base: "https://images.pexels.com/photos/3655387/pexels-photo-3655387.jpeg",
    alt: "A Schnauzer lying on a rug, showing a harsh wiry coat with furnished beard and eyebrows.",
    credit: "Sebastian Coman Travel",
    creditUrl: "https://www.pexels.com/@sebcomantravel",
    sourcePage: "https://www.pexels.com/photo/photo-of-schnauzer-3655387/",
    query: "schnauzer wire hair terrier",
    role: "instructional",
  },
  "coat-hairless": {
    id: "coat-hairless",
    base: "https://images.pexels.com/photos/33063709/pexels-photo-33063709.jpeg",
    alt: "A Chinese Crested standing on a leash, showing bare skin with tufts of hair on the head, tail and paws.",
    credit: "Veronika Andrews",
    creditUrl: "https://www.pexels.com/@veronika-andrews-2153322013",
    sourcePage:
      "https://www.pexels.com/photo/chinese-crested-dog-outdoors-on-leash-33063709/",
    query: "chinese crested hairless dog",
    role: "instructional",
  },
  "fig-nail-cut": {
    id: "fig-nail-cut",
    base: "https://images.pexels.com/photos/19145872/pexels-photo-19145872.jpeg",
    alt: "Close-up of a dog's paw supported from underneath while the nails are trimmed with clippers.",
    credit: "Goochie Poochie Grooming",
    creditUrl: "https://www.pexels.com/@goochie-poochie",
    sourcePage:
      "https://www.pexels.com/photo/dog-groomer-trimming-dogs-nails-19145872/",
    query: "dog paw nail trimming closeup",
    role: "instructional",
  },
  "fig-bath-tub": {
    id: "fig-bath-tub",
    base: "https://images.pexels.com/photos/6222967/pexels-photo-6222967.jpeg",
    alt: "A small dog standing in a bathtub with only a shallow depth of water.",
    credit: "Adrian Frentescu",
    creditUrl: "https://www.pexels.com/@frentescuphotography",
    sourcePage: "https://www.pexels.com/photo/yorkshire-terrier-in-bath-6222967/",
    query: "dog bath washing shampoo tub",
    role: "instructional",
  },
  "fur-texture": {
    id: "fur-texture",
    base: "https://images.pexels.com/photos/6131082/pexels-photo-6131082.jpeg",
    alt: "Extreme close-up of dog fur being parted, showing the coat down to the skin.",
    credit: "Tima Miroshnichenko",
    creditUrl: "https://www.pexels.com/@tima-miroshnichenko",
    sourcePage: "https://www.pexels.com/photo/close-up-photo-of-fur-6131082/",
    query: "dog shedding fur undercoat brushing hair",
    role: "instructional",
  },
};

/**
 * SLOTS WITH NO ACCEPTABLE PHOTOGRAPH.
 *
 * Two instructional steps returned no usable real photograph: every search
 * result was either human dentistry or a human dental clinic, which would be
 * actively misleading as grooming instruction. Per the asset rule these are
 * left as clearly identified placeholders rather than being filled with
 * generated or approximate imagery.
 */
export const PLACEHOLDERS: Record<
  string,
  { brief: string; reason: string; queries: string[] }
> = {
  "teeth-brushing-step": {
    brief: "A dog having its teeth brushed with a dog toothbrush, mouth lifted to show the outer surfaces of the upper teeth.",
    reason:
      "Every result for this slot was human dentistry — a human toothbrush, a human brushing their own teeth, or a human dental clinic. None depicts a dog's teeth being brushed, and using one would misrepresent the technique it is meant to illustrate.",
    queries: ["dog teeth brushing toothbrush", "vet cleaning dog teeth oral examination", "dog mouth teeth gums open closeup"],
  },
  "ear-cleaning-step": {
    brief: "A dog's ear flap lifted and the visible folds of the outer ear being wiped with a dampened cotton ball.",
    reason:
      "The search returned only wide clinical check-up photographs in which the ear is not the subject. An ear-cleaning figure has to show the ear itself to be useful, so none of the results could be used honestly.",
    queries: ["dog ear cleaning check veterinary"],
  },
};

export type Placeholder = (typeof PLACEHOLDERS)[string];

/** The provider's source aspect ratio for search-returned images. */
const RATIO = 627 / 1200;
const WIDTHS = [400, 640, 828, 1200, 1600];

/** Builds a responsive srcSet using the provider's own resize parameters. */
export function srcSet(photo: Photo): string {
  return WIDTHS.map((w) => {
    const h = Math.round(w * RATIO);
    return `${photo.base}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h} ${w}w`;
  }).join(", ");
}

export function srcAt(photo: Photo, w: number): string {
  const h = Math.round(w * RATIO);
  return `${photo.base}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

export function getPhoto(id: string): Photo | undefined {
  return PHOTOS[id];
}

export const IMAGE_COUNT = Object.keys(PHOTOS).length;
