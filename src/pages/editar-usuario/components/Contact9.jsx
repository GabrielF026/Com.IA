"use client";

import React from "react";
import clsx from "clsx";

// ====== INPUT substituto ======
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

// ====== TEXTAREA substituto ======
function RelumeTextarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none min-h-[11.25rem] overflow-auto",
        className
      )}
    />
  );
}

// ====== LABEL substituto ======
function RelumeLabel({ className = "", children, ...props }) {
  return (
    <label {...props} className={clsx("text-sm font-medium", className)}>
      {children}
    </label>
  );
}

// ====== CHECKBOX substituto ======
function RelumeCheckbox({ className = "", ...props }) {
  return (
    <input
      type="checkbox"
      {...props}
      className={clsx(
        "h-4 w-4 rounded border-gray-300 text-black focus:ring-black",
        className
      )}
    />
  );
}

// ====== BUTTON substituto ======
function RelumeButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center justify-center";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white text-black border border-black hover:bg-gray-100",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// ====== COMPONENTE PRINCIPAL ======
export function Contact9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

        {/* LADO ESQUERDO - IMAGEM */}
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="size-full object-cover"
          />
        </div>

        {/* FORMULÁRIO */}
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Edição</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Dados do contrato
            </h2>

            <p className="md:text-md">
              Preencha os campos abaixo para atualizar o contrato
            </p>
          </div>

          <form className="grid grid-cols-1 gap-6">

            {/* Número */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="numero" className="mb-2">
                Número
              </RelumeLabel>
              <RelumeInput id="numero" type="text" />
            </div>

            {/* Cliente */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="cliente" className="mb-2">
                Cliente
              </RelumeLabel>
              <RelumeInput id="cliente" type="text" />
            </div>

            {/* Valor / Observações */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="valor" className="mb-2">
                Valor
              </RelumeLabel>
              <RelumeTextarea
                id="valor"
                placeholder="Observações adicionais sobre o contrato"
              />
            </div>

            {/* Checkbox */}
            <div className="mb-3 flex items-center gap-2 text-sm md:mb-4">
              <RelumeCheckbox id="confirmacao" />
              <RelumeLabel htmlFor="confirmacao" className="cursor-pointer">
                Confirmo que os dados estão corretos
              </RelumeLabel>
            </div>

            {/* Botão */}
            <div>
              <RelumeButton variant="primary">
                Salvar
              </RelumeButton>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
export default Contact9;
