# OmegAmino Spacing System

Email spacing values. All measurements in pixels.

---

## Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `section-pad` | `24px 28px` | Standard section padding (top/bottom + left/right) |
| `card-pad` | `14px 18px` | Link row card internal padding |
| `code-box-pad` | `18px 20px` | Affiliate code box internal padding |
| `side-margin` | `28px` | Left/right margin — consistent across all blocks |

---

## Vertical Rhythm

| Context | Value |
|---------|-------|
| Paragraph spacing (non-final) | `margin-bottom: 16px` |
| Paragraph spacing (final `<p>`) | `margin: 0` |
| Label-to-heading gap | `margin-bottom: 6px` |
| Between link rows | `margin-bottom: 10px` |
| Code label-to-code gap | `margin-bottom: 6px` |
| Code-to-save-line gap | `margin-top: 6px` |

---

## Component Geometry

| Component | Border | Border Radius |
|-----------|--------|--------------|
| Code box | `1px solid #1E3550` | `8px` |
| Link row card | `border-left: 3px solid #1AACF0` | `0 6px 6px 0` |
| Instagram icon | none | `6px` |
| Divider | none | none |

---

## Layout Notes

- `side-margin` (28px) is consistent across all blocks — never change per-block
- Email max-width is controlled by Omnisend's wrapper, not by these blocks
- All blocks are `width="100%"` and fill the content column
