# Implementation: briefs 06–10

All five supplied markdown briefs remain in `docs/brief/`. The existing 01–05 architecture, twenty main theories, eight Gestalt subtopics, bilingual progress and frontend-only Vercel export remain in place.

| Brief | Implementation |
| --- | --- |
| 06 Home and Explorer | `HomeAndExplore.js`: same-data SVG poster before/after slider, primary and secondary actions, six categories, six starter principles, why/reflection, mini challenge, continue lesson. Explorer has category list → DOM relationships → detail panel, stacking on mobile. Adapted city is optional and dynamically imported. Category hash links select their district. |
| 07 Theory Modules | `labs/HierarchyLab.js` and `CompositionLabs.js`: six hierarchy controls and labelled heuristic order, six focal-point cues, eight contrast dimensions, draggable thirds presets with keyboard-accessible coordinate sliders, six alignments and optional guides, three white-space presets. Existing balance/grid/scale modules remain available. |
| 08 Gestalt | `labs/GestaltLab.js`: central switcher and individual lesson labs for proximity, similarity, closure, continuity, figure-ground, region, connectedness and common fate. Direction arrows provide the static reduced-motion reading; motion starts through a control. Original code-generated compositions, localized reflection and reset on every experiment. |
| 09 Color and Typography | `ColorLab.js`: native HSL generation, six harmonies, six editable palette roles, four previews, measured sRGB ratio with normal/large thresholds and contextual meaning. `TypographyLab.js`: editable localized text and eight controls, initial equal-weight event exercise, four pairing approaches, concepts and font fallback disclosure. |
| 10 Playground | `Playground.js` plus `lib/playground.js`: six object types; X/Y, dimensions, rotation, fill, opacity, border, text properties, alignment and layer order; six guide options; add/duplicate/delete/move/resize/reset; forty-step branching history; thirty-object cap; versioned local storage; sanitized recovery and transparent deterministic observations. |

## Teaching and interaction choices

The home comparison changes size, spacing, alignment and CTA emphasis without changing the message. Hierarchy predictions describe a formula, not eye tracking. Thirds, whitespace and font-family limits are described as contextual guidelines. Contrast checks show thresholds and the limits of checking a solid pair; they do not certify accessibility. A palette harmony does not imply readable text or a universal cultural meaning.

Canvas drag operations commit one history entry on release rather than recording every pointer movement. Arrow keys move selected canvas objects; numeric inspector inputs support positioning/resizing without dragging. Rotation-aware resize deltas use the object's local axes. Text content is stored per language. Local save includes guides; undo history is session-only. Unknown schemas, invalid colors and invalid object types are sanitized or restored to defaults. On mobile, Explorer starts with selectable theories; relationships open on demand before the detail panel.

## Observation rules

The playground reads visible objects above 20% opacity. It reports close text sizes when the max/min font-size ratio is below 1.3, variable vertical text gaps above a 12px spread, a possible focus when the largest object area is more than twice the next, possible competition when at least three objects exceed 12,000 square units and a 3:1 fill/background ratio, and button text below 4.5:1. These rules are intentionally simple, do not account for compositing/occlusion or actual human gaze, and never output a design score. The details are in `src/lib/playground.js`, with student-facing explanations in `lab-ui.js`.

## Verification scope

Run lint, both data/logic test scripts, the production static build and `scripts/verify-export.mjs`. Browser drag behavior, visual layouts and real-device accessibility still need manual browser QA. No backend or paid service was added, and no Vercel publish was performed.
