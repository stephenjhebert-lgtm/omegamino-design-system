# OmegAmino Email UI Kit

Interactive, high-fidelity recreations of OmegAmino email layouts — built from the tokens and blocks in the design system. Use these as reference for spec'ing new campaigns, or copy the rendered HTML straight into Omnisend Custom HTML blocks.

## What's here

```
ui_kits/email/
├── README.md          ← you are here
├── index.html         ← interactive preview (pick a template, see it render)
├── Tokens.jsx         ← centralized token object (colors, type, spacing)
├── Blocks.jsx         ← primitive email blocks as React components
│                         (SectionHeader, BodyCopy, CodeBox, LinkRow,
│                          Divider, SocialRow, EmailHeader, EmailFooter)
├── Layouts.jsx        ← layout families:
│                         - SingleColumn       (default stack)
│                         - HeroIntroBody      (hero + body copy + CTA)
│                         - LinkDigest         (section header + stacked link rows)
│                         - AffiliatePush      (code box campaign)
│                         - SideBySide         (2-col product grid)
│                         - ProtocolBreakdown  (section-header / body / divider repeat)
├── Templates.jsx      ← 5 complete email templates using the layouts above
└── app.jsx            ← the interactive picker app
```

## How to use

Open `index.html` in the browser. Pick a template from the left sidebar — the center pane shows an Omnisend-accurate render at 600px width, the right pane shows the HTML that goes into Custom HTML blocks.

## Templates included

1. **Welcome / onboarding** — New subscriber, peer-voice intro, one code + one link row.
2. **Partner drop** — New affiliate/athlete spotlight, code box + 2 link rows + social.
3. **Protocol education** — No discount. Section headers + body copy digest with one CTA.
4. **Stack digest** — Multiple compounds side-by-side, each with its own short hook.
5. **Re-engagement** — Lapsed subscriber, single hero link row, no hype, no urgency.

## Fidelity notes

- All components render using inline styles (email-safe). No Tailwind, no classes.
- Outer tables and cellpadding/cellspacing are preserved so exported HTML works in Omnisend.
- Colors, type, and spacing read from `Tokens.jsx` which mirrors `../../colors_and_type.css` and `../../email-blocks/tokens.md`.
- The Instagram icon still points at icons8 — swap to self-hosted before any production send.

## What this is NOT

- Not a full design tool. Use Omnisend's editor for the logo/hero/footer.
- Not a production renderer. For actual sends, copy the HTML from the right pane into Omnisend's **Custom HTML** block.
