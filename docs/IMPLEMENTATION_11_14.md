# Implementation: briefs 11–14

The supplied briefs are preserved verbatim in `docs/brief/`. This extension keeps the twenty main theories, eight Gestalt lessons, thirty-six product routes, dark studio design and bilingual components. `future-ai-city` remains unchanged.

| Brief | Result |
| --- | --- |
| 11 Challenges | Six visual activities: choose a focal element, select perceived groups, reorder a poster's information, compare measured color pairs, align objects, and select four observations in Design Detective. Explanations follow interaction; choices remain editable. No universal redesign or design score. |
| 11 Teacher Mode | Removed by the latest user request. The application now provides student learning only; the original brief remains preserved for context. |
| 12 Reference | Five bilingual checklist cards with seventeen practical questions, reset, printable checkboxes and links to lessons. The full twenty-topic guide remains available in a disclosure. Checklist state is page-local. |
| 12 Glossary | Thirty-three translated/searchable terms, covering all twenty-two requested terms and preserving earlier vocabulary. Each entry has a short definition and a valid related lesson. |
| 13 Performance/Cache | Heavier editor, challenges and rich labs use framework code splitting. Educational data stays bundled. No service worker/PWA cache, lesson content in localStorage, manual timestamp cache busting, external fonts/images, or custom Vercel cache headers. |
| 14 Roadmap | Existing infrastructure and content model retained; student activities/reference implemented; static build and responsive/browser checks added. Vercel Preview is explicitly deferred by the user: “Lanjutkan lokal dahulu.” |

## Local state compatibility

`completedActivities` is an additive field in the existing versioned progress model. Unknown activity IDs and malformed arrays are dropped. Old language, bookmarks, completed lessons and quiz answers remain valid. Earlier quiz records are retained solely to normalize old saved answers; the new activities do not present a memorization score. Completing an activity means revealing its discussion, independent of the observer's choices.

## Rendering and export fixes

Browser testing exposed a fragmented SVG title that was empty in server HTML; it now renders one string and is verified as nonempty. It also exposed a Next 16.3 Windows export issue: nested RSC segment paths retained Windows separators while the router requested dot-separated filenames. `scripts/finalize-export.mjs` copies those generated files to the expected names; normal Linux output is unchanged. This does not introduce application caching or modify dependency source. The local server supports slash redirects for nested page directories.

Editor dragging commits the latest pointer snapshot from a ref so rapid pointer-up does not depend on whether the previous React draft render has completed.

## Files and checks

Structured activity/UI data: `src/content/learning-ui.js`. Reference prompts: `src/content/reference.js`. Components: `VisualActivity`, `Challenges`, `ReferenceTools`. Small ordering/alignment functions: `src/lib/activities.js`.

`npm test` now includes `validate-learning.mjs`. `npm run test:browser` uses installed Playwright against the production preview, tests six exact widths and task interactions, and records local reports/screenshots in ignored `qa-artifacts/`. `scripts/audit-frontend.mjs` checks export/cache choices and reports generated chunk sizes. See `VALIDATION.md` for the actual results and limits.
