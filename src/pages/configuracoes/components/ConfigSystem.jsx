import React, { useState } from "react";

export default function ConfigSystem() {
  const [diaFechamento, setDiaFechamento] = useState(5);
  const [mesInicial, setMesInicial] = useState("Janeiro");
  const [valorMin, setValorMin] = useState(0);

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Sistema</h2>

      <label className="block text-sm font-medium mb-1">
        Dia de fechamento da comissão
      </label>
      <input
        type="number"
        className="border rounded p-2 w-full mb-4"
        value={diaFechamento}
        onChange={(e) => setDiaFechamento(e.target.value)}
      />

      <label className="block text-sm font-medium mb-1">
        Mês inicial do ciclo
      </label>
      <select
        className="border rounded p-2 w-full mb-4"
        value={mesInicial}
        onChange={(e) => setMesInicial(e.target.value)}
      >
        {[
          "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
          "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
        ].map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <label className="block text-sm font-medium mb-1">
        Valor mínimo considerado
      </label>
      <input
        type="number"
        className="border rounded p-2 w-full mb-4"
        value={valorMin}
        onChange={(e) => setValorMin(e.target.value)}
      />

      <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
        Salvar sistema
      </button>
    </div>
  );
}
