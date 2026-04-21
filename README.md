# OmegAmino Design System

Brand voice, visual identity, and email component library for OmegAmino — a DTC sports supplement and peptide research compound brand.

This repo is intended to be consumed by AI tools (Claude, etc.) and human collaborators to maintain consistency across all email, copy, and design work.

---

## What's In Here

### Brand (`/brand`)

| File | Contents |
|------|----------|
| [`voice.md`](brand/voice.md) | Brand voice, tone dimensions, Chase voice rules, Steve-to-Chase communication style |
| [`audience.md`](brand/audience.md) | Audience profile, how they think, copy approach by segment, product catalog context |
| [`compliance.md`](brand/compliance.md) | FDA/FTC rules, banned phrases, compliance checklist — run on every draft |

### Design Tokens (`/design-tokens`)

| File | Contents |
|------|----------|
| [`colors.md`](design-tokens/colors.md) | Full color palette with hex values and usage rules |
| [`typography.md`](design-tokens/typography.md) | Font stacks, type scale, usage patterns |
| [`spacing.md`](design-tokens/spacing.md) | Padding, margin, component geometry |

### Email Blocks (`/email-blocks`)

| File | Contents |
|------|----------|
| [`README.md`](email-blocks/README.md) | How the block system works, Omnisend integration instructions |
| [`tokens.md`](email-blocks/tokens.md) | Single source of truth for all email HTML values |
| [`blocks/`](email-blocks/blocks/) | 6 production-ready HTML snippets for Omnisend custom HTML blocks |

---

## Email Block Library

| Block | File | Purpose |
|-------|------|---------|
| Section Header | `section-header.html` | Opens a content section with label + heading |
| Body Copy | `body-copy.html` | Paragraph text at brand spec |
| Code Box | `code-box.html` | Affiliate / discount code display |
| Link Row | `link-row.html` | Left-border CTA card(s) with arrow |
| Social Row | `social-row.html` | Instagram icon + handle |
| Divider | `divider.html` | Hairline separator between sections |

---

## What's Not Here Yet

- **Full brand guide** — `OmegAmino_Brand_Email_System_v2.md` (Google Drive — to be added)
- **Logo files** — SVG/PNG needed from Chase/Johnny
- **Web / landing page design tokens** — email tokens only currently
- **Strategy guide** — `OmegAmino_Strategy_Guide_v2.docx` (Google Drive)

---

## How to Use with Claude

Point Claude at this repo in any session:

```
"Use the OmegAmino design system at [repo URL] for all brand work."
```

Claude will read `CLAUDE.md` first, then pull relevant files as needed. The brand, voice, and compliance rules will be automatically applied to any copy or design task.

---

## ESP

**Omnisend** — all email blocks are built for Omnisend's Custom HTML block. See [`email-blocks/README.md`](email-blocks/README.md) for integration instructions.
