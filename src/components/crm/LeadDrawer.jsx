import { useState } from "react";
import {
  X,
  BrainCircuit,
  Clock,
  User2,
  Flame,
  Minus,
  Snowflake,
  MessageCircle,
  ArrowRightLeft,
  Bot,
  UserCheck,
  TrendingUp,
  CreditCard,
  BadgeCheck,
} from "lucide-react";
import { PRODUTOS_ELEVA } from "../../services/crm/leads";

/* ─── Temperature config ─── */
const tempConfig = {
  quente: { label: "Quente", icon: Flame,    color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  morno:  { label: "Morno",  icon: Minus,    color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  frio:   { label: "Frio",   icon: Snowflake, color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
};

/* ─── Timeline event icons ─── */
const timelineIcon = {
  agente:        { icon: Bot,            color: "#6366f1", bg: "rgba(99,102,241,0.1)" },
  mensagem_ia:   { icon: MessageCircle,  color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  mensagem_lead: { icon: User2,          color: "#94a3b8", bg: "rgba(148,163,184,0.1)" },
  etapa:         { icon: ArrowRightLeft, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  humano:        { icon: UserCheck,      color: "#06b6d4", bg: "rgba(6,182,212,0.1)" },
};

/* ─── Score gauge ─── */
function ScoreGauge({ score }) {
  const color =
    score >= 80 ? "#22c55e" :
    score >= 55 ? "#f59e0b" : "#ef4444";

  const label =
    score >= 80 ? "Alta propensão" :
    score >= 55 ? "Propensão média" : "Baixa propensão";

  const circumference = 2 * Math.PI * 36;
  const dash = (score / 100) * circumference;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 16px",
        background: `${color}08`,
        border: `1px solid ${color}25`,
        borderRadius: 12,
      }}
    >
      <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="40" cy="40" r="36" fill="none" stroke={`${color}20`} strokeWidth="7" />
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            style={{ transition: "stroke-dasharray 0.8s ease" }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <span style={{ fontSize: 20, fontWeight: 800, color, lineHeight: 1 }}>{score}</span>
          <span style={{ fontSize: 9, color, fontWeight: 600, opacity: 0.8 }}>/100</span>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--gray-500)", lineHeight: 1.5 }}>
          Score calculado pela IA com base no comportamento, respostas e perfil financeiro do lead.
        </div>
      </div>
    </div>
  );
}

/* ─── Section wrapper ─── */
function Section({ title, icon: Icon, iconColor = "#6366f1", children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: `${iconColor}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={14} color={iconColor} strokeWidth={2} />
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: "var(--gray-600)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ─── Timeline ─── */
function Timeline({ events }) {
  function formatTs(ts) {
    const d = new Date(ts);
    return d.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: 13, top: 14, bottom: 14, width: 1, background: "var(--border-color)" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {events.map((ev, i) => {
          const cfg = timelineIcon[ev.tipo] || timelineIcon.agente;
          const Icon = cfg.icon;
          return (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", position: "relative" }}>
              <div style={{
                width: 27, height: 27, borderRadius: "50%",
                background: "#fff",
                border: `2px solid ${cfg.color}40`,
                boxShadow: `0 0 0 3px ${cfg.bg}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, zIndex: 1,
              }}>
                <Icon size={12} color={cfg.color} strokeWidth={2} />
              </div>

              <div style={{ flex: 1, paddingTop: 3 }}>
                {ev.agente && (
                  <div style={{ fontSize: 10, fontWeight: 700, color: cfg.color, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>
                    {ev.agente}
                  </div>
                )}
                <div style={{ fontSize: 12, color: "var(--gray-700)", lineHeight: 1.45 }}>{ev.texto}</div>
                <div style={{ fontSize: 10, color: "var(--gray-400)", marginTop: 3, fontWeight: 500 }}>
                  {formatTs(ev.ts)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Tabs config ─── */
const TABS = [
  { id: "ia",       label: "Contexto IA",  icon: BrainCircuit },
  { id: "perfil",   label: "Perfil",       icon: TrendingUp },
  { id: "timeline", label: "Timeline",     icon: Clock },
];

/* ══════════════════════════════════════════
   LEAD DRAWER — export
══════════════════════════════════════════ */
export default function LeadDrawer({ lead, onClose }) {
  const [activeTab, setActiveTab] = useState("ia");

  if (!lead) return null;

  const temp = tempConfig[lead.temperatura] || tempConfig.morno;
  const TempIcon = temp.icon;

  const brl = (val) =>
    val != null
      ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val)
      : "—";

  const scoreColor = (s) =>
    s >= 80 ? "#22c55e" : s >= 55 ? "#f59e0b" : "#ef4444";

  const scoreBg = (s) =>
    s >= 80 ? "rgba(34,197,94,0.1)" : s >= 55 ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)";

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", justifyContent: "flex-end" }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.45)", backdropFilter: "blur(3px)" }} />

      {/* Panel */}
      <div
        style={{
          position: "relative",
          width: 460,
          maxWidth: "90vw",
          height: "100%",
          background: "#fff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.14)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── HEADER ── */}
        <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid var(--border-color)", background: "var(--surface-2)", flexShrink: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--border-color)", flexShrink: 0 }}>
                <User2 size={20} color="var(--gray-500)" />
              </div>
              <div>
                <h2 style={{ fontSize: 17, fontWeight: 800, margin: 0, color: "var(--gray-900)" }}>{lead.nome}</h2>
                <p style={{ fontSize: 12, color: "var(--gray-400)", margin: "3px 0 0", fontWeight: 500 }}>{lead.telefone}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "var(--gray-400)", borderRadius: 8 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gray-100)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: temp.color, background: temp.bg, padding: "3px 10px", borderRadius: 99 }}>
              <TempIcon size={10} strokeWidth={2.5} />
              {temp.label}
            </span>

            {lead.ia_score != null && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: scoreColor(lead.ia_score), background: scoreBg(lead.ia_score), padding: "3px 10px", borderRadius: 99 }}>
                <BrainCircuit size={10} />
                Score {lead.ia_score}
              </span>
            )}

            {lead.cpf && (
              <span style={{ fontSize: 11, fontWeight: 500, color: "var(--gray-500)", background: "var(--gray-100)", padding: "3px 10px", borderRadius: 99 }}>
                {lead.cpf}
              </span>
            )}
          </div>
        </div>

        {/* ── TABS ── */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", background: "#fff", flexShrink: 0 }}>
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  padding: "11px 8px",
                  border: "none",
                  borderBottom: isActive ? "2.5px solid #22c55e" : "2.5px solid transparent",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#22c55e" : "var(--gray-500)",
                  fontFamily: "var(--font-base)",
                  transition: "all 0.15s",
                  marginBottom: -1,
                }}
              >
                <Icon size={13} strokeWidth={isActive ? 2.5 : 1.8} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── CONTENT ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px" }}>

          {/* TAB: CONTEXTO IA */}
          {activeTab === "ia" && (
            <>
              {lead.ia_score != null && (
                <Section title="Score de Propensão" icon={BrainCircuit} iconColor="#22c55e">
                  <ScoreGauge score={lead.ia_score} />
                </Section>
              )}

              {lead.ia_summary && (
                <Section title="Resumo gerado pela IA" icon={MessageCircle} iconColor="#6366f1">
                  <div style={{ fontSize: 13, color: "var(--gray-700)", lineHeight: 1.65, background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: 10, padding: "12px 14px" }}>
                    {lead.ia_summary}
                  </div>
                </Section>
              )}

              {lead.ia_qualification_reason && (
                <Section title="Motivo da qualificação" icon={BadgeCheck} iconColor="#f59e0b">
                  <div style={{ fontSize: 13, color: "var(--gray-700)", lineHeight: 1.65, background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 10, padding: "12px 14px" }}>
                    {lead.ia_qualification_reason}
                  </div>
                </Section>
              )}

              {lead.ia_handoff_reason && (
                <Section title="Motivo do handoff" icon={ArrowRightLeft} iconColor="#06b6d4">
                  <div style={{ fontSize: 13, color: "var(--gray-700)", lineHeight: 1.65, background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.15)", borderRadius: 10, padding: "12px 14px" }}>
                    {lead.ia_handoff_reason}
                  </div>
                </Section>
              )}
            </>
          )}

          {/* TAB: PERFIL */}
          {activeTab === "perfil" && (
            <>
              {lead.produtos_interesse?.length > 0 && (
                <Section title="Produtos de interesse" icon={CreditCard} iconColor="#22c55e">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {lead.produtos_interesse.map((pid) => {
                      const prod = PRODUTOS_ELEVA[pid];
                      if (!prod) return null;
                      return (
                        <span key={pid} style={{ fontSize: 12, fontWeight: 600, color: prod.color, background: prod.bg, padding: "5px 13px", borderRadius: 99, border: `1px solid ${prod.color}30` }}>
                          {prod.label}
                        </span>
                      );
                    })}
                  </div>
                </Section>
              )}

              <Section title="Perfil financeiro" icon={TrendingUp} iconColor="#6366f1">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Tipo de dívida",     value: lead.tipo_divida || "—",         col: 1 },
                    { label: "Credor principal",    value: lead.credor || "—",              col: 1 },
                    { label: "Valor estimado",      value: brl(lead.divida_valor),          col: 1 },
                    { label: "Tempo em dívida",     value: lead.tempo_divida || "—",        col: 1 },
                    { label: "Situação de crédito", value: lead.situacao_credito || "—",    col: 2 },
                  ].map((f, i) => (
                    <div
                      key={i}
                      style={{
                        gridColumn: `span ${f.col}`,
                        background: "var(--surface-2)",
                        border: "1px solid var(--border-color)",
                        borderRadius: 10,
                        padding: "11px 14px",
                      }}
                    >
                      <div style={{ fontSize: 10, fontWeight: 600, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 }}>
                        {f.label}
                      </div>
                      <div style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color:
                          f.value === "Negativado" ? "#ef4444" :
                          f.value === "Regular"    ? "#22c55e" :
                          f.value === "Em atraso"  ? "#f59e0b" :
                          f.label === "Valor estimado" && lead.divida_valor ? "#6366f1" :
                          "var(--gray-800)",
                      }}>
                        {f.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}

          {/* TAB: TIMELINE */}
          {activeTab === "timeline" && (
            <Section title="Histórico de interações" icon={Clock} iconColor="#f59e0b">
              {lead.timeline?.length > 0
                ? <Timeline events={lead.timeline} />
                : <div style={{ fontSize: 13, color: "var(--gray-400)", textAlign: "center", padding: "20px 0" }}>Nenhum evento registrado.</div>
              }
            </Section>
          )}

        </div>
      </div>
    </div>
  );
}
