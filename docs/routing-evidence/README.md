# Production redirect-loop fix

The live site was serving HTML on `https://www.minorgroup.site`, while static resource requests matched the source-levelwww-to-apex rule:

- www asset URL →308 →same path onminorgroup.site.
- Apex asset URL →307 →same path onwww.minorgroup.site.
- This repeated for CSS, moduleJavaScript, MG icon andfavicon. The cross-origin redirect also caused the reported CORS failure.

## Fix

Removed the hostname `redirects` rule fromvercel.json. Existing Vercel Domains routing owns the apex-to-www redirect. Canonicals, Organization/social URLs, robots and both sitemap files now consistently use `https://www.minorgroup.site`.

Kept Vite's crossorigin attributes, ordinary same-origin assets, cleanUrls and real404 handling. No CORS wildcard or unsafe-eval policy was introduced. The reported content.js error includes a chrome-extension origin and is separate from the website routing failure.

## Verified

Production build passes. All18 generated canonical URLs usewww. Local browser verification loads the built CSS, entryJavaScript, scroll runtime and SVG icons with200 responses and no redirects. The layout renders correctly and there are no pageJavaScript errors. See `local-fix-report.json` and the screenshot beside it.

## Production rollout

This source fix has not been pushed or deployed from this session. Push the updated source and let Vercel build it withnpm runbuild. Keep the existing apex-to-www domain redirect; do not add a reversewww-to-apex rule. After deploying, test CSS/JS/SVG directly onwww in a fresh browser profile. Cached308 redirects may persist in an existing profile; hardreload or clear site data if needed.

The live response check was performed before redeployment; production remains pending. Vercel's domain and redirect guidance: https://vercel.com/docs/routing/redirects
