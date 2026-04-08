"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// =========================
// Botão substituto do Relume UI
// =========================
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

// =========================
// Componente principal
// =========================
export function Layout138() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">

        {/* Subtítulo */}
        <p className="mb-3 font-semibold md:mb-4">Cálculo</p>

        {/* Título */}
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Escolha como a comissão será calculada
        </h2>

        {/* Descrição */}
        <p className="mb-5 md:mb-6 md:text-md">
          Selecione o tipo de cálculo que melhor se adequa ao seu modelo de
          negócio. Cada opção oferece flexibilidade para diferentes estruturas
          de comissão.
        </p>

        {/* Logos (exemplo do Relume) */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Logo"
              className="max-h-14"
            />
          ))}
        </div>

        {/* Botões */}
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <RelumeButton variant="secondary">
            Fechar
          </RelumeButton>

          <RelumeButton variant="link">
            ↓ <RxChevronRight />
          </RelumeButton>
        </div>

      </div>
    </section>
  );
}
export default Layout138;
