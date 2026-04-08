"use client";

import React from "react";
import clsx from "clsx";

// ==== Input substituto do Relume UI ====
function RelumeInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none",
        className
      )}
    />
  );
}

// ==== Button substituto do Relume UI ====
function RelumeButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center justify-center";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

export function Cta54() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">

            <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              Ações do contrato
            </h2>

            <p className="text-white md:text-md">
              Salve as alterações ou descarte as mudanças realizadas
            </p>
          </div>

          {/* Formulário */}
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">

              <RelumeInput
                id="email"
                type="email"
                placeholder="Confirmar exclusão"
              />

              <RelumeButton
                variant="primary"
                className="items-center justify-center px-6 py-3"
              >
                Salvar
              </RelumeButton>
            </form>

            <p className="text-xs text-white">
              Esta ação não pode ser desfeita. Tem certeza?
            </p>
          </div>
        </div>

        {/* Background */}
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
export default Cta54;
