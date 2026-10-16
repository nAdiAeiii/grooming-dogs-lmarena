import type { GuidePage } from "../types";

export const TASKS_B: GuidePage[] = [
  {
    slug: "trimming-dog-nails",
    leadImageId: "lead-nails",
    clusterId: "nails",
    archetype: "task-guide",
    primaryQuery: "how to trim dog nails",
    supportingQueries: [
      "how to cut a dog's nails if they are black",
      "dog nail trimming quick",
      "nail grinder vs clipper",
      "how often to trim dog nails",
      "dog nail bleeding",
      "my dog won't let me cut his nails",
    ],
    intent:
      "You want short nails without hurting the dog — especially if the nails are black and you cannot see the quick.",
    h1: "Trimming your dog's nails without the drama",
    metaTitle: "How to Trim Dog Nails: Black Nails, the Quick and Grinders",
    metaDescription:
      "Trim dog nails safely: how short to cut, finding the quick on black nails, clipper vs grinder, what to do if a nail bleeds, and what to do if your dog refuses.",
    answer:
      "Take a small amount off each nail every three to four weeks rather than a lot at once. On clear nails, stop well before the pink quick; on black nails, trim in fine slices and look for the pale, chalky ring at the cut surface — that is where the quick starts. Have styptic powder on hand before you start, and if your dog fights nail handling, teach it rather than holding it down.",
    blocks: [
      {
        kind: "h2",
        id: "why",
        text: "Why nail length matters",
      },
      {
        kind: "p",
        text: "Overgrown nails change how a dog's foot meets the ground. The toe is forced to rotate, weight shifts onto the wrong part of the pad, and long-term that contributes to altered gait, sore feet and slipping on floors. Nails can also curl round and grow into the pad, which is painful and needs a vet.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The click test",
        text: "If you can hear your dog's nails on a hard floor, they are too long. This one check replaces any calendar — and it is the check most people never do.",
      },
      {
        kind: "h2",
        id: "how-often",
        text: "How often, and the receding quick",
      },
      {
        kind: "p",
        text: "Roughly every three to four weeks for most dogs, and more often for seniors or dogs that walk mainly on grass and carpet, because nothing files the nails down. If nails have been left long, the quick — the blood and nerve supply inside the nail — grows out with them. Trimming small amounts frequently over several weeks makes the quick recede, which is how you get very long nails back to a normal length without making the dog bleed.",
      },
      {
        kind: "h2",
        id: "reading-the-nail",
        text: "Finding the quick, including on black nails",
      },
      {
        kind: "ul",
        items: [
          "**Clear or pale nails.** The quick is visible as a pink triangle inside the nail. Stop two to three millimetres in front of it.",
          "**Black nails.** You cannot see the quick, so trim in fine slices. As you approach it, the cut surface shows a pale, chalky or grey oval in the centre — that is the quick approaching. Stop as soon as you see it.",
          "**Dew claws.** Do not forget them. They never touch the ground and are the nails most likely to curl into the pad.",
          "**The angle.** Cut across the nail at a slight angle following the natural shape of the underside, so the flat of the nail faces the ground.",
        ],
      },
      {
        kind: "h2",
        id: "method",
        text: "The trim",
      },
      {
        kind: "steps",
        items: [
          {
            title: "Get everything ready first",
            text: "Clippers or grinder, styptic powder or cornstarch, treats, and good lighting. If you have to get up mid-trim, the session usually ends.",
          },
          {
            title: "Handle the foot before you cut",
            text: "Hold the paw gently, touch each toe, and wait for the dog to relax before the first cut. A few seconds here saves a struggle later.",
          },
          {
            title: "Take a small slice off one nail",
            text: "Small, repeated cuts rather than one confident cut. If you are unsure, you can always take more off.",
          },
          {
            title: "Check the cut surface",
            text: "Clear nails: look at the distance to the pink. Black nails: look for the pale oval. Stop as soon as you see either.",
          },
          {
            title: "Reward, then continue",
            text: "One nail, one treat, in the early sessions. Build up to a whole paw, then a whole dog, over several sittings if needed.",
          },
          {
            title: "Stop before the dog decides to stop you",
            text: "End on a success even if you have only done three nails. A dog that learns struggling ends the session will struggle every time.",
          },
        ],
      },
      {
        kind: "figure",
        imageId: "fig-nail-cut",
        caption:
          "The paw supported from underneath while the nail is trimmed. Supporting the foot, rather than bending it, is what keeps most dogs settled.",
      },
      {
        kind: "h2",
        id: "grinder-vs-clipper",
        text: "Grinder or clipper?",
      },
      {
        kind: "table",
        head: ["", "Nail clipper", "Nail grinder"],
        rows: [
          [
            "Speed",
            "Fast — one cut per nail",
            "Slow — several passes per nail",
          ],
          [
            "Risk of hitting the quick",
            "Higher, because one cut removes a lot",
            "Lower, because material comes off gradually",
          ],
          [
            "Finish",
            "Can leave sharp edges",
            "Smooths and rounds the edge",
          ],
          [
            "Noise and sensation",
            "Quiet, one pinch",
            "Buzzing and vibration; many dogs need to be introduced to it",
          ],
          [
            "Best for",
            "Dogs that hold still and tolerate handling",
            "Black nails, nervous dogs, and finishing sharp edges",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "If you cut the quick",
        text: "It bleeds more than it hurts, and it looks alarming. Press styptic powder or cornstarch firmly into the tip and hold pressure for thirty seconds, then keep the dog off light carpets. If bleeding does not stop after several attempts, or the nail has torn rather than been cut, contact your vet.",
      },
      {
        kind: "h2",
        id: "refusal",
        text: "When your dog won't let you",
      },
      {
        kind: "p",
        text: "Nail trimming is the single most common grooming task owners give up on, and restraint is usually what caused it. The work is not about the nails at all — it is about teaching the dog that a foot being held predicts something good. The counter-conditioning steps are on [grooming a nervous dog](/grooming-anxious-dog/), and they take a week or two of two-minute sessions.",
      },
      {
        kind: "p",
        text: "If your dog has a history of biting during nail care, do not test it. Options include a groomer, a vet nurse appointment, or a vet discussing sedation for a trim — all of which are normal and none of which are failures.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Nails that need a vet, not a trim",
        text: "A nail torn or split into the quick, a nail growing into the pad, a nail that has suddenly changed shape or colour, a swelling at the nail bed, or a dog limping on one foot — all of these need to be looked at before anyone trims anything.",
      },
    ],
    faqs: [
      {
        q: "How short should dog nails be?",
        a: "Short enough that they do not touch the floor when the dog is standing, and silent on hard floors. When in doubt, stop earlier — you can always take more off in a week's time.",
      },
      {
        q: "How do I cut black dog nails?",
        a: "In fine slices, looking at the cut surface after each one. A pale grey or chalky oval appearing in the centre means you are close to the quick. Many people find a grinder safer on black nails because it removes so little at a time.",
      },
      {
        q: "Will the quick recede if I keep trimming?",
        a: "Yes, gradually. Trimming small amounts every week or two encourages the quick to shorten, which is the only way to bring badly overgrown nails back without causing pain.",
      },
      {
        q: "Does walking on pavement file dog nails?",
        a: "It helps, but rarely enough on its own. Dogs walked mainly on grass, carpet and soft ground still need trimming, and the dew claws never touch the ground at all.",
      },
      {
        q: "Can I use human nail clippers on a puppy?",
        a: "Small pet nail clippers or a gentle grinder are the right tools. Human clippers crush rather than cut a dog's nail, which is uncomfortable and can split it.",
      },
    ],
    related: [
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "The step-by-step fix for nail trimming refusal, which is the most common version of the problem.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "Where nail trimming sits in the full routine.",
      },
      {
        href: "/puppy-grooming/",
        label: "Puppy grooming",
        why: "Nails are the easiest thing to teach a puppy to accept, and the hardest thing to teach an adult.",
      },
      {
        href: "/senior-dog-grooming/",
        label: "Senior dog grooming",
        why: "Older dogs often need more frequent nail trims as activity drops.",
      },
    ],
  },

  {
    slug: "cleaning-dog-ears",
    leadImageId: "lead-ears",
    clusterId: "ears",
    archetype: "task-guide",
    primaryQuery: "how to clean dog ears",
    supportingQueries: [
      "how often to clean dog ears",
      "dog ear cleaner",
      "can I use peroxide in my dog's ear",
      "dog shaking head after grooming",
      "plucking dog ear hair",
    ],
    intent:
      "You want to clean the ears you can see without pushing anything into the canal, and you want to know when cleaning is the wrong move entirely.",
    h1: "Cleaning your dog's ears — and knowing when not to",
    metaTitle: "How to Clean Dog Ears Safly (and When to See a Vet Instead)",
    metaDescription:
      "Clean a dog's ears safely with a vet-approved cleaner and cotton balls, wipe only what you can see, and learn the signs that mean an infection, not a clean.",
    answer:
      "Put a dog-safe ear cleaner on a cotton ball and wipe the folds of the outer ear you can see. Never push anything down the canal, and do not use peroxide, alcohol or vinegar mixtures. Clean only when the ear needs it — weekly at most for maintenance. Head shaking, redness, smell, discharge or pain means stop cleaning and see your vet, because those are signs of an ear that needs treatment.",
    blocks: [
      {
        kind: "h2",
        id: "anatomy",
        text: "What you are cleaning, and what you are not",
      },
      {
        kind: "p",
        text: "A dog's ear canal is L-shaped: it runs down the side of the head and then turns inward toward the eardrum. You can clean the vertical part you can see and reach. You cannot and should not attempt anything deeper — cotton swabs pushed into the canal pack wax and debris further in, and a sudden head movement can drive one onto the eardrum.",
      },
      {
        kind: "h2",
        id: "method",
        text: "The cleaning method",
      },
      {
        kind: "steps",
        items: [
          {
            title: "Use a cleaner made for dogs",
            text: "A vet-approved ear cleaner, at room temperature. Cold solution in an ear makes many dogs flinch and shake. Nothing else — not alcohol, not peroxide, not water, not a homemade vinegar dilution.",
          },
          {
            title: "Dampen a cotton ball",
            text: "Soak it, then squeeze out the excess. You want it wet enough to wipe, not dripping.",
          },
          {
            title: "Wipe the visible folds",
            text: "Lift the ear flap and wipe the creases of the outer ear and the opening of the canal. Let the dog shake — it brings debris up from below.",
          },
          {
            title: "Use a fresh cotton ball for the second pass",
            text: "Wipe again with a clean one. You are aiming for visibly clean folds, not surgically clean skin.",
          },
          {
            title: "Reward and stop",
            text: "Keep the session short. An ear that gets a treat afterwards is an ear that can be examined when it matters.",
          },
        ],
      },
      {
        kind: "placeholder",
        placeholderId: "ear-cleaning-step",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Never put a cotton swab down the canal",
        text: "Swabs push wax deeper, and the eardrum is closer than people think. A ruptured eardrum from a swab is painful and can affect hearing. If the ear needs attention below the visible folds, that is a job for your vet with an otoscope.",
      },
      {
        kind: "h2",
        id: "how-often",
        text: "How often to clean ears",
      },
      {
        kind: "p",
        text: "Maintenance cleaning is usually weekly at most, and many dogs never need it at all. Over-cleaning strips the protective wax layer and creates exactly the inflammation you were trying to prevent. Clean when there is visible dirt or wax, after swimming, and as directed by your vet. Floppy-eared breeds and dogs that swim regularly need more attention than prick-eared dogs.",
      },
      {
        kind: "h2",
        id: "what-not-to-use",
        text: "What not to put in a dog's ear",
      },
      {
        kind: "ul",
        items: [
          "**Alcohol and hydrogen peroxide.** Irritating to the ear canal and damaging to healthy tissue.",
          "**Water.** Trapped moisture is a setup for infection. Dry ears after swimming.",
          "**Home vinegar dilutions.** The wrong acidity for an inflamed ear, and painful on broken skin.",
          "**Olive oil and other oils.** They sit in the canal, hold debris and are very hard to get out.",
          "**Human ear drops or leftover medication** from a previous course or another pet. The wrong medication in the wrong ear can make things significantly worse.",
        ],
      },
      {
        kind: "h2",
        id: "infection-signs",
        text: "The signs that mean stop cleaning",
      },
      {
        kind: "ul",
        items: [
          "Head shaking, or a head held tilted to one side",
          "Scratching at one ear repeatedly",
          "A smell from the ear",
          "Discharge — brown, yellow or bloody",
          "Redness, heat or swelling",
          "Pain when the ear is touched, or the dog pulling away",
          "A swelling like a balloon on the ear flap, which can be a haematoma and needs prompt treatment",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Cleaning an infected ear can make it worse",
        text: "Discharge and inflammation need a diagnosis before anything goes in the ear. Some cleaners are actively harmful with a ruptured eardrum, which your vet can only see with an otoscope. If the ear looks or smells wrong, book the appointment rather than cleaning it.",
      },
      {
        kind: "h2",
        id: "plucking",
        text: "Should you pluck ear hair?",
      },
      {
        kind: "p",
        text: "Some breeds grow hair inside the ear canal, and plucking it has been traditional in grooming. Practice has shifted: plucking causes inflammation in the canal, and inflammation invites infection, so many vets now advise trimming the hair at the opening rather than pulling it out. If your dog has recurrent ear problems, ask your vet what they want done with the ear hair before your next groom — and tell the groomer.",
      },
      {
        kind: "h2",
        id: "after-grooming",
        text: "Head shaking after a groom",
      },
      {
        kind: "p",
        text: "A dog that shakes its head for a few hours after a bath or a groom is usually reacting to water or hair clippings in the ear. Shaking that carries on into the next day, or thxt day, or that comes with smell, discharge or scratching, is more likely an ear problem — and it is worth a vet looking, because post-groom irritation and infection are treated very differently. See [grooming problems](/dog-grooming-problems/).",
      },
    ],
    faqs: [
      {
        q: "How often should I clean my dog's ears?",
        a: "For most dogs, only when there is visible wax or dirt — roughly weekly at most, and often less. Dogs that swim, floppy-eared breeds and dogs with a history of ear problems usually need more frequent checks. Over-cleaning causes the irritation people clean to prevent.",
      },
      {
        q: "Can I use hydrogen peroxide to clean my dog's ears?",
        a: "No. It is irritating to the skin lining the canal and it damages healthy tissue. Use a cleaner formulated for dogs, or one your vet has recommended for your dog's ear.",
      },
      {
        q: "My dog's ears are smelly but not red. Should I clean them?",
        a: "Odour often means infection or overgrowth of yeast or bacteria, which cleaning alone will not resolve. Have your vet look before you start, because treating the wrong thing can make the ear worse.",
      },
      {
        q: "Should I pluck my dog's ear hair?",
        a: "It is increasingly discouraged, because plucking inflames the canal. Trimming hair at the opening is usually enough. If your dog has repeated ear infections, ask your vet what they recommend before the next groom.",
      },
      {
        q: "Why does my dog yelp when I touch its ear?",
        a: "Pain in an ear is not a cleaning problem. It suggests inflammation, a foreign body such as a grass seed, or a middle ear issue, and it needs a vet to look with an otoscope.",
      },
    ],
    related: [
      {
        href: "/dog-grooming-problems/",
        label: "Grooming problems and troubleshooting",
        why: "For head shaking, smell and scratching — the symptoms that aren't a cleaning issue.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "Ear cleaning is step three of the routine, done before the bath.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "What to tell your groomer about your dog's ears before the appointment.",
      },
    ],
  },

  {
    slug: "brushing-dog-teeth",
    leadImageId: "lead-teeth",
    clusterId: "teeth",
    archetype: "task-guide",
    primaryQuery: "how to brush dog teeth",
    supportingQueries: [
      "how often should I brush my dog's teeth",
      "can I use human toothpaste on my dog",
      "dog teeth cleaning without brushing",
      "do dental chews work",
      "signs of dental disease in dogs",
    ],
    intent:
      "You want to do something useful for your dog's teeth, and you want to know whether the thing you're already buying is doing anything.",
    h1: "Brushing your dog's teeth, and what actually helps",
    metaTitle: "How to Brush a Dog's Teeth: Method, Toothpaste and Alternatives",
    metaDescription:
      "Brush a dog's teeth in five steps, which toothpaste is safe, how often to do it, whether dental chews work, and the signs a vet dental is needed.",
    answer:
      "Use a dog toothpaste and a soft brush, aim for daily but settle for several times a week, and work on the outside surfaces of the teeth — that is where most plaque builds. Human toothpaste is not safe for dogs. Dental chews and water additives are genuinely useful as extras, not as replacements; nothing you can buy substitutes for brushing, and nothing at all substitutes for a professional cleaning when disease is already present.",
    blocks: [
      {
        kind: "h2",
        id: "why",
        text: "Why this is the grooming task with the biggest pay-off",
      },
      {
        kind: "p",
        text: "Most dogs show some degree of dental disease by the time they are a few years old. Brushing is the one thing that consistently interrupts plaque where it forms, on the tooth surface, before it hardens into tartar. It also gets you looking inside the mouth regularly, which is how growths, fractured teeth and painful gums get noticed.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Never use human toothpaste",
        text: "Human toothpaste is formulated to be spat out, and dogs swallow it. Fluoride at swallowing doses and xylitol — a sweetener common in human toothpaste that is toxic to dogs — are both real problems. Use a toothpaste made for dogs, which is designed to be swallowed.",
      },
      {
        kind: "h2",
        id: "method",
        text: "How to brush",
      },
      {
        kind: "steps",
        intro:
          "If your dog has never had its mouth handled, spend a few days letting it lick toothpaste off your finger first. Rushing this step is what makes dogs hate toothbrushing.",
        items: [
          {
            title: "Let the dog taste the toothpaste",
            text: "Most dog toothpastes are flavoured to be appealing. The dog learning that a finger near the mouth means something good is the whole foundation.",
          },
          {
            title: "Lift the lip, don't open the mouth",
            text: "You do not need to open the jaw. Lift the cheek and brush the outside surfaces of the upper teeth, where plaque accumulates fastest.",
          },
          {
            title: "Small circles, angled slightly up",
            text: "Use a soft dog toothbrush or a finger brush, with a gentle circular motion at the gum line. Thirty seconds a side is genuinely useful.",
          },
          {
            title: "Work back to front",
            text: "The back upper molars and the canine teeth matter most. Front teeth are easy to reach and the least important.",
          },
          {
            title: "Stop before the dog objects",
            text: "End on a success. Two well-tolerated sessions a day for a week beats one fought-over session once a month.",
          },
        ],
      },
      {
        kind: "placeholder",
        placeholderId: "teeth-brushing-step",
      },
      {
        kind: "h2",
        id: "how-often",
        text: "How often",
      },
      {
        kind: "p",
        text: "Daily is the ideal, and a few times a week is a meaningful improvement on never. Brushing removes soft plaque, but plaque mineralises into tartar within a few days, and tartar does not come off with a brush. That is the whole reason frequency matters — and the whole reason a mouth with established tartar needs professional cleaning.",
      },
      {
        kind: "h2",
        id: "alternatives",
        text: "Do the alternatives work?",
      },
      {
        kind: "table",
        head: ["Approach", "What it can do", "What it can't do"],
        rows: [
          [
            "Brushing",
            "Removes plaque at the gum line, the site that matters",
            "Remove tartar that has already formed",
          ],
          [
            "Dental chews",
            "Provide some mechanical cleaning action; some are tested for tartar reduction",
            "Reach below the gum line or replace brushing",
          ],
          [
            "Dental diets and kibble",
            "Some are designed with texture that scrubs as the dog chews",
            "Clean the whole mouth or address established disease",
          ],
          [
            "Water additives and gels",
            "May slow plaque formation as a supplement",
            "Substitute for mechanical cleaning",
          ],
          [
            "Hard bones, antlers, hooves",
            "Nothing — they are a fracture risk",
            "Be safe. Broken teeth from chewing hard objects are common and expensive",
          ],
          [
            "Professional cleaning under anaesthesia",
            "Remove tartar above and below the gum line and treat disease",
            "Be replaced by any home method",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "How to tell a useful product from a marketing claim",
        text: "Look for products accepted by an independent dental efficacy body, such as the VOHC in the United States, which awards a seal to products that met its plaque or tartar reduction criteria in controlled studies. Anywhere else, 'clinically proven' on the packet is not evidence of anything.",
      },
      {
        kind: "h2",
        id: "vet-signs",
        text: "When this stops being home care",
      },
      {
        kind: "ul",
        items: [
          "Brown or yellow tartar, especially on the canine teeth and upper molars",
          "Red or bleeding gums, or a receding gum line",
          "Bad breath that is more than dog breath",
          "Drooling, dropping food, chewing on one side, or reluctance to eat",
          "A broken or discoloured tooth, or a swelling under the eye, which can indicate a tooth root abscess",
          "A growth inside the mouth",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Anaesthesia is not optional for a proper dental",
        text: "A genuine professional cleaning in dogs includes scaling above and below the gum line and dental radiographs, which requires general anaesthesia. 'Anaesthesia-free' cleaning removes visible tartar from the crown but cannot address disease under the gum line, where it does the damage.",
      },
    ],
    faqs: [
      {
        q: "Can I use human toothpaste on my dog?",
        a: "No. It is meant to be spat out, and dogs swallow it. Fluoride at swallowed doses is harmful, and xylitol — a common sweetener in human toothpaste — is toxic to dogs. Dog toothpaste is enzymatic, flavoured and safe to swallow.",
      },
      {
        q: "Do dental chews actually work?",
        a: "Partly. They provide mechanical abrasion as the dog chews, and some products carry independent acceptance for reducing plaque or tartar. They do not reach below the gum line and they are an addition to brushing, not a replacement for it.",
      },
      {
        q: "My dog won't let me brush its teeth. What now?",
        a: "Go back to toothpaste on a finger for a week, then a finger brush, then a proper brush, in short sessions. If your dog will genuinely not tolerate any mouth handling, ask your vet about alternatives — and expect the answer to be more frequent professional care rather than a product that solves it.",
      },
      {
        q: "How do I get tartar off my dog's teeth at home?",
        a: "You cannot, safely. Tartar is mineralised and attached to the tooth, and scraping it at home risks damaging the enamel and the gum, and leaving a rough surface that collects more. Removing it requires professional scaling.",
      },
      {
        q: "Are bones good for dogs' teeth?",
        a: "Weight-bearing bones, antlers and hooves are a common cause of fractured teeth. If you give something to chew, choose a product designed and tested for dental use, and pick a size appropriate for your dog.",
      },
    ],
    related: [
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "Teeth are step six of the routine — the one with the longest-term consequences.",
      },
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "Mouth handling is one of the hardest things to introduce to an unwilling adult dog.",
      },
      {
        href: "/puppy-grooming/",
        label: "Puppy grooming",
        why: "Toothbrushing is far easier to teach at eight weeks than at eight years.",
      },
      {
        href: "/senior-dog-grooming/",
        label: "Senior dog grooming",
        why: "Dental disease is common in older dogs and changes what a groom can safely include.",
      },
    ],
  },
];
