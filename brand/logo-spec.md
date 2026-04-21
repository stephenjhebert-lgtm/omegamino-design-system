# OmegAmino Logo Specification

Documentation derived from observed usage in campaign assets and email templates. SVG/PNG source files are pending from Chase/Johnny — this doc covers everything known until they arrive.

---

## Wordmark

**Treatment:** `OmegΩAmino`

The Omega symbol (Ω) is embedded directly into the wordmark, replacing the "A" in "Amino" (or bridging "Omega" and "Amino"). It is not a separate icon — it is part of the logotype itself.

**Rendering observations (from campaign assets):**
- Displayed in all-caps or mixed-case depending on context
- Neon/outlined treatment used in promotional hero images (dark background)
- Solid fill treatment used for standard email header placement

---

## Color Variants

| Variant | Usage | Notes |
|---------|-------|-------|
| Cyan on dark | Primary email / digital | `#1AACF0` fill, `#141C29` background — matches existing email tokens |
| White on dark | Reversed / minimal | Used in email header contexts |
| Neon outlined | Promotional hero images | High-contrast campaign use only — not for email body |

> **Note:** No brand-defined logo color has been formally confirmed by Chase/Johnny. Cyan treatment is inferred from consistent usage in campaign assets and alignment with the `accent-blue` token already in the design system.

---

## Known Placement Patterns

Observed from `gary-welcome-email.html`, `influencer-email-template.html`, and Omnisend campaign screenshots:

- Logo appears at the **top of email** — handled by Omnisend's native header block (not the custom HTML blocks in this repo)
- The custom HTML block system starts *below* the logo/nav bar — logo is never embedded in a custom block
- Johnny (designer) has been placing the logo manually in Omnisend builds via the drag-and-drop header

---

## Files Needed

| File | Format | Priority | Request from |
|------|--------|----------|--------------|
| Primary wordmark | SVG | High | Chase / Johnny |
| Reversed (white) wordmark | SVG | High | Chase / Johnny |
| Wordmark + Ω mark isolated | SVG | Medium | Chase / Johnny |
| PNG fallback (600px wide) | PNG | Medium | Chase / Johnny |

**Where to add when received:** `assets/logos/` (create folder on receipt)

---

## Usage Rules (Inferred — Confirm with Chase)

- Do not stretch or recolor the wordmark outside the documented variants
- Ω symbol is part of the logotype — do not separate or substitute
- Minimum size: not yet defined — confirm with Johnny
- Clear space: not yet defined — confirm with Johnny

---

## What to Ask Chase/Johnny

> "Can you drop the OmegAmino logo SVG in Slack? Primary wordmark + white reversed version. We're adding it to the design system repo so it's consistent across all email builds going forward."
