"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useUserStore } from "../../../store/UserStore";
import { Zap, Mail, Lock, ArrowRight, Bot } from "lucide-react";

export default function Login3() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, senha);
      setUser({ uid: cred.user.uid, email: cred.user.email });
      navigate("/dashboard");
    } catch {
      setErro("E-mail ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "11px 14px 11px 42px",
    border: "1.5px solid #e2e8f0",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    outline: "none",
    color: "#1e293b",
    background: "#fff",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "Inter, sans-serif" }}>
      {/* LEFT PANEL – BRAND */}
      <div
        style={{
          width: "45%",
          background: "linear-gradient(145deg, #0f172a 0%, #1a2c4e 60%, #0f3027 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effects */}
        <div style={{ position: "absolute", top: "20%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.15), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)", pointerEvents: "none" }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, #22c55e, #15803d)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}>
            <Zap size={22} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.5px" }}>ElevaCredi</span>
        </div>

        {/* Main copy */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#4ade80", marginBottom: 24 }}>
            <Bot size={13} />
            Powered by Multi-Agentes IA
          </div>

          <h1 style={{ fontSize: 38, fontWeight: 800, color: "#f8fafc", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.8px" }}>
            CRM inteligente
            <br />
            <span style={{ color: "#4ade80" }}>para crédito</span>
          </h1>

          <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.6, maxWidth: 360 }}>
            Gerencie leads qualificados pela IA, acompanhe o funil de vendas e maximize a conversão da sua equipe de crédito.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
            {["Leads em tempo real", "Qualificação por IA", "CRM Kanban"].map((t) => (
              <div key={t} style={{ fontSize: 11, fontWeight: 600, color: "#64748b", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 12px", borderRadius: 8 }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 12, color: "#334155", position: "relative" }}>© 2026 ElevaCredi. Todos os direitos reservados.</p>
      </div>

      {/* RIGHT PANEL – FORM */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px", background: "#fff" }}>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", marginBottom: 6, letterSpacing: "-0.4px" }}>
            Bem-vindo de volta
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32 }}>
            Acesse o painel de gestão da sua equipe
          </p>

          {erro && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "11px 14px", fontSize: 13, color: "#dc2626", marginBottom: 20, fontWeight: 500 }}>
              {erro}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "grid", gap: 16 }}>
            {/* EMAIL */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}>E-mail</label>
              <div style={{ position: "relative" }}>
                <Mail size={15} color="#94a3b8" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#22c55e"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; }}
                />
              </div>
            </div>

            {/* SENHA */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>Senha</label>
                <span style={{ fontSize: 12, color: "#22c55e", cursor: "pointer", fontWeight: 500 }}>Esqueceu a senha?</span>
              </div>
              <div style={{ position: "relative" }}>
                <Lock size={15} color="#94a3b8" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#22c55e"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; }}
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px",
                borderRadius: 10,
                border: "none",
                background: loading ? "#dcfce7" : "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
              }}
            >
              {loading ? "Entrando..." : (<>Acessar sistema <ArrowRight size={16} strokeWidth={2.5} /></>)}
            </button>
          </form>

          <p style={{ marginTop: 28, fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
            Não tem acesso?{" "}
            <span style={{ color: "#15803d", fontWeight: 600, cursor: "pointer" }}>Solicite ao seu gestor</span>
          </p>
        </div>
      </div>
    </div>
  );
}
