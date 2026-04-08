import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";

const regrasFake = [
  { id: 1, nome: "Comissão Padrão", tipo: "Percentual", status: "Ativa" },
  { id: 2, nome: "Venda Premium", tipo: "Híbrida", status: "Ativa" },
  { id: 3, nome: "Parceria Externa", tipo: "Fixa", status: "Inativa" },
];

export default function RegrasPage() {
  const user = useUserStore((s) => s.user);
  const isAdmin = user?.role === "admin";
  const isGestor = user?.role === "gestor";
  const isVendedor = user?.role === "vendedor";

  const podeCriar = isAdmin || isGestor; // 🔥 apenas admin
  const podeEditar = isAdmin || isGestor; // 🔥 admin e gestor
  const podeDesativar = isAdmin; // 🔥 apenas admin

  return (
    <div className="w-full px-[5%] py-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">Regras de Comissão</h1>
          <p className="text-gray-600 mt-1">
            Visualize e gerencie regras aplicadas no cálculo de comissões.
          </p>
        </div>

        {/* 🔥 Criar regra — só ADMIN */}
        {podeCriar && (
          <Link
            to="/criar-regra"
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-opacity-80 transition"
          >
            + Criar regra
          </Link>
        )}
      </div>

      {/* TABELA */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Nome</th>
              <th className="text-left p-3 border-b">Tipo</th>
              <th className="text-left p-3 border-b">Status</th>
              <th className="text-left p-3 border-b">Ações</th>
            </tr>
          </thead>

          <tbody>
            {regrasFake.map((regra) => (
              <tr key={regra.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{regra.nome}</td>
                <td className="p-3 border-b">{regra.tipo}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      regra.status === "Ativa"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {regra.status}
                  </span>
                </td>

                <td className="p-3 border-b space-x-4">
                  {/* Editar — admin e gestor */}
                  {podeEditar && (
                    <Link
                      to={`/editar-regra/${regra.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Editar
                    </Link>
                  )}

                  {/* Desativar — somente admin */}
                  {podeDesativar && (
                    <button className="text-red-600 hover:underline">
                      Desativar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {regrasFake.length === 0 && (
          <p className="text-center p-6 text-gray-500">
            Nenhuma regra cadastrada.
          </p>
        )}
      </div>
    </div>
  );
}
