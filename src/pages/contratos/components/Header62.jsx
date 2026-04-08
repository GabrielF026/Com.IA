"use client";

import React from "react";
import clsx from "clsx";

// === Botão substituto do botão do Relume UI ===
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">

        {/* Subtítulo */}
        <p className="mb-3 font-semibold md:mb-4">Gestão</p>

        {/* Título principal */}
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Seus contratos aqui
        </h1>

        {/* Descrição */}
        <p className="md:text-md">
          Visualize, organize e controle todos os seus contratos em um único
          lugar com facilidade
        </p>

        {/* Botões */}
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <RelumeButton variant="primary">Adicionar</RelumeButton>
          <RelumeButton variant="secondary">Filtrar</RelumeButton>
        </div>

      </div>
    </section>
  );
}
export default Header62;
