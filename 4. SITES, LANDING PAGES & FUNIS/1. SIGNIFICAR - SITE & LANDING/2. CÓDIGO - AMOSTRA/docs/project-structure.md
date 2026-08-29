# Estrutura do projeto

```text
ressignificar-base/
├─ public/
│  ├─ brand/                 # marca provisória; substituir pelos ativos finais
│  ├─ images/                # fotos reais na próxima etapa de ativos
│  ├─ favicon.svg
│  ├─ manifest.webmanifest
│  ├─ robots.txt             # gerado automaticamente
│  ├─ sitemap.xml            # gerado automaticamente
│  └─ llms.txt               # índice complementar para agentes
├─ scripts/
│  ├─ build.mjs              # build client + SSR + prerender
│  ├─ prerender.mjs
│  ├─ generate-static-seo.mjs
│  ├─ seo-routes.mjs
│  └─ indexnow-submit.mjs
├─ src/
│  ├─ components/
│  │  ├─ brand/
│  │  ├─ layout/
│  │  └─ ui/
│  ├─ config/
│  ├─ content/
│  ├─ hooks/
│  ├─ lib/supabase/          # reservado para a etapa posterior
│  ├─ pages/
│  ├─ router/
│  ├─ seo/
│  └─ styles/
├─ docs/
├─ .env.example
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Rotas públicas

- `/` — site institucional
- `/landing` — landing de conversão
- `/a-clinica`
- `/abordagem`
- `/atendimento`
- `/jornadas`
- `/experiencias`
- `/profissionais`
- `/conteudos`
- `/area-de-membros`
- `/contato`
- `/mapa-do-site`
- `/privacidade`
- `/termos`
