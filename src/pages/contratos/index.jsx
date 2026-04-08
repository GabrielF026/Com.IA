import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContratosPage() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container max-w-4xl mx-auto">

        <p className="mb-3 font-semibold text-gray-700">Gestão</p>

        <h1 className="mb-6 text-6xl font-bold md:text-8xl">
          Suas vendas aqui
        </h1>

        <p className="mb-10 text-lg text-gray-600 max-w-xl">
          Visualize, organize e controle todas as suas vendas efetivadas em um único lugar.
        </p>

        <div className="grid gap-6">
          <button
            onClick={() => navigate("/importar-contratos")}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 w-fit"
          >
            Importar vendas
          </button>

          <button
            onClick={() => navigate("/visualizar-contrato")}
            className="px-6 py-3 border rounded-lg hover:bg-emerald-50 text-emerald-800 w-fit border-emerald-200"
          >
            Listar vendas
          </button>
        </div>

      </div>
    </section>
  );
}
