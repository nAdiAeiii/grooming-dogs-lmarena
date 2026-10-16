import type { GuidePage } from "../types";

export const FOUNDATIONS: GuidePage[] = [
  {
    slug: "how-to-groom-your-dog-at-home",
    leadImageId: "lead-routine",
    clusterId: "routine",
    archetype: "pillar",
    primaryQuery: "how to groom a dog at home",
    supportingQueries: [
      "dog grooming at home for beginners",
      "what do I need to groom my dog",
      "order of dog grooming steps",
      "can I groom my dog myself",
      "how to dry a dog after a bath",
    ],
    intent:
      "You have decided to do this yourself. Here is the whole routine, in the order professionals use, what to buy, and where the job stops being a home job.",
    h1: "How to groom your dog at home, start to finish",
    metaTitle: "How to Groom a Dog at Home: The Full Routine in Order",
    metaDescription:
      "The complete at-home dog grooming routine in order: brush first, then nails, ears, bath, dry, face and trim, plus the kit list and costly mistakes.",
    answer:
      "Brush the whole coat out while it is dry, then trim nails, then clean the ears, then bathe, then dry completely, then do the face, teeth and any trimming. Bathing first is the most common beginner mistake — water tightens tangles into mats, and you cannot safely brush out a wet, matted coat.",
    prerequisites: [
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
      },
    ],
    blocks: [
      {
        kind: "h2",
        id: "kit",
        text: "Before you start: what you actually need",
      },
      {
        kind: "p",
        text: "The kit is smaller than the pet-shop shelf suggests. Buy for your dog's coat type — the same shopping list does not fit a Pug and a Poodle — and read [grooming tools explained](/grooming-tools/) before spending anything.",
      },
      {
        kind: "ul",
        items: [
          "**A brush that suits the coat.** Slicker for long, curly and double coats; a rubber curry or grooming mitt for short coats; a metal greyhound-style comb to check your own work.",
          "**Dog shampoo.** Formulated for dogs, not people. Anything medicated is a conversation with your vet, not a shelf decision.",
          "**Nail clippers or a grinder**, plus styptic powder to stop bleeding if you go too short.",
          "**An ear cleaner approved by your vet.** Not alcohol, not peroxide, not a home vinegar mix.",
          "**Dog toothpaste and a dog toothbrush.** Human toothpaste is not safe for dogs.",
          "**Towels you do not care about**, and a non-slip mat for the bath or shower floor.",
          "**Clippers only if your dog genuinely needs a haircut** — see [haircuts and trimming](/dog-haircuts-and-trimming/) before buying.",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Set up on a non-slip surface",
        text: "A dog that cannot get its feet planted will panic before you touch it. A rubber mat in the bath, or a towel on a table, does more for cooperation than any treat strategy.",
      },
      {
        kind: "h2",
        id: "order",
        text: "The order matters more than the technique",
      },
      {
        kind: "p",
        text: "Every step in this sequence exists because of what the next step does to the coat. Brushing removes tangles that water would set. Nail and ear work happens while the dog is dry and less stressed. Trimming happens last, on a clean, dry, knot-free coat, because clippers and scissors cannot safely cut matted or damp hair.",
      },
      {
        kind: "ol",
        items: [
          "Brush the whole coat, dry, including armpits, behind the ears, the collar area and the trousers.",
          "Trim nails.",
          "Clean the part of the ears you can see.",
          "Bathe and rinse thoroughly.",
          "Dry completely, on cool or low heat.",
          "Face, eyes, tear stains and teeth.",
          "Trim feet, sanitary areas and anywhere the coat drags.",
          "Final comb-through and a check for anything you missed.",
        ],
      },
      {
        kind: "h2",
        id: "brush-first",
        text: "Step 1 — Brush the entire coat while it is dry",
      },
      {
        kind: "p",
        text: "This is the step people skip, and it is the reason a home groom goes wrong. Work in sections, part the hair until you can see skin, and brush from the skin outward — brushing only the top layer hides mats underneath and makes them worse. Finish each section by drawing a metal comb through it: if the comb catches, you are not done.",
      },
      {
        kind: "p",
        text: "If you find a mat, stop and deal with it now. Full technique is on [brushing, mats and shedding](/brushing-mats-and-shedding/). If a mat is tight against the skin, or there are many of them, do not bathe the dog and do not reach for scissors — that combination is how dogs get cut.",
      },
      {
        kind: "h2",
        id: "nails-and-ears",
        text: "Steps 2 and 3 — Nails and ears while the dog is calm and dry",
      },
      {
        kind: "p",
        text: "Doing these before the bath means doing them before the dog is wet, shaking and wound up. Take a little off each nail rather than a lot at once, keep styptic powder within reach, and stop at the first sign of real distress — a dog that learns it can end nail trimming by struggling will do it every time. If your dog already hates nail handling, start on [grooming a nervous dog](/grooming-anxious-dog/) instead of forcing this session.",
      },
      {
        kind: "p",
        text: "For ears, dampen a cotton ball with a dog-safe cleaner and wipe the folds you can see. Never push anything down the canal. If the ear is red, smelly, painful or full of discharge, that is not a cleaning job — see [ear cleaning](/cleaning-dog-ears/) for where the line is.",
      },
      {
        kind: "h2",
        id: "bath",
        text: "Step 4 — Bathe properly",
      },
      {
        kind: "p",
        text: "Lukewarm water, dog shampoo, two shampoos if the dog is genuinely dirty, and a longer rinse than you think you need. Residual shampoo is a common cause of scratching after a bath. Keep water and soap out of the eyes and ears, and use a damp cloth on the face rather than the shower head. The full method, including how often to do it, is on [bathing your dog](/bathing-your-dog/).",
      },
      {
        kind: "h2",
        id: "dry",
        text: "Step 5 — Dry completely",
      },
      {
        kind: "p",
        text: "Towel first, then air or a dryer on cool. If you use a dryer, keep it moving and hold it away from the skin; a human hair dryer on hot, held in one place, will burn a dog before it complains. A dense coat left damp — especially a double or curly coat — is a classic setup for moist skin irritation. Rubbing vigorously with a towel can tangle a long coat, so squeeze and blot instead.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Sore skin within a few days of a groom is not normal",
        text: "Redness, scabs, pimple-like bumps or a dog that will not stop scratching in the days after grooming can indicate a skin infection that needs treatment. Do not re-bathe and hope. Read [grooming problems and troubleshooting](/dog-grooming-problems/) and speak to your vet.",
      },
      {
        kind: "h2",
        id: "face-and-teeth",
        text: "Step 6 — Face, eyes and teeth",
      },
      {
        kind: "p",
        text: "Wipe around the eyes with a damp cloth, and wipe away tear staining rather than scrubbing it. Then brush teeth with dog toothpaste — this is the step with the biggest long-term pay-off and the one most people drop. If your dog will not accept it yet, the desensitisation steps on [brushing your dog's teeth](/brushing-dog-teeth/) take about a week.",
      },
      {
        kind: "h2",
        id: "trim",
        text: "Step 7 — Trim only what needs trimming",
      },
      {
        kind: "p",
        text: "At home, limit clipping and scissor work to the hair between the paw pads, around the sanitary area, and anywhere that drags on the ground or covers the eyes. Breed-standard trims are a genuinely skilled job; attempting them usually produces an uneven result at best and an injured dog at worst. See [haircuts and trimming](/dog-haircuts-and-trimming/) for what is realistic.",
      },
      {
        kind: "h2",
        id: "mistakes",
        text: "The mistakes that cost the most",
      },
      {
        kind: "ul",
        items: [
          "**Bathing a matted dog.** The mats tighten and set, and a set mat usually has to be shaved out.",
          "**Using scissors to cut a mat out.** Skin folds pull up into the mat, and this is one of the most common grooming injuries seen in practice.",
          "**Shaving a double-coated breed.** It removes the coat's insulation and can permanently change how it grows back.",
          "**Hot drying.** Heat damage and burns, particularly on short-coated dogs.",
          "**Human shampoo, human toothpaste.** Both are formulated for different skin and different swallowing habits.",
          "**Skipping the comb check.** Brushing the surface hides the mats you will find next month.",
          "**Doing everything in one long session.** Five minutes of struggling teaches a dog that struggling works. Split the session.",
        ],
      },
      {
        kind: "h2",
        id: "handover",
        text: "When this stops being a home job",
      },
      {
        kind: "ul",
        items: [
          "A coat that is pelted or heavily matted — this needs a professional shave-down, sometimes with sedation arranged through a vet.",
          "Any haircut you want to look like a haircut.",
          "A dog that bites or genuinely panics at handling, or that has a medical condition making restraint risky.",
          "Nails you cannot trim because the dog will not allow it, or because the quick has grown long.",
          "Skin problems, ear infections, lumps or wounds — those are veterinary territory, not grooming territory.",
        ],
      },
      {
        kind: "p",
        text: "Handing over is not a failure of the routine. Most people who groom at home still use a professional a few times a year, and knowing what to ask for is on [choosing a dog groomer](/choosing-a-dog-groomer/).",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Grooming does not replace a physical examination",
        text: "Home grooming does put your hands on the whole dog, which is genuinely useful — use it to notice new lumps, sore spots, skin changes or pain. Noticing them is your job; diagnosing them is your vet's.",
      },
    ],
    faqs: [
      {
        q: "How long does grooming a dog at home take?",
        a: "For a small, short-coated dog, 30–45 minutes including drying. For a medium dog with a curly or long coat kept in full length, expect 90 minutes or more. Your first few sessions will take roughly twice as long as later ones, so split them rather than pushing through.",
      },
      {
        q: "Do I need a grooming table?",
        a: "No, but you need a non-slip surface at a height that does not wreck your back, and a way to keep the dog safely in place. A bath mat in the bath plus a towel on a worktop does the job for most small dogs. Never leave a dog unattended on a raised surface.",
      },
      {
        q: "Can I use my own shampoo on my dog?",
        a: "It is not recommended. Dog skin sits at a different pH from human skin, and human shampoos are formulated more acidic, often with fragrances and ingredients that irritate a dog's skin. Use a shampoo made for dogs, and a medicated one only on veterinary advice.",
      },
      {
        q: "Can I use human hair clippers on my dog?",
        a: "They are designed for fine human hair, not dense dog coat, and will pull, snag and overheat. If your dog needs clipping, use clippers designed for animals with the right blade, and read [haircuts and trimming](/dog-haircuts-and-trimming/) first.",
      },
      {
        q: "How often should I do all of this?",
        a: "Not every step, every time. Brushing and teeth are frequent; bathing and nail trimming are on a cycle set by coat type. Build it once with [how often should you groom your dog](/how-often-should-you-groom-your-dog/).",
      },
    ],
    related: [
      {
        href: "/how-often-should-you-groom-your-dog/",
        label: "How often should you groom your dog?",
        why: "Turn this one-off routine into a repeating schedule based on your dog's coat type.",
      },
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
        why: "Everything above changes depending on whether your dog has a smooth, double, silky, curly or wire coat.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "The single step that decides whether the rest of the routine works.",
      },
      {
        href: "/grooming-tools/",
        label: "Grooming tools, matched to coat type",
        why: "Buy the three tools that suit your dog instead of the twelve that don't.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "For the parts of the job that are genuinely skilled work.",
      },
    ],
  },

  {
    slug: "how-often-should-you-groom-your-dog",
    leadImageId: "lead-frequency",
    clusterId: "frequency",
    archetype: "pillar",
    primaryQuery: "how often should you groom your dog",
    supportingQueries: [
      "how often should I bathe my dog",
      "how often should I brush my dog",
      "how often should I trim my dog's nails",
      "how often should I clean my dog's ears",
      "dog grooming schedule",
    ],
    intent:
      "You are building a calendar, not learning a technique. The answer depends almost entirely on coat type, so start there and then adjust for your dog.",
    h1: "How often should you groom your dog?",
    metaTitle: "How Often Should You Groom Your Dog? Schedule by Coat Type",
    metaDescription:
      "Brushing every week or every day, baths every 3 to 12 weeks, nails every 3–4 weeks: a grooming schedule built around coat type, with the checks that tell you it's time.",
    answer:
      "Plan around coat type, not breed marketing. Brushing runs from weekly for short coats to daily for long, silky and curly coats; baths run roughly every 3–12 weeks; nails usually every 3–4 weeks; ears only when they need it. Two signals beat every calendar: nails clicking on the floor, and a coat that holds a mat when you pinch it.",
    blocks: [
      { kind: "widget", widget: "schedule" },
      {
        kind: "h2",
        id: "coat-decides",
        text: "Why coat type decides everything",
      },
      {
        kind: "p",
        text: "Breed names are marketing shorthand. What actually determines grooming frequency is the physical structure of the hair: how long it is, whether there is an undercoat, whether it curls, and how quickly it grows. A Lhasa Apso and a Shih Tzu need near-identical routines; a Golden Retriever and a Standard Poodle need completely different ones. If you are not certain what your dog has, [identify its coat type first](/coat-types-and-breed-grooming/).",
      },
      {
        kind: "h2",
        id: "by-coat-type",
        text: "The cadences, by coat type",
      },
      {
        kind: "table",
        caption:
          "Ranges reflect guidance published by veterinary and grooming sources that organise frequency by coat type. Treat them as starting points for a healthy adult dog, not rules.",
        head: ["Coat type", "Brushing", "Bathing", "Nails", "Ears"],
        rows: [
          [
            "Short, smooth",
            "Weekly, with a mitt or curry",
            "Every 6–12 weeks",
            "Every 3–4 weeks",
            "Check weekly, clean when needed",
          ],
          [
            "Double coat",
            "1–3 times a week, daily in spring and autumn sheds",
            "Every 6–8 weeks",
            "Every 3–4 weeks",
            "Check weekly",
          ],
          [
            "Long, silky",
            "Daily, or every other day at minimum",
            "Every 3–4 weeks",
            "Every 2–4 weeks",
            "Check twice a week — hair traps debris",
          ],
          [
            "Curly or wavy",
            "Daily to every other day, to the skin",
            "Every 4–6 weeks",
            "Every 3–4 weeks",
            "Check weekly, pluck or trim only on advice",
          ],
          [
            "Wire",
            "Weekly brushing, professional hand-stripping or trimming on a cycle",
            "Every 6–8 weeks",
            "Every 3–4 weeks",
            "Check weekly",
          ],
          [
            "Hairless",
            "Minimal — skin care instead",
            "Often weekly, with a gentle shampoo",
            "Every 2–3 weeks",
            "Check weekly",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Where these numbers come from",
        text: "Published frequency guidance varies between sources, and the ranges above deliberately overlap rather than pretend at precision. Independent grooming and veterinary sources agree on the direction of travel: short and wire coats tolerate longer intervals, long and silky coats need the shortest bath cycle and the most brushing, and curly coats fail fastest when brushing is skipped because they mat rather than shed.",
      },
      {
        kind: "h2",
        id: "adjust",
        text: "Adjust for your dog, not for the average",
      },
      {
        kind: "ul",
        items: [
          "**Lifestyle.** A dog that swims, walks through mud or sleeps in your bed needs more bathing than the table suggests.",
          "**Skin disease.** Allergies, seborrhoea and infections change everything — follow your vet's instructions rather than any schedule on the internet, and see [grooming problems](/dog-grooming-problems/).",
          "**Age.** Seniors often cannot stand for long sessions and may need more bathing for hygiene reasons. See [senior dog grooming](/senior-dog-grooming/).",
          "**Coat length you keep.** A curly coat clipped short is dramatically less work than the same coat left long.",
          "**Shedding season.** Double coats blow their undercoat once or twice a year. During those weeks, brushing becomes a daily job.",
        ],
      },
      {
        kind: "h2",
        id: "checks",
        text: "The checks that tell you it's time",
      },
      {
        kind: "p",
        text: "A calendar is a substitute for looking at the dog. These five checks take under a minute:",
      },
      {
        kind: "ul",
        items: [
          "**The click test.** Nails clicking on a hard floor are too long.",
          "**The pinch test.** Pinch a small section of coat near the armpit, behind the ear or where the collar sits. If it holds together as a felted pad rather than separating into hair, a mat is forming.",
          "**The smell test.** A dog that smells within days of a bath usually has a skin or ear problem, not a grooming gap.",
          "**The ear look.** Redness, head shaking, scratching, or discharge means stop cleaning and call the vet.",
          "**The eye check.** Hair touching the cornea needs trimming, whichever day the calendar says.",
        ],
      },
      {
        kind: "h2",
        id: "four-situations",
        text: "A realistic schedule for four common situations",
      },
      {
        kind: "table",
        head: ["Your dog", "Weekly", "Every 3–4 weeks", "Every 6–8 weeks", "Annually"],
        rows: [
          [
            "Short, smooth coat (Pug, Beagle, Boxer)",
            "Mitt brush, ear check, teeth",
            "Nails",
            "Bath",
            "Vet dental check",
          ],
          [
            "Double coat (Labrador, Husky, Golden)",
            "Slicker or undercoat rake, teeth",
            "Nails, bath",
            "Thorough de-shed session",
            "De-shed peak in spring and autumn",
          ],
          [
            "Curly coat kept long (Poodle, Doodle)",
            "Daily line-brushing, teeth, ear check",
            "Nails, bath, blow-dry, face and feet trim",
            "Full haircut, usually professional",
            "Clipping skill refresher or a groomer you trust",
          ],
          [
            "Senior dog, any coat",
            "Short gentle sessions, teeth, ear check",
            "Nails — often more often, as activity drops",
            "Bath, with non-slip support",
            "Vet check before any long session",
          ],
        ],
      },
      {
        kind: "h2",
        id: "delegate",
        text: "What you can delegate",
      },
      {
        kind: "p",
        text: "Most people who groom at home still hand over the haircut, the de-matting and sometimes the drying. There is no rule that says a schedule has to be all home work: work out what your time and your dog's tolerance actually allow, then price the rest with [what dog grooming costs](/dog-grooming-cost/).",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "If your vet has given you a bathing protocol, it wins",
        text: "Dogs on treatment for skin disease are often on a specific shampoo, contact time and frequency. That instruction overrides every general schedule, including this one.",
      },
    ],
    faqs: [
      {
        q: "Can I bathe my dog once a week?",
        a: "Not as routine. Regular weekly bathing with a standard shampoo is more than most coats need and can dry the skin. The exceptions are hairless breeds, dogs with a veterinary bathing protocol, and dogs with a genuine hygiene need — use the product your vet recommends in those cases.",
      },
      {
        q: "Is it bad to never bathe your dog?",
        a: "Going too far the other way is the more common problem, but never bathing a dog does have costs: dead coat, grease and debris build up, and you lose the chance to put hands on the skin and notice changes early. Most dogs are fine somewhere between every four and twelve weeks.",
      },
      {
        q: "How often should a short-haired dog be groomed?",
        a: "Weekly brushing with a mitt or curry, nails roughly monthly, and a bath every six to twelve weeks. Short coats are low maintenance, not zero maintenance — brushing removes dead hair you would otherwise find on your clothes.",
      },
      {
        q: "How often should a puppy be groomed?",
        a: "Puppies need short, frequent handling sessions rather than full grooms — a few minutes, several times a week, building up each task. See [puppy grooming](/puppy-grooming/) for the sequence.",
      },
      {
        q: "How often should my dog see a professional groomer?",
        a: "For dogs that need clipping, typically every four to eight weeks depending on how long you keep the coat. Dogs that only need bathing and de-shedding might go two or three times a year. [Choosing a dog groomer](/choosing-a-dog-groomer/) covers what to ask for.",
      },
    ],
    related: [
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
        why: "Every cadence above depends on knowing which coat your dog has.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "The how, once the schedule tells you when.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "The item on this schedule that slips most often, with the biggest consequences.",
      },
      {
        href: "/dog-grooming-problems/",
        label: "Grooming problems and troubleshooting",
        why: "For when the schedule is being kept and something still isn't right.",
      },
    ],
  },

  {
    slug: "coat-types-and-breed-grooming",
    leadImageId: "lead-coat",
    clusterId: "coat-type",
    archetype: "reference",
    primaryQuery: "dog coat types",
    supportingQueries: [
      "what coat type is my dog",
      "how to groom a golden retriever",
      "how to groom a poodle",
      "double coat dog breeds",
      "wire coat hand stripping",
      "should I shave my double-coated dog",
    ],
    intent:
      "You want to know what kind of coat your dog has and what that means for the work involved — including whether your specific breed needs something unusual.",
    h1: "Dog coat types and what each one needs",
    metaTitle: "Dog Coat Types Explained: Grooming Needs by Coat and Breed",
    metaDescription:
      "Six coat types decide how often you brush, bathe and clip: smooth, double, silky, curly, wire and hairless. Identify yours and see where breed matters.",
    answer:
      "Six coat types cover almost every dog: short and smooth, double, long and silky, curly or wavy, wire, and hairless. Coat type — not breed name — sets your brushing frequency, bath interval and tool list. Breed only starts to matter when a standard trim, hand-stripping or a mixed coat enters the picture.",
    blocks: [
      {
        kind: "h2",
        id: "identify",
        text: "Find your dog's coat type",
      },
      {
        kind: "p",
        text: "Run your hand against the grain and look closely at a single section of hair. If you can see a short, dense, downy layer underneath longer guard hairs, you have a double coat. If the hair curls when it grows past about a centimetre, you have a curly coat. If it is long, fine and flat, it is silky. If it feels harsh and snaps rather than bends, it is wire.",
      },
      {
        kind: "figure",
        imageId: "fur-texture",
        caption:
          "Parting the coat to the skin. A double coat has a soft dense layer underneath longer, harsher guard hairs; a single coat has one layer only.",
      },
      {
        kind: "table",
        head: ["Coat type", "What it feels like", "Typical breeds"],
        rows: [
          [
            "Short, smooth",
            "Close-lying, firm, single layer",
            "Boxer, Beagle, Great Dane, Doberman, Vizsla, Pug",
          ],
          [
            "Double",
            "Dense soft undercoat under harsher guard hairs",
            "Labrador, Golden Retriever, Husky, German Shepherd, Pomeranian, Corgi, Shiba Inu",
          ],
          [
            "Long, silky",
            "Fine, flat, drags toward the floor, tangles easily",
            "Yorkshire Terrier, Maltese, Shih Tzu, Lhasa Apso, Afghan Hound, Papillon",
          ],
          [
            "Curly or wavy",
            "Coils rather than sheds; keeps growing",
            "Poodle, Bichon Frise, Portuguese Water Dog, most Doodles",
          ],
          [
            "Wire",
            "Harsh, crimped, springy; dirt rolls off it",
            "Most terriers, Schnauzer, Wirehaired Pointers, Brussels Griffon",
          ],
          [
            "Hairless",
            "Bare or sparsely haired skin",
            "Chinese Crested, Xoloitzcuintli, American Hairless Terrier",
          ],
        ],
      },
      {
        kind: "h2",
        id: "smooth",
        text: "Short and smooth coats",
      },
      {
        kind: "p",
        text: "The least work, and the easiest to over-groom. A rubber curry or grooming mitt once a week lifts out dead hair and distributes skin oils, which does more for shine than any shampoo. Bathing every six to twelve weeks is plenty. Watch the elbows on heavy breeds, where the coat can wear thin, and remember that short coats still need nails, ears and teeth on the same cycle as everyone else.",
      },
      {
        kind: "figure",
        imageId: "coat-smooth",
        caption:
          "Short and smooth: a single layer lying close to the body. Dirt slides off it, and a rubber curry once a week is usually all it asks for.",
      },
      {
        kind: "h2",
        id: "double",
        text: "Double coats",
      },
      {
        kind: "p",
        text: "Two layers doing opposite jobs: a dense insulating undercoat and weather-resistant guard hairs on top. The undercoat sheds out once or twice a year in a big push, and mats where it is compressed — behind the ears, at the collar, in the trousers and under the armpits. Use an undercoat rake or slicker, work to the skin, and expect brushing to become a near-daily job during a coat blow.",
      },
      {
        kind: "figure",
        imageId: "coat-double",
        caption:
          "Double coat: a dense insulating undercoat beneath weather-resistant guard hairs. The undercoat is what sheds, what mats, and what must not be shaved.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Do not shave a double-coated dog for the summer",
        text: "The undercoat insulates against heat as well as cold, and shaving removes that while risking permanent changes to how the coat regrows — some double coats never return to their original texture. It also exposes skin that has no natural sun protection. De-shed thoroughly instead of cutting length.",
      },
      {
        kind: "h2",
        id: "silky",
        text: "Long and silky coats",
      },
      {
        kind: "p",
        text: "The highest-maintenance coat in daily terms, because fine hair mats rather than sheds and continues growing. Daily brushing to the skin, a bath every three to four weeks, and drying that is blot-and-squeeze rather than vigorous rubbing. If you do not want the daily commitment, the honest answer is a shorter trim, not more frequent de-matting.",
      },
      {
        kind: "figure",
        imageId: "coat-silky",
        caption:
          "Long and silky: fine hair that continues growing and mats rather than shedding out. This is the coat that needs daily brushing to the skin.",
      },
      {
        kind: "h2",
        id: "curly",
        text: "Curly and wavy coats, including most doodles",
      },
      {
        kind: "p",
        text: "Curly coats shed into themselves. Loose hair stays in the coat and felts, which is why a curly coat can go from fine to pelted in a few neglected weeks. Brushing has to reach the skin — part the hair into sections and work through each one, then comb-check. These coats also need proper drying: left to air-dry, they can set into matting and develop musty odour. Trimming is a genuine skill, and most owners use a professional every four to eight weeks.",
      },
      {
        kind: "figure",
        imageId: "coat-curly",
        caption:
          "Curly or wavy: the hair coils and keeps growing, trapping shed hair in the coat. Left unbrushed it felts against the skin rather than dropping out.",
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Why doodles are unpredictable",
        text: "Labradoodles, Goldendoodles and other crosses can inherit any blend of coat type, and littermates can differ wildly. Judge the dog in front of you by its hair, not by its breed label — and expect to change your routine as an adult coat replaces the puppy coat, usually somewhere between eight and fourteen months.",
      },
      {
        kind: "h2",
        id: "wire",
        text: "Wire coats",
      },
      {
        kind: "p",
        text: "Wire hair grows, dies and stays in the follicle rather than shedding out cleanly. The traditional treatment is hand-stripping — pulling dead hair out by hand or with a stripping knife, which preserves the harsh texture and the coat's water resistance. Clipping is easier, cheaper and entirely reasonable for a pet dog, but it softens the texture and lightens the colour over time. Either way, wire coats need a cycle: roughly every six to eight weeks for a clip, and a longer interval between stripping sessions.",
      },
      {
        kind: "figure",
        imageId: "coat-wire",
        caption:
          "Wire: a harsh, crimped coat with furnishings on the beard, eyebrows and legs. Dirt tends to roll off it, and it can be clipped or hand-stripped.",
      },
      {
        kind: "h2",
        id: "hairless",
        text: "Hairless and thin-coated breeds",
      },
      {
        kind: "p",
        text: "Grooming shifts from hair to skin: more frequent gentle bathing, moisturising only on veterinary advice, sun protection, and careful handling because there is no coat to protect against nicks and friction. Many hairless dogs also grow tufts on the head, tail and feet that need trimming.",
      },
      {
        kind: "figure",
        imageId: "coat-hairless",
        caption:
          "Hairless: bare skin with tufts on the head, tail and paws. Grooming here is skin care — bathing, sun protection and careful handling — not coat care.",
      },
      {
        kind: "h2",
        id: "breed-matters",
        text: "Where breed genuinely does matter",
      },
      {
        kind: "p",
        text: "Breed matters for one reason: standard trims. These are patterned haircuts with named lengths and shapes, and they are skilled work.",
      },
      {
        kind: "table",
        head: ["Trim", "What it is", "Typical on"],
        rows: [
          [
            "Continental / modern poodle trims",
            "Shaped jacket with shaved or banded areas and rosette bracelets",
            "Poodles, in shows; pets usually get a lamb or teddy trim",
          ],
          [
            "Schnauzer trim",
            "Short back and neck, furnished legs, beard and eyebrows",
            "All three Schnauzer sizes",
          ],
          [
            "Cocker or Sussex spaniel trim",
            "Flat short back, long feathered legs, ears and skirt",
            "Cocker Spaniel, English Springer, Sussex",
          ],
          [
            "Westie head",
            "Round head shape, tapered ears, straight-standing tail hair",
            "West Highland White Terrier",
          ],
          [
            "Teddy bear or puppy trim",
            "One uniform rounded length all over, including the face",
            "Doodles, Bichons, Shih Tzus and many pets",
          ],
          [
            "Kennel or utility trim",
            "Short all over, practical, low maintenance",
            "Almost anything",
          ],
        ],
      },
      {
        kind: "p",
        text: "Describing a trim to a groomer in breed-standard language works far better than describing a length, which is why knowing the vocabulary helps even if you never touch a clipper yourself. The [grooming glossary](/glossary/) covers the rest of the terms you will hear.",
      },
      {
        kind: "h2",
        id: "mixed",
        text: "Mixed breeds: identify the coat, not the breed",
      },
      {
        kind: "p",
        text: "For a mixed-breed dog, ignore the ancestry report and look at the hair. If it curls, treat it as a curly coat. If it has a dense undercoat, treat it as a double coat and do not shave it. If it is harsh and springy, treat it as wire and decide whether you will clip or strip. Then set your routine with [how often you should groom](/how-often-should-you-groom-your-dog/).",
      },
    ],
    faqs: [
      {
        q: "Is a doodle a curly coat?",
        a: "Usually, but not always, and the texture can change as an adult coat comes in. Test it: if the hair coils and continues growing rather than shedding onto your floor, groom it as a curly coat — daily brushing to the skin, drying after every bath, and a trim cycle.",
      },
      {
        q: "How can I tell a double coat from a single coat?",
        a: "Part the hair on the back and look. Two visible layers — a soft dense one underneath and longer, harsher hairs on top — is a double coat. One layer only is a single coat. Doing this in the shed season makes it obvious, because the undercoat comes away in handfuls.",
      },
      {
        q: "What is hand stripping?",
        a: "Removing dead wire hair by hand or with a stripping knife so the new harsh coat can grow through, instead of cutting it with clippers. It keeps the texture and colour of a wire coat but takes longer, costs more and some dogs dislike it. Clipping is a legitimate alternative for pets, with a softer coat as the trade-off.",
      },
      {
        q: "My dog seems to be two coat types at once. What now?",
        a: "Common, especially in crosses. Groom for the higher-maintenance of the two where they overlap, and treat the areas separately — for example a curly body with a silky beard and trousers needs body brushing to the skin plus extra attention on the face.",
      },
    ],
    related: [
      {
        href: "/how-often-should-you-groom-your-dog/",
        label: "How often should you groom your dog?",
        why: "Turn your coat type into an actual calendar.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "The technique that matters most for double, silky and curly coats.",
      },
      {
        href: "/grooming-tools/",
        label: "Grooming tools, matched to coat type",
        why: "Which brush to buy for the coat you have just identified.",
      },
      {
        href: "/dog-haircuts-and-trimming/",
        label: "Haircuts and trimming",
        why: "What a standard trim involves, and what is realistic to attempt yourself.",
      },
    ],
  },
];
