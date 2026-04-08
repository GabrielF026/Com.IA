import React from "react";
import { useNavigate } from "react-router-dom";

export default function ImportarContratos() {
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Arquivo selecionado:", file);
    // aqui futuramente você processa o arquivo
  };

  return (
    <section className="w-full px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container max-w-3xl mx-auto">

        {/* Título e descrição */}
        <p className="mb-3 font-semibold text-gray-700">Contratos</p>
        <h1 className="mb-6 text-6xl font-bold md:text-8xl">
          Importar contratos
        </h1>

        <p className="mb-10 text-lg text-gray-600 max-w-xl">
          Faça upload de um arquivo CSV ou Excel contendo os contratos que
          serão adicionados ao sistema.
        </p>

        {/* Card */}
        <div className="bg-gray-50 border rounded-xl p-8 shadow-sm">
          <label className="block mb-4 text-lg font-medium">
            Selecione o arquivo para importar
          </label>

          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileUpload}
            className="w-full border p-3 rounded-lg bg-white"
          />

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/contratos")}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100"
            >
              Voltar
            </button>

            <button
              className="px-5 py-2 bg-black text-white rounded-lg hover:bg-opacity-80"
            >
              Importar
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}