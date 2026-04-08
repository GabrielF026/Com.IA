"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// ====== Botão substituto do Relume UI ======
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

export function Layout136() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">

        <div className="flex flex-col items-center justify-start">

          {/* ÍCONE */}
          <div className="mb-5 md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              className="size-20"
              alt="Relume logo"
            />
          </div>

          {/* Subtítulo */}
          <p className="mb-3 font-semibold md:mb-4">Guia</p>

          {/* Título */}
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Entenda como criar uma regra eficiente
          </h2>

          {/* Descrição */}
          <p className="md:text-md">
            Uma regra de comissão define como o sistema calcula os valores
            devidos. Escolha o tipo, defina as condições e teste antes de
            salvar.
          </p>

          {/* Botões */}
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">

            {/* Botão secundário */}
            <RelumeButton variant="secondary">
              Ver documentação
            </RelumeButton>

            {/* Botão link com ícone */}
            <RelumeButton variant="link">
              Ícone <RxChevronRight />
            </RelumeButton>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Layout136;
