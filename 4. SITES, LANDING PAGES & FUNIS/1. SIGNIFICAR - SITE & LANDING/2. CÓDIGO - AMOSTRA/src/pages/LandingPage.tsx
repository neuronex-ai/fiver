import type { DeviceMode } from '../hooks/useDeviceMode'
import SiteChrome from '../components/layout/SiteChrome'
import ButtonLink from '../components/ui/ButtonLink'
import LeadForm from '../components/ui/LeadForm'
import VisualFrame from '../components/ui/VisualFrame'
import Botanical from '../components/brand/Botanical'
import { landingFaq } from '../content/pages'

const steps = [
  ['1. A primeira conversa', 'Você nos conta o que consegue contar hoje. Pode ser uma situação, uma sensação, uma repetição ou apenas a percepção de que algo precisa de atenção.'],
  ['2. Nós entendemos o seu momento', 'A escuta clínica ajuda a compreender contexto, história, movimentos que se repetem e aquilo que está mais presente agora.'],
  ['3. O processo ganha forma', 'A palavra continua central. Quando fizer sentido, corpo, respiração, imagem, movimento, natureza e recursos simbólicos podem entrar em diálogo.'],
  ['4. O caminho continua sendo seu', 'A terapia não acontece para dizer quem você deve ser. O processo cria espaço para perceber, elaborar e construir escolhas com mais consciência.'],
]

const differences = [
  ['Psicologia integrada', 'A escuta clínica organiza o processo sem reduzir você a um sintoma ou a uma única parte da sua história.'],
  ['Corpo em diálogo', 'Respiração, ritmo, tensão, movimento e percepção corporal podem trazer informações que nem sempre aparecem primeiro na fala.'],
  ['Natureza como experiência', 'Em algumas propostas, sair do ambiente habitual também faz parte do processo de atenção, presença e reflexão.'],
  ['Imagem e linguagem simbólica', 'Algumas experiências se tornam mais acessíveis quando podem ser vistas, representadas ou percebidas de outra maneira.'],
  ['Método autoral', 'A clínica reúne práticas e recursos desenvolvidos ao longo de mais de uma década de trabalho integrado.'],
  ['Presença antes de pressa', 'Nem todo processo precisa ser acelerado. Existe valor em compreender antes de concluir.'],
]

function LandingHeader({ device }: { device: DeviceMode }) {
  return (
    <div className={`landing-mini-nav landing-mini-nav--${device}`}>
      <a href="/" className="landing-mini-nav__back">← Site institucional</a>
      <a href="#conversa" className="landing-mini-nav__cta">Primeira conversa</a>
    </div>
  )
}

function LandingDesktop() {
  return (
    <SiteChrome device="desktop" className="landing-page landing-page--desktop">
      <LandingHeader device="desktop" />
      <section className="landing-hero landing-hero--desktop">
        <div className="landing-hero__copy">
          <p className="eyebrow">Clínica Ressignificar</p>
          <h1>Você não precisa chegar sabendo explicar tudo.</h1>
          <p className="landing-hero__lead">Às vezes, você só percebe que alguma coisa não está mais cabendo do mesmo jeito.</p>
          <p>Pode ser no corpo. Na rotina. Nas relações. Na sensação de estar vivendo no automático.</p>
          <strong>A terapia pode começar exatamente daí.</strong>
          <div className="button-row">
            <ButtonLink href="#conversa" magnetic>Agendar uma primeira conversa</ButtonLink>
            <ButtonLink href="#abordagem" tone="ghost" magnetic>Entender a abordagem</ButtonLink>
          </div>
          <p className="microcopy">Atendimento psicológico presencial e online.</p>
        </div>
        <div className="landing-hero__side">
          <VisualFrame label="Um espaço para começar a pergunta" />
          <div className="landing-proof-card">
            <span>Psicologia</span><span>Corpo</span><span>Natureza</span><span>Ancestralidade</span>
          </div>
        </div>
      </section>

      <section className="landing-pain">
        <div className="landing-pain__headline">
          <p className="eyebrow">Talvez isso seja familiar</p>
          <h2>Você já entendeu muita coisa. E, ainda assim, continua sentindo.</h2>
        </div>
        <div className="landing-pain__copy">
          <p>Você sabe por que determinada situação incomoda. Já percebeu padrões que se repetem. Talvez já tenha lido, pensado, conversado, tentado mudar algumas coisas.</p>
          <p>Mas existe uma diferença entre entender uma experiência e conseguir realmente entrar em contato com ela.</p>
          <p>Às vezes, o corpo percebe antes: a respiração muda, o ritmo acelera, a tensão aparece, o cansaço se acumula.</p>
          <blockquote>Nem tudo o que você sente começa em palavras.</blockquote>
        </div>
      </section>

      <section id="abordagem" className="landing-approach">
        <Botanical className="landing-approach__botanical" />
        <p className="eyebrow">A abordagem</p>
        <h2>Aqui, mente e corpo não precisam ser tratados como se fossem coisas separadas.</h2>
        <div className="landing-approach__grid">
          <p>Na Ressignificar, a psicologia é o ponto de partida. O processo pode incluir também percepção corporal, respiração, movimento, imagem, natureza e recursos simbólicos.</p>
          <p>Não como elementos soltos. Como diferentes formas de entrar em contato com a mesma pessoa: você.</p>
        </div>
        <div className="landing-four-words"><span>Psicologia.</span><span>Corpo.</span><span>Natureza.</span><span>Ancestralidade.</span></div>
      </section>

      <section className="landing-guide">
        <div className="landing-guide__quote">
          <p className="eyebrow">A Guia</p>
          <h2>Não vamos dizer qual é o seu caminho.</h2>
          <p>Vamos caminhar ao seu lado enquanto você o percebe.</p>
        </div>
        <div className="landing-guide__body">
          <p>A Ressignificar não parte da ideia de que existe uma resposta certa esperando para ser entregue. Nem uma versão ideal de você que precisa ser alcançada.</p>
          <p>Nosso trabalho é criar espaço para escuta, elaboração e presença. Fazer perguntas quando elas ajudam. Dar tempo quando o tempo é necessário.</p>
          <strong>Sem pressa de concluir. Sem fórmulas prontas.</strong>
        </div>
      </section>

      <section className="landing-steps">
        <header>
          <p className="eyebrow">Como funciona</p>
          <h2>Você não precisa saber por onde começar. Esse também é o nosso trabalho.</h2>
        </header>
        <div className="landing-steps__grid">
          {steps.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="landing-fit">
        <p className="eyebrow">Pode fazer sentido para você se...</p>
        <h2>Alguma parte da sua experiência parece pedir uma escuta diferente.</h2>
        <div className="landing-fit__list">
          {[
            'Você sente que está desconectada(o) de si, mesmo continuando a dar conta da rotina.',
            'Você compreende racionalmente muita coisa, mas algumas experiências continuam voltando.',
            'Uma terapia baseada apenas na fala talvez não contemple tudo o que está vivendo.',
            'Você tem curiosidade sobre a relação entre corpo, emoção e história.',
            'Você deseja um processo profundo, mas não quer respostas prontas.',
            'Você ainda não sabe exatamente o que está acontecendo — apenas percebe que algo merece atenção.',
          ].map((item) => <p key={item}><span>✦</span>{item}</p>)}
        </div>
      </section>

      <section className="landing-differences">
        <p className="eyebrow">O que sustenta o trabalho</p>
        <h2>Um processo que não termina na explicação.</h2>
        <div className="landing-differences__grid">
          {differences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="landing-journey">
        <div>
          <p className="eyebrow">Ressignificar no mundo</p>
          <h2>Algumas perguntas mudam quando o lugar também muda.</h2>
          <p>As jornadas ao Peru levam parte do trabalho da clínica para outro contexto: trilha, território, grupo, silêncio, movimento e paisagem.</p>
          <p>O Vale Sagrado não aparece como promessa. Aparece como experiência.</p>
          <ButtonLink href="/jornadas" tone="light">Conhecer as jornadas</ButtonLink>
        </div>
        <VisualFrame label="Vale Sagrado · Peru" />
      </section>

      <section className="landing-faq">
        <div className="landing-faq__intro"><p className="eyebrow">Antes de falar com a gente</p><h2>Talvez você queira saber.</h2></div>
        <div className="landing-faq__items">
          {landingFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <section id="conversa" className="landing-conversion">
        <div className="landing-conversion__copy">
          <p className="eyebrow">Primeira conversa</p>
          <h2>Você não precisa esperar conseguir explicar tudo.</h2>
          <p>Pode começar dizendo: “Eu sei que alguma coisa está acontecendo. Só ainda não sei muito bem o quê.”</p>
          <strong>O resto pode ser construído aos poucos.</strong>
        </div>
        <LeadForm source="landing-desktop" />
      </section>
    </SiteChrome>
  )
}

function LandingMobile() {
  return (
    <SiteChrome device="mobile" className="landing-page landing-page--mobile">
      <LandingHeader device="mobile" />
      <section className="landing-hero landing-hero--mobile">
        <p className="eyebrow">Clínica Ressignificar</p>
        <h1>Você não precisa chegar sabendo explicar tudo.</h1>
        <p>Às vezes, você só percebe que alguma coisa não está mais cabendo do mesmo jeito.</p>
        <strong>A terapia pode começar exatamente daí.</strong>
        <ButtonLink href="#conversa">Agendar primeira conversa</ButtonLink>
        <VisualFrame label="Um espaço para começar" />
      </section>

      <section className="landing-mobile-block landing-mobile-block--pain">
        <p className="eyebrow">Talvez isso seja familiar</p>
        <h2>Você já entendeu muita coisa. E, ainda assim, continua sentindo.</h2>
        <p>Existe uma diferença entre entender uma experiência e conseguir realmente entrar em contato com ela.</p>
        <blockquote>Nem tudo o que você sente começa em palavras.</blockquote>
      </section>

      <section id="abordagem" className="landing-mobile-block landing-mobile-block--approach">
        <p className="eyebrow">A abordagem</p>
        <h2>Mente e corpo não precisam ser tratados como coisas separadas.</h2>
        <p>A psicologia é o ponto de partida. Quando fizer sentido, corpo, respiração, imagem, movimento, natureza e recursos simbólicos podem entrar em diálogo.</p>
        <div className="landing-four-words landing-four-words--mobile"><span>Psicologia.</span><span>Corpo.</span><span>Natureza.</span><span>Ancestralidade.</span></div>
      </section>

      <section className="landing-mobile-block landing-mobile-block--guide">
        <p className="eyebrow">A Guia</p>
        <h2>Não vamos dizer qual é o seu caminho.</h2>
        <p>Vamos caminhar ao seu lado enquanto você o percebe. Sem pressa de concluir. Sem fórmulas prontas.</p>
      </section>

      <section className="landing-mobile-steps">
        <p className="eyebrow">Como funciona</p>
        <h2>Você não precisa saber por onde começar.</h2>
        {steps.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="landing-mobile-block landing-mobile-block--fit">
        <p className="eyebrow">Pode fazer sentido para você se...</p>
        <h2>Alguma parte da sua experiência parece pedir mais atenção.</h2>
        <ul>
          <li>Você segue dando conta da rotina, mas se sente desconectada(o) de si.</li>
          <li>Você entende muita coisa, mas alguns movimentos continuam voltando.</li>
          <li>Você quer uma abordagem que possa dialogar também com o corpo e a experiência.</li>
          <li>Você ainda não sabe exatamente o que está acontecendo.</li>
        </ul>
      </section>

      <section className="landing-mobile-differences">
        <p className="eyebrow">O que sustenta o trabalho</p>
        <h2>Um processo que não termina na explicação.</h2>
        {differences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="landing-mobile-journey">
        <p className="eyebrow">Jornadas no Peru</p>
        <h2>Algumas perguntas mudam quando o lugar também muda.</h2>
        <p>O Vale Sagrado aparece como contexto de presença e reflexão — não como promessa.</p>
        <ButtonLink href="/jornadas" tone="light">Conhecer jornadas</ButtonLink>
      </section>

      <section className="landing-mobile-faq">
        <p className="eyebrow">Dúvidas frequentes</p>
        {landingFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
      </section>

      <section id="conversa" className="landing-mobile-conversion">
        <p className="eyebrow">Primeira conversa</p>
        <h2>Você não precisa esperar conseguir explicar tudo.</h2>
        <p>O resto pode ser construído aos poucos.</p>
        <LeadForm compact source="landing-mobile" />
      </section>
    </SiteChrome>
  )
}

export default function LandingPage({ device }: { device: DeviceMode }) {
  return device === 'mobile' ? <LandingMobile /> : <LandingDesktop />
}
