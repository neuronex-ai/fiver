# Conteúdo do site

A copy estruturada das páginas internas está em `pages.ts`.

Home e landing possuem composição própria em `src/pages/HomePage.tsx` e `src/pages/LandingPage.tsx`, porque cada uma tem hierarquia de conversão e layouts mobile/desktop diferentes.

Ao alterar uma rota pública, lembre também de atualizar `scripts/seo-routes.mjs` para manter o sitemap sincronizado.
