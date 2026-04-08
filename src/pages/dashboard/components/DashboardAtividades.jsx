import React from "react";
import { CircleCheck, Bot, FileText, Clock } from "lucide-react";


const activities = [
  {
    icon: Bot,
    iconColor: "#22c55e",
    iconBg: "rgba(34,197,94,0.1)",
    description: "IA qualificou novo lead: Carlos Silva (CPF: 111.222.333-44)",
    time: "Há 10 min",
  },
  {
    icon: CircleCheck,
    iconColor: "#6366f1",
    iconBg: "rgba(99,102,241,0.1)",
    description: "Venda efetivada: Marcos Aurélio – R$ 8.200,00",
    time: "Há 1 hora",
  },
  {
    icon: FileText,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    description: "Nova regra de comissão 'Premium Digital' criada",
    time: "Ontem",
  },
  {
    icon: Clock,
    iconColor: "#94a3b8",
    iconBg: "rgba(148,163,184,0.1)",
    description: "Lead Ana Beatriz movida para 'Análise de Crédito'",
    time: "10/04",
  },
];

export default function DashboardAtividades() {
  return (
    <section style={{ marginTop: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--gray-900)", margin: 0 }}>
          Atividades recentes
        </h2>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "var(--brand-600)",
            cursor: "pointer",
            padding: "4px 10px",
            borderRadius: 99,
            background: "var(--brand-50)",
          }}
        >
          Ver tudo
        </span>
      </div>

      <div
        style={{
          background: "var(--surface-1)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--border-radius-md)",
          boxShadow: "var(--shadow-sm)",
          overflow: "hidden",
        }}
      >
        {activities.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 20px",
                borderBottom: i < activities.length - 1 ? "1px solid var(--border-color)" : "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: item.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={17} color={item.iconColor} strokeWidth={2} />
              </div>

              <span
                style={{
                  flex: 1,
                  fontSize: 14,
                  color: "var(--gray-700)",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </span>

              <span
                style={{
                  fontSize: 12,
                  color: "var(--gray-400)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

