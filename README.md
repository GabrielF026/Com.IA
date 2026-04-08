# 📊 ElevaCredi CRM

Interface visual do **funil de vendas da ElevaCredi**, construída como SaaS moderno. Exibe leads qualificados pelo sistema Multi-Agentes de IA em um Kanban interativo com drag-and-drop, search por coluna, e painel de contexto de IA por lead.

---

## Funcionalidades

### Funil de Vendas (Kanban)
- ✅ Drag-and-drop entre etapas com feedback visual de glow por cor de etapa
- ✅ **Search bar por coluna** — filtro em tempo real por nome, telefone ou CPF
- ✅ Contagem `filtrado/total` quando há busca ativa

### Drawer de Lead (Painel Lateral)
Abre ao clicar em qualquer card, com 3 abas:

| Aba | Conteúdo |
|---|---|
| 🧠 **Contexto IA** | Score gauge animado, resumo gerado pela IA, motivo da qualificação, motivo do handoff |
| 📊 **Perfil** | Produtos de interesse (multi-produto), tipo de dívida, credor, valor, status de crédito |
| ⏱️ **Timeline** | Histórico cronológico de interações: agentes IA, mensagens do lead, mudanças de etapa |

### Outros
- ✅ Sidebar navegável (Dashboard, CRM, Vendas, Comissões, Configurações)
- ✅ Tela de login split-panel com branding ElevaCredi
- ✅ Dashboard com métricas e atividades recentes
- ✅ Autenticação Firebase

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + Vite |
| Estilização | CSS puro (variáveis CSS) |
| Ícones | Lucide React |
| Roteamento | React Router v6 |
| Estado global | Zustand |
| Autenticação | Firebase Auth |

---

## Setup Local

```bash
npm install
npm run dev
# Acesse http://localhost:5173
```

Variáveis de ambiente necessárias (`.env`):
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_API_URL=http://localhost:8000   # URL da API quando integração ativa
```

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── crm/            # LeadDrawer (Contexto IA + Perfil + Timeline)
│   ├── kanban/         # KanbanBoard (funil principal)
│   └── layout/         # Sidebar, PrivateLayout
├── pages/
│   ├── crm/            # Página do funil
│   ├── dashboard/      # Dashboard com métricas
│   └── login/          # Tela de login
├── services/
│   ├── api/            # apiClient.js (conexão com backend)
│   └── crm/            # leads.js, stages.js, moveLeadStage.js
└── index.css           # Design system com variáveis CSS
```

---

## Produtos ElevaCredi suportados

| Produto | ID interno |
|---|---|
| Limpa Nome | `limpa_nome` |
| Portabilidade de Crédito | `portabilidade` |
| Empréstimo Pessoal | `emprestimo` |
| Antecipação FGTS | `fgts` |
| Consórcio | `consorcio` |
| Refinanciamento | `refinanciamento` |
| Cartão Consignado | `cartao_consignado` |

---

## Status atual

- ✅ Interface 100% funcional com dados mockados
- ⏳ Integração com backend pendente
- ⏳ Autenticação JWT na API pendente

---

## Relacionado

- 🤖 **[Multi-Agents-Eleva](https://github.com/seu-usuario/multi-agents-eleva)**
- 🔗 **[ElevaCredi Platform](https://github.com/seu-usuario/elevacredi-platform)**

> Desenvolvido para **ElevaCredi** — CRM inteligente para o mercado de crédito
