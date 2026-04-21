import React from "react";
import "./landing.css";

const dashboardHref = "/dashboard";
const loginHref = "/login";
const whatsappHref = "https://wa.me/+5541985010000";

const operacoes = [
  {
    icon: "IA",
    title: "Qualificação inteligente",
    text: "Leads entram, passam pela análise dos agentes e já chegam ao time com contexto, prioridade e próximos passos.",
  },
  {
    icon: "CRM",
    title: "Funil comercial vivo",
    text: "Acompanhe cada lead por etapa, organize o atendimento e evite perda de oportunidade no meio do caminho.",
  },
  {
    icon: "OPS",
    title: "Operação centralizada",
    text: "Vendas, regras, contratos e usuários reunidos no mesmo ambiente para dar ritmo ao time inteiro.",
  },
  {
    icon: "DATA",
    title: "Contexto em cada etapa",
    text: "Cada movimentação preserva informações do lead para a equipe atender melhor e com menos retrabalho.",
  },
];

const steps = [
  {
    title: "Captura e qualificação",
    text: "Os leads entram no CRM e podem ser enriquecidos pelo sistema multiagentes com leitura de intenção, score e prioridade.",
  },
  {
    title: "Distribuição operacional",
    text: "A equipe enxerga o funil completo, recebe contexto do lead e atua com clareza no momento certo.",
  },
  {
    title: "Acompanhamento e conversão",
    text: "Cada avanço fica registrado para transformar atendimento em processo repetível e crescimento em escala.",
  },
];

const benefits = [
  {
    icon: "⚡",
    title: "Velocidade com contexto",
    text: "O atendente não começa do zero. O lead já chega com sinais, histórico e direção de abordagem.",
  },
  {
    icon: "🎯",
    title: "Priorização mais inteligente",
    text: "O time sabe quem precisa de resposta rápida, quem precisa nutrir e quem já está pronto para handoff.",
  },
  {
    icon: "🧩",
    title: "Base pronta para integração",
    text: "A estrutura do CRM foi pensada para acoplar processos comerciais e automações da ElevaCredi.",
  },
  {
    icon: "📈",
    title: "Operação com visão gerencial",
    text: "Leads qualificados, pipeline, vendas e comissões ficam mais simples de acompanhar no dia a dia.",
  },
  {
    icon: "🔒",
    title: "Acesso controlado",
    text: "Perfis e permissões seguem sustentando a rotina de admin, gestor e vendedor dentro do CRM.",
  },
];

const frentes = [
  {
    initials: "CRM",
    name: "Pipeline comercial",
    tag: "Kanban + histórico",
    text: "Organize os leads por etapa, centralize o andamento e reduza o retrabalho do time comercial.",
  },
  {
    initials: "IA",
    name: "Sistema multiagentes",
    tag: "Qualificação e estratégia",
    text: "A inteligência ajuda a classificar intenção, urgência e melhor encaminhamento sem tirar o controle do operador.",
  },
  {
    initials: "OPS",
    name: "Operação ElevaCredi",
    tag: "Vendas, usuários e regras",
    text: "A base atual do CRM continua disponível para evoluir junto com os processos do cliente e da equipe.",
  },
];

function WhatsAppIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L.057 23.93a.5.5 0 0 0 .614.614l6.072-1.471A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.058-1.38l-.363-.215-3.753.91.926-3.753-.234-.374A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function InicioPage() {
  return (
    <div className="eleva-landing eleva-landing-page">
      <nav className="eleva-nav">
        <div className="eleva-nav-inner">
          <div className="eleva-logo">
            Eleva<span>Credi</span>
          </div>
          <div className="eleva-nav-actions">
            <a className="eleva-btn-secondary small" href={loginHref}>
              Entrar
            </a>
            <a className="eleva-cta-nav" href={dashboardHref}>
              Abrir CRM
            </a>
          </div>
        </div>
      </nav>

      <section className="eleva-hero">
        <div className="eleva-hero-content">
          <div className="eleva-badge">
            <span className="eleva-badge-dot" />
            Operação e IA no mesmo fluxo
          </div>
          <h1>
            CRM ElevaCredi.
            <br />
            Gestão comercial com <em>inteligência aplicada.</em>
          </h1>
          <p>
            Acompanhe leads, funil, vendas e qualificação por IA em uma experiência pensada para a rotina da ElevaCredi.
          </p>
          <div className="eleva-hero-btns">
            <a className="eleva-btn-primary" href={loginHref}>
              Acessar painel
            </a>
            <a className="eleva-btn-secondary" href="#como-funciona">
              Ver estrutura
            </a>
          </div>
          <div className="eleva-hero-stats">
            <div className="eleva-stat-item">
              <div className="eleva-stat-num">CRM</div>
              <div className="eleva-stat-label">Funil e operação</div>
            </div>
            <div className="eleva-stat-item">
              <div className="eleva-stat-num">IA</div>
              <div className="eleva-stat-label">Qualificação assistida</div>
            </div>
            <div className="eleva-stat-item">
              <div className="eleva-stat-num">OPS</div>
              <div className="eleva-stat-label">Rotina comercial</div>
            </div>
          </div>
        </div>
      </section>

      <section className="eleva-section alt">
        <div className="eleva-inner">
          <span className="eleva-section-tag">Base operacional</span>
          <h2 className="eleva-section-title">O que já existe no CRM e onde vamos evoluir</h2>
          <p className="eleva-section-sub">
            A estrutura atual vira a base da operação ElevaCredi sem perder o que já foi construído.
          </p>
          <div className="eleva-dynamic-grid dores">
            {operacoes.map((item) => (
              <article key={item.title} className="eleva-card dor">
                <div className="eleva-dor-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eleva-section" id="como-funciona">
        <div className="eleva-inner">
          <span className="eleva-section-tag">Fluxo de trabalho</span>
          <h2 className="eleva-section-title">Como o CRM conversa com a operação</h2>
          <p className="eleva-section-sub">
            Da entrada do lead até a tomada de decisão da equipe.
          </p>
          <div className="eleva-dynamic-grid steps">
            {steps.map((step, index) => (
              <article key={step.title} className="eleva-card step">
                <div className="eleva-step-num">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eleva-section alt">
        <div className="eleva-inner">
          <span className="eleva-section-tag">Experiência do sistema</span>
          <h2 className="eleva-section-title">O que muda com a nova direção visual</h2>
          <div className="eleva-dynamic-grid benefits">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="eleva-card eleva-benefit">
                <div className="eleva-benefit-icon">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eleva-section">
        <div className="eleva-inner">
          <span className="eleva-section-tag">Frentes do produto</span>
          <h2 className="eleva-section-title">As peças que vamos conectar dentro do mesmo ecossistema</h2>
          <p className="eleva-section-sub">
            A home pública agora apresenta o produto. A landing de cliente fica preservada à parte.
          </p>
          <div className="eleva-dynamic-grid depoimentos">
            {frentes.map((item) => (
              <article key={item.name} className="eleva-card eleva-depoimento">
                <div className="eleva-stars">{item.initials}</div>
                <p className="eleva-depoimento-text">"{item.text}"</p>
                <div className="eleva-depoimento-author">
                  <div className="eleva-depoimento-avatar">{item.initials}</div>
                  <div>
                    <div className="eleva-depoimento-name">{item.name}</div>
                    <div className="eleva-depoimento-tag">{item.tag}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eleva-section eleva-cta-section">
        <div className="eleva-inner">
          <div className="eleva-cta-box">
            <h2>Pronto para seguir com a evolução do CRM?</h2>
            <p>
              Entre no painel, valide a nova identidade visual e use a landing comercial separada quando quiser apresentar ao Carlos.
            </p>
            <a className="eleva-btn-primary" href={loginHref}>
              Abrir login do CRM
            </a>
            <p className="eleva-urgency">
              Operação integrada · <span>Fluxo comercial organizado</span> · Base pronta para IA
            </p>
          </div>
        </div>
      </section>

      <footer className="eleva-footer">
        <p>
          © 2026 ElevaCredi · CRM e operação comercial ·{" "}
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            falar com a operação
          </a>
        </p>
      </footer>

      <a
        className="eleva-wa-float"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        title="Falar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
