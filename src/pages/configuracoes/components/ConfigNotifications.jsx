import React, { useState } from "react";

export default function ConfigNotifications() {
  const [emailImportacao, setEmailImportacao] = useState(true);
  const [emailComissoes, setEmailComissoes] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Notificações</h2>

      <div className="flex items-center justify-between mb-4">
        <span>Enviar e-mail quando contratos forem importados</span>
        <input
          type="checkbox"
          checked={emailImportacao}
          onChange={(e) => setEmailImportacao(e.target.checked)}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <span>Enviar e-mail quando comissões forem calculadas</span>
        <input
          type="checkbox"
          checked={emailComissoes}
          onChange={(e) => setEmailComissoes(e.target.checked)}
        />
      </div>

      <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
        Salvar notificações
      </button>
    </div>
  );
}
