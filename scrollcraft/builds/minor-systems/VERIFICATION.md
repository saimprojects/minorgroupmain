# Verification report

Final production build: passed with Vite. Output JS 405.18 kB / gzip 110.67 kB; CSS 52.82 kB / gzip 12.12 kB.

## Evidence
- Scroll Craft harness: desktop-final/, mobile-final/ and reduced-final/. Six samples per act plus boundary positions; each generated 31 screenshots and a contact sheet. All runs report no dead scroll and all measured cues over their composited grounds at least 4.5:1. This measures animated cues, not a blanket accessibility certification of every element.
- Read desktop/mobile contact sheets and full-size hero/diagram states; reviewed reduced-motion final contact sheet and full-size thesis state.
- qa/functional-report.json: no JS page errors. Home, Services and Contact tested at 1440x900, 390x844 and 360x640 with no horizontal overflow. Twelve additional routes render their expected h1, including all five service detail pages and six legal pages.
- qa/interaction-report.json: mobile menu opens/closes, Escape restores toggle focus, navigation closes menu, ScrollCraft instance cleans up on route change; skip link focus works. Actual diagram replay runs; settled route state reaches connection:100; pointer planes produce distinct screenshots.
- Formspree success and failure were intercepted locally. Both payload preservation and accessible focused feedback were verified. No real project request was sent.
- Inner-page screenshot review: Services, Contact, About, TAM detail and Privacy. Labels darkened for contrast, mobile inputs increased to 16px, footer hit areas enlarged.

## Feel check
Before reopening the brief: curiosity, recognition, clarity, competence, warmth, readiness.
Intended: curiosity, recognition, clarity, confidence, approachability/resolve. The orange studio scene is energetic warmth rather than quiet approachability, but its short unpinned form supports the conversation. The systems stage remains the largest dedicated span. The close resolves on a complete question, project link and real correspondence details.
Changes from first visual pass: keep the mobile structural M away from intro copy, restore a word boundary in kinetic text, darken form placeholders, increase mobile form type, enlarge legal-link targets. Reduced motion shortens the page from about 6.4 to 5 viewport-heights and retains the connected schematic without pinning.

## Limits
Desktop Chrome emulation is not a real iPhone/Safari test. Live delivery through Formspree was not exercised because that would send an actual inquiry. Ramotion browser research hit its bot challenge; its offer was read from the official page via the web source. Existing legal wording and dates were preserved.

## Re-run
From frontend/: `node scripts/verify-site.mjs` and `node scripts/verify-interactions.mjs` (local dev URL in scripts). Full Scroll Craft harness command is documented in the installed skill. Scripts require local Chrome and run headless with native pointer lock and capture disabled.
