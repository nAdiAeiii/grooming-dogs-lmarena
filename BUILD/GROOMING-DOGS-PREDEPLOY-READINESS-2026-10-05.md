# Grooming-Dogs.com — Pre-deployment readiness (2026-10-05)

**Scope:** read-only checks to close factual and configuration blockers.

**Nothing was changed in this pass:**
- no publishing, redirects, homepage switch, site-wide header/footer, design or content changes;
- no plugin state changes.

---

## A. Confirmed facts

### Server and access logs (Hostinger)
- **Access logs (website requests)** are produced by Hostinger at server/CDN level. They are **not exposed in the account over SSH**; they're viewable in hPanel › Analytics › Access logs. Per Hostinger's support article ("How to use the analytics section", updated about 3 weeks before 2026-10-05), each entry records:
  - **time**;
  - **visitor IP address**;
  - **request** (method and resource);
  - **device/browser** (from the User-Agent header);
  - **country** (IP geolocation);
  - **size**;
  - **response time**.

  The dashboard filter goes back up to **7 days**. **The storage retention period is not documented.** Source: https://www.hostinger.com/support/5650167-how-to-use-the-analytics-section-on-hostinger-dashboard-at-hostinger/
- **Who controls them:** Hostinger (web server and CDN "hcdn"). The site can't configure or shorten them.
- **PHP error log:** `~/.logs/error_log_grooming-dogs_com`, about 1,150 lines, PHP warnings only. **0 IP addresses**, no visitor user agents. Rotated by Hostinger into gzipped archives; the account holds error-log archives back to 2026-04-18. Retention isn't configured by the site and isn't documented.
- **Mail log:** `~/.logs/mail.log` is shared across every site on the account. For each PHP `mail()` call it logs:
  - the timestamp;
  - the sending script path;
  - the **recipient (To)**;
  - **all headers, including Reply-To and Subject**.

  It does **not** log message bodies. Rotated archives go back to 2026-05-25, and retention is undocumented.

### Email delivery path (for the contact form)
- WordPress sends mail through PHP `mail()` → `/usr/sbin/hsendmail`, which is Hostinger's mail system.
- The From address will be `wordpress@grooming-dogs.com`.
- DNS: SPF is `v=spf1 include:_spf.mail.hostinger.com ~all`; DMARC is `p=none`; MX is mx1/mx2.hostinger.com.
- **The provider of the receiving inbox depends on the address the owner supplies.**
- **Privacy implication:** the form's notification currently sets **Reply-To = the visitor's email field**. If a visitor gives an email address, it will be recorded in the account-wide mail.log. Message content won't be.

### WPForms analytics / site plugin
`wp-content/mu-plugins/gd-site-rules.php` is 45 lines with exactly two filters:
1. `wpforms_analytics_is_enabled` → false (turns off WPForms 2.x form analytics);
2. `rank_math/json_ld` → removes Person nodes, sets the `author` to the Organization `@id`, and sets AboutPage on GD-18 and ContactPage on GD-20.

It contains **no** external requests, scripts, output or content filters. It doesn't change page content or architecture, and it's documented in the build report.

---

## B. Remaining owner inputs

1. **Contact-form inbox address.**
2. **Contact-message retention period** (exact value).
3. **Optional decision: Reply-To.** Keep the visitor's email as the Reply-To, which allows one-click replies but means the address is logged in Hostinger's mail.log and must be disclosed. Or remove it, so the email appears only in the message body and isn't logged in headers.
4. **Server-log retention:** Hostinger doesn't document it. Either ask Hostinger support, or approve wording that states it's set by the host (see D).
5. KEEP/DEACTIVATE decisions for `hostinger` and `fileorganizer` (E, F).

## C. Remaining builder actions

1. Configure the WPForms notification to the supplied inbox, applying the Reply-To decision.
2. Send a real test, confirm delivery, and re-check the database (expected: nothing stored).
3. Record the receiving inbox provider.
4. Fill GD-21 V-7 (email), O-2 (retention) and V-6 (server logs), then rebuild GD-21 and confirm 0 fill-ins remain.
5. **Optional, needs approval:** the tab-stop fix (G).
6. Run the deployment checklist (H).

## D. Privacy-policy facts now confirmed

| GD-21 item | Status | Wording basis |
|---|---|---|
| Form fields, no name/phone/uploads | Confirmed | GD-20 / form 88 |
| Messages not stored on the site; no IP or user agent recorded by the form | Confirmed (database checked after a test submission) | WPForms Lite has no entries table; Lite Connect off |
| Spam filtering on our own site | Confirmed | Honeypot and anti-spam token; no third party |
| No cookies on ordinary visits | Confirmed (anonymous load) | Re-check on published pages |
| No analytics; no cross-site tracking | Confirmed | Site Kit off; WPForms analytics off; fonts and images self-hosted |
| Comments closed | Confirmed | 22 pages closed; site default closed |
| Hosting | Confirmed | Hostinger, including its CDN |
| **Server logs: what's recorded** | **Confirmed (Hostinger documentation)** | IP address, time, requested page, browser/device, country, size, response time |
| **Server logs: retention** | **UNKNOWN** | Not documented, not configurable by the site |
| **Email sending path** | Confirmed | Hostinger's mail system; recipient and headers (including Reply-To) logged, no bodies |
| **Receiving inbox provider** | Pending | Depends on the inbox address |
| **Message retention** | Pending | Owner value |
| Not used for marketing, not sold | Confirmed by the owner | — |

## E. `hostinger` (Hostinger Tools 3.0.78) — recommendation: **KEEP**

- **What it does:** Hostinger's hosting-integration plugin, which links the site to hPanel. Optional features: maintenance/"coming soon" mode, `llms.txt` generator, force HTTPS/www, XML-RPC and password toggles, AI/MCP opt-in. **All are currently OFF** (`hostinger_tools` option); `llms.txt` returns 404 and no head link is output.
- **Dependencies:** none in the 22-page build. The only match in page data is the privacy policy text naming Hostinger as the host.
- **Privacy:** no visitor-facing output while its features are off. Outbound calls go only to Hostinger APIs (`rest-hosting.hostinger.com`, `wh-wordpress-proxy-api.hostinger.io`) with the site's API token and domain, not visitor data. One logged-out AJAX endpoint, which is the standard bundled Action Scheduler async runner.
- **Why keep:** it's the host's own management plugin and adds nothing to visitor pages. **Condition:** keep its features off. If maintenance mode or `llms.txt` is ever switched on in hPanel, check GD-21 again.

## F. `fileorganizer` (FileOrganizer 1.2.2, Softaculous) — recommendation: **DEACTIVATE**

- **What it does:** an admin-only file manager for browsing and editing the site's files in wp-admin.
- **Dependencies:** none.
- **Privacy:** no front-end hooks, no logged-out AJAX, no REST routes; everything is behind `manage_options`. Its admin pages contain promotional links, and it references Google Drive (a Pro feature).
- **Why deactivate:** the build doesn't use it, and a file editor inside wp-admin is unnecessary attack surface. File management is available over SSH and hPanel. (Deactivate only; don't delete without approval.)

## G. Navigation accessibility finding

- **Finding: a real, minor defect.** Each parent item ("Start here", "Grooming tasks", "Your dog", "Tools & groomers") is output by the HFE menu walker as `<div class="hfe-has-submenu-container" tabindex="0" role="button" aria-haspopup="true" aria-expanded>`, which **wraps** `<a href="#" aria-haspopup="true" aria-expanded>`. Both are focusable, both have the same name, and Enter on either opens the same submenu.
- **Effect:**
  - two consecutive tab stops for one control;
  - nested interactive elements (a link inside a button);
  - a screen reader announces "Start here, button" and then "Start here, link" to a dead `#`.

  It isn't a blocker: everything stays reachable and works.
- **Smallest fix (not applied; needs approval):** about 6 lines added to `gd-site-rules.php`, using the walker's `walker_nav_menu_start_el` filter. For top-level items with children whose URL is `#`, add `tabindex="-1"` to the inner `<a>`. The `div[role=button]` stays the single keyboard stop. Mouse behavior, visuals, menu structure and design are unchanged. No JavaScript.

## H. Exact final deployment checklist

**Owner inputs and GD-21:**
1. Owner supplies the inbox, the retention period and the Reply-To decision. Owner decides on V-6 wording, or Hostinger support gives the log retention.
2. Configure the WPForms notification. Send a real test, confirm delivery, and confirm the database still holds no message. Record the inbox provider.
3. Update the GD-21 build input with the confirmed facts (V-6, V-7, O-2). Rebuild GD-21 and run `qa.py`: **0 fill-ins, 0 issues** apart from the schema checks that need published pages.

**Optional (approved items only):**
4. Apply the tab-stop fix if approved. Deactivate `fileorganizer` if approved.

**Publication:**
5. Set the "Updated / Effective" date token to the publication date, then rebuild and redeploy (`wp_build.php`).
6. Back up the database again.
7. Publish the 22 pages.
8. Settings › Reading: static front page = ID 38; no posts page.
9. Trash the "Hello world!" post and the "Elementor #7" draft.
10. Switch the HFE header (80) and footer (82) to Entire Website.
11. Activate the 11 redirects (`/pricing/` 301 together with GD-16).
12. Flush rewrites, regenerate the Rank Math sitemap, then purge the LiteSpeed cache and the CDN.

**Post-publish checks (anonymous, logged out):**
13. All 22 URLs return 200 with the correct canonical and the single H1.
14. Schema graph: Organization, WebSite, Article on GD-01 to 17, AboutPage, ContactPage, one FAQPage per FAQ page, no Person.
15. No cookies set.
16. The 11 redirects return the expected 301/410 with no chains or loops.
17. The sitemap contains exactly the 22 pages.
18. The contact form delivers.
19. Responsive spot-check at 1366/820/390.

**Close-out:**
20. Expire the temporary admin preview cookie (log out all sessions: `wp user session destroy 1 --all`).

---

## Update: owner decisions applied (2026-10-05, later pass)

| Item | Result |
|---|---|
| Retention | **30 days** (owner) is in GD-21 |
| Reply-To | **Kept** (owner). GD-21 discloses that the address is used as reply-to, appears in the headers and is logged by Hostinger's mail system (not the message body). |
| Access-log retention | Wording per owner: Hostinger records it, the site doesn't control it, Hostinger decides, the period isn't documented. **No authoritative Hostinger retention source was found.** |
| GD-21 | Rebuilt (page 3 only). **0 fill-ins, 0 builder notes**, 9 H2s. All 13 required facts verified on the rendered draft; consistent with GD-20. Final resolutions are recorded in the GD-21 production record addendum. |
| `hostinger` | Kept active, unchanged |
| `fileorganizer` | **Deactivated** (files kept). All 22 pages render normally afterwards, with QA unchanged: no dependency. |
| Keyboard nav | Fix applied in `gd-site-rules.php` v1.1.0 (`walker_nav_menu_start_el` adds `tabindex="-1"` to the 4 inner `#` links). Retest: one tab stop per parent (`div[role=button]`), visible focus, Enter opens the submenu, Tab moves into it. Visuals unchanged. |
| Contact-form delivery | **OWNER-BLOCKED: inbox not yet supplied.** Notifications stay off. |
| Site state | 22 drafts; homepage setting unchanged (`show_on_front=posts`); 11 redirects inactive; header and footer still targeted to the 22 pages |

---

## Update: inbox and admin email (2026-10-05)

| Item | Result |
|---|---|
| Inboxes (owner, hPanel, Hostinger Email) | `contact@grooming-dogs.com` (contact form) and `admin@grooming-dogs.com` (WordPress admin). No forwarding to personal addresses. The site is to be sold, so both addresses stay with the domain. |
| Email DNS | MX mx1/mx2.hostinger.com; SPF `include:_spf.mail.hostinger.com ~all`; **DKIM on** (hostingermail-a/b/c CNAMEs); DMARC `p=none` |
| WPForms form 88 | Notifications ON. To contact@; From "Grooming Dogs" <wordpress@grooming-dogs.com>; Reply-To = field 4 (visitor email); body `{all_fields}` (`wp_form.php`) |
| Test submission | Token `GD-TEST-204416`, 17:14 UTC. The confirmation was shown. `mail.log` shows To contact@, the From and Reply-To above, and the subject "Grooming Dogs contact form". **Owner to confirm receipt in Webmail.** |
| Storage | Token not found in options, postmeta or posts; no entries table. Nothing is stored. |
| Personal email removed | `admin_email` and user 1 set to admin@grooming-dogs.com (`--skip-email`). **0 gmail.com matches** in options, postmeta, posts, usermeta and users. (Older backups in `~/backups/grooming-dogs/` still contain it.) |
| GD-21 | No change needed. The email provider is Hostinger, which is already named as the host. The email wording is category-based. |
| Backup | `db-20261005-171306-pre-email.sql.gz` |

**Remaining before deployment:** the owner confirms the test email arrived, then gives explicit authorization to publish (checklist H).

---

## DEPLOYED (2026-10-05, owner authorization: «پیام رسید»، «اجازهٔ انتشار می‌دهم»)

**Pre-deployment checks:**
- The owner confirmed the test email (`GD-TEST-204416`) arrived in contact@.
- Dates: "Updated" on the pages and GD-21's effective date are October 5, 2026, the publication date.
- `blog_public=1`; permalinks `/%postname%/`; Hostinger maintenance mode off.

**Backups:**
- `db-20261005-172630-pre-deploy.sql.gz`, taken before deployment.
- `db-20261005-173628-pre-schema-fix.sql.gz`, plus `gd-site-rules-1.1.0-*.php`, taken before the schema fix.

| Step | Result |
|---|---|
| 7. Publish | 22/22 launch pages published (`wp_deploy.php`) |
| 8. Front page | `show_on_front=page`, `page_on_front=38`, no posts page |
| 9. Cleanup | "Hello world!" (1) and "Elementor #7" (7) in Trash (restorable) |
| 10. Shell | HFE header 80 and footer 82 → Entire Website (`wp_shell.php` updated to match) |
| 11. Redirects | 11/11 active |
| 12. Caches | Rewrites flushed, Rank Math sitemap cache invalidated, Elementor CSS cleared, LiteSpeed purged |

**Defect found after publishing, and fixed:**
- **Cause:** Rank Math 1.0.279 drops its default schema and its global entities when the legacy `rank_math_rich_snippet` meta exists. Inner pages showed only BreadcrumbList, plus an Article node with an empty `@type`.
- **Fix, GD-01 to 17:** removed the legacy `article` meta, so the page-type default Article now applies (`wp_schema_fix.php`).
- **Fix, GD-00 and 18 to 21:** kept `off`. `gd-site-rules.php` v1.2.0 adds filter (5), `rank_math/schema/add_global_entities` = true on launch pages.

**Post-publish QA, anonymous (`deploycheck.py`): 0 issues.**
- **Pages:** 22/22 return 200, each with a correct canonical, exactly one H1 and `index, follow`.
- **Schema on every page:** Organization and WebSite, with no Person.
  - Article + WebPage on GD-01 to 17.
  - FAQPage on the 16 FAQ pages (GD-17 has no FAQ).
  - AboutPage (GD-18) and ContactPage (GD-20).
  - WebPage on GD-00, 19 and 21.
- **Cookies:** none, including after an anonymous form submission.
- **Redirects:** 8 × 301 → 200 with no chains; 3 × 410.
- **Sitemap:** exactly the 22 URLs (`page-sitemap.xml`).
- **Overflow:** none at 1366, 820 or 390px.
- **Anonymous form:** `GD-LIVE-205757` sent to contact@ at 17:30 UTC (in mail.log; no Reply-To, because the visitor email was left empty). Nothing stored.

**Close-out:** all sessions for user 1 destroyed (this also ends any open wp-admin login); local preview cookie deleted.
