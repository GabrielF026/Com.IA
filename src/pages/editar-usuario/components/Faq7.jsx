"use client";

import React from "react";
import clsx from "clsx";

// ==== Botão substituto do Relume UI ====
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition flex items-center justify-center";

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

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">

        {/* HEADER */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Dúvidas
          </h2>

          <p className="md:text-md">
            Respostas rápidas sobre edição de contratos
          </p>
        </div>

        {/* LISTA DE FAQ */}
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-12">

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Posso editar um contrato cancelado?
            </h2>
            <p>
              Contratos cancelados ficam bloqueados para edição. Se precisar
              alterar dados, entre em contato com o suporte para reativar
              temporariamente.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Quais campos não podem ser alterados?
            </h2>
            <p>
              O número do contrato e a data de criação são imutáveis. Outros
              campos podem ser editados conforme necessário.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              O que acontece ao excluir um contrato?
            </h2>
            <p>
              A exclusão é permanente e afeta cálculos de comissão. O sistema
              pede confirmação antes de prosseguir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Posso desfazer alterações após salvar?
            </h2>
            <p>
              Não há desfazer automático. Mantenha um registro das alterações
              importantes ou entre em contato com o suporte.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Como alterar o status do contrato?
            </h2>
            <p>
              Use o dropdown de status na seção de edição. Mudanças de status
              podem afetar regras de comissão ativas.
            </p>
          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
            Precisa de mais ajuda?
          </h4>

          <p className="md:text-md">
            Entre em contato com nosso time de suporte
          </p>

          <div className="mt-6 md:mt-8">
            <RelumeButton variant="secondary">
              Suporte
            </RelumeButton>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Faq7;
