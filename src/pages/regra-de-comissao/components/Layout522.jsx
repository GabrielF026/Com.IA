"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// ====================================
// Botão substituto do Relume UI
// ====================================
function RelumeButton({
  children,
  variant = "primary",
  className = "",
  iconLeft = null,
  iconRight = null,
  ...props
}) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
    link: "text-white underline px-0 py-0 hover:opacity-80",
    outlineWhite:
      "border border-white text-white bg-transparent hover:bg-white hover:text-black",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

// ====================================
// COMPONENTE PRINCIPAL
// ====================================
export function Layout522() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* HEADER */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Tipos</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Escolha a estrutura certa
            </h2>

            <p className="md:text-md">
              Cada regra se adapta ao seu modelo de negócio
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">

          {/* CARD 1 — Maior bloco */}
          <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Percentual"
              />
            </div>

            <div className="relative z-10">

              <p className="mb-2 inline-block text-sm font-semibold text-white">
                Percentual
              </p>

              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-white md:mb-6 md:text-5xl lg:text-6xl">
                Comissão proporcional ao valor
              </h3>

              <p className="text-white">
                Ideal para contratos com valores variáveis. Calcula automaticamente conforme o montante.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <RelumeButton variant="outlineWhite">Saiba mais</RelumeButton>

                <RelumeButton variant="link" iconRight={<RxChevronRight />}>
                  →
                </RelumeButton>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Fixa"
              />
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between">

              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Ícone"
                />
              </div>

              <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                Fixa
              </h3>

              <p className="text-white">
                Valor constante por contrato ou parcela
              </p>

              <div className="mt-5 flex items-center md:mt-6">
                <RelumeButton variant="link" iconRight={<RxChevronRight />}>
                  →
                </RelumeButton>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Híbrida"
              />
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between">

              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Ícone"
                />
              </div>

              <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                Híbrida
              </h3>

              <p className="text-white">
                Combinação de percentual e valor fixo
              </p>

              <div className="mt-5 flex items-center md:mt-6">
                <RelumeButton variant="link" iconRight={<RxChevronRight />}>
                  →
                </RelumeButton>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Layout522;
