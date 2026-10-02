# Design Theory City

Interactive bilingual visual-design reference for grades 9–12, adapted from the working Next.js / React / React Three Fiber architecture in `../future-ai-city`. The student-only interface uses Inter and neutral dark surfaces, with visual experiments as the main learning surface.

The site opens directly into student learning; no role switch or account is required. The original supplied requirements are preserved in `docs/brief/01_PROJECT_AUDIT.md` through `14_IMPLEMENTATION_ROADMAP.md`. The audit was written before implementation in `CURRENT_PROJECT_ANALYSIS.md`; implementation mappings are in `docs/IMPLEMENTATION_01_05.md`, `docs/IMPLEMENTATION_06_10.md` and `docs/IMPLEMENTATION_11_14.md`. UI recommendations based on the requested GitHub reference are documented in `docs/UI_RECOMMENDATIONS_ANTI_AI.md`.

## Run locally

Requires Node.js 20.9 or newer and npm. On a fresh checkout:

```sh
npm ci
npm run dev
```

Open http://localhost:3001. In PowerShell use `npm.cmd` if execution policy blocks `npm.ps1`.

This workspace reuses the reference project's existing dependencies through an ignored local `node_modules` junction. The lockfile is included for independent installation; the junction is not part of the deployable source.

```sh
npm run lint
npm test
npm run build
npm start
```

The production preview (`npm start`) serves `out/` at http://127.0.0.1:3001. Use it after the development server has stopped. `PORT` can change the static preview port. Webpack is retained from the source because this Windows installation falls back to SWC WASM.

## Frontend-only deployment on Vercel

Import this `design-theory` directory as the Vercel project root. Use the included Next.js preset and `npm run build`. Leave the dashboard Output Directory override disabled. `vercel.json` explicitly sets `outputDirectory: null` to use framework detection, including when an older dashboard setting specifies `out`. `next.config.mjs` uses `output: 'export'` and trailing slashes; all theory and section URLs are generated at build time. No API server, database, account system, CMS, runtime authentication, or serverless function is required.

Next.js generates build manifests in `.next` and static pages in `out`. The Vercel Next.js adapter needs both: overriding its Output Directory to `out` causes the missing `out/routes-manifest.json` error. The build command now verifies the real manifests and every product route before succeeding. Keep `.next` until the deployment builder finishes. See the [official Vercel manifest troubleshooting guide](https://github.com/vercel/vercel/blob/main/errors/now-next-routes-manifest.md).

Deployment does not require environment secrets. This work prepares a standard Vercel deployment; it does not create or publish a Vercel project. `.vercelignore` excludes local dependencies, generated output, caches, QA artifacts and documentation from source uploads, following the [Vercel ignore guide](https://vercel.com/docs/deployments/vercel-ignore). Vercel regenerates `out` using the build command.

The obsolete static archive and Sites hosting manifest have been removed. Tailwind and its PostCSS integration are no longer direct dependencies because the application uses plain CSS; `es-abstract` is retained only where ESLint requires it transitively. Required runtime versions remain unchanged. The original learning briefs, verification scripts and bundled font license are retained.

## Learning surfaces

- Home: one poster component transitions between weak and improved structure, with categories, starter principles, a mini challenge and a next lesson.
- Explore: category list, lightweight DOM relationships and a selected-theory detail panel; the adapted 3D city is optional and loaded on request.
- Theory: twenty principles, category filters, bilingual in-memory search and bookmarks.
- Gestalt: a central lab switching between eight experiments, plus eight separate subtopic pages, including reduced-motion direction arrows.
- Lessons: Quick / Learn / Deep Dive, visual experiments, comparison, common mistakes, Canva/Figma practice, reflection, related theories and sources.
- Labs: multi-control hierarchy/focus/contrast/alignment/thirds/space, six color harmonies, editable six-role palettes with four previews and measured contrast, typography controls, pairing and a hierarchy exercise.
- Playground: six object types, pointer/keyboard movement, resizing, inspector, overlays, layer order, bounded undo/redo, local persistence and transparent composition observations.
- Challenges: six visual activities with editable choices, actual information ordering/alignment, measured color comparisons, and four selected Design Detective observations.
- Quick Reference: seventeen bilingual practical checks in five cards, reset/print and an expandable categorized guide.
- Glossary: thirty-three searchable translated terms, including all twenty-two specified terms.

## Language and local state

Use ID / EN in the header. Lessons, navigation, controls, glossary, feedback, search empty states change immediately. The route and current experiment remain selected. Both languages share stable content IDs, and `document.documentElement.lang` follows the preference.

Preferences and progress use `design-theory-city:learning-progress:v2` in localStorage: language, completedTheory, completedActivities, completedChallenges, bookmarks and challengeAnswers. Activity completion is an additive field; legacy quiz answers are kept only for compatibility. Missing/corrupt data is normalized safely; denied storage uses session state and shows a notice. Changes are saved at the interaction and synchronized across tabs through storage events. No cross-device/cloud sync is provided. Compatible completed lessons from the old eight-topic version are migrated on first use.

“Learned” is a self-assessment. Activity completion means a discussion was revealed; activities do not score design quality. Playground objects and guides persist separately under `design-theory-playground-v1`. Edits to text preserve a value for each language. The editor keeps up to forty undo steps per session and thirty objects per composition; denied storage keeps session state. Reference checklists last only while the page remains open.

## Architecture

```text
src/app/                     shared layout, home, generated catch-all routes
src/components/              navigation, lessons, experiments, student activities
src/components/scene/        lazy-loaded procedural theory city
src/content/theories/        bilingual educational model and Gestalt subtopics
src/content/ui.js            bilingual interface dictionary
src/content/lab-ui.js        bilingual laboratory controls and explanations
src/components/labs/         interactive learning laboratories
src/content/glossary.js      glossary data
src/content/learning-ui.js   activity and bilingual learning data
src/content/reference.js     practical reference questions
src/lib/                     routes, in-memory search, storage normalization
src/lib/progress.js          minimal legacy-answer compatibility metadata
scripts/validate-content.mjs content/state/search checks
scripts/validate-labs.mjs    color math, canvas state, history and observation checks
scripts/validate-learning.mjs activity, reference and glossary checks
scripts/browser-qa.mjs       responsive and interaction checks
scripts/finalize-export.mjs Windows Next segment-filename normalization
scripts/audit-frontend.mjs   static/cache and bundle checks
scripts/verify-export.mjs    route and local-asset export checks
docs/                        brief, audit mapping, design system, validation
```

The original city project is unchanged. The icon renderer, scene control/camera patterns and defensive storage approach are reused/adapted. Models, diagrams, exercises and poster-like examples are original code, with bundled Inter variable fonts and no external image/font/model downloads at runtime. Educational sources are linked in lessons and reference; guidelines are presented with context, not as universal laws.

## Validation

`npm test` checks twenty main topics, eight Gestalt topics, both languages, theory relationships, glossary links, legacy answer boundaries, corrupted state, old-progress migration and bilingual natural-language search. Lab checks cover translation completeness, known sRGB contrast ratios, color harmonies, hierarchy endpoints, canvas corruption, object limits, history branching and heuristic observations. `npm run lint` checks source conventions. `npm run build` produces all thirty-six product routes as static output. Run `node scripts/verify-export.mjs` after a build to check exported routes and asset references.

The latest briefs explicitly request browser checks. With the production preview running, use `npm run test:browser` (Chrome by default), or set `QA_BROWSER=msedge` / `webkit`. WebKit needs the Playwright browser installed; this workspace keeps it in `.cache/playwright` and sets `PLAYWRIGHT_BROWSERS_PATH` accordingly. Each run generates ignored reports/screenshots in `qa-artifacts`; these temporary files are cleared after validation. See `docs/VALIDATION.md` for recorded coverage; emulation does not prove real-device or screen-reader behavior. Vercel publishing remains deferred at the user's request. No WebMCP surface is included.
