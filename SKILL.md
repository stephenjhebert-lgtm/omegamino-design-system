---
name: omegamino-design
description: Use this skill to generate well-branded interfaces and assets for OmegAmino — a DTC peptide research compound / sports supplement brand — either for production email campaigns or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, compliance rules, and an email UI kit.
user-invocable: true
---

# OmegAmino Design

Read `README.md` in this skill first for full context. Then explore:

- `brand/voice.md` — peer-level voice rules, banned phrases (incl. em dashes).
- `brand/compliance.md` — **always run the checklist before delivering copy.** FDA/FTC rules; GLP-1 is high-risk; Melanotan 2 is off-limits.
- `brand/audience.md` — who the reader is, segment-specific approach.
- `design-tokens/` — colors, typography, spacing reference.
- `colors_and_type.css` — CSS variables for all tokens and semantic element styles.
- `email-blocks/` — six production-ready Omnisend Custom HTML snippets.
- `ui_kits/email/` — interactive template picker + reusable JSX components for layouts (single-column stack, side-by-side, hero+body, digest, affiliate push, re-engagement).
- `assets/logos/` — placeholder wordmarks (real SVG files pending from Chase/Johnny).

## What this brand looks and sounds like

- **Voice:** Peer-level, science-literate, direct. Lead with insight, not setup. No hype words, no em dashes.
- **Visuals:** Dark-mode native (`#141C29` body, `#0F1A2E` card). Cyan accent `#1AACF0`. Neon green `#B3FF00` reserved for affiliate/discount codes only. Trebuchet MS for ALL-CAPS headings with 2–5px letter-spacing, Helvetica for body, Courier New for labels/handles.
- **Email-safe:** Solid hex only (never rgba), table-based layout, 28px side margin fixed across every block.
- **No:** shadows, gradients (except the Instagram icon), emoji, em dashes, hype language, outcome claims.

## How to use the skill

If creating visual artifacts (email mocks, landing page drafts, throwaway prototypes):
1. Copy assets out of this skill (`assets/logos/`, `colors_and_type.css`, any `email-blocks/blocks/*.html`).
2. Build a static HTML file for the user to view.
3. Use the UI kit components in `ui_kits/email/` as reference — the layout families are the reusable templates Steve uses in Omnisend.

If working on production email:
1. Pick the closest template in `ui_kits/email/Templates.jsx` — that's the layout.
2. Draft the copy against `brand/voice.md`. Run it against `brand/compliance.md`.
3. Export the inline-style HTML (the UI kit's index shows a copy-ready pane) or hand-assemble from `email-blocks/blocks/*.html`.
4. Paste into an Omnisend Custom HTML block. Keep native Omnisend blocks for the logo, hero, and footer.

If the user invokes this skill without other guidance, ask:
- What channel — email, landing page, social, something else?
- What compound(s) or campaign angle? (triggers the right compliance posture)
- Which audience segment — cold, engaged, lapsed? (shapes the copy approach)
- Which layout template fits, or does this need a new one?

Then act as an expert designer and output HTML artifacts or production code. Always run the compliance checklist before handing back copy.
