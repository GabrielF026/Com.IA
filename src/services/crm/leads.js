// src/services/crm/leads.js — Mock rico para Fase 1

// Catálogo de produtos ElevaCredi
export const PRODUTOS_ELEVA = {
  limpa_nome:       { label: "Limpa Nome",             color: "#22c55e", bg: "rgba(34,197,94,0.10)" },
  portabilidade:    { label: "Portabilidade de Crédito", color: "#6366f1", bg: "rgba(99,102,241,0.10)" },
  emprestimo:       { label: "Empréstimo Pessoal",     color: "#f59e0b", bg: "rgba(245,158,11,0.10)" },
  fgts:             { label: "Antecipação FGTS",       color: "#06b6d4", bg: "rgba(6,182,212,0.10)" },
  consorcio:        { label: "Consórcio",              color: "#8b5cf6", bg: "rgba(139,92,246,0.10)" },
  refinanciamento:  { label: "Refinanciamento",        color: "#ec4899", bg: "rgba(236,72,153,0.10)" },
  cartao_consignado:{ label: "Cartão Consignado",      color: "#0ea5e9", bg: "rgba(14,165,233,0.10)" },
};

const mockLeads = {
  prospeccao_ia: [
    {
      id: "lead_1",
      nome: "Carlos Silva",
      telefone: "(11) 98000-1111",
      cpf: "111.222.333-44",
      temperatura: "quente",
      source: "ia",
      stage_id: "prospeccao_ia",
      // Fase 1 — Contexto IA
      ia_score: 87,
      ia_summary:
        "Lead altamente qualificado. Mencionou dívida de cartão de crédito com o Itaú superior a R$ 12.000 e demonstrou forte interesse em regularizar a situação. Respondeu rapidamente e demonstrou urgência.",
      ia_handoff_reason:
        "Lead confirmou dados pessoais e demonstrou intenção de fechar. Transferido para atendimento humano para apresentação de proposta.",
      ia_qualification_reason:
        "Score alto por: resposta rápida (<2 min), confirmou CPF espontaneamente, mencionou valor elevado, situação negativada há > 6 meses.",
      // Fase 1 — Perfil Financeiro (multi-produto)
      produtos_interesse: ["limpa_nome", "portabilidade"],
      tipo_divida: "Cartão de crédito",
      credor: "Itaú",
      divida_valor: 12500,
      tempo_divida: "6-12 meses",
      situacao_credito: "Negativado",
      // Fase 1 — Timeline
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Novo lead detectado via WhatsApp", ts: "2026-04-07T09:00:00" },
        { tipo: "mensagem_ia", texto: "IA: Olá! Posso te ajudar a regularizar suas dívidas?", ts: "2026-04-07T09:00:05" },
        { tipo: "mensagem_lead", texto: "Lead: Oi, tenho uma dívida no Itaú que tá me incomodando há meses", ts: "2026-04-07T09:01:10" },
        { tipo: "agente", agente: "DataExtractionAgent", texto: "CPF extraído: 111.222.333-44 | Valor estimado: R$ 12.500", ts: "2026-04-07T09:01:30" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score calculado: 87/100 — Temperatura: Quente", ts: "2026-04-07T09:01:35" },
        { tipo: "agente", agente: "HandoffAgent", texto: "Handoff para atendimento humano — proposta de Limpa Nome e Portabilidade", ts: "2026-04-07T09:01:40" },
        { tipo: "etapa", texto: "Lead movido para 'Prospecção IA'", ts: "2026-04-07T09:01:41" },
      ],
    },
    {
      id: "lead_2",
      nome: "Ana Beatriz",
      telefone: "(21) 98888-2222",
      cpf: "555.666.777-00",
      temperatura: "morno",
      source: "ia",
      stage_id: "prospeccao_ia",
      ia_score: 58,
      ia_summary:
        "Lead demonstrou interesse inicial em antecipação do FGTS para reforma da casa. Não forneceu CPF espontaneamente. Perguntou sobre valores disponíveis antes de se comprometer.",
      ia_handoff_reason:
        "Lead solicitou simulação personalizada, o que requer intervenção humana com acesso ao sistema de cálculo.",
      ia_qualification_reason:
        "Score médio: respondeu perguntas mas com cautela, não confirmou dívidas adicionais, canal Instagram (conversão menor).",
      produtos_interesse: ["fgts", "emprestimo"],
      tipo_divida: "Sem dívida ativa",
      credor: "—",
      divida_valor: null,
      tempo_divida: null,
      situacao_credito: "Regular",
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Novo lead detectado via Instagram DM", ts: "2026-04-07T10:30:00" },
        { tipo: "mensagem_ia", texto: "IA: Oi! Você tem interesse em antecipar seu FGTS?", ts: "2026-04-07T10:30:08" },
        { tipo: "mensagem_lead", texto: "Lead: Sim, queria saber quanto consigo retirar", ts: "2026-04-07T10:31:45" },
        { tipo: "agente", agente: "DataExtractionAgent", texto: "Produto identificado: Antecipação FGTS | Nome: Ana Beatriz", ts: "2026-04-07T10:31:50" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score calculado: 58/100 — Temperatura: Morno", ts: "2026-04-07T10:31:55" },
        { tipo: "agente", agente: "HandoffAgent", texto: "Transferido para simulação manual", ts: "2026-04-07T10:32:00" },
      ],
    },
  ],

  atendimento_humano: [
    {
      id: "lead_3",
      nome: "Roberto Mendes",
      telefone: "(11) 97777-3333",
      cpf: "000.111.222-33",
      temperatura: "quente",
      source: "ia",
      stage_id: "atendimento_humano",
      ia_score: 91,
      ia_summary:
        "Lead com perfil ideal para Portabilidade de Crédito. Possui financiamento de veículo com taxa de 2,8% a.m. e demonstrou forte intenção de reduzir parcelas. Alta renda declarada.",
      ia_handoff_reason:
        "Negociação de portabilidade exige consulta ao bureau de crédito e apresentação de contraproposta com taxas — requer humano.",
      ia_qualification_reason:
        "Score máximo: confirmou todos os dados, alto valor de operação (R$ 48.000), taxa atual alta, respondeu em < 1 min.",
      produtos_interesse: ["portabilidade", "refinanciamento"],
      tipo_divida: "Financiamento de veículo",
      credor: "BV Financeira",
      divida_valor: 48000,
      tempo_divida: "1-2 anos",
      situacao_credito: "Em dia",
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Lead recebido via WhatsApp", ts: "2026-04-07T08:15:00" },
        { tipo: "mensagem_ia", texto: "IA: Olá Roberto! Como posso ajudar hoje?", ts: "2026-04-07T08:15:06" },
        { tipo: "mensagem_lead", texto: "Lead: Quero diminuir a parcela do meu carro, tô pagando R$ 1.400/mês", ts: "2026-04-07T08:16:20" },
        { tipo: "agente", agente: "DataExtractionAgent", texto: "Produto: Portabilidade | Valor: R$ 48.000 | Credor: BV", ts: "2026-04-07T08:16:40" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score: 91/100 — Quente", ts: "2026-04-07T08:16:45" },
        { tipo: "agente", agente: "HandoffAgent", texto: "Handoff prioritário — operação de alto valor", ts: "2026-04-07T08:16:50" },
        { tipo: "etapa", texto: "Movido para 'Atendimento Humano'", ts: "2026-04-07T08:20:00" },
        { tipo: "humano", texto: "Vendedor Gabriel iniciou atendimento", ts: "2026-04-07T08:22:00" },
      ],
    },
  ],

  analise_credito: [
    {
      id: "lead_4",
      nome: "Marcos Aurélio",
      telefone: "(31) 96555-5555",
      cpf: "222.333.444-55",
      temperatura: "quente",
      source: "ia",
      stage_id: "analise_credito",
      ia_score: 79,
      ia_summary:
        "Lead interessado em Empréstimo Pessoal e Limpa Nome. Possui múltiplas dívidas (cartão + empréstimo antigo). Renda comprovável via contracheque. Demonstrou urgência por estar sem crédito.",
      ia_handoff_reason:
        "Múltiplos produtos envolvidos. Análise de crédito requer validação manual de renda e checagem de bureau.",
      ia_qualification_reason:
        "Score alto: múltiplos produtos de interesse aumentam ticket médio, urgência demonstrada, renda declarada estável.",
      produtos_interesse: ["limpa_nome", "emprestimo", "cartao_consignado"],
      tipo_divida: "Múltiplas (cartão + empréstimo)",
      credor: "Nubank + Banco Pan",
      divida_valor: 8200,
      tempo_divida: "> 1 ano",
      situacao_credito: "Negativado",
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Lead via WhatsApp — campanha tráfego pago", ts: "2026-04-06T14:00:00" },
        { tipo: "mensagem_ia", texto: "IA: Oi Marcos! Vi que você tem interesse em limpar o nome. Pode me contar mais?", ts: "2026-04-06T14:00:10" },
        { tipo: "mensagem_lead", texto: "Lead: Tenho dívida no Nubank e no Pan. Quero um empréstimo também", ts: "2026-04-06T14:02:00" },
        { tipo: "agente", agente: "DataExtractionAgent", texto: "CPF: 222.333.444-55 | Dívida: ~R$ 8.200 | 2 credores", ts: "2026-04-06T14:02:20" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score: 79/100 — Quente (múltiplos produtos)", ts: "2026-04-06T14:02:25" },
        { tipo: "etapa", texto: "Movido para 'Atendimento Humano'", ts: "2026-04-06T14:30:00" },
        { tipo: "humano", texto: "Vendedora Maria coletou comprovante de renda", ts: "2026-04-06T15:00:00" },
        { tipo: "etapa", texto: "Movido para 'Análise de Crédito'", ts: "2026-04-06T15:05:00" },
      ],
    },
  ],

  contrato_assinado: [
    {
      id: "lead_5",
      nome: "Juliana Costa",
      telefone: "(11) 96999-4444",
      cpf: "999.888.777-66",
      temperatura: "frio",
      source: "ia",
      stage_id: "contrato_assinado",
      ia_score: 44,
      ia_summary:
        "Lead inicialmente frio que converteu após abordagem consultiva da equipe humana. Produto final: Consórcio de imóvel. A IA havia qualificado como frio por baixa urgência, mas o perfil financeiro era sólido.",
      ia_handoff_reason:
        "Lead pediu mais informações sobre consórcio — produto consultivo que requer simulação detalhada.",
      ia_qualification_reason:
        "Score baixo inicial: respostas lentas, sem urgência declarada, produto complexo (consórcio). Convertido pelo time humano.",
      produtos_interesse: ["consorcio"],
      tipo_divida: "Sem dívida",
      credor: "—",
      divida_valor: null,
      tempo_divida: null,
      situacao_credito: "Regular",
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Lead Instagram — anúncio Consórcio", ts: "2026-04-05T10:00:00" },
        { tipo: "mensagem_ia", texto: "IA: Oi Juliana! Interesse em consórcio de imóvel?", ts: "2026-04-05T10:00:10" },
        { tipo: "mensagem_lead", texto: "Lead: Talvez, me manda mais informações", ts: "2026-04-05T11:30:00" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score: 44/100 — Frio (baixa urgência)", ts: "2026-04-05T11:30:20" },
        { tipo: "etapa", texto: "Entrada em 'Prospecção IA'", ts: "2026-04-05T11:30:25" },
        { tipo: "etapa", texto: "Movido para 'Atendimento Humano'", ts: "2026-04-05T14:00:00" },
        { tipo: "humano", texto: "Vendedor João apresentou simulação de consórcio R$ 180.000", ts: "2026-04-05T15:00:00" },
        { tipo: "etapa", texto: "Movido para 'Análise de Crédito'", ts: "2026-04-06T09:00:00" },
        { tipo: "etapa", texto: "Contrato assinado — Consórcio R$ 180.000", ts: "2026-04-07T10:00:00" },
      ],
    },
    {
      id: "lead_6",
      nome: "Paulo Henrique",
      telefone: "(41) 95555-8888",
      cpf: "333.444.555-66",
      temperatura: "morno",
      source: "ia",
      stage_id: "contrato_assinado",
      ia_score: 65,
      ia_summary:
        "Lead com interesse em Antecipação de FGTS para quitar dívida de cartão. Processo 100% digital. Aprovado em < 24h. Produto de alta velocidade de fechamento.",
      ia_handoff_reason:
        "Confirmação de dados do FGTS requer verificação manual no sistema Caixa.",
      ia_qualification_reason:
        "Score médio-alto: produto simples, renda via CLT, saldo FGTS suficiente confirmado verbalmente.",
      produtos_interesse: ["fgts"],
      tipo_divida: "Cartão de crédito",
      credor: "Caixa Econômica",
      divida_valor: 3800,
      tempo_divida: "< 6 meses",
      situacao_credito: "Em atraso",
      timeline: [
        { tipo: "agente", agente: "OrchestratorAgent", texto: "Lead WhatsApp — campanha FGTS", ts: "2026-04-06T16:00:00" },
        { tipo: "mensagem_ia", texto: "IA: Olá Paulo! Sabia que você pode usar seu FGTS para quitar dívidas?", ts: "2026-04-06T16:00:08" },
        { tipo: "mensagem_lead", texto: "Lead: Não sabia! Tenho saldo no FGTS sim. Como funciona?", ts: "2026-04-06T16:01:30" },
        { tipo: "agente", agente: "DataExtractionAgent", texto: "Produto: FGTS | Dívida cartão: R$ 3.800 | CLT confirmado", ts: "2026-04-06T16:01:50" },
        { tipo: "agente", agente: "QualificationAgent", texto: "Score: 65/100 — Morno", ts: "2026-04-06T16:01:55" },
        { tipo: "etapa", texto: "Atendimento Humano — verificação Caixa", ts: "2026-04-06T16:30:00" },
        { tipo: "humano", texto: "Documentação coletada e enviada", ts: "2026-04-06T17:00:00" },
        { tipo: "etapa", texto: "Contrato assinado digitalmente", ts: "2026-04-07T09:00:00" },
      ],
    },
  ],
};

export async function getLeadsByStage(_pipelineId) {
  return mockLeads;
}
