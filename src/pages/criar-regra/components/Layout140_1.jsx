"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// === Botão substituto do Relume UI ===
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

export function Layout140_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">

        {/* SUBTÍTULO */}
        <p className="mb-3 font-semibold md:mb-4">Filtros</p>

        {/* TÍTULO */}
        <p className="mb-5 text-lg font-bold leading-[1.4] md:mb-6 md:text-2xl">
          Adicione condições para refinar quando a regra se aplica
        </p>

        {/* BOTÕES */}
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">

          {/* Botão secundário */}
          <RelumeButton variant="secondary">
            Fechar
          </RelumeButton>

          {/* Botão link com ícone */}
          <RelumeButton variant="link">
            ↓ <RxChevronRight />
          </RelumeButton>

        </div>

      </div>
    </section>
  );
}
export default Layout140_1;
