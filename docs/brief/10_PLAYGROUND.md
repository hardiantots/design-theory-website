# 10_PLAYGROUND.md


## Objective

Create a lightweight frontend visual playground.

Do NOT attempt to reproduce Figma or Canva.

The playground only needs enough functionality to experiment with theory.

---

## Canvas Objects

Initial supported objects:

```txt
Text
Rectangle
Circle
Image Placeholder
Button
Divider
```

Do not add complex vector editing.

---

## Properties

Editable:

```txt
X
Y
Width
Height
Rotation
Fill
Opacity
Border
Font Size
Font Weight
Alignment
Layer
```

Use a simple inspector panel.

---

## Guides

Support optional overlays:

```txt
Rule of Thirds
Center Lines
Margins
4-column Grid
6-column Grid
12-column Grid
```

---

## Actions

Required:

```txt
Add
Duplicate
Delete
Move
Resize
Reset
Undo
Redo
```

If undo/redo introduces disproportionate complexity, implement a lightweight history stack.

---

## Persistence

Store playground state locally.

Example key:

```txt
design-theory-playground-v1
```

Use versioned localStorage keys so schema changes can be handled safely.

---

## Analyze Design

Provide heuristic frontend analysis only.

Possible observations:

```txt
Strong focal point
Similar text sizes may weaken hierarchy
Spacing appears inconsistent
Several elements are competing for attention
CTA contrast may be low
```

Use wording:

```txt
Observation
Consider
Possible Issue
```

Avoid:

```txt
Wrong
Bad Design
Design Score
```

---

## Analysis Limit

No AI or backend is required for MVP.

Simple deterministic rules are enough.

Example:

```txt
if headline size ≈ body size:
  suggest stronger typographic hierarchy
```

Make heuristic logic transparent and educational.