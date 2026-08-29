# Portfolio landing page

Publish-ready bilingual portfolio built directly at the root of this repository. The existing portfolio source folders remain untouched and continue to be the source-of-truth archive.

## Run locally / Dyad

```bash
npm install
cp .env.example .env.local
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

The landing opens in **English** and has a complete **Portuguese** version through the EN/PT selector.

## Contact and sales configuration

Public contact values are read from Vite environment variables. `.env.local` is intentionally ignored by Git.

The repository already includes safe public fallbacks for:

- WhatsApp: `+55 47 98873-0611`
- Email: `contato@jotage.site`

Copy `.env.example` to `.env.local` and add/override:

- `VITE_CONTACT_EMAIL`
- `VITE_CONTACT_WHATSAPP`
- `VITE_CONTACT_WHATSAPP_MESSAGE`
- `VITE_FIVERR_PROFILE`
- `VITE_FIVERR_GIG_LANDING_AUDIT`
- `VITE_FIVERR_GIG_N8N`
- `VITE_FIVERR_GIG_ACQUISITION`
- `VITE_LINKEDIN_URL` (optional; leave blank until professionally ready)
- `VITE_PROFILE_PHOTO_URL` (optional professional portrait)
- `VITE_SITE_URL` (reserved for the later publication/SEO pass)

Until Fiverr URLs exist, those CTAs fall back to the direct contact area instead of opening invented or broken links.

## Sales layer

The page now includes:

- stronger five-second identity for **Jhonatan Gasperi**;
- a concise personal section without turning the landing into a résumé;
- direct WhatsApp and professional email paths;
- a project brief form that prepares a structured email without storing form data;
- full legal/commercial footer with company name, CNPJ, business address and invoicing note;
- a lightweight privacy disclosure while no non-essential analytics/cookies are enabled;
- mobile screenshot crops and glass/contrast refinements;
- restrained motion improvements with `prefers-reduced-motion` support.

## Content principles

- NeuroNex is the flagship case and is described as a live product, without inventing user counts, revenue or adoption metrics.
- VortexOS is explicitly an advanced web/mobile prototype.
- Brand DNA is explicitly a prototype in development.
- AI use is described openly: execution is agent-assisted; product direction, decomposition, evaluation, integration, testing and final quality remain human responsibilities.
- No testimonials, fake performance metrics or private client data were added.

## Visual assets

The files under `public/projects/` are internal copies of already-curated project evidence from this same repository. Original source files were not modified or moved.

The professional portrait is intentionally **not invented**. Until `VITE_PROFILE_PHOTO_URL` points to a real image, the personal section shows a neutral JG placeholder.

## Later publication pass

Intentionally deferred until the visual/content review is approved:

- favicon and mobile icon;
- final site URL, canonical and social metadata;
- Open Graph image;
- `robots.txt` and `sitemap.xml`;
- course-map image optimization;
- click analytics / pixels / consent controls if used;
- final validation on the production domain.
