# SEO audit and implementation notes

Audit date: November 14, 2026. Scope: the local React/Vite frontend and its deployment configuration. Preferred production origin: `https://www.minorgroup.site` (aligned to verified production hosting after the redirect-loop fix). Inner paths use no trailing slash.

## Findings and changes

| Priority | Finding before changes | Adjustment |
| --- | --- | --- |
| High | Every route inherited a homepage canonical URL, description and social metadata. Page components changed only the browser title. | Central route metadata now produces unique titles, descriptions, canonicals and sharing tags in the initial HTML and on client navigation. Verified across all 15 routes. |
| High | The initial HTML contained an empty React root. Search and social consumers had to execute JavaScript to obtain useful page content. | Build-time rendering now writes complete content for all 15 public routes. JavaScript-disabled content, navigation and the hydrated application were verified. |
| High | A catch-all Vercel rewrite served the homepage for unknown paths; no real missing-page response was configured. | Removed that rewrite. The static build must emit `dist/404.html`; Vercel can use it for missing static routes. Added extensionless paths and consistent slash normalization. |
| High | The canonical URL used the apex domain while robots and sitemap entries used `www`. | Canonical and crawl URLs now use the existing www production origin. The added www-to-apex source redirect was removed after live testing revealed an opposing apex-to-www hosting redirect. See routing-evidence/README.md. |
| Medium | Sitemap repeated the homepage and About page, carried unused namespaces and repeated old modification dates. | Replaced it with 15 unique public URLs and a matching sitemap index. Omitted unsupported update estimates and dates without reliable per-page provenance. |
| Medium | robots.txt carried `Host` and `Crawl-delay` directives that Google does not use, plus speculative restrictions. | Simplified to allow public content and reference the canonical sitemap. |
| Medium | Head contained placeholder Search Console/Bing/Yandex/Pinterest/Facebook IDs, unverified social profiles and an unused SearchAction. | Removed these placeholders and unsupported claims from the centralized metadata. No search feature or account ownership is invented. |
| Medium | Breadcrumb structured data described Home, Services and Contact as one hierarchy on every page. | Added route-specific breadcrumb ancestors and truthful Organization, WebSite, page and Service graphs. JSON-LD parsing and service ancestry checks passed. |
| Medium | Descriptive search snippets did not distinguish the five service offerings. | Aligned route titles/descriptions with the existing product, service and geographic content. No unsupported ratings, customer counts or social accounts were added. |

## Crawl and hosting verification

The updated crawl files parse as XML/text and contain exactly the 15 known public routes. `vercel.json` is valid JSON. The production build writes all 15 corresponding HTML files and a noindex 404 page; verified against a static production-output preview. A local dev server with SPA fallback is not evidence of production HTTP status behavior.

Hostname routing is managed by the existing Vercel Domains configuration. vercel.json intentionally has no hostname redirect, avoiding opposite redirect rules for static assets. After deployment, test the homepage, a deep service route, a nonexistent path, `.html` normalization, slash normalization and www redirects using HTTP requests. Confirm the final status, Location header and canonical metadata agree.

## What remains external

- Deployment and its live HTTP behavior have not been verified by this local source audit.
- Search Console ownership, index coverage, submitted sitemap status, search queries and organic traffic require the owner's connected account or access.
- Real-user Core Web Vitals and mobile field performance require production measurements. No SEO score, ranking increase or page-one outcome is claimed.
- Confirm the production domain is connected and certificates are valid; preview deployments should follow the hosting provider's indexing protections.
- Add real verification tokens only after the owner provides the actual value or an authorized account connection supplies it.

## Primary guidance

Google recommends keeping sitemap URLs consistent with the preferred canonical URLs and not assigning the homepage canonical to unrelated pages. See [canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Sitemaps list canonical page URLs. Modification dates should reflect significant actual changes; repeated guesses are not useful signals. See [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

robots.txt governs crawling for the host where it is served. It is not an access-control system. See [Google robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

Vercel supports `cleanUrls`, `trailingSlash` and hostname conditions on redirects. The current configuration selects extensionless inner paths without trailing slashes. See [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json) and [canonical production redirects](https://vercel.com/docs/routing/redirects#choose-a-canonical-production-domain).

A static build can supply a `404.html` file for unmatched paths. See [Vercel custom 404 guidance](https://vercel.com/kb/guide/custom-404-page).


## Completed validation

`npm run build` passed. `node scripts/verify-seo.mjs` passed against the static build preview. Evidence is in `docs/seo-evidence/report.json` and screenshots beside it.

- Fifteen pages return 200 with complete HTML, one H1, unique title/description, self-canonical and consistent social metadata before JavaScript runs.
- All rendered internal route links resolve to known pages. Sitemap contains the same 15 unique canonical URLs.
- JSON-LD parses; service pages expose actual Home > Services > specific-service breadcrumb ancestry.
- Missing paths return HTTP 404 and noindex in the local static preview; `.html` and trailing-slash variants normalize locally. Actual Vercel status/redirect behavior still needs a deployment check.
- Every page hydrates without browser errors. Client navigation updates metadata without duplicates. An initial navigation race in the homepage animation was found and fixed; `report-initial.json` retains the initial failure and `report.json` records the passing rerun.
- The mobile contact form passed with an intercepted success response. Nothing was sent to Formspree.
- A 1200×630 sharing card was added. Footer logo variants are 5,312 and 10,100 bytes versus the original 1,176,404-byte PNG.
- Font stylesheet loading moved from a CSS import into the head. The scroll engine loads only on the homepage; custom animation work skips hidden/offscreen elements and safely stops on unmount.
- Prerendered text remains readable without JavaScript. Mobile navigation and the contact form retain usable non-JavaScript fallbacks.

No Lighthouse score or field-performance result is inferred from these implementation checks.

