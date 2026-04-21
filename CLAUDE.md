# OmegAmino Design System

This repo is the single source of truth for OmegAmino brand voice, visual identity, and email design. Read this file before doing any creative, copy, or design work for this brand.

## What's In This Repo

```
design-system/
├── CLAUDE.md                    ← you are here
├── README.md                    ← human-facing repo overview
├── SKILL.md                     ← Claude skill definition for design work
├── colors_and_type.css          ← CSS variables for all tokens (web/prototype use)
├── brand/
│   ├── voice.md                 ← brand voice, tone, Chase communication rules
│   ├── audience.md              ← audience profile and copy approach
│   ├── compliance.md            ← what never to say (FDA/FTC + style rules)
│   └── logo-spec.md             ← wordmark treatment, color variants, files needed
├── design-tokens/
│   ├── colors.md                ← full palette with hex + usage rules
│   ├── typography.md            ← font stacks, type scale, usage patterns
│   └── spacing.md               ← padding, margin, component geometry
├── assets/
│   ├── logos/
│   │   ├── wordmark-cyan-on-dark.svg
│   │   └── wordmark-white-on-dark.svg
│   └── campaign-examples/       ← reference PNGs from live campaigns
├── email-blocks/
│   ├── README.md                ← how the block system works
│   ├── tokens.md                ← single source of truth for all email token values
│   └── blocks/
│       ├── section-header.html
│       ├── body-copy.html
│       ├── code-box.html
│       ├── link-row.html
│       ├── social-row.html
│       └── divider.html
├── preview/                     ← standalone HTML previews for every token + block
│   ├── color-*.html
│   ├── type-*.html
│   ├── block-*.html
│   ├── voice-do-dont.html
│   ├── compliance-map.html
│   └── brand-wordmark.html
└── ui_kits/email/               ← JSX component library + interactive template picker
    ├── Tokens.jsx
    ├── Blocks.jsx
    ├── Templates.jsx
    ├── app.jsx
    └── index.html
```

## Quick Reference

**Brand:** OmegAmino — DTC sports supplement / peptide research compound brand  
**Audience:** Research-literate fitness enthusiasts, peptide and biohacking community  
**ESP:** Omnisend  
**Primary contact:** Chase Irons (founder)

## Key Rules (Never Break These)

1. **Voice:** Peer-level, not advisor-level. Read `brand/voice.md`.
2. **Compliance:** No mechanism language without a compliance pass. Read `brand/compliance.md`.
3. **Design:** All colors and fonts live in `design-tokens/` — never deviate.
4. **Email:** All email HTML must use values from `email-blocks/tokens.md`.
5. **Approval:** No campaign goes live without Steve reviewing in Omnisend first.

## Assets Not In This Repo

- **Full brand guide:** `OmegAmino_Brand_Email_System_v2.md` — Google Drive (source doc; repo is the structured version)
- **Strategy guide:** `OmegAmino_Strategy_Guide_v2.docx` — Google Drive
