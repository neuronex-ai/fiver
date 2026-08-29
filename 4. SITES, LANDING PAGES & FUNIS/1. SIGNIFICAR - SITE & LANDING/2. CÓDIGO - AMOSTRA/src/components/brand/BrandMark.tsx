export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`} aria-label="Clínica Ressignificar">
      <svg className="brand-symbol" viewBox="0 0 64 74" role="img" aria-hidden="true">
        <path d="M8 66V27C8 14 18.7 4 32 4s24 10 24 23v39H8Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="18" r="3.6" className="brand-symbol__sun" />
        <path d="M13 39 25 29l11 9 8-7 9 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 61c17-1 22-6 11-10-10-3-9-7 3-9 7-1 10-3 11-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="brand-lockup__text">
        <strong>Ressignificar</strong>
        {!compact && <small>Clínica de Psicologia</small>}
      </span>
    </span>
  )
}
