"use client";

import React from "react";

export function Stats58() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Header */}
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Métricas</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Seus números hoje
          </h1>
          <p className="md:text-md">Acompanhe o desempenho em tempo real</p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-y-6 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">

          {/* Cards */}
          <div className="flex flex-col justify-center gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">

            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                1.247
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Contratos ativos
              </h3>
            </div>

            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                R$ 89.500
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Comissões pendentes
              </h3>
            </div>

            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                R$ 234.680
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Comissões pagas
              </h3>
            </div>

          </div>

          {/* Imagem */}
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
export default Stats58;
