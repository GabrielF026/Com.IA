"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// === Substituto do Button do Relume UI ===
function RelumeButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center gap-2 text-sm font-medium underline hover:text-gray-600 transition",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Layout400() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Processo</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Quatro passos simples
            </h2>

            <p className="md:text-md">
              Encontre o que procura em segundos com nossa busca inteligente
            </p>
          </div>
        </div>

        {/* Grade de quatro cards */}
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">

          {/* CARD 1 */}
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Buscar</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Localize contratos rapidamente
                </h3>
                <p>Digite o número ou cliente para encontrar na hora</p>
              </div>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Tentar <RxChevronRight />
                </RelumeButton>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Filtro</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Refine por status e período
                </h3>
                <p>Organize por data, valor ou situação do contrato</p>
              </div>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Aplicar <RxChevronRight />
                </RelumeButton>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 3"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Adicionar</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Crie novos contratos com um clique
                </h3>
                <p>Preencha os dados e salve direto no sistema</p>
              </div>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Criar <RxChevronRight />
                </RelumeButton>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 4"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Editar</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Atualize informações quando necessário
                </h3>
                <p>Modifique termos, valores e datas sem complicações</p>
              </div>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Atualizar <RxChevronRight />
                </RelumeButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Layout400;
