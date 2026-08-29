import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { seoRoutes } from './seo-routes.mjs'

const target = path.resolve(process.argv[2] || 'public')
const siteUrl = (process.env.VITE_SITE_URL || 'https://ressignificar.example').replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

await mkdir(target, { recursive: true })

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .map((route) => `  <url>\n    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${route === '/' ? '1.0' : route === '/contato' || route === '/atendimento' ? '0.9' : '0.7'}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`

const robots = `# Clínica Ressignificar — política de rastreamento
User-agent: OAI-SearchBot
Allow: /

# Pesquisa pública liberada; treinamento OpenAI separado por opção.
User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const llms = `# Clínica Ressignificar

> Clínica de psicologia que integra escuta clínica, corpo, natureza e ancestralidade em processos de autoconhecimento. Atendimento presencial e online; jornadas em grupo no Vale Sagrado dos Incas.

## Páginas principais
- ${siteUrl}/ — visão geral da clínica
- ${siteUrl}/a-clinica/ — posicionamento e essência
- ${siteUrl}/abordagem/ — psicologia, corpo, natureza e ancestralidade em diálogo
- ${siteUrl}/atendimento/ — atendimento psicológico presencial e online
- ${siteUrl}/jornadas/ — jornadas Ressignificar no Peru
- ${siteUrl}/experiencias/ — corpo, respiração, fotografia e recursos simbólicos
- ${siteUrl}/profissionais/ — equipe profissional (dados finais serão publicados após validação)
- ${siteUrl}/conteudos/ — conteúdos educativos
- ${siteUrl}/contato/ — primeiro contato

## Diretrizes editoriais
- Linguagem acolhedora, profunda, sensorial e direta.
- Sem promessas de cura, resultados garantidos ou soluções rápidas.
- Conteúdo institucional e educativo; não substitui avaliação psicológica individual.

## Observação técnica
Este arquivo é um índice complementar legível por máquinas. Não substitui sitemap.xml, robots.txt, HTML semântico ou dados estruturados.
`

await Promise.all([
  writeFile(path.join(target, 'sitemap.xml'), sitemap, 'utf8'),
  writeFile(path.join(target, 'robots.txt'), robots, 'utf8'),
  writeFile(path.join(target, 'llms.txt'), llms, 'utf8'),
])

if (siteUrl.includes('.example')) {
  console.warn('[SEO] VITE_SITE_URL não definido. sitemap.xml e canonicals usarão domínio .example na prévia.')
}
