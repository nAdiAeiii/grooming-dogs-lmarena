# GD-16 — Production Record: Dog grooming cost

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-16
**Upstream records:** `PRODUCTION/GD-01` … `GD-15`
**Architecture:** final validated architecture
**Produced:** 2026-10-05

**Market gate:** first pass blocked (no market locked). **Unblocked the same day** by the owner decision **United States / USD** (§B). All prices were collected **2026-10-05**.

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-16 |
| Canonical title | Dog grooming cost |
| Canonical URL | `https://grooming-dogs.com/dog-grooming-cost/` |
| Page type | WordPress Page (IA parent: GD-15; URL stays top level as locked) |
| Funnel role | Decision support (price) |
| Byline | Grooming Dogs. Expert review not required. |
| Commercial class | EDITORIAL + DECISION SUPPORT. **No affiliate links.** Ads only between sections, never inside or beside the price tables. |
| **Target market** | **United States. Currency: USD.** |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

---

## B. Market Gate

| Item | Record |
|---|---|
| **Decision** | **Target market: United States. Currency: USD.** |
| **Source** | Explicit owner instruction in this production session, 2026-10-05: "Owner decision for GD-16: Target market: United States. Currency: USD. Proceed with GD-16 production using the United States as the explicit target market." |
| **Why it's authoritative** | Architecture OD-G and V-2 leave the market to the owner at price verification. This is that decision, made by the owner, not inferred by production. It **resolves V-2's market requirement and audit item OD-10 / A-04** (the USD assumption is now an owner decision, not an assumption). |
| **History** | The first GD-16 pass (same date) was **BLOCKED — UPSTREAM DEPENDENCY** because no market was locked. No prices were collected before this decision. |
| **Remaining market limitations** | (1) The US is one market with large regional price differences; the sample covers 13 provider locations in 12 metro areas or regions, not every state (§F). (2) Sales tax varies by state and city and is **not calculated**; it's recorded only where a provider states it. (3) Tipping norms are **not covered here.** They belong to GD-15 (PC-10) and need their own sourced pass (§H, M-5). |
| **Downstream** | **GD-15 requires a separate US-specific pass** for tipping, licensing/permits and the complaint route (PC-10). Not done here (§H). Recorded in GD-15 I-1. |

---

## C. Ownership

**Primary intent:** how much will professional grooming cost me in the US, and why do quotes differ?

**Owned by GD-16 (spec §D):**
- how much dog grooming costs
- prices by size or coat
- mobile grooming cost
- why grooming is expensive
- why was I charged more than quoted
- is mobile grooming worth the extra
- is it cheaper to groom at home
- how much to groom a doodle

**Delegated:**

| Topic | Owner | On GD-16 |
|---|---|---|
| How often to book | **GD-02** | Its interval is used in the budget method. **The interval isn't restated as advice**; the worked example cites GD-02's range. |
| Choosing and evaluating a groomer; questions; warning signs; tipping | **GD-15** | Link only |
| Preventing mats | **GD-05** | Link |
| Home maintenance | GD-01 | Link |
| Tools and their cost | GD-10 | Link. No tool prices. |
| Trimming technique | GD-06 | Not needed |
| Senior adaptations | GD-13 | Not needed. Primped Pooches' "Extra Care (senior or anxious)" fee is cited as a pricing fact only. |
| Problems after grooming | GD-14 | Not needed |

---

## D. Final Page Structure and Content

**Structure (spec §E–§H):**
- H1, plus six H2s in a fixed order.
- No H3s.
- Short answer naming the market and date.
- C-CALL-SRC sourcing note plus price tables, with a source on every row.
- FAQs (3): charged more than quoted; mobile worth it; doodle. They sit under a "Common questions" H2, as on GD-01 to GD-15.

> *[Square-bracketed italics]* are builder notes.
>
> **[S1]–[S3]** are editorial sources.
>
> **[P1]–[P11]** are price sources (the full register is in §E).

*[Breadcrumb: Home › Grooming cost]*

# What dog grooming costs, and why quotes vary

*[Intent line]* Indicative prices from **US** groomers' published price lists, **checked October 5, 2026**. You're budgeting for professional grooming, and you want to know what to expect and why one quote can be very different from another.

*[Byline]* By Grooming Dogs · Updated *[publish date]*

*[Lead image `lead-cost` + credit line (unlinked)]*

*[Short answer box]*
**Short answer (US prices, checked October 5, 2026):**
- **Full groom at a salon:** the salons we checked list prices from **$55 for a small dog to $200 for an extra-large one**, before tax **[P1][P2][P3]**. National chain Petco advertises a bath and haircut **starting at $38**. That's a starting price, not a typical bill **[P4]**.
- **Mobile groomers** we checked list full grooms from **$90 to over $300** **[P5]–[P9]**.
- **Self-service dog washes** charge **$15–$20** a session **[P10][P11]**.
- **What changes the price:** your dog's size, coat type and coat condition, and which services are included **[S1]**. Matting, extra handling and travel can add to the bill.
- **These are examples, not averages.** Prices vary a lot by area, so get a quote for your dog.

---

## Typical grooming prices

*[C-CALL-SRC: sourcing note]* **Where these figures come from:** we checked the published price lists of 13 US grooming businesses (salons, mobile groomers and self-service washes in 12 areas) on **October 5, 2026**. The figures are what each business lists, before tax unless stated. They're **indicative examples, not a national average**, and they'll change over time. We don't recommend or endorse any of these businesses. How we selected them is in [our editorial policy](/editorial-policy/).

*[Table 1: HTML in Text Editor, scroll wrapper. No ad inside or beside any table.]*

**Full groom at a salon (bath, dry, brush, haircut, nails, ears)**

| Business (area) | Small dog | Medium dog | Large dog | Extra-large dog | Price type and notes |
|---|---|---|---|---|---|
| KHS' Pet Resorts (Louisville, KY) **[P1]** | $55–$70 (≤20 lb) | $65–$155 (21–50 lb) | $80–$185 (51–70 lb) | $90–$200 (70+ lb) | Estimates; can rise with coat condition; plus 6% KY sales tax |
| Woof Gang Bakery & Grooming, Carriage Crossing (Boise, ID) **[P2]** | $70 (≤20 lb) | $80 (21–40 lb) | $95 (41–75 lb) | $110 (76–100 lb); $125 (100+ lb) | Listed prices; "may vary" with breed and coat; poodles/doodles priced higher |
| PNW Grooming (Corvallis, OR) **[P3]** | Shih Tzu $80 | — | Golden Retriever $130 | — | Priced by breed, not weight (examples shown) |
| Petco (stores in New York, NY; Columbus, OH; Austin, TX) **[P4]** | "Bath & haircut **starts at $38**" | | | | Starting price; no size bands listed |

**Bath only, or bath and brush (no haircut)**

| Business (area) | Price | Notes |
|---|---|---|
| KHS' Pet Resorts (Louisville, KY) **[P1]** | $25–$35 bath only; $30–$40 with nail trim | Short-coated dogs; by weight; estimates; plus tax |
| Woof Gang (Boise, ID) **[P2]** | $35 (≤20 lb) to $75 (100+ lb) | "Classic Bath" |
| PNW Grooming (Corvallis, OR) **[P3]** | Shih Tzu $60; Labrador $70; Golden Retriever $80 | Bath and brush, by breed |
| Petco (3 stores) **[P4]** | "Starts at $22" | Starting price |

**Mobile full groom (the groomer comes to you)**

| Business (area) | Listed prices | Price type and notes |
|---|---|---|
| Primped Pooches (McKinney/Frisco/Plano area, TX) **[P5]** | $125 (≤15 lb) to $250 (60+ lb) | Listed as an estimate; **plus a $15 travel fee** on every appointment |
| Million Dollar Dog (Gaston & York counties, NC/SC) **[P6]** | $130–$155 (1–25 lb) to $220–$235 (46–75 lb) | Priced by appointment length; "determined at the date of service" |
| Julia's Pet Spa (Montgomery & Frederick counties, MD) **[P7]** | Starts at $110 (≤15 lb) to $150 (30–50 lb) | Starting prices; may change with fuel prices and travel distance |
| Space Coast Mobile Dog Grooming (Melbourne, FL area) **[P8]** | $125 (≤10 lb) to $175 (51–70 lb) for haircut breeds; up to $225 for long-haired breeds; $90–$175 for short-coated breeds | Listed prices by size and coat |
| Wiggly Monsters (New York City metro, in-home) **[P9]** | $190–$240 (long or double coat); $230–$320 (curly coat) | Sizes not defined; **excludes tax and a service charge** |

**Self-service dog wash (you wash your dog)**

| Business (area) | Price | What's included |
|---|---|---|
| Agri Feed Pet Supply, "The Spaw" (Knoxville, TN) **[P10]** | $15 per 45-minute session | Shampoo and conditioner, high-velocity dryer, shammy, wash cloth, apron |
| Care-A-Lot Pet Supply (Virginia Beach, VA) **[P11]** | $20 per wash | Shampoo, water, air dryers, towels, smock, goggles |

*[Text Editor under the tables]* **Nail trim on its own:** listed at $10–$12 **[P1]** and $15 **[P3]** at two of the salons we checked.

---

## What drives the price

**What a groomer charges depends on your dog and the job** **[S1]**:
- **Size:** in every list we checked that's priced by weight, the price goes up with the dog's size **[P1][P2][P5]–[P8]**.
- **Coat type:** some businesses price long-haired, curly or "doodle" coats higher than other dogs of the same size **[P2][P5][P8][P9]**. For the five coat groups, see [coat types](/dog-coat-types/).
- **Coat condition:** a tangled or matted coat takes longer, and several lists say the price can rise with coat condition **[P1][P2][S2]**.
- **What's included:** a bath-only visit and a full groom with a haircut are different jobs **[S1][S2]**. Check what the standard price covers, for example nails, ears or teeth.
- **Time and handling:** some dogs take longer than others **[S1]**, and some businesses price by appointment length **[P6]**.
- **Where you live and the type of service:** prices differ between areas. In our sample, mobile groomers listed higher prices than salons for similar-sized dogs, but they were in different cities, so this isn't a like-for-like comparison.

A groomer can give you an accurate price once they've seen your dog **[S1]**.

---

## Extra charges to expect

*[Icon List]*
- **Matting:** some businesses list a separate dematting charge, for example $15 **[P3]**, or from $30–$40 by size **[P5]**. Others say the price rises with coat condition **[P1][P2]**.
- **Extra time or handling:** one mobile groomer lists an "Extra Care" charge for senior or anxious dogs, starting at $25 **[P5]**. Another prices by appointment length **[P6]**.
- **Add-on services:** de-shedding, teeth brushing and nail grinding are often priced separately **[P3][P4][P5][P8]**.
- **Travel:** a mobile groomer may add a travel fee (one lists $15 per appointment **[P5]**), or adjust prices for fuel and distance **[P7]**.
- **Tax and service charges:** sales tax may be added, for example 6% at one Kentucky salon **[P1]**. One in-home groomer's prices exclude tax and a service charge **[P9]**.
- **Deposits:** one salon asks new clients for a refundable deposit when booking **[P1]**.

Before you book, ask for the total and what it includes. If anything could be added on the day, such as for matting, ask the groomer to call you first. For other questions to ask, see [choosing a groomer](/choosing-a-dog-groomer/).

---

## Budgeting for a year

1. **Get a quote** for your dog's usual service.
2. **Find your dog's interval** in [how often to book](/how-often-should-you-groom-your-dog/), and count the visits in a year.
3. **Multiply** the per-visit price by the number of visits.
4. **Add** tax, any regular extras (such as nail trims between appointments), and a margin for occasional charges like matting.

*[Worked example: C-TABLE, labelled "Illustration only: one business's price"]*

| Step | Example |
|---|---|
| Per-visit price | $80: full groom for a 21–40 lb dog at one Boise, ID salon **[P2]** |
| Interval | For a long-coated dog, every 4 to 8 weeks (from [how often to book](/how-often-should-you-groom-your-dog/)), which works out to about 7 to 13 visits a year |
| Yearly cost | About **$560 to $1,040**, before tax and extras |

Your own figures will differ. Use your groomer's quote and your dog's interval.

---

## Home grooming vs professional grooming

*[Table: HTML in Text Editor]*

| | Grooming at home | Professional grooming |
|---|---|---|
| **Upfront cost** | Tools, a one-off cost that's reused. See [the tools you'd need](/dog-grooming-tools/). | None |
| **Cost per session** | Mainly your time and products. A self-service wash costs $15–$20 **[P10][P11]**. | Salon full grooms from $55 to $200 in our sample **[P1][P2][P3]** |
| **What you can realistically do** | Brushing, bathing, nails, ears and teeth; small tidy-up trims. See [grooming at home between visits](/how-to-groom-your-dog-at-home/). | Full haircuts, clipping, heavy de-shedding, matted coats |
| **Good fit** | Short coats; maintenance between appointments | Coats that need regular haircuts; jobs you can't do safely |

You can also combine the two, doing maintenance at home and using a groomer for the work that needs skill or equipment. Whether home grooming saves money depends on your dog's coat and how much of the work you can do safely.

---

## Ways to reduce the cost safely

*[Icon List]*
- **Brush between visits:** keeping the coat free of tangles can help you avoid matting charges **[P3][P5]**. See [preventing mats](/brushing-your-dog/#dealing-with-mats).
- **Do the simple jobs at home:** for example nails, ears and teeth, if you can do them safely. See [grooming at home between visits](/how-to-groom-your-dog-at-home/).
- **Ask for a quote first** and check what's included **[S1]**.
- **Choose the service your dog actually needs:** a bath-only visit is listed for less than a full groom at every salon we checked **[P1][P2][P3][P4]**.
- **Don't cut costs by skipping mat prevention or stretching visits so long that the coat mats.** A matted coat is uncomfortable for your dog **[S3]**, and it can cost more to deal with **[P3][P5]**.

---

## Common questions

*[FAQ: Elementor Accordion with FAQ Schema ON; question titles set to H3. Rank Math FAQ schema OFF.]*

### Why was I charged more than I was quoted?

Usually because the job turned out to be bigger than expected:
- **Coat condition:** for example matting that needed extra time or a short clip. Several businesses list matting charges, or say prices rise with coat condition **[P1][P3][P5]**.
- **Extra services:** services added on the day.
- **Time or handling:** your dog needed longer, or extra handling **[S1][P5][P6]**.
- **Tax or fees:** tax, travel or service charges that weren't in the headline price **[P1][P5][P9]**.

Ask the groomer to explain the difference. Next time, agree in advance that they'll call you before adding anything.

### Is mobile grooming worth the extra cost?

That's your call:
- **Price in our sample:** the mobile groomers listed full grooms from $90 to over $300 **[P5]–[P9]**, generally above the salons we checked, though in different areas. Some add travel fees **[P5][P7]**.
- **What you're paying for:** your dog is groomed at your door, without a car journey or a busy salon. For some owners, and some dogs, that matters more than the price difference.
- **Compare like with like:** compare the total price, including any travel fee, for the same services.

For how the service types differ beyond cost, see [choosing a groomer](/choosing-a-dog-groomer/).

### How much does it cost to groom a doodle?

**Listed doodle prices in our sample:**
- **Salon:** $90–$145 for a full groom at one Boise salon, depending on size, compared with $70–$125 for other dogs **[P2]**.
- **Salon (by size label):** $100–$150 at one Oregon salon **[P3]**.
- **Mobile:** $135–$275 from one Texas mobile groomer **[P5]**.

**Why it costs more:** doodle coats are often curly or wavy. Coats like these keep growing and need regular clipping to stay free of mats, which means longer appointments than for a short-coated dog of the same size. See [coat types](/dog-coat-types/) and [how often to book](/how-often-should-you-groom-your-dog/).

---

*["Where to go next": 4 cards]*

| Card title | Link | Reason shown on card |
|---|---|---|
| Choosing a dog groomer | `/choosing-a-dog-groomer/` | "What to look for beyond price." |
| How often should you groom your dog? | `/how-often-should-you-groom-your-dog/` | "The interval for your budget." |
| Brushing your dog | `/brushing-your-dog/` | "Preventing mats and matting charges." |
| Dog grooming tools | `/dog-grooming-tools/` | "What home grooming needs." |

*[Disclaimer line]* Prices are indicative examples from US businesses' published price lists, checked October 5, 2026. They aren't averages, they change, and they may not include tax or fees. Always get a quote for your dog. We don't recommend or endorse any business listed. [How we write, source and fund our guides](/editorial-policy/).

*[Sources list]*
**Editorial sources**
1. **[S1]** Jan Reisen, American Kennel Club: "What to Ask Potential Groomers Before You Hand Them Your Dog", updated March 27, 2026. https://www.akc.org/expert-advice/health/questions-ask-potential-groomers/
2. **[S2]** The Vetstreet Team, Vetstreet: "Selecting a Groomer", July 12, 2011. https://www.vetstreet.com/care/selecting-a-groomer
3. **[S3]** Ann Hohenhaus, DVM, The Animal Medical Center: "Can Bath Time be Dangerous for Pets?", November 30, 2016. https://www.amcny.org/blog/2016/11/30/can-bath-time-dangerous-pets/

**Price sources** (all accessed October 5, 2026; links are `rel="nofollow"`, citations only)
- **[P1]** KHS' Pet Resorts (Kentucky Humane Society), Louisville, KY: Grooming. https://www.kyhumane.org/pet-resort/grooming/
- **[P2]** Woof Gang Bakery & Grooming, Carriage Crossing, Boise, ID: Spa Menu. https://stores.woofgangbakery.com/store/id/carriage-crossing/
- **[P3]** PNW Grooming, Corvallis, OR: Services / Price List. https://pnwgrooming.com/services
- **[P4]** Petco Grooming store pages: New York, NY (2475 Broadway); Columbus, OH (1647 Olentangy River Rd); Austin, TX (14010 US-183). https://stores.petco.com/ny/new-york/full-service-grooming-newyork-ny-1750.html · https://stores.petco.com/oh/columbus/full-service-grooming-columbus-oh-864.html · https://stores.petco.com/tx/austin/full-service-grooming-austin-tx-1402.html
- **[P5]** Primped Pooches Mobile Dog Spa, Collin County area, TX: Pricing. https://www.primpedpooches.com/pricing
- **[P6]** Million Dollar Dog, Inc., Gaston & York counties, NC/SC: Mobile Grooming Pricing. https://www.milliondollardoginc.com/mobile-grooming-pricing
- **[P7]** Julia's Pet Spa, Montgomery & Frederick counties, MD: Pricing. https://www.juliaspetspa.com/pricing
- **[P8]** Space Coast Mobile Dog Grooming, Melbourne, FL: Services & Pricing. https://spacecoastmobiledoggrooming.com/our-services/
- **[P9]** Wiggly Monsters, New York City metro: Services. https://wigglymonsters.com/
- **[P10]** Agri Feed Pet Supply, Knoxville, TN: Self-Service Dog Wash. https://agrifeedpetsupply.com/pages/self-service-dog-wash
- **[P11]** Care-A-Lot Pet Supply, Virginia Beach, VA: Self-Serve Dog Wash. https://www.carealotpetresorts.com/self-serve-pet-bath/

### Page outline

- **H1:** What dog grooming costs, and why quotes vary
- **H2:** Typical grooming prices
- **H2:** What drives the price
- **H2:** Extra charges to expect
- **H2:** Budgeting for a year
- **H2:** Home grooming vs professional grooming
- **H2:** Ways to reduce the cost safely
- **H2:** Common questions
  - H3 (FAQ): Why was I charged more than I was quoted? · Is mobile grooming worth the extra cost? · How much does it cost to groom a doodle?

### Editorial claim evidence

| # | Claim | Source | Exact passage | Narrowing |
|---|---|---|---|---|
| 1 | The cost varies by size, coat, services and time; a groomer quotes after assessing the dog | S1 | "The cost of a dog grooming can vary by dog size and coat type, as well as what services are included in standard bath or groom. Some dogs also take longer to groom than others. A professional groomer will be able to quote you a rate once they assess your dog's individual needs." | As published |
| 2 | Discuss what's included; matting can carry a fee | S2 | "It's important to discuss what is included with the grooming fee… there is an additional fee for animals that are severely matted" | Now backed by current US price lists (P1, P3, P5). S2's "in most cases" is **not used**. |
| 3 | Mats are uncomfortable for the dog | S3 | "Wet mats tighten as they dry and pull at the underlying skin" | Welfare point (spec §I) |
| 4 | Interval of 4–8 weeks for long coats | GD-02 (its S1/S3) | GD-02 claim 8 | Cited via a link. "About 7 to 13 visits" is arithmetic (52 ÷ 8 = 6.5, rounded to 7; 52 ÷ 4 = 13). |

---

## E. Price Evidence Register

**Access date for all rows: 2026-10-05.** Capture method: `curl` of the live page (raw HTML saved in the session scratchpad `gd16/`), with text extracted by script. Each listed price was read from the extracted text.

### Used on the page

| # | Provider | Location | Service (as named) | Listed price (USD) | Price type | Includes | Excludes / not stated | Conditions | Tax/fees wording | Page date | Evidence passage (verbatim excerpt) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | KHS' Pet Resorts (Kentucky Humane Society), Fern Creek Pet Resort | Louisville, KY 40291 | Full-Service Groom for Dogs | Small (≤20 lb) $55–$70; Medium (21–50 lb) $65–$155; Large (51–70 lb) $80–$185; X-Large (70+ lb) $90–200 | **Estimate ranges** | "bathing, brushing, ear cleaning and nail trimming" (all grooming) | Haircut implied by "full-service"; not itemized | "Prices can increase depending on the condition of the pet's coat"; new-client deposit $50–80, refundable with 48 h notice | "All services are subject to a 6% Kentucky sales tax" | modified 2025-05-15 | "Small breeds (20 pounds and under)… – $55-$70*… X-Large breeds (70 pounds and over)… – $90-200*… *Prices listed are estimates." |
| P1b | (same) | (same) | Wash-and-Go (short-haired) | <30 lb $25 bath / $30 with nails; 30–79 lb $30 / $35; 80+ lb $35 / $40 | Estimate | Bath (with or without nail trim) | — | Short-haired breeds | +6% tax | (same) | "Under 30 pounds – $25* bath only; $30* bath and nail trim" |
| P1c | (same) | (same) | Nail trims | $10–12 | Estimate | Nail trim | — | — | +6% tax | (same) | "Nail trims – $10-12*" |
| P2 | Woof Gang Bakery & Grooming, Carriage Crossing | 2337 S Apple St, Boise, ID 83706 | Full Groom (standard / Poodle-Doodle) | ≤20 lb $70 / $90; 21–40 $80 / $100; 41–75 $95 / $115; 76–100 $110 / $130; >100 $125 / $145 | **Listed price** ("may vary") | "luxury bath with shampoo and conditioner, blow drying, full body brushing & styling, nail trim & grind, gentle ear cleansing, sanitary trim, and anal glands by request" | — | "Pricing may vary based on the breed, size, condition of coat and services rendered" | Not stated | modified 2025-03-05 | "Small Dogs | Up to 20 lbs Poodle/ Doodle… Full Groom $70 $90" |
| P2b | (same) | (same) | Classic Bath (standard) | $35 (≤20 lb) … $75 (>100 lb) | Listed | Bath | Haircut | (same) | Not stated | (same) | "Classic Bath $35 $50… XX-Large… Classic Bath $75 $90" |
| P3 | PNW Grooming | Corvallis, OR | Full Grooming (FG), by breed | Shih Tzu $80; Golden Retriever $130; Doodle Small–XL $100–$150 | **Listed** (breed-based; the $ sign appears in the page's own text, e.g. "starting at $175") | "bath with hypoallergenic shampoo and conditioner, brushing, nail trimming, and the WHOLE BODY TRIM; also ear cleaning and anal gland expression… upon request" | Doodle size bands undefined | Mixed breeds booked as the nearest breed | Not stated | © 2026 footer (no page date) | "Shih Tzu FG | 80"; "Golden Retriever FG | 130"; "Doodle Small FG | 100… Doodle XL FG | 150" |
| P3b | (same) | (same) | Bath and Brush (BB) | Shih Tzu $60; Labrador $70; Golden $80; Doodle $75–$105 | Listed | Bath, brushing, nail trim (ears and glands on request) | — | — | — | (same) | "Shih Tzu BB | 60"; "Labrador Retriever BB | 70" |
| P3c | (same) | (same) | Nail Trim; Dematting | Nail trim $15; Dematting $15 | Listed | — | Dematting unit not stated | Dematting "added… if pup is super matted" | — | (same) | "Nail Trim | 15"; "Dematting | 15" |
| P4 | Petco Grooming (stores 1750, 864, 1402) | New York, NY 10025; Columbus, OH 43212; Austin, TX 78717 | Bath Only; Bath & haircut | $22; $38 | **"Starts at"** (identical at all three stores) | "Deep-cleaning shampoo, Blow-Dry, 15 Minute Brush, Scented Spritz, Ear Cleaning, Gland Expression, Nail Trim" | Size not stated | Add-on packages +$20 to +$35 | Not stated | modified 2026-06-29 | "Bath Only | starts at: | $ 22 | Bath & haircut | starts at: | $ 38" |
| P5 | Primped Pooches Mobile Dog Spa | McKinney, Allen, Frisco, Plano, Little Elm (Collin County area), TX | Full Groom, Bath & Blowout With Haircut (standard / doodle) | Toy 0–15 lb $125 / $135; Small 16–30 $150 / $170; Medium 31–45 $175 / $190; Large 46–60 $200 / $220; XL 60+ $250 / $275 | **Listed, labelled an estimate** | Bath, blowout, nail trim and file, teeth brushing, ear cleaning and plucking, external anal glands on request, haircut | — | "This pricing guide is an estimate, not the guaranteed pricing. Conditioning and density of the coat will affect the final pricing." Dematting "starts at $30" (S–M) / "$40" (L–XL); "Extra Care (senior or anxious pets) – starts at $25" | **"A $15 travel fee applies to all appointments."** | modified 2026-01-21 | "Toy Dogs (0 to 15 pounds) – $125… Extra-Large Dogs (over 60 pounds) – $250" |
| P6 | Million Dollar Dog, Inc. | Gaston & York counties (Belmont/Charlotte, NC; Clover, York, Rock Hill, SC) | Small / Medium / Large Groom | 1–25 lb $130 (60 min) or $155 (75 min); 26–45 lb $165–$180; 46–75 lb $220–$235 | **Listed, by duration**; "determined at the date of service" | Bath plus "clipper and scissor work" | — | "Additional time required will result in a higher price"; longer for matting | Not stated | © 2025 footer | "Small Groom (60 mins) | $130.00… Large Groom (90 mins - 120 mins) $220.00 - $235.00" |
| P7 | Julia's Pet Spa | Gaithersburg, Potomac, Rockville, Germantown, Frederick, Silver Spring, Bethesda, MD | Full Groom Package | ≤15 lb from $110; 15–30 lb from $130; 30–50 lb from $150 | **"Start at"** | Full-body haircut, bath, … (package list) | Dogs over 50 lb not listed | "Pricing can change according to fuel pricing and travel distance" | Not stated | © 2026 footer | "Small Dog (15 lbs or less) start at $110 *" |
| P8 | Space Coast Mobile Dog Grooming | Melbourne, Viera, Suntree, the Beaches, FL | Full Groom: Haircut / Long Hair / Short-Fine Hair breeds | Haircut 0–10 lb $125, 11–25 $150, 26–50 $160, 51–70 $175; Long hair $125–$225; Short/fine $90–$175 | **Listed** | Nails, pads and sanitary, pre-cut/brush, ears, bath, blowout, cut | Add-ons extra (ears $10, glands $20, grinding $10, teeth $20) | Price depends on "condition of your pup's coat, and their size" | Not stated | © 2026 footer | "Full Groom | Haircut Breeds | Extra Small | 0-10 Lbs | $125… Large | 51-70 Lbs | $175" |
| P9 | Wiggly Monsters (in-home) | New York City tri-state metro | Full Body Haircut (long/double); Fluff & Buff (curly) | S $190, M $215, L $240; S $230, M $270, L $320 | **Listed** | Bath, hand blow-dry, ears, eyes, brushing, haircut, pads, nails | **Sizes undefined** | — | **"Price doesn't include Tax & Service charge"** | modified 2026-08-19 | "Full Body Haircut | Long-haired & Double-coated breeds | S | $190 | M | $215 | L | $240" |
| P10 | Agri Feed Pet Supply, "The Spaw" (Middlebrook Pike) | Knoxville, TN | Self-service dog wash | $15 | **Fixed, per 45-minute session** | "premium shampoo & conditioner of your choice, high-velocity dryer, shammy, wash cloth, and apron" | — | — | "No hidden fees" (page wording) | © 2026 footer | "$15 Per Session — Everything Included | 45 Minutes Per Session" |
| P11 | Care-A-Lot Pet Supply (Diamond Springs, Rosemont, Indian River; Moyock, NC) | Virginia Beach, VA | Self Serve Dog Wash | $20 | **Fixed, per wash** | "shampoo, water, air dryers, towels, smocks, goggles and a treat" | — | Dogs must be friendly and flea-free | Not stated | modified 2026-08-31 | "Dog Bath Pricing | Per Wash | Includes shampoo, water, air dryers, towels, smocks, goggles and a treat. $20" |

### Checked and NOT used

| Provider / page | Reason |
|---|---|
| Fluffy Paws, Denver, CO (carrd page) | **Service scope unclear:** one weight table follows a list of three services (full groom; face, feet and fanny; bath and brush). **Undated page.** Excluded from tables and claims. |
| Good Dog Center, NE Iowa | Footer © 2011 (**visibly stale**) and no town stated |
| NIACC Canine Campus, Mason City, IA | **Student training salon.** Prices aren't representative of commercial grooming. |
| PAWS UP Mobile Grooming | **No location** stated anywhere on the site |
| Pet Food Express "Pet Wash" (CA) | Price ("$18" in a search snippet) **not present** in the page's own text |
| Splash Hound USA (Sacramento area?) | Page © 2008; currentness unverifiable |
| "That Groom Room" PriceSheet2025 (PDF) | Business location not identifiable |
| Camp Bow Wow (Kansas City, Cherry Hill, San Diego, Boise), Woofie's North Atlanta, Nature's Design Dog Spa, Dog's Best Friend | **403 / bot-blocked** to direct fetch. Not verified, not used. |
| Dogtopia (Raleigh, Meridian), Dunk'n Dog Wash | 404 at the cited URLs |
| heygoldie booking pages (Groomz By Morgan, LoboLux, Abriluxe) | JavaScript-only. Prices not in the fetched source. |
| magicpin (Paws and Rec, Brooklyn) | Third-party listing, not the provider's own page |
| HomeGuide, Thumbtack, Care.com, Adopt-a-Pet, Hepper, Whole Dog Journal, The Pricer, Groupon, Square "menu pricing", franpos, PetSmart "guides" | **Tier 3 / aggregator / SEO.** Not used for any figure. |
| LMArena "$40–$120", "$100–$160"; legacy `/pricing/` grid; "$52/month" | Spec V-5 and architecture: never reused |

---

## F. Market Methodology

| Item | Applied |
|---|---|
| Market | United States, USD (owner decision, §B) |
| Selection | Tier 1 only: each business's own published price page, found via web search with region-specific queries. Kept only if the page loaded directly, named a location, and showed prices in its own text. |
| Geographic scope | **12 metro areas or regions**: Louisville KY; Boise ID; Corvallis OR; New York NY; Columbus OH; Austin TX; Collin County TX; Gaston/York NC–SC; Montgomery/Frederick MD; Melbourne FL; Knoxville TN; Virginia Beach VA. **Not covered:** California, the upper Midwest and New England in-shop salons (candidates were bot-blocked or failed checks). |
| Sample size | **13 provider locations from 11 businesses**: in-shop salons 3 independents plus 1 chain (3 stores); mobile 5; self-wash 2 |
| Comparability | **Service categories are never mixed:** salon full groom; bath only or bath and brush; mobile full groom; self-wash; nail trim. Each row keeps the provider's own size bands; no re-banding. Breed-priced lists (P3) are shown as named examples. |
| Price types | Estimates (P1), listed (P2, P3, P5, P8, P9), starting-at (P4, P7), duration-based (P6) and fixed per session (P10, P11) are **labelled per row**. Petco's "starts at" is called out as not a typical bill. |
| Statistics | **No average or median is published.** The sample is too small and too regionally uneven. The page uses "the businesses we checked list X to Y" for each category. |
| Ranges used | Salon full groom **$55–$200**: the min and max of P1–P2 sized lists (P3's breed prices of $80–$130 fall within it). Mobile **$90 to "over $300"**: P8's short/fine-coat small dog ($90) to P9's $320 curly L. Self-wash **$15–$20**: P10–P11. Nail trim $10–$15: P1, P3. |
| Exclusions | §E "Checked and NOT used" |
| Currentness | All accessed 2026-10-05. Page dates: 2025-03 to 2026-08 where shown; otherwise a © 2025 or 2026 footer. Pages with stale or no dates and unclear scope were excluded. |
| Limitations | Small sample; uneven regions; mobile and salon rows come from different cities; sizes are defined differently between providers; P9's sizes are undefined; P3's doodle sizes are undefined |

---

## G. Price Interpretation

| Factor | Evidence | On the page |
|---|---|---|
| Size | Every weight-banded list rises with weight (P1, P2, P5–P8) | "in every list we checked…" (scoped to the sample) |
| Coat type | Doodle/curly/long-coat pricing is higher at P2, P5, P8 and P9 | "some businesses" |
| Condition and matting | P1 (price can increase), P2 (may vary), P3 ($15 dematting), P5 (from $30–$40), P6 (time) | "some businesses list…" |
| Handling and extra time | P5 "Extra Care… starts at $25"; P6 duration pricing | One example each, not generalized |
| Starting vs fixed | P4 and P7 starting; P1 estimates | Labelled. Petco's $38 is called a starting price. |
| Mobile vs salon | Mobile rows sit above the salon rows **in this sample**, but in different cities | Stated with that caveat; **no rule** |
| Travel fees | P5 $15 flat; P7 fuel/distance | Examples |
| Self-wash | Per session (P10, 45 min) or per wash (P11) | As listed |
| Tax and fees | P1 6% KY sales tax; P9 excludes tax and service charge; others not stated | "may be added". **No tax is computed.** |
| Deposits | P1 | One example |

---

## H. Content Decisions

| Type | Item |
|---|---|
| **Included prices** | P1–P11 as registered |
| **Rejected prices** | §E "not used" (14 pages or groups) |
| **Rejected old prices** | Good Dog Center (© 2011); Splash Hound (© 2008) |
| **Rejected LMArena / legacy** | "$40–$120", "$100–$160", the `/pricing/` grid, "$52/month" |
| **Rejected affiliate/SEO claims** | All aggregator "average cost" figures (e.g. "$40–$100", "20–35% above in cities", per-size national ranges) |
| **Narrowed** | "Mobile costs more" is now scoped to the sample with a caveat; S2's "in most cases" is replaced by provider evidence; the worked example is labelled as one business's price |
| **Source conflicts** | None between providers. Differences are normal price variation and are shown, not reconciled. |
| **Tipping** | **Not on GD-16** (GD-15 owns it; a US pass is pending). The budget step says "tax", not tips. |
| **Downstream** | **GD-15 needs a US-specific pass** for tipping, licensing/permits and the complaint route (PC-10). The market is now decided (US/USD), but GD-15 content was **not changed** in this task. The dependency is noted in GD-15 I-1. |

---

## I. Image Record

| Asset ID | Source | Visible content (viewed directly, 2026-10-05) | Placement | Alt text | Result |
|---|---|---|---|---|---|
| `lead-cost` (Pexels 19145897) | Goochie Poochie Grooming, Pexels. https://www.pexels.com/photo/groomer-standing-and-washing-dog-19145897/ | A groomer in pink gloves washes a wet, curly-coated small dog in a stainless-steel salon tub with a standard tub tether. **No prices, signage or business name visible.** | Lead image | "A groomer washing a curly-coated dog in a salon bathtub." | **PASS.** No implied provider, price or endorsement. **Not one of the priced businesses.** Note: it's from the same shoot as GD-15's lead. The credit is unlinked. |

---

## J. SEO / Schema / Links

| Field | Value |
|---|---|
| SEO title | How Much Does Dog Grooming Cost? What Drives the Price (**54** characters) |
| Meta description | Indicative US dog grooming prices, checked October 2026: what drives the cost (size, coat, condition, mobile service, add-ons) and how to budget a year. (**152** characters) |
| Canonical | `https://grooming-dogs.com/dog-grooming-cost/` |
| Focus keyword | how much does dog grooming cost |
| Schema | Rank Math: Article (Organization "Grooming Dogs"). FAQPage from the Elementor Accordion only. **No Offer, Product, Review or LocalBusiness schema.** |
| Breadcrumb | Home › Grooming cost |
| Robots | index, follow (on publication) |
| Price-source links | `rel="nofollow"` in the Sources list only. **No links in the tables.** No ratings, no booking prompts. |

### Internal links

| # | Section | Anchor | Target | URL | Reason |
|---|---|---|---|---|---|
| 1 | Sourcing note; Disclaimer | our editorial policy / How we write… | GD-19 | `/editorial-policy/` | Method and trust |
| 2 | Drivers; doodle FAQ | coat types | GD-03 | `/dog-coat-types/` | Coat groups |
| 3 | Extra charges; mobile FAQ; Next card | choosing a groomer | GD-15 | `/choosing-a-dog-groomer/` | Selection is owned by GD-15 |
| 4 | Budgeting ×2; doodle FAQ; Next card | how often to book | GD-02 | `/how-often-should-you-groom-your-dog/` | Interval input |
| 5 | Home vs pro; Next card | the tools you'd need | GD-10 | `/dog-grooming-tools/` | Tool cost |
| 6 | Home vs pro; reduce cost | grooming at home between visits | GD-01 | `/how-to-groom-your-dog-at-home/` | Home maintenance |
| 7 | Reduce cost; Next card | preventing mats | GD-05 | `/brushing-your-dog/#dealing-with-mats` | Avoiding matting charges |

**Checks:**
- **Spec coverage:** all five spec outgoing targets are present (GD-15, 02, 05, 01, 10).
- **Additions:** GD-03 and GD-19.
- **On publication:**
  - GD-02's and GD-15's conditional links to this page (PC-04) should be rendered.
  - GD-00's nav and homepage items should be added (architecture §E.1).

---

## K. Elementor Build Record (Elementor Free only)

**Widgets used:** Heading, Text Editor, Image, Icon List, Icon Box, Accordion (FAQ Schema toggle), Shortcode. **No Pro-only widgets or features.**

**Saved templates** (copied onto the page):
- Intro
- Short-answer box
- Sourcing note (C-CALL-SRC)
- "Where to go next" cards
- Disclaimer
- Sources list

**Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Intro | Shortcode (breadcrumb) · **H1** · Text Editor (intent with market and date, byline) · Image `lead-cost` (eager) + unlinked credit |
| 2 | Short answer | Saved template (Icon List, 5) |
| 3 | Typical prices | **H2** · C-CALL-SRC · Text Editor ×4 (HTML tables: salon full groom, bath, mobile, self-wash; each in a scroll wrapper; bold category captions) · Text Editor (nail trims). **No ad in this container.** |
| 4 | Ad slot (optional) | Between "What drives the price" and "Extra charges" only |
| 5 | Drivers | **H2** · Text Editor + Icon List (6) · Text Editor |
| 6 | Extra charges | **H2** · Icon List (6) · Text Editor |
| 7 | Budgeting | **H2** · Text Editor (`<ol>`, 4) · Text Editor (worked-example table, "Illustration only" label) · Text Editor |
| 8 | Home vs pro | **H2** · Text Editor (HTML table) · Text Editor |
| 9 | Reduce cost | **H2** · Icon List (5) |
| 10 | FAQ | **H2** · Accordion (3; H3 titles; FAQ Schema ON) |
| 11 | Next / Disclaimer / Sources | Saved templates. Price-source links use `rel="nofollow"`. |

**Mobile:** single column. Tables scroll inside their wrappers (no page-level horizontal scroll).

**Confirmed:** no Elementor Pro widget or feature is required.

---

## L. Route Transition

| Item | State |
|---|---|
| Current `/pricing/` | **410 Gone.** Unchanged. |
| Required on publication | Switch `/pricing/` to a **301 → `/dog-grooming-cost/`** in the same release as GD-16 goes live |
| Navigation | Add "Grooming cost" to the primary-nav dropdown and the homepage **after publication** (architecture §E.1) |
| Deployment performed? | **No.** Nothing was published, redirected or changed on any server. |

---

## M. Exceptions

| # | Issue | Impact | Blocking? | Future action |
|---|---|---|---|---|
| M-1 | **Thin, uneven sample:** 3 independent salons with usable lists, plus one chain's starting prices; mobile and salon rows are in different cities | The ranges are examples, not a market picture | **Non-blocking** (labelled indicative; no averages; V-2's "named, dated sources per range" is met) | Expand to ≥3 salons per region at the first refresh (California, the Midwest, New England) |
| M-2 | Several candidates were bot-blocked (403) or JavaScript-only and couldn't be verified | Coverage | Non-blocking | Retry with a manual browser capture at the refresh |
| M-3 | Five pages have no page date, only a © 2025 or 2026 footer (P3, P6, P7, P8, P10) | Currentness | Non-blocking (live pages, accessed 2026-10-05) | Re-check all prices at each refresh. Suggested cadence: every 6 months, given the price volatility. |
| M-4 | Size bands differ between providers; P9's sizes and P3's doodle sizes are undefined | Comparability | Non-blocking (bands shown as listed) | — |
| M-5 | **GD-15 needs a US-specific pass** (tipping, licensing/permits, complaint route; PC-10) | Downstream content | Non-blocking for GD-16 | Run a separate GD-15 market pass with sourced US guidance |
| M-6 | `lead-cost` comes from the same shoot as the GD-15 lead | Visual repetition | Non-blocking | Optional replacement at the design pass |
| M-7 | `/pricing/` 301 and the nav addition are not deployed | Launch | Non-blocking (by instruction) | Deploy with GD-16 publication |

---

## Anti-drift checklist

- [x] Target market explicitly decided by the owner (US/USD, 2026-10-05); not inferred
- [x] Canonical title and URL verified; spec structure (6 H2s, no H3s, 3 FAQs); one H1
- [x] Every price has a provider, location, service, price type, access date and source (§E); no orphan numbers
- [x] Starting prices labelled; no average; no stale or LMArena prices; one currency (USD)
- [x] No invented tax, fees or surcharges (only as listed); no invented businesses, credentials or reviews; no ranking; no directory, booking or links in the tables
- [x] No LocalBusiness, Product, Review or Offer schema
- [x] GD-15, 02, 05, 06, 13 and 14 ownership kept; tipping left to GD-15
- [x] `/pricing/` transition documented; **no deployment claimed**
- [x] SEO title 54; meta description 152; FAQ schema from one source; Elementor Free only; canonical internal links only
- [x] GD-15 downstream dependency recorded
- [x] Record saved under `PRODUCTION/`

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**


---

## Addendum (owner, 2026-10-06): price-sources label

The published label "(all accessed October 5, 2026; links are `rel="nofollow"`, citations only)" included an implementation note. The owner approved removing it. The label now reads **"(all accessed October 5, 2026; citations only)"**. The price-source links keep `rel="nofollow"` in the markup; only the visible wording changed. Line 274 above is the original wording, kept for the record.
