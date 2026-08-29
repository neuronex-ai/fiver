# Clínica Ressignificar — Site + Landing Page

Projeto React + TypeScript + Vite preparado para prévia local, build estático prerenderizado, SEO técnico e futura integração com Supabase.

## Estado atual

- ✅ Estrutura técnica
- ✅ Site institucional completo
- ✅ Landing page completa
- ✅ Versão mobile-first separada da versão tablet/desktop
- ✅ Sitemap, robots, metadata e JSON-LD
- ✅ Prerender estático para melhorar descoberta sem depender apenas de JavaScript
- ✅ Estrutura preparada para npm e pnpm
- ⏳ Fotos, logo final, favicon final e Open Graph rasterizado
- ⏳ Supabase / autenticação / persistência

## Requisitos

- Node.js 20.19+ ou versão 22.12+
- npm **ou** pnpm

## Rodar com npm

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Rodar com pnpm

```bash
pnpm install
pnpm dev
```

> “nmpm” provavelmente era **pnpm**. O projeto não exige um gerenciador específico.

## Rotas principais

- Site: `http://localhost:5173/`
- Landing: `http://localhost:5173/landing`
- Atendimento: `http://localhost:5173/atendimento`
- Jornadas: `http://localhost:5173/jornadas`
- Contato: `http://localhost:5173/contato`
- Mapa do site: `http://localhost:5173/mapa-do-site`

## Build e preview

```bash
npm run typecheck
npm run build
npm run preview
```

ou:

```bash
pnpm typecheck
pnpm build
pnpm preview
```

O build executa três etapas:

1. bundle do cliente;
2. bundle SSR temporário;
3. prerender de todas as rotas em HTML estático.

O resultado fica em `dist/`.

## Device router

Até `767px`, a aplicação entrega a árvore **mobile-first**. A partir de `768px` (tablet/desktop), entrega a árvore **desktop-first**. Veja `docs/device-routing.md`.

## SEO

Antes do deploy real, copie `.env.example` para `.env.local` e preencha pelo menos:

```env
VITE_SITE_URL=https://dominio-real.com.br
```

Sem essa variável, a prévia usa propositalmente `https://ressignificar.example` nos arquivos de SEO para evitar inventar um domínio real.

`npm run dev` e `npm run build` geram automaticamente:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

Veja `docs/seo-strategy.md`.

## IndexNow opcional

Depois de publicado e com uma chave válida:

```bash
VITE_SITE_URL=https://dominio-real.com.br INDEXNOW_KEY=sua-chave npm run seo:indexnow
```

A chave também precisa existir no domínio conforme o protocolo IndexNow.

## Formulários

Nesta etapa, os formulários **não salvam dados**. Eles apenas demonstram UX, validação básica e estados de envio. Persistência, autenticação e dados privados serão conectados somente na etapa Supabase.

## Dados profissionais e locais

O projeto não inventa:

- CRP;
- endereço;
- cidade;
- telefone;
- currículo das profissionais.

Esses dados entram somente quando forem confirmados. Isso também evita dados estruturados locais incorretos.

## Próximas etapas

1. Inserir fotos reais e ativos finais.
2. Revisar conteúdo com dados profissionais confirmados.
3. Conectar Supabase.
4. Validar SEO em Search Console / Rich Results Test.
5. Publicar em produção.
