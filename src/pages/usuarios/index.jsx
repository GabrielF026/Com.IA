import React from "react";
import { Link } from "react-router-dom";

// Simulação de usuários cadastrados
const usuariosFake = [
  { id: 1, nome: "Carlos Mendes", email: "carlos@empresa.com", cargo: "Administrador", status: "Ativo" },
  { id: 2, nome: "Ana Silva", email: "ana@empresa.com", cargo: "Gestor", status: "Ativo" },
  { id: 3, nome: "Roberto Costa", email: "roberto@empresa.com", cargo: "Analista", status: "Inativo" },
];

// Você pode substituir isso depois pela role do usuário logado
const isAdmin = true;

export default function UsuariosPage() {
  return (
    <div className="w-full px-[5%] py-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">Usuários</h1>
          <p className="text-gray-600 mt-1">
            Gerencie os membros que têm acesso à plataforma.
          </p>
        </div>

        {isAdmin && (
          <Link
            to="/adicionar-usuario"
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-opacity-80 transition"
          >
            + Adicionar usuário
          </Link>
        )}
      </div>

      {/* TABELA */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Nome</th>
              <th className="text-left p-3 border-b">E-mail</th>
              <th className="text-left p-3 border-b">Cargo</th>
              <th className="text-left p-3 border-b">Status</th>
              <th className="text-left p-3 border-b">Ações</th>
            </tr>
          </thead>

          <tbody>
            {usuariosFake.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{user.nome}</td>
                <td className="p-3 border-b">{user.email}</td>
                <td className="p-3 border-b">{user.cargo}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      user.status === "Ativo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3 border-b space-x-3">
                  <button className="text-blue-600 hover:underline">
                    Editar
                  </button>

                  {isAdmin && (
                    <button className="text-red-600 hover:underline">
                      Desativar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {usuariosFake.length === 0 && (
          <p className="text-center p-6 text-gray-500">
            Nenhum usuário cadastrado.
          </p>
        )}
      </div>
    </div>
  );
}
