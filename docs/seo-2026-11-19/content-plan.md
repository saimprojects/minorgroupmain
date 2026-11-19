# Search Console-led article update — November 19, 2026

## Evidence and limits

Source: the user-supplied `minorgroup.site-Performance-on-Search-2026-11-19.xlsx`, read without modifying the workbook. The export covers August 18–November 17, 2026, with the “Last 3 months” and Web (text-based) filters. Chart totals: 11 clicks and 365 impressions.

The dashboard service URL has 124 impressions, 0 clicks and average position 36.86 in the Pages sheet. Dashboard-related terms are the clearest relevant non-brand theme in the Queries sheet, including:

| Query | Impressions | Clicks | Average position |
| --- | ---: | ---: | ---: |
| dashboard development services | 41 | 0 | 46.05 |
| dashboard development company | 30 | 0 | 30.47 |
| business dashboard development services | 25 | 0 | 27.04 |
| reporting and dashboard development services | 9 | 0 | 49.44 |
| reporting dashboard development solutions | 7 | 0 | 55.43 |

The United States contributes 141 impressions and 1 click (about 0.71% CTR), the largest country impression count in this export. Queries and countries are separate aggregates: this file does **not** establish which dashboard queries came from the US. Queries and pages are also separate: it does not establish which query triggered which URL. Average positions are descriptive, not fixed rankings or forecasts.

Visible query rows total only 2 clicks and 229 impressions; omitted/private queries mean they cannot represent all searches. Page-level impressions also need not equal chart totals. The November 14–17 window contains 3 clicks and 152 impressions, too little evidence to attribute a trend to prior changes. Detailed evidence is in `search-console-summary.json`.

## Four distinct article jobs

The existing `/services/business-dashboard-development` retains the service offer. The four supporting articles answer different questions. Power BI and automated reporting are adjacent editorial topics inferred from business fit, not separately measured keywords in this export. No search volume, difficulty, CPC or AI visibility score was obtained.

| URL | Reader intent | Useful original material |
| --- | --- | --- |
| `/blog/choose-dashboard-development-company` | Evaluate a delivery partner | Proof-of-concept review, proposal comparison, ownership and support checklist |
| `/blog/reporting-dashboard-requirements` | Define what should be built | Illustrative KPI contract, source map, permission and acceptance cases |
| `/blog/custom-dashboard-vs-power-bi` | Choose an implementation approach | Fair comparison including workflow integrations, embedding, hybrid options and recurring responsibilities |
| `/blog/automated-business-reporting` | Connect and operate recurring reporting | Illustrative source map, reconciliation, incomplete refresh handling and operational ownership |

US targeting uses US English, clear USD and calendar examples, and time-zone considerations. It does not imply a US office or fabricate customers, team credentials, project outcomes or fixed prices. Examples are explicitly illustrative.

## SEO and answer usability implemented

- Direct answer near the beginning of each new article, followed by practical supporting sections.
- Question/descriptive headings, table of contents, semantic tables and always-visible FAQs. The content is usable in prerendered HTML with JavaScript disabled.
- Truthful organization byline and publication date; primary documentation linked next to product/security claims and in further reading.
- Unique titles/descriptions/canonicals, existing BlogPosting and BreadcrumbList markup, article social metadata, and a dedicated 1200×630 sharing image for every article.
- Descriptive contextual links between related guides and services; relevant guide links on dashboard and automation service pages. Homepage shows three recent guides and the blog index exposes all six.
- New routes included in the generated sitemap and the source sitemap. Existing hostname configuration remains `https://www.minorgroup.site`.

FAQs are for readers. No FAQ rich-result, AI citation or ranking guarantee is claimed. No forced keyword density, arbitrary SEO score or claim of first-hand client experience is used.

## Skill guidance used

Adapted relevant editorial guidance from [OpenSEO keyword research](https://github.com/every-app/open-seo/blob/main/plugins/openseo/skills/keyword-research/SKILL.md) and [keyword clustering](https://github.com/every-app/open-seo/blob/main/plugins/openseo/skills/keyword-clustering/SKILL.md): first-party demand, business fit, one intent per page, existing versus new URL decisions, and no invented metrics.

Adapted [Agentic SEO](https://github.com/Bhanunamikaze/Agentic-SEO-Skill/blob/main/SKILL.md) article/content/AEO/GEO guidance: clear direct answers, self-contained sections, useful lists/tables, accurate dates and bylines, primary sources, internal linking and explicit evidence limits. Current [Google guidance on AI features](https://developers.google.com/search/docs/appearance/ai-features) and [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) informed the implementation.

These are guidance sources, not a claim that the complete third-party tools ran. OpenSEO is an application/MCP workflow requiring project configuration and data access; no account was connected, paid metrics fetched or AI visibility test run. Downloaded skill text was reviewed as reference and was not executed. Outdated or unsupported suggestions about search features, schema, keyword density and AI uplift were excluded. The Spreadsheets skill informed read-only handling and interpretation of the workbook.

## Indexing screenshots

The supplied screenshots show 6 indexed pages and 6 excluded pages: 2 “Page with redirect,” 1 “Alternate page with proper canonical tag,” and 3 “Crawled — currently not indexed.” They contain no per-URL details. Redirect and alternate-canonical exclusions may be expected; the screenshots alone do not identify defects or the three crawled-but-unindexed pages. No claim is made that adding articles fixes those statuses.

After deployment, inspect the four final article URLs and the dashboard service URL in Search Console, verify selected canonicals and live rendered content, and submit the current sitemap. Request indexing for the new URLs if appropriate. Export the exact excluded URL lists before deciding whether a redirect or canonical needs changing. [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) explains that requesting a crawl does not guarantee inclusion.

Evaluate the new pages over comparable periods after discovery/indexing. Track page impressions, clicks, CTR and queries; filter the dashboard page by query and country when needed. Do not infer success from a few days or promise a deadline for rankings.

## Local verification

See `verification.md` for completed build, browser, metadata and layout checks. These establish local implementation quality, not production deployment, Google indexing or search performance.
