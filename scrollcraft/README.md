# Local authoring and QA

The working React project is `frontend/`. Run `npm run dev` to develop and `npm run build` for production output.

Scroll Craft is installed globally at `C:/Users/itsai/.codex/skills/scroll-craft` and its unmodified runtime is vendored in `src/lib/`. Page-specific interaction lives in `src/pages/Home.jsx`. Its concept system diagram illustrates actual service functions; it is not a screenshot of TAM.

Planning and evidence: `scrollcraft/builds/minor-systems/`. Start with BRIEF.md, RESEARCH.md, and VERIFICATION.md. The QA scripts use installed Chrome in headless mode and disable desktop pointer locking/capture. Form verification intercepts Formspree and sends no external inquiry.

FFmpeg is optional and Windows-specific, used only for local contact-sheet creation. Production runtime does not use it. The optional package is skipped on other operating systems.
