# OmegAmino Email Design Tokens

Single source of truth for all email block values. Every block references these — do not override in individual snippets without a strong reason.

---

## Colors

| Token | Hex | Usage |
|---|---|---|
| `bg-body` | `#141C29` | Email body background |
| `bg-card` | `#0F1A2E` | Code boxes, link rows, header |
| `accent-blue` | `#1AACF0` | Labels, borders, arrows, accent |
| `accent-green` | `#B3FF00` | Affiliate / discount codes |
| `border-subtle` | `#1E3550` | Card borders |
| `divider` | `#1E2A38` | Hairline separators |
| `text-primary` | `#F4F6FA` | Headings, link titles |
| `text-secondary` | `#8A9BB5` | Subtitles, handles, captions |
| `text-body` | `#C7CAD0` | Body paragraph copy |
| `ig-gradient-fallback` | `#C13584` | Outlook fallback for Instagram icon |

> **Why solid colors, not rgba?** Outlook renders rgba() as black or transparent. All rgba values from the original design have been pre-computed to their solid hex equivalents on the relevant background.

---

## Typography

| Role | Font stack | Size | Weight | Transform | Spacing |
|---|---|---|---|---|---|
| Section label | `'Courier New', Courier, monospace` | 11px | normal | uppercase | 2.5px |
| Section heading | `'Trebuchet MS', Helvetica, Arial, sans-serif` | 22px | bold | uppercase | 4px |
| Hero heading | `'Trebuchet MS', Helvetica, Arial, sans-serif` | 36px | bold | uppercase | 5px |
| Body copy | `Helvetica, Arial, sans-serif` | 15px | normal | none | — |
| Link title | `'Trebuchet MS', Helvetica, Arial, sans-serif` | 16px | bold | uppercase | 2px |
| Link subtitle | `Helvetica, Arial, sans-serif` | 14px | normal | none | — |
| Code display | `'Trebuchet MS', Helvetica, Arial, sans-serif` | 30px | bold | uppercase | 5px |
| Mono label | `'Courier New', Courier, monospace` | 10px | normal | uppercase | 2px |
| Social handle | `'Courier New', Courier, monospace` | 13px | normal | none | — |

---

## Spacing

| Token | Value | Usage |
|---|---|---|
| `section-pad` | `24px 28px` | Standard section padding |
| `card-pad` | `14px 18px` | Link row card padding |
| `code-box-pad` | `18px 20px` | Affiliate code box padding |
| `side-margin` | `28px` | Left/right margin for dividers |

---

## Components

| Component | Border | Radius |
|---|---|---|
| Code box | `1px solid #1E3550` | `8px` |
| Link row | `border-left: 3px solid #1AACF0` | `0 6px 6px 0` |
| Instagram icon | none | `6px` |
| Divider | none | none |
