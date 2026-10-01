# Current Project Analysis

Audit completed before implementation: 1 October 2026. Scope: `future-ai-city` as technical foundation; `design-theory` as the destination. Requirements: supplied markdown 01–05, frontend only, standard Vercel deployment, Indonesian/English language selection.

This document records the original audit. Current source cleanup and deployment configuration are documented in `README.md` and `docs/VALIDATION.md`; obsolete archive and Sites metadata have since been removed.

## Framework and build

- Source: Next.js 16.3.7 App Router, React 19.2.8, JavaScript/JSX. No TypeScript configuration or TypeScript source.
- npm with an existing `package-lock.json`. Development/build explicitly use Webpack because this Windows environment previously required SWC WASM fallback.
- One source route: `src/app/page.js`; shared root layout and global CSS. No API routes, server authentication, database, or middleware.
- Destination currently uses dependency-free HTML/CSS/ES modules in `dist/`, eight theories, native lesson dialog, quiz progress, and a local Node static server.
- Adaptation: use the source's App Router, dependency versions, React/Three architecture and local-state patterns. Preserve and port suitable destination materials/experiments. Export all required routes at build time with `output: 'export'`; no production Node/API server is needed.

## Important dependencies

| Dependency | Existing purpose | Destination use |
| --- | --- | --- |
| next / react / react-dom | App Router, components, state, rendering | Routing, shared layout, bilingual provider, static export |
| @react-three/fiber | React scene rendering | Lazy-loaded interactive theory city |
| @react-three/drei | OrbitControls, HTML labels, scene performance | City controls and labels |
| three | Geometry/materials and instancing | Original procedural theory landmarks |
| @playwright/test | Existing browser smoke/reliability scripts | Available for checks if browser testing is requested |
| eslint / eslint-config-next | Lint and React/Next rules | Required source checks |
| tailwindcss / @tailwindcss/postcss | Starter styling tooling | Preserve source versions; semantic token CSS remains primary |
| es-abstract | Existing development dependency | Preserve lockfile; no direct product runtime use |

No external animation or icon dependency is installed. Motion uses scene code/CSS; navigation icons are authored SVG.

## Reusable components

| Source | Adaptation |
| --- | --- |
| InterfaceIcon | Retain line-icon renderer for navigation and controls |
| useLearningProgress | Retain hydration, normalization, per-interaction saves, storage event synchronization; adapt fields to language, bookmarks, completed theories/challenges |
| MapExplorer / CityScene | Retain lazy canvas, camera fitting, OrbitControls, capped DPR, reset, native fullscreen with accessible fallback, DOM alternatives |
| ZoneModal | Reuse native dialog lifecycle, focus restoration and Escape behavior in search/presentation controls where applicable |
| ZoneQuiz | Adapt locked-answer and feedback interaction into design-detective challenges |
| Zone list / progress track | Become categorized theory cards and learning progress |
| Destination visual experiments | Port sliders and before/after comparison to React and extend to all twenty topics |

## Content to remove from the new product

Do not copy MRI, bus, industry robot, tutor scenes, AI ethics checklist, medical/AI quiz questions, AI sources, Future AI branding, starter Next/Vercel SVG logos, or the source's warm light theme into Design Theory City. Leave the reference project intact.

## State and caching

- Source state uses React hooks and `future-ai-city:learning-progress:v1` localStorage with validation. No cloud state or fetch/cache layer.
- Destination state uses a different key and answers/checks. Migrate compatible completion data once while adopting the new schema; never use the source's progress key.
- New preference/progress schema: language, completedTheory, completedChallenges, bookmarks. Missing, malformed, denied storage must keep the app usable.
- Theory content is local immutable data. Search indexes both languages in memory. Route HTML and hashed framework assets are produced at build time; there is no runtime data cache, ISR, or dynamic API.

## Responsive behavior and accessibility

Source has desktop sidebar, compact mobile navigation, explicit Canvas size, capped DPR, scene fallback, native learning dialog, fullscreen fallback, reduced-motion handling and stored quiz answers. Preserve these patterns. New topic navigation needs a compact mobile menu, readable comparison panels, keyboard controls, accessible DOM city links, and teacher controls that remain available when fullscreen is unavailable.

## Deployment

Source has no custom Vercel configuration. Destination previously has `.openai/hosting.json` and a private Sites deployment. The requested delivery target is Vercel; configure Next static export (`out/`) and a standard Vercel build with no backend or serverless functions. Retain the existing Sites project identifier only as optional legacy metadata, never replace it or confuse it with a Vercel project.

## Duplication, debt, and risks

- Topic data in the source is spread across scene-data, learning-content and zone-extras; consolidate new theory metadata and content into one typed-by-convention model with reusable localized fields.
- Avoid copying both the old static UI and new React implementation as active entrypoints; archive legacy source for traceability and remove stale production entrypoints once the port validates.
- Source fullscreen and dialog state are interdependent. Keep one bounded fullscreen container and avoid competing modal layers.
- Source native focus behavior is useful; do not replace native dialog with a custom focus implementation.
- Twenty landmarks can overload labels; use six category districts with DOM topic navigation rather than twenty overlapping labels.
- Keep 3D optional and lazy. Visual teaching examples must stay usable without WebGL.
- Bilingual strings include lesson explanations, controls, search, challenges, glossary, empty states, and teacher notes. Language changes must preserve route, experiment state, and progress.
- Read installed Next.js static-export, dynamic-route and generateStaticParams documentation before implementing routes. Next 16 route params are promises.

## Execution order

1. Save the supplied 01–05 briefs and this audit.
2. Establish scope, categorized navigation and statically generated routes.
3. Port the working frontend foundation and define a neutral dark token system.
4. Build separate bilingual content for twenty theories, eight Gestalt subtopics, glossary and challenges.
5. Implement visual learning flow, playground, local search, bookmarks/progress and teacher presentation mode.
6. Validate content completeness, bilingual state, routing, lint and production static export. Document Vercel deployment without introducing server infrastructure.
