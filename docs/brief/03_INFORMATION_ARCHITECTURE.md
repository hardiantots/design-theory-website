# 03_INFORMATION_ARCHITECTURE.md


## Route Structure

Adapt the exact implementation to the framework already used by the repository.

Recommended routes:

```txt
/

/explore

/theory
/theory/gestalt
/theory/gestalt/proximity
/theory/gestalt/similarity
/theory/gestalt/closure
/theory/gestalt/continuity

/theory/visual-hierarchy
/theory/focal-point
/theory/contrast
/theory/color
/theory/rule-of-thirds
/theory/grid
/theory/alignment
/theory/white-space
/theory/balance
/theory/scale
/theory/proportion
/theory/rhythm
/theory/repetition
/theory/typography
/theory/visual-weight

/playground

/challenges
/challenges/design-detective

/reference

/glossary

/teacher
```

---

## Main Navigation

Desktop:

```txt
Design Theory City

Explore
Theory
Playground
Challenges
Reference

Search
Teacher Mode
```

Mobile:

Use compact navigation.

Avoid displaying too many top-level navigation items at once.

---

## Theory Organization

Use categories.

### Perception

- Gestalt
- Figure-Ground
- Visual Weight
- Attention

### Hierarchy

- Visual Hierarchy
- Focal Point
- Contrast
- Emphasis
- Scale

### Composition

- Rule of Thirds
- Grid
- Alignment
- Balance
- Proportion
- White Space

### Color

- Hue
- Saturation
- Value
- Harmony
- Contrast
- Accessibility

### Typography

- Typeface
- Size
- Weight
- Leading
- Tracking
- Kerning
- Pairing
- Hierarchy

### Visual Systems

- Repetition
- Rhythm
- Consistency
- Design Systems

---

## Theory Relationships

Do not treat lessons as isolated pages.

Example:

```txt
Contrast
↓
Focal Point
↓
Hierarchy
↓
Attention
```

Example:

```txt
Proximity
↓
Grouping
↓
Information Structure
↓
Cognitive Load
```

---

## Student Flow

Recommended:

```txt
Home
↓
Theory discovery
↓
Visual example
↓
Interactive experiment
↓
Related theory
↓
Challenge
↓
Apply to own design
```

---

## Search

Frontend-only search.

No external search service.

Create an in-memory search index from theory metadata.

Search fields:

```txt
title
aliases
category
keywords
definition
related concepts
```

Example query:

```txt
my design looks crowded
```

Possible results:

```txt
White Space
Information Density
Visual Hierarchy
Alignment
Gestalt Proximity
```



---

