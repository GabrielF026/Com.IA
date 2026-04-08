"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

/**
 * Layout364.jsx
 * Versão convertida: sem dependências do Relume UI
 * Usa botões HTML simples estilizados com classes Tailwind
 */

export function Layout364() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Status</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Visão geral dos usuários cadastrados
            </h2>
            <p className="md:text-md">
              Acompanhe o total de usuários e seus status no sistema
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary p-6 md:p-8 lg:p-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Usuários ativos no sistema
              </h3>
              <p>
                Membros da equipe com acesso ativo e permissões configuradas
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Ver detalhes
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
              >
                Expandir <RxChevronRight />
              </button>
            </div>
          </div>

          <div className="border border-border-primary p-6 md:p-8 lg:p-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Usuários desativados ou pendentes
              </h3>
              <p>
                Membros que foram removidos ou aguardam confirmação de acesso
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Ver detalhes
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
              >
                Expandir <RxChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout364;
