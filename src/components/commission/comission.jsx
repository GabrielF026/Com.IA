// === Comissão - Componentes Estruturados ===
// Estrutura inicial dos componentes principais do módulo de regras de comissão

import React, { useState } from "react";

// Componente Principal
export default function RuleForm() {
  return (
    <div className="space-y-6 p-6 bg-white rounded-xl shadow">
      <RuleGeneralSection />
      <RuleParametersSection />
      <RuleConditionsField />
      <RuleSimulation />
      <RuleActions />
    </div>
  );
}

// Seção A — Informações Gerais
export function RuleGeneralSection() {
  return (
    <section className="p-4 border rounded-lg space-y-3">
      <h2 className="text-lg font-semibold">Informações Gerais</h2>
      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="Nome da Regra" />
        <select className="input">
          <option>Percentual</option>
          <option>Valor Fixo</option>
          <option>Híbrida</option>
        </select>
      </div>
      <textarea className="input w-full" placeholder="Descrição da regra" />
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Ativa
      </label>
    </section>
  );
}

// Seção B — Parâmetros da Comissão
export function RuleParametersSection() {
  return (
    <section className="p-4 border rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">Parâmetros da Comissão</h2>

      <select className="input w-full">
        <option>Percentual sobre valor total</option>
        <option>Percentual sobre parcela</option>
        <option>Valor fixo por contrato</option>
        <option>Valor fixo por parcela</option>
        <option>Faixas de valor</option>
      </select>

      <RuleRangesField />

      <div className="grid grid-cols-2 gap-4">
        <select className="input">
          <option>Aplicar na primeira parcela</option>
          <option>Todas as parcelas</option>
          <option>Parcelas selecionadas</option>
          <option>Somente contratos ativos</option>
          <option>Após aprovação</option>
        </select>
      </div>
    </section>
  );
}

// Campo de Faixas
export function RuleRangesField() {
  const [ranges, setRanges] = useState([]);

  function addRange() {
    setRanges([...ranges, { min: "", max: "", value: "" }]);
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Faixas de valor</h3>
        <button onClick={addRange} className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
          + Adicionar faixa
        </button>
      </div>

      {ranges.map((r, i) => (
        <div key={i} className="grid grid-cols-3 gap-3">
          <input className="input" placeholder="Valor mínimo" />
          <input className="input" placeholder="Valor máximo" />
          <input className="input" placeholder="% ou R$" />
        </div>
      ))}
    </div>
  );
}

// Condições
export function RuleConditionsField() {
  const [conditions, setConditions] = useState([]);

  function addCondition() {
    setConditions([...conditions, { field: "", op: "", value: "" }]);
  }

  return (
    <section className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Condições adicionais</h2>
        <button onClick={addCondition} className="px-3 py-1 bg-blue-600 text-white rounded rounded-lg text-sm">
          + Adicionar condição
        </button>
      </div>

      {conditions.map((c, i) => (
        <div key={i} className="grid grid-cols-3 gap-3">
          <select className="input">
            <option>Tipo de contrato</option>
            <option>Valor mínimo</option>
            <option>Status</option>
            <option>Origem</option>
            <option>Produto</option>
            <option>Grupo</option>
            <option>Forma de pagamento</option>
          </select>

          <select className="input">
            <option>=</option>
            <option>&gt;</option>
            <option>&lt;</option>
            <option>Entre</option>
          </select>

          <input className="input" placeholder="Valor" />
        </div>
      ))}
    </section>
  );
}

// Simulação
export function RuleSimulation() {
  return (
    <section className="p-4 border rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">Simulação</h2>
      <div className="p-4 bg-gray-50 rounded border text-sm">
        <p>Valor do contrato: —</p>
        <p>Regra aplicada: —</p>
        <p>Resultado final: —</p>
      </div>
    </section>
  );
}

// Ações
export function RuleActions() {
  return (
    <div className="flex justify-end gap-3 mt-4">
      <button className="px-4 py-2 rounded bg-gray-200">Cancelar</button>
      <button className="px-4 py-2 rounded bg-blue-600 text-white">Salvar</button>
    </div>
  );
}
