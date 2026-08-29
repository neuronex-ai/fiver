import { siteConfig } from '../config/site'
import { getRoute, normalizePath } from '../router/routes'
import { landingFaq } from '../content/pages'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function safeJson(value: unknown) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString()
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${siteConfig.siteUrl.replace(/\/$/, '')}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    logo: absoluteUrl('/brand/ressignificar-mark.svg'),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl.replace(/\/$/, '')}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    inLanguage: siteConfig.language,
    publisher: { '@id': `${siteConfig.siteUrl.replace(/\/$/, '')}/#organization` },
  }
}

function webpageSchema(path: string, title: string, description: string) {
  const type = path === '/a-clinica' ? 'AboutPage' : path === '/contato' ? 'ContactPage' : 'WebPage'
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': `${siteConfig.siteUrl.replace(/\/$/, '')}/#website` },
    about: { '@id': `${siteConfig.siteUrl.replace(/\/$/, '')}/#organization` },
  }
}


function breadcrumbSchema(path: string, label: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: label, item: absoluteUrl(path) },
    ],
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landingFaq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function getHeadHtml(pathname: string) {
  const route = getRoute(pathname)
  const path = normalizePath(pathname)
  const canonical = absoluteUrl(path === '/landing' ? '/landing' : path)
  const robots = route.index === false ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  const schemas: unknown[] = [organizationSchema(), websiteSchema(), webpageSchema(path, route.title, route.description)]
  if (path !== '/' && path !== '/landing') schemas.push(breadcrumbSchema(path, route.title.split('|')[0].trim()))
  if (path === '/landing') schemas.push(faqSchema())

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}">`,
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="${siteConfig.locale}">`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.name)}">`,
    `<meta property="og:title" content="${escapeHtml(route.title)}">`,
    `<meta property="og:description" content="${escapeHtml(route.description)}">`,
    `<meta property="og:url" content="${escapeHtml(canonical)}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}">`,
    `<script type="application/ld+json">${safeJson(schemas)}</script>`,
  ].join('\n    ')
}

export function applyClientHead(pathname: string) {
  if (typeof document === 'undefined') return
  const route = getRoute(pathname)
  const path = normalizePath(pathname)
  document.title = route.title

  const ensureMeta = (name: string, content: string) => {
    let element = document.querySelector(`meta[name=\"${name}\"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('name', name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  ensureMeta('description', route.description)
  ensureMeta('robots', route.index === false ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')

  let canonical = document.querySelector('link[rel=\"canonical\"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', absoluteUrl(path))
}
