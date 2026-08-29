import BrandMark from '../brand/BrandMark'
import { primaryNav, siteConfig } from '../../config/site'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <BrandMark />
        <p>Psicologia, corpo, natureza e ancestralidade em diálogo.</p>
        <p className="site-footer__small">Atendimento presencial e online. Jornadas e experiências.</p>
        {siteConfig.crp && <p className="site-footer__small">{siteConfig.crp}</p>}
      </div>
      <div>
        <strong>Explorar</strong>
        <nav aria-label="Links do rodapé">
          {primaryNav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="/profissionais">Profissionais</a>
          <a href="/contato">Contato</a>
        </nav>
      </div>
      <div>
        <strong>Informações</strong>
        <nav aria-label="Informações institucionais">
          <a href="/mapa-do-site">Mapa do site</a>
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de uso</a>
          <a href="/area-de-membros">Área de membros</a>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Clínica Ressignificar</span>
        <span>Conteúdo institucional e educativo. Não substitui avaliação psicológica individual.</span>
      </div>
    </footer>
  )
}
