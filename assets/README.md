# OmegAmino Assets

Visual assets used across the design system.

## logos/

- `wordmark-cyan-on-dark.svg` — **placeholder** lockup, cyan (`#1AACF0`) "OMEG" + white Ω + cyan "AMINO" on `#141C29`. Approximates the observed campaign treatment.
- `wordmark-white-on-dark.svg` — **placeholder** reversed lockup, all white on `#141C29`.

**⚠ These are placeholders.** Production SVG/PNG logo files are pending from Chase/Johnny. When received, drop them here and:

- Primary wordmark → `logos/wordmark-primary.svg`
- Reversed wordmark → `logos/wordmark-reversed.svg`
- Isolated Ω mark → `logos/omega-mark.svg`
- 600px PNG fallback → `logos/wordmark@600.png`

Then update `brand/logo-spec.md` and remove the placeholder warnings.

## Icons

The brand is text-first. The only production icon is Instagram (see `email-blocks/blocks/social-row.html`, currently served from icons8 CDN — needs to be self-hosted on `omegamino.net` before production sends). For web/prototype extensions, use Lucide icons from CDN.

## Imagery

No generic imagery in the system yet. Campaign hero images are provided per-send by Chase/Johnny.
