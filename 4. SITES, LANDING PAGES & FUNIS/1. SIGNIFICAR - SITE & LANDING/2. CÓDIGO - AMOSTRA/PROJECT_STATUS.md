# Status da rodada — Site + Landing

Data: 2026-08-17

## Concluído

- Site institucional completo com rotas públicas.
- Landing page completa.
- Árvore mobile-first separada da árvore tablet/desktop.
- Design baseado nos tokens do brand book Ressignificar.
- Conteúdo alinhado à voz e aos limites éticos definidos para a marca.
- Prerender estático preparado no build.
- Sitemap XML + mapa do site humano.
- robots.txt com OAI-SearchBot liberado.
- JSON-LD, canonical, meta descriptions, breadcrumbs e FAQ estruturada.
- ARIA e HTML semântico.
- Estrutura pronta para npm ou pnpm.
- Supabase mantido fora desta etapa.

## Validação executada neste ambiente

- TypeScript validado estruturalmente com o compilador disponível no ambiente e stubs temporários para os pacotes que não estavam instalados.
- Scripts `.mjs` verificados com `node --check`.
- Gerador de sitemap/robots/llms executado com sucesso.
- Balanceamento de chaves CSS verificado.

## Limitação do ambiente

A instalação real de dependências via `npm install` expirou por timeout de acesso ao registry dentro deste ambiente, portanto o bundle Vite completo não pôde ser executado aqui. As versões declaradas no `package.json` correspondem a versões publicadas e o projeto está preparado para `npm install` ou `pnpm install` localmente.

## Antes de produção

- Definir domínio real em `VITE_SITE_URL`.
- Inserir CRP, cidade, endereço e contatos confirmados.
- Inserir fotos/logo/favicon finais.
- Conectar Supabase.
- Validar build, Rich Results, Search Console e Core Web Vitals no ambiente de publicação.

## Desktop fine tuning — v2.1

- Home hero typography reduced only on wide desktop so headline, CTAs and trust line fit the first fold more reliably.
- Home hero image placeholder realigned and nudged right for cleaner text/visual separation.
- Hero CTAs on desktop now use a subtle dependency-free magnetic pointer response; mobile behavior is unchanged and `prefers-reduced-motion` remains respected.
- Home manifesto/statement section now follows a balanced two-column desktop layout with a vertical image placeholder, using the approved contact hero as the spacing reference.
- Mobile layouts, existing logo/favicon, CRP placeholders and professional/contact placeholders were intentionally left unchanged.
