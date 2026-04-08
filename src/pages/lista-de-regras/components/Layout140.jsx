"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// =========================
// BOTÃO substituto do Relume UI
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
    link: "text-black underline px-0 py-0 hover:text-gray-600",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// =========================
// COMPONENTE PRINCIPAL
// =========================
export function Layout140() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">

        <p className="mb-3 font-semibold md:mb-4">Tabela</p>

        <p className="mb-5 text-lg font-bold leading-[1.4] md:mb-6 md:text-2xl">
          Nenhuma regra encontrada. Crie uma para começar a gerenciar suas
          comissões.
        </p>

        {/* BOTÕES */}
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <RelumeButton variant="secondary">
            Limpar
          </RelumeButton>

          <RelumeButton variant="link">
            Mais <RxChevronRight />
          </RelumeButton>
        </div>

      </div>
    </section>
  );
}
export default Layout140;
