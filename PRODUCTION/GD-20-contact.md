# GD-20 — Production Record: Contact and corrections

**Blueprint:** `AUDIT_OUTPUT/GROOMING-DOGS-PAGE-PRODUCTION-SPEC.v1-2026-10-05.md` §4 GD-20
**Upstream authorities (locked):** `PRODUCTION/GD-18-about.md` (closed 2026-10-05, PRODUCTION-READY WITH VERIFIED EXCEPTIONS); `PRODUCTION/GD-19-editorial-policy.md` (PRODUCTION-READY WITH VERIFIED EXCEPTIONS)
**Produced:** 2026-10-05

---

## A. Production Identity

| Field | Value |
|---|---|
| Page ID | GD-20 |
| Title | Contact and corrections |
| Canonical URL | `https://grooming-dogs.com/contact/` (RETAIN with new content; architecture §F.2) |
| Page type | WordPress Page, top level; footer "Site" group (architecture §E.2) |
| Page role | **Utility / trust:** the single channel for corrections, questions about a guide, topic suggestions and site problems. It also states what the channel can't do. |
| Status | **PRODUCTION-READY WITH VERIFIED EXCEPTIONS** |

---

## B. Architecture Authority

| Source | Fixes |
|---|---|
| Architecture (final) §B, §D | GD-20 `/contact/` "Contact & corrections"; owns "Contact / corrections" |
| Architecture §E.2 | Footer: "**Never:** invented address, phone, email or social profiles" |
| Architecture §G | **No ads on GD-18 to GD-21**; groomer lead-gen, directories, booking and "Appointment" CTAs not authorized |
| Architecture §H "Do not carry forward" | Legacy `petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03` must **not** appear |
| Architecture §K | "The GD-20 form uses Elementor Pro Form or a form plugin, covered by GD-21"; OD-L "free Elementor + UAE/HFE" if no Pro licence |
| Spec §4 GD-20 | H1 "Contact and corrections"; **3 H2s** (What you can contact us about · What we can't help with · Send a message); no H3s; short; no FAQ; no images; no byline; **form fields** (message type; message, required; optional email; page URL, optional or auto-filled; consent and privacy line → GD-21); outgoing links GD-21 and GD-19; ContactPage schema; SEO title and meta |
| Spec PC-12 | Owner input: **form destination, data retention, response commitment**. Default: **no response-time promise**. |
| GD-18 | Organization byline only; no named people; "send a correction" links here |
| GD-19 | Corrections section: "send a correction" with page, issue and source; **no handling commitment** (O-1); no ads on the contact page; vet boundary |

**Role confirmed** from the spec, not from the page number. **No conflicts.**

**Platform constraint (not a conflict):** Elementor Free has **no Form widget** (the Form widget is part of Elementor Pro). The spec explicitly allows "a form plugin (if no Pro licence)", so the form is a **form plugin embedded through Elementor's Shortcode widget** (§F).

---

## C. User Task

- **Primary:** report an error, ask a question about a page, or suggest a missing topic.
- **Secondary:** report a site problem (broken link, accessibility issue).
- **Outcome:** the visitor knows within seconds what this channel is for and what it isn't (no bookings, no vet advice, no groomer recommendations), what to include in a useful report, and that a reply is possible only if they give an email address. **No reply is promised.**

---

## D. Ownership

**GD-20 owns:** "How do I contact Grooming Dogs / send a correction?"

**GD-20 does not own:**

| Topic | Owner | Treatment |
|---|---|---|
| How corrections are handled; sourcing; disclosure | **GD-19** | Link. **No policy duplicated.** |
| What the site is; who runs it | GD-18 | Not repeated (no user reason to link from here; GD-18 links in) |
| What happens to submitted data | **GD-21** | Privacy line plus link. Wording synchronized at GD-21 production (§I). |
| Finding or choosing a groomer | GD-15 | One link from "What we can't help with" (gives booking-seekers the real next step) |
| Health concerns | Owner's vet | Referral sentence; no emergency instructions (not in spec) |

---

## E. Final Content

**Structure:**
- H1, plus 3 H2s, no H3s.
- No FAQ, no images, no byline, no ads.
- No contact details of any kind.

> *[Square-bracketed italics]* are builder notes.

*[Breadcrumb: Home › Contact]*

# Contact and corrections

Use this page to tell us about a mistake, ask a question about one of our guides, suggest a topic we haven't covered, or report a problem with the site.

## What you can contact us about

- **A correction:** something in a guide looks wrong, out of date or misleading, or a source doesn't support what the page says.
- **A question about a guide:** something on a page isn't clear.
- **A missing topic:** a grooming question you couldn't find an answer to.
- **A site problem:** a broken link, something that doesn't work, or something hard to use or read, including accessibility problems.

**For corrections, it helps to include:**
- the page;
- the sentence or section you mean;
- what you think is wrong;
- if you have one, a source we can check.

How we approach corrections is explained in our [editorial, sourcing and disclosure policy](/editorial-policy/#corrections).

## What we can't help with

- **Booking grooming:** we aren't a grooming business. We can't book appointments, groom your dog, or recommend or list individual groomers. Our guide to [choosing a groomer](/choosing-a-dog-groomer/) explains what to look for.
- **Veterinary advice:** we can't diagnose problems or advise on treatment, medication or supplements for your dog. If you're worried about your dog's health, contact your vet.
- **Products:** we can't answer questions about orders, deliveries or returns for products sold by other businesses.

Please don't include health details about yourself, or personal information you don't need to share.

## Send a message

*[Shortcode widget: form plugin form, §F]*

If you include an email address, we may reply. If you leave it out, we won't be able to.

*[Privacy line, directly under the form]* What you send through this form is handled as described in our [privacy policy](/privacy-policy/).

*[Builder: PC-12 / GD-21. Do NOT add a response time, a promise that every message will be answered or acted on, a retention period, or a destination email address on the page.]*

### Page outline

- **H1:** Contact and corrections
- **H2:** What you can contact us about
- **H2:** What we can't help with
- **H2:** Send a message

---

## F. Form Specification (Elementor Free + form plugin)

**Implementation:**
- **Plugin:** a free WordPress form plugin (builder's choice, e.g. Contact Form 7 or WPForms Lite), embedded with Elementor's **Shortcode** widget.
- **Styling:** if UAE is installed (OD-L), its form-styler widget for that plugin may be used to apply Kit styles. Otherwise, style through the Kit and plugin settings.
- **No Elementor Pro Form widget.**
- **Builder check before choosing:** whether the chosen plugin stores submissions in the database, or only emails them. That decides what GD-21 must say (§I). **Not assumed here.**

| # | Field | Type | Required | Options / settings | Justification |
|---|---|---|---|---|---|
| 1 | What is this about? | Dropdown | **Yes** | "A correction or source problem" · "A question about a guide" · "A missing topic" · "A site problem (broken link, accessibility, something not working)" | Spec field "message type" (correction / missing topic / question / site issue). Labels are expanded to cover sources and accessibility without adding options. |
| 2 | Which page? | URL or text field | No | Placeholder "Paste the page address, if it's about a page". **Optional auto-fill:** pre-fill from a `?page=` URL parameter if the plugin supports it (future enhancement; non-blocking). | Spec "page URL (optional or auto-filled)" |
| 3 | Your message | Textarea | **Yes** | Help text: "For corrections, tell us the sentence or section, what's wrong, and a source if you have one." Max length per plugin default. | Spec "message (required)" |
| 4 | Your email (optional) | Email | **No** | Help text: "Only if you'd like a reply." | Spec "optional email". Data minimization: no reply without it. |
| 5 | Privacy acknowledgement | Checkbox | **Yes** | Label: "I understand how what I send is handled, as described in the privacy policy." (links to `/privacy-policy/`) | Spec "consent and privacy line (→ GD-21)". **Final label must be synchronized with GD-21** (§I). |
| — | Anti-spam | Honeypot and/or the plugin's built-in spam protection | — | No third-party CAPTCHA unless GD-21 discloses it | Spam control without undisclosed third-party processing |
| — | Submit button | Button | — | Label "Send message" | — |
| — | Confirmation message | Plugin setting | — | "Thanks, your message has been sent." **No promise of a reply or timing.** | PC-12 |

**Not collected:** name (not needed; optional email suffices), phone, address, dog or health details, file uploads.

**Destination:** submissions are emailed to an **owner-designated inbox (O-1)**. The address is configured in the plugin **only** and **never shown on the page.**

---

## G. Evidence Register

All statements are first-party policy or the page's own function. No external sources are needed (spec §J: "First-party (owner)"). Access date for project files: 2026-10-05.

| # | Statement | Basis | Type |
|---|---|---|---|
| 1 | Channel for corrections, guide questions, missing topics and site problems | Spec GD-20 §A primary task and form "message type" | Spec |
| 2 | Useful correction contents (page, section, issue, source) | GD-19 "Corrections and updates" (same list) | Locked upstream |
| 3 | Corrections approach is in GD-19 | Spec §D redirect; GD-19 `#corrections` | Spec |
| 4 | Not a grooming business; no bookings, grooming or groomer recommendations | Architecture owner decision 1 (lead-gen, directories and booking not authorized; "No service exists"); GD-18 | Owner decision |
| 5 | No veterinary advice; contact your vet | GD-19 health boundary; spec §I | Locked upstream |
| 6 | No product order/delivery support | Architecture §G (no commerce operated by the site; affiliate links point to other businesses, GD-19) | Owner decision plus GD-19 |
| 7 | "If you include an email, we may reply; without it, we can't" | Form design (email optional); PC-12 default (no promise) | Factual about the form |
| 8 | Data handling per the privacy policy | Spec privacy line → GD-21 | Spec (GD-21 dependency) |

**No external research performed.** None of the statements requires it.

---

## H. Rejected Content

| Item | Reason |
|---|---|
| Address, phone, email, social profiles, map | Architecture §E.2 "Never"; none supplied |
| Legacy `petcute@mail.com`, `021-25400-8900`, `Jl Soekarno-hatta 03` | §H "Do not carry forward" |
| "We'll reply within X" / "Our team reads every message" / "We fix every error" | PC-12; owner prompt; **no named team exists** |
| "Book an appointment", groomer referrals, lead forms | Not authorized (§G) |
| Ask-a-vet framing, emergency instructions | Spec scope (no vet advice; emergency text not specified) |
| Name, phone or dog-detail fields | Data minimization |
| Third-party CAPTCHA by default | Would need GD-21 disclosure; honeypot first |
| FAQ, byline, images, ads | Spec §H, §L, §N, §O |
| Repeating the GD-19 corrections policy | Duplication; link instead |

---

## I. Privacy Dependency (GD-21 synchronization)

GD-21 must be produced to match this form exactly. **Items GD-21 must cover:**

| # | Item | Source of truth |
|---|---|---|
| P-1 | Which data the form collects: message type, page URL, message, optional email, checkbox state; plus any technical data the plugin records (IP address, user agent, timestamp) | **Builder:** confirm in the chosen plugin's settings |
| P-2 | Whether submissions are stored in the WordPress database, only emailed, or both | **Builder** (plugin behavior) |
| P-3 | Purpose: reviewing the message and, if an email was given, possibly replying | This record |
| P-4 | Retention period | **Owner input (PC-12)** |
| P-5 | Who receives submissions (the owner-designated inbox; email provider) | **Owner input** |
| P-6 | Anti-spam services, if any third-party one is used | **Builder** |

**After GD-21:** re-check the checkbox label (§F row 5) and the privacy line (§E) against GD-21's wording. **If GD-21 says anything different, GD-20 adapts its two lines. GD-20 must never contradict GD-21.**

---

## J. Internal Links

| # | Destination | Anchor | Reason | Ownership |
|---|---|---|---|---|
| 1 | GD-19 `/editorial-policy/#corrections` | editorial, sourcing and disclosure policy | How corrections are approached | Spec-required (corrections process) |
| 2 | GD-15 `/choosing-a-dog-groomer/` | choosing a groomer | Booking-seekers get the real next step | GD-15 owns groomer choice (addition) |
| 3 | GD-21 `/privacy-policy/` | privacy policy (privacy line, checkbox label) | Data handling | Spec-required |

**Not linked:** GD-18 (no user reason; GD-18 and GD-19 link here).

**Anchor dependency:** `#corrections` exists in the GD-19 build record (H2 CSS ID `corrections`).

**Launch dependency:** GD-21 not yet produced.

---

## K. SEO / Schema

| Field | Value |
|---|---|
| SEO title | Contact and Corrections, Grooming Dogs (**38** characters) |
| Meta description | Send a correction, a question about a guide, or a topic suggestion to Grooming Dogs. We can't book grooming appointments or give veterinary advice. (**147** characters) |
| Canonical | `https://grooming-dogs.com/contact/` |
| H1 | Contact and corrections (exactly one) |
| Schema | Rank Math **ContactPage** (WebPage subtype) only. **No Organization contactPoint, email, telephone or address** (none real). No Person, LocalBusiness, FAQPage or Product. |
| Indexability | index, follow |
| Breadcrumb | Home › Contact |

---

## L. Elementor Build (Elementor Free only)

**Template:** F7 site-page.

**Widgets used:** Shortcode (breadcrumb), Heading, Text Editor, Icon List, **Shortcode (form plugin)**. Optionally the UAE form-styler widget, if UAE is installed. **No Elementor Pro Form, no Image, no Accordion, no ad slots, no Button CTA.**

**Styling:** Kit global styles only.

| # | Container | Contents |
|---|---|---|
| 1 | Header | Shortcode (Rank Math breadcrumb) · **H1** · Text Editor (intro, 1 sentence) |
| 2 | Contact about | **H2** · Icon List (4) · Text Editor ("it helps to include" + Icon List (4) + GD-19 link) |
| 3 | Can't help | **H2** · Icon List (3) · Text Editor (personal-data sentence) |
| 4 | Form | **H2** · Shortcode widget (form) · Text Editor (reply sentence) · Text Editor (privacy line) |

**Mobile:** single column; form fields full width.

**Accessibility:** each field has a visible label (not placeholder-only); required fields marked in text; the dropdown has a default "Choose one" that fails validation; confirmation and error messages are announced by the plugin (check at build).

**No visual assets.**

**Confirmed:** Elementor Free compatible (the form via plugin and Shortcode, as the spec allows).

---

## M. Dependencies / Exceptions

| # | Item | Category | Blocking? | Action |
|---|---|---|---|---|
| O-1 | **Form destination inbox** (where submissions go) | **Owner input required** (PC-12) | **Blocks go-live of the form, not page production** | Owner supplies an inbox. The builder configures it in the plugin only. |
| O-2 | **Data retention** for submissions | **Owner input required** (PC-12) | Non-blocking for GD-20 copy (not stated on the page). **Required for GD-21.** | Owner decides; GD-21 states it |
| O-3 | Response commitment | Owner input (optional) | Non-blocking. The default is no promise. | Only if the owner will keep it |
| B-1 | Choose and install a free form plugin; configure fields per §F; anti-spam; confirmation text; test submission | **Builder configuration required** | Non-blocking for production; required before launch | Build phase |
| B-2 | Confirm the plugin's storage and technical-data behavior (P-1, P-2, P-6) | **Builder configuration required** | Feeds GD-21 | Build phase, before GD-21 is finalized |
| G-1 | Privacy line and checkbox label synchronized with GD-21; `/privacy-policy/` must be live | **GD-21 dependency** | Launch dependency | Produce GD-21 (next task) |
| F-1 | Auto-fill the page URL via a `?page=` parameter from guide links | **Non-blocking future improvement** | No | Optional |

---

## QA Gates

**Content:**
- [x] One H1.
- [x] Section order matches the spec (3 H2s).
- [x] No invented people or contact details.
- [x] No unsupported claims, commercial content or veterinary advice.
- [x] No response-time promise.
- [x] Consistent with GD-18 (no team, not a salon) and GD-19 (corrections fields, no ads, vet boundary).

**Form:**
- [x] Fields limited to the spec list; email optional; no name, phone or health data.
- [x] Privacy dependency recorded (§I).
- [x] Elementor Free respected (plugin plus Shortcode).

**Trust:**
- [x] Corrections route matches GD-19.
- [x] No "vet-reviewed", "vet-approved", "independent", "no affiliates" or "no ads".

**SEO:**
- [x] Title 38 (≤60); meta description 147 (≤160); canonical `/contact/`; ContactPage schema.

**Production:**
- [x] Builder-executable form spec.
- [x] No visual assets, no placeholders.
- [x] Architecture not reopened.

---

## FINAL STATUS

**PRODUCTION-READY WITH VERIFIED EXCEPTIONS**
