# OmegAmino Design System

This repo is the single source of truth for OmegAmino brand voice, visual identity, and email design. Read this file before doing any creative, copy, or design work for this brand.

## What's In This Repo

```
design-system/
├── CLAUDE.md                    ← you are here
├── README.md                    ← repo overview and usage
├── brand/
│   ├── voice.md                 ← brand voice, tone, Chase communication rules
│   ├── audience.md              ← audience profile and copy approach
│   ├── compliance.md            ← what never to say (FDA/FTC + style rules)
│   └── logo-spec.md             ← wordmark treatment, color variants, files needed
├── design-tokens/
│   ├── colors.md                ← full color palette with hex values
│   ├── typography.md            ← font stacks, sizes, weights
│   └── spacing.md               ← padding, margin, component spacing
└── email-blocks/
    ├── README.md                ← how the block system works
    ├── tokens.md                ← single source of truth for all email token values
    └── blocks/
        ├── section-header.html
        ├── body-copy.html
        ├── code-box.html
        ├── link-row.html
        ├── social-row.html
        └── divider.html
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

- **Logo SVG files:** Pending from Chase/Johnny — see `brand/logo-spec.md` for wordmark documentation and what to request
- **Full brand guide:** `OmegAmino_Brand_Email_System_v2.md` — Google Drive (source doc; repo is the structured version)
- **Strategy guide:** `OmegAmino_Strategy_Guide_v2.docx` — Google Drive
