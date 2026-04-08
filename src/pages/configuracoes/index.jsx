import React from "react";
import ConfigUser from "./components/ConfigUser";
import ConfigCompany from "./components/ConfigCompany";
import ConfigSystem from "./components/ConfigSystem";
import ConfigPermissions from "./components/ConfigPermissions";
import ConfigNotifications from "./components/ConfigNotifications";
import { useUserStore } from "../../store/UserStore";

export default function ConfiguracoesPage() {
  const user = useUserStore((s) => s.user);

  return (
    <div className="w-full max-w-5xl mx-auto px-[5%] py-10 flex flex-col gap-10">

      <h1 className="text-4xl font-bold mb-4">Configurações</h1>

      {/* 🧑 Meu Perfil – sempre visível */}
      <ConfigUser />

      {/* 🏢 Empresa – só Admin */}
      {user?.role === "admin" && <ConfigCompany />}

      {/* ⚙️ Sistema – Admin e Gestor */}
      {(user?.role === "admin" || user?.role === "gestor") && (
        <ConfigSystem />
      )}

      {/* 🔐 Permissões – somente Admin */}
      {user?.role === "admin" && <ConfigPermissions />}

      {/* 🔔 Notificações – todos */}
      <ConfigNotifications />
    </div>
  );
}
