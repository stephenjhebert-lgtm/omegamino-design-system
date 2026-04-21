# OmegAmino Typography System

All font stacks are web-safe for email compatibility (Outlook-safe).

---

## Font Families

| Role | Stack | Notes |
|------|-------|-------|
| Display / Headings | `'Trebuchet MS', Helvetica, Arial, sans-serif` | Primary brand font — bold, uppercase |
| Body | `Helvetica, Arial, sans-serif` | Readable at small sizes, universal |
| Mono / Labels | `'Courier New', Courier, monospace` | Technical feel — labels, handles, codes |

---

## Type Scale

| Role | Family | Size | Weight | Transform | Letter-spacing |
|------|--------|------|--------|-----------|---------------|
| Hero heading | Trebuchet MS | 36px | bold | uppercase | 5px |
| Section heading | Trebuchet MS | 22px | bold | uppercase | 4px |
| Link title | Trebuchet MS | 16px | bold | uppercase | 2px |
| Code display | Trebuchet MS | 30px | bold | uppercase | 5px |
| Body copy | Helvetica | 15px | normal | none | — |
| Link subtitle | Helvetica | 14px | normal | none | — |
| Section label | Courier New | 11px | normal | uppercase | 2.5px |
| Mono label | Courier New | 10px | normal | uppercase | 2px |
| Social handle | Courier New | 13px | normal | none | — |

---

## Usage Patterns

**Section opener pattern:**
```
[Courier New 11px / uppercase / accent-blue]  // LABEL LINE
[Trebuchet MS 22px / bold / uppercase / text-primary]  HEADING TEXT
```

**Link row pattern:**
```
[Trebuchet MS 16px / bold / uppercase / text-primary]  LINK TITLE  →
[Helvetica 14px / text-secondary]  Short description
```

**Code display pattern:**
```
[Courier New 10px / uppercase / text-secondary]  LABEL
[Trebuchet MS 30px / bold / uppercase / accent-green]  CODE
[Courier New 11px / text-secondary]  Save line
```

---

## Line Height

- Body copy: `1.6`
- All other elements: implicit (single-line display contexts)

---

## What's Missing (Needed from Chase/Johnny)

- [ ] Web / landing page typography (likely uses web fonts like Inter or similar)
- [ ] Mobile font size adjustments
- [ ] Any branded custom typeface
