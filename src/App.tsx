import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Languages,
  Layers3,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from "lucide-react";
import { copy, type Language } from "./content";
import { getConfiguredLink, hasConfiguredLink, type LinkKey } from "./siteConfig";

const PROJECTS = {
  neuronexOverview: "/projects/neuronex-desktop.jpg",
  neuronexDashboard: "/projects/neuronex-dashboard.webp",
  neuronexVoice: "/projects/neuronex-voice.webp",
  neuronexMobile: "/projects/neuronex-mobile.jpg",
  vortexMain: "/projects/vortex-main.png",
  vortexSecondary: "/projects/vortex-secondary.png",
  a3Landings: "/projects/a3-landings.jpg",
  a3Funnel: "/projects/a3-funnel.png",
  a3Social: "/projects/a3-social.jpg",
  courseMap: "/projects/course-map.png",
  significarBrand: "/projects/significar-brand.jpg",
  metalContent: "/projects/metal-content.jpg",
} as const;

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Eyebrow = ({ children, invert = false }: { children: ReactNode; invert?: boolean }) => (
  <div className={invert ? "eyebrow eyebrow--dark" : "eyebrow"}>
    <span className="eyebrow-dot" />
    {children}
  </div>
);

const ArrowIcon = () => <ArrowRight aria-hidden="true" size={16} strokeWidth={1.9} />;

const SmartLink = ({
  linkKey,
  children,
  className = "",
}: {
  linkKey: LinkKey;
  children: ReactNode;
  className?: string;
}) => {
  const configured = hasConfiguredLink(linkKey);
  const href = getConfiguredLink(linkKey);
  return (
    <a
      href={href}
      className={className}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noreferrer" : undefined}
      data-needs-setup={!configured || undefined}
    >
      {children}
    </a>
  );
};

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const LanguageSwitch = ({ language, onChange }: { language: Language; onChange: (next: Language) => void }) => (
  <div className="language-switch" aria-label="Language selector">
    <Languages size={15} aria-hidden="true" />
    <button className={language === "en" ? "is-active" : ""} onClick={() => onChange("en")} aria-pressed={language === "en"}>
      EN
    </button>
    <span>/</span>
    <button className={language === "pt" ? "is-active" : ""} onClick={() => onChange("pt")} aria-pressed={language === "pt"}>
      PT
    </button>
  </div>
);

const GlassDevice = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`device-shell ${className}`}>
    <div className="device-topbar">
      <span /><span /><span />
      <div className="device-url">product / live interface</div>
    </div>
    <div className="device-canvas">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  </div>
);

const Header = ({ language, onLanguage }: { language: Language; onLanguage: (next: Language) => void }) => {
  const t = copy[language];
  const [open, setOpen] = useState(false);
  const links = [
    ["work", t.nav.work],
    ["method", t.nav.method],
    ["services", t.nav.services],
    ["faq", t.nav.faq],
  ] as const;

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Portfolio home">
        <span className="wordmark-mark">J</span>
        <span>Jhonatan Oliveira</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([id, label]) => (
          <button key={id} onClick={() => scrollToId(id)}>{label}</button>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitch language={language} onChange={onLanguage} />
        <button className="nav-cta" onClick={() => scrollToId("services")}>{t.nav.cta}<ArrowIcon /></button>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu-panel" initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }}>
              <div className="mobile-menu-head">
                <span className="wordmark"><span className="wordmark-mark">J</span>Portfolio</span>
                <button className="menu-button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} /></button>
              </div>
              {links.map(([id, label]) => (
                <button className="mobile-menu-link" key={id} onClick={() => { setOpen(false); scrollToId(id); }}>{label}<MoveRight size={18} /></button>
              ))}
              <LanguageSwitch language={language} onChange={onLanguage} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ language }: { language: Language }) => {
  const t = copy[language].hero;
  const reduce = useReducedMotion();
  return (
    <section id="top" className="hero section-light">
      <div className="hero-lumen" aria-hidden="true" />
      <div className="container hero-copy">
        <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          {t.titleA}<br /><span>{t.titleB}</span>
        </motion.h1>
        <motion.p className="hero-body" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.2 }}>{t.body}</motion.p>
        <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, delay: 0.3 }}>
          <button className="button button--dark" onClick={() => scrollToId("work")}>{t.primary}<ArrowIcon /></button>
          <button className="button button--ghost" onClick={() => scrollToId("services")}>{t.secondary}<ArrowIcon /></button>
        </motion.div>
        <motion.div className="hero-note" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.42 }}>
          <span>{t.note}</span><span className="hero-note-divider" /><span>{t.proof}</span>
        </motion.div>
      </div>
      <div className="container hero-proof">
        <motion.div className="hero-proof-stage" initial={reduce ? false : { opacity: 0, y: 42, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>
          <div className="proof-glow" aria-hidden="true" />
          <GlassDevice src={PROJECTS.neuronexOverview} alt="NeuroNex desktop overview" className="hero-device" />
          <div className="floating-proof floating-proof--a"><span>Product direction</span><strong>from idea → system</strong></div>
          <div className="floating-proof floating-proof--b"><span>Execution model</span><strong>human direction + AI agents</strong></div>
        </motion.div>
      </div>
    </section>
  );
};

const Intro = ({ language }: { language: Language }) => {
  const t = copy[language].intro;
  return (
    <section className="intro-section section-light">
      <div className="container intro-grid">
        <Reveal className="intro-sticky"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2></Reveal>
        <div className="intro-story">
          <Reveal><p>{t.bodyA}</p></Reveal>
          <Reveal delay={0.08}><p>{t.bodyB}</p></Reveal>
          <Reveal delay={0.12}><blockquote><Sparkles size={18} />{t.quote}</blockquote></Reveal>
        </div>
      </div>
    </section>
  );
};

const NeuroNexCase = ({ language }: { language: Language }) => {
  const t = copy[language].neuronex;
  return (
    <section id="work" className="neuronex-case section-dark">
      <div className="dark-lumen" aria-hidden="true" />
      <div className="container">
        <Reveal><div className="case-heading"><div><Eyebrow invert>{t.eyebrow}</Eyebrow><div className="status-pill status-pill--live"><span />{t.status}</div></div><h2>{t.titleA}<br /><span>{t.titleB}</span></h2></div></Reveal>
        <div className="case-intro-grid">
          <Reveal><p className="case-lead">{t.body}</p></Reveal>
          <Reveal delay={0.08}><div className="case-live-note"><span className="live-pulse" />{t.live}</div></Reveal>
        </div>
        <Reveal className="neuronex-stage">
          <GlassDevice src={PROJECTS.neuronexDashboard} alt="NeuroNex live dashboard" className="device-shell--dark" />
          <div className="case-stage-label"><span>{t.visualLabel}</span><strong>NeuroNex</strong></div>
        </Reveal>
        <div className="module-ribbon">
          {t.labels.map((label) => <span key={label}>{label}</span>)}
        </div>
        <div className="neuronex-evidence-grid">
          <Reveal className="evidence-frame evidence-frame--wide"><div className="evidence-label"><span>Synapse</span>{t.voiceLabel}</div><img src={PROJECTS.neuronexVoice} alt="NeuroNex Synapse voice interface" loading="lazy" /></Reveal>
          <Reveal delay={0.08} className="evidence-frame evidence-frame--mobile"><div className="evidence-label"><span>Mobile</span>{t.mobileLabel}</div><img src={PROJECTS.neuronexMobile} alt="NeuroNex mobile interface overview" loading="lazy" /></Reveal>
        </div>
        <Reveal className="takeaway"><span className="takeaway-index">↳</span><div><strong>{t.takeawayTitle}</strong><p>{t.takeaway}</p></div></Reveal>
      </div>
    </section>
  );
};

const SelectedCases = ({ language }: { language: Language }) => {
  const t = copy[language].selected;
  const cases = [
    { key: "vortex", image: PROJECTS.vortexMain, alt: "VortexOS industrial management interface", data: t.vortex },
    { key: "acquisition", image: PROJECTS.a3Landings, alt: "A3 Nexchain segmented landing pages", data: t.acquisition },
  ] as const;
  return (
    <section className="selected-cases section-light">
      <div className="container">
        <Reveal className="center-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p></Reveal>
        <div className="editorial-cases">
          {cases.map((item, index) => (
            <article className={`editorial-case editorial-case--${index + 1}`} key={item.key}>
              <Reveal className="editorial-case-copy">
                <div className="case-kicker"><span>0{index + 2}</span><span>{item.data.status}</span></div>
                <h3>{item.data.name}</h3><h4>{item.data.title}</h4><p>{item.data.body}</p>
                <div className="tag-row">{item.data.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </Reveal>
              <Reveal delay={0.08} className="editorial-case-visual">
                <div className="project-frame"><img src={item.image} alt={item.alt} loading="lazy" /></div>
                {item.key === "acquisition" && <div className="mini-flow"><span>Message</span><MoveRight /><span>Page</span><MoveRight /><span>WhatsApp</span><MoveRight /><span>Automation</span></div>}
                {item.key === "vortex" && <div className="mini-caption">Vision · OM · HR · SM</div>}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = ({ language }: { language: Language }) => {
  const t = copy[language].capabilities;
  return (
    <section className="capabilities-section section-warm">
      <div className="container">
        <Reveal className="capabilities-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p></Reveal>
        <div className="capability-list">
          {t.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.04} className="capability-row">
              <span className="capability-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><span className="capability-evidence">{item.evidence}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Method = ({ language }: { language: Language }) => {
  const t = copy[language].method;
  return (
    <section id="method" className="method-section section-light">
      <div className="container">
        <Reveal className="method-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p></Reveal>
        <div className="method-track">
          <div className="method-line" aria-hidden="true" />
          {t.steps.map((step, index) => (
            <Reveal key={step.n} delay={Math.min(index * 0.035, 0.2)} className="method-step">
              <div className="method-node">{step.n}</div><h3>{step.title}</h3><p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectedSystem = ({ language }: { language: Language }) => {
  const t = copy[language].connect;
  return (
    <section className="connected-section section-dark">
      <div className="container connected-grid">
        <Reveal className="connected-copy"><Eyebrow invert>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p></Reveal>
        <div className="connected-chain">
          {t.chain.map(([name, body], index) => (
            <Reveal key={name} delay={index * 0.035} className="connected-node">
              <span className="connected-number">0{index + 1}</span><div><strong>{name}</strong><p>{body}</p></div>{index < t.chain.length - 1 && <div className="connected-wire" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Breadth = ({ language }: { language: Language }) => {
  const t = copy[language].breadth;
  const entries = [
    { data: t.course, image: PROJECTS.courseMap, className: "breadth-card--course" },
    { data: t.n8n, image: null, className: "breadth-card--n8n" },
    { data: t.significar, image: PROJECTS.significarBrand, className: "breadth-card--brand" },
    { data: t.metal, image: PROJECTS.metalContent, className: "breadth-card--metal" },
    { data: t.brandDna, image: null, className: "breadth-card--dna" },
  ] as const;
  return (
    <section className="breadth-section section-light">
      <div className="container">
        <Reveal className="center-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2></Reveal>
        <div className="breadth-grid">
          {entries.map((entry, index) => (
            <Reveal key={entry.data.name} delay={(index % 2) * 0.05} className={`breadth-card ${entry.className}`}>
              {entry.image ? <div className="breadth-image"><img src={entry.image} alt={`${entry.data.name} project evidence`} loading="lazy" /></div> : <div className="abstract-evidence" aria-hidden="true">{entry.data.name === t.n8n.name ? <><span>Lead</span><i /><span>AI</span><i /><span>Data</span><i /><span>Follow-up</span></> : <><Layers3 /><span>brand</span><span>→</span><span>system</span></>}</div>}
              <div className="breadth-copy"><span>{entry.data.meta}</span><h3>{entry.data.name}</h3><p>{entry.data.body}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = ({ language }: { language: Language }) => {
  const t = copy[language].services;
  return (
    <section id="services" className="services-section section-warm">
      <div className="container">
        <Reveal className="services-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p></Reveal>
        <div className="service-stack">
          {t.cards.map((card, index) => (
            <Reveal key={card.key} delay={index * 0.06} className={`service-card service-card--${index + 1}`}>
              <div className="service-number">{card.number}</div>
              <div className="service-main"><div className="service-price-row"><strong>{card.price}</strong><span>{card.timing}</span></div><h3>{card.title}</h3><p>{card.body}</p></div>
              <div className="service-includes">{card.includes.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div>
              <div className="service-action"><span>{card.foot}</span><SmartLink linkKey={card.key as LinkKey} className="service-link">{t.fiverr}<ExternalLink size={15} /></SmartLink></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="custom-project-callout"><div><span>{language === "en" ? "Need something broader?" : "Precisa de algo maior?"}</span><strong>{language === "en" ? "Products, systems and unusual scopes can start with a conversation." : "Produtos, sistemas e escopos fora do padrão podem começar por uma conversa."}</strong></div><SmartLink linkKey="directContact" className="button button--dark">{t.direct}<ArrowIcon /></SmartLink></Reveal>
      </div>
    </section>
  );
};

const Trust = ({ language }: { language: Language }) => {
  const t = copy[language].trust;
  return (
    <section className="trust-section section-light">
      <div className="container trust-grid">
        <Reveal className="trust-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2></Reveal>
        <div className="trust-list">{t.items.map(([title, body], index) => <Reveal key={title} delay={index * 0.05} className="trust-item"><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div></Reveal>)}</div>
      </div>
    </section>
  );
};

const FAQ = ({ language }: { language: Language }) => {
  const t = copy[language].faq;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq-section section-light">
      <div className="container faq-grid">
        <Reveal className="faq-heading"><Eyebrow>{t.eyebrow}</Eyebrow><h2>{t.title}</h2></Reveal>
        <div className="faq-list">
          {t.items.map((item, index) => {
            const active = open === index;
            return <div className={`faq-item ${active ? "is-open" : ""}`} key={item.q}><button onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}><span>{item.q}</span><ChevronDown size={18} /></button><AnimatePresence initial={false}>{active && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32 }}><p>{item.a}</p></motion.div>}</AnimatePresence></div>;
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ language }: { language: Language }) => {
  const t = copy[language].final;
  return (
    <section className="final-section section-dark">
      <div className="final-lumen" aria-hidden="true" />
      <div className="container final-inner">
        <Reveal><Eyebrow invert>{t.eyebrow}</Eyebrow><h2>{t.title}</h2><p>{t.body}</p><div className="final-actions"><SmartLink linkKey="fiverrProfile" className="button button--light">{t.primary}<ExternalLink size={16} /></SmartLink><SmartLink linkKey="directContact" className="button button--dark-ghost">{t.secondary}<ArrowIcon /></SmartLink></div></Reveal>
      </div>
    </section>
  );
};

const SetupNotice = ({ language }: { language: Language }) => {
  const t = copy[language].setup;
  const allReady = ["fiverrProfile", "directContact", "landingAudit", "n8nFollowUp", "acquisitionSystem"].every((key) => hasConfiguredLink(key as LinkKey));
  if (allReady) return null;
  return <section id="contact-setup" className="setup-section"><div className="container"><div className="setup-card"><span>CONFIG</span><div><strong>{t.title}</strong><p>{t.body}</p></div><code>src/siteConfig.ts</code></div></div></section>;
};

const Footer = ({ language }: { language: Language }) => {
  const t = copy[language].footer;
  return <footer className="site-footer"><div className="container footer-inner"><div><strong>Jhonatan Oliveira</strong><span>{t.line}</span></div><span>{t.note}</span><a href="#top">↑ Top</a></div></footer>;
};

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("portfolio-language") : null;
    return stored === "pt" ? "pt" : "en";
  });
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", t.meta.description);
    window.localStorage.setItem("portfolio-language", language);
  }, [language, t.meta.description, t.meta.title]);

  return (
    <div className="app-shell">
      <Header language={language} onLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Intro language={language} />
        <NeuroNexCase language={language} />
        <SelectedCases language={language} />
        <Capabilities language={language} />
        <Method language={language} />
        <ConnectedSystem language={language} />
        <Breadth language={language} />
        <Services language={language} />
        <Trust language={language} />
        <FAQ language={language} />
        <FinalCTA language={language} />
        <SetupNotice language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
