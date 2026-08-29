import { renderToString } from 'react-dom/server'
import App from './App'
import { getHeadHtml } from './seo/head'
import { routeDefinitions } from './router/routes'

export function render(path: string) {
  return renderToString(<App path={path} />)
}

export function getHead(path: string) {
  return getHeadHtml(path)
}

export function getPrerenderRoutes() {
  return routeDefinitions.map((route) => route.path)
}
