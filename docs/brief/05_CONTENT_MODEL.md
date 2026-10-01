# 05_CONTENT_MODEL.md


## Goal

Keep educational content separate from presentation components.

Do NOT hard-code large theory explanations inside UI components.

---

## Theory Type

Example TypeScript model:

```ts
export interface Theory {
  slug: string
  title: string
  shortTitle?: string
  category: TheoryCategory
  difficulty: "beginner" | "intermediate" | "advanced"

  shortDefinition: string
  explanation: string
  whyItMatters: string

  keywords: string[]
  related: string[]

  principles?: TheoryPrinciple[]
  examples?: TheoryExample[]

  reflectionQuestions?: string[]
}
```

---

## Suggested Content Structure

```txt
src/
  content/
    theories/
      gestalt.ts
      hierarchy.ts
      color.ts
      typography.ts
      composition.ts

    glossary.ts

    challenges.ts
```

Adapt location to existing repository conventions.

---

## Theory Page Template

Each theory should support:

```txt
Theory Name

Short Definition

Why It Matters

Visual Example

Interactive Experiment

Weak vs Strong Example

Common Mistakes

Try It Yourself

Student Reflection

Related Theory

Key Takeaway
```

---

## Three Learning Depths

Prepare content to support:

```txt
Quick
Learn
Deep Dive
```

### Quick

30–60 second explanation.

### Learn

Main student explanation.

### Deep Dive

Optional advanced explanation.

---

## Tone

Prefer:

> Visual hierarchy helps viewers know what to look at first.

Avoid:

> Hierarchical saliency facilitates attentional prioritization.

Technical terms may still appear in Deep Dive sections.

---

## Important Educational Rule

Never present design theory as universal law.

Prefer:

> A common guideline is...

> This often helps when...

> One possible reason is...

Avoid:

> You must always...

> This is always better...

> Designers should never...