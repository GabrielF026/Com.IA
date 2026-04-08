import React from "react";
import Footer2 from "./components/Footer2.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">


      {/* CONTEÚDO */}
      <main className="flex-1 px-[5%] py-16 max-w-5xl mx-auto">
        
        {/* HEADER SIMPLIFICADO */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500">Usuários</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Adicionar novo usuário
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Cadastre novos membros para acessar a plataforma e definir permissões.
          </p>
        </div>

        {/* FORMULÁRIO */}
        <form className="grid gap-6 max-w-xl mx-auto">

          {/* NOME */}
          <div className="grid gap-2">
            <label className="font-medium">Nome completo</label>
            <input
              type="text"
              placeholder="Ex: João da Silva"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          {/* EMAIL */}
          <div className="grid gap-2">
            <label className="font-medium">E-mail</label>
            <input
              type="email"
              placeholder="exemplo@empresa.com"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          {/* NIVEL */}
          <div className="grid gap-2">
            <label className="font-medium">Nível</label>
            <select className="border rounded px-3 py-2 w-full">
              <option>Admin</option>
              <option>Gestor</option>
              <option>Operador</option>
            </select>
          </div>

          {/* SENHA */}
          <div className="grid gap-2">
            <label className="font-medium">Senha inicial</label>
            <input
              type="password"
              placeholder="Criar senha temporária"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          {/* BOTÕES */}
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
            >
              Voltar
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded hover:bg-opacity-80"
            >
              Salvar usuário
            </button>
          </div>
        </form>

      </main>

      {/* FOOTER */}
      <Footer2 />
    </div>
  );
}
