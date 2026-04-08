"use client";

import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

// =====================
// BOTÃO substituto
// =====================
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

// =====================
// TABS reimplementadas (versão React 19)
// =====================
function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Lista de abas */}
      <div className="flex gap-x-6 overflow-auto no-scrollbar w-full md:w-auto px-[5vw] mb-12 md:mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={clsx(
              "border-b-[1.5px] px-0 py-2 transition",
              active === tab.value
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba */}
      <div className="w-full max-w-5xl">
        {tabs.map(
          (tab) =>
            active === tab.value && (
              <div
                key={tab.value}
                className="animate-fadeIn border border-gray-300"
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

// =====================
// COMPONENTE PRINCIPAL
// =====================
export function Layout504() {
  const [activeTab, setActiveTab] = useState("tab-one");

  const tabBaseContent = (imgSrc) => (
    <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
      <div className="aspect-square">
        <img src={imgSrc} className="w-full object-cover" />
      </div>

      <div className="p-6 md:p-8 lg:p-12">
        <p className="mb-3 font-semibold md:mb-4">Básico</p>
        <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          Nome e descrição da regra
        </h2>
        <p>
          Defina um nome claro e uma descrição que facilite a identificação
          desta regra entre outras. Use termos específicos para evitar
          confusões.
        </p>

        <div className="mt-6 flex items-center gap-x-4 md:mt-8">
          <RelumeButton variant="secondary">Expandir</RelumeButton>
          <RelumeButton variant="link">
            Recolher <RxChevronRight />
          </RelumeButton>
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      value: "tab-one",
      label: "Informações gerais",
      content: tabBaseContent(
        "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
      ),
    },
    {
      value: "tab-two",
      label: "Parâmetros",
      content: tabBaseContent(
        "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
      ),
    },
    {
      value: "tab-three",
      label: "Condições",
      content: tabBaseContent(
        "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
      ),
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Configuração</p>

            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Edite os parâmetros da regra
            </h1>

            <p className="md:text-md">
              Organize as informações em abas para manter a interface clara e
              intuitiva durante a edição.
            </p>

            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <RelumeButton variant="secondary">Expandir tudo</RelumeButton>
              <RelumeButton variant="link">
                Recolher tudo <RxChevronRight />
              </RelumeButton>
            </div>
          </div>
        </div>

        {/* TABS */}
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>
    </section>
  );
}
export default Layout504;
