# Portfolio landing page

Publish-ready bilingual portfolio built directly at the root of this repository. The existing portfolio source folders remain untouched and continue to be the source-of-truth archive.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

The landing opens in **English** and has a complete **Portuguese** version through the EN/PT selector.

## Before publishing

Open `src/siteConfig.ts` and fill the real URLs for:

- Fiverr profile
- Direct/custom project contact
- Landing page audit gig
- n8n lead follow-up gig
- Complete acquisition system gig

Until those values are added, the CTAs intentionally point to the on-page `#contact-setup` notice instead of using invented or broken links.

## Content principles

- NeuroNex is the flagship case and is described as a live product, without inventing user counts, revenue or adoption metrics.
- VortexOS is explicitly an advanced web/mobile prototype.
- Brand DNA is explicitly a prototype in development.
- AI use is described openly: execution is agent-assisted; product direction, decomposition, evaluation, integration, testing and final quality remain human responsibilities.
- No testimonials, fake performance metrics or private client data were added.

## Visual assets

The files under `public/projects/` are internal copies of already-curated project evidence from this same repository. Original source files were not modified or moved.
