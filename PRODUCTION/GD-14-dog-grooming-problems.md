# GD-14 — Production Record: Dog grooming problems

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-14
**Upstream records:** `PRODUCTION/GD-01` … `GD-13`. Every upstream page that points to GD-14 (GD-01, 02, 04, 05, 06, 08, 10, 13) was checked, and each pointer lands on a matching section here.
**Architecture:** final validated architecture
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-14 |
| Canonical title | Dog grooming problems |
| Canonical URL | `https://grooming-dogs.com/dog-grooming-problems/` |
| Page type | WordPress Page (top level, no parent). Primary nav item "Problems". |
| Funnel role | Problem router: symptom → likely grooming factor → owner page or vet |
| Byline | Grooming Dogs. No expert reviewer. (The spec recommends a veterinarian if available; none is.) |
| Commercial class | **EDITORIAL ONLY.** No "What you'll need" box, no affiliate links, no product mentions. |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

**Structure source:** the locked spec defines **nine H2 sections in a fixed order** and **no H3s** ("Each symptom is its own H2 so readers can scan"). FAQs are optional, at most 3: scabs after a haircut; coconut oil → refer; hot spot → refer. All three are kept because each answers a distinct search question the body does not phrase directly. The FAQ block sits under a "Common questions" H2, as on GD-01 to GD-13. Its items use H3 titles, the site's Accordion convention; these are not content H3s.

---

## B. Ownership

**Primary intent:** I noticed something wrong during or after grooming. Is it the grooming, or does my dog need a vet, and where do I go next?

**Owned by GD-14 (spec §D):**
- itching after grooming
- bumps or scabs after a haircut
- redness after clipping
- head shaking after grooming
- smell even after a bath
- dry, flaky skin (grooming angle)
- tear staining (grooming angle)
- coat not growing back after clipping (also on GD-13 for seniors; here it's recognise and refer)
- first response when a dog was hurt during grooming
- the triage rule (grooming cause vs vet)

**Answered only as "see a vet":** coconut oil on dry skin; treating a hot spot at home.

**Delegated:**

| Topic | Owner | On GD-14 |
|---|---|---|
| How often to groom or bathe | **GD-02** | Link only. **No frequency fix** ("bathe less" or "brush more" is never offered as a solution). |
| Coat types; shaving double coats | GD-03 | Pointer (coat regrowth) |
| Bathing, rinsing and drying technique | GD-04 | "What to change" names the factor and links |
| Brushing; mats | GD-05 | Pointer |
| Clipping technique; blade heat; eye-area trim | GD-06 | Pointer |
| Quick bleeding (method) | GD-07 | Pointer. **No second bleeding protocol.** |
| Ear cleaning method and ear vet signs | GD-08 | Pointer |
| Tool choice | GD-10 | Not needed |
| Fear and resistance | GD-12 | Pointer (behavior after a bad experience) |
| Senior adaptations | GD-13 | Pointer (coat regrowth in older dogs) |
| Groomer complaints | GD-15 | Pointer |
| Diagnosis, treatment, medication | Vet | Recognition list only |

**Boundaries:**
- **GD-04 to GD-09:** this page names the likely grooming factor ("leftover shampoo", "a hot blade", "water in the ear") and links to the owner page for the fix. It doesn't repeat steps.
- **GD-12:** fearfulness after a bad groom → GD-12. A sudden change plus physical signs → vet.
- **GD-13:** regrowth in older dogs gets one pointer. No senior handling content.

---

## C. Final Page Structure and Content

> *[Square-bracketed italics]* are builder notes and are not published.
>
> **[S1]–[S14]** are source markers, rendered as superscript links to the Sources list.

*[Breadcrumb: Home › Grooming problems]*

# Problems after grooming: what they mean and what to do

*[Intent line]* You've noticed something after a bath, a brush, a trim or a trip to the groomer, and you want to know whether it's the grooming or something your vet should see.

*[Byline]* By Grooming Dogs · Updated *[publish date]*

*[Scope note]* This page helps you work out what to change and when to call your vet. It can't diagnose your dog. Only a vet who examines your dog can do that.

*[No lead image (see F). The short answer follows directly.]*

*[Short answer box]*
**Short answer:**
- **Stop the grooming task** that seems to be causing the problem. Don't push on to finish.
- **Some problems are linked to how a dog was groomed:** leftover shampoo, a coat left damp, a hot or damaged clipper blade, or water in the ears **[S1][S2][S8][S11]**. Changing the technique can help.
- **See your vet** if your dog seems in pain, the problem is spreading or getting worse, there's broken skin, swelling, discharge or bleeding that won't stop, or your dog seems unwell in themselves.
- **When in doubt, call your vet.** Several of these signs look alike, and some need prompt treatment **[S4][S8]**.

---

## Is it a grooming problem or a vet problem?

Grooming can cause or expose problems, but the same sign can have many causes. Skin problems are one of the most common reasons owners take their pets to the vet **[S14]**.

**A grooming factor is more likely when all of these are true:**
- the problem is mild and appeared soon after a particular grooming task;
- you can see a likely cause, such as shampoo you didn't fully rinse out;
- your dog seems otherwise comfortable and well;
- it's improving, not getting worse.

Even then, keep an eye on it and change what you do next time.

*[See-a-vet callout]* **Contact your vet** if any of these apply:
- **Pain:** your dog seems sore, cries when touched, or won't let you near the area.
- **Spreading:** the problem is spreading or getting worse rather than better.
- **Broken skin:** there's a cut, sores, scabs, oozing or pus.
- **Swelling:** for example, a puffy ear flap **[S3]**.
- **Unwell:** your dog is quiet, lethargic, or off their food. With skin changes after a bath, this needs **prompt** veterinary attention **[S4][S5]**.
- **Not settling:** the problem hasn't settled, or keeps coming back.

**Don't treat it yourself.** Don't put home remedies, human creams or leftover medication on your dog's skin, ears or eyes unless your vet tells you to. Your vet needs to find the cause before the right treatment is clear **[S7][S8]**.

---

## Symptoms at a glance

*[Table: HTML in Text Editor. Mobile: horizontally scrollable wrapper (Kit table style).]*

| What you see | Possible grooming factor | What to change | See a vet if | Where to go |
|---|---|---|---|---|
| Itching, scratching or licking after a bath | Shampoo left in the coat; a product that isn't made for dogs **[S1]** | Rinse until no shampoo is left; use dog products only | It's still itchy after a better rinse, or there's redness, sores or hair loss | [rinsing and drying properly](/bathing-your-dog/) |
| Redness after clipping | Hot or damaged blade; clipping close to the skin **[S11][S13]** | Check blade heat; keep the blade off the skin | There's broken skin, swelling, or your dog is sore | [clipping safely](/dog-haircuts-and-trimming/) |
| Bumps, scabs or sores after grooming | Can follow skin irritation or a nick, but can also be a skin infection **[S4]** | Stop clipping or brushing that area | **Always.** Promptly if they're spreading, painful, or your dog seems unwell | Vet first |
| Head shaking or ear scratching | Water or loose hair in the ear **[S2]** | Keep water out of the ears; dry the outer ear | It continues, or there's redness, discharge, smell, pain or a swollen ear flap **[S3][S13]** | [cleaning ears safely](/cleaning-dog-ears/) |
| Smell soon after a bath | A coat, folds or mats left damp **[S8][S12][S14]** | Dry fully, especially folds and thick coats | The smell comes from the ears, mouth, rear end or skin, or keeps coming back | [rinsing and drying properly](/bathing-your-dog/) |
| Dry, flaky skin | Harsh products; shampoo not fully rinsed **[S7]** | Dog shampoo only; rinse thoroughly | Flakes stay, or come with itching, redness, hair loss or smell **[S7]** | [rinsing and drying properly](/bathing-your-dog/) |
| Tear staining | Usually face and eyelid shape **[S9]** | Keep the eye area clean and dry | Staining is new, or with squinting, redness, discharge or pawing at the eye **[S1][S9]** | [trimming around the eyes](/dog-haircuts-and-trimming/) |
| Coat not growing back after clipping | Slow regrowth after a close clip is recognized **[S10]** | Wait, and avoid close clipping in future | It hasn't started regrowing within about 3–4 months, or there are other skin or health changes **[S10]** | [grooming an older dog](/senior-dog-grooming/) |
| Cut, nick, burn or limping after grooming | Injury during grooming | Stop grooming | Any wound beyond a minor nick; bleeding that won't stop; burns; limping | See "If your dog was hurt during grooming" below |

---

## Itching, redness and bumps after grooming

**Itching after a bath:**
- **Leftover shampoo can irritate the skin,** which is why rinsing completely matters **[S1]**.
- **Use only products made for dogs** **[S1]**.
- **If the itch started after a new product,** stop using it and see whether the itch settles.

**Redness after clipping:**
- **Clipper blades can get hot during use** **[S11]**.
- **A damaged or broken blade can injure the skin** **[S11]**.
- **Holding the blade against the skin can irritate it,** which is why blades should be kept away from the skin **[S13]**.

If redness appears in the areas you clipped, it may be related to the clipping. Next time, check the blade and keep it off the skin. See [clipping safely](/dog-haircuts-and-trimming/).

**Scratching can make things worse:** a red patch can turn into a raw, oozing, painful sore if your dog keeps scratching, licking or chewing it **[S8]**.

*[See-a-vet callout]* **See your vet, promptly, if:**
- the skin becomes painful, broken, scabbed or oozing;
- bumps or sores appear and spread over the next day or so, especially along the back;
- your dog seems quiet, unwell or off their food.

Vets recognize a serious skin infection that can develop within a day of a bath or grooming. It causes painful bumps, sores and crusts, often along the back. Affected dogs can become lethargic and stop eating, and it needs prompt veterinary treatment **[S4][S5]**.

*[Ad slot: permitted only between this section and the next, never inside a callout]*

---

## Head shaking or ear scratching after grooming

Some dogs shake their heads after a bath or a groom, and grooming can irritate an ear that's already prone to problems **[S2]**:
- **Water:** water in the ear creates the moist conditions that can lead to infection, and a warm, wet, floppy ear covering the ear opening can keep it damp **[S2]**.
- **Loose hair:** hair clipped around the head can fall into the ear canal **[S2]**.

**What to change:** dry the outer ear after bathing **[S1]**, and keep water out of the ears during a bath. See [rinsing and drying properly](/bathing-your-dog/). How to clean the ear is covered in [cleaning ears safely](/cleaning-dog-ears/). Don't push anything into the ear canal.

*[See-a-vet callout]* **See your vet if:**
- **Ear signs:** you notice redness, swelling, discharge, a strong or yeasty smell, or pawing at the ears **[S1][S13]**;
- **Pain:** the ear is painful to touch;
- **Persistent shaking:** your dog keeps shaking or scratching after the ear has had time to dry;
- **Swollen ear flap:** the ear flap swells and feels soft or fluid-filled. Hard shaking or scratching can break a small blood vessel in the ear flap, and that needs a vet **[S3]**.

---

## A dog that still smells after a bath

**A smell soon after a bath often comes from moisture left behind:**
- **Thick coats:** a coat that stays wet holds moisture against the skin **[S8]**.
- **Skin folds:** dirt and bacteria in folds can cause irritation and infection, so dry them thoroughly **[S14]**.
- **Mats:** dense mats hold moisture against the skin, and infections can develop under them **[S12]**. See [brushing and mats](/brushing-your-dog/#dealing-with-mats).

**What to change:** dry your dog completely, including folds, ears and dense areas. See [rinsing and drying properly](/bathing-your-dog/).

*[See-a-vet callout]* **See your vet if:**
- the smell comes from one place rather than the whole coat, such as the ears **[S13]**, the mouth, or the rear end (especially with scooting or licking there) **[S13]**;
- the smell comes with greasy, flaky, red or itchy skin **[S7]**;
- the smell keeps coming back after your dog is fully dry.

A smell that bathing doesn't fix isn't a grooming problem. Don't try to mask it with more frequent baths or perfumed products.

---

## Dry or flaky skin

Dry, flaky skin has many possible causes, and bathing is only one of them **[S7]**. On the grooming side, the factors to check are **[S7]**:
- **harsh soaps** or products not made for dogs;
- **not rinsing thoroughly,** which can leave skin flaky.

**What to change:** use a shampoo made for dogs, and rinse until no product is left. See [rinsing and drying properly](/bathing-your-dog/). How often to bathe is covered in [the grooming schedule](/how-often-should-you-groom-your-dog/).

*[See-a-vet callout]* **Talk to your vet** even if you think bathing is the cause, so other causes can be ruled out **[S7]**. See your vet sooner if the flaking comes with itching, redness, hair loss, scabs, smell or greasy skin **[S7]**.

**Don't treat dry skin with oils, human moisturizers or supplements** unless your vet recommends them.

---

## Tear staining

Reddish-brown staining below the eyes is common in some dogs, especially light-coated ones:
- **What causes it:** it's usually caused by the shape of the eyelids and face sending tears onto the fur instead of down the tear duct **[S9]**.
- **Underlying eye problems:** most dogs with tear stains don't have one, but some do **[S9]**.

**What you can do:**
- **Wipe gently:** clean around the eyes, not in them, with a soft, damp cloth, and avoid rubbing across the eye **[S1]**.
- **Dry the area** afterward **[S9]**.
- **Keep the hair around the eyes short:** this helps. See [trimming around the eyes](/dog-haircuts-and-trimming/).
- **Ask your vet first** before putting any cleaning solution near your dog's eyes **[S9]**.

*[See-a-vet callout]* **See your vet if:**
- your dog has **new tear staining** they didn't have before **[S9]**;
- there's **squinting, redness, cloudy or colored discharge,** or your dog is **pawing at an eye** **[S1]**;
- your dog is squinting or keeping an eye closed **after a bath.** Shampoo in the eye can cause painful damage to the surface of the eye **[S12]**.

---

## Coat not growing back after clipping

After a close clip, the coat usually grows back within a few months **[S10]**. Sometimes it doesn't. A veterinary dermatology handbook describes the following **[S10]**:
- **3–4 months:** in otherwise healthy dogs, the coat generally starts regrowing within this time, and failure to regrow within it is considered abnormal.
- **Which dogs:** it can happen in any breed, but is seen more often in dogs with thick, plush coats.
- **How long:** some dogs take a year or more to regrow fully.

**Double coats:** shaving one can also leave the undercoat and topcoat growing back unevenly **[S6]**. See [should you shave a double-coated dog](/dog-coat-types/#should-you-shave-a-double-coated-dog).

*[See-a-vet callout]* **See your vet if:**
- the coat hasn't started growing back within about 3–4 months **[S10]**;
- there's new thinning or bald patches somewhere that wasn't clipped;
- there are skin changes or other health changes.

Other causes need to be ruled out, especially in middle-aged and older dogs **[S10]**. For older dogs, see [grooming an older dog](/senior-dog-grooming/).

---

## If your dog was hurt during grooming

*[Safety callout: "Stop and reassess"]* **Stop grooming straight away.** Don't try to finish the job. Keep your dog calm and somewhere safe, and look at the area without forcing your dog to let you handle it.

**What to do next:**
- **Nicked nail quick:** follow the steps in [if a nail bleeds](/trimming-dog-nails/). Call your vet if the bleeding doesn't stop.
- **Cuts, sores or other injuries to the skin:** contact your vet **[S1]**. A cut from scissors can need stitches. Vets regularly see injuries from mats cut out at home **[S12]**.
- **A burn from a dryer:** contact your vet. Dryers held too close to the skin can burn **[S13]**.
- **Limping, crying out, or not wanting to be touched somewhere** after grooming: contact your vet.

*[See-a-vet callout]* **Get veterinary help urgently, or go to an emergency vet if yours is closed, if your dog:**
- has bleeding that won't stop;
- has a deep or gaping wound;
- is having trouble breathing;
- collapses or seems very weak;
- is in severe pain.

**If it happened at a groomer:**
- **First:** get your dog checked by a vet.
- **Then:** ask the groomer what happened, and keep any vet notes and photos.
- **Raising a concern:** see [if something goes wrong at the groomer](/choosing-a-dog-groomer/).

**If your dog is now frightened of grooming,** see [if your dog resists grooming](/grooming-an-anxious-dog/). If the change is sudden and they also seem sore, see your vet first.

---

## Common questions

*[FAQ: Elementor Accordion with FAQ Schema ON; question titles set to H3. Rank Math FAQ schema OFF.]*

### My dog has scabs after a haircut. Is that normal?

Scabs mean the skin was broken or irritated, so they're worth a vet check rather than waiting:
- **Possible causes:** a hot or damaged blade, a nick, or scratching at irritated skin **[S8][S11]**.
- **Infection:** less often, scabs and sores after grooming are a sign of a skin infection that needs prompt treatment **[S4]**.
- **See your vet the same day** if the scabs are spreading, painful, or your dog seems unwell.

### Can I put coconut oil on my dog's dry skin?

Ask your vet before putting anything on your dog's skin. Dry, flaky skin has many possible causes, and the right approach depends on the cause **[S7]**.

### Can I treat a hot spot at home?

No, see your vet. A hot spot is a painful, inflamed, often oozing patch that can spread quickly. Waiting for it to clear up on its own tends to make it worse, and your vet will need to find what's causing the itching **[S8]**.

---

*["Where to go next": 4 cards]*

| Card title | Link | Reason shown on card |
|---|---|---|
| Bathing your dog | `/bathing-your-dog/` | "Rinsing and drying properly." |
| Trimming and haircuts at home | `/dog-haircuts-and-trimming/` | "Clipping safely." |
| Cleaning your dog's ears | `/cleaning-dog-ears/` | "If the head shaking is ear-related." |
| Choosing a dog groomer | `/choosing-a-dog-groomer/` | "If something went wrong at the groomer." |

*[Disclaimer line]* This page is general information about grooming, not veterinary advice, and it can't diagnose your dog. If your dog seems in pain, unwell, or has a wound, contact your vet. [How we write, source and fund our guides](/editorial-policy/).

*[Sources list]*
**Sources**
1. **[S1]** AKC Staff, American Kennel Club: "How to Groom Your Dog at Home: Easy Tips for Everyday Care", updated September 2, 2026. https://www.akc.org/expert-advice/health/how-to-groom-a-dog/
2. **[S2]** AKC Staff, American Kennel Club: "Is There A Connection Between Dog Grooming and Ear Infections?", updated January 22, 2018. https://www.akc.org/expert-advice/health/can-grooming-cause-ear-infections/
3. **[S3]** Nick Roman, DVM, MPH (peer reviewed by Laurie Hess, DVM, DABVP), MSD Veterinary Manual, Pet Owner Version: "Disorders of the Outer Ear in Dogs", last updated April 2026. https://www.msdvetmanual.com/dog-owners/ear-disorders-of-dogs/disorders-of-the-outer-ear-in-dogs
4. **[S4]** Tham HL, Jacob ME, Bizikova P: "Molecular confirmation of shampoo as the putative source of *Pseudomonas aeruginosa*-induced postgrooming furunculosis in a dog", *Veterinary Dermatology* 27(4):320–e80 (2016). PMID 27237982. https://pubmed.ncbi.nlm.nih.gov/27237982/
5. **[S5]** Pipe-Martin HN, et al.: "Sepsis and multi-organ dysfunction associated with postgrooming furunculosis in a dog", *Veterinary Dermatology* 27(3):198–e49 (2016). PMID 27017964. https://pubmed.ncbi.nlm.nih.gov/27017964/
6. **[S6]** Elaine Waldorf Gewirtz, American Kennel Club: "What Is a Double-Coated Dog? Coat Types, Grooming, and Care", updated September 14, 2026. https://www.akc.org/expert-advice/health/double-coated-dog-breeds/
7. **[S7]** Anna Burke, American Kennel Club: "Dry Skin on Dogs: Signs, Symptoms, Treatments", updated October 23, 2025. https://www.akc.org/expert-advice/health/dry-skin-on-dogs/
8. **[S8]** Elizabeth Racine, DVM, American Kennel Club: "Hot Spot Treatments and Prevention on Dogs", updated October 28, 2025. https://www.akc.org/expert-advice/health/hot-spots-on-dogs/
9. **[S9]** Rhiannon Koehler, DVM, PetMD: "Dog Tear Stains: Causes, Treatment, and Prevention", April 11, 2023. https://www.petmd.com/dog/general-health/dog-tear-stains
10. **[S10]** Sheila M. F. Torres, DVM, MS, PhD, DACVD (ed.): "1.13 Canine Post-clipping Alopecia", *Small and Large Animal Dermatology Handbook, Vol. 2*, University of Minnesota (2025). https://open.lib.umn.edu/animaldermatology2/chapter/canine-post-clipping-alopecia/
11. **[S11]** Andis Company: Model RACA clipper "Use and Care" instructions (Form #60222). https://image.chewy.com/is/content/catalog/69074_UseAndCareInstructions._V1503496534_.pdf
12. **[S12]** Ann Hohenhaus, DVM, The Animal Medical Center: "Can Bath Time be Dangerous for Pets?", November 30, 2016. https://www.amcny.org/blog/2016/11/30/can-bath-time-dangerous-pets/
13. **[S13]** Humane World for Animals: "How to groom your dog at home" (undated). https://www.humaneworld.org/en/resources/how-groom-your-dog-home
14. **[S14]** ASPCA: "At-Home Pet Grooming: Top Tips and Recommendations", April 9, 2020. https://www.aspca.org/news/home-pet-grooming-top-tips-and-recommendations

### Page outline

- **H1:** Problems after grooming: what they mean and what to do
- **H2:** Is it a grooming problem or a vet problem?
- **H2:** Symptoms at a glance
- **H2:** Itching, redness and bumps after grooming
- **H2:** Head shaking or ear scratching after grooming
- **H2:** A dog that still smells after a bath
- **H2:** Dry or flaky skin
- **H2:** Tear staining
- **H2:** Coat not growing back after clipping
- **H2:** If your dog was hurt during grooming
- **H2:** Common questions
  - H3 (FAQ): My dog has scabs after a haircut. Is that normal? · Can I put coconut oil on my dog's dry skin? · Can I treat a hot spot at home?

---

## D. Evidence Record

**How the sources were checked (2026-10-05):**
- **S2, S3, S7, S8, S9, S10:** fetched with curl and checked against raw HTML (canonical and H1 confirmed).
- **S4, S5:** PubMed abstracts via NCBI E-utilities.
- **S1, S6, S11–S14:** already checked against raw text in GD-04 to GD-08, and re-grepped for the passages used here.

### Sources

| ID | Source | Authority | Date | Limitations |
|---|---|---|---|---|
| S1 | AKC: How to Groom Your Dog at Home | Breed registry | updated 2026-09-02 | Affiliate notice |
| S2 | AKC: "Is There A Connection Between Dog Grooming and Ear Infections?" | Breed registry, Q&A column (AKC Staff) | updated 2018-01-22 | **Old.** Its home-medication and cotton-ball advice is **rejected** (E). |
| S3 | MSD Veterinary Manual, Pet Owner: Disorders of the Outer Ear in Dogs | **Veterinary reference** (DVM author, peer reviewed by a DABVP) | 2026-04 | — |
| S4 | Tham et al. 2016, *Vet Dermatol* (NC State) | **Peer-reviewed case report** | 2016 | A single case; abstract only |
| S5 | Pipe-Martin et al. 2016, *Vet Dermatol* (LSU) | **Peer-reviewed case report** | 2016 | A single, severe case; abstract only |
| S6 | AKC: Double-coated dogs | Breed registry; quotes groomers | updated 2026-09-14 | Groomer opinion |
| S7 | AKC: Dry Skin on Dogs (Anna Burke) | Breed registry | updated 2025-10-23 | Affiliate notice. Non-veterinary author. Includes a disease list (**not used**). |
| S8 | AKC: Hot Spots (Elizabeth Racine, DVM) | Breed registry, **DVM author** | updated 2025-10-28 | Affiliate notice. Treatment list and supplements **not used**. |
| S9 | PetMD: Dog Tear Stains (Rhiannon Koehler, DVM) | Pet-health publisher (Chewy-owned), **DVM author** | 2023-04-11 | **Commercial**: lists products and supplements (**all rejected**). Only general facts are used. |
| S10 | UMN *Small and Large Animal Dermatology Handbook* Vol. 2, §1.13 | **Veterinary teaching text** (DACVD editor; University of Minnesota; CC BY 4.0) | 2025 | Clinician-facing |
| S11 | Andis RACA Use and Care | Manufacturer | undated | One brand |
| S12 | AMC: "Can Bath Time be Dangerous for Pets?" | Veterinary hospital (DVM) | 2016-11-30 | Age |
| S13 | Humane World for Animals: How to groom your dog at home | Animal welfare | undated | Undated |
| S14 | ASPCA: At-Home Pet Grooming tips | Animal welfare | 2020-04-09 | Age; its peroxide ear advice is excluded (GD-08) |

### Claims

| # | Claim | Source | Exact supporting passage | Final wording / narrowing |
|---|---|---|---|---|
| 1 | Leftover shampoo can irritate the skin | S1 | "rinse completely to avoid residual shampoo irritating the skin" | As published |
| 2 | Use only products made for dogs | S1 | "Use only products formulated specifically for dogs." | As published |
| 3 | Check the skin for injuries; contact a vet if you find injuries or unusual skin conditions | S1 | "Monitor the skin for cuts, sores, lacerations, or wounds during grooming sessions. Contact your veterinarian if you discover injuries or unusual skin conditions." | Basis for "cuts, sores or other injuries → vet" |
| 4 | Clipper blades get hot; a damaged blade can injure the skin | S11 | "Blades may become hot during use." / "Do not use this appliance with a damaged or broken blade or comb, as injury to the skin may occur." | "may be related to" (spec §I reduction rule) |
| 5 | Keep blades away from the skin | S13 (GD-06 S1) | As recorded in GD-06 claim table | "can irritate it" is the reason given in GD-06's framing. Narrowed to "may be related". |
| 6 | Itching can lead to self-trauma that becomes a painful, oozing hot spot; moisture held against the skin by the coat after bathing is a risk factor; contact irritants are a cause of itching | S8 | "often triggered by scratching, licking, or chewing… self-perpetuating cycle"; "Moisture trapped in the coat from swimming or bathing"; "Contact irritants"; "Dogs that are frequently wet from… bathing… are more prone… due to the excess moisture held against the skin by their coats" | "Frequently wet" is **not** turned into frequency advice |
| 7 | Hot spot → see your vet first; waiting makes it worse | S8 | "If you suspect your dog may have a hot spot, the first step is to consult your veterinarian. While it may be tempting to wait… delaying treatment will only make the problem worse." | FAQ 3. **The treatment list is not used.** |
| 8 | A serious skin infection can follow a bath: painful papules, pustules, ulcers and crusts on the back and sides, within 24 hours, with lethargy, not eating and pain | S4 | "An acute onset furunculosis due to Pseudomonas aeruginosa following grooming is a well recognized entity… lethargy, anorexia, pain and rapidly progressing skin lesions… localized to the dorsal and lateral aspects of the thorax and gluteal region, which developed within 24 h after a bath." | "Vets recognize… within a day of a bath… painful bumps, sores and crusts, often along the back… lethargic and stop eating". **The disease and organism are not named on the page** (no diagnosis). The antibiotic named in S4 is **not used**. |
| 9 | It can become life-threatening | S5 | "Postgrooming furunculosis can progress to sepsis and multiple organ dysfunction in the dog and can lead to death." Also: "Systemic clinical signs are common but are usually mild." | Narrowed to "needs prompt veterinary treatment". **"Can lead to death" is not stated** (alarmist for a router page, and S5 notes it's usually mild). "Promptly" is justified by the possible severity. |
| 10 | Contaminated or diluted shampoo can carry bacteria | S4; Perry et al. 2022 (PMID 35635240) | S4: "a link between Pseudomonas-contaminated shampoo and… postgrooming furunculosis". Perry: "Diluted products were contaminated significantly more often" | **Not on the page** (product-hygiene detail; GD-04 owns products). Logged as an upstream item for GD-04 (E). |
| 11 | Water and hair in the ear during grooming can irritate a prone ear; a warm, wet, floppy ear holds moisture | S2 | "Grooming, per se, doesn't cause his ear infections, but if he is prone to them there are several things that might be happening at the salon to irritate…"; "Water in the ear can create the moist environment…"; "that warm floppy wet ear covering the ear opening may create enough moisture…"; "hair could be falling down into the ear canal" | "can irritate an ear that's already prone to problems" |
| 12 | Dry the ears after bathing | S1 | "Moisture trapped in the ears after swimming or bathing can contribute to ear problems. Be sure to dry your dog's ears thoroughly after they become wet." | Outer ear only. Method → GD-08. |
| 13 | Ear warning signs | S1, S13 | S1: "Severe redness, swelling, debris, discharge, or a strong yeasty odor…"; S13: "keep an eye out for redness, discharge, odor or pawing at the ears and consult a veterinarian" | Consistent with the GD-08 vet callout |
| 14 | Head shaking or scratching can rupture a blood vessel in the ear flap (fluid-filled swelling) → vet | S3 | "This most commonly happens when a pet shakes its head or scratches its ears, which can rupture a blood vessel… It may feel soft and fluid-filled… Treatment (usually surgery by a vet)" | "needs a vet". **The condition isn't named on the page; no treatment described.** |
| 15 | Skin folds: dirt and bacteria → irritation and infection; dry folds thoroughly | S14 | "To prevent dirt and bacteria from causing irritation and infection, clean the folds with damp cotton. Always thoroughly dry the areas between the folds." | Smell section: **marker S14** |
| 16 | Dense mats hold moisture → infections | S12 | "Really dense mats hold moisture against the skin. The combination of tension and moisture can result in nasty infections underneath the mat" | Smell section: **marker S12** |
| 17 | Rear-end odor or scooting → vet | S13 | "If you notice your dog scooting… chewing at their glands or emitting a foul odor… seek advice from your veterinarian." | **S13's pumpkin and Metamucil advice is REJECTED** (home remedy) |
| 18 | Dry skin has many causes; harsh soaps, improper bathing and not rinsing can cause flakiness; still consult a vet; associated signs | S7 | "Dry skin is a symptom associated with a wide range of conditions…"; "improper or excessive bathing, harsh soaps…"; "If you don't rinse your dog thoroughly during a bath, their skin can also become flaky."; "it's still a good idea to consult your veterinarian in order to rule out more serious conditions"; symptoms list including "Itchiness… Hair loss… Odor… Increased oiliness… Scabs" | **"Excessive bathing" and "reducing the frequency of baths" are NOT used** (frequency → GD-02). **Disease names not used.** |
| 19 | Tear stains: usually eyelid structure; most dogs have no underlying eye problem; new stains → vet; dry after cleaning; ask a vet before any solution | S9 | "typically caused by variations in the eyelid structure…"; "most dogs with tear stains don't have an underlying eye problem… contact your veterinarian if your pet did not previously have tear stains and is now developing them"; "always dry the face"; "Speak with your veterinarian before putting any new solution in your pet's eyes" | "near your dog's eyes" (narrower than S9's "in"). **S9's product list, boric-acid contact-lens solution, supplements and "twice every day" are REJECTED.** |
| 20 | Eye signs; wipe gently, don't rub across the eye | S1 | "Watch for redness, excessive discharge, squinting… Use a soft washcloth… Avoid rubbing directly across the eye" | As published |
| 21 | Shampoo in the eye can cause irritation or a painful corneal ulcer; squinting after a bath | S12 | "shampoo can easily splash into their eyes causing irritation, or worse, a painful ulcer in the clear part of their eye" | **Vet referral only.** S12's saline rinse and "more than an hour" threshold are **not used**, matching the GD-04 C-22 decision. |
| 22 | Post-clip regrowth: generally within 3–4 months, after which failure is abnormal; any breed, more often plush coats; can take 12–24 months; rule out other causes in middle-aged and older dogs | S10 | "The hair coat generally regrows after clipping within 3 to 4 months; therefore, failure to regrow hairs within this time period should be considered abnormal."; "may affect any breed but… more frequently in plush-coated"; "complete hair regrowth will only be noted after 12 to 24 months"; "rule out hypothyroidism, hyperadrenocorticism, or sex hormone-related alopecia… in middle age to older dogs" | "a year or more"; "other causes need to be ruled out". **No disease names. The melatonin and microneedling treatments are REJECTED.** "Within about 3–4 months" is the only time threshold on the page, and it is directly sourced (see the Monitor / Stop / Vet decisions). |
| 23 | Double coats can regrow unevenly after shaving | S6 | "the undercoat may outpace the topcoat as it regrows, creating an uneven coat" | Pointer to GD-03 |
| 24 | Scissor cuts on mats → stitches | S12 | "Every veterinarian can recite a list of patients requiring suturing after a do-it-yourself mat removal." | As published |
| 25 | Dryers can burn | S13 | "holding it away from your dog's skin to prevent burns" | Burn → vet |
| 26 | Skin problems are a common reason for vet visits; scratching, chewing and licking are signs; contact a vet | S14 | "When a skin problem occurs, your pet may respond with excessive scratching, chewing and/or licking… Skin problems are one of the most common reasons pet parents seek veterinary care." | As published |
| 27 | Emergency list (bleeding that won't stop, deep wound, breathing difficulty, collapse or severe weakness, severe pain) | — | Recognition-level referral. Standard emergency categories named in the prompt's §20. **No numeric thresholds.** | (E-1) No single source was checked for this list. Each item is a self-evident emergency, worded as "get help", not as a threshold. |

### Post-Grooming Problem Decisions
- **What qualifies:** a sign the owner notices during or after a grooming task, where the grooming may be a contributing factor.
- **Ownership by symptom:** GD-14 owns the symptom. The cause (a disease) belongs to the vet, and the technique belongs to GD-04 to GD-09.
- **The nine symptom rows** match the spec's §D question list exactly. No extra symptoms were added: no nail-ridge problems, no dental bleeding (see the Bath / Ear / Dental / Nail Boundaries).

### Monitor / Stop / Vet Decisions

| Level | Criteria | Evidence |
|---|---|---|
| **Monitor and change technique** | Mild **and** soon after a task **and** a visible likely cause **and** the dog is otherwise well **and** improving | Spec §B triage rule. Every causal factor is cited (claims 1, 4–6, 11, 12, 15, 16, 18). **No time window is given for "monitor"** (none is sourced). |
| **Stop** | Any sign during a task; any injury | Prompt §4; S1 claim 3 |
| **Vet** | Pain, spreading, broken skin, swelling, discharge, persistent problems | S1 and S13 (ear signs); S3 (ear-flap swelling); S7 (dry skin, rule out); S8 (hot spot); S9 (new tear stains); S10 (regrowth) |
| **Prompt / urgent vet** | Skin lesions after a bath plus lethargy, not eating or pain; a severe injury | S4, S5 |

**Only sourced time threshold:** 3–4 months for regrowth (S10, claim 22). **Rejected thresholds:**
- AMC's "more than an hour" for squinting (consistent with GD-04);
- TVP's "24–48 hours" for post-bath skin lesions (the page couldn't be fetched; "within a day" follows S4's "within 24 h");
- S9's "twice every day".

### Skin / Coat Decisions
- **Itching:** product residue (S1); new products (editorial "stop using it", which is a removal, not a treatment).
- **Redness:** blade heat or damage (S11); blade too close (S13).
- **Bumps and scabs:** always a vet check (S1, S4).
- **Dry skin:** rinse and product (S7), plus a vet to rule out other causes.
- **Coat:** regrowth timing (S10).
- **No diagnoses:** none named in the page text. Dermatitis, allergy, parasites, Cushing's disease, hypothyroidism and hematoma appear only in this record. Furunculosis, Pseudomonas and post-clipping alopecia appear on the page only inside the verbatim titles of S4, S5 and S10 in the Sources list (citation accuracy), never as a claim about the reader's dog.

### Injury / Bleeding Decisions
- **Nails:** GD-07 owns the quick method. GD-14 only points to it and repeats GD-07's own vet trigger ("bleeding doesn't stop").
- **Skin wounds:** vet (S1). Scissor cuts can need stitches (S12).
- **Burns:** vet (S13).
- **Urgent list:** E-1.
- **No wound care, bandaging or pressure-hold instructions.**

### Bath / Ear / Dental / Nail Boundaries

| Owner | What GD-14 says | What GD-14 doesn't do |
|---|---|---|
| GD-04 | Names the factor (residue, damp coat or folds) | Give rinse or dry steps, shampoo choice, or dryer settings |
| GD-07 | Points to "if a nail bleeds" | Repeat styptic steps |
| GD-08 | Ear vet signs (consistent with the GD-08 callout); "don't push anything into the ear canal" | Give a cleaning method; mention cotton balls; S2's "keep medication on hand" (**rejected**) |
| GD-09 | Bad breath after a bath is a vet sign (the "mouth" smell bullet) | Add a dental section (the spec doesn't assign dental symptoms to GD-14) |

### Behavior Boundary
- **Fearful after a bad groom** → GD-12 link.
- **Sudden change plus soreness** → vet first, consistent with the GD-12 and GD-13 AVSAB-based rule.
- **No training steps.**

### Senior Boundary
- **Regrowth:** one pointer to GD-13.
- **Middle-aged and older dogs:** "other causes need to be ruled out" (S10).
- **No senior handling content.**

### Frequency Boundary
- **Not on the page:** S7's "excessive bathing / reduce the frequency of baths", S8's "frequently wet", and S9's "twice every day". None of them is used as a fix.
- **Excluded on purpose:** "Don't try to mask it with more frequent baths". This is a non-recommendation, not a frequency figure.
- **One link to GD-02** in the dry-skin section.

---

## E. Content Decisions

| Type | Item |
|---|---|
| **Included** | Triage rule; index table; 7 symptom sections; injury first response; 3 referral FAQs |
| **Excluded medical conditions** | Names of the infection (postgrooming furunculosis, Pseudomonas), ear-flap swelling (aural hematoma), contact dermatitis, allergies, parasites, mange, ringworm, Cushing's, hypothyroidism, sex-hormone alopecia, conjunctivitis, entropion, corneal ulcer, anal sac disease. All are **described in plain words or referred, never named**. |
| **Rejected home remedies** | Coconut oil (FAQ → vet); aloe vera (S8); fish oil and supplements (S8, S9); humidifiers and moisturizers (S7); pumpkin and Metamucil (S13); boric-acid contact-lens solution, baby shampoo and tear-stain products (S9); saline eye rinse (S12, as in GD-04); melatonin (S10); keeping vet medication "on hand" (S2); cotton balls in the ears (S2: conflicts with GD-08); styptic steps (GD-07 owns them) |
| **Rejected diagnoses** | All symptom → disease differentials (AKC dry-skin and hot-spot cause lists; web-search tear-stain lists) |
| **Rejected legacy / LMArena** | Draft "Head shaking after a groom" (from GD-08) and "smells two days after a bath" (from GD-04) are **absorbed and rebuilt from S1, S2, S3, S8, S12, S14** (spec V-5). The draft coconut-oil and hot-spot home-remedy FAQ answers are **removed** and replaced with referrals (spec §J). No legacy recovery times, "this is normal" claims, or numeric emergency thresholds were kept. |
| **Narrowed** | #8–9 (unnamed; "prompt" instead of "can lead to death"); #18 (no frequency); #19 ("near" not "in"; no products); #22 (no disease names) |
| **Source conflicts** | (1) **S7** ("see your vet as soon as you notice dry skin") vs the spec's triage idea of grooming-caused mild signs. **Resolved toward S7:** for dry skin, the page says talk to your vet even if bathing seems the cause. (2) **S2** ("cotton balls in his ears") vs GD-08 ("never push anything into the ear", S3/S4 there). **Resolved toward GD-08:** cotton balls are omitted. (3) **GD-08 S1** ("shaking their head more than usual → probably time for an ear cleaning") vs post-groom head shaking. **Resolved:** after a groom, the page says dry the outer ear and see a vet if it continues, and doesn't prompt a cleaning (GD-08 had already narrowed that line). |
| **Upstream note (not applied)** | **GD-04:** consider adding "don't store shampoo after diluting it" (Perry et al. 2022; S4). This is a product-hygiene point owned by GD-04. Log it for the GD-04 review. |

---

## F. Image Record

| Asset ID | Source | Visible content (viewed directly, 2026-10-05) | Placement | Alt text | Result |
|---|---|---|---|---|---|
| `lead-problems` (Pexels 19145881) | Goochie Poochie Grooming, Pexels. https://www.pexels.com/photo/washing-dog-at-saloon-19145881/ | A soaked, lathered Shih Tzu-type dog standing in a steel salon tub with a blue tether loop around its neck, looking wary toward the camera. A gloved groomer's arm is washing it. Shampoo bottles are in the background. | — | — | **FAIL for this page.** (1) It shows a bath in progress, not a dog being checked after grooming: the registry's "being checked over" alt is inaccurate. (2) A tethered, wary dog on a page that includes "hurt at the groomer" can read as implying harm at a salon. (3) The spec allows a lead image only if it shows no condition and no distress, and this is borderline. Not a medical image; not reused elsewhere as a failure. |
| Symptom photos | — | — | — | — | **Not used by design** (spec §L: diagnostic imagery implies diagnosis) |
| Previously rejected assets | — | `fur-texture`, `lead-nails`, `lead-ears`, `lead-teeth`, `fig-bath-tub` | — | — | Not considered |

**Result:** the page publishes **without a lead image** (the spec says it's optional). There is no placeholder.

---

## G. SEO / Schema / Links

| Field | Value |
|---|---|
| SEO title | Dog Grooming Problems: What Symptoms After Grooming Mean (**56** characters) |
| Meta description | Itching, redness, head shaking or a smell after grooming? See what may be grooming-related, what to change, and the signs that mean your dog should see a vet. (**158** characters) |
| Meta note | The spec meta contains British "odour" and is over 160 characters. It has been rewritten in US English with the same content. |
| Canonical | `https://grooming-dogs.com/dog-grooming-problems/` |
| Focus keyword (Rank Math) | dog grooming problems |
| Secondary terminology | dog itchy after grooming; dog shaking head after grooming; dog smells after bath; bumps after dog haircut |
| H1 | Problems after grooming: what they mean and what to do. The full outline is in §C. |
| Schema | Rank Math: Article (author = Organization "Grooming Dogs"). **FAQPage: Elementor Accordion "FAQ Schema" only**; Rank Math FAQ off. No Product, Review or MedicalCondition schema. |
| Breadcrumb | Home › Grooming problems |
| Robots | index, follow |

### Internal links

| # | Section | Anchor | Target | URL | Ownership reason |
|---|---|---|---|---|---|
| 1 | Table; itching; head shaking; smell; dry skin; Next card | rinsing and drying properly | GD-04 | `/bathing-your-dog/` | Bath technique |
| 2 | Table; redness; tear staining; Next card | clipping safely / trimming around the eyes | GD-06 | `/dog-haircuts-and-trimming/` | Clipping and eye-area trim |
| 3 | Table; head shaking; Next card | cleaning ears safely | GD-08 | `/cleaning-dog-ears/` | Ear care |
| 4 | Smell | brushing and mats | GD-05 | `/brushing-your-dog/#dealing-with-mats` | Mats |
| 5 | Hurt during grooming | if a nail bleeds | GD-07 | `/trimming-dog-nails/` | Quick bleed |
| 6 | Hurt during grooming; Next card | if something goes wrong at the groomer | GD-15 | `/choosing-a-dog-groomer/` | Groomer complaint |
| 7 | Table; coat regrowth | grooming an older dog | GD-13 | `/senior-dog-grooming/` | Senior coat changes |
| 8 | Coat regrowth | should you shave a double-coated dog | GD-03 | `/dog-coat-types/#should-you-shave-a-double-coated-dog` | Shaving (anchor per GD-03 §H) |
| 9 | Dry skin | the grooming schedule | GD-02 | `/how-often-should-you-groom-your-dog/` | Frequency |
| 10 | Hurt during grooming | if your dog resists grooming | GD-12 | `/grooming-an-anxious-dog/` | Fear |
| 11 | Disclaimer | How we write, source and fund our guides | GD-19 | `/editorial-policy/` | Trust |

**Checks:**
- **Spec coverage:** all seven spec outgoing targets are present (GD-04, 05, 06, 07, 08, 13, 15).
- **Additions, each a pointer to an owner page:** GD-02, GD-03, GD-12 and GD-19.
- **GD-07 link:** no anchor is used, because GD-07's "If you cut the quick" H2 has no CSS ID in its build record. The link goes to the page.

**Launch dependency:** GD-15 and GD-19 aren't produced yet.

---

## H. Elementor Build Record (Elementor Free only)

**Widgets used:** Heading, Text Editor, Icon List, Icon Box, Accordion (FAQ Schema toggle), Shortcode. **No Image widget** (no lead image). **No Pro-only widgets or features.**

**Saved templates** (copied onto the page):
- Intro
- Short-answer box
- See-a-vet callout
- Safety callout
- "Where to go next" cards
- Disclaimer
- Sources list

There is **no "What you'll need" box** (editorial only). **Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Intro | Shortcode (breadcrumb) · **H1** · Text Editor (intent, byline, scope note) |
| 2 | Short answer | Saved template (Icon List, 4) |
| 3 | Triage | **H2** · Text Editor + Icon List (4) · See-a-vet callout (Icon List, 6) · Text Editor ("Don't treat it yourself") |
| 4 | Index | **H2** (CSS ID `symptoms-at-a-glance`) · Text Editor (HTML table, 5 columns × 9 rows, in a scroll wrapper) |
| 5 | Itching | **H2** (CSS ID `itching-redness-and-bumps`) · Text Editor ×3 · See-a-vet callout + Text Editor |
| 6 | Ad slot (optional) | Shortcode/HTML, only between symptom sections, **never inside a callout**. The spec's PC-07 recommends none, so the default is **off**. |
| 7 | Head shaking | **H2** (CSS ID `head-shaking`) · Text Editor + Icon List (2) · Text Editor · See-a-vet callout |
| 8 | Smell | **H2** (CSS ID `smell-after-a-bath`) · Text Editor + Icon List (3) · Text Editor · See-a-vet callout · Text Editor |
| 9 | Dry skin | **H2** (CSS ID `dry-flaky-skin`) · Text Editor + Icon List · Text Editor · See-a-vet callout · Text Editor |
| 10 | Tear staining | **H2** (CSS ID `tear-staining`) · Text Editor · Icon List (4) · See-a-vet callout |
| 11 | Regrowth | **H2** (CSS ID `coat-not-growing-back`) · Text Editor + Icon List (3) · Text Editor · See-a-vet callout · Text Editor |
| 12 | Hurt | **H2** (CSS ID `hurt-during-grooming`) · Safety callout · Icon List (4) · See-a-vet callout (urgent, Icon List, 5) · Text Editor ×2 |
| 13 | FAQ | **H2** · Accordion (3 items; title tag **H3**; FAQ Schema ON) |
| 14 | Next / Disclaimer / Sources | Saved templates. Anchors `#s1`–`#s14`. |

**CSS IDs:** symptom H2s get CSS IDs so the table and other pages can deep-link later. Upstream pages currently link to the page root, which is valid.

**Mobile:** single column. The table scrolls horizontally inside its wrapper (no page-level horizontal scroll). Next cards go to 1 column.

**Confirmed:** no Elementor Pro widget or feature is required.

---

## I. Exceptions

| # | Issue | Impact | Blocking? | Future action |
|---|---|---|---|---|
| E-1 | The urgent-help list (bleeding that won't stop, deep wound, breathing difficulty, collapse, severe pain) isn't backed by a single checked source. Each item is a self-evident emergency at recognition level, with no thresholds. | Evidence | **Non-blocking** | Add an emergency-signs source (for example the MSD Pet Owner emergency chapter) at the first review |
| I-1 | No lead image: `lead-problems` failed (F) | Image (optional per spec) | **Non-blocking** | Source and view a neutral photo of an owner calmly checking a dog's coat or skin at home |
| I-2 | No expert (veterinary) reviewer. The spec recommends one: this is the site's highest trust-risk page. | Trust | **Non-blocking** | Add a real veterinarian reviewer per architecture §H if one is secured. **Priority page for review.** |
| I-3 | Source limitations: S2 is 2018; S9 is a commercial publisher (only general facts used); S4 and S5 are single-case reports (abstracts); Today's Veterinary Practice couldn't be fetched | Evidence | **Non-blocking** | Replace S2 and S9 with a veterinary-school source at the annual review |
| I-4 | **Registry correction:** `lead-problems` alt says "being checked over", but the image shows a bath in progress | Data hygiene | **Non-blocking** | Fix the media library alt, or drop the asset |
| I-5 | Launch dependency: GD-15 and GD-19 aren't produced yet | Launch timing | **Non-blocking** | Launch QA must confirm the URLs resolve |

---

## Anti-drift checklist

- [x] Canonical title and URL verified (`/dog-grooming-problems/`); spec structure (9 H2s in order, no content H3s, 3 FAQ H3s); one H1
- [x] GD-14 owns post-grooming symptoms and escalation (spec §D list exactly)
- [x] Not a disease encyclopedia; no diagnosis; no condition names on the page
- [x] No medication, supplement or CBD advice; no home-remedy section; no treatment instructions
- [x] No arbitrary recovery times or emergency thresholds (the only time figure, 3–4 months for regrowth, is directly sourced)
- [x] Frequency stays with GD-02; technique stays with GD-04 to GD-09; tools with GD-10; fear with GD-12; senior adaptation with GD-13
- [x] Each included problem belongs here because of its post-grooming context
- [x] Medical claims checked against raw text (27 rows); 3 source conflicts documented and resolved
- [x] Legacy and LMArena claims verified or rejected
- [x] Image viewed and rejected; no graphic or medical imagery; no placeholder
- [x] No product rankings; no affiliate links; no Product or Review schema
- [x] SEO title 56 (≤60); meta description 158 (≤160); FAQ schema from the Elementor Accordion only; Elementor Free only; canonical internal links only
- [x] Saved under `PRODUCTION/`

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**
