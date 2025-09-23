# JournalBrand.com

Static marketing site for JournalBrand, a stealth company building confidential knowledge commerce infrastructure for enterprise operators and investment partners.

## Structure

The site is a fully static build designed for GitHub Pages:

- `index.html` – landing page with sections for thesis, platform capabilities, signals, and briefing request.
- `styles.css` – bespoke styling with responsive layout and high-contrast dark mode aesthetic.

All assets are self-contained and load from the public CDN for fonts.

## Local preview

Open `index.html` directly in a browser or serve the repository root with any static HTTP server, for example:

```bash
npx serve .
```

## Deployment

Publishing happens automatically via GitHub Pages when the default branch is updated.
