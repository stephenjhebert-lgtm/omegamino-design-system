# OmegAmino Email Block System

Custom HTML snippets for Omnisend campaigns. Each block drops into Omnisend's **Custom HTML** block — use them alongside the native drag-and-drop editor for headers, images, and footers.

---

## How It Works

Omnisend handles: logo, hero image, unsubscribe footer, send infrastructure.  
These blocks handle: styled body sections that the drag-and-drop editor can't produce.

**Typical email structure:**
```
[Omnisend] Logo / nav bar
[Omnisend] Hero image or banner
[Custom HTML] section-header   ← your block
[Custom HTML] body-copy        ← your block
[Custom HTML] code-box         ← your block
[Custom HTML] divider          ← your block
[Custom HTML] section-header   ← your block
[Custom HTML] link-row         ← your block
[Omnisend] Footer / unsubscribe
```

---

## Folder Structure

```
email-blocks/
├── README.md          ← you are here
├── tokens.md          ← all colors, fonts, spacing — single source of truth
└── blocks/
    ├── section-header.html   opens a new content section
    ├── body-copy.html        paragraph text
    ├── code-box.html         affiliate / discount code display
    ├── link-row.html         left-border CTA card(s) with arrow
    ├── social-row.html       social platform icon + handle
    └── divider.html          hairline separator between sections
```

---

## Using a Block in Omnisend

1. Open the block file, copy all the HTML
2. In Omnisend's email editor, drag a **Custom HTML** block into position
3. Paste the HTML
4. Swap out the placeholder text (CAPS indicate what to change)
5. Repeat for each section

**What to customize in each block:**

| Block | What to change |
|---|---|
| `section-header` | `// LABEL LINE` and `HEADING TEXT` |
| `body-copy` | Paragraph text inside `<p>` tags |
| `code-box` | Label, `CODE`, and save line |
| `link-row` | `href` URL, `LINK TITLE`, subtitle text |
| `social-row` | `href` URL and `@HANDLE` |
| `divider` | Nothing — drop it as-is |

---

## Stacking Multiple Link Rows

The `link-row` block comes with two rows. To add more, duplicate the inner `<table>` block. To use only one, delete the second. Keep `style="margin-bottom:10px;"` on every row except the last.

---

## Using the Skill (Fastest Method)

Instead of copying files manually, use the `/omegamino-email` skill:

```
/omegamino-email  section-header | "// New Partner" | "Welcome to the Team"
/omegamino-email  code-box | "Affiliate Code" | "GARY" | "Save 10% at checkout"
/omegamino-email  link-row | "Shop OmegAmino" | "Use code GARY to save 10%." | https://omegamino.net
/omegamino-email  body-copy | "Gary brings a data-driven approach..."
/omegamino-email  social-row | "https://instagram.com/gaz_crosby_formula" | "@gaz_crosby_formula"
/omegamino-email  divider
```

The skill reads the tokens and block patterns automatically — you get back production-ready HTML, no setup required.

---

## Adding a New Block

1. Build the HTML snippet using values from `tokens.md`
2. Save it in `blocks/` as `block-name.html`
3. Add a row to the table above
4. Update the skill's block catalog (it reads from this folder)

All design decisions live in `tokens.md`. If a color or font needs to change globally, update it there and note which blocks need to be re-generated.

---

## Image Hosting Note

The `social-row` block currently uses an icons8 CDN for the Instagram icon. Before any production send, replace the `src` with an icon hosted on `omegamino.net` to avoid third-party blocking. All other blocks are image-free.
