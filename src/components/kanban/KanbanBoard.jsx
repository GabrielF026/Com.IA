import { useEffect, useState } from "react";
import { getStages } from "../../services/crm/stages";
import { getLeadsByStage } from "../../services/crm/leads";
import { moveLeadStage } from "../../services/crm/moveLeadStage";
import { X, Plus, Flame, Minus, Snowflake, User2, BrainCircuit, Search } from "lucide-react";
import LeadDrawer from "../crm/LeadDrawer";

/* =============================================================
   TEMPERATURE CONFIG
============================================================== */
const tempConfig = {
  quente: { label: "Quente", icon: Flame,    color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  morno:  { label: "Morno",  icon: Minus,    color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  frio:   { label: "Frio",   icon: Snowflake, color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
};

const stageColorMap = {
  prospeccao_ia:     { accent: "#6366f1", colBg: "rgba(99,102,241,0.06)" },
  atendimento_humano:{ accent: "#f59e0b", colBg: "rgba(245,158,11,0.06)" },
  analise_credito:   { accent: "#22c55e", colBg: "rgba(34,197,94,0.06)" },
  contrato_assinado: { accent: "#06b6d4", colBg: "rgba(6,182,212,0.06)" },
};

/* =============================================================
   LEAD CARD
============================================================== */
function LeadCard({ lead, stageId, onSelect }) {
  const temp = tempConfig[lead.temperatura] || tempConfig.morno;
  const TempIcon = temp.icon;

  return (
    <div
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({ leadId: lead.id, fromStageId: stageId })
        )
      }
      onClick={() => onSelect?.(lead)}
      style={{
        background: "var(--surface-1)",
        border: "1px solid var(--border-color)",
        borderRadius: 8,
        padding: "14px 16px",
        marginBottom: 10,
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow 0.2s, transform 0.15s",
        userSelect: "none",
        cursor: "grab",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--surface-3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <User2 size={15} color="var(--gray-500)" />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gray-900)", lineHeight: 1.2 }}>{lead.nome}</div>
            <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 2 }}>{lead.telefone}</div>
          </div>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 700, color: temp.color, background: temp.bg, padding: "3px 8px", borderRadius: 99, letterSpacing: "0.03em" }}>
          <TempIcon size={9} strokeWidth={2.5} />
          {temp.label}
        </span>
      </div>

      {/* DATA */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <div style={{ background: "var(--surface-3)", borderRadius: 8, padding: "7px 10px", border: "1px solid var(--border-color)" }}>
          <div style={{ fontSize: 10, color: "var(--gray-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>CPF</div>
          <div style={{ fontSize: 12, color: "var(--gray-700)", fontWeight: 500 }}>{lead.cpf || "—"}</div>
        </div>
        <div style={{ background: "var(--surface-3)", borderRadius: 8, padding: "7px 10px", border: "1px solid var(--border-color)" }}>
          <div style={{ fontSize: 10, color: "var(--gray-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>Dívida</div>
          <div style={{ fontSize: 12, color: "var(--brand-700)", fontWeight: 700 }}>
            {lead.divida_valor ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(lead.divida_valor) : "—"}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   KANBAN COLUMN
============================================================== */
function KanbanColumn({ stage, leads, onMoveLead, onSelectLead }) {
  const colors = stageColorMap[stage.id] || { accent: "#94a3b8", colBg: "rgba(148,163,184,0.06)" };
  const [isDragOver, setIsDragOver] = useState(false);
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const query = search.trim().toLowerCase();
  const filteredLeads = query
    ? leads.filter(
        (l) =>
          l.nome?.toLowerCase().includes(query) ||
          l.telefone?.toLowerCase().includes(query) ||
          l.cpf?.toLowerCase().includes(query)
      )
    : leads;


  return (
    <div
      style={{
        width: 300,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: 14,
        border: `1.5px solid ${isDragOver ? colors.accent : "var(--border-color)"}`,
        background: isDragOver ? `${colors.accent}08` : "var(--surface-2)",
        boxShadow: isDragOver
          ? `0 0 0 3px ${colors.accent}20, 0 4px 16px ${colors.accent}15`
          : "var(--shadow-sm)",
        transition: "border-color 0.18s, box-shadow 0.18s, background 0.18s",
        alignSelf: "flex-start",
        /* Entire column is the drop zone */
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={(e) => {
        /* only trigger leave when leaving the column entirely */
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsDragOver(false);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragOver(false);
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        onMoveLead(data.leadId, data.fromStageId, stage.id);
      }}
    >
      {/* COLUMN HEADER */}
      <div
        style={{
          padding: "14px 16px 12px",
          borderBottom: `1px solid ${isDragOver ? `${colors.accent}30` : "var(--border-color)"}`,
          borderRadius: "14px 14px 0 0",
          background: isDragOver ? `${colors.accent}10` : colors.colBg,
          transition: "background 0.18s, border-color 0.18s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: colors.accent,
                boxShadow: isDragOver
                  ? `0 0 10px ${colors.accent}`
                  : `0 0 6px ${colors.accent}80`,
                transition: "box-shadow 0.18s",
              }}
            />
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--gray-900)", margin: 0 }}>
              {stage.nome}
            </h3>
          </div>

          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: colors.accent,
              background: `${colors.accent}18`,
              padding: "2px 9px",
              borderRadius: 99,
            }}
          >
            {query ? `${filteredLeads.length}/${leads.length}` : leads.length}
          </span>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          padding: "8px 10px",
          borderBottom: `1px solid ${isDragOver ? `${colors.accent}30` : "var(--border-color)"}`,
          background: isDragOver ? `${colors.accent}06` : "var(--surface-1)",
          transition: "background 0.18s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: searchFocused ? "var(--surface-1)" : "var(--surface-3)",
            border: `1.5px solid ${searchFocused ? colors.accent : "var(--border-color)"}`,
            borderRadius: 9,
            padding: "6px 10px",
            transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s",
            boxShadow: searchFocused ? `0 0 0 3px ${colors.accent}20` : "none",
          }}
        >
          <Search
            size={13}
            color={searchFocused ? colors.accent : "var(--gray-400)"}
            strokeWidth={2}
            style={{ flexShrink: 0, transition: "color 0.15s" }}
          />
          <input
            type="text"
            placeholder="Nome, telefone ou CPF…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 12,
              fontFamily: "var(--font-base)",
              color: "var(--gray-900)",
              background: "transparent",
              minWidth: 0,
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                color: "var(--gray-400)",
                flexShrink: 0,
              }}
              title="Limpar busca"
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      {/* LEADS LIST — full scrollable drop zone */}
      <div
        style={{
          padding: "12px 10px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 220px)",
          minHeight: isDragOver && leads.length === 0 ? 120 : 80,
          borderRadius: "0 0 14px 14px",
          transition: "min-height 0.18s",
        }}
      >
        {/* empty column */}
        {leads.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: 80,
              padding: "20px 10px",
              color: isDragOver ? colors.accent : "var(--gray-400)",
              fontSize: 12,
              fontWeight: isDragOver ? 600 : 400,
              textAlign: "center",
              border: `2px dashed ${isDragOver ? colors.accent : "var(--border-color)"}`,
              borderRadius: 10,
              background: isDragOver ? `${colors.accent}06` : "transparent",
              transition: "all 0.18s",
            }}
          >
            {isDragOver ? "↓ Soltar aqui" : "Solte um lead aqui"}
          </div>
        )}

        {/* no result for search */}
        {leads.length > 0 && filteredLeads.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 10px",
              color: "var(--gray-400)",
              fontSize: 12,
              textAlign: "center",
              gap: 6,
            }}
          >
            <Search size={20} color="var(--gray-300)" strokeWidth={1.5} />
            <span>Nenhum lead encontrado<br />para <strong style={{ color: "var(--gray-500)" }}>"{search}"</strong></span>
          </div>
        )}

        {/* leads list */}
        {filteredLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} stageId={stage.id} onSelect={onSelectLead} />
        ))}
      </div>
    </div>
  );
}

/* =============================================================
   NEW LEAD MODAL
============================================================== */
function NewLeadModal({ open, onClose }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [divida, setDivida] = useState("");
  const [temp, setTemp] = useState("morno");

  if (!open) return null;

  function handleSave(e) {
    e.preventDefault();
    console.log("[ElevaCredi Mock] New lead:", { nome, telefone, cpf, divida, temp });
    setNome(""); setTelefone(""); setCpf(""); setDivida(""); setTemp("morno");
    onClose();
  }

  const inputStyle = {
    width: "100%", padding: "9px 12px", border: "1px solid var(--border-color)",
    borderRadius: 8, fontSize: 14, fontFamily: "var(--font-base)", outline: "none",
    color: "var(--gray-900)", background: "var(--surface-1)", boxSizing: "border-box",
  };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "var(--gray-600)", marginBottom: 5 };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(15,23,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        style={{ background: "var(--surface-1)", border: "1px solid var(--border-color)", borderRadius: 16, width: "100%", maxWidth: 440, padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--gray-900)", margin: 0 }}>Novo Lead</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "var(--gray-400)" }}><X size={20} /></button>
        </div>

        <form onSubmit={handleSave} style={{ display: "grid", gap: 14 }}>
          <div>
            <label style={labelStyle}>Nome completo</label>
            <input style={inputStyle} placeholder="Ex: Carlos Silva" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Telefone</label>
              <input style={inputStyle} placeholder="(11) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>CPF</label>
              <input style={inputStyle} placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Valor da dívida (R$)</label>
            <input style={inputStyle} type="number" placeholder="0,00" value={divida} onChange={(e) => setDivida(e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Temperatura</label>
            <div style={{ display: "flex", gap: 8 }}>
              {["quente", "morno", "frio"].map((t) => {
                const cfg = tempConfig[t];
                const TIcon = cfg.icon;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTemp(t)}
                    style={{
                      flex: 1, padding: "8px 6px", borderRadius: 8,
                      border: `1.5px solid ${temp === t ? cfg.color : "var(--border-color)"}`,
                      background: temp === t ? cfg.bg : "transparent",
                      color: temp === t ? cfg.color : "var(--gray-500)",
                      fontSize: 12, fontWeight: 600, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                    }}
                  >
                    <TIcon size={13} />
                    {cfg.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid var(--border-color)", background: "transparent", fontSize: 14, fontWeight: 500, color: "var(--gray-600)", cursor: "pointer" }}>
              Cancelar
            </button>
            <button type="submit" style={{ flex: 1, padding: 10, borderRadius: 8, border: "none", background: "linear-gradient(135deg, #22c55e, #15803d)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 8px rgba(22,197,94,0.3)" }}>
              Criar Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =============================================================
   KANBAN BOARD (EXPORT)
============================================================== */
export function KanbanBoard({ pipelineId }) {
  const [stages, setStages] = useState([]);
  const [leadsByStage, setLeadsByStage] = useState({});
  const [loading, setLoading] = useState(true);
  const [openNewLead, setOpenNewLead] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    async function load() {
      const s = await getStages(pipelineId);
      const l = await getLeadsByStage(pipelineId);
      setStages(s);
      setLeadsByStage(l);
      setLoading(false);
    }
    load();
  }, [pipelineId]);

  async function handleMoveLead(leadId, fromStageId, toStageId) {
    if (fromStageId === toStageId) return;
    await moveLeadStage(leadId, toStageId);
    setLeadsByStage((prev) => {
      const updated = { ...prev };
      const lead = prev[fromStageId].find((l) => l.id === leadId);
      updated[fromStageId] = prev[fromStageId].filter((l) => l.id !== leadId);
      updated[toStageId] = [...(prev[toStageId] || []), lead];
      return updated;
    });
  }

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200, color: "var(--gray-400)", fontSize: 14 }}>
        Carregando funil…
      </div>
    );
  }

  const totalLeads = Object.values(leadsByStage).flat().length;

  return (
    <>
      {/* TOOLBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--brand-600)", margin: 0, marginBottom: 4 }}>CRM</p>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--gray-900)", margin: 0, letterSpacing: "-0.4px" }}>Funil de Vendas</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>{totalLeads} leads no funil</span>
          <button
            onClick={() => setOpenNewLead(true)}
            style={{
              display: "flex", alignItems: "center", gap: 7, padding: "9px 18px",
              borderRadius: 9, border: "none",
              background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
              color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer",
              boxShadow: "0 2px 8px rgba(34,197,94,0.3)",
            }}
          >
            <Plus size={16} strokeWidth={2.5} />
            Novo Lead
          </button>
        </div>
      </div>

      {/* BOARD */}
      <div style={{
        display: "flex",
        gap: 16,
        overflowX: "auto",
        paddingBottom: 20,
        alignItems: "flex-start",
      }}>
        {stages.map((stage) => (
          <KanbanColumn
            key={stage.id}
            stage={stage}
            leads={leadsByStage[stage.id] || []}
            onMoveLead={handleMoveLead}
            onSelectLead={setSelectedLead}
          />
        ))}
      </div>

      <NewLeadModal open={openNewLead} onClose={() => setOpenNewLead(false)} />

      {/* LEAD DRAWER — Fase 1: Contexto IA + Perfil + Timeline */}
      {selectedLead && (
        <LeadDrawer lead={selectedLead} onClose={() => setSelectedLead(null)} />
      )}
    </>
  );
}
