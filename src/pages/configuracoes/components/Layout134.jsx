"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// Substituto do <Button /> do Relume
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition-all duration-200 flex items-center gap-2";

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

export function Layout134() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        
        <p className="mb-3 font-semibold md:mb-4">Empresa</p>

        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Dados cadastrais da sua empresa
        </h2>

        <p className="md:text-md">
          Mantenha suas informações atualizadas para garantir a precisão nos
          relatórios e comunicações
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          
          {/* Botão "Editar" (secondary) */}
          <RelumeButton variant="secondary">
            Editar
          </RelumeButton>

          {/* Botão com ícone (link) */}
          <RelumeButton variant="link">
            ✎ <RxChevronRight />
          </RelumeButton>
        </div>
      </div>
    </section>
  );
}
export default Layout134;
