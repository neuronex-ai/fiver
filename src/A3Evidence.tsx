import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Layers3, LayoutTemplate, Megaphone, Route } from "lucide-react";

type Language = "en" | "pt";

const copy = {
  en: {
    eyebrow: "End-to-end acquisition proof",
    title: "One brand. One acquisition logic. Every surface connected.",
    body:
      "The current A3 NexChain visual/content system was built as one operation: brand direction, campaign creatives, website, segmented sales pages and the lead-routing structure behind them.",
    authored: "Current published brand output created and directed by Jhonatan",
    social: "Brand, campaigns & publishing",
    socialBody: "A consistent visual and message system across the brand’s public content and campaign creatives.",
    landing: "Segmented conversion surfaces",
    landingBody: "Different entry pages for different audiences, carrying the campaign promise into a more specific next step.",
    funnel: "Lead capture & routing architecture",
    funnelBody: "The funnel was mapped beyond the page: traffic sources, segmented forms and a shared lead-organization layer.",
    chain: ["Message", "Creative", "Website / landing", "Form or WhatsApp", "Lead organization"],
  },
  pt: {
    eyebrow: "Prova de aquisição ponta a ponta",
    title: "Uma marca. Uma lógica de aquisição. Todas as superfícies conectadas.",
    body:
      "O sistema visual e de conteúdo atual da A3 NexChain foi construído como uma única operação: direção de marca, criativos de campanha, site, páginas de venda segmentadas e a estrutura de roteamento dos leads por trás delas.",
    authored: "Todo o conteúdo atual publicado da marca foi criado e dirigido por Jhonatan",
    social: "Marca, campanhas & publicação",
    socialBody: "Um sistema visual e de mensagem consistente entre o conteúdo público da marca e os criativos de campanha.",
    landing: "Superfícies de conversão segmentadas",
    landingBody: "Entradas diferentes para públicos diferentes, levando a promessa da campanha para um próximo passo mais específico.",
    funnel: "Arquitetura de captação & roteamento",
    funnelBody: "O funil foi desenhado além da página: fontes de tráfego, formulários segmentados e uma camada compartilhada de organização dos leads.",
    chain: ["Mensagem", "Criativo", "Site / landing", "Formulário ou WhatsApp", "Organização do lead"],
  },
} as const;

function usePageLanguage(): Language {
  const getLanguage = (): Language => document.documentElement.lang.toLowerCase().startsWith("pt") ? "pt" : "en";
  const [language, setLanguage] = useState<Language>(() => getLanguage());

  useEffect(() => {
    const observer = new MutationObserver(() => setLanguage(getLanguage()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  return language;
}

export default function A3Evidence() {
  const language = usePageLanguage();
  const [target, setTarget] = useState<Element | null>(null);
  const t = copy[language];

  useEffect(() => {
    const findTarget = () => setTarget(document.querySelector(".editorial-case--2 .editorial-case-visual"));
    findTarget();
    const frame = window.requestAnimationFrame(findTarget);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="a3-proof" aria-label={t.eyebrow}>
      <div className="a3-proof-head">
        <div>
          <span className="a3-proof-eyebrow"><Layers3 size={13} />{t.eyebrow}</span>
          <h5>{t.title}</h5>
          <p>{t.body}</p>
        </div>
        <span className="a3-authorship">{t.authored}</span>
      </div>

      <div className="a3-proof-chain" aria-label="Acquisition chain">
        {t.chain.map((step, index) => (
          <span key={step}>
            {step}
            {index < t.chain.length - 1 ? <ArrowRight size={13} aria-hidden="true" /> : null}
          </span>
        ))}
      </div>

      <div className="a3-proof-grid">
        <figure className="a3-proof-card a3-proof-card--social">
          <div className="a3-proof-media">
            <img src="/projects/a3-social.jpg" alt="A3 NexChain social media and campaign system overview" loading="lazy" />
          </div>
          <figcaption>
            <span><Megaphone size={14} />{t.social}</span>
            <p>{t.socialBody}</p>
          </figcaption>
        </figure>

        <figure className="a3-proof-card a3-proof-card--landing">
          <div className="a3-proof-media">
            <img src="/projects/a3-landings.jpg" alt="A3 NexChain segmented landing page overview" loading="lazy" />
          </div>
          <figcaption>
            <span><LayoutTemplate size={14} />{t.landing}</span>
            <p>{t.landingBody}</p>
          </figcaption>
        </figure>

        <figure className="a3-proof-card a3-proof-card--funnel">
          <div className="a3-proof-media a3-proof-media--funnel">
            <img src="/projects/a3-funnel.png" alt="A3 NexChain lead acquisition funnel architecture" loading="lazy" />
          </div>
          <figcaption>
            <span><Route size={14} />{t.funnel}</span>
            <p>{t.funnelBody}</p>
          </figcaption>
        </figure>
      </div>
    </section>,
    target,
  );
}
