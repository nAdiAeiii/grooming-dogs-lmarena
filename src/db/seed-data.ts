import type { NewCoatSchedule } from "@/db/schema";

/**
 * Seed data for the coat-cadence tool.
 * Values summarise guidance published by veterinary and grooming sources that
 * organise grooming frequency by coat type. They are starting points for a
 * healthy adult dog, not clinical instructions.
 */
export const COAT_SCHEDULES: NewCoatSchedule[] = [
  {
    coatKey: "smooth",
    coatName: "Short & smooth",
    examples: "Boxer, Beagle, Great Dane, Doberman, Vizsla, Pug, French Bulldog",
    brushing: "Once a week with a rubber curry or grooming mitt. This lifts dead hair and spreads skin oils — it does more for shine than any shampoo.",
    bathing: "Every 6–12 weeks. These coats stay clean on their own, and over-bathing dries the skin.",
    nails: "Every 3–4 weeks. The click test is the real schedule: if you can hear them, they're too long.",
    ears: "Check weekly, clean only when there is visible wax or dirt.",
    professional: "Optional. Most owners of smooth-coated dogs never use a groomer.",
    watchFor: "Thin coat on the elbows in heavy breeds, and skin folds in wrinkled breeds that need wiping rather than washing.",
    sortOrder: 1,
  },
  {
    coatKey: "double",
    coatName: "Double coat",
    examples: "Labrador, Golden Retriever, Husky, German Shepherd, Pomeranian, Corgi, Shiba Inu",
    brushing: "1–3 times a week, daily during the spring and autumn coat blow. Use an undercoat rake, then a slicker, then comb-check.",
    bathing: "Every 6–8 weeks. Bathing more often than this strips the oils that keep the topcoat weather-resistant.",
    nails: "Every 3–4 weeks.",
    ears: "Check weekly. Dense undercoat behind the ears is where the first mats appear.",
    professional: "A de-shedding session 2–4 times a year is worth paying for, especially during a coat blow.",
    watchFor: "Matting behind the ears, under the collar and in the trousers. Do not shave — it removes the coat's insulation and can permanently change how it regrows.",
    sortOrder: 2,
  },
  {
    coatKey: "silky",
    coatName: "Long & silky",
    examples: "Yorkshire Terrier, Maltese, Shih Tzu, Lhasa Apso, Afghan Hound, Papillon",
    brushing: "Daily, or every other day at minimum. Fine hair mats rather than sheds, so this is the single non-negotiable task.",
    bathing: "Every 3–4 weeks, with a conditioner and careful towel-blotting rather than rubbing.",
    nails: "Every 2–4 weeks.",
    ears: "Check twice a week. Hair around the ear opening traps debris and food.",
    professional: "Every 4–8 weeks for a trim. Keeping the coat shorter dramatically reduces the daily work.",
    watchFor: "Mats in the armpits, behind the ears, under the collar and in the trousers. Wiping the beard after food prevents face matting.",
    sortOrder: 3,
  },
  {
    coatKey: "curly",
    coatName: "Curly or wavy",
    examples: "Poodle, Bichon Frise, Portuguese Water Dog, most Doodles",
    brushing: "Daily to every other day, always to the skin. Curly coats shed into themselves, and loose hair felts if it is not removed.",
    bathing: "Every 4–6 weeks, followed by thorough drying. Air-drying a curly coat is what sets it into matting.",
    nails: "Every 3–4 weeks.",
    ears: "Check weekly. Tell your groomer before you book whether you want ear hair trimmed or left alone.",
    professional: "Every 4–8 weeks for a trim. Expect this to be one of the more expensive coats to maintain.",
    watchFor: "The transition from puppy coat to adult coat, usually 8–14 months, when matting gets dramatically worse.",
    sortOrder: 4,
  },
  {
    coatKey: "wire",
    coatName: "Wire",
    examples: "Most terriers, Schnauzer, Wirehaired Pointing Griffon, Brussels Griffon",
    brushing: "Once a week with a pin brush, plus combing the furnishings and beard.",
    bathing: "Every 6–8 weeks. Bathing more often softens the wire texture.",
    nails: "Every 3–4 weeks.",
    ears: "Check weekly.",
    professional: "Clipping every 6–8 weeks, or hand-stripping on a longer cycle if you want to keep the harsh texture and colour.",
    watchFor: "Beard staining after food and water, and burrs in the leg furnishings.",
    sortOrder: 5,
  },
  {
    coatKey: "hairless",
    coatName: "Hairless",
    examples: "Chinese Crested, Xoloitzcuintli, American Hairless Terrier",
    brushing: "Minimal. Where tufts exist — head, tail, feet — trim them as needed.",
    bathing: "Often weekly, with a gentle shampoo, because skin care replaces coat care.",
    nails: "Every 2–3 weeks.",
    ears: "Check weekly.",
    professional: "Rarely needed, other than for the tufts.",
    watchFor: "Sun exposure, dryness and spots. Moisturise only on veterinary advice, and treat the skin as skin, not as coat.",
    sortOrder: 6,
  },
];
