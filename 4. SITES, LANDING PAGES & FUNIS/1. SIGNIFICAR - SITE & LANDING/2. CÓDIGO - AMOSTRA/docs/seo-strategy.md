# Estratégia técnica de SEO e descoberta por agentes

## O que já está implementado

- páginas com URLs próprias e conteúdo textual semântico;
- prerender estático no `npm run build` / `pnpm build`;
- títulos e meta descriptions exclusivos por rota;
- canonical por página;
- `robots` meta com snippets liberados;
- `sitemap.xml` automático;
- `robots.txt` automático;
- `WebSite`, `MedicalOrganization`, `WebPage` / `AboutPage` / `ContactPage` em JSON-LD;
- `FAQPage` na landing, compatível com o conteúdo visível;
- navegação com links HTML reais (`<a href>`);
- sitemap humano em `/mapa-do-site`;
- ARIA e HTML semântico para acessibilidade e agentes que interpretam a interface;
- `llms.txt` complementar, sem tratá-lo como padrão de ranking;
- OAI-SearchBot explicitamente liberado no `robots.txt`;
- GPTBot bloqueado por padrão para separar descoberta pública de uso para treinamento;
- script opcional para submissão IndexNow após publicação;
- manifest e favicon provisórios.

## Antes de produção

1. Definir `VITE_SITE_URL` com o domínio real.
2. Preencher cidade, endereço, telefone, CRP e contatos confirmados.
3. Quando endereço e telefone estiverem confirmados, evoluir o JSON-LD para `MedicalClinic`/`LocalBusiness` com os campos obrigatórios corretos.
4. Inserir fotos reais, logo final e imagem Open Graph rasterizada.
5. Criar/validar Google Business Profile e Search Console.
6. Testar cada URL no Rich Results Test e URL Inspection.
7. Medir Core Web Vitals em mobile e desktop.
8. Enviar `sitemap.xml` no Search Console e, se desejado, usar IndexNow para mecanismos participantes.

## Conteúdo e intenção de busca

A arquitetura foi escrita para cobrir, sem keyword stuffing, intenções como:

- clínica de psicologia;
- atendimento psicológico presencial e online;
- terapia / psicologia e corpo;
- psicologia, natureza e autoconhecimento;
- abordagem psicológica integrada;
- jornadas de autoconhecimento no Peru / Vale Sagrado;
- dúvidas sobre primeira consulta de psicologia.

A localização não foi inventada. Assim que a cidade real for confirmada, ela deve entrar naturalmente em títulos, página de contato, dados estruturados e conteúdos locais.

## AI / navegadores com agentes

A estratégia não depende de “truques de GEO”. Ela prioriza conteúdo textual claro, arquitetura de links, dados estruturados coerentes, acesso de crawlers, acessibilidade e páginas rápidas. Isso também facilita sistemas de busca com IA e agentes de navegador.
