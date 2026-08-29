export type CardContent = {
  title: string
  text: string
  href?: string
  label?: string
}

export type SectionContent = {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  paragraphs?: string[]
  bullets?: string[]
  cards?: CardContent[]
  quote?: string
  cta?: { label: string; href: string }
}

export type PageContent = {
  path: string
  title: string
  description: string
  eyebrow: string
  heroTitle: string
  heroText: string
  sections: SectionContent[]
}

export const homeHighlights: CardContent[] = [
  {
    title: 'Atendimento clínico',
    text: 'Escuta e elaboração individual para compreender o momento que você está vivendo.',
    href: '/atendimento',
  },
  {
    title: 'Corpo & respiração',
    text: 'Percepção, ritmo, movimento e presença em diálogo com o processo psicológico.',
    href: '/experiencias',
  },
  {
    title: 'Fotografia',
    text: 'Imagem como possibilidade de expressão e elaboração simbólica.',
    href: '/experiencias',
  },
  {
    title: 'Maha Lilah',
    text: 'Recurso simbólico inserido em uma proposta de autoconhecimento e reflexão.',
    href: '/experiencias',
  },
  {
    title: 'Jornadas no Peru',
    text: 'Experiências em grupo no Vale Sagrado, integrando corpo, território, natureza e reflexão.',
    href: '/jornadas',
  },
]

export const landingFaq = [
  {
    question: 'Preciso saber exatamente qual é o meu problema?',
    answer:
      'Não. Você pode começar a partir de uma situação, uma sensação, um incômodo ou simplesmente da percepção de que alguma coisa merece mais atenção.',
  },
  {
    question: 'O atendimento é somente presencial?',
    answer:
      'A Ressignificar trabalha com atendimento presencial e online. A modalidade mais adequada pode ser conversada com a equipe no primeiro contato.',
  },
  {
    question: 'A clínica trabalha somente com terapia pela fala?',
    answer:
      'A palavra é parte central do processo psicológico. Quando clinicamente pertinente, a proposta pode dialogar com recursos relacionados ao corpo, respiração, movimento, imagem, natureza e dimensão simbólica.',
  },
  {
    question: 'Preciso participar das jornadas para fazer terapia na clínica?',
    answer:
      'Não. O atendimento clínico e as jornadas são propostas diferentes. A participação em uma não depende da outra.',
  },
  {
    question: 'Como sei se essa abordagem combina comigo?',
    answer:
      'Você não precisa decidir isso antes de conversar. A primeira conversa também serve para conhecer a proposta, esclarecer dúvidas e perceber se esse espaço faz sentido para o momento que você está vivendo.',
  },
]

export const pages: Record<string, PageContent> = {
  '/a-clinica': {
    path: '/a-clinica',
    title: 'A Clínica Ressignificar | Psicologia, corpo, natureza e ancestralidade',
    description:
      'Conheça a Clínica Ressignificar, sua essência, posicionamento e a proposta de integrar psicologia, corpo, natureza e ancestralidade com presença clínica.',
    eyebrow: 'A Clínica',
    heroTitle: 'Um lugar para se encontrar sem precisar se apressar.',
    heroText:
      'A Ressignificar nasceu do encontro entre psicologia, corpo, experiência, natureza e uma prática clínica construída ao longo de mais de uma década.',
    sections: [
      {
        id: 'quem-somos',
        eyebrow: 'Quem somos',
        title: 'Profundidade não precisa significar distância.',
        paragraphs: [
          'É possível falar sobre histórias complexas com clareza. É possível acolher sem transformar cuidado em frase pronta.',
          'É possível trabalhar com corpo, ancestralidade e dimensão simbólica sem abandonar responsabilidade clínica. É nesse lugar que a Ressignificar existe.',
        ],
      },
      {
        id: 'nosso-papel',
        eyebrow: 'Nosso papel',
        title: 'A clínica não existe para dizer quem você deve se tornar.',
        paragraphs: [
          'Nosso papel é criar condições para que você possa olhar com mais atenção para aquilo que vive, perceber movimentos, elaborar experiências, reconhecer escolhas e construir sentidos que sejam seus.',
        ],
        quote: 'Não conduzimos pessoas a um destino. Conduzimos encontros.',
      },
      {
        id: 'essencia',
        eyebrow: 'Essência',
        title: 'Reconexão com presença.',
        paragraphs: [
          'Não como um objetivo abstrato. Como prática: perceber o corpo, escutar o que está acontecendo, reconhecer o próprio ritmo e dar espaço àquilo que pede elaboração.',
        ],
        cta: { label: 'Conhecer a abordagem', href: '/abordagem' },
      },
    ],
  },
  '/abordagem': {
    path: '/abordagem',
    title: 'Abordagem da Clínica Ressignificar | Psicologia integrada ao corpo e à natureza',
    description:
      'Entenda como a Ressignificar integra psicologia, percepção corporal, natureza, ancestralidade e recursos simbólicos sem respostas prontas.',
    eyebrow: 'Abordagem',
    heroTitle: 'Uma abordagem para aquilo que você pensa. E para aquilo que ainda não consegue dizer.',
    heroText:
      'Psicologia, corpo, natureza e ancestralidade em um processo integrado de autoconhecimento, com escuta clínica e recursos escolhidos de acordo com cada contexto.',
    sections: [
      {
        id: 'psicologia',
        eyebrow: 'Psicologia',
        title: 'A palavra organiza.',
        paragraphs: [
          'Conversar permite reconhecer histórias, relações, conflitos, escolhas e formas de compreender aquilo que acontece dentro e fora de você.',
        ],
      },
      {
        id: 'corpo',
        eyebrow: 'Corpo',
        title: 'O corpo também informa.',
        intro: 'Ritmo. Respiração. Tensão. Postura. Movimento. Sensações.',
        paragraphs: [
          'Nem sempre conseguimos explicar primeiro aquilo que o corpo já está vivendo. A percepção corporal pode ampliar a escuta sem substituir a palavra.',
        ],
      },
      {
        id: 'natureza',
        eyebrow: 'Natureza',
        title: 'Alguns ambientes mudam a qualidade da atenção.',
        paragraphs: [
          'Na Ressignificar, a natureza não aparece apenas como estética. Em algumas experiências, ela se torna contexto para presença, percepção e reflexão.',
        ],
      },
      {
        id: 'ancestralidade',
        eyebrow: 'Ancestralidade',
        title: 'Nenhuma história começa somente em nós.',
        paragraphs: [
          'Família, cultura, vínculos, símbolos e experiências que vieram antes também atravessam a forma como construímos sentido. Olhar para essas camadas pode ampliar a compreensão da própria história.',
        ],
      },
      {
        id: 'integracao',
        eyebrow: 'Integração',
        title: 'Nenhum recurso vem antes da pessoa.',
        paragraphs: [
          'A Ressignificar não utiliza uma sequência rígida de técnicas. Os recursos entram no processo quando fizerem sentido para aquele contexto e para aquela pessoa.',
        ],
        quote: 'Método não é rigidez. É ter repertório suficiente para não precisar tratar histórias diferentes do mesmo jeito.',
        cta: { label: 'Conhecer os atendimentos', href: '/atendimento' },
      },
    ],
  },
  '/atendimento': {
    path: '/atendimento',
    title: 'Atendimento psicológico presencial e online | Clínica Ressignificar',
    description:
      'Saiba como funciona o atendimento psicológico da Clínica Ressignificar, presencial e online, com escuta, presença e processo individualizado.',
    eyebrow: 'Atendimento clínico',
    heroTitle: 'Você pode chegar como está.',
    heroText:
      'Mesmo que ainda não saiba explicar muito bem o que trouxe você até aqui. A primeira conversa existe também para organizar a pergunta.',
    sections: [
      {
        id: 'o-que-e',
        eyebrow: 'O atendimento',
        title: 'Um espaço individual de escuta e elaboração.',
        paragraphs: [
          'O atendimento clínico é construído a partir daquilo que você está vivendo agora e da história que ajuda a dar contexto a esse momento.',
          'Não existe uma lista de respostas que você precisa trazer. Existe um processo que começa pela escuta.',
        ],
      },
      {
        id: 'como-funciona',
        eyebrow: 'Como funciona',
        title: 'O processo ganha forma aos poucos.',
        cards: [
          { title: '1. Primeiro contato', text: 'Você conversa com a equipe e entende como funcionam os atendimentos.' },
          { title: '2. Primeira conversa', text: 'Conhecemos o seu momento, suas dúvidas e aquilo que trouxe você até a clínica.' },
          { title: '3. Construção do processo', text: 'O acompanhamento começa a ganhar forma de acordo com o que aparece ao longo da escuta.' },
          { title: '4. Continuidade', text: 'O processo é acompanhado e elaborado ao longo do tempo, sem destino pré-definido.' },
        ],
      },
      {
        id: 'modalidades',
        eyebrow: 'Modalidades',
        title: 'Presencial ou online.',
        paragraphs: [
          'A disponibilidade e o formato mais adequado podem ser conversados com a equipe no primeiro contato.',
        ],
        cta: { label: 'Falar com a equipe', href: '/contato' },
      },
    ],
  },
  '/jornadas': {
    path: '/jornadas',
    title: 'Jornadas Ressignificar no Peru | Vale Sagrado dos Incas',
    description:
      'Conheça as jornadas em grupo da Clínica Ressignificar no Vale Sagrado dos Incas, integrando corpo, natureza, território, convivência e reflexão.',
    eyebrow: 'Jornadas Ressignificar',
    heroTitle: 'Há caminhos que também podem ser vividos com os pés.',
    heroText:
      'Experiências em grupo no Peru que integram corpo, natureza, território, convivência e reflexão — sem transformar o lugar em promessa.',
    sections: [
      {
        id: 'vale-sagrado',
        eyebrow: 'Por que o Peru',
        title: 'O Vale Sagrado não é cenário. É contexto.',
        paragraphs: [
          'A paisagem, a altitude, a caminhada, o silêncio, a história e a convivência criam uma experiência diferente daquela que acontece dentro do consultório.',
          'Essa mudança de contexto pode abrir novas perguntas e outras formas de presença.',
        ],
      },
      {
        id: 'experiencia',
        eyebrow: 'A experiência',
        title: 'A jornada acontece antes, durante e depois da viagem.',
        bullets: [
          'Preparação e encontros de orientação',
          'Práticas de presença e percepção corporal',
          'Caminhadas e contato com território e natureza',
          'Momentos de grupo, silêncio e reflexão',
          'Espaço para elaborar a experiência',
        ],
      },
      {
        id: 'para-quem',
        eyebrow: 'Para quem',
        title: 'Uma jornada não é turismo com discurso terapêutico.',
        paragraphs: [
          'É uma proposta estruturada para pessoas interessadas em viver uma experiência de autoconhecimento em outro contexto, com disponibilidade para o grupo, o percurso e a proposta de cada edição.',
        ],
      },
      {
        id: 'vagas',
        eyebrow: 'Próximas edições',
        title: 'Cada jornada tem data. E cada grupo tem um tamanho.',
        paragraphs: [
          'As vagas são limitadas para preservar a proposta e a qualidade da experiência.',
        ],
        cta: { label: 'Receber informações', href: '/contato?interesse=jornada' },
      },
    ],
  },
  '/experiencias': {
    path: '/experiencias',
    title: 'Corpo, fotografia e recursos simbólicos | Clínica Ressignificar',
    description:
      'Conheça recursos que podem dialogar com o processo da Ressignificar: corpo e respiração, fotografia e linguagem simbólica.',
    eyebrow: 'Experiências e recursos',
    heroTitle: 'Existem coisas que a palavra alcança. E existem coisas que precisam de outra linguagem.',
    heroText:
      'Os recursos existem para apoiar a escuta, nunca para substituir a pessoa por um método.',
    sections: [
      {
        id: 'corpo-respiracao',
        eyebrow: 'Corpo & respiração',
        title: 'Perceber antes de interpretar.',
        paragraphs: [
          'Práticas relacionadas à respiração, movimento e percepção corporal podem ajudar a tornar mais visíveis ritmos, tensões e estados que fazem parte da experiência.',
        ],
      },
      {
        id: 'fotografia',
        eyebrow: 'Fotografia',
        title: 'Às vezes, uma imagem consegue sustentar uma pergunta.',
        paragraphs: [
          'A fotografia pode aparecer como recurso de linguagem e elaboração simbólica dentro das propostas da Ressignificar.',
        ],
      },
      {
        id: 'maha-lilah',
        eyebrow: 'Maha Lilah',
        title: 'Símbolos também podem organizar conversas internas.',
        paragraphs: [
          'O Maha Lilah é apresentado na Ressignificar como um recurso simbólico dentro de propostas de autoconhecimento e reflexão.',
        ],
      },
      {
        id: 'principio',
        eyebrow: 'Princípio',
        title: 'Nenhuma ferramenta é maior do que a escuta.',
        paragraphs: ['Os recursos existem para apoiar o processo. Nunca para colocar o método acima da pessoa.'],
        cta: { label: 'Conhecer a clínica', href: '/a-clinica' },
      },
    ],
  },
  '/profissionais': {
    path: '/profissionais',
    title: 'Profissionais | Clínica Ressignificar',
    description:
      'Conheça a proposta de trabalho das profissionais da Clínica Ressignificar. Currículos e registros profissionais serão publicados com dados confirmados.',
    eyebrow: 'Profissionais',
    heroTitle: 'Antes de qualquer método, existe uma relação.',
    heroText:
      'A página está preparada para receber as biografias, formações e CRPs confirmados das profissionais da Ressignificar antes da publicação final.',
    sections: [
      {
        id: 'como-trabalhamos',
        eyebrow: 'Nossa forma de estar',
        title: 'Escuta antes de resposta.',
        paragraphs: [
          'A proposta da equipe parte da escuta daquilo que pode ser colocado em palavras e também dos movimentos, silêncios, relações e experiências que aparecem ao longo do processo.',
        ],
      },
      {
        id: 'bios',
        eyebrow: 'Perfis profissionais',
        title: 'Dados profissionais serão inseridos somente quando confirmados.',
        cards: [
          {
            title: 'Profissional 01',
            text: 'Nome, CRP, formação, especializações e trajetória profissional — preencher com informações reais e validadas.',
          },
          {
            title: 'Profissional 02',
            text: 'Nome, CRP, formação, especializações e trajetória profissional — preencher com informações reais e validadas.',
          },
        ],
        cta: { label: 'Falar com a equipe', href: '/contato' },
      },
    ],
  },
  '/conteudos': {
    path: '/conteudos',
    title: 'Conteúdos sobre psicologia, corpo e autoconhecimento | Ressignificar',
    description:
      'Conteúdos educativos da Clínica Ressignificar sobre psicologia, corpo, relações, natureza, ancestralidade, jornadas e presença.',
    eyebrow: 'Conteúdos',
    heroTitle: 'Textos para continuar pensando. Ou começar uma pergunta nova.',
    heroText:
      'Psicologia, corpo, relações, natureza, ancestralidade e os temas que atravessam o trabalho da Ressignificar.',
    sections: [
      {
        id: 'leituras',
        eyebrow: 'Leituras sugeridas',
        title: 'Perguntas que podem abrir conversa.',
        cards: [
          { title: 'Nem tudo o que você sente começa em palavras.', text: 'Corpo, percepção e aquilo que aparece antes da explicação.' },
          { title: 'Você não precisa chegar à terapia sabendo explicar tudo.', text: 'Por que a primeira conversa também serve para organizar a pergunta.' },
          { title: 'Quando compreender racionalmente não parece suficiente.', text: 'A diferença entre entender uma experiência e conseguir entrar em contato com ela.' },
          { title: 'O que significa integrar corpo e psicologia?', text: 'Uma introdução simples à proposta clínica integrada.' },
          { title: 'Profundidade não é pressa.', text: 'Sobre tempo, elaboração e a diferença entre processo e promessa.' },
          { title: 'O Vale Sagrado não é cenário.', text: 'Como território e experiência entram nas jornadas Ressignificar.' },
        ],
      },
      {
        id: 'newsletter',
        eyebrow: 'Continuar perto',
        title: 'Conteúdo com consistência, não volume.',
        paragraphs: [
          'A área está preparada para receber artigos e uma futura newsletter. A persistência de inscrições será conectada ao Supabase em uma etapa posterior.',
        ],
      },
    ],
  },
  '/area-de-membros': {
    path: '/area-de-membros',
    title: 'Área de membros | Clínica Ressignificar',
    description:
      'Espaço preparado para conteúdos, materiais e continuidade das jornadas da Clínica Ressignificar. Autenticação será conectada ao Supabase posteriormente.',
    eyebrow: 'Área de membros',
    heroTitle: 'Seu espaço de continuidade.',
    heroText:
      'Materiais, conteúdos e registros relacionados à sua jornada com a Ressignificar. A autenticação será ativada na etapa Supabase.',
    sections: [
      {
        id: 'recursos',
        eyebrow: 'O que ficará aqui',
        title: 'Um espaço simples para continuar o processo entre encontros.',
        cards: [
          { title: 'Próximo encontro', text: 'Agenda e orientações importantes.' },
          { title: 'Materiais recomendados', text: 'Práticas, leituras e conteúdos relacionados à jornada.' },
          { title: 'Diário de bordo', text: 'Registros e reflexões pessoais, com persistência futura no Supabase.' },
          { title: 'Mensagens da equipe', text: 'Comunicados e informações de continuidade.' },
        ],
      },
    ],
  },
  '/contato': {
    path: '/contato',
    title: 'Contato e primeira conversa | Clínica Ressignificar',
    description:
      'Entre em contato com a Clínica Ressignificar para informações sobre atendimento psicológico presencial, online e jornadas no Peru.',
    eyebrow: 'Contato',
    heroTitle: 'Podemos começar por uma conversa.',
    heroText:
      'Conte brevemente o que você procura. Você não precisa explicar toda a sua história aqui — esse primeiro contato serve para entendermos como orientar você.',
    sections: [
      {
        id: 'orientacao',
        eyebrow: 'Primeiro contato',
        title: 'Você pode chegar sem ter a frase perfeita.',
        bullets: [
          'Atendimento psicológico presencial',
          'Atendimento psicológico online',
          'Jornadas no Peru',
          'Outras experiências da Ressignificar',
          'Ainda não sei exatamente',
        ],
      },
    ],
  },
  '/privacidade': {
    path: '/privacidade',
    title: 'Política de privacidade | Clínica Ressignificar',
    description:
      'Diretrizes de privacidade do site da Clínica Ressignificar. O texto jurídico definitivo será revisado antes da publicação em produção.',
    eyebrow: 'Privacidade',
    heroTitle: 'Privacidade começa por clareza.',
    heroText:
      'Esta versão é uma base técnica para a futura política de privacidade. O texto jurídico definitivo deverá refletir as ferramentas realmente utilizadas em produção.',
    sections: [
      {
        id: 'dados',
        eyebrow: 'Dados',
        title: 'Coletar apenas o necessário.',
        paragraphs: [
          'Nesta etapa de prévia, os formulários não persistem dados. Quando o Supabase e ferramentas de análise forem conectados, esta página deverá ser atualizada com finalidades, bases legais, retenção e canais para exercício de direitos.',
        ],
      },
    ],
  },
  '/termos': {
    path: '/termos',
    title: 'Termos de uso | Clínica Ressignificar',
    description:
      'Termos de uso do site da Clínica Ressignificar. Base provisória para revisão jurídica antes da publicação final.',
    eyebrow: 'Termos de uso',
    heroTitle: 'Informação institucional, não substituição de avaliação individual.',
    heroText:
      'O conteúdo do site tem caráter institucional e educativo. Termos definitivos serão revisados antes da publicação em produção.',
    sections: [
      {
        id: 'uso',
        eyebrow: 'Uso do site',
        title: 'Conteúdo para informar e orientar.',
        paragraphs: [
          'Os textos públicos não constituem diagnóstico, promessa de resultado ou substituição de acompanhamento psicológico individual. Informações sobre serviços devem ser confirmadas diretamente com a equipe.',
        ],
      },
    ],
  },
}
