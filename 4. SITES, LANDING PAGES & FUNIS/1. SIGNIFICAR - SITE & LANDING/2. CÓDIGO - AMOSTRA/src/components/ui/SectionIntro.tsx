type Props = {
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

export default function SectionIntro({ eyebrow, title, text, align = 'left' }: Props) {
  return (
    <header className={`section-intro section-intro--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro__text">{text}</p>}
    </header>
  )
}
