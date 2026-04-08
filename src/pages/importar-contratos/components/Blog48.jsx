"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// ==========================
// BOTÃO substituto do Relume UI
// ==========================
function RelumeButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary:
      "bg-white text-black border border-black hover:bg-gray-100",
    link: "text-black underline hover:text-gray-600 px-0 py-0",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// ==========================
// COMPONENTE PRINCIPAL
// ==========================
export function Blog48() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* HEADER */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">

            <p className="mb-3 font-semibold md:mb-4">Histórico</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Importações recentes
            </h2>

            <p className="md:text-md">
              Veja todos os arquivos que você enviou e seu status atual
            </p>
          </div>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">

          {/* CARD 1 */}
          <div className="flex flex-col items-center w-full border border-gray-300">
            <div className="relative w-full overflow-hidden pt-[66%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Importação"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex items-center">
                <p className="mr-4 bg-gray-100 px-2 py-1 text-sm font-semibold">
                  Sucesso
                </p>
                <p className="text-sm font-semibold">15 de janeiro</p>
              </div>

              <a href="#" className="mb-2 block">
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  Contratos janeiro 2024
                </h2>
              </a>

              <p>1.250 contratos importados sem erros</p>

              <RelumeButton variant="link" className="mt-6">
                Ver log <RxChevronRight />
              </RelumeButton>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center w-full border border-gray-300">
            <div className="relative w-full overflow-hidden pt-[66%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Importação"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex items-center">
                <p className="mr-4 bg-gray-100 px-2 py-1 text-sm font-semibold">
                  Processando
                </p>
                <p className="text-sm font-semibold">14 de janeiro</p>
              </div>

              <a href="#" className="mb-2 block">
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  Contratos dezembro 2023
                </h2>
              </a>

              <p>890 contratos sendo processados no sistema</p>

              <RelumeButton variant="link" className="mt-6">
                Detalhes <RxChevronRight />
              </RelumeButton>
            </div>
          </div>
        </div>

        {/* BOTÃO FINAL */}
        <div className="flex items-center justify-center">
          <RelumeButton
            variant="secondary"
            className="mt-12 md:mt-20 px-6 py-3"
          >
            Ver tudo
          </RelumeButton>
        </div>
      </div>
    </section>
  );
}
export default Blog48;
