import React, { useState } from "react";

export default function ConfigPermissions() {
  const [gestorCriaRegras, setGestorCriaRegras] = useState(true);
  const [gestorEditaUsuarios, setGestorEditaUsuarios] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Permissões</h2>

      <div className="flex items-center justify-between mb-4">
        <span>Gestor pode criar regras</span>
        <input
          type="checkbox"
          checked={gestorCriaRegras}
          onChange={(e) => setGestorCriaRegras(e.target.checked)}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <span>Gestor pode editar usuários</span>
        <input
          type="checkbox"
          checked={gestorEditaUsuarios}
          onChange={(e) => setGestorEditaUsuarios(e.target.checked)}
        />
      </div>

      <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
        Salvar permissões
      </button>
    </div>
  );
}
