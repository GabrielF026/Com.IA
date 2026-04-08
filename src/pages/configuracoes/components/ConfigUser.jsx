import React, { useState } from "react";
import { useUserStore } from "../../../store/UserStore";

export default function ConfigUser() {
  const user = useUserStore((s) => s.user);

  const [nome, setNome] = useState(user.nome || "");
  const [telefone, setTelefone] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Meu Perfil</h2>

      {/* Nome */}
      <label className="block text-sm font-medium mb-1">Nome</label>
      <input
        className="border rounded p-2 w-full mb-4"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      {/* Email */}
      <label className="block text-sm font-medium mb-1">E-mail</label>
      <input
        disabled
        className="border rounded p-2 w-full bg-gray-100 mb-4"
        value={user.email}
      />

      {/* Telefone */}
      <label className="block text-sm font-medium mb-1">Telefone</label>
      <input
        className="border rounded p-2 w-full mb-4"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      {/* Trocar senha */}
      <h3 className="font-medium text-sm mt-4 mb-2">Atualizar Senha</h3>

      <input
        type="password"
        placeholder="Senha atual"
        className="border rounded p-2 w-full mb-2"
        value={senhaAtual}
        onChange={(e) => setSenhaAtual(e.target.value)}
      />

      <input
        type="password"
        placeholder="Nova senha"
        className="border rounded p-2 w-full mb-4"
        value={novaSenha}
        onChange={(e) => setNovaSenha(e.target.value)}
      />

      <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
        Salvar alterações
      </button>
    </div>
  );
}
