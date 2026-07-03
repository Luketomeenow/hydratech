# HydraTech ME — Website Redesign

Modern redesign of [hydratech-me.com](https://www.hydratech-me.com), built with React, TypeScript, Vite, Tailwind CSS v4 and Motion. All content and imagery migrated from the original site.

## Stack

- **Vite + React 19 + TypeScript** — SPA with React Router
- **Tailwind CSS v4** — custom steel/accent design tokens in `src/index.css`
- **Motion** (`motion/react`) — scroll reveals and hero entrance, honoring `prefers-reduced-motion`
- **Phosphor Icons**, **Outfit Variable** (self-hosted via Fontsource)

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Deploying to Netlify

The repo is Netlify-ready out of the box:

- `netlify.toml` sets the build command (`npm run build`) and publish dir (`dist`), with an SPA redirect so client-side routes work on refresh.
- The contact form uses **Netlify Forms**: a hidden static mirror of the form lives in `index.html` so Netlify detects it at deploy time, and the React form POSTs url-encoded data. Submissions appear under **Forms** in the Netlify dashboard after the first deploy.

Just connect the repo in Netlify (or `netlify deploy --prod`) — no extra configuration needed.

## Project layout

```
src/
  data/site.ts          # all site content (company, services, products, rental fleet)
  data/serviceIcons.tsx  # icon per service
  components/            # Navbar, Footer, Reveal, PageHeader, CtaBand
  pages/                 # Home, About, Products, Services, ServiceDetail, RentalFleet, Contact
public/images/           # imagery migrated from the original site
content/                 # scraped source content + original image copies (reference only)
raw/                     # raw HTML archives of the original site (reference only)
```

## Notes

- The site is locked to a light theme to match the navy brand logo (rendered white via CSS filter on the dark footer).
- Original imagery is low resolution (≤ 844px wide); it is used in contained layouts to compensate. Replacing hero/service photos with higher-resolution photography would be the highest-impact next upgrade.
- Route slugs mirror the original service page names for SEO continuity.
