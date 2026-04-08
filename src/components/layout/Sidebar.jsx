import { NavLink, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";
import {
  LayoutDashboard,
  Kanban,
  FileCheck2,
  Users,
  Settings,
  Percent,
  LogOut,
  ChevronRight,
  Zap,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
    roles: ["admin", "gestor", "vendedor"],
  },
  {
    label: "CRM",
    icon: Kanban,
    to: "/crm",
    roles: ["admin", "gestor", "vendedor"],
  },
  {
    label: "Vendas",
    icon: FileCheck2,
    to: "/visualizar-contrato",
    roles: ["admin", "gestor", "vendedor"],
  },
  {
    label: "Usuários",
    icon: Users,
    to: "/usuarios",
    roles: ["admin", "gestor"],
  },
  {
    label: "Comissões",
    icon: Percent,
    to: "/lista-de-regras",
    roles: ["admin", "gestor", "vendedor"],
  },
  {
    label: "Configurações",
    icon: Settings,
    to: "/configuracoes",
    roles: ["admin", "gestor", "vendedor"],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = useUserStore((s) => s.logout);
  const user = useUserStore((s) => s.user);
  const role = user?.role || "vendedor";

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const filtered = navItems.filter((item) => item.roles.includes(role));

  return (
    <aside
      style={{
        width: "var(--sidebar-width)",
        backgroundColor: "var(--sidebar-bg)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 30,
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          padding: "24px 20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #22c55e, #15803d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(34,197,94,0.35)",
            }}
          >
            <Zap size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-base)",
                fontWeight: 700,
                fontSize: 16,
                color: "#f8fafc",
                letterSpacing: "-0.3px",
              }}
            >
              ElevaCredi
            </span>
            <div
              style={{
                fontSize: 10,
                color: "var(--brand-400)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginTop: 1,
              }}
            >
              CRM Inteligente
            </div>
          </div>
        </div>
      </div>

      {/* NAV ITEMS */}
      <nav
        style={{
          flex: 1,
          padding: "12px 10px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "rgba(148,163,184,0.5)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 10px 8px",
          }}
        >
          Menu
        </div>
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 12px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--sidebar-active-text)" : "var(--sidebar-text)",
                background: isActive ? "var(--sidebar-active-bg)" : "transparent",
                transition: "all 0.15s ease",
                textDecoration: "none",
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("active")) {
                  e.currentTarget.style.background = "var(--sidebar-hover-bg)";
                  e.currentTarget.style.color = "#f1f5f9";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--sidebar-text)";
                }
              }}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span style={{ flex: 1 }}>{item.label}</span>
              <ChevronRight size={13} style={{ opacity: 0.3 }} />
            </NavLink>
          );
        })}
      </nav>

      {/* USER FOOTER */}
      <div
        style={{
          padding: "12px 10px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {user && (
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              marginBottom: 6,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#f1f5f9",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {user.email}
            </div>
            <div
              style={{
                fontSize: 11,
                marginTop: 2,
                textTransform: "capitalize",
                color: "var(--brand-400)",
                fontWeight: 500,
              }}
            >
              {role}
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            color: "#94a3b8",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.1)";
            e.currentTarget.style.color = "#f87171";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#94a3b8";
          }}
        >
          <LogOut size={15} strokeWidth={1.8} />
          Sair
        </button>
      </div>
    </aside>
  );
}
