import type { GuidePage } from "../types";

export const PRO: GuidePage[] = [
  {
    slug: "choosing-a-dog-groomer",
    leadImageId: "lead-groomer",
    clusterId: "groomer",
    archetype: "task-guide",
    primaryQuery: "how to choose a dog groomer",
    supportingQueries: [
      "what happens at a dog grooming appointment",
      "mobile dog grooming vs salon",
      "questions to ask a dog groomer",
      "how long does dog grooming take",
      "should I tip a dog groomer",
      "dog groomer hurt my dog",
    ],
    intent:
      "You are about to hand your dog to someone for an hour or two. You want to know what should happen, what to ask, and what the warning signs are.",
    h1: "Choosing a dog groomer and knowing what to expect",
    metaTitle: "Choosing a Dog Groomer: What to Ask and What to Expect",
    metaDescription:
      "What happens in a grooming appointment, how to choose a groomer, mobile vs salon vs self-wash, what to ask, and the warning signs to walk away from.",
    answer:
      "Ask how they handle dogs that will not cooperate, whether they will do a partial groom, and whether you can see the area where dogs are kept. A good groomer will happily discuss limits, want your dog's medical history, and tell you if they could not finish. Expect a full groom to take one to three hours, expect to be asked about vaccination status, and expect to describe the trim you want in specific terms rather than 'short'.",
    blocks: [
      {
        kind: "h2",
        id: "what-happens",
        text: "What actually happens in an appointment",
      },
      {
        kind: "ol",
        items: [
          "Intake and a hands-on check of the coat and skin, including a look for mats, lumps or sore areas.",
          "Pre-work: brushing out and dealing with tangles before the coat gets wet.",
          "Nail trim and often ear cleaning.",
          "Bath, sometimes two shampoos, with a proper rinse.",
          "Drying, by hand with a dryer or a combination of cabinet and hand drying.",
          "Haircut on a clean, dry coat.",
          "Finish: feet, face, sanitary trim, and a final brush-out.",
        ],
      },
      {
        kind: "p",
        text: "A full groom commonly takes between one and three hours depending on the size of the dog, the condition of the coat and how cooperative the dog is. Groomers who work on one dog at a time from start to finish are faster than those who batch dogs through stages — and a longer stay is not in itself a sign of anything wrong, but you are entitled to ask how the dog spends that time.",
      },
      {
        kind: "h2",
        id: "questions",
        text: "The questions worth asking",
      },
      {
        kind: "ul",
        items: [
          "**What will you do if my dog panics or tries to bite?** You are listening for a plan, not 'don't worry, we manage'.",
          "**Will you do a partial groom?** A groomer willing to do face, feet and sanitary only is a groomer who can adapt.",
          "**Can I see where the dogs are kept?** A clean, dry, calm area with non-slip surfaces. Refusal is a clear answer.",
          "**What is included in the price?** Bath, dry, nails, ears, anal glands, teeth — get it in writing to avoid add-on surprises.",
          "**How many dogs do you have in a day?** Not a pass-or-fail question, but it tells you how much time yours will get.",
          "**What training and insurance do you have?** Certification varies by country; ask what theirs is, and ask about public liability insurance.",
          "**Will you tell me if you couldn't finish?** A good groomer will call you rather than force a frightened dog.",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Describe the trim in terms a groomer can use",
        text: "'Short, but not too short' produces a different result every time. 'A number 4 all over, leave the tail and beard natural, tidy the feet' produces the same result twice. Blade lengths are explained on [haircuts and trimming](/dog-haircuts-and-trimming/), and the [glossary](/glossary/) covers the rest of the vocabulary.",
      },
      {
        kind: "h2",
        id: "first-appointment",
        text: "Your dog's first appointment",
      },
      {
        kind: "ul",
        items: [
          "Book early in the day, when the salon is quieter and the groomer is fresh.",
          "Ask for a shorter introductory groom rather than a full transformation.",
          "Mention anything medical: skin problems, lumps, arthritis, hips, eyes, medication.",
          "Say what your dog is worried about. A groomer who is warned can work around it.",
          "Say whether your dog has ever bitten. Ambushing a groomer with this is how dogs get banned from salons.",
          "Ask what vaccination proof they need, and bring it.",
          "Walk away calmly and quickly. Long, emotional goodbyes make things worse.",
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Vaccination requirements vary",
        text: "Most salons ask for core vaccines, and many require additional cover for dogs in shared spaces, but requirements genuinely differ between businesses and countries. Ask when you book rather than assuming, and keep a photo of the record on your phone.",
      },
      {
        kind: "h2",
        id: "types",
        text: "Salon, mobile or self-wash",
      },
      {
        kind: "table",
        head: ["Option", "Best for", "Trade-offs"],
        rows: [
          [
            "Salon or shop",
            "Full grooms, breed trims, dogs that tolerate other dogs",
            "Usually the cheapest full-service option; the dog may spend time in a crate or waiting area",
          ],
          [
            "Mobile groomer",
            "Anxious dogs, seniors, multiple dogs, owners without transport",
            "One dog at a time, no waiting area, comes to you; costs more and covers a smaller area",
          ],
          [
            "In-home groomer",
            "Dogs that cannot travel, or with mobility problems",
            "Least stressful environment; most expensive, and mess is in your house",
          ],
          [
            "Self-service wash",
            "Bathing only, large dogs, owners who cannot bend over a bath",
            "You do the work; no haircut, and usually no drying help",
          ],
          [
            "Vet with a grooming service",
            "Dogs with medical needs, or that need sedation",
            "Highest level of medical backup; usually not the place for a styled trim",
          ],
        ],
      },
      {
        kind: "h2",
        id: "warning-signs",
        text: "Warning signs",
      },
      {
        kind: "ul",
        items: [
          "No visible working area, or an unwillingness to show you one.",
          "Unsedated dogs left unattended in a drying cabinet — ask directly how drying works and how it is monitored.",
          "A groomer who will not discuss how they handle a struggling dog.",
          "Prices quoted without seeing the dog or asking about coat condition.",
          "Your dog comes back shaken, and the explanation is that the dog was 'difficult'.",
          "Cuts, nicks or sore patches that were not mentioned when you collected the dog.",
          "Reluctance to give an exact price before the groom.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "If your dog is injured at the groomer",
        text: "Take photographs, ask for a full account of what happened, and get the injury assessed by your vet. A good groomer will tell you immediately, own the outcome and help with costs. If you are concerned about how animals are treated in the business, that is a matter for your local authority or animal welfare body, and a vet's report is the useful evidence.",
      },
      {
        kind: "h2",
        id: "etiquette",
        text: "The things that make it work",
      },
      {
        kind: "ul",
        items: [
          "**Be on time** for both drop-off and collection. Late collection is the most common source of friction.",
          "**Book the next appointment before you leave.** Popular groomers are booked weeks out, and the interval matters for the coat.",
          "**Tip if you want to.** It is normal in some countries and not expected in others; 15–20% where it is customary.",
          "**Do not ask a groomer to fix a matted coat without a shave.** If it is matted, the honest answer is that it comes off short.",
          "**Say thank you when it goes well.** Grooming is physical, skilled and often thankless work.",
        ],
      },
      {
        kind: "p",
        text: "For what a groom should cost and why quotes vary so much, see [what dog grooming costs](/dog-grooming-cost/).",
      },
    ],
    faqs: [
      {
        q: "How long does a dog grooming appointment take?",
        a: "Usually one to three hours. Small dogs in good coat condition can be done in an hour; a large double-coated dog or a curly coat that needs a full haircut can take three. Ask when you book, and ask how the dog spends the time.",
      },
      {
        q: "Should I tip my dog groomer?",
        a: "Where tipping is customary, around 15–20% is a normal range, and more if the dog was difficult or the groomer was particularly accommodating. In some countries tipping is not expected at all.",
      },
      {
        q: "Can I stay while my dog is groomed?",
        a: "Some groomers allow it and some do not. Many dogs actually work better without their owner present, so a refusal is not automatically a bad sign — but a groomer who will not let you see the premises at all is a different matter.",
      },
      {
        q: "Why was my dog shaved when I only asked for a trim?",
        a: "Usually because the coat was more matted than it looked from the outside, and de-matting a pelted coat would be painful for the dog. A good groomer will have raised this at intake. If they did not, that is the conversation to have before the next appointment.",
      },
      {
        q: "How often should my dog go to the groomer?",
        a: "For dogs that need clipping, typically every four to eight weeks. Dogs that only need a bath and a de-shed might go two or three times a year. The reasoning is on [how often should you groom your dog](/how-often-should-you-groom-your-dog/).",
      },
    ],
    related: [
      {
        href: "/dog-grooming-cost/",
        label: "What dog grooming costs",
        why: "Price drivers, what should be included, and why two quotes for the same dog differ.",
      },
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "How to brief a groomer honestly if your dog bites or panics.",
      },
      {
        href: "/senior-dog-grooming/",
        label: "Senior dog grooming",
        why: "What to ask for when your dog cannot stand for a full groom.",
      },
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and breed grooming",
        why: "The vocabulary that gets you the trim you actually wanted.",
      },
    ],
  },

  {
    slug: "dog-grooming-cost",
    leadImageId: "lead-cost",
    clusterId: "cost",
    archetype: "commercial-info",
    primaryQuery: "how much does dog grooming cost",
    supportingQueries: [
      "dog grooming prices",
      "dog grooming cost by breed",
      "mobile dog grooming prices",
      "why is dog grooming so expensive",
      "dog grooming prices near me",
    ],
    intent:
      "You want a realistic number before you book, and you want to understand why the quotes you have been given vary so much.",
    h1: "What dog grooming costs, and why quotes vary so much",
    metaTitle: "How Much Does Dog Grooming Cost? Prices and What Drives Them",
    metaDescription:
      "Dog grooming prices explained: published ranges by size and coat, mobile vs salon, the add-ons that raise a bill, and how to budget a year of grooming.",
    answer:
      "Published ranges from consumer pricing sites and pet-adoption organisations generally put a full groom somewhere between about $40 and $120, with small breeds at the lower end and large or double-coated breeds at the top — and heavily matted coats, specialist trims and mobile service all adding to it. Bath-and-tidy services are cheaper. Local labour costs explain most of the variation between two quotes for the same dog.",
    blocks: [
      {
        kind: "callout",
        tone: "evidence",
        title: "About the numbers on this page",
        text: "This site does not offer grooming services and has no price list of its own. The figures below are drawn from published third-party sources found while researching this page — consumer pricing guides quoting roughly $40–$75 as an average full groom, and pet-adoption and pet-care sites quoting $40–$100 and $40–$120 depending on breed and coat. No search-volume, ranking or transaction data was available to this project, and prices differ substantially by country, city and business type. Treat any figure here as a starting point for a local quote, not as a price.",
      },
      {
        kind: "h2",
        id: "ranges",
        text: "The published ranges",
      },
      {
        kind: "table",
        caption:
          "Indicative ranges compiled from published consumer pricing guides and pet-adoption sources. Currency is US dollars; figures in other markets differ.",
        head: ["Service", "Typical published range"],
        rows: [
          [
            "Bath and tidy (no haircut)",
            "About $25–$70",
          ],
          [
            "Full groom, small breed",
            "About $35–$60",
          ],
          [
            "Full groom, medium breed",
            "About $50–$80",
          ],
          [
            "Full groom, large breed",
            "About $70–$110",
          ],
          [
            "Full groom, giant or very thick double coat",
            "About $100–$160",
          ],
          [
            "Mobile grooming",
            "Commonly a premium over salon pricing, often $60–$150+ for a full groom",
          ],
          [
            "De-shedding treatment",
            "Usually an add-on above the base bath price",
          ],
          [
            "Nail trim alone",
            "Often under $25, sometimes free with another service",
          ],
          [
            "De-matting",
            "Usually charged by the time it takes, and it can exceed the cost of the groom itself",
          ],
        ],
      },
      {
        kind: "p",
        text: "Breed-specific figures circulate widely — a Shih Tzu or a Cocker at one price, a Husky or a doodle at another. They are useful as an order of magnitude, but the underlying driver is size plus coat type plus time, not the name on the paperwork. A small dog with a difficult coat can take longer than a large dog with an easy one.",
      },
      {
        kind: "h2",
        id: "drivers",
        text: "What actually drives the price",
      },
      {
        kind: "ul",
        items: [
          "**Time.** Grooming is skilled manual labour and the price is mostly the groomer's time. Anything that adds an hour adds a lot.",
          "**Size and coat type.** Bigger dog, more hair, more drying, more everything.",
          "**Coat condition.** Matting is the single biggest price escalator, because de-matting is slow, and a pelted coat usually means a shave-down instead.",
          "**Frequency.** A dog groomed every six weeks is quick and predictable. A dog seen twice a year is a project.",
          "**Trim complexity.** A uniform short clip is faster than a breed-standard pattern or a hand-scissored finish.",
          "**Business type.** Mobile grooming carries van costs and one-dog-at-a-time scheduling, which is why it costs more per groom.",
          "**Local labour and property costs.** The largest single reason two quotes for the same dog differ.",
          "**Add-ons.** Teeth brushing, flea treatments, de-shedding, paw balm, nail grinding, cologne.",
        ],
      },
      {
        kind: "h2",
        id: "budget",
        text: "Budgeting a year",
      },
      {
        kind: "p",
        text: "Work from the interval, not from the single appointment. A dog that needs a full groom every six weeks has roughly eight or nine grooms a year; a dog on a ten-week cycle has about five. Multiply that by your local full-groom price, then add a contingency for the year you skip two appointments and pay for de-matting instead — which is the most common way an annual grooming budget gets blown.",
      },
      {
        kind: "table",
        head: ["Cycle", "Grooms per year", "At $50 per groom", "At $100 per groom"],
        rows: [
          ["Every 4 weeks", "13", "About $650", "About $1,300"],
          ["Every 6 weeks", "About 8–9", "About $425", "About $860"],
          ["Every 8 weeks", "About 6–7", "About $320", "About $650"],
          ["Every 12 weeks", "About 4–5", "About $215", "About $430"],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The cheapest thing you can do is brush",
        text: "Regular brushing at home is the difference between a quick, cheap groom and an expensive de-matting session. Ten minutes a day on a curly coat saves real money over a year, and it is the one variable entirely under your control.",
      },
      {
        kind: "h2",
        id: "reducing",
        text: "Reducing the cost without shortchanging the dog",
      },
      {
        kind: "ul",
        items: [
          "**Keep the interval.** Skipping one appointment usually costs more at the next one.",
          "**Learn the maintenance tasks.** Nails, ears and teeth at home removes them from the bill.",
          "**Ask for a bath and tidy** instead of a full groom on alternate visits.",
          "**Ask about the base price for your dog specifically**, and what triggers an add-on charge.",
          "**Consider a shorter trim**, which takes less time and lasts longer between visits.",
          "**Book a first-time or puppy introductory groom** while the dog is small and easy.",
          "**Do not shop on price alone.** The cheapest groom in an area is sometimes cheap for a reason.",
        ],
      },
      {
        kind: "h2",
        id: "why-quotes-differ",
        text: "Why two groomers quote different prices for the same dog",
      },
      {
        kind: "p",
        text: "Because they are pricing different amounts of work. One may be assuming a clean, knot-free coat and a cooperative dog; the other may be allowing for a dog that needs a break every ten minutes. One may include nail trimming, ear cleaning and drying in the base price; the other may list them separately. Ask each of them what the price includes, what would make it higher, and whether they will quote after seeing the dog — that question resolves most of the difference.",
      },
      {
        kind: "p",
        text: "How to find a good one, and what to ask, is on [choosing a dog groomer](/choosing-a-dog-groomer/).",
      },
    ],
    faqs: [
      {
        q: "How much should dog grooming cost?",
        a: "As a rough guide from published consumer pricing sources, a full groom sits between about $40 and $120 depending on size and coat, with bath-only services cheaper. Local pricing varies a great deal, so get a quote for your specific dog rather than relying on a national figure.",
      },
      {
        q: "Why was I charged more than the price I was quoted?",
        a: "Almost always coat condition, size, or an add-on. Matting in particular is usually charged by time, and a dog that needs de-matting can cost more than the groom itself. Ask the groomer to walk you through the difference — a good one will have no problem explaining it.",
      },
      {
        q: "Is mobile grooming worth the extra cost?",
        a: "It often is for anxious dogs, seniors, dogs that get carsick, or households with several dogs, because there is no waiting area and no other animals. If none of those apply, a salon usually offers better value for the same work.",
      },
      {
        q: "How much does it cost to groom a doodle?",
        a: "Doodles typically sit at the higher end of the range because of coat density, the length most owners keep, and the drying and scissoring time involved. Published figures commonly fall between about $100 and $180 for a full groom in urban markets, but this varies widely.",
      },
      {
        q: "Is it cheaper to groom a dog at home?",
        a: "In cash terms, usually yes — the equipment pays for itself within a few grooms. In time terms it can be substantial, and the results depend on your willingness to learn and your dog's tolerance. The realistic compromise for many people is home maintenance with a professional haircut, which is what [the full routine](/how-to-groom-your-dog-at-home/) is written around.",
      },
    ],
    related: [
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "What to ask before you accept a quote, and how to judge the answer.",
      },
      {
        href: "/brushing-mats-and-shedding/",
        label: "Brushing, mats and shedding",
        why: "Matting is the biggest single price escalator, and the one you can prevent.",
      },
      {
        href: "/how-often-should-you-groom-your-dog/",
        label: "How often should you groom your dog?",
        why: "Your grooming interval determines the annual budget more than the price per visit.",
      },
      {
        href: "/grooming-tools/",
        label: "Grooming tools, matched to coat type",
        why: "What a home kit costs, and how few tools you actually need.",
      },
    ],
  },

  {
    slug: "grooming-tools",
    leadImageId: "lead-tools",
    clusterId: "tools",
    archetype: "reference",
    primaryQuery: "dog grooming tools",
    supportingQueries: [
      "best brush for my dog",
      "dog grooming kit for beginners",
      "slicker brush vs pin brush",
      "undercoat rake vs furminator",
      "do I need a dog grooming dryer",
    ],
    intent:
      "You want to buy the right few things, not a wall of equipment — and you want to know which tools are worth the money.",
    h1: "Grooming tools: what each one does and which you need",
    metaTitle: "Dog Grooming Tools Explained: Brushes, Rakes, Clippers, Dryers",
    metaDescription:
      "What each dog grooming tool does - slicker, pin brush, curry, undercoat rake, de-shedding tool, clippers, dryers - and which small kit suits your dog.",
    answer:
      "Most dogs need two brushes: one matched to their coat type, plus a metal comb to check the work. Add dog shampoo, nail clippers or a grinder, and an ear cleaner, and you have a complete home kit. Clippers and a dryer are only worth buying if your dog needs regular haircuts or has a coat that cannot air-dry.",
    blocks: [
      {
        kind: "callout",
        tone: "evidence",
        title: "This page has no product links on purpose",
        text: "This site has no shop, no affiliate relationships and no brand deals. Nothing here is a recommendation to buy a specific product — it is a description of what each tool family does, so you can judge whatever is in front of you.",
      },
      {
        kind: "h2",
        id: "brushes",
        text: "Brushes and combs",
      },
      {
        kind: "table",
        head: ["Tool", "What it does", "Coat it suits", "Limitations"],
        rows: [
          [
            "Rubber curry / grooming mitt",
            "Lifts loose hair and dirt, stimulates the skin",
            "Short and smooth coats",
            "Does nothing for tangles",
          ],
          [
            "Bristle brush",
            "Smooths and finishes, distributes oils",
            "Short and smooth coats",
            "Too soft for undercoat",
          ],
          [
            "Pin brush",
            "Long, round-tipped pins through medium coats",
            "Wire coats, medium-length coats",
            "Will not break up tangles",
          ],
          [
            "Slicker brush",
            "Fine bent wires remove tangles and loose undercoat",
            "Long, curly, double coats",
            "Can scratch skin if used at the wrong angle; not for short coats",
          ],
          [
            "Undercoat rake",
            "Long teeth reach the undercoat and pull out dead hair",
            "Double coats",
            "Not for single coats; can be too much on a delicate coat",
          ],
          [
            "De-shedding tool",
            "Reaches through the topcoat to remove loose undercoat",
            "Double coats during a coat blow",
            "Overuse irritates skin; it is a session tool, not a daily one",
          ],
          [
            "Greyhound-style metal comb",
            "Finds tangles and mats the brush left behind",
            "Every coat — the quality control tool",
            "None; if you own one brush, own this too",
          ],
          [
            "De-matting comb / mat splitter",
            "Blades split a mat into sections you can brush out",
            "Long and curly coats with small mats",
            "Never for tight mats against the skin",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The comb is the one tool people skip and shouldn't",
        text: "A metal comb is the only way to know whether you have actually brushed the coat. It catches what a slicker glides over, and it is the cheapest tool in the kit.",
      },
      {
        kind: "h2",
        id: "bath",
        text: "Bathing equipment",
      },
      {
        kind: "ul",
        items: [
          "**Dog shampoo.** Matched to coat type and to any diagnosed skin condition. Diluting it as the label directs makes it easier to rinse, which matters more than most people expect.",
          "**Conditioner or detangling spray.** Genuinely useful for long and curly coats, both to prevent post-bath matting and to make a dry brush-out comfortable.",
          "**Non-slip mat.** The single highest-value item per pound spent. A dog that can stand confidently is a dog that cooperates.",
          "**A jug or a detachable shower head.** Low-pressure rinsing beats a bucket for getting shampoo out thoroughly.",
          "**Towels.** More than you think, ideally ones nobody in the house cares about.",
        ],
      },
      {
        kind: "h2",
        id: "nails",
        text: "Nail care",
      },
      {
        kind: "ul",
        items: [
          "**Guillotine clippers.** One blade squeezes through the nail; common and cheap, but can crush a thick nail.",
          "**Scissor or plier-style clippers.** Stronger, better for large breeds and thick nails.",
          "**Nail grinder.** A rotating file. Slower, safer, leaves a smooth edge, and easier to use on black nails — but noisy, and many dogs need introducing to it.",
          "**Styptic powder.** Stops bleeding if you go too short. Buy it before you need it, not after.",
          "**A file or emery board** for sharp edges after clipping.",
        ],
      },
      {
        kind: "p",
        text: "Full technique, including how to read the quick on black nails, is on [trimming dog nails](/trimming-dog-nails/).",
      },
      {
        kind: "h2",
        id: "clippers",
        text: "Clippers and blades",
      },
      {
        kind: "p",
        text: "Buy clippers only if your dog genuinely needs haircuts. If you do, the differences that matter are motor strength for a dense coat, how hot the blade runs, whether blades are detachable, and availability of spares. Cheap clippers on a thick coat pull, overheat and produce tracks. Blade numbers run opposite to intuition — higher numbers cut shorter — and the lengths are listed on [haircuts and trimming](/dog-haircuts-and-trimming/).",
      },
      {
        kind: "ul",
        items: [
          "Blade oil and a cleaning brush. Maintenance is what keeps blades cutting.",
          "Clipper coolant or a spare blade to swap to, because hot blades burn.",
          "Comb attachments for longer, uniform lengths.",
          "Blunt-tipped scissors for paws, face and finishing.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Human hair clippers are not dog clippers",
        text: "They are built for fine human hair. On a dense dog coat they pull, snag and overheat, which is uncomfortable for the dog and produces a bad result. If you are clipping a dog, use clippers designed for animals.",
      },
      {
        kind: "h2",
        id: "dryers",
        text: "Dryers",
      },
      {
        kind: "p",
        text: "A household hair dryer on cool will dry a short coat. For a double coat or a curly coat that must be brushed out straight, a purpose-built dog dryer moves a much larger volume of unheated air, which is what actually speeds drying. Two things to check: noise, because many dogs find them frightening, and whether the airflow is adjustable. Never use heat and never point it at one spot.",
      },
      {
        kind: "h2",
        id: "kit",
        text: "Three sensible kits",
      },
      {
        kind: "table",
        head: ["Your dog", "Buy", "Skip"],
        rows: [
          [
            "Short, smooth coat",
            "Curry or mitt, bristle brush, dog shampoo, nail clippers, ear cleaner, toothbrush and dog toothpaste",
            "Everything else",
          ],
          [
            "Double coat",
            "Slicker, undercoat rake, de-shedding tool, dog shampoo, nail clippers, ear cleaner, toothpaste",
            "Clippers — do not shave a double coat",
          ],
          [
            "Long, curly or wire coat kept in a style",
            "Slicker, metal comb, detangling spray, dog shampoo and conditioner, nail clippers, and either a professional groomer or a proper clipper kit",
            "Cheap clippers. They will cost you twice",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Buy the kit before the dog needs it",
        text: "Introducing tools one at a time, well before they are needed, is what makes them acceptable later. This is the whole argument of [puppy grooming](/puppy-grooming/), and it works on adults too.",
      },
    ],
    faqs: [
      {
        q: "What is the best brush for a short-haired dog?",
        a: "A rubber curry or grooming mitt, finished with a soft bristle brush. Slicker brushes are unnecessary on short coats and can scratch the skin.",
      },
      {
        q: "Do I need a slicker brush and an undercoat rake?",
        a: "For a double coat, both earn their place: the rake reaches the undercoat, and the slicker handles the surface and the tangles. For a single coat, a slicker alone is usually enough, and for a short coat, neither.",
      },
      {
        q: "Are de-shedding tools safe?",
        a: "Yes, used in moderation. Over-using one on the same area irritates the skin and can damage the coat. Use it during a coat blow, follow the lay of the coat, and stop when you are no longer pulling out loose hair.",
      },
      {
        q: "Is a dog grooming dryer worth the money?",
        a: "If your dog has a double or curly coat that needs to be dried and brushed out, yes — it moves far more air than a household dryer without heat. For a short coat that air-dries in twenty minutes, it is not necessary.",
      },
      {
        q: "What should a beginner buy first?",
        a: "A coat-appropriate brush, a metal comb, dog shampoo, nail clippers, styptic powder, an ear cleaner your vet is happy with, and dog toothpaste. That is the whole essential kit for most dogs.",
      },
    ],
    related: [
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
        why: "The tool list is decided by this, not by what looks useful in a shop.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "What the kit is actually for, in order.",
      },
      {
        href: "/dog-haircuts-and-trimming/",
        label: "Haircuts and trimming",
        why: "Blade lengths and whether home clipping is realistic for you.",
      },
      {
        href: "/dog-grooming-cost/",
        label: "What dog grooming costs",
        why: "Whether buying a kit saves money in your situation.",
      },
    ],
  },
];
