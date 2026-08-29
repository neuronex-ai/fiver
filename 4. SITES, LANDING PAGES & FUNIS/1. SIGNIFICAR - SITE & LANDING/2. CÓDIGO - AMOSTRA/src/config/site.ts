export const siteConfig = {
  name: 'Clínica Ressignificar',
  shortName: 'Ressignificar',
  siteUrl: String(import.meta.env.VITE_SITE_URL || 'https://ressignificar.example'),
  locale: 'pt_BR',
  language: 'pt-BR',
  description:
    'Clínica de psicologia que integra escuta clínica, corpo, natureza e ancestralidade em processos de autoconhecimento, com atendimento presencial e online e jornadas no Peru.',
  email: String(import.meta.env.VITE_CONTACT_EMAIL || ''),
  phone: String(import.meta.env.VITE_CONTACT_PHONE || ''),
  whatsapp: String(import.meta.env.VITE_WHATSAPP_URL || ''),
  instagram: String(import.meta.env.VITE_INSTAGRAM_URL || ''),
  crp: String(import.meta.env.VITE_CRP || ''),
  address: {
    street: String(import.meta.env.VITE_ADDRESS_STREET || ''),
    city: String(import.meta.env.VITE_ADDRESS_CITY || ''),
    region: String(import.meta.env.VITE_ADDRESS_REGION || ''),
    postalCode: String(import.meta.env.VITE_ADDRESS_POSTAL_CODE || ''),
    country: 'BR',
  },
} as const

export const primaryNav = [
  { label: 'A Clínica', href: '/a-clinica' },
  { label: 'Abordagem', href: '/abordagem' },
  { label: 'Atendimento', href: '/atendimento' },
  { label: 'Jornadas', href: '/jornadas' },
  { label: 'Experiências', href: '/experiencias' },
  { label: 'Conteúdos', href: '/conteudos' },
]
