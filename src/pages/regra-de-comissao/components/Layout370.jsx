"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// =========================
// BOTÃO substituto
// =========================
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-3 py-1 rounded text-sm font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
    link: "text-black underline px-0 py-0 hover:text-gray-600",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// =========================
// COMPONENTE PRINCIPAL
// =========================
export function Layout370() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* TÍTULO */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Vantagens</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              O que você ganha
            </h2>

            <p className="md:text-md">
              Menos erros, mais controle sobre suas comissões
            </p>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">

            {/* CARD 1 */}
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Imagem 1"
                  className="w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6">
                <p className="mb-2 text-sm font-semibold">Precisão</p>

                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Cálculos automáticos e confiáveis
                </h3>

                <p>O sistema elimina erros manuais e garante consistência</p>

                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <RelumeButton variant="link">
                    → <RxChevronRight />
                  </RelumeButton>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Imagem 2"
                  className="w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6">
                <p className="mb-2 text-sm font-semibold">Precisão</p>

                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Cálculos automáticos e confiáveis
                </h3>

                <p>O sistema elimina erros manuais e garante consistência</p>

                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <RelumeButton variant="link">
                    → <RxChevronRight />
                  </RelumeButton>
                </div>
              </div>
            </div>

            {/* CARD 3 — ocupa duas colunas */}
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Imagem 3"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6">
                <p className="mb-2 text-sm font-semibold">Integração</p>

                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Conecta com contratos e usuários automaticamente
                </h3>

                <p>As regras funcionam em harmonia com todo o sistema</p>

                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <RelumeButton variant="link">
                    → <RxChevronRight />
                  </RelumeButton>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default Layout370;
