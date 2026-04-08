"use client";

import React from "react";
import clsx from "clsx";

// ===== BOTÃO substituto do Relume UI =====
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center justify-center";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      {...props}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}

// ===== COMPONENTE PRINCIPAL =====
export function Header98() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">

        {/* Conteúdo */}
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
              Bem-vindo de volta
            </h1>

            <p className="text-white md:text-md">
              Visualize seus contratos, comissões e métricas em tempo real. Tudo
              que você precisa está aqui.
            </p>
          </div>

          {/* Botões */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">

            {/* Botão 1 */}
            <RelumeButton variant="primary">
              Notificações
            </RelumeButton>

            {/* Botão 2 */}
            <RelumeButton variant="secondary">
              Valores
            </RelumeButton>

          </div>
        </div>

        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
export default Header98;
