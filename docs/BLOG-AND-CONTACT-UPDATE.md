# Company contacts and US-focused journal

Completed November 14, 2026 in the local frontend.

- Company phone: +1 (917) 508-5593 (`tel:+19175085593`).
- Company email: Contact@minorgroup.site.
- Shared contact source: `src/data/company.js`; used by contact UI, footer and Organization structured data. Existing legal contact text also updated.
- The US phone is a contact number. No US office, street address or client history was asserted. Existing Pakistan location and explicitly labeled PKT business hours remain.
- Removed the old company WhatsApp links; no WhatsApp registration for the new phone was assumed. The form's customer WhatsApp field remains unchanged.
- Visible email changes do not provision a mailbox or change the recipient settings of the existing Formspree account. Submission checks were mocked and sent no external inquiry.

## Articles

1. `/blog/custom-software-development-usa-guide`: Custom Software Development for US Small Businesses: A Buyer’s Guide. Approximately1,200 words, nine sections, six-minute read. Practical build/buy comparison, discovery, integration, access, proposal, delivery and handoff guidance. NIST source cited for security recommendations.
2. `/blog/business-website-development-usa-guide`: Business Website Development for US Companies: A Planning Guide. Approximately1,200 words, nine sections, six-minute read. Customer journeys, content planning, proposals, accessibility, performance, technical SEO, ownership and launch. Official Google/W3C sources cited; Dallas example explicitly hypothetical.

Both articles use organization authorship, actual creation date, US English and relevant service/contact/cross-article links. There are no fabricated costs, outcomes or ranking promises.

The index is linked from the navbar, footer and homepage. All three new pages are prerendered. Canonicals, unique metadata, Blog/BlogPosting and breadcrumb graphs, and individual1200×630 sharing cards were added. The production sitemap is now generated from the shared route list during the build.

## Validation

`npm run build` passed:18 public HTML pages plus404. The full SEO regression suite passed JavaScript-disabled HTML, metadata/schema, canonical/sitemap, internal link,404, hydration and mocked form checks. One immediate title assertion in the test was made deterministic by waiting for client navigation to settle; the passing report is `docs/seo-evidence/report.json`.

`node scripts/verify-blog.mjs` passed at1440,768,390 and360px. No page-level horizontal overflow; wide tables scroll within their own labeled region. Article contents links and mobile Blog navigation work. Company contact UI/links match the supplied values. Screenshots and report are in `docs/blog-evidence/` and were visually reviewed.

This is a local implementation. Public deployment, search indexing and mailbox delivery were not tested.
