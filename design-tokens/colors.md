# OmegAmino Color System

All hex values are pre-computed solid colors. No rgba — Outlook renders rgba as black or transparent.

---

## Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-body` | `#141C29` | Primary background — email body, section backgrounds |
| `bg-card` | `#0F1A2E` | Elevated surfaces — code boxes, link row cards, section headers |
| `accent-blue` | `#1AACF0` | Primary accent — labels, borders, arrows, interactive elements |
| `accent-green` | `#B3FF00` | Highlight accent — affiliate/discount codes only |
| `border-subtle` | `#1E3550` | Card borders, container outlines |
| `divider` | `#1E2A38` | Hairline separators between sections |

---

## Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#F4F6FA` | Headings, link titles, primary display text |
| `text-secondary` | `#8A9BB5` | Subtitles, social handles, captions, labels |
| `text-body` | `#C7CAD0` | Body paragraph copy |

---

## Fallback Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ig-gradient-fallback` | `#C13584` | Outlook fallback for Instagram gradient icon |

---

## Visual Hierarchy

The palette is dark-mode native. Layering order:

```
bg-body (#141C29)          ← outermost layer
  └─ bg-card (#0F1A2E)     ← elevated card / container
       └─ accent-blue      ← interactive / highlight
```

`accent-green` is reserved for code/discount display only — do not use as a general accent.

---

## What's Missing (Needed from Chase/Johnny)

- [ ] Logo colors (primary, reversed, monochrome)
- [ ] Web / social palette (if different from email)
- [ ] Any seasonal or campaign-specific palette variants
