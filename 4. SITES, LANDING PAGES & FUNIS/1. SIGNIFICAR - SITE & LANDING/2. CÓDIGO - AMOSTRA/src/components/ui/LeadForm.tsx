import { useState } from 'react'

type Props = {
  compact?: boolean
  source?: string
}

export default function LeadForm({ compact = false, source = 'site' }: Props) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className={`lead-form${compact ? ' lead-form--compact' : ''}`}
      aria-label="Formulário de primeiro contato"
      onSubmit={(event: { preventDefault: () => void }) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <input type="hidden" name="source" value={source} />
      <label>
        <span>Como podemos chamar você?</span>
        <input name="name" autoComplete="name" required placeholder="Seu nome" />
      </label>
      <label>
        <span>WhatsApp</span>
        <input name="phone" autoComplete="tel" inputMode="tel" required placeholder="(00) 00000-0000" />
      </label>
      <label>
        <span>O que você procura?</span>
        <select name="interest" defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          <option>Atendimento presencial</option>
          <option>Atendimento online</option>
          <option>Jornada no Peru</option>
          <option>Outras experiências</option>
          <option>Ainda não sei exatamente</option>
        </select>
      </label>
      {!compact && (
        <label className="lead-form__wide">
          <span>Se quiser, conte em poucas palavras.</span>
          <textarea name="message" rows={4} placeholder="Você não precisa explicar toda a sua história aqui." />
        </label>
      )}
      <button className="lead-form__submit" type="submit">Enviar primeiro contato</button>
      <p className="lead-form__note" role={submitted ? 'status' : undefined}>
        {submitted
          ? 'Prévia concluída. A persistência segura deste formulário será conectada ao Supabase na etapa seguinte.'
          : 'Nesta prévia local, nenhum dado é salvo. A conexão segura será ativada na etapa Supabase.'}
      </p>
    </form>
  )
}
