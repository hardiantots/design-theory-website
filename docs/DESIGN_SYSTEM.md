# Design Theory City: design system

The interface is a dark teaching studio; colorful examples communicate the theories. The primary activity is manipulating a visual, so the home page opens with a hierarchy experiment and theory pages place experiments before supporting notes.

## Roles

| Role | CSS token | Value |
| --- | --- | --- |
| Background | `--background` | `#101110` |
| Surface | `--surface` | `#191b19` |
| Elevated surface | `--surface-elevated` | `#232623` |
| Primary text | `--text-primary` | `#f0f0e9` |
| Secondary text | `--text-secondary` | `#aeb3aa` |
| Border | `--border` | `#353a33` |
| Action | `--accent` | `#d9ff68` |
| Success | `--success` | `#b8d88e` |
| Warning | `--warning` | `#eac083` |
| Review/error | `--danger` | `#efae96` |

Category accents belong to examples and category markers. They do not replace text labels or semantic feedback.

## Type, spacing and geometry

Inter is the primary family for headings, UI, reading and editorial text. The normal and italic variable WOFF2 files are bundled locally through `next/font/local`, with Arial/Helvetica fallbacks and no external font request at runtime. Source and license: [the official Inter repository](https://github.com/rsms/inter), with the bundled OFL notice in `src/app/fonts/OFL.txt`. H1/H2 use clamp. Body content is generally 16px, reading support 15px, controls 14px, secondary metadata 12–13px. Deliberately scaled text and selectable font families inside learning examples illustrate typography rather than serving as UI labels; the typography lab starts with Inter.

Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64 and 96px equivalents. Corners: 3px small and 8px medium; full circles are reserved for controls and teaching shapes. Borders separate sections and help readers follow information structure.

## Responsive and interactive behavior

Desktop: compact top navigation, editorial hero, experiments with compact inspectors, three-column theory library and a canvas editor between layers/guides and properties. Tablet: two-column library and compact navigation. Mobile: stacked canvas and controls, two-column cards with a one-column fallback on small screens, collapsible navigation, and a theory list followed by optional relationships and detail. The city is loaded only when requested.

Native dialogs contain focus, support Escape, and restore the opener. ID/EN buttons announce pressed state. Slider controls have labels and outputs. Static SVG diagrams include localized accessible titles. Movement starts only through Play and is suppressed under reduced motion. Search/challenge feedback and storage notices expose live state. These implementation provisions do not replace device/accessibility QA.
