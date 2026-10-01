# 01_PROJECT_AUDIT.md


## Objective

Inspect the existing **Future AI City** repository before modifying anything.

The project will remain a **frontend-only website deployed on Vercel**.

Do NOT introduce:

- database
- Supabase
- Firebase
- server-side authentication
- custom backend
- API server
- unnecessary serverless functions
- CMS
- complex state management unless already required by the existing project

The existing Future AI City project should become the technical foundation for a new website:

# Design Theory City

An interactive visual reference for teaching design principles to students.

---

## Audit First

Inspect:

- framework
- build system
- routing
- package manager
- TypeScript usage
- CSS architecture
- component architecture
- animation libraries
- icon libraries
- current assets
- existing interactive city/map components
- responsive behavior
- current local state
- existing deployment configuration
- existing Vercel configuration
- current caching behavior
- unused dependencies
- duplicated components
- obvious technical debt

---

## Required Output

Before implementation, summarize findings in:

```md
CURRENT_PROJECT_ANALYSIS.md
```

Include:

### Framework

Example:

```txt
Next.js / React / Vite / etc.
```

### Important Dependencies

Document why each major dependency exists.

### Reusable Components

Identify existing components that can become:

- Theory Navigation
- Interactive Theory Map
- Lesson Panel
- Theory Card
- Playground UI
- Visual Experiment
- Modal
- Tooltip
- Navigation
- Progress indicator

### Components to Remove

Identify Future AI City-specific content that does not belong in the new product.

### Refactoring Risks

Avoid rewriting working components merely for stylistic reasons.

---

## Key Rule

Preserve stable architecture.

Prefer:

```txt
reuse → adapt → refactor only where necessary
```

instead of:

```txt
delete everything → rebuild everything
```

---

## Deployment Constraint

The project must stay compatible with a standard Vercel frontend deployment.

The finished application should be usable without a dedicated backend.



---

