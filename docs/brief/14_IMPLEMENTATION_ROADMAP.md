# 14_IMPLEMENTATION_ROADMAP.md

## Goal

Implement Design Theory City progressively without destabilizing Future AI City's existing frontend architecture.

---

# STEP 1 — Repository Audit

Read:

```txt
01_PROJECT_AUDIT.md
```

Produce architecture findings first.

Do not code major features yet.

---

# STEP 2 — Clean Existing Project

Remove only clearly obsolete Future AI City:

- content
- assets
- labels
- route-specific components

Do not delete reusable infrastructure.

---

# STEP 3 — Establish Design System

Implement:

```txt
tokens
typography
spacing
surfaces
buttons
forms
sliders
tabs
tooltips
```

Follow:

```txt
04_DESIGN_SYSTEM.md
```

---

# STEP 4 — Build Content Architecture

Implement structured theory data.

Do not yet build all theory pages manually.

Create reusable theory templates.

---

# STEP 5 — Home + Explore

Implement:

```txt
Home
Explore
Theory Navigation
Search
Theory Relationships
```

---

# STEP 6 — First Six Core Modules

Build in this order:

```txt
1. Visual Hierarchy
2. Focal Point
3. Contrast
4. Gestalt
5. Color Theory
6. Rule of Thirds
```

Each must contain an actual interactive visual example.

---

# STEP 7 — Additional Modules

Add:

```txt
Typography
Alignment
White Space
Grid
Balance
Scale
Proportion
Rhythm
Repetition
Visual Weight
```

---

# STEP 8 — Playground

Implement only after theory component patterns are stable.

Do not try to create Canva/Figma.

Focus on learning.

---

# STEP 9 — Challenges

Add:

```txt
Mini Challenges
Design Detective
Comparison Exercises
```

---

# STEP 10 — Reference Tools

Add:

```txt
Quick Reference
Glossary
Bookmarks
Local Progress
```

---

# STEP 11 — Teacher Mode

Create presentation-friendly mode.

No login.

No backend.

---

# STEP 12 — Responsive Pass

Explicitly test:

```txt
360
390
768
1024
1280
1440+
```

Do not merely rely on browser resizing.

---

# STEP 13 — Accessibility Pass

Verify:

```txt
Keyboard navigation
Focus visibility
Contrast
Semantic HTML
ARIA where required
Reduced motion
Form labels
```

---

# STEP 14 — Performance Pass

Follow:

```txt
13_FRONTEND_PERFORMANCE_CACHE_VERCEL.md
```

Remove:

- unused dependencies
- unnecessary animation
- duplicate assets
- oversized images
- excessive font loading

---

# STEP 15 — Production Build

Must pass:

```txt
lint
typecheck
build
```

if those commands exist in the current project.

Resolve production console errors.

---

# STEP 16 — Vercel Preview

Test Preview Deployment before production.

Verify:

```txt
routing
refresh on nested route
assets
localStorage
mobile
interactive controls
animations
theory content
```

---

# Definition of Done

A theory page is complete only when:

```txt
✓ Definition exists
✓ Visual example exists
✓ Interaction works
✓ Reset works
✓ Mobile works
✓ Keyboard interaction is usable
✓ Related theory exists
✓ Reflection question exists
✓ No console error
```

---

# Architecture Constraint

Always prefer:

```txt
simple frontend solution
```

before:

```txt
new service
new API
new database
new server function
new infrastructure
```

---

# Final Product Principle

Design Theory City should not become:

> Wikipedia with pretty cards.

It should become:

```txt
Theory
↓
Visual Evidence
↓
Interaction
↓
Student Observation
↓
Application
```

A student should be able to manipulate a principle and understand **why** a visual composition changes.