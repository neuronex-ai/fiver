import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { siteConfig } from "./siteConfig";

type Language = "en" | "pt";

const salesCopy = {
  en: {
    personalEyebrow: "About the builder",
    personalTitle: "Jhonatan Gasperi",
    personalBody:
      "Product builder working with AI agents, automation and design. Based in Brazil, working worldwide.",
    personalNote:
      "I work lean, direct the system end to end and use AI as leverage — without hiding where human judgment still matters.",
    location: "Brazil → worldwide",
    photoAlt: "Professional portrait of Jhonatan Gasperi",
    photoPending: "Professional portrait slot",
    contactEyebrow: "Start a conversation",
    contactTitle: "Tell me what is still messy.",
    contactBody:
      "A rough idea is enough. Send the context, what you need to change and what already exists. I’ll know what to ask next.",
    whatsapp: "Talk on WhatsApp",
    email: "Send an email",
    formTitle: "Project brief",
    name: "Your name",
    emailLabel: "Your email",
    project: "What are you trying to build?",
    budget: "Approximate budget / scope",
    message: "Context, constraints and desired outcome",
    submit: "Prepare email",
    formNote: "Submitting opens your email app with this brief already organized. No form data is stored on this site.",
    footerLine: "Independent product, automation & acquisition systems builder.",
    contracts: "Contracts and invoicing available for custom projects.",
    direct: "Direct contact",
    privacy: "Privacy",
    privacyText:
      "This MVP does not use non-essential analytics or advertising cookies. Contact data is only sent through the channel you choose.",
    fiverrSoon: "Fiverr profile · coming soon",
    rights: "All rights reserved.",
    top: "Back to top",
  },
  pt: {
    personalEyebrow: "Sobre quem constrói",
    personalTitle: "Jhonatan Gasperi",
    personalBody:
      "Product builder que trabalha com agentes de IA, automação e design. Baseado no Brasil, atendendo projetos no mundo todo.",
    personalNote:
      "Trabalho de forma enxuta, dirigindo o sistema de ponta a ponta e usando IA como alavanca — sem esconder onde o julgamento humano continua essencial.",
    location: "Brasil → mundo",
    photoAlt: "Retrato profissional de Jhonatan Gasperi",
    photoPending: "Espaço para retrato profissional",
    contactEyebrow: "Comece uma conversa",
    contactTitle: "Me conte o que ainda está bagunçado.",
    contactBody:
      "Uma ideia incompleta já basta. Envie o contexto, o que precisa mudar e o que já existe. Eu saberei quais perguntas fazer depois.",
    whatsapp: "Falar no WhatsApp",
    email: "Enviar e-mail",
    formTitle: "Briefing do projeto",
    name: "Seu nome",
    emailLabel: "Seu e-mail",
    project: "O que você está tentando construir?",
    budget: "Orçamento / escopo aproximado",
    message: "Contexto, limitações e resultado desejado",
    submit: "Preparar e-mail",
    formNote: "Ao enviar, seu aplicativo de e-mail abre com o briefing já organizado. Nenhum dado do formulário é armazenado neste site.",
    footerLine: "Direção independente de produtos, automações e sistemas de aquisição.",
    contracts: "Contratos e emissão de nota disponíveis para projetos personalizados.",
    direct: "Contato direto",
    privacy: "Privacidade",
    privacyText:
      "Este MVP não usa analytics não essenciais nem cookies de publicidade. Os dados de contato só são enviados pelo canal que você escolher.",
    fiverrSoon: "Perfil Fiverr · em breve",
    rights: "Todos os direitos reservados.",
    top: "Voltar ao topo",
  },
} as const;

function usePageLanguage(): Language {
  const getLanguage = () => (document.documentElement.lang.toLowerCase().startsWith("pt") ? "pt" : "en");
  const [language, setLanguage] = useState<Language>(() => getLanguage());

  useEffect(() => {
    const observer = new MutationObserver(() => setLanguage(getLanguage()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  return language;
}

function PersonalSection({ language }: { language: Language }) {
  const t = salesCopy[language];
  return (
    <section className="personal-section" aria-labelledby="personal-title">
      <div className="container personal-grid">
        <div className="personal-portrait-wrap">
          <div className="personal-portrait">
            {siteConfig.profilePhotoUrl ? (
              <img src={siteConfig.profilePhotoUrl} alt={t.photoAlt} loading="lazy" />
            ) : (
              <div className="portrait-placeholder" aria-label={t.photoPending}>
                <span>JG</span>
                <small>{t.photoPending}</small>
              </div>
            )}
          </div>
        </div>
        <div className="personal-copy">
          <span className="sales-eyebrow">{t.personalEyebrow}</span>
          <h2 id="personal-title">{t.personalTitle}</h2>
          <p className="personal-lead">{t.personalBody}</p>
          <p className="personal-note">{t.personalNote}</p>
          <div className="personal-meta">
            <span><Globe2 size={15} />{t.location}</span>
            <a href={`mailto:${siteConfig.email}`}><Mail size={15} />{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ language }: { language: Language }) {
  const t = salesCopy[language];
  const [submitted, setSubmitted] = useState(false);

  const mailSubject = language === "pt" ? "Novo projeto — portfólio Jhonatan Gasperi" : "New project — Jhonatan Gasperi portfolio";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${t.name}: ${data.get("name") || ""}`,
      `${t.emailLabel}: ${data.get("email") || ""}`,
      `${t.project}: ${data.get("project") || ""}`,
      `${t.budget}: ${data.get("budget") || ""}`,
      "",
      `${t.message}:`,
      `${data.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-lumen" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="sales-eyebrow sales-eyebrow--dark">{t.contactEyebrow}</span>
          <h2 id="contact-title">{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <div className="contact-primary-actions">
            <a className="contact-action contact-action--light" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span><small>WhatsApp</small>{t.whatsapp}</span>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-action" href={`mailto:${siteConfig.email}`}>
              <Mail size={18} />
              <span><small>{siteConfig.email}</small>{t.email}</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-head">
            <span>{t.formTitle}</span>
            <Send size={17} />
          </div>
          <label>
            <span>{t.name}</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            <span>{t.emailLabel}</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>{t.project}</span>
            <input name="project" required />
          </label>
          <label>
            <span>{t.budget}</span>
            <input name="budget" />
          </label>
          <label>
            <span>{t.message}</span>
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit"><span>{submitted ? t.email : t.submit}</span><ArrowUpRight size={17} /></button>
          <p className="form-privacy">{t.formNote}</p>
        </form>
      </div>
    </section>
  );
}

function CommercialFooter({ language }: { language: Language }) {
  const t = salesCopy[language];
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="commercial-footer">
      <div className="container commercial-footer-grid">
        <div className="footer-brand-block">
          <div className="footer-monogram">JG</div>
          <div>
            <strong>{siteConfig.displayName}</strong>
            <p>{t.footerLine}</p>
          </div>
        </div>

        <div className="footer-column">
          <span>{t.direct}</span>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {siteConfig.linkedinUrl ? <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a> : null}
          {siteConfig.links.fiverrProfile ? <a href={siteConfig.links.fiverrProfile} target="_blank" rel="noreferrer">Fiverr <ArrowUpRight size={13} /></a> : <small>{t.fiverrSoon}</small>}
        </div>

        <div className="footer-column footer-legal">
          <span>Business</span>
          <strong>{siteConfig.legalName}</strong>
          <small>CNPJ {siteConfig.cnpj}</small>
          <small className="footer-address"><MapPin size={13} />{siteConfig.businessAddress}</small>
          <small className="footer-contracts"><Building2 size={13} />{t.contracts}</small>
        </div>
      </div>

      <div className="container privacy-row" id="privacy">
        <div><strong>{t.privacy}</strong><span>{t.privacyText}</span></div>
        <div className="privacy-meta"><span>© {year} {siteConfig.displayName}. {t.rights}</span><a href="#top">↑ {t.top}</a></div>
      </div>
    </footer>
  );
}

export default function SalesLayer() {
  const language = usePageLanguage();

  useEffect(() => {
    const syncIdentity = () => {
      document.title = document.title.replace("Jhonatan Oliveira", "Jhonatan Gasperi");
      const headerName = document.querySelector<HTMLElement>(".site-header > .wordmark > span:last-child");
      if (headerName) headerName.textContent = "Jhonatan Gasperi";
    };

    syncIdentity();
    const frame = window.requestAnimationFrame(syncIdentity);
    return () => window.cancelAnimationFrame(frame);
  }, [language]);

  return (
    <>
      <PersonalSection language={language} />
      <ContactSection language={language} />
      <CommercialFooter language={language} />
    </>
  );
}
