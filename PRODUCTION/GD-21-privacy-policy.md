# GD-21 — Production Record: Privacy policy

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-21
**Upstream authorities (locked):** `PRODUCTION/GD-18-about.md`, `PRODUCTION/GD-19-editorial-policy.md`, `PRODUCTION/GD-20-contact.md` (all PRODUCTION-READY WITH VERIFIED EXCEPTIONS). GD-20 §I (P-1 to P-6) defines what this page must cover.
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-21 |
| Title | Privacy policy |
| Canonical URL | `https://grooming-dogs.com/privacy-policy/` |
| Page type | WordPress Page, **set as the WordPress privacy policy page** (Settings › Privacy); footer "Site" group |
| Page role | **Legal / utility:** what personal data the site collects and why, based on the **actual installed stack** |
| Market | United States (owner decision, GD-16 §B) |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS.** Publication requires the pre-publication fill-ins in §L (V-1 to V-8, O-1, O-2). |

---

## B. Architecture Authority

| Source | Fixes |
|---|---|
| Architecture (final) §B, §D, §E.2 | `/privacy-policy/`; owns "Data collected"; footer item |
| Architecture §G | **No ads on GD-18 to GD-21** |
| Architecture §K | "The GD-20 form uses Elementor Pro Form or a form plugin, covered by GD-21" |
| Spec §4 GD-21 | H1 "Privacy policy"; **9 H2s in this order:** What we collect · How we use it · Cookies, analytics and advertising · Affiliate links · Who we share data with · How long we keep it · Your rights · Contact · Changes to this policy. **H3s only for a specific third party.** No FAQ, no images, no byline; WebPage schema; outgoing link GD-20; "updated date"; "on the basis of the **actual** installed stack"; "Out of scope: generic boilerplate for services the site doesn't use" |
| Spec PC-13 | "Legal/regulatory guidance for the chosen market, plus confirmation of the actual installed services. GD-21 is updated whenever ads, analytics or affiliate tracking are activated." |
| GD-19 | Affiliate programs and ad networks: none active; **GD-19 and GD-21 updated together on activation** (O-2 there) |
| GD-20 | Form fields; email optional; no name, phone, health data or uploads; honeypot, no third-party CAPTCHA; inbox and retention = owner input; plugin unselected; the privacy line and checkbox link here |

**Role confirmed. No conflicts.**

**Spec meta deviation (accuracy):** the spec meta mentions "analytics, advertising and affiliate links". None is active, so the meta is rewritten so it doesn't imply they are (§J).

---

## C. Legal / Regulatory Basis (PC-13: United States)

**L1:** California Business and Professions Code §22575 (California Online Privacy Protection Act, CalOPPA), official text, accessed 2026-10-05. https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&division=8.&title=&part=&chapter=22.&article=

- **Applies to:** an "operator of a commercial Web site… that collects personally identifiable information… about individual consumers residing in California".
- **Why it's relevant:** the optional email field makes this plausible for a US-audience site. Whether the site counts as "commercial" is **not determined**; the policy is written to meet the requirements anyway.
- **What §22575(b) requires a policy to do:**

| §22575(b) element | Where it's met |
|---|---|
| (1) Categories of personally identifiable information collected, and categories of third parties it may be shared with | §1 What we collect; §5 Who we share data with |
| (2) The review/change process, if one is maintained | §7 Your rights (the route via the contact page) |
| (3) The process for notifying material changes | §9 Changes |
| (4) Effective date | Header |
| (5) Do Not Track response, if cross-site tracking occurs | §3 (conditional: no cross-site tracking at launch, to be verified) |
| (6) Whether other parties may collect cross-site activity data | §3 |

**L2:** WordPress Developer Resources, "Cookies" (Advanced Administration), accessed 2026-10-05. https://developer.wordpress.org/advanced-administration/wordpress/cookies/
- Core WordPress sets **user** cookies on login (`wordpress_[hash]`, `wordpress_logged_in_[hash]`, `wp-settings-*`).
- It sets **commenter** cookies (`comment_author_*`) when a visitor comments.
- It sets a temporary `wordpress_test_cookie` on login.
- **Core sets no cookies for ordinary readers.** Plugins may add their own (to be verified).

**Explicitly not claimed:** GDPR, CCPA/CPRA, COPPA or HIPAA compliance, or "compliant with all privacy laws".
- **CCPA/CPRA applicability:** depends on business thresholds not established here (revenue, volume of consumers' data, sale/sharing). → **Legal review (R-1).**
- **Children:** the site isn't child-directed (the audience is dog owners, per the architecture). No children section is added (not in the spec's H2 list). → **R-2**, if counsel advises one.

---

## D. Data Inventory

### Confirmed now (from locked records)

| Data | Source | Collected when | Required? |
|---|---|---|---|
| Contact reason (one of 4 options) | GD-20 §F field 1 | Form sent | Yes |
| Page address | Field 2 | Form sent | No |
| Message text | Field 3 | Form sent | Yes |
| Email address | Field 4 | Form sent, only if given | No |
| Privacy acknowledgement (checked) | Field 5 | Form sent | Yes |
| **Not collected by the form:** name, phone, address, dog's name or health details, files | GD-20 §F | — | — |
| No user accounts, newsletter, shop or orders | Architecture (editorial site; no commerce operated; GD-18) | — | — |
| No affiliate tracking or ads active at launch | GD-19 O-2 ("None is active at launch") | — | — |
| No third-party CAPTCHA by default; honeypot | GD-20 §F | — | — |

### Must be verified before launch (builder)

| ID | Item | Why |
|---|---|---|
| V-1 | **Which form plugin**, and whether it **stores submissions in the WordPress database**, emails them only, or both | GD-20 B-2 / P-2 |
| V-2 | Whether the plugin records **IP address, user agent, timestamp or referrer** with submissions | P-1 |
| V-3 | Any **cookies** set for ordinary visitors (WordPress core sets none for readers; check Elementor, the form plugin, security or caching plugins, the hosting/CDN) | L2; spec §C |
| V-4 | **Analytics:** installed or not; if installed, which | Spec PC-13 |
| V-5 | **Comments** closed on all Pages (default for this site's model) | L2 commenter cookies |
| V-6 | **Hosting / CDN / security service:** provider name; whether server/access logs are kept, what they contain, and for how long | Spec §B "hosting/CDN" |
| V-7 | **Email provider** receiving form notifications | P-5 |
| V-8 | Anti-spam: honeypot only, or a plugin service that sends data elsewhere | P-6 |

---

## E. Final Copy

> **Fill-in rule:** text in **⟦…⟧** is a **pre-publication fill-in** that the builder or owner completes from §D/§L. Each has a default branch for the expected launch configuration. **Nothing in ⟦…⟧ may publish unverified.** If a check finds something not described here, that section must be rewritten before publishing.
>
> *[Square-bracketed italics]* are builder notes.

*[Breadcrumb: Home › Privacy policy]*

# Privacy policy

**Effective date:** ⟦publish date⟧ · **Last updated:** ⟦publish date⟧

This policy explains what personal information Grooming Dogs (grooming-dogs.com) collects, why, and what you can do about it. It covers this website only.

## What we collect

**Information you choose to send us.** Our [contact form](/contact/) asks for:
- what your message is about (a correction, a question about a guide, a missing topic or a site problem);
- the page you're writing about, if you want to tell us;
- your message;
- your email address, **only if you want a reply**;
- a tick to confirm you've seen this policy.

We don't ask for your name, phone number or address, and we don't accept file uploads. Please don't include health information about yourself, or other personal details we don't need. A question about your dog only needs the grooming detail, not medical records.

**Information collected automatically.**
⟦V-2/V-6, default branch if confirmed: "When you send the form, it also records ⟦the technical details the plugin stores, e.g. the date and time⟧. Like other websites, our hosting provider's servers record ⟦confirmed log fields, e.g. IP address, browser type, the page requested and the time⟧ when pages are loaded, to deliver the site and keep it secure." Remove any item not confirmed. If nothing is logged, say so only if verified.⟧

**What we don't collect.** The site has no user accounts, newsletter, shop or online orders.

## How we use it

We use what you send us to:
- read and review your message, including checking any correction against our sources;
- update a page, if your message shows that something needs changing;
- reply to you, if you gave an email address and a reply is needed;
- keep the form and the site working and secure, for example by filtering spam.

We don't use contact messages for marketing, and we don't sell the information you send us. *[O-3: owner confirms this sentence. It describes current practice: no data sale, no marketing list.]*

## Cookies, analytics and advertising

A cookie is a small file a website stores in your browser.
- **WordPress cookies:** the software that runs this site sets cookies for people who log in to manage the site. Readers don't need to log in, and comments aren't open on our pages, so ordinary visits don't receive those cookies. *[V-5 confirms comments are closed.]*
- **Other cookies:** ⟦V-3, default branch if confirmed: "Ordinary visits don't set any other cookies." Otherwise list each cookie: name, who sets it, purpose, duration.⟧
- **Analytics:** ⟦V-4, default branch if confirmed: "We don't currently use analytics services."⟧
- **Advertising:** we don't currently show advertising. If we add it, we'll update this policy first (see "Changes to this policy").
- **Tracking across other websites:** ⟦V-3/V-4, default branch if confirmed: "We don't track you across other websites, and we don't allow other companies to collect information about your browsing across websites through our site. Because there's no cross-site tracking, our site doesn't change its behavior in response to a browser's 'Do Not Track' signal."⟧

*[H3s are allowed here ONLY if a specific third party (an analytics or ad provider) is added, with its own explanation and a link to its privacy policy.]*

## Affiliate links

Our [editorial, sourcing and disclosure policy](/editorial-policy/#disclosure) explains that some pages may include affiliate links. **At the moment, the site doesn't use affiliate links or affiliate tracking.**

If we add them, clicking an affiliate link would take you to another company's website, and that company may use cookies to record that you came from our site. We'll update this policy before affiliate links go live, and name the companies involved.

*[Builder: this paragraph must be rewritten, and the program named, in the same release as any affiliate activation (GD-19 O-2 / PC-13).]*

## Who we share data with

**We don't sell or rent personal information, and we don't share contact messages with advertisers or affiliate partners.**

Information is handled by the services that run the site for us:
- **Hosting:** our web hosting provider ⟦V-6: provider name⟧, which stores the site and processes page requests.
- **The contact form:** ⟦V-1/V-8: if the plugin or an anti-spam service sends data to an outside company, name it; otherwise "is handled on our own website software"⟧.
- **Email:** the email service that receives form messages ⟦V-7: provider name⟧.

We may also disclose information if the law requires it.

**Links to other websites.** Our guides link to other websites, such as veterinary and animal-welfare organizations. Those sites have their own privacy practices, which we don't control. Following a link doesn't send them the information you gave us.

## How long we keep it

- **Contact messages and email addresses:** ⟦O-2: the owner's retention rule, e.g. "kept for ⟦period⟧ and then deleted" or "deleted once the message has been dealt with"⟧. **No period may be published until the owner sets it.**
- **Server logs:** ⟦V-6: the hosting provider's actual log retention, or remove this item if no logs are kept⟧.

## Your rights

You can ask us:
- what information we hold from messages you've sent;
- to correct it;
- to delete a message you sent.

Send your request through the [contact page](/contact/). If you'd like an answer, include the email address you used, so we can find your message and reply.

Depending on where you live, you may have other rights under privacy laws. *[R-1: legal review of state-specific rights wording.]*

## Contact

For questions about this policy or your information, use our [contact page](/contact/). We don't currently offer a separate privacy email address.

## Changes to this policy

We'll update this policy when the way we handle information changes. For example, that includes adding analytics, advertising or affiliate links, changing the contact form or how long we keep messages, or using a new outside service. When we make a change, we'll update this page and the "Last updated" date at the top. The effective date shows when the current version took effect.

### Page outline

- **H1:** Privacy policy
- **H2:** What we collect
- **H2:** How we use it
- **H2:** Cookies, analytics and advertising
- **H2:** Affiliate links
- **H2:** Who we share data with
- **H2:** How long we keep it
- **H2:** Your rights
- **H2:** Contact
- **H2:** Changes to this policy
- **H3:** none at launch (allowed only per third party)

---

## F. Claim Register

| # | Statement | Basis | Status |
|---|---|---|---|
| 1 | The form's fields; email optional | GD-20 §F | Confirmed |
| 2 | No name, phone, address or uploads collected | GD-20 §F | Confirmed |
| 3 | Please don't send health information | GD-20 §E | Confirmed |
| 4 | No accounts, newsletter, shop or orders | Architecture (editorial site; owner decisions); GD-18 | Confirmed |
| 5 | Purposes: review, correct, reply if email given, security/spam | GD-20 §C/§G (P-3); GD-19 corrections | Confirmed |
| 6 | Not used for marketing; not sold | Current practice; no data-sharing arrangement exists | **Owner confirmation (O-3)** |
| 7 | WordPress cookies only for people who log in; not for readers | L2 | Confirmed (core); **comments closed: V-5** |
| 8 | No other cookies / no analytics / no cross-site tracking / Do Not Track statement | — | **Builder verification (V-3, V-4)** |
| 9 | No advertising currently | Architecture §G (commerce inactive at launch); GD-19 O-2 | Confirmed for launch; update on activation |
| 10 | No affiliate links or tracking currently | GD-19 O-2 | Confirmed for launch; update on activation |
| 11 | Not sold or rented; not shared with advertisers or affiliates | No such arrangement exists | Confirmed (no arrangements); keep in sync with O-3 |
| 12 | Processors: host, form handling, email | GD-20 P-5/P-6 | **Names: V-6, V-7, V-1/V-8** |
| 13 | Legal disclosure possible | Standard; not a commitment to any practice | Editorial |
| 14 | External links have their own policies; following a link doesn't send them form data | Site architecture (editorial source links; no data sharing) | Confirmed |
| 15 | Retention | — | **Owner (O-2)** |
| 16 | Rights route via the contact page; include the email used | GD-20 (the only channel) | Confirmed route; **no timing promised** |
| 17 | No separate privacy email | Architecture §E.2 (no invented email) | Confirmed |
| 18 | Change process: update the page and the "Last updated" date | CalOPPA §22575(b)(3) requires describing the process | Confirmed process (minimal) |

---

## G. Rejected Content

| Item | Reason |
|---|---|
| Google Analytics, Meta Pixel, reCAPTCHA, AdSense, Amazon Associates, or any named service | Not established (spec §C: no boilerplate for unused services) |
| Retention periods (30/90 days etc.) | Owner input (O-2) |
| A privacy email address, postal address, data controller name | None real (architecture §E.2; GD-18) |
| "GDPR/CCPA/COPPA compliant", "fully compliant" | Not established (R-1) |
| California/EU rights templates (sale opt-out, DSAR timelines, etc.) | Applicability unestablished (R-1); over-legalizing |
| "Your data is 100% secure" | Not established; no security claims beyond purpose |
| "We do not use cookies" (absolute) | Only the scoped, verified statements are allowed |
| Children/COPPA section | Not in the spec structure; not child-directed; legal-review item R-2 |
| Health-records processing | GD-20 boundary |
| Named form plugin | Not selected (V-1) |

---

## H. Relationship to GD-20 (form) and GD-19 (commercial)

- **GD-20:** every field in GD-20 §F is described in "What we collect". The GD-20 checkbox label ("I understand how what I send is handled, as described in the privacy policy") and privacy line remain **consistent**: this page describes the handling. **Covers P-1 to P-6:**
  - P-1: §1 / V-2
  - P-2: V-1
  - P-3: §2
  - P-4: O-2
  - P-5: §5 / V-7
  - P-6: §5 / V-8
- **GD-19:** "Affiliate links" and "Cookies, analytics and advertising" state the **current** state (none active) and the **update-before-activation** rule. This matches GD-19 O-2 ("update GD-19 and GD-21 on activation"). It links to `/editorial-policy/#disclosure`.
- **GD-18:** no operator name is given (consistent with the organization statement).

---

## I. Internal Links

| # | Destination | Anchor | Reason |
|---|---|---|---|
| 1 | GD-20 `/contact/` (×3) | contact form / contact page | The form described; the rights and questions route (spec-required) |
| 2 | GD-19 `/editorial-policy/#disclosure` | editorial, sourcing and disclosure policy | The commercial model behind the affiliate section (addition) |

**Not linked:** GD-18 (no user reason).

**Incoming:** footer, the GD-20 form (privacy line and checkbox), GD-19 Next card, and any future cookie notice.

---

## J. SEO / Schema

| Field | Value |
|---|---|
| SEO title | Privacy Policy, Grooming Dogs (**29** characters) |
| Meta description | What personal information Grooming Dogs collects, mainly through its contact form, how it's used and shared, how long it's kept, and how to ask about it. (**153** characters) |
| Canonical | `https://grooming-dogs.com/privacy-policy/` |
| H1 | Privacy policy (one) |
| Schema | Rank Math **WebPage** only. No Organization details, Person, LocalBusiness, Product or Review. |
| Indexability | index, follow (spec default; noindex allowed if the owner prefers) |
| Breadcrumb | Home › Privacy policy |
| WordPress setting | Settings › Privacy › select this page as the privacy policy page |

---

## K. Elementor Build (Elementor Free only)

**Template:** F7 site-page.

**Widgets used:** Shortcode (breadcrumb), Heading, Text Editor, Icon List. **No TOC (Pro), no Form, no Image, no ads, no badges.**

**Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Header | Shortcode (breadcrumb) · **H1** · Text Editor (effective / last-updated dates; intro) |
| 2–10 | Nine sections | **H2** each (CSS IDs `collect`, `use`, `cookies`, `affiliate-links`, `sharing`, `retention`, `rights`, `contact`, `changes`) · Text Editor / Icon List |

**No Next cards** (the spec's F7 structure lists none for GD-21).

**Confirmed:** Elementor Free compatible.

---

## L. Dependencies

| # | Item | Category | Blocking? |
|---|---|---|---|
| O-1 | Contact-form inbox (GD-20 O-1) | **Owner decision** | Blocks the form going live. Not shown on this page. |
| O-2 | **Message retention period** | **Owner decision** | **Blocks publication of GD-21** (the "How long we keep it" fill-in) |
| O-3 | Confirm "not used for marketing; not sold" | **Owner decision** | Blocks publication of that sentence (remove it if not confirmed) |
| O-4 | Reply commitment | Owner decision (optional) | Non-blocking (none stated) |
| O-5 | Affiliate / ad programs when activated | Owner decision (future) | Non-blocking now. **GD-19 and GD-21 updated together on activation.** |
| V-1 | Form plugin chosen; storage behavior | **Builder verification** | Blocks publication (affects §1, §5, §6) |
| V-2 | Plugin technical fields (IP, user agent, timestamp) | **Builder verification** | Blocks publication (§1) |
| V-3 | Cookies on ordinary visits (Elementor, plugins, host/CDN) | **Builder verification** | Blocks publication (§3) |
| V-4 | Analytics present or not | **Builder verification** | Blocks publication (§3) |
| V-5 | Comments closed on Pages | **Builder verification** | Blocks publication (§3 sentence) |
| V-6 | Host / CDN / security service; server logs and their retention | **Builder verification** | Blocks publication (§1, §5, §6) |
| V-7 | Email provider for form notifications | **Builder verification** | Blocks publication (§5) |
| V-8 | Anti-spam: honeypot only, or an outside service | **Builder verification** | Blocks publication (§5) |
| R-1 | Legal review: CCPA/CPRA and other state-law applicability; rights wording | Legal review (recommended) | Non-blocking for drafting; owner's call before launch |
| R-2 | Whether counsel wants a children's statement | Legal review | Non-blocking |
| S-1 | **Future sync:** any new analytics, ads, affiliate tracking, form plugin or outside processor → update GD-21 (and GD-19 for commercial items) **before** activation, and change "Last updated" | Future synchronization | Non-blocking now |

**Production vs publication:** the page is fully drafted, with every implementation-dependent statement isolated in a verifiable fill-in. **Publication requires O-2, O-3 and V-1 to V-8.** These are owner and builder items, not architecture gaps.

---

## QA

**Accuracy:**
- [x] No invented email, retention period, plugin, analytics, ad network, affiliate program, compliance claim or company details.

**Consistency:**
- [x] Matches GD-18 (no operator name), GD-19 (none active; sync rule; `#disclosure`) and GD-20 (fields, optional email, honeypot, no health data, contact route).
- [x] Matches the architecture (no ads on GD-21).

**Form:**
- [x] All GD-20 fields and P-1 to P-6 mapped.

**Legal:**
- [x] CalOPPA §22575(b) elements mapped (§C).
- [x] No compliance claims.

**Elementor:**
- [x] Free widgets only.

**SEO:**
- [x] One H1; title 29; meta description 153; canonical correct; WebPage schema.

**Structure:**
- [x] 9 H2s in spec order; no H3s at launch; no FAQ, images or byline.

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**

---

## Final resolution of fill-ins (owner decisions + build verification, 2026-10-05)

The GD-21 build input (`BUILD/content/GD-21.md`) is this record's §E copy with the ⟦…⟧ fill-ins replaced as listed below. **No ⟦…⟧ remains.** The effective and last-updated date is set to the publication date at deployment.

| Fill-in | Basis | Final page wording (summary; exact text in the build input) |
|---|---|---|
| V-1 / V-2 (form) | Build verification: WPForms Lite form 88; database checked after a test submission | The form doesn't record your IP address or other technical details, and doesn't save messages on our website |
| V-6 (log fields) | Hostinger support article "How to use the analytics section" (access logs: time, IP address, request, device/browser from user-agent, country by IP, size, response time) | Hostinger automatically records each request in its server and CDN logs, including those fields, to deliver the site and keep it secure |
| V-3 | Anonymous page load: no Set-Cookie; WPForms, Elementor and HFE front ends set none | Ordinary visits don't set any other cookies |
| V-4 | Site Kit deactivated; WPForms analytics off (mu-plugin) | We don't currently use analytics services |
| V-3/V-4 (cross-site / DNT) | No third-party embeds; fonts and images self-hosted | No cross-site tracking; "Do Not Track" statement |
| V-5 | 22 pages comment_status closed; site default closed | Comments aren't open on our pages |
| V-6 (host) | `platform: hostinger`, `Server: hcdn` headers | Hostinger, including its CDN |
| V-1 / V-8 | No outside service; honeypot and anti-spam token run on the site | The contact form is handled on our own website software |
| V-7 (email) | PHP mail via `/usr/sbin/hsendmail` (Hostinger); `~/.logs/mail.log` records the recipient and all headers incl. Reply-To and Subject, not bodies. **Owner decision: keep the visitor's email as Reply-To.** | Messages go to our inbox through Hostinger's mail system; a visitor's email is the reply-to address and so appears in the headers and in Hostinger's mail logs (not the message itself); the email service hosting our inbox also receives the message. *(The inbox provider's name is added once the owner supplies the inbox. Category disclosure meets §22575(b)(1).)* |
| O-2 | **Owner decision: 30 days** | We keep messages, including the email address, for 30 days and then delete them |
| V-6 (log retention) | **Owner decision:** no invented period. Hostinger's documentation states none. | Hostinger decides how long its server/CDN logs and mail logs are kept; we don't control that period, and the exact period isn't documented in the information currently available to us |
| O-3 | **Owner confirmed** | Not used for marketing; not sold |

**Consistency with GD-20 (checked):**
- The form fields match GD-20 §F.
- "If you include an email address, we may reply" matches the reply-to disclosure.
- The privacy line and checkbox link to this page.
- The request not to send health or unnecessary personal details matches.
