# Minor Group website

React/Vite frontend for Minor Group of Technologies. Production builds include complete HTML and metadata for all 18 public routes, plus a noindex 404 page. The client hydrates those pages and keeps navigation and scroll interactions working.

## Commands

- `npm run dev`: local development with Vite and live reload.
- `npm run build`: build browser assets, compile the server renderer, then generate static route HTML in `dist/`.
- `npm run preview`: serve the built output on `http://127.0.0.1:4173`, with clean URLs and real missing-page responses.
- `npm run test:seo`: audit the running built preview with headless Chrome. Run the build and preview first. Use `SCROLLCRAFT_CHROME` to override Chrome's executable path and `SEO_TEST_URL` to override the preview URL.

Deploy `dist/` using the supplied `vercel.json`. Run the full npm build command; a standalone `vite build` does not run prerendering. Production does not require Node to serve requests.

## SEO and content

Route metadata and structured data live in `src/seo/site.js`. The build and client navigation use the same renderer. When adding a public route, update App routing and SEO records together. The build generates the production sitemap from those records; the SEO regression checks confirm agreement.

The preferred origin is `https://www.minorgroup.site`, matching the existing production hosting. Hostname redirects are managed in Vercel Domains; vercel.json intentionally defines no hostname redirect so static assets remain on the document origin. Keep a single apex-to-www redirect at the hosting level.

See [the SEO audit](docs/SEO-AUDIT.md) and [test results](docs/seo-evidence/report.json). Local tests do not establish production indexing, real-user Core Web Vitals, or Search Console ownership.

The inquiry form uses the existing Formspree endpoint, with an optional `VITE_FORMSPREE_ENDPOINT` override. Automated checks intercept submission; they do not send a real project inquiry.

## Journal and company contacts

Company details are centralized in src/data/company.js. Journal content lives in src/data/blog/ and is collected in src/data/blog.js. Add a new article there using the existing content shape; the SEO route list and production sitemap derive article routes automatically. Run npm run build, npm run preview and npm run test:blog after changes. See docs/BLOG-AND-CONTACT-UPDATE.md for implementation notes.
