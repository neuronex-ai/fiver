import Botanical from '../brand/Botanical'

export default function VisualFrame({ label = 'Presença · corpo · natureza' }: { label?: string }) {
  return (
    <div className="visual-frame" role="img" aria-label="Composição visual orgânica da Clínica Ressignificar">
      <div className="visual-frame__sun" />
      <div className="visual-frame__mountain visual-frame__mountain--one" />
      <div className="visual-frame__mountain visual-frame__mountain--two" />
      <div className="visual-frame__path" />
      <Botanical className="visual-frame__botanical" />
      <p>{label}</p>
    </div>
  )
}
