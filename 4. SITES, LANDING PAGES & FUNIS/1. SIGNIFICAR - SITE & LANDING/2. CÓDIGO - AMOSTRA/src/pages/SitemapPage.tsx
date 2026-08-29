import type { DeviceMode } from '../hooks/useDeviceMode'
import SiteChrome from '../components/layout/SiteChrome'
import { routeDefinitions } from '../router/routes'

export default function SitemapPage({ device }: { device: DeviceMode }) {
  const routes = routeDefinitions.filter((route) => route.path !== '/landing' && route.path !== '/mapa-do-site')
  return (
    <SiteChrome device={device} className="sitemap-page">
      <section className="simple-hero">
        <p className="eyebrow">Mapa do site</p>
        <h1>Encontre o que procura sem precisar procurar demais.</h1>
        <p>Links diretos para as principais áreas da Clínica Ressignificar.</p>
      </section>
      <section className="sitemap-grid">
        {routes.map((route) => <a key={route.path} href={route.path}><strong>{route.title.split('|')[0].trim()}</strong><span>{route.description}</span></a>)}
      </section>
    </SiteChrome>
  )
}
