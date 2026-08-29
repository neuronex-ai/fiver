import type { CSSProperties, PointerEvent, ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  tone?: 'earth' | 'forest' | 'ghost' | 'light'
  className?: string
  magnetic?: boolean
}

export default function ButtonLink({ href, children, tone = 'earth', className = '', magnetic = false }: Props) {
  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!magnetic || event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height

    target.style.setProperty('--magnetic-x', `${(x * 7).toFixed(2)}px`)
    target.style.setProperty('--magnetic-y', `${(y * 5).toFixed(2)}px`)
  }

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!magnetic) return
    event.currentTarget.style.setProperty('--magnetic-x', '0px')
    event.currentTarget.style.setProperty('--magnetic-y', '0px')
  }

  const magneticStyle = magnetic
    ? ({ '--magnetic-x': '0px', '--magnetic-y': '0px' } as CSSProperties)
    : undefined

  return (
    <a
      className={`button-link button-link--${tone}${magnetic ? ' button-link--magnetic' : ''} ${className}`.trim()}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={magneticStyle}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
