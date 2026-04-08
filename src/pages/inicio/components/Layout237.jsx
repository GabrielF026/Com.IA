"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

// ====================
// BOTÃO substituto
// ====================
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
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
    link: "text-black underline hover:text-gray-600 px-0 py-0",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// ====================
// COMPONENTE PRINCIPAL
// ====================
export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">

          {/* HEADER */}
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Módulos</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Cada ferramenta no seu lugar
            </h2>

            <p className="md:text-md">
              A plataforma é dividida em módulos que trabalham juntos. Você
              acessa tudo pelo menu lateral.
            </p>
          </div>

          {/* GRID DE MÓDULOS */}
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">

            {/* ITEM 1 */}
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Ícone"
                  className="size-12"
                />
              </div>

              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
                Dashboard com KPIs
              </h3>

              <p>
                Visão geral de contratos, comissões e importações em tempo real.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Ícone"
                  className="size-12"
                />
              </div>

              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
                Gestão de contratos
              </h3>

              <p>
                Crie, edite e acompanhe cada contrato com histórico completo.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Ícone"
                  className="size-12"
                />
              </div>

              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
                Regras de comissão
              </h3>

              <p>
                Configure cálculos percentuais, fixos ou híbridos com condições extras.
              </p>
            </div>

          </div>

          {/* BOTÕES */}
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">

            <RelumeButton variant="secondary">
              Conhecer mais
            </RelumeButton>

            <RelumeButton variant="link">
              Acessar <RxChevronRight />
            </RelumeButton>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout237;
