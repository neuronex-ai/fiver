export default function Botanical({ className = '' }: { className?: string }) {
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 220 160" aria-hidden="true">
      <path d="M18 141c45-27 75-58 94-108M63 108c-5-21 4-38 24-50M95 78c9-21 25-35 47-44M118 54c20-9 39-8 57 5M44 123c-18-3-29 2-36 17M80 93c-18-2-31 5-38 22M112 61c-14-8-27-8-40 0M142 42c-5-17 0-30 15-39M145 43c16-14 34-17 54-8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="113" cy="31" r="3" fill="currentColor" />
      <circle cx="180" cy="57" r="2.2" fill="currentColor" />
    </svg>
  )
}
