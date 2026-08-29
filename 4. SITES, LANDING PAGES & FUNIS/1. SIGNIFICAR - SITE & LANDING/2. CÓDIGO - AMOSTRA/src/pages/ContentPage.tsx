import { pages } from '../content/pages'
import type { DeviceMode } from '../hooks/useDeviceMode'
import { normalizePath } from '../router/routes'
import SiteChrome from '../components/layout/SiteChrome'
import ContentSection from '../components/ui/ContentSection'
import VisualFrame from '../components/ui/VisualFrame'
import LeadForm from '../components/ui/LeadForm'
import ButtonLink from '../components/ui/ButtonLink'

export default function ContentPage({ path, device }: { path: string; device: DeviceMode }) {
  const page = pages[normalizePath(path)]
  if (!page) return null

  const isContact = page.path === '/contato'

  if (device === 'mobile') {
    return (
      <SiteChrome device="mobile" className="content-page content-page--mobile">
        <section className="inner-hero inner-hero--mobile">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Início</a><span aria-hidden="true">/</span><span>{page.eyebrow}</span></nav>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroText}</p>
          <VisualFrame label={page.eyebrow} />
        </section>
        {page.sections.map((section, index) => <ContentSection key={section.id} section={section} index={index} />)}
        {isContact && (
          <section className="contact-form-section">
            <div>
              <p className="eyebrow">Primeiro contato</p>
              <h2>Você não precisa explicar toda a sua história aqui.</h2>
              <p>Esse primeiro contato serve apenas para entendermos como orientar você.</p>
            </div>
            <LeadForm source="contato-mobile" />
          </section>
        )}
      </SiteChrome>
    )
  }

  return (
    <SiteChrome device="desktop" className="content-page content-page--desktop">
      <section className="inner-hero inner-hero--desktop">
        <div className="inner-hero__copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Início</a><span aria-hidden="true">/</span><span>{page.eyebrow}</span></nav>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroText}</p>
          <ButtonLink href={isContact ? '#formulario' : '/contato'} tone="earth" magnetic>
            {isContact ? 'Preencher contato' : 'Falar com a equipe'}
          </ButtonLink>
        </div>
        <VisualFrame label={page.eyebrow} />
      </section>
      {page.sections.map((section, index) => <ContentSection key={section.id} section={section} index={index} />)}
      {isContact && (
        <section id="formulario" className="contact-form-section contact-form-section--desktop">
          <div>
            <p className="eyebrow">Primeiro contato</p>
            <h2>Você não precisa explicar toda a sua história aqui.</h2>
            <p>Esse primeiro contato serve apenas para entendermos como orientar você.</p>
          </div>
          <LeadForm source="contato-desktop" />
        </section>
      )}
    </SiteChrome>
  )
}
