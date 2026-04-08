import React, { useState } from "react";

export default function RuleForm() {
  const [tipo, setTipo] = useState("percentual");

  return (
    <section className="px-[5%] py-10">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-8 border border-gray-200">

        {/* Título */}
        <h2 className="text-xl font-semibold mb-6">Dados da regra</h2>

        <form className="grid gap-6">

          {/* Nome da regra */}
          <div className="grid gap-1">
            <label className="text-sm font-medium">Nome da regra</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Ex: Comissão padrão 2025"
            />
          </div>

          {/* Descrição */}
          <div className="grid gap-1">
            <label className="text-sm font-medium">Descrição</label>
            <textarea
              className="border border-gray-300 rounded p-2 w-full min-h-[100px]"
              placeholder="Descreva como esta regra funciona"
            />
          </div>

          {/* Tipo de comissão */}
          <div className="grid gap-1">
            <label className="text-sm font-medium">Tipo de cálculo</label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="percentual">Percentual (%)</option>
              <option value="fixa">Valor fixo (R$)</option>
              <option value="hibrida">Híbrida (fixo + %)</option>
            </select>
          </div>

          {/* Campos dinâmicos conforme tipo */}
          {tipo === "percentual" && (
            <div className="grid gap-1">
              <label className="text-sm font-medium">Percentual (%)</label>
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Ex: 3.5"
              />
            </div>
          )}

          {tipo === "fixa" && (
            <div className="grid gap-1">
              <label className="text-sm font-medium">Valor fixo (R$)</label>
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Ex: 150"
              />
            </div>
          )}

          {tipo === "hibrida" && (
            <>
              <div className="grid gap-1">
                <label className="text-sm font-medium">Percentual (%)</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Ex: 2"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium">Valor fixo (R$)</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Ex: 50"
                />
              </div>
            </>
          )}

          {/* Condições adicionais */}
          <div className="grid gap-1">
            <label className="text-sm font-medium">Condições extras</label>
            <textarea
              className="border border-gray-300 rounded p-2 w-full min-h-[80px]"
              placeholder="Ex: Aplicar somente para vendas acima de R$ 10.000"
            />
          </div>

          {/* Status da regra */}
          <div className="grid gap-1">
            <label className="text-sm font-medium">Status</label>

            <select className="border border-gray-300 rounded p-2 w-full">
              <option value="ativa">Ativa</option>
              <option value="inativa">Inativa</option>
            </select>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-opacity-80 transition"
          >
            Criar regra
          </button>

        </form>
      </div>
    </section>
  );
}
