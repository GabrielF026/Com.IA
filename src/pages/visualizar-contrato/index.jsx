import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContratosPage() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container max-w-4xl mx-auto">

        <p className="mb-3 font-semibold text-gray-700">Gestão</p>

        <h1 className="mb-6 text-6xl font-bold md:text-8xl">
          Seus contratos aqui
        </h1>

        <p className="mb-10 text-lg text-gray-600 max-w-xl">
          Visualize, organize e controle todos os seus contratos em um único lugar.
        </p>

        <div className="grid gap-6">
          <button
            onClick={() => navigate("/importar-contratos")}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-opacity-80 w-fit"
          >
            Importar contratos
          </button>

        </div>

      </div>
    </section>
  );
}
