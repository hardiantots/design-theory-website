# Implementation mapping: markdown 01–05

## 01 — Project audit

`CURRENT_PROJECT_ANALYSIS.md` was saved before product changes. It records framework, lockfile, dependencies, CSS/component architecture, source scene, responsive behavior, local state, caching, missing Vercel configuration, debt and reuse risks. The new project preserves the source's Next.js/React/Three versions and Webpack convention. The source project is untouched.

## 02 — Product scope

Twenty requested principles are present, with eight Gestalt subtopics. Every lesson is visual-first, with a variable students can change. The product follows see → compare → experiment → understand → apply. Local bookmarks/progress and student reflection support grades 9–12. No account, cloud storage, CMS, payments, grading or API infrastructure was added.

## 03 — Information architecture

Thirty-six product routes: home, seven section/challenge routes, twenty main theory routes, and eight Gestalt subtopic routes. Six categories connect related lessons. Header search indexes both languages, titles, aliases, categories, keywords, definitions and relationships. Searches such as “my design looks crowded” or “desain terlihat ramai” lead to white space, density, hierarchy, alignment and Gestalt proximity. Compact mobile navigation includes the glossary link.

## 04 — Design system

The black/charcoal interface uses neutral surfaces, restrained lime actions, six subject accents, locally bundled Inter for headings and interface text, CSS color/spacing/radius tokens, fluid headings, hairline borders and controlled corners. Visual experiments precede long explanation. Diagrams are interactive data displays. Reduced-motion, keyboard focus, native dialogs, local print styles and responsive layout are included. See `DESIGN_SYSTEM.md`.

## 05 — Content model

Educational data lives outside presentation under `src/content`. A JavaScript/JSDoc model preserves source conventions and includes slug, localized title, category, difficulty, definition, explanation, importance, deep-dive text, aliases/keywords, related theories, experiment/control metadata, comparisons, mistakes, application, reflection and takeaway. Quick/Learn/Deep Dive reuse this model. All twenty-eight lessons have Indonesian/English fields. Sources are linked and contrast thresholds refer to W3C.

## Adaptations

- Six category landmarks avoid twenty overlapping 3D labels; all individual lessons remain available as DOM links.
- The new route library replaces topic-specific modal-only navigation while retaining native dialog behavior for search.
- Required source dependency versions are retained in the lockfile. The previous eight-topic static implementation was removed during the pre-deployment cleanup; saved student progress is still migrated.
- Standard Vercel frontend static export is configured; publishing to a Vercel account is not part of this local implementation.

## Verification

Content/state/search tests and lint pass. Production export generates all thirty-six student product URLs. The later briefs requested browser checks, which have been completed; see `VALIDATION.md` for precise evidence and limitations.
