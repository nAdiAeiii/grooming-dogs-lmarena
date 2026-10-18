import type { GuidePage } from "../types";

export const REFERENCE: GuidePage[] = [
  {
    slug: "glossary",
    clusterId: "terminology",
    archetype: "glossary",
    primaryQuery: "dog grooming terms",
    supportingQueries: [
      "what is a kennel cut",
      "what does de-shedding mean",
      "what is the quick on a dog's nail",
      "what is hand stripping",
      "grooming slang meanings",
    ],
    intent:
      "A groomer, a website or a product page has used a word you don't recognise. Look it up and get back to what you were doing.",
    h1: "Dog grooming glossary",
    metaTitle: "Dog Grooming Glossary: Terms, Trims and Techniques Explained",
    metaDescription:
      "Plain definitions for dog grooming terms: coat types, trim names, blade lengths, the quick, line brushing, hand stripping, sanitary trims and more.",
    answer:
      "Plain definitions for the words that appear on groomers' price lists, in breed standards and across this site. Where a term has a full page of its own, the definition links to it.",
    blocks: [
      {
        kind: "h2",
        id: "coat-and-hair",
        text: "Coat and hair",
      },
      { kind: "h3", id: "topcoat", text: "Topcoat (guard hair)" },
      {
        kind: "p",
        text: "The longer, coarser outer layer of hair that protects against weather and dirt. In a double coat it sits over the undercoat.",
      },
      { kind: "h3", id: "undercoat", text: "Undercoat" },
      {
        kind: "p",
        text: "The dense, soft, insulating layer beneath the topcoat. It is what sheds, what mats, and what an undercoat rake is designed to remove.",
      },
      { kind: "h3", id: "double-coat", text: "Double coat" },
      {
        kind: "p",
        text: "A coat with both an undercoat and a topcoat — Labrador, Husky, Golden Retriever, German Shepherd. Double coats should generally not be shaved. See [coat types](/coat-types-and-breed-grooming/).",
      },
      { kind: "h3", id: "single-coat", text: "Single coat" },
      {
        kind: "p",
        text: "A coat with no undercoat, such as a Poodle, Maltese or Boxer. Single coats shed less and mat differently, depending on length and texture.",
      },
      { kind: "h3", id: "puppy-coat", text: "Puppy coat" },
      {
        kind: "p",
        text: "The softer first coat, which is replaced by the adult coat — usually between about eight and fourteen months, and earlier in some breeds. The transition is when many coats start to mat badly, because the puppy coat sheds into the adult coat.",
      },
      { kind: "h3", id: "blowing-coat", text: "Blowing coat" },
      {
        kind: "p",
        text: "The concentrated shed of undercoat, typically once or twice a year. During a blow, brushing becomes a near-daily job.",
      },
      { kind: "h3", id: "furnishings", text: "Furnishings" },
      {
        kind: "p",
        text: "The longer hair on the legs, beard, eyebrows and tail of breeds such as Schnauzers and spaniels. Usually left long in a breed trim.",
      },
      { kind: "h3", id: "feathering", text: "Feathering" },
      {
        kind: "p",
        text: "Long, fine hair on the backs of the legs, the ears and the underside. Feathers mat easily, especially behind the ears and in the trousers.",
      },
      { kind: "h3", id: "trousers", text: "Trousers" },
      {
        kind: "p",
        text: "Groomer shorthand for the long hair on a dog's hindquarters. One of the friction zones where mats form first.",
      },
      {
        kind: "h2",
        id: "brushing-and-de-matting",
        text: "Brushing and de-matting",
      },
      { kind: "h3", id: "line-brushing", text: "Line brushing" },
      {
        kind: "p",
        text: "Brushing in narrow sections, parting the coat to the skin and working each exposed band before moving down. The only method that reliably reaches the skin on a long or curly coat. See [brushing, mats and shedding](/brushing-mats-and-shedding/).",
      },
      { kind: "h3", id: "mat", text: "Mat" },
      {
        kind: "p",
        text: "Hair that has felted into a pad close to the skin. Mats tighten when wet, which is why the coat is de-matted before a bath rather than after.",
      },
      { kind: "h3", id: "pelting", text: "Pelted" },
      {
        kind: "p",
        text: "A coat in which mats have joined into a continuous sheet against the skin. A pelted coat almost always needs a full shave-down by a professional.",
      },
      { kind: "h3", id: "de-matting", text: "De-matting" },
      {
        kind: "p",
        text: "Splitting a mat into smaller sections and brushing those out, rather than pulling the whole mat or cutting it out with scissors. Charged by time at most salons.",
      },
      { kind: "h3", id: "de-shedding", text: "De-shedding" },
      {
        kind: "p",
        text: "Removing dead undercoat with a rake or de-shedding tool. It reduces the hair in the house; it does not reduce the total amount the dog sheds.",
      },
      { kind: "h3", id: "carding", text: "Carding" },
      {
        kind: "p",
        text: "Removing dead undercoat from a wire coat with a stripping knife or carding tool, without removing the topcoat.",
      },
      { kind: "h3", id: "hand-stripping", text: "Hand stripping" },
      {
        kind: "p",
        text: "Pulling dead wire hair out by hand or with a stripping knife so a new harsh coat can grow through. Preserves the texture and colour of a wire coat; slower and more expensive than clipping. See [coat types](/coat-types-and-breed-grooming/).",
      },
      {
        kind: "h2",
        id: "bathing-and-drying",
        text: "Bathing and drying",
      },
      { kind: "h3", id: "double-bath", text: "Double bath" },
      {
        kind: "p",
        text: "Two shampoos in one session: the first loosens grease and debris, the second cleans. Standard for a dirty coat.",
      },
      { kind: "h3", id: "contact-time", text: "Contact time" },
      {
        kind: "p",
        text: "How long a medicated shampoo must stay on the coat to work. Usually several minutes, and the most commonly ignored instruction on the bottle.",
      },
      { kind: "h3", id: "force-drying", text: "Force drying / high-velocity drying" },
      {
        kind: "p",
        text: "Drying with a high-volume unheated dryer that pushes water and loose hair out of the coat. Powerful, and needs care and training to use around a dog's face and ears.",
      },
      { kind: "h3", id: "drying-cabinet", text: "Drying cabinet" },
      {
        kind: "p",
        text: "An enclosed heated box a dog stands in to dry. Used in some salons, and contentious — ask how it is monitored and for how long dogs are left in it.",
      },
      { kind: "h3", id: "brushing-out", text: "Brushing out (finish work)" },
      {
        kind: "p",
        text: "The final comb-through after drying, which straightens the coat and reveals anything the clipper or brush missed.",
      },
      {
        kind: "h2",
        id: "cutting-and-blades",
        text: "Cutting and blades",
      },
      { kind: "h3", id: "blade-numbers", text: "Blade numbers" },
      {
        kind: "p",
        text: "Clipper blade sizes, which run opposite to intuition: higher numbers cut shorter. A #40 leaves under a millimetre; a #3 leaves about 13 mm. Lengths and uses are tabulated on [haircuts and trimming](/dog-haircuts-and-trimming/).",
      },
      { kind: "h3", id: "comb-attachment", text: "Comb attachment (guard comb)" },
      {
        kind: "p",
        text: "A plastic guide that fits over a blade to leave a longer, uniform length than the blade alone.",
      },
      { kind: "h3", id: "snap-on-comb", text: "With the lay / against the lay" },
      {
        kind: "p",
        text: "Clipping in the direction of hair growth leaves more length; clipping against it leaves less. The source of many surprised owners.",
      },
      { kind: "h3", id: "sanitary-trim", text: "Sanitary trim (hygiene trim)" },
      {
        kind: "p",
        text: "A short clip around the genitals and anus to keep the area clean. Done with clippers, never scissors.",
      },
      { kind: "h3", id: "pad-trim", text: "Pad trim" },
      {
        kind: "p",
        text: "Trimming the hair between the paw pads flush with the pad, to stop mud, burrs and ice collecting there.",
      },
      { kind: "h3", id: "teddy-bear-cut", text: "Teddy bear / puppy cut" },
      {
        kind: "p",
        text: "A uniform rounded length all over, including a rounded face. Popular on Doodles, Bichons and Shih Tzus, and harder to execute well than it sounds.",
      },
      { kind: "h3", id: "kennel-cut", text: "Kennel cut / utility trim" },
      {
        kind: "p",
        text: "One short, uniform, practical length all over. Low maintenance, and the default for dogs whose coats are in poor condition.",
      },
      { kind: "h3", id: "lamb-trim", text: "Lamb trim" },
      {
        kind: "p",
        text: "Short body with fuller, rounded legs. Classic Poodle pet trim.",
      },
      { kind: "h3", id: "pattern-trim", text: "Pattern trim" },
      {
        kind: "p",
        text: "A breed-standard trim with defined areas left long and shaped — Schnauzer, Cocker, Westie and show Poodle trims. Skilled work.",
      },
      { kind: "h3", id: "shave-down", text: "Shave-down / strip-down" },
      {
        kind: "p",
        text: "Very short all over. Usually the outcome of severe matting or a medical need rather than a style choice.",
      },
      { kind: "h3", id: "post-clipping-alopecia", text: "Post-clipping alopecia" },
      {
        kind: "p",
        text: "Failure of a coat to regrow normally after clipping, recognised in some breeds including Pomeranians and Siberian Huskies. Persistent cases should be discussed with a vet.",
      },
      {
        kind: "h2",
        id: "nails-ears-teeth",
        text: "Nails, ears and teeth",
      },
      { kind: "h3", id: "quick", text: "The quick" },
      {
        kind: "p",
        text: "The blood and nerve supply inside a nail. Visible as a pink triangle in clear nails, and detectable on black nails as a pale chalky oval appearing at the cut surface. Cutting it is painful and bleeds. See [trimming dog nails](/trimming-dog-nails/).",
      },
      { kind: "h3", id: "dew-claw", text: "Dew claw" },
      {
        kind: "p",
        text: "The digit partway up the inside of the leg, which never touches the ground. Its nail never wears down and is the one most likely to grow into the pad.",
      },
      { kind: "h3", id: "styptic", text: "Styptic powder" },
      {
        kind: "p",
        text: "An astringent powder pressed onto a bleeding nail to stop the flow. Cornstarch is the household substitute.",
      },
      { kind: "h3", id: "otic", text: "Otic solution" },
      {
        kind: "p",
        text: "Ear cleaner formulated for the ear canal. What you should be using, rather than alcohol, peroxide or water. See [ear cleaning](/cleaning-dog-ears/).",
      },
      { kind: "h3", id: "otitis", text: "Otititis externa" },
      {
        kind: "p",
        text: "Inflammation or infection of the external ear canal. Head shaking, smell, discharge and pain are the signs — it needs veterinary treatment, not cleaning.",
      },
      { kind: "h3", id: "vohc", text: "VOHC acceptance" },
      {
        kind: "p",
        text: "A seal awarded by the Veterinary Oral Health Council to dental products that met its plaque or tartar reduction criteria in controlled studies. The most reliable indicator that a dental product does something.",
      },
      {
        kind: "h2",
        id: "handling-and-business",
        text: "Handling and business terms",
      },
      { kind: "h3", id: "cooperative-care", text: "Cooperative care" },
      {
        kind: "p",
        text: "Training an animal to be a willing participant in its own handling, giving it a way to signal it needs a break, rather than restraining it. See [grooming a nervous dog](/grooming-anxious-dog/).",
      },
      { kind: "h3", id: "counter-conditioning", text: "Counter-conditioning" },
      {
        kind: "p",
        text: "Pairing something the dog fears with something the dog loves, repeatedly, until the feared thing predicts the good thing. The core technique for fixing grooming fear.",
      },
      { kind: "h3", id: "basket-muzzle", text: "Basket muzzle" },
      {
        kind: "p",
        text: "A rigid muzzle that lets the dog pant, drink and take treats while preventing a bite. The right type for grooming, provided it is trained rather than forced on.",
      },
      { kind: "h3", id: "grooming-loop", text: "Grooming loop / arm" },
      {
        kind: "p",
        text: "The restraint system on a grooming table, holding the dog by the neck or body while it is worked on. Should never be used to hold a panicking dog, and never with a dog unattended on a raised surface.",
      },
      { kind: "h3", id: "wet-room", text: "Face, feet and sanitary" },
      {
        kind: "p",
        text: "A partial groom covering only the eyes, the paws and the hygiene area — a common and sensible option for dogs that cannot tolerate a full session.",
      },
      { kind: "h3", id: "tipped-out", text: "Tipping out" },
      {
        kind: "p",
        text: "Colloquial for a dog being sent home part-finished because it could not cope. Not a failure — often the right call, and a groomer should tell you when it happens.",
      },
    ],
    faqs: [
      {
        q: "What does 'tidy' mean on a grooming price list?",
        a: "Usually a bath, dry, brush-out, nail trim, ear clean and a light trim of the feet, face and hygiene area — no full-body haircut. Cheaper than a full groom, and the right choice for dogs that don't need clipping.",
      },
      {
        q: "What is the difference between a puppy cut and a teddy bear cut?",
        a: "The two terms are used almost interchangeably, and both mean one uniform rounded length with a rounded face. If a groomer distinguishes them, a puppy cut is usually slightly shorter. Always agree the blade length rather than the label.",
      },
      {
        q: "What does 'in coat' and 'out of coat' mean?",
        a: "A dog is 'in coat' when it is carrying full length and condition, usually for showing, and 'out of coat' when it has been stripped or clipped down. The terms matter when you are discussing timing with a groomer or breeder.",
      },
    ],
    related: [
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and breed grooming",
        why: "The coat vocabulary above, applied to real breeds.",
      },
      {
        href: "/dog-haircuts-and-trimming/",
        label: "Haircuts and trimming",
        why: "Blade lengths and trim names, in context.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "How to use this vocabulary to ask for the trim you actually want.",
      },
    ],
  },

  {
    slug: "about",
    leadImageId: "lead-about",
    clusterId: "trust",
    archetype: "trust",
    primaryQuery: "about grooming dogs site",
    supportingQueries: [
      "who runs grooming-dogs.com",
      "is grooming-dogs.com a grooming salon",
    ],
    intent:
      "You want to know who is behind this site, what it does and does not offer, and whether it can be trusted.",
    h1: "About this site",
    metaTitle: "About Grooming Dogs — What This Site Is and Isn't",
    metaDescription:
      "Grooming Dogs is an independent guide to dog grooming. Not a salon: no booking system, no shop, no affiliate links, no team. Here is how it works.",
    answer:
      "Grooming Dogs is an independent, editorial guide to dog grooming — coat-type schedules, home technique, tool literacy and honest advice about when a job belongs to a professional. It is not a grooming salon, it does not take bookings, it sells nothing, and it is not written by veterinarians.",
    blocks: [
      {
        kind: "h2",
        id: "what-this-is",
        text: "What this site is",
      },
      {
        kind: "ul",
        items: [
          "A structured guide to grooming a healthy dog at home, organised by task and by situation rather than by breed.",
          "A reference for working out how often each part of the routine needs doing, based on coat type.",
          "Buyer literacy for grooming tools: what each tool family does and which ones a given coat actually needs.",
          "Straightforward guidance on when a task stops being a home job and becomes a professional or veterinary one.",
        ],
      },
      {
        kind: "h2",
        id: "what-this-isnt",
        text: "What this site is not",
      },
      {
        kind: "p",
        text: "The domain previously carried a template for a pet grooming business. That template displayed a shop address, a phone number, an email address, a team page and a three-tier price list — all of it placeholder content. Rather than rebuild that fiction, this site states plainly what it does not have:",
      },
      {
        kind: "ul",
        items: [
          "**No salon, no van and no service area.** Nothing here can be booked.",
          "**No prices of its own.** Where costs are discussed, the figures are attributed to published third-party sources.",
          "**No shop, no affiliate links and no sponsored products.** Nothing on this site earns a commission.",
          "**No veterinary credentials.** No one writing here is a vet, and nothing here is veterinary advice.",
          "**No testimonials, no reviews and no case studies.** There is no way to verify them on a site like this, so they are absent.",
          "**No guarantee of outcome.** Dogs vary enormously, and so does what works.",
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Why the missing business details matter",
        text: "A grooming business site needs a real address, real staff, real insurance and a real booking path. Inheriting a template that imitates those things without providing them is worse than not claiming them. If you are looking for a groomer, [choosing a dog groomer](/choosing-a-dog-groomer/) tells you what to ask instead.",
      },
      {
        kind: "h2",
        id: "how-organised",
        text: "How the site is organised",
      },
      {
        kind: "p",
        text: "Pages are grouped by what you are trying to do, not by what a groomer's price list looks like.",
      },
      {
        kind: "table",
        head: ["Section", "What it answers"],
        rows: [
          [
            "Start here",
            "The full routine, how often to do each part, what coat your dog has, and which tools you need",
          ],
          [
            "Grooming tasks",
            "How to bathe, brush, de-mat, trim, clip, cut nails, clean ears and brush teeth",
          ],
          [
            "Your dog",
            "Puppies, senior dogs, nervous dogs, and troubleshooting problems",
          ],
          [
            "Using a groomer",
            "Choosing one, and what a groom should cost",
          ],
          ["About", "What this site is, how it is written, and how to contact it"],
        ],
      },
      {
        kind: "h2",
        id: "contact",
        text: "Corrections and suggestions",
      },
      {
        kind: "p",
        text: "If something on this site is wrong, or unclear, or missing, say so. Corrections are read and acted on, and the page will be amended. Go to [contact and corrections](/contact/).",
      },
    ],
    faqs: [],
    related: [
      {
        href: "/editorial-policy/",
        label: "Editorial and sourcing policy",
        why: "How the content on this site is produced, and what its limits are.",
      },
      {
        href: "/contact/",
        label: "Contact and corrections",
        why: "Tell us what is wrong or missing.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "The page most people arrive here for.",
      },
    ],
  },

  {
    slug: "editorial-policy",
    clusterId: "trust",
    archetype: "trust",
    primaryQuery: "grooming dogs editorial policy",
    supportingQueries: [
      "is grooming-dogs.com veterinary reviewed",
      "grooming-dogs.com sourcing",
    ],
    intent:
      "You want to know how the guidance on this site was produced, and how much weight to give it.",
    h1: "Editorial and sourcing policy",
    metaTitle: "Editorial Policy: How Grooming Dogs Content Is Sourced",
    metaDescription:
      "How content on Grooming Dogs is produced and sourced, how health claims are handled, what the site will not claim, and how corrections are made.",
    answer:
      "Guidance on this site summarises well-established, widely-published grooming practice — the parts of the subject that veterinary bodies, grooming associations and experienced practitioners broadly agree on. It is not veterinary advice, it is not clinically reviewed, and where a claim could not be sourced it is either removed or labelled as a general observation.",
    blocks: [
      {
        kind: "h2",
        id: "how-written",
        text: "How the content is written",
      },
      {
        kind: "ul",
        items: [
          "Pages are built around a specific question a dog owner actually asks, and the answer is given before any background.",
          "Frequency and technique guidance is organised by coat type, because that is the variable the published guidance consistently turns on.",
          "Where sources disagree, the disagreement is shown as a range rather than averaged into a false single number.",
          "Where a claim is contested or depends on individual circumstances, that is stated on the page.",
          "Nothing is padded. A page ends when the question is answered.",
        ],
      },
      {
        kind: "h2",
        id: "health-claims",
        text: "How health and safety claims are handled",
      },
      {
        kind: "p",
        text: "Grooming sits next to medicine, and it is easy for a grooming site to drift into giving medical advice. Three rules are applied to everything published here:",
      },
      {
        kind: "ol",
        items: [
          "Practical, non-clinical grooming technique is explained in full — how to brush, how to bathe, how to trim a nail.",
          "Anything that requires a diagnosis is described only so it can be recognised and referred: skin infections, ear disease, dental disease, lumps, hot spots.",
          "No treatment, medication, dose or home remedy is recommended for any medical condition.",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "This site is not veterinary advice",
        text: "It is general information about grooming healthy dogs. Your vet knows your dog, can examine it and is the only person who can diagnose or treat anything. If your dog is unwell, in pain, or has a skin, ear or mouth problem, make an appointment.",
      },
      {
        kind: "h2",
        id: "commercial",
        text: "Commercial policy",
      },
      {
        kind: "ul",
        items: [
          "No affiliate links, no sponsored content, no paid placements and no advertising.",
          "No product is recommended by brand. Tools are described by type and function, so you can evaluate any product yourself.",
          "No ecommerce, no booking system and no lead generation. This site does not sell or facilitate any service.",
          "Where prices are discussed, figures are attributed to the third-party sources that published them, and are labelled as indicative.",
          "No commercial relationship exists with any groomer, salon, brand or retailer.",
        ],
      },
      {
        kind: "h2",
        id: "no-credentials",
        text: "On credentials",
      },
      {
        kind: "p",
        text: "This site does not claim veterinary review, clinical authorship, professional grooming certification, or years of salon experience. Inventing any of those would be easy and worthless. What it can honestly claim is that the guidance is drawn from established practice, that disagreements between sources are surfaced rather than hidden, and that the limits of the information are stated on every page.",
      },

      {
        kind: "h2",
        id: "photography",
        text: "Photography",
      },
      {
        kind: "p",
        text: "Every photograph on this site is a real photograph of a real dog, sourced from Pexels and credited to the photographer on the page where it appears. No image on this site is AI-generated, and none has been digitally altered beyond cropping and compression.",
      },
      {
        kind: "ul",
        items: [
          "**Sourcing.** Images were found through stock-media search against specific subject queries, which are recorded for each asset in the site's photography registry.",
          "**Attribution.** The Pexels License permits use without attribution, but each photograph carries a credit line naming the photographer and linking to the source page. Credits are given voluntarily.",
          "**Instructional images.** Where a photograph is used to illustrate a technique, it is captioned with what it shows. Where the available photography does not match the technique closely enough to be useful, the slot is left as a clearly labelled placeholder rather than filled with an approximate image.",
          "**Known gaps.** Two instructional slots are currently unfilled for this reason: a dog having its teeth brushed, and a dog's ear being cleaned. Both searches returned only human dentistry or wide clinical shots in which the relevant detail is not the subject.",
          "**No stock-model claims.** No photograph on this site is presented as our own dog, our own premises, our own equipment or our own work.",
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Why the gaps are visible",
        text: "A placeholder that says what is missing is more useful than a photograph that shows the wrong thing. If you hold or can license an accurate photograph of a dog's teeth being brushed, or of an ear being cleaned, [send it through the corrections channel](/contact/) — it would replace a placeholder rather than decorate a page.",
      },
      {
        kind: "h2",
        id: "corrections",
        text: "Corrections",
      },
      {
        kind: "p",
        text: "Errors are corrected openly. Send a correction through [contact and corrections](/contact/), with a source if you have one. Substantive changes are made on the page itself, and anything that turns out to have been stated too strongly is rewritten rather than quietly softened.",
      },
      {
        kind: "h2",
        id: "scope",
        text: "Scope and things deliberately not covered",
      },
      {
        kind: "ul",
        items: [
          "**Cat grooming.** The domain name is dog-specific and the content is too.",
          "**Nutrition, supplements and pet food.** Outside the subject of the site, and an area where claims are hard to evaluate.",
          "**Breeding, adoption, pet sitting and pet matching.** Unrelated to grooming.",
          "**A veterinary illness guide.** Would require clinical review that this site cannot provide.",
          "**Breed-by-breed pages.** Without first-hand data, dozens of breed pages would be thin restatements of the same coat-type guidance. That information is consolidated on one page instead.",
        ],
      },
    ],
    faqs: [],
    related: [
      {
        href: "/about/",
        label: "About this site",
        why: "What Grooming Dogs is, and what it deliberately is not.",
      },
      {
        href: "/contact/",
        label: "Contact and corrections",
        why: "Send a correction or a suggestion.",
      },
      {
        href: "/dog-grooming-problems/",
        label: "Grooming problems and troubleshooting",
        why: "The clearest example of where practical guidance ends and a vet begins.",
      },
    ],
  },

  {
    slug: "contact",
    clusterId: "trust",
    archetype: "trust",
    primaryQuery: "contact grooming dogs",
    supportingQueries: ["grooming dogs corrections", "grooming-dogs.com contact"],
    intent:
      "You want to point out an error, ask a question about a page, or suggest something that is missing.",
    h1: "Contact and corrections",
    metaTitle: "Contact Grooming Dogs — Corrections, Questions, Suggestions",
    metaDescription:
      "Send a correction, a question or a suggestion about anything on Grooming Dogs. No booking requests: this site is not a grooming business.",
    answer:
      "Use the form below to send a correction, ask a question about a page, or suggest something that is missing. This site is not a grooming business, so it cannot book appointments, quote prices or recommend a groomer in your area.",
    blocks: [
      {
        kind: "h2",
        id: "what-we-can-help-with",
        text: "What this channel is for",
      },
      {
        kind: "ul",
        items: [
          "**Corrections.** Something on a page is factually wrong, out of date or unclear.",
          "**Gaps.** A grooming question this site does not answer yet.",
          "**Problems with the site.** A broken link, a page that doesn't work on your phone, a table you can't read.",
          "**Feedback on tone or clarity.** Including if something read as more certain than it should have.",
        ],
      },
      {
        kind: "h2",
        id: "what-we-cannot-do",
        text: "What this channel cannot do",
      },
      {
        kind: "ul",
        items: [
          "Book, quote or schedule a grooming appointment — this site has no salon.",
          "Recommend a specific groomer, salon or mobile service in your area.",
          "Answer questions about your dog's health, skin, ears or teeth. Those need a vet who can examine the dog.",
          "Recommend a specific product or brand.",
          "Sponsor, review or link to your product or service.",
        ],
      },
      { kind: "h2", id: "form", text: "Send a message" },
      { kind: "widget", widget: "feedback" },
      {
        kind: "p",
        text: "Prefer email? Write to the address on the domain registration record. There is no phone number and no office address to publish, because there is no office — publishing an invented one was the previous version of this site's biggest problem.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "If your dog needs help today",
        text: "Contact your veterinary practice. For anything urgent — bleeding that will not stop, a suspected broken tooth, a dog that is in pain or has suddenly got worse — do not wait for a reply from a website.",
      },
    ],
    faqs: [],
    related: [
      {
        href: "/editorial-policy/",
        label: "Editorial and sourcing policy",
        why: "How corrections are handled and how content is produced.",
      },
      {
        href: "/about/",
        label: "About this site",
        why: "What Grooming Dogs is, and what it is not.",
      },
    ],
  },
];
