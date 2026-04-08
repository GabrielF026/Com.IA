"use client";

import React from "react";
import clsx from "clsx";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

// -------------------------------------------------------
// Substituto do botão do Relume UI
// -------------------------------------------------------
function RelumeButton({
  children,
  className = "",
  variant = "link",
  ...props
}) {
  const base = "flex items-center gap-2 text-sm font-medium transition";
  const variants = {
    link: "text-black underline hover:text-gray-600 px-0 py-0",
    primary:
      "px-4 py-2 rounded bg-black text-white hover:bg-opacity-80 transition",
    secondary:
      "px-4 py-2 rounded bg-white border border-black text-black hover:bg-gray-100 transition",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// -------------------------------------------------------
// Componente principal
// -------------------------------------------------------
export function Contact14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* HEADER */}
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Suporte</p>

          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Fale conosco
          </h2>

          <p className="md:text-md">
            Dúvidas sobre seus contratos? Estamos aqui.
          </p>
        </div>

        {/* GRID DE CONTATOS */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">

          {/* LADO ESQUERDO */}
          <div className="grid grid-cols-1 gap-y-10">

            {/* ITEM EMAIL */}
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Envie sua pergunta direto</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>

            {/* ITEM TELEFONE */}
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Telefone
              </h3>
              <p className="mb-2">Ligue para nossa equipe</p>
              <a className="underline" href="#">
                +55 (11) 3000-0000
              </a>
            </div>

            {/* ITEM ENDEREÇO */}
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Escritório
              </h3>
              <p className="mb-2">
                Av. Paulista, 1000, São Paulo SP 01311-100
              </p>

              <div className="mt-5 md:mt-6">
                <RelumeButton variant="link">
                  Ver localização <RxChevronRight />
                </RelumeButton>
              </div>
            </div>

          </div>

          {/* IMAGEM MAPA */}
          <a
            href="#"
            className="justify-self-end md:w-[321.6px] lg:w-auto"
          >
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Mapa"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
export default Contact14;
