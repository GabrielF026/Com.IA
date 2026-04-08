"use client";

import React from "react";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

// === Substituto do botão do Relume ===
function RelumeButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center gap-2 text-sm font-medium underline text-white hover:text-gray-300 transition",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Layout520() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* HEADER */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Recursos</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Controle total dos contratos
            </h2>
            <p className="md:text-md">Tudo o que você precisa em um só lugar.</p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">

          {/* CARD 1 */}
          <div className="relative p-6 md:p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="placeholder"
              />
            </div>

            <div className="relative z-10 text-white">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume icon"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Rastreabilidade completa
              </h3>

              <p>Acompanhe cada movimento e mudança nos contratos.</p>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Explorar <RxChevronRight size={18} />
                </RelumeButton>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative p-6 md:p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="placeholder"
              />
            </div>

            <div className="relative z-10 text-white">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume icon"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Automação inteligente
              </h3>

              <p>Deixe o sistema trabalhar enquanto você foca no negócio.</p>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Explorar <RxChevronRight size={18} />
                </RelumeButton>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative p-6 md:p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="placeholder"
              />
            </div>

            <div className="relative z-10 text-white">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume icon"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Organização sem esforço
              </h3>

              <p>Filtros e buscas rápidas mantêm tudo organizado.</p>

              <div className="mt-5 md:mt-6">
                <RelumeButton>
                  Explorar <RxChevronRight size={18} />
                </RelumeButton>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}export default Layout520;

