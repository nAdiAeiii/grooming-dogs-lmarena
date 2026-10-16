import type { GuidePage } from "../types";

export const SITUATIONS: GuidePage[] = [
  {
    slug: "puppy-grooming",
    leadImageId: "lead-puppy",
    clusterId: "puppy",
    archetype: "lifecycle",
    primaryQuery: "puppy grooming",
    supportingQueries: [
      "when can I bathe my puppy",
      "first groom puppy",
      "how to get a puppy used to grooming",
      "puppy first haircut",
      "how often should I brush my puppy",
    ],
    intent:
      "You have a puppy and a small window in which grooming can be made normal rather than something to be survived.",
    h1: "Puppy grooming: using the window you won't get again",
    metaTitle: "Puppy Grooming: First Baths, First Trims and Handling Basics",
    metaDescription:
      "Introduce a puppy to grooming: short handling sessions, the first bath, the first salon visit, what most groomers require, and the mistakes that store up trouble.",
    answer:
      "Between roughly eight and sixteen weeks, puppies are unusually receptive to new experiences, so use that window to make handling boring rather than frightening. Sessions of two to five minutes, several times a week, covering feet, ears, mouth, brush and dryer — long before the puppy needs any of it. Do not wait until the coat is matted or the nails are long to introduce the tools.",
    blocks: [
      {
        kind: "h2",
        id: "window",
        text: "The window, and why it closes",
      },
      {
        kind: "p",
        text: "Puppies go through an early socialisation period in which novel things are accepted readily, and after it, new experiences are approached much more cautiously. Grooming is a long series of novel things: a brush dragged over the ribs, a foot held and squeezed, a clipper buzzing near the face, water in a tub. Introducing them all while the puppy is still open to them is dramatically easier than introducing them to a suspicious adult.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Groom the puppy before the puppy needs grooming",
        text: "The single most common mistake is doing nothing for the first few months because there is nothing to do, then hitting a wall at the first mat or the first nail trim. From day one, the job is handling practice, not grooming.",
      },
      {
        kind: "h2",
        id: "handling",
        text: "The handling programme",
      },
      {
        kind: "table",
        caption:
          "Two to five minutes, three or four times a week, always ending on something the puppy finds easy.",
        head: ["Week", "Practise", "Progress marker"],
        rows: [
          [
            "1",
            "Touch and hold each paw, each ear flap, the muzzle and the tail; look at the teeth",
            "Puppy stays relaxed for a few seconds of each",
          ],
          [
            "2",
            "Add a soft brush and a comb for a few strokes; introduce the toothpaste as a treat",
            "Puppy accepts several brush strokes without mouthing the brush",
          ],
          [
            "3",
            "Run clippers and a dryer switched on nearby, but not touching; touch the nails with the clippers",
            "Puppy ignores the noise instead of startling",
          ],
          [
            "4",
            "First nail trim of just the tips; a damp cloth over the whole body; feet in an empty bath",
            "Puppy stands on a non-slip surface without scrambling",
          ],
          [
            "5+",
            "A short, warm, low-water bath; the dryer on cool at a distance; a treat throughout",
            "Puppy can complete a full mini-groom",
          ],
        ],
      },
      {
        kind: "ul",
        items: [
          "**Use a non-slip surface from the start.** Slipping is frightening, and the fear generalises to the bath.",
          "**Pair everything with food.** The puppy is learning an association, not being tested.",
          "**Keep sessions shorter than you think.** Two good minutes are worth ten tolerant ones.",
          "**Stop mouthing and squirming calmly.** Do not turn it into a game, and do not pin the puppy down.",
          "**Get other people involved.** The puppy should be handleable by someone who is not you — that is what a groomer will be.",
        ],
      },
      {
        kind: "h2",
        id: "first-bath",
        text: "The first bath",
      },
      {
        kind: "p",
        text: "Once the puppy is comfortable with water and a cloth, use lukewarm water, a mild puppy shampoo, and a bath with only a couple of centimetres of water in it. Rinse thoroughly, and dry with towels on cool — a household dryer on hot is unsuitable for a puppy's skin and most puppies find the noise frightening. Keep it short and end with food.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Be careful with temperature, not just water",
        text: "Puppies lose body heat quickly, particularly small and short-coated breeds. Bathe in a warm room, dry thoroughly, and keep the puppy somewhere draught-free until it is completely dry.",
      },
      {
        kind: "h2",
        id: "first-groom",
        text: "The first professional groom",
      },
      {
        kind: "p",
        text: "Most groomers prefer to see a puppy for the first time between roughly four and six months, depending on the coat, and many recommend a short introductory appointment rather than a full haircut. The aim of a first groom is a positive experience and a tidy, not a finished style.",
      },
      {
        kind: "ul",
        items: [
          "**Ask what the salon requires.** Most ask for proof of core vaccinations, and some require additional vaccines for dogs using communal areas. This varies by salon and by country — ask before you book.",
          "**Book the first appointment early in the day**, when the salon is quieter and the groomer has more time.",
          "**Ask for a puppy introduction** rather than a full trim, and expect it to be shorter.",
          "**Tell them what you have practised.** A groomer who knows the puppy has been handled can go further.",
          "**Collect on time.** A puppy left in a crate for hours after its groom learns something unhelpful.",
        ],
      },
      {
        kind: "callout",
        tone: "evidence",
        title: "Anxiety in the waiting area is normal, not a verdict",
        text: "Adolescent dogs often go through a wobbly phase around six to twelve months in which confidence drops. If your puppy was fine at the first groom and is difficult at the second, that is development, not a spoiled dog. Go back to short sessions.",
      },
      {
        kind: "h2",
        id: "what-not-to-do",
        text: "What not to do",
      },
      {
        kind: "ul",
        items: [
          "**Do not pin a puppy down** to get through a nail trim. It teaches the puppy that struggling is necessary and that people are dangerous.",
          "**Do not use adult-strength products.** Puppy skin is more sensitive; use a mild puppy shampoo.",
          "**Do not bath a puppy before it can cope with it**, unless it is genuinely filthy.",
          "**Do not attempt a breed-standard trim** on a puppy coat. Puppy coats change, and early clipping can affect adult texture in some breeds.",
          "**Do not skip the adolescent stage.** Training that stops at six months disappears by twelve.",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Vaccination status and other dogs",
        text: "Before your puppy has completed its vaccination course, keep it off surfaces used by unknown dogs and ask the salon how they manage this. Many will take puppies that are part-vaccinated in a clean appointment slot; some will not. Your vet can advise on local disease risk.",
      },
    ],
    faqs: [
      {
        q: "When can I bathe my puppy for the first time?",
        a: "You can bathe a puppy once it is settled with you and comfortable with handling, using lukewarm water and a mild puppy shampoo, in a warm room. If you have a very young puppy that is genuinely filthy, spot cleaning with a damp cloth is usually the better first move.",
      },
      {
        q: "When should a puppy have its first haircut?",
        a: "Most groomers suggest somewhere around four to six months for a first trim, but the far more useful answer is: as soon as the coat needs tidying, and as a short introductory session rather than a full groom. Booking the first appointment before the coat is unmanageable is the point.",
      },
      {
        q: "How often should I brush my puppy?",
        a: "Little and often — a minute or two daily is better than a weekly ten-minute session. Puppy coats are usually easier than adult coats, so use this phase to build the habit before the adult coat arrives and the work doubles.",
      },
      {
        q: "Do I need to trim puppy nails?",
        a: "Usually yes, and more often than people expect, because puppies do little road walking. Trimming just the tips frequently does two jobs at once: it keeps the nails short and it teaches the puppy that nail trimming is routine.",
      },
      {
        q: "My puppy bites the brush. Is that normal?",
        a: "Very common, and it needs a plan rather than persistence. Make the sessions shorter, use food to occupy the mouth, brush a different area, and get advice on [grooming a nervous dog](/grooming-anxious-dog/) if it does not improve — mouthing at equipment in puppies often becomes real resistance in adults if it is simply outlasted.",
      },
    ],
    related: [
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "The same techniques, for dogs that missed the puppy window.",
      },
      {
        href: "/how-to-groom-your-dog-at-home/",
        label: "Groom your dog at home, start to finish",
        why: "The full routine the puppy is being trained toward.",
      },
      {
        href: "/coat-types-and-breed-grooming/",
        label: "Coat types and what each one needs",
        why: "Puppy coats change — this is what your dog's adult coat will need.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "Questions to ask before your puppy's first appointment in a salon.",
      },
    ],
  },

  {
    slug: "senior-dog-grooming",
    leadImageId: "lead-senior",
    clusterId: "senior",
    archetype: "lifecycle",
    primaryQuery: "senior dog grooming",
    supportingQueries: [
      "grooming an old dog",
      "grooming a dog with arthritis",
      "dog standing for grooming",
      "old dog nails",
      "grooming a dog with lumps",
    ],
    intent:
      "Your dog is older, stiffer or has a health condition, and the grooming routine you had no longer fits the dog.",
    h1: "Grooming a senior dog safely",
    metaTitle: "Senior Dog Grooming: Arthritis, Thin Skin and Short Sessions",
    metaDescription:
      "Adapt grooming for an older dog: shorter sessions, non-slip support, thin skin, longer nails, lumps, and when to speak to your vet before a long groom.",
    answer:
      "Split the routine into short sessions, keep the dog on a non-slip surface at a comfortable height, and let it shift its weight rather than forcing a stand for the whole groom. Expect nails to need trimming more often, skin to be thinner and more easily injured, and new lumps to appear — work around them, not over them. Tell your vet and your groomer about any mobility, pain or heart or breathing problem before a long session.",
    blocks: [
      {
        kind: "h2",
        id: "what-changes",
        text: "What actually changes with age",
      },
      {
        kind: "ul",
        items: [
          "**Joints.** Arthritis makes standing on three legs, or standing at all for long periods, painful. Many older dogs sit or lie down mid-groom because it hurts, not because they are being difficult.",
          "**Skin.** Thinner, less elastic, more easily torn by mats, clips and rough brushing.",
          "**Nails.** Grow at the same rate but wear down less, so they need trimming more often; the quick often has grown long as well.",
          "**Coat.** Can thin, become dull or dry, or change texture. Some seniors grow warts and lumps that get in the way.",
          "**Continence.** Soiled hindquarters need hygiene trimming and bathing more often, and need drying properly.",
          "**Patience and senses.** Hearing and sight loss can make sudden handling and loud dryers genuinely frightening.",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Have the conversation before a long groom",
        text: "If your dog has arthritis, heart disease, breathing problems, a seizure history or is on medication, ask your vet what they want you to avoid — and tell the groomer the same thing. Long, hot or stressful sessions are not appropriate for every dog, and a vet can advise on pain relief before grooming or on a plan involving sedation where welfare requires it.",
      },
      {
        kind: "h2",
        id: "sessions",
        text: "Restructure the routine",
      },
      {
        kind: "table",
        head: ["Instead of", "Do this", "Why"],
        rows: [
          [
            "One 90-minute full groom",
            "Three 20-minute sessions across a week",
            "Most senior dogs cannot stand comfortably for a full groom",
          ],
          [
            "Standing for nail trimming",
            "Trim nails with the dog lying down, or lifting one paw at a time while it sits",
            "Taking weight off a painful limb is kinder and safer",
          ],
          [
            "A full bath and blow dry",
            "A warm, low-water bath with thorough towel drying",
            "Less time standing, less noise, less stress",
          ],
          [
            "A table with an arm and loop",
            "A low, non-slip surface at floor level for larger dogs",
            "Falls and slips become much more serious in older dogs",
          ],
          [
            "Holding the dog still",
            "Let it shift position, and work around it",
            "Struggling against restraint stresses joints and heart",
          ],
        ],
      },
      {
        kind: "h2",
        id: "handling",
        text: "Handling that protects joints",
      },
      {
        kind: "ul",
        items: [
          "**Support the hindquarters** when lifting, and use a ramp or steps rather than asking an arthritic dog to jump.",
          "**Work on a surface with grip.** A wet, slippery bath floor is a genuine hazard for a dog with weak hindlimbs.",
          "**Lift one paw at a time** and put it down again quickly rather than holding a leg up.",
          "**Brush in the direction of hair growth with light pressure.** Older skin tears and bruises more easily.",
          "**Warm the room.** Cold makes stiff joints worse, and a wet older dog loses heat faster.",
          "**Keep the noise down.** A dryer on low, further away, for longer, is better than a hot blast up close.",
        ],
      },
      {
        kind: "h2",
        id: "lumps",
        text: "Lumps, warts and growths",
      },
      {
        kind: "p",
        text: "Many older dogs develop lumps, warts and fatty deposits. Grooming around them is normal — clipping over them is not, because clippers and blades catch on skin growths and tear them. Map where they are, tell your groomer, and get anything new, growing, bleeding or irritating the dog checked by your vet. Regular grooming puts your hands over the whole dog, which is one of the few genuinely useful screening habits available to an owner.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Never clip over a lump or a skin fold",
        text: "Ask your groomer to scissor around growths rather than clip over them, and if a growth is bleeding or has changed, see your vet before the next groom.",
      },
      {
        kind: "h2",
        id: "coat-change",
        text: "When coat changes are not just ageing",
      },
      {
        kind: "p",
        text: "A dull, dry or thinning coat is often attributed to age when it has a treatable cause. Symmetrical hair loss, a coat that will not grow back after clipping, sudden greasiness or scaling, or a dog that is also drinking or eating differently should be discussed with your vet — endocrine, nutritional and skin problems are common in older dogs and frequently get dismissed as old age.",
      },
      {
        kind: "h2",
        id: "nails",
        text: "Nails are the item that slips",
      },
      {
        kind: "p",
        text: "As walks shorten, nails get longer, and long nails on an arthritic dog change its footing and worsens joint pain. Check with the [click test](/trimming-dog-nails/) and trim little and often. If your dog cannot tolerate nail trimming, a vet nurse appointment is a routine, unremarkable solution.",
      },
      {
        kind: "h2",
        id: "groomer",
        text: "Working with a groomer",
      },
      {
        kind: "p",
        text: "Find a groomer who is comfortable with older dogs and will accept a shorter, cheaper appointment that does less. Be explicit about what your dog can and cannot do, and ask them to tell you when it stops being OK. If your dog is in pain or panicking, a vet-arranged sedated groom is a legitimate welfare decision, not a last resort — see [choosing a dog groomer](/choosing-a-dog-groomer/).",
      },
    ],
    faqs: [
      {
        q: "How often should an old dog be groomed?",
        a: "Often more often than before, in smaller pieces. Brushing a little daily, nails every two to three weeks, and a short bath every four to eight weeks suits many seniors. The constraint is how long the dog can comfortably stand, not how dirty it is.",
      },
      {
        q: "My old dog can't stand for a bath. What are my options?",
        a: "A low-water bath where the dog can sit or lie down, washing one end at a time, waterless foam for the middle, and a groomer or vet nurse who can work with the dog lying down. Some mobile groomers have hydraulic tables and are set up for exactly this.",
      },
      {
        q: "Is it safe to sedate a dog for grooming?",
        a: "Sometimes it is the kindest option, and it is a veterinary decision rather than a grooming one. It requires an assessment, usually blood work, and monitoring. Sedation is not a way to get a longer groom — it is a way to do a necessary one safely.",
      },
      {
        q: "My senior dog's coat is not growing back after a clip.",
        a: "This can happen in some breeds and older dogs, and it is called post-clipping alopecia, but slow regrowth is also seen with hormonal conditions such as hypothyroidism or Cushing's disease. If the coat has not grown back in a few months, ask your vet.",
      },
      {
        q: "Should I still brush a dog with thin skin?",
        a: "Yes, but with a soft brush, light pressure and in the direction of hair growth. Skipping brushing leads to mats, and removing mats from fragile skin is far more damaging than brushing gently ever would be.",
      },
    ],
    related: [
      {
        href: "/grooming-anxious-dog/",
        label: "Grooming a nervous dog",
        why: "Sensory decline in older dogs often shows up first as new grooming resistance.",
      },
      {
        href: "/trimming-dog-nails/",
        label: "Trimming dog nails",
        why: "The most commonly neglected task in senior dogs, and the one that affects mobility most.",
      },
      {
        href: "/dog-grooming-problems/",
        label: "Grooming problems and troubleshooting",
        why: "For coat and skin changes that are not simply ageing.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "How to brief a groomer on a dog with limits.",
      },
    ],
  },

  {
    slug: "grooming-anxious-dog",
    leadImageId: "lead-anxious",
    clusterId: "anxious",
    archetype: "lifecycle",
    primaryQuery: "how to groom an anxious dog",
    supportingQueries: [
      "dog hates being groomed",
      "dog bites at clippers",
      "dog scared of hair dryer",
      "dog won't let me trim nails",
      "muzzle training for grooming",
      "dog shakes at the groomer",
    ],
    intent:
      "Grooming has become a fight. You want to change how the dog feels about it, not just hold on tighter.",
    h1: "Grooming a nervous or resistant dog",
    metaTitle: "How to Groom an Anxious Dog: Handling, Desensitising, Muzzles",
    metaDescription:
      "A plan for dogs that panic or bite during grooming: why restraint makes it worse, how counter-conditioning works, muzzle training, and when to hand over.",
    answer:
      "Fear, not naughtiness, drives almost all grooming resistance, and restraint makes it worse because it removes the dog's ability to say no. The fix is to break grooming into tiny pieces, pair each piece with something the dog loves, and progress at the speed the dog sets. Stop before the dog escalates, muzzle-train properly if there is any bite risk, and hand over to a groomer or a vet with sedation when welfare demands it.",
    blocks: [
      {
        kind: "h2",
        id: "why-restraint-fails",
        text: "Why holding on tighter makes it worse",
      },
      {
        kind: "p",
        text: "Every struggle that ends the grooming session teaches the dog that struggling works. And every session in which the dog is restrained while panicking confirms that being handled is genuinely dangerous. The dog is not learning to tolerate grooming — it is learning to fear it more, and to need more restraint next time. This is the single most common way a difficult-to-groom dog becomes an impossible-to-groom dog.",
      },
      {
        kind: "callout",
        tone: "safety",
        title: "Recognise escalation before it reaches teeth",
        text: "Dogs usually give warning: turning the head away, lip licking, yawning, freezing, whale eye, then growling, snarling and biting. Punishing the early signals — or ignoring them — is how you end up with a dog that bites with no warning at all. If you see them, stop.",
      },
      {
        kind: "h2",
        id: "plan",
        text: "The plan: make each piece predictable and pleasant",
      },
      {
        kind: "p",
        text: "The technique is counter-conditioning, and it is not complicated. You present a tiny amount of the frightening thing, and simultaneously give the dog something it loves. The dog learns that the frightening thing predicts the good thing. What makes it work is going far more slowly than feels necessary.",
      },
      {
        kind: "steps",
        items: [
          {
            title: "Write down the pieces",
            text: "Split grooming into its smallest components: the brush appearing, the brush touching the shoulder, the brush moving, a paw being touched, a paw being held, a toe being squeezed, clippers being visible, clippers running, clippers near the body, and so on. Each is a separate step.",
          },
          {
            title: "Find where the dog is comfortable",
            text: "Find the last step your dog accepts calmly. That is your starting point, and it is probably much earlier than you expect.",
          },
          {
            title: "Pair it with food, immediately",
            text: "Present the step and feed at the same time, in a steady stream. The food must arrive with the handling, not after it as a reward.",
          },
          {
            title: "Repeat until it's boring",
            text: "Several short sessions a day, each under three minutes. Move on only when the dog is relaxed at the current step — actively leaning in, rather than just enduring it.",
          },
          {
            title: "Add one tiny increment at a time",
            text: "Not from 'brush on the shoulder' to 'brush on the face'. From 'brush on the shoulder' to 'two strokes on the shoulder'.",
          },
          {
            title: "Stop on a success, every time",
            text: "End at a step the dog finds easy. Sessions that end badly cost you several good sessions.",
          },
        ],
      },
      {
        kind: "h2",
        id: "specific-fears",
        text: "The three most common specific fears",
      },
      {
        kind: "table",
        head: ["Fear", "Usually caused by", "How to approach it"],
        rows: [
          [
            "Nail clippers or grinder",
            "Being held down and cut too short once",
            "Present the clippers, feed; touch a nail with them, feed; then trim the very tip of one nail",
          ],
          [
            "Dryer",
            "Noise plus force of air plus being trapped",
            "Run the dryer across the room and feed; over days, move it closer with the airflow pointed away",
          ],
          [
            "Clippers",
            "Vibration, heat and noise near the face",
            "Run them nearby, then touch them to the body while switched off, then a single second of contact",
          ],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Work on the most-feared task least often",
        text: "Counter-intuitive but important: the thing your dog hates most should appear in short, easy, heavily rewarded sessions — not at the end of a long groom when the dog's tolerance is already spent.",
      },
      {
        kind: "h2",
        id: "muzzles",
        text: "Muzzles, done properly",
      },
      {
        kind: "p",
        text: "If there is any risk of a bite, a muzzle is responsible management, not a failure. The wrong way is to force one on when you need it. The right way is basket muzzle training over a week or two: feed through the muzzle, let the dog put its own nose in, gradually extend the time, and never use it to push a dog past its limit. A basket muzzle allows panting, drinking and treating; a soft fabric one does not, and should only be used briefly.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Talk to your vet about anxiety, not just about grooming",
        text: "Sustained panic is a welfare problem in itself. Vets can help with behaviour modification plans, and in some cases with medication that makes training possible. Medication is not a substitute for training, but for a dog that cannot eat or think while frightened, it can be what allows training to start.",
      },
      {
        kind: "h2",
        id: "groomer",
        text: "Choosing a groomer for a difficult dog",
      },
      {
        kind: "p",
        text: "Be honest when you book — a groomer who is ambushed by a bite cannot help your dog, and may refuse to take it again. Ask what their approach is, whether they will do a partial groom, whether they use drying cabinets or restraints you are not comfortable with, and whether they will stop and call you. Good groomers would far rather do a face and feet trim on a calm dog than a full groom on a terrified one. More on [choosing a dog groomer](/choosing-a-dog-groomer/).",
      },
      {
        kind: "h2",
        id: "when-to-stop",
        text: "When to stop entirely",
      },
      {
        kind: "ul",
        items: [
          "The dog has bitten, or is close to it, and the muzzle is being used to push past a limit rather than to manage a known risk.",
          "The dog injures itself struggling — torn nails, scraped pads, bruising.",
          "Progress has stalled after weeks of correct, slow work.",
          "There is a medical reason the dog cannot be safely restrained.",
        ],
      },
      {
        kind: "p",
        text: "In those situations the realistic options are a vet-arranged groom with sedation, a groomer who specialises in anxious dogs, or a reduced grooming routine you can do at home — teeth, nails and sanitary areas only, with a short clip a few times a year. A dog that is clean enough, comfortable and unharmed is a better outcome than a dog with an immaculate coat and a lifetime of panic.",
      },
    ],
    faqs: [
      {
        q: "Should I muzzle my dog for grooming?",
        a: "If there is a genuine bite risk, yes — and train it over a week or two with food rather than forcing it on when you need it. Use a basket muzzle so the dog can pant, drink and take treats. A muzzle is a safety measure, not permission to push a dog further than it can cope with.",
      },
      {
        q: "How long does it take to fix grooming fear?",
        a: "For mild resistance, a couple of weeks of short daily sessions. For established fear of a specific tool, expect four to eight weeks. For a dog with a long history of being restrained, months, and possibly a permanent need for shorter grooms.",
      },
      {
        q: "My dog is fine with me but bites the groomer.",
        a: "Common, and usually about being handled by a stranger, in a strange place, with no escape. Ask about a quieter appointment, staying present for part of it, or a groomer who works with one dog at a time. Some dogs do better with a mobile groomer simply because there is no waiting room.",
      },
      {
        q: "Are sedated grooms safe?",
        a: "They carry real risk and need a veterinary assessment, but for some dogs they are the least-bad option and the kindest one. What is not acceptable is a dog being repeatedly traumatised to avoid sedation. Your vet can weigh both.",
      },
      {
        q: "Can I just give my dog a short haircut instead of a full groom?",
        a: "Yes, and for many anxious dogs it is the right permanent arrangement. A short, low-maintenance trim means fewer and shorter sessions, less de-matting and less time on the table. Discuss it with your groomer rather than assuming a full groom is the default.",
      },
    ],
    related: [
      {
        href: "/trimming-dog-nails/",
        label: "Trimming dog nails",
        why: "Nail trimming is the most common flashpoint, and the technique most worth rehabilitating.",
      },
      {
        href: "/puppy-grooming/",
        label: "Puppy grooming",
        why: "Prevention: the same programme that stops this problem from developing.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "How to brief a groomer honestly about a dog that bites or panics.",
      },
      {
        href: "/senior-dog-grooming/",
        label: "Senior dog grooming",
        why: "New fear responses in older dogs often have a physical cause.",
      },
    ],
  },

  {
    slug: "dog-grooming-problems",
    leadImageId: "lead-problems",
    clusterId: "problems",
    archetype: "task-guide",
    primaryQuery: "dog grooming problems",
    supportingQueries: [
      "dog scratching after grooming",
      "bumps on dog after grooming",
      "dog smells even after a bath",
      "dog dry flaky skin",
      "redness after clipping",
      "dog itchy after haircut",
    ],
    intent:
      "Something has gone wrong — smell, itching, bumps, redness — and you want to know whether it's a grooming problem or a vet problem.",
    h1: "Grooming problems and troubleshooting",
    metaTitle: "Dog Grooming Problems: Itching, Smell, Bumps and Skin Issues",
    metaDescription:
      "Troubleshoot grooming problems: scratching after a bath, bumps and scabs after a groom, odour that returns in days, dry skin, clipper rash and hot spots.",
    answer:
      "Itching within a few hours of a bath is usually irritation from shampoo residue; itching with bumps, scabs or sores appearing days later can be a skin infection that needs treatment rather than another wash. A smell that returns within days is almost never a grooming gap — it points to skin, ears, mouth or anal glands. Anything painful, spreading, or not settling in a couple of days goes to the vet.",
    blocks: [
      {
        kind: "h2",
        id: "triage",
        text: "Start here: is this a grooming problem or a medical one?",
      },
      {
        kind: "table",
        head: ["Symptom", "Likely grooming cause", "Needs a vet"],
        rows: [
          [
            "Scratches for a few hours after a bath",
            "Shampoo residue, or a product the dog tolerates poorly",
            "Not usually",
          ],
          [
            "Itching for more than a day or two",
            "Possibly over-bathing or a drying product",
            "Yes, if persistent or if the skin looks abnormal",
          ],
          [
            "Pimple-like bumps or scabs on the trunk",
            "Can follow grooming",
            "Yes — this pattern can indicate a skin infection needing treatment",
          ],
          [
            "Redness or a rash where clippers ran",
            "Clipper irritation, heat, a dull blade or too much pressure",
            "Yes if broken skin, or if not settling in a few days",
          ],
          [
            "Smell returning within days of a bath",
            "Rarely a grooming issue",
            "Yes — skin, ears, mouth or anal glands",
          ],
          [
            "Dry, flaky skin",
            "Over-bathing, dry indoor air, under-brushing",
            "Yes if accompanied by redness, hair loss or itching",
          ],
          [
            "Head shaking",
            "Water or hair in the ear after a bath",
            "Yes if it lasts beyond a day, or there is discharge or smell",
          ],
        ],
      },
      {
        kind: "h2",
        id: "itching-after-grooming",
        text: "Itching after a bath or a haircut",
      },
      {
        kind: "p",
        text: "Short-lived scratching straight after a bath is usually straightforward: shampoo left in the coat. Rinse for longer than feels reasonable next time. If the dog scratches for a day or more, the more likely explanations are a shampoo that does not suit the dog, bathing too frequently and stripping the coat's oils, or an underlying skin condition that the bath has temporarily stirred up.",
      },
      {
        kind: "ul",
        items: [
          "Switch to a plain, unscented dog shampoo and see whether it settles.",
          "Space baths further apart — check the interval for your dog's coat type on [how often you should groom](/how-often-should-you-groom-your-dog/).",
          "Rinse for twice as long as you have been doing.",
          "Do not add a second medicated product on top of an undiagnosed problem.",
        ],
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Bumps and scabs in the days after a groom",
        text: "A recognisable pattern of pimple-like bumps, scabs or small crusts appearing on the trunk within days of grooming can indicate a superficial bacterial skin infection. It is uncomfortable, it usually needs treatment, and it will not be fixed by another bath. See your vet rather than re-washing.",
      },
      {
        kind: "h2",
        id: "clipper-irritation",
        text: "Redness and irritation after clipping",
      },
      {
        kind: "p",
        text: "Clipper irritation is usually mechanical: a dull blade dragging, a blade that has got hot, clipping against the lay of the coat, or too much pressure. It also happens when clippers are used on a dirty coat, because grit blunts the blade. It typically settles within a day or two.",
      },
      {
        kind: "ul",
        items: [
          "Let the skin rest for a few days before the next pass.",
          "Use a sharp, oiled blade and stop when it feels warm.",
          "Clip with the lay of the coat for a longer, gentler cut.",
          "Bathe before clipping, not after, so the blade runs through clean hair.",
          "Watch for dogs that lick clipped areas raw — that turns irritation into a wound.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        title: "A dog that will not stop licking a clipped area",
        text: "Persistent licking can create a hot spot — a moist, rapidly spreading area of inflamed skin. These are painful, get worse quickly and need veterinary treatment, usually promptly. Do not wait to see if it settles.",
      },
      {
        kind: "h2",
        id: "smell",
        text: "A dog that still smells",
      },
      {
        kind: "p",
        text: "If a dog smells fine for a day and then smells again, more bathing is not the answer. The usual sources are skin, and the answer to each is a diagnosis.",
      },
      {
        kind: "ul",
        items: [
          "**Skin.** Yeast overgrowth and bacterial infections both produce a distinctive, musty or sour odour. They need treatment, not shampoo.",
          "**Ears.** Ear disease is one of the most common causes of a persistent smell, and often there is no visible discharge from the outside. See [ear cleaning](/cleaning-dog-ears/) for the warning signs.",
          "**Mouth.** Dental disease has a characteristic smell that no bath touches. See [brushing your dog's teeth](/brushing-dog-teeth/).",
          "**Anal glands.** A fishy smell, often sudden and strong, usually relates to the anal glands. It is a veterinary problem, not a grooming add-on.",
          "**Rolled in something.** The classic. Tomato juice and dish soap are folklore; a dog shampoo and a proper rinse work better.",
        ],
      },
      {
        kind: "h2",
        id: "dry-skin",
        text: "Dry, flaky skin",
      },
      {
        kind: "p",
        text: "Dandruff has three common management causes: bathing too often, bathing with a product that is too harsh, and not brushing enough — brushing distributes the skin's oils along the hair shaft. It also has medical causes, including allergies, parasites, hormonal disease and nutritional deficiencies, so persistent flaking with redness, hair loss or itching is a vet appointment.",
      },
      {
        kind: "ul",
        items: [
          "Brush more; it does more for coat condition than any product.",
          "Space baths out and use a mild, unscented dog shampoo.",
          "Consider whether dry indoor air in winter is a factor.",
          "Ask your vet before adding supplements — most coat supplements are unnecessary for a dog on a complete diet.",
        ],
      },
      {
        kind: "h2",
        id: "tear-stains",
        text: "Tear staining",
      },
      {
        kind: "p",
        text: "Rust-coloured staining below the eyes is pigment in the tears, not dirt, so it cannot be washed out. It is most visible on pale-coated breeds and is usually cosmetic. Wipe daily with a damp cloth and keep the hair around the eyes trimmed so it does not wick moisture. Sudden tearing, squinting, a closed eye or pawing at the face is different — that is pain, or a blocked tear duct or corneal problem, and needs a vet promptly.",
      },
      {
        kind: "callout",
        tone: "vet",
        title: "Tear-stain removers and oral products",
        text: "Some oral tear-stain products have historically contained antibiotics, which should not be given to a dog for a cosmetic problem without veterinary direction. Anything applied so close to an eye also carries a risk of corneal irritation. Ask your vet before using these.",
      },
      {
        kind: "h2",
        id: "coat-changes",
        text: "Coat changes worth a phone call",
      },
      {
        kind: "ul",
        items: [
          "Symmetrical thinning or bald patches, which can indicate a hormonal problem.",
          "A coat that fails to regrow after clipping, months later.",
          "Sudden greasiness or heavy scaling.",
          "Matting that appears suddenly in a coat that has never matted, which is often a sign the dog is not grooming itself or is in pain.",
          "Patchy shedding with red or scabby skin underneath, which raises the possibility of parasites or infection.",
        ],
      },
      {
        kind: "h2",
        id: "injury",
        text: "If the dog is hurt during grooming",
      },
      {
        kind: "p",
        text: "For a small nick, stop, keep the area clean and contact your vet for advice — infection settles into a coat quickly. For a cut that keeps bleeding, a burn from a dryer, a torn nail, or anything the dog is clearly painful about, contact your vet the same day. If it happened at a groomer's, a good one will tell you immediately, explain what happened and contribute to treatment. That reaction tells you whether to go back.",
      },
    ],
    faqs: [
      {
        q: "Why is my dog itching so much after grooming?",
        a: "If it starts within hours and settles by the next day, it is usually shampoo residue or clipper irritation — rinse longer, use a milder product, and check the blade. If it lasts more than a day or two, or there are bumps and scabs, it is more likely a skin problem that grooming has uncovered, and it needs a vet.",
      },
      {
        q: "Why does my dog smell even after a bath?",
        a: "Usually because the smell is not coming from the coat. Skin infections, ear disease, dental disease and anal gland problems all produce odour that a bath does not touch, and each needs a diagnosis.",
      },
      {
        q: "What are the little scabs on my dog after a haircut?",
        a: "Small scabs or pimple-like bumps across the clipped area can be clipper irritation or a superficial skin infection. If there are more than a few, or they are spreading or itchy, see your vet — this pattern often needs treatment.",
      },
      {
        q: "Can I use coconut oil on my dog's dry skin?",
        a: "It is a common suggestion, but greasy fur and clogged pores are frequent side effects, and it does nothing for the medical causes of dry skin. Brushing more, bathing less and a mild shampoo are more useful first steps, and a vet can identify the cause if it persists.",
      },
      {
        q: "My dog has a hot spot. Can I treat it at home?",
        a: "Hot spots are painful, spread fast and usually need veterinary treatment. Clipping the area and cleaning it can be part of the treatment, but it needs to be done properly, and most dogs need medication. Do not wait — they get worse in hours rather than days.",
      },
    ],
    related: [
      {
        href: "/bathing-your-dog/",
        label: "Bathing your dog",
        why: "Rinsing properly and bathing at the right interval prevent most of the itching on this page.",
      },
      {
        href: "/cleaning-dog-ears/",
        label: "Ear cleaning",
        why: "One of the most common sources of persistent odour, and easy to miss from the outside.",
      },
      {
        href: "/brushing-dog-teeth/",
        label: "Brushing your dog's teeth",
        why: "Dental disease is the other common cause of a smell that a bath doesn't fix.",
      },
      {
        href: "/choosing-a-dog-groomer/",
        label: "Choosing a dog groomer",
        why: "What a good groomer should tell you if something goes wrong during a groom.",
      },
    ],
  },
];
