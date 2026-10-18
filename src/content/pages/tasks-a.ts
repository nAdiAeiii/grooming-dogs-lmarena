import type { GuidePage } from "../types";

export const TASKS_A: GuidePage[] = [
  {
    slug: "bathing-your-dog",
    leadImageId: "lead-bathing",
    clusterId: "bathing",
    archetype: "task-guide",
    primaryQuery: "how to bathe a dog",
    supportingQueries: [
      "how often should I bathe my dog",
      "can I use human shampoo on my dog",
      "how to wash a dog's face",
      "how to dry a dog after a bath",
      "dog hates baths",
    ],
    intent:
      "You want to wash the dog without drying out its skin, flooding its ears or turning the bathroom into a lake.",
    h1: "Bathing your dog: the method, the water and the drying",
    metaTitle: "How to Bathe a Dog: Water Temperature, Shampoo and Drying",
    metaDescription:
      "How to bathe a dog: brush first, use dog shampoo, rinse far longer than you think, dry on cool. Includes face washing, bath frequency and bath-hating dogs.",
    answer:
      "Brush the coat out completely before it gets wet, use lukewarm water and a dog-formulated shampoo, keep soap and water away from eyes and ears, rinse for longer feels necessary, and dry thoroughly on cool. How often depends entirely on coat type — for most dogs that is every four to twelve weeks, not weekly.",
    prerequisites: [
      { href: "/brushing-mats-and-shedding/", label: "Brushing, mats and shedding" },
    ],
    blocks: [
      {
        kind: "h2",
        id: "before",
        text: "Do not skip the pre-bath brush",
      },
      {
        kind: "p",
        text: "Water tightens tangles. A small knot that would have brushed out in thirty seconds on a dry coat can become a felted mat that has to be shaved out once it has been washed and dried. Brush the whole dog first, comb-check behind the ears, the armpits, the trousers and the collar area, and deal with any mat before the tap goes on. If the coat is already matted, stop here: wash it and you will make it worse.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Cotton balls in the ears are controversial — a towel is not",
        text: "Some groomers place cotton balls loosely in the ears to keep water out. It works, but forgotten cotton causes more problems than it prevents. If you use them, count them in and count them out. The safer habit is simply to direct water away from the ear opening and to wipe the outer ear afterwards with a damp cloth.",
      },
      {
        kind: "h2",
        id: "setup",
        text: "Set up before the dog comes in",
      },
      {
        kind: "ul",
        items: [
          "**Everything within one arm's reach**: shampoo, treats, towels, a jug or detachable shower head. Stepping away from a wet dog is how escapes happen.",
          "**A non-slip mat** in the bath or shower, or on the ground outdoors.",
          "**Lukewarm water.** Test it on your inner wrist. Hot water is uncomfortable and dries the skin.",
          "**A tether or helper** for a dog with form for leaving mid-bath.",
          "**Towels laid on the floor** for the shake that is definitely coming.",
        ],
      },
      {
        kind: "figure",
        imageId: "fig-bath-tub",
        caption:
          "A shallow depth of water and a non-slip surface. Most bath reluctance is about footing and restraint, not about water.",
      },
      {
        kind: "h2",
        id: "method",
        text: "The bath, step by step",
      },
      {
        kind: "steps",
        intro:
          "Work from the neck back, and leave the face for last so the dog is not uncomfortable for the whole bath.",
        items: [
          {
            title: "Wet the coat thoroughly",
            text: "Use a jug or shower head on a gentle setting, working from the neck toward the tail and down the legs. Lift the coat to make sure water reaches the skin — a dense undercoat can look wet on top and be dry underneath.",
          },
          {
            title: "Shampoo, twice if the dog is dirty",
            text: "Start at the neck and work back and down, massaging in the direction of hair growth. A first wash loosens grease and debris; a second actually cleans. Diluting shampoo as the label directs makes it easier to rinse out.",
          },
          {
            title: "Rinse, then keep rinsing",
            text: "Residual shampoo is one of the most common causes of scratching after a bath. Rinse until the water runs completely clear, then do one more pass. This is the step people cut short.",
          },
          {
            title: "Do the face with a cloth",
            text: "A damp cloth or a vet-approved eye wipe around the eyes, muzzle and inside the ear flaps — no soap, no direct spray. Tear staining is wiped, not scrubbed.",
          },
          {
            title: "Conditioner if the coat is long or curly",
            text: "A dog conditioner helps a comb glide through long, silky or curly coats and reduces post-bath matting. Rinse it out unless it is a leave-in product.",
          },
          {
            title: "Blot, then dry",
            text: "Squeeze and blot with towels rather than rubbing hard, which tangles long coats. Then dry fully, on cool.",
          },
        ],
      },
      {
        kind: "h2",
        id: "drying",
        text: "Drying is not optional",
      },
      {
        kind: "p",
        text: "A dense coat left damp creates the warm, moist environment that irritates skin. Towel first, then either let the dog air-dry somewhere warm and draught-free or use a dryer on cool or low heat, kept moving, at a distance from the skin. Specially designed dog dryers blow a high volume of unheated air and are the right tool for a thick double or curly coat.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "A household hair dryer on hot will burn a dog",
        text: "Dogs will tolerate discomfort quietly, especially when restrained. Never aim hot air at one place, never hold the nozzle close to the skin, and never cover a dog with a hot-air source and walk away. If the skin feels hot to your hand, it is too hot for the dog.",
      },
      {
        kind: "h2",
        id: "shampoo-choice",
        text: "Which shampoo, and what to avoid",
      },
      {
        kind: "p",
        text: "Use a shampoo made for dogs. Human shampoo is formulated for more acidic skin and often contains fragrances and ingredients that irritate. Beyond that, the label matters less than the purpose: a general maintenance shampoo for a healthy dog, and a medicated shampoo chosen with your vet for a dog with a diagnosed skin condition.",
      },
      {
        kind: "ul",
        items: [
          "**Flea shampoos** are largely a legacy product; modern parasite prevention is more effective and less irritating. Ask your vet rather than self-prescribing.",
          "**Medicated and antibacterial shampoos** require the right diagnosis, contact time and frequency to work. Buying one off a shelf for an undiagnosed rash often delays proper treatment.",
          "**Puppy shampoos** are formulated to be milder and tear-free, which is worth having for the first few months.",
          "**Dry shampoo and waterless foam** is a stopgap between baths, not a replacement for one.",
        ],
      },
      {
        kind: "h2",
        id: "how-often",
        text: "How often to bathe",
      },
      {
        kind: "p",
        text: "Bathing frequency is set by coat type, and the numbers live on one page so they don't drift out of sync: [how often should you groom your dog](/how-often-should-you-groom-your-dog/). The short version is every three to four weeks for long silky coats, four to six for curly, six to eight for double and wire, and six to twelve for smooth coats. Bathing noticeably more often than that, without a veterinary reason, tends to produce dry, flaky, itchy skin.",
      },
      {
        kind: "h2",
        id: "hates-baths",
        text: "If your dog hates the bath",
      },
      {
        kind: "p",
        text: "Most bath-hating is about footing and restraint, not water. A non-slip mat, lukewarm rather than warm water, low water volume, and a treat on the bath edge will fix a surprising number of dogs. For anything more entrenched — thrashing, biting, trying to climb out — work through [grooming a nervous dog](/grooming-anxious-dog/) before the next attempt rather than holding the dog down and hoping it improves.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "When a bath is the wrong tool",
        text: "Do not bathe over broken or inflamed skin, open sores, or a suspected skin infection without speaking to your vet first. Bathing can spread bacteria and wash away the evidence your vet needs to see. See [grooming problems](/dog-grooming-problems/).",
      },
    ],
    faqs: [
      {
        q: "Can I use baby shampoo on my dog?",
        a: "It is milder than adult human shampoo and is sometimes suggested as a one-off emergency, but it is still formulated for human skin pH and is not a substitute for dog shampoo. Using it routinely is not recommended.",
      },
      {
        q: "How do I bathe a dog without a bath or hose?",
        a: "A shower with a detachable head works well. For small dogs, a deep sink with a jug works, provided there is a non-slip surface. Waterless foam and grooming wipes are a stopgap between baths rather than a replacement for them.",
      },
      {
        q: "Why does my dog smell bad two days after a bath?",
        a: "A persistent odour that returns within days is usually not a grooming problem. Common causes are skin infections, ear disease, dental disease or anal gland problems — all of which need a diagnosis rather than more shampoo.",
      },
      {
        q: "Should I bathe my dog before or after a haircut?",
        a: "Before. Clipping and scissoring are done on a clean, dry, knot-free coat: dirt blunts blades, and damp hair cannot be cut safely or evenly.",
      },
      {
        q: "Can I use a hair dryer on my dog?",
        a: "Only on the cool or lowest heat setting, kept moving and away from the skin. Many dogs find the noise and airflow distressing, in which case towel-drying plus a warm room is safer than forcing it.",
      },
    ],
    related: [
      {
        href: "/how-often-should-you-groom-your-dog/",
        label: "How often should you groom your dog?",
        why: "Set your bath interval by coat type rather than by guesswork.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "The step that has to happen before the bath — and the reason most baths go wrong.",
      },
      {
        href: "/cleaning-dog-ears/",
        label: "Ear cleaning",
        why: "Bath time is the natural moment to check ears, and the wrong moment to get water in them.",
      },
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "If bath time is a fight, fix the fight before the next wash.",
      },
    ],
  },

  {
    slug: "brushing-mats-and-shedding",
    leadImageId: "lead-brushing",
    clusterId: "brushing",
    archetype: "task-guide",
    primaryQuery: "how to brush a dog",
    supportingQueries: [
      "how to remove mats from a dog",
      "how to deshed a dog",
      "line brushing a dog",
      "best brush for a double coat",
      "my dog is matted what do I do",
      "how to stop dog shedding",
    ],
    intent:
      "You want to brush effectively — to the skin, not just the top layer — and to deal with the tangles and the hair storm you already have.",
    h1: "Brushing, mats and shedding: doing it to the skin",
    metaTitle: "Brushing a Dog Properly, Removing Mats and Reducing Shedding",
    metaDescription:
      "Brush a dog to the skin with line brushing, remove small mats safely, know when matting needs a professional, and manage shedding instead of chasing it.",
    answer:
      "Brush in sections and part the hair until you can see skin — brushing only the top layer is what lets mats form underneath. Check your own work with a metal comb. Deal with small mats by working them apart with your fingers first, never with scissors near the skin. A tight, widespread or pelted mat needs a professional, and you cannot stop shedding, only manage it by removing dead undercoat.",
    blocks: [
      {
        kind: "h2",
        id: "to-the-skin",
        text: "Brushing that isn't actually doing anything",
      },
      {
        kind: "p",
        text: "The most common brushing mistake is invisible to the person making it. A slicker brush glides satisfyingly over the surface, the top layer looks glossy, and everything underneath is felting. The test is simple: after brushing a section, draw a metal comb through it from the skin out. If the comb catches, the section is not finished.",
      },
      {
        kind: "figure",
        imageId: "fur-texture",
        caption:
          "The coat parted to the skin. If you cannot see skin while brushing, you are working the top layer and the mat is forming underneath it.",
      },
      {
        kind: "h2",
        id: "line-brushing",
        text: "Line brushing, the technique that does the work",
      },
      {
        kind: "steps",
        intro:
          "Line brushing is the standard method for long, curly and double coats. It is slower and it is the only approach that reaches the skin.",
        items: [
          {
            title: "Part the coat into a line",
            text: "Use the comb or the back of the brush to push the coat aside until you see a clean line of skin along the dog's back or side.",
          },
          {
            title: "Brush the hair below the line",
            text: "Work only the small section you have exposed, brushing from the skin outward in the direction of hair growth.",
          },
          {
            title: "Move the line down a centimetre",
            text: "Part again, brush the newly exposed band, and repeat. You are working systematically across the whole dog rather than at random.",
          },
          {
            title: "Comb-check the section",
            text: "A comb catches on anything the brush skipped. Comb-check the friction zones especially: armpits, behind the ears, under the collar, the trousers and between the back legs.",
          },
        ],
      },
      {
        kind: "p",
        text: "For short and smooth coats, none of this applies — use a rubber curry or grooming mitt in circular motions, which lifts dead hair and stimulates the skin, then finish with a soft bristle brush.",
      },
      {
        kind: "h2",
        id: "tool-match",
        text: "Matching the brush to the coat",
      },
      {
        kind: "table",
        head: ["Coat", "Primary tool", "Also useful", "Avoid"],
        rows: [
          [
            "Short, smooth",
            "Rubber curry or grooming mitt",
            "Soft bristle brush",
            "Slicker — unnecessary and can scratch skin",
          ],
          [
            "Double",
            "Undercoat rake, slicker",
            "De-shedding tool during a coat blow",
            "Blades or shaving",
          ],
          [
            "Long, silky",
            "Slicker plus metal comb",
            "Detangling spray",
            "Vigorous towel rubbing after a bath",
          ],
          [
            "Curly or wavy",
            "Slicker plus metal comb",
            "De-matting comb for small knots",
            "Brushing a dry curly coat with no product — mist first",
          ],
          [
            "Wire",
            "Pin brush, stripping knife if stripping",
            "Metal comb",
            "Over-bathing, which softens the wire texture",
          ],
        ],
      },
      {
        kind: "p",
        text: "Full tool descriptions, including what justifies the price difference, are on [grooming tools explained](/grooming-tools/).",
      },
      {
        kind: "h2",
        id: "mats",
        text: "Dealing with mats",
      },
      {
        kind: "p",
        text: "A mat is hair that has felted into a pad. The severity determines the response, and being honest about severity is what keeps the dog safe.",
      },
      {
        kind: "table",
        head: ["Severity", "What it looks like", "What to do"],
        rows: [
          [
            "Loose tangle",
            "Hair clumps but still separates into strands when pulled",
            "Fingers first, then a slicker with a light detangling spray, then comb",
          ],
          [
            "Small mat",
            "A defined pad up to a couple of centimetres, close to the skin",
            "Split it into halves with a de-matting comb, then brush each half from the edges inward",
          ],
          [
            "Tight mat",
            "Hard, does not give, skin is pulled up into it",
            "Stop. A groomer can often split and work it out; do not cut it yourself",
          ],
          [
            "Pelted coat",
            "Mats joined into a continuous sheet",
            "Professional shave-down. Not a home project",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Do not cut mats out with scissors",
        text: "Skin moves with the mat, and it is extremely common for an owner to cut a fold of skin while trying to free a tight mat. This is one of the most frequent grooming injuries seen in veterinary practice. Split it, work it, or hand it over — but do not take scissors to a mat that is sitting against skin.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Where mats form, and how to prevent them",
        text: "Mats form where hair moves against hair or against harnesses: behind the ears, under the collar, in the armpits, between the back legs, in the trousers and around the muzzle after eating or drinking. A thirty-second comb of those five spots every couple of days prevents almost all of them.",
      },
      {
        kind: "h2",
        id: "shedding",
        text: "Shedding: manage it, because you cannot stop it",
      },
      {
        kind: "p",
        text: "No product, supplement or shampoo switches off shedding. Shedding is dead hair leaving the follicle, and it is driven by daylight cycles, hormones and breed. What you can do is remove that hair on a brush instead of your sofa.",
      },
      {
        kind: "ul",
        items: [
          "**Brush more often during a coat blow.** Double-coated dogs shed their undercoat in a concentrated push once or twice a year, and during those weeks daily raking is normal.",
          "**Use an undercoat rake or a de-shedding tool**, which reaches the undercoat a slicker barely touches.",
          "**Bathe then blow out.** A bath followed by thorough drying and a de-shedding tool removes a striking amount of loose coat in one session.",
          "**Do not shave a double coat to reduce shedding.** It removes the guard hairs and leaves the shedding undercoat growing back unevenly, and it can permanently change the coat's texture.",
          "**Ask your vet about sudden changes.** A coat that thins suddenly, sheds in patches, or loses shine can reflect a nutritional, hormonal or skin problem rather than a normal cycle.",
        ],
      },
      {
        kind: "h2",
        id: "frequency",
        text: "How often to brush",
      },
      {
        kind: "p",
        text: "From weekly for smooth coats to daily for long, silky and curly coats. The full table, and the reason coat type is the deciding variable, is on [how often should you groom your dog](/how-often-should-you-groom-your-dog/).",
      },
    ],
    faqs: [
      {
        q: "Can I brush a matted dog after a bath?",
        a: "No. Water tightens mats, and brushing a matted wet coat pulls on the skin and hurts. Always de-mat first, then bathe. If the coat is pelted, skip the bath entirely and see a groomer.",
      },
      {
        q: "Is it okay to shave a matted dog?",
        a: "A pelted coat usually does need to be clipped short, but it should be done by someone experienced. Very tight mats sit close to skin that moves, and clippers can nick it. Severely matted dogs sometimes need a vet to sedate them first.",
      },
      {
        q: "Do de-shedding shampoos work?",
        a: "They help loosen dead hair during a bath, which means more of it comes out in the tub and on the brush afterwards. They do not reduce the total amount of hair a dog sheds; only removing the dead undercoat does that.",
      },
      {
        q: "How do I stop my dog shedding so much?",
        a: "You cannot stop it. You can substantially reduce the hair in your house by brushing more often with the right tool for the coat — an undercoat rake for double coats — and concentrating effort during the spring and autumn coat blows.",
      },
      {
        q: "My dog yelps when I brush a certain area.",
        a: "Stop brushing that area and look at it. Pain on brushing can come from a mat pulling the skin, but also from a wound, a hot spot, a lump or joint pain. Anything that hurts consistently needs a vet to look before you groom it again.",
      },
    ],
    related: [
      {
        href: "/bathing-your-dog/",
        label: "Bathing your dog",
        why: "Brush first, then bathe — the order is what protects the coat.",
      },
      {
        href: "/grooming-tools/",
        label: "Grooming tools, matched to coat type",
        why: "Buy the brush that reaches your dog's coat instead of the one that looks professional.",
      },
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
        why: "Your brushing schedule and tool choice both come from this.",
      },
      {
        href: "/dog-grooming-problems/",
        label: "Grooming problems and troubleshooting",
        why: "For coat changes, skin soreness and patchy shedding that aren't a brushing issue.",
      },
    ],
  },

  {
    slug: "dog-haircuts-and-trimming",
    leadImageId: "lead-haircuts",
    clusterId: "haircuts",
    archetype: "task-guide",
    primaryQuery: "how to cut a dog's hair",
    supportingQueries: [
      "dog haircuts at home",
      "dog clipper blade sizes",
      "sanitary trim dog",
      "trimming hair between dog paw pads",
      "teddy bear cut vs kennel cut",
      "how to trim a dog's face",
    ],
    intent:
      "You want to know what you can safely cut yourself, what you need to buy, and where a haircut becomes a professional's job.",
    h1: "Dog haircuts and trimming: what's realistic at home",
    metaTitle: "Dog Haircuts at Home: Trimming Feet, Face and Sanitary Areas",
    metaDescription:
      "What you can realistically trim at home - paw pads, sanitary areas, eyes and feet - plus clipper blades, cut styles, and the trims that need a professional.",
    answer:
      "At home, trim the hair between the paw pads, around the genitals and anus, and anything covering the eyes or dragging on the ground. Use clippers designed for dogs, with the coat clean, dry and fully de-matted. Full body haircuts and breed-standard trims are skilled work: uneven is the best case, and a cut dog is the worst.",
    prerequisites: [
      { href: "/bathing-your-dog/", label: "Bathing your dog" },
    ],
    blocks: [
      {
        kind: "h2",
        id: "scope",
        text: "Where to draw the line",
      },
      {
        kind: "p",
        text: "There is a category of trimming that needs care but not training, and a category that needs training. Knowing which is which is the whole skill.",
      },
      {
        kind: "table",
        head: ["Job", "Home or professional", "Why"],
        rows: [
          [
            "Hair between paw pads",
            "Home",
            "Small area, visible, blunt-tipped scissors or a short clipper pass",
          ],
          [
            "Sanitary trim around genitals and anus",
            "Home, carefully",
            "A short clipper pass with a fine blade; never scissors",
          ],
          [
            "Fringe over the eyes",
            "Home, carefully",
            "Blunt-tipped scissors, pointed away from the eye",
          ],
          [
            "Feet and hock tidying",
            "Home, carefully",
            "Slow, small cuts with the foot supported",
          ],
          [
            "All-over even length",
            "Professional, or home with real practice",
            "Requires blade control, coat prep and an animal that stays still",
          ],
          [
            "Breed-standard trims",
            "Professional",
            "Patterned work with specific lengths and shapes",
          ],
          [
            "De-matting by clipping",
            "Professional",
            "Mats sit against skin that moves",
          ],
        ],
      },
      {
        kind: "h2",
        id: "prep",
        text: "Preparation decides the result",
      },
      {
        kind: "ul",
        items: [
          "**Clean and completely dry.** Dirt and grit blunts blades, and damp hair clogs clippers, cuts unevenly and can be pulled into the blade.",
          "**Fully de-matted.** Clippers will not go through a mat. They ride over the top of it and leave a strip of matted hair underneath.",
          "**Sharp, oiled blades.** A dull blade pulls, heats up and leaves tracks. Clipper blade oil is cheap; replacement blades are not.",
          "**A cool-running clipper and breaks.** Blades get hot enough to burn. Feel the blade with your hand regularly and stop when it warms up.",
          "**A dog that can stand still.** If your dog cannot, work on [grooming a nervous dog](/grooming-anxious-dog/) before you introduce clippers.",
        ],
      },
      {
        kind: "h2",
        id: "paw-pads",
        text: "Trimming the paw pads",
      },
      {
        kind: "steps",
        items: [
          {
            title: "Support the foot from underneath",
            text: "Hold the paw firmly but do not bend it into an unnatural position — many dogs find their feet being manipulated more upsetting than the trim itself.",
          },
          {
            title: "Use blunt-tipped scissors or clippers with a fine blade",
            text: "Scissors with a blunt end and a short blade give you control. Point them away from the foot, never toward it.",
          },
          {
            title: "Trim the hair flush with the pad",
            text: "Grass seeds, burrs, mud and ice all collect in pad hair. Flush with the pad is the practical length; shorter risks nicking the webbing between the toes.",
          },
          {
            title: "Check between the toes",
            text: "Look for redness, seeds, thorns or a lump between the toes. Foot licking and limping often start here.",
          },
        ],
      },
      {
        kind: "h2",
        id: "sanitary",
        text: "The sanitary trim",
      },
      {
        kind: "p",
        text: "A short pass with clippers around the genitals and anus keeps urine and faeces from soiling the coat and reduces skin irritation in the groin. Use a fine blade in the direction of hair growth, keep the skin taut with your free hand — loose skin is what gets caught — and never use scissors in this area.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Pull the skin flat before you clip",
        text: "Dog skin is loose and it folds into the clipper path, particularly in the groin, under the arms and on the throat. Always hold the skin taut with your other hand and clip with the lay of the coat, not against it.",
      },
      {
        kind: "h2",
        id: "face",
        text: "Trimming around the eyes and face",
      },
      {
        kind: "p",
        text: "Use blunt-tipped scissors, work only with a still dog, and keep the points directed away from the eyes at all times. Take very small cuts — hair over the eyes grows quickly and an uneven fringe looks worse than a long one. If your dog jerks at sudden movement near its face, use clippers with a guard on the muzzle and chin instead, or leave the face to a groomer.",
      },
      {
        kind: "h2",
        id: "blades",
        text: "Clipper blades and lengths",
      },
      {
        kind: "p",
        text: "Blade numbering runs opposite to intuition: higher numbers cut shorter. This is the part of home clipping that people get wrong most often.",
      },
      {
        kind: "table",
        caption:
          "Lengths are approximate and vary between manufacturers — always check the blade's stated cut length.",
        head: ["Blade", "Approximate cut length", "Typical use"],
        rows: [
          [
            "#30 and #40",
            "Very short, under 1 mm",
            "Paw pads, sanitary areas, and surgical prep by vets",
          ],
          [
            "#10",
            "About 1.5 mm",
            "Sanitary trims, face and feet tidy, the standard novice blade",
          ],
          [
            "#7",
            "About 3 mm",
            "Short summer body clip on many breeds",
          ],
          [
            "#5",
            "About 6 mm",
            "Short but not shaved-looking body length",
          ],
          [
            "#4",
            "About 9 mm",
            "A common pet body length",
          ],
          [
            "#3 and #3¾",
            "About 10–13 mm",
            "Longer pet trims and blended legs",
          ],
          [
            "Comb attachments",
            "10 mm and up",
            "Fit over a blade to leave a longer, uniform length",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Never clip a matted coat with a fine blade",
        text: "If the clipper will not pass through hair easily, stop. Working a blade into a mat risks cutting skin. A matted coat needs de-matting first, or a professional shave-down — see [brushing, mats and shedding](/brushing-mats-and-shedding/).",
      },
      {
        kind: "h2",
        id: "styles",
        text: "Cut styles, so you can ask for the right thing",
      },
      {
        kind: "p",
        text: "You do not need to be able to produce these, but naming them accurately gets you a much better result from a groomer than 'short, but not too short'.",
      },
      {
        kind: "ul",
        items: [
          "**Kennel or utility cut** — one short, uniform, low-maintenance length all over. The practical default.",
          "**Teddy bear or puppy cut** — a uniform rounded length with a rounded, fuller face. Popular on Doodles, Bichons and Shih Tzus, and much harder to do well than it sounds.",
          "**Lamb trim** — short body, fuller legs, rounded shape. Classic on Poodles.",
          "**Pattern trims** — breed-standard work with defined areas left long and shaped: Schnauzer, Cocker, Westie and show Poodle trims.",
          "**Strip-down or shave-down** — very short all over, usually the outcome of severe matting rather than a style choice.",
        ],
      },
      {
        kind: "p",
        text: "More vocabulary is in the [grooming glossary](/glossary/). What a haircut should cost, and why quotes vary so much, is covered in [what dog grooming costs](/dog-grooming-cost/).",
      },
      {
        kind: "h2",
        id: "anal-glands",
        text: "A note on anal glands",
      },
      {
        kind: "p",
        text: "Anal gland expression is sometimes offered as part of a groom. It is not something to attempt yourself without instruction: doing it badly is painful for the dog and can cause damage, and recurrent problems need a vet to establish the cause rather than repeated emptying. If your dog is scooting, licking or straining, that is a veterinary appointment, not a grooming add-on.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Nicks, cuts and clipper irritation",
        text: "For a small nick, keep it clean and contact your vet for advice — skin infections settle in fast in a coat. For anything that bleeds persistently, or for a dog that seems painful after clipping, see a vet the same day.",
      },
    ],
    faqs: [
      {
        q: "Can I cut my dog's hair with regular scissors?",
        a: "Blunt-tipped, short-bladed scissors are fine for the hair between paw pads and around the eyes. Sharp, pointed scissors are the wrong tool anywhere near skin — they are responsible for a lot of avoidable injuries. For anything longer than a tidy-up, use clippers.",
      },
      {
        q: "What blade should I use on my dog's body?",
        a: "For a first attempt, a #10 on sanitary areas and feet, and a #4 or #5 with a comb attachment on the body, is a safe combination. Check the blade's stated cut length before you start, and clip with the lay of the coat for a longer result than clipping against it.",
      },
      {
        q: "Why does my dog look patchy after I clipped it?",
        a: "Usually uneven pressure, a dull or overheating blade, an unevenly prepared coat, or clipping against the lay of the hair. It grows out. Slow down, use lighter pressure and let the blade do the work rather than pressing.",
      },
      {
        q: "How short is too short?",
        a: "Short enough to see skin clearly, or a blade in the #7 to #40 range on a double-coated breed, is too short — it exposes skin to sun and insects and can permanently change how a double coat regrows.",
      },
      {
        q: "Should I trim before or after the bath?",
        a: "After. Bathing, drying and de-matting come first so clippers run through clean, dry, tangle-free hair. Dirty hair blunts blades fast.",
      },
    ],
    related: [
      {
        href: "/bathing-your-dog/",
        label: "Bathing your dog",
        why: "Haircuts happen after the bath, on a clean and dry coat.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "Clippers cannot go through mats — this has to be finished first.",
      },
      {
        href: "/grooming-tools/",
        label: "Grooming tools, matched to coat type",
        why: "What a decent clipper costs and what to look for before you buy.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "For the trims that are genuinely skilled work.",
      },
    ],
  },
];
