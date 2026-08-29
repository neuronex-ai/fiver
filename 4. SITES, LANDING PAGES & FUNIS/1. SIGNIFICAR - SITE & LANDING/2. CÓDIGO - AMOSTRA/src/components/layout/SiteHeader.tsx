import BrandMark from '../brand/BrandMark'
import ButtonLink from '../ui/ButtonLink'
import { primaryNav } from '../../config/site'
import type { DeviceMode } from '../../hooks/useDeviceMode'

export default function SiteHeader({ device }: { device: DeviceMode }) {
  if (device === 'mobile') {
    return (
      <header className="site-header site-header--mobile">
        <a className="site-header__brand" href="/" aria-label="Clínica Ressignificar — página inicial">
          <BrandMark compact />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span>Menu</span><span aria-hidden="true">＋</span></summary>
          <nav aria-label="Navegação principal">
            {primaryNav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href="/profissionais">Profissionais</a>
            <a href="/contato">Contato</a>
          </nav>
        </details>
      </header>
    )
  }

  return (
    <header className="site-header site-header--desktop">
      <a className="site-header__brand" href="/" aria-label="Clínica Ressignificar — página inicial">
        <BrandMark compact />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {primaryNav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <ButtonLink href="/contato" tone="forest">Agendar conversa</ButtonLink>
    </header>
  )
}
