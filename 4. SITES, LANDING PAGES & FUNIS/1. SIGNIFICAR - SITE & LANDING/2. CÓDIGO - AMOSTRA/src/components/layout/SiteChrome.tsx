import type { ReactNode } from 'react'
import type { DeviceMode } from '../../hooks/useDeviceMode'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function SiteChrome({ device, children, className = '' }: { device: DeviceMode; children: ReactNode; className?: string }) {
  return (
    <div className={`site site--${device} ${className}`.trim()} data-device={device}>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <SiteHeader device={device} />
      <main id="conteudo">{children}</main>
      <SiteFooter />
    </div>
  )
}
