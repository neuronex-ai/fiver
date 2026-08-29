import type { SectionContent } from '../../content/pages'
import ButtonLink from './ButtonLink'
import SectionIntro from './SectionIntro'

export default function ContentSection({ section, index = 0 }: { section: SectionContent; index?: number }) {
  return (
    <section id={section.id} className={`content-section content-section--${index % 2 === 0 ? 'light' : 'tint'}`}>
      <div className="content-section__inner">
        <SectionIntro eyebrow={section.eyebrow} title={section.title} text={section.intro} />

        {section.paragraphs && (
          <div className="prose-stack">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        )}

        {section.bullets && (
          <ul className="bullet-list">
            {section.bullets.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}

        {section.cards && (
          <div className="info-card-grid">
            {section.cards.map((card) => (
              <article className="info-card" key={card.title}>
                <span className="info-card__index" aria-hidden="true">✦</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.href && <a href={card.href}>{card.label || 'Saiba mais'} →</a>}
              </article>
            ))}
          </div>
        )}

        {section.quote && <blockquote className="brand-quote">{section.quote}</blockquote>}
        {section.cta && <ButtonLink href={section.cta.href}>{section.cta.label}</ButtonLink>}
      </div>
    </section>
  )
}
