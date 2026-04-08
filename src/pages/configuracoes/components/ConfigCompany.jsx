import React, { useState } from "react";

export default function ConfigCompany() {
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("#000000");

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Empresa</h2>

      <label className="block text-sm font-medium mb-1">Nome da empresa</label>
      <input
        className="border rounded p-2 w-full mb-4"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />

      <label className="block text-sm font-medium mb-1">CNPJ</label>
      <input
        className="border rounded p-2 w-full mb-4"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />


      <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
        Salvar empresa
      </button>
    </div>
  );
}
