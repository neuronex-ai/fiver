import { pages } from '../content/pages'

export type RouteKind = 'home' | 'landing' | 'content' | 'sitemap' | 'not-found'

export type RouteDefinition = {
  path: string
  kind: RouteKind
  title: string
  description: string
  index?: boolean
}

export const routeDefinitions: RouteDefinition[] = [
  {
    path: '/',
    kind: 'home',
    title: 'Clínica Ressignificar | Psicologia, corpo, natureza e ancestralidade',
    description:
      'Psicologia que integra corpo, natureza e ancestralidade. Atendimento psicológico presencial e online, experiências integradas e jornadas no Vale Sagrado dos Incas.',
  },
  {
    path: '/landing',
    kind: 'landing',
    title: 'Você não precisa chegar sabendo explicar tudo | Clínica Ressignificar',
    description:
      'Conheça a abordagem da Clínica Ressignificar e entenda como psicologia, corpo, natureza e ancestralidade podem entrar em diálogo no processo terapêutico.',
  },
  ...Object.values(pages).map((page) => ({
    path: page.path,
    kind: 'content' as const,
    title: page.title,
    description: page.description,
  })),
  {
    path: '/mapa-do-site',
    kind: 'sitemap',
    title: 'Mapa do site | Clínica Ressignificar',
    description: 'Acesse as principais páginas e conteúdos da Clínica Ressignificar.',
  },
]

export function normalizePath(pathname: string) {
  const pathOnly = pathname.split('?')[0].split('#')[0]
  const normalized = pathOnly.replace(/\/+$/, '')
  return normalized || '/'
}

export function getRoute(pathname: string): RouteDefinition {
  const path = normalizePath(pathname)
  return (
    routeDefinitions.find((route) => route.path === path) || {
      path,
      kind: 'not-found',
      title: 'Página não encontrada | Clínica Ressignificar',
      description: 'A página que você procura não foi encontrada.',
      index: false,
    }
  )
}
