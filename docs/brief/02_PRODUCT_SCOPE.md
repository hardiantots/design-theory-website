# 02_PRODUCT_SCOPE.md


## Product

# Design Theory City

Tagline:

> See why design works.

---

## Purpose

Build an interactive educational website that helps students understand visual-design principles through:

```txt
SEE
↓
COMPARE
↓
EXPERIMENT
↓
UNDERSTAND
↓
APPLY
```

This must NOT become a text-heavy online textbook.

---

## Audience

Primary users:

- Grade 9
- Grade 10
- Grade 11
- Grade 12

Secondary user:

- Teacher presenting design concepts in class

---

## Core Topics

Initial theory library:

1. Gestalt Principles
2. Visual Hierarchy
3. Focal Point
4. Contrast
5. Color Theory
6. Rule of Thirds
7. Grid Systems
8. Alignment
9. White Space
10. Balance
11. Scale
12. Proportion
13. Rhythm
14. Repetition
15. Typography
16. Visual Weight
17. Emphasis
18. Figure-Ground
19. Information Density
20. Visual Consistency

---

## Gestalt Subtopics

Include:

- Proximity
- Similarity
- Closure
- Continuity
- Figure-Ground
- Common Region
- Connectedness
- Common Fate

---

## Main Application Sections

```txt
Home
Explore
Theory
Playground
Challenges
Quick Reference
Glossary
Teacher Mode
```

---

## Out of Scope

Do NOT build initially:

- accounts
- cloud profiles
- cloud progress
- multiplayer
- teacher classroom management system
- assignment submission
- online grading
- backend database
- real-time collaboration
- CMS
- AI design scoring
- payment system
- email system

---

## State Strategy

Use frontend state only.

Preferred:

```txt
React state
↓
URL state when useful
↓
localStorage for persistent preferences/progress
```

Examples for localStorage:

```json
{
  "completedTheory": [],
  "completedChallenges": [],
  "bookmarks": [],
  "language": "en",
  "theme": "light"
}
```

Always handle missing/corrupted localStorage safely.

---

## Success Condition

Students should be able to answer:

> Why does this design work better?

rather than only:

> What is the definition of visual hierarchy?



---

