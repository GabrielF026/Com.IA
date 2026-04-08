import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useUserStore } from "./store/UserStore";

import PublicLayout from "./components/layout/PublicLayout";
import PrivateLayout from "./components/layout/PrivateLayout";
import RequireAuth from "./components/auth/RequireAuth";

// Páginas públicas
import Inicio from "./pages/inicio";
import LoginPage from "./pages/login";

// Páginas privadas
import Dashboard from "./pages/dashboard";
import Contratos from "./pages/contratos";
import VisualizarContrato from "./pages/visualizar-contrato";
import EditarContrato from "./pages/editar-contrato";
import ImportarContratos from "./pages/importar-contratos";

import Usuarios from "./pages/usuarios";
import AdicionarUsuario from "./pages/adicionar-usuario";
import EditarUsuario from "./pages/editar-usuario";

import Regras from "./pages/regra-de-comissao";
import ListaRegras from "./pages/lista-de-regras";
import CriarRegra from "./pages/criar-regra";
import EditarRegra from "./pages/editar-regra";

import CRM from "./pages/crm";
import Configuracoes from "./pages/configuracoes";

export default function App() {
  const setUser = useUserStore((state) => state.setUser);

  // 🔥 ESCUTA LOGIN / LOGOUT DO FIREBASE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🔥 Firebase auth state:", user);
      setUser(user ?? null);
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      {/* ===================== */}
      {/* ROTAS PÚBLICAS        */}
      {/* ===================== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* ===================== */}
      {/* ROTAS PRIVADAS        */}
      {/* ===================== */}
      <Route
        element={
          <RequireAuth>
            <PrivateLayout />
          </RequireAuth>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        {/* CRM */}
        <Route path="/crm" element={<CRM />} />

        {/* CONTRATOS */}
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/visualizar-contrato" element={<VisualizarContrato />} />
        <Route path="/editar-contrato" element={<EditarContrato />} />
        <Route path="/importar-contratos" element={<ImportarContratos />} />

        {/* USUÁRIOS */}
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/adicionar-usuario" element={<AdicionarUsuario />} />
        <Route path="/editar-usuario" element={<EditarUsuario />} />

        {/* REGRAS */}
        <Route path="/regra-de-comissao" element={<Regras />} />
        <Route path="/lista-de-regras" element={<ListaRegras />} />
        <Route path="/criar-regra" element={<CriarRegra />} />
        <Route path="/editar-regra" element={<EditarRegra />} />

        {/* CONFIG */}
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
