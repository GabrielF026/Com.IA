"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

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
    link: "text-white underline px-0 py-0 hover:opacity-80",
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
export function Layout521() {
  const items = [
    {
      title: "Calcular comissões",
      desc: "Regras automáticas e precisas para cada contrato",
    },
    {
      title: "Gerenciar contratos",
      desc: "Visualize, edite e acompanhe todos os seus contratos",
    },
    {
      title: "Importar dados",
      desc: "Carregue contratos em lote com CSV ou XLSX",
    },
    {
      title: "Controlar usuários",
      desc: "Defina permissões e gerencie acessos à plataforma",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* TÍTULO */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Recursos</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              O que você consegue fazer
            </h2>
            <p className="md:text-md">Tudo que precisa em um só lugar</p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="relative p-6">
              {/* Fundo escurecido */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt={item.title}
                />
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">

                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    alt="Ícone"
                    className="size-12"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-white">{item.desc}</p>

                {/* Botão */}
                <div className="mt-5 md:mt-6">
                  <RelumeButton variant="link">
                    Explorar <RxChevronRight />
                  </RelumeButton>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Layout521;
