import React from "react";
import { TrendingUp, Users2, Bot, DollarSign, ArrowUpRight } from "lucide-react";

const stats = [
  {
    label: "Leads qualificados",
    valor: "247",
    change: "+18%",
    icon: Users2,
    iconColor: "#6366f1",
    iconBg: "rgba(99,102,241,0.1)",
    positive: true,
  },
  {
    label: "Leads via IA",
    valor: "184",
    change: "+34%",
    icon: Bot,
    iconColor: "#22c55e",
    iconBg: "rgba(34,197,94,0.1)",
    positive: true,
  },
  {
    label: "Comissões pendentes",
    valor: "R$ 32.900",
    change: "+12%",
    icon: DollarSign,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    positive: true,
  },
  {
    label: "Vendas efetivadas",
    valor: "R$ 128.400",
    change: "+7%",
    icon: TrendingUp,
    iconColor: "#06b6d4",
    iconBg: "rgba(6,182,212,0.1)",
    positive: true,
  },
];

export default function DashboardStats() {
  return (
    <section>
      {/* PAGE HEADER */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: "var(--brand-600)", marginBottom: 4 }}>
          Visão Geral
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--gray-900)", margin: 0 }}>
          Dashboard
        </h1>
      </div>

      {/* STAT CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--border-radius-md)",
                padding: "20px 22px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: item.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={item.iconColor} strokeWidth={2} />
                </div>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 12,
                    fontWeight: 600,
                    color: item.positive ? "#16a34a" : "#dc2626",
                    background: item.positive ? "rgba(22,163,74,0.08)" : "rgba(220,38,38,0.08)",
                    padding: "3px 8px",
                    borderRadius: 99,
                  }}
                >
                  <ArrowUpRight size={11} />
                  {item.change}
                </span>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--gray-500)",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "var(--gray-900)",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {item.valor}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

