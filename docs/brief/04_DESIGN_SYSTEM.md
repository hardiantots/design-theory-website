# 04_DESIGN_SYSTEM.md


## Goal

The website itself must demonstrate the principles it teaches.

It should feel:

- modern
- visual
- educational
- editorial
- experimental
- polished

Avoid generic AI-generated aesthetics.

---

## Avoid

Do not overuse:

- glassmorphism
- huge gradients
- neon glow
- random blur blobs
- floating decorative spheres
- rounded cards everywhere
- excessive bento grids
- meaningless animations
- giant hero copy
- excessive shadows

---

## Color Strategy

Use a neutral interface because theory examples will contain many colors.

Suggested roles:

```txt
Background
Surface
Surface Elevated
Primary Text
Secondary Text
Border
Accent
Success
Warning
Danger
```

Use CSS variables.

Example:

```css
:root {
  --background: ...;
  --surface: ...;
  --text-primary: ...;
  --text-secondary: ...;
  --border: ...;
  --accent: ...;
}
```

Do not hard-code repeated values throughout components.

---

## Typography

Use no more than two primary font families.

Suggested hierarchy:

```txt
Display
H1
H2
H3
Body Large
Body
Small
Caption
Label
```

Use responsive typography.

Prefer:

```css
clamp()
```

for key type sizes.

---

## Spacing

Recommended scale:

```txt
4
8
12
16
24
32
48
64
96
128
```

Use tokens instead of arbitrary spacing.

---

## Border Radius

Do not make everything look like pill-shaped SaaS cards.

Use controlled radius values.

Example:

```txt
small
medium
large
full
```

`full` should mostly be reserved for:

- chips
- toggles
- circular controls

---

## Hierarchy

Important educational content should visually dominate UI chrome.

Priority:

```txt
Interactive Example
↓
Theory Explanation
↓
Controls
↓
Supporting Metadata
```

---

## Dark Mode

Optional.

If existing architecture supports it cleanly, retain it.

Do not delay MVP just to implement dark mode.



---

