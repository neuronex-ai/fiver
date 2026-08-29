import type { DeviceMode } from '../hooks/useDeviceMode'
import SiteChrome from '../components/layout/SiteChrome'
import ButtonLink from '../components/ui/ButtonLink'

export default function NotFoundPage({ device }: { device: DeviceMode }) {
  return (
    <SiteChrome device={device} className="not-found-page">
      <section className="simple-hero">
        <p className="eyebrow">404</p>
        <h1>Este caminho não leva a uma página.</h1>
        <p>Mas você pode voltar para a clínica digital por aqui.</p>
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </section>
    </SiteChrome>
  )
}
