import type { DeviceMode } from '../hooks/useDeviceMode'
import SiteChrome from '../components/layout/SiteChrome'
import Botanical from '../components/brand/Botanical'
import ButtonLink from '../components/ui/ButtonLink'
import SectionIntro from '../components/ui/SectionIntro'
import VisualFrame from '../components/ui/VisualFrame'
import { homeHighlights } from '../content/pages'

function HighlightCards({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`home-highlights${mobile ? ' home-highlights--mobile' : ''}`}>
      {homeHighlights.map((item, index) => (
        <a className="home-highlight" href={item.href} key={item.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <strong>Conhecer →</strong>
        </a>
      ))}
    </div>
  )
}

function HomeDesktop() {
  return (
    <SiteChrome device="desktop" className="home-page home-page--desktop">
      <section className="home-hero home-hero--desktop">
        <div className="home-hero__copy">
          <p className="eyebrow">Clínica Ressignificar</p>
          <h1><span>Psicologia que </span><span>integra corpo, </span><span>natureza e </span><span>ancestralidade.</span></h1>
          <p className="home-hero__lede">
            Um espaço para compreender sua história sem separar aquilo que você pensa daquilo que você sente.
          </p>
          <div className="button-row">
            <ButtonLink href="/contato" magnetic>Agendar uma conversa</ButtonLink>
            <ButtonLink href="/abordagem" tone="ghost" magnetic>Conhecer a abordagem</ButtonLink>
          </div>
          <ul className="trust-line" aria-label="Modalidades e proposta">
            <li>Presencial</li><li>Online</li><li>Jornadas no Peru</li>
          </ul>
        </div>
        <div className="home-hero__visual">
          <VisualFrame label="Da sessão à trilha" />
          <div className="floating-note floating-note--one">Corpo, emoção e história em diálogo.</div>
          <div className="floating-note floating-note--two">Presença antes de pressa.</div>
        </div>
      </section>

      <section className="manifesto-section manifesto-section--desktop">
        <Botanical className="manifesto-section__botanical" />
        <div className="manifesto-section__copy">
          <p>Você é mais do que aquilo que consegue explicar.</p>
          <h2>Existe o que você pensa. E existe o que o corpo sente antes da explicação.</h2>
          <div className="manifesto-section__body">
            <p>Existe a sua história. E existem experiências que talvez ainda não tenham encontrado palavras.</p>
            <p>Na Ressignificar, tudo isso pode entrar na conversa.</p>
          </div>
        </div>
        <div className="manifesto-section__visual" aria-label="Espaço reservado para imagem ilustrativa">
          <VisualFrame label="Imagem ilustrativa" />
        </div>
      </section>

      <section className="guide-section guide-section--desktop">
        <div className="guide-section__sticky">
          <p className="eyebrow">A Guia</p>
          <h2>Não conduzimos pessoas a um destino. Conduzimos encontros.</h2>
        </div>
        <div className="guide-section__copy">
          <p>A Ressignificar não parte da ideia de que existe uma resposta certa esperando para ser entregue.</p>
          <p>Nosso papel é caminhar ao lado: acolher, perguntar, dar tempo quando o tempo é necessário e trazer recursos quando outras formas de perceber podem ampliar aquilo que está sendo vivido.</p>
          <ButtonLink href="/a-clinica" tone="forest">Conhecer a clínica</ButtonLink>
        </div>
      </section>

      <section className="home-services-section">
        <SectionIntro eyebrow="Frentes de trabalho" title="Diferentes formas de entrar em contato consigo." text="A clínica se organiza em frentes que compartilham a mesma base: escuta, presença, responsabilidade e profundidade." />
        <HighlightCards />
      </section>

      <section className="home-integrated-section">
        <div>
          <p className="eyebrow">Integração</p>
          <h2>Não é fazer “mais coisas” na terapia. É perceber você por inteiro.</h2>
        </div>
        <div className="home-integrated-section__columns">
          <p>Às vezes, conversar é suficiente. Em outros momentos, perceber a respiração, uma imagem, um movimento ou outro ambiente pode trazer uma percepção que a explicação ainda não alcançou.</p>
          <p>Nenhum recurso entra antes da pessoa. A escolha parte do contexto, da escuta e do que faz sentido naquele processo.</p>
        </div>
      </section>

      <section className="journey-banner">
        <div>
          <p className="eyebrow">Ressignificar no mundo</p>
          <h2>Da sessão no consultório à trilha no Vale Sagrado.</h2>
          <p>As jornadas ao Peru criam outro contexto de presença e reflexão em grupo, em contato com corpo, território, natureza e história.</p>
          <ButtonLink href="/jornadas" tone="light">Conhecer as jornadas</ButtonLink>
        </div>
        <VisualFrame label="Vale Sagrado · Peru" />
      </section>

      <section className="home-final-cta">
        <p className="eyebrow">Primeiro movimento</p>
        <h2>Talvez você não precise de uma resposta agora.</h2>
        <p>Talvez precise de um lugar para começar a pergunta.</p>
        <ButtonLink href="/contato">Agendar uma primeira conversa</ButtonLink>
      </section>
    </SiteChrome>
  )
}

function HomeMobile() {
  return (
    <SiteChrome device="mobile" className="home-page home-page--mobile">
      <section className="home-hero home-hero--mobile">
        <p className="eyebrow">Clínica Ressignificar</p>
        <h1>Psicologia que integra corpo, natureza e ancestralidade.</h1>
        <p>Um espaço para compreender sua história sem separar aquilo que você pensa daquilo que você sente.</p>
        <div className="button-stack">
          <ButtonLink href="/contato">Agendar conversa</ButtonLink>
          <ButtonLink href="/abordagem" tone="ghost">Conhecer a abordagem</ButtonLink>
        </div>
        <VisualFrame label="Presença · corpo · natureza" />
      </section>

      <section className="mobile-statement">
        <p>Você é mais do que aquilo que consegue explicar.</p>
        <h2>O corpo também participa da sua história.</h2>
      </section>

      <section className="mobile-guide">
        <p className="eyebrow">A Guia</p>
        <h2>Não conduzimos pessoas a um destino.</h2>
        <p>Conduzimos encontros. Sem respostas prontas, sem pressa de concluir, sem transformar sua história em um protocolo genérico.</p>
        <ButtonLink href="/a-clinica" tone="forest">Conhecer a clínica</ButtonLink>
      </section>

      <section className="home-services-section home-services-section--mobile">
        <SectionIntro eyebrow="Frentes de trabalho" title="Diferentes formas de entrar em contato consigo." />
        <HighlightCards mobile />
      </section>

      <section className="mobile-journey">
        <p className="eyebrow">Jornadas no Peru</p>
        <h2>Algumas perguntas mudam quando o lugar também muda.</h2>
        <p>O Vale Sagrado aparece como contexto de presença, território, caminhada e reflexão — não como promessa.</p>
        <ButtonLink href="/jornadas" tone="light">Conhecer as jornadas</ButtonLink>
      </section>

      <section className="home-final-cta home-final-cta--mobile">
        <p className="eyebrow">Primeiro movimento</p>
        <h2>Talvez você precise apenas de um lugar para começar a pergunta.</h2>
        <ButtonLink href="/contato">Falar com a equipe</ButtonLink>
      </section>
    </SiteChrome>
  )
}

export default function HomePage({ device }: { device: DeviceMode }) {
  return device === 'mobile' ? <HomeMobile /> : <HomeDesktop />
}
