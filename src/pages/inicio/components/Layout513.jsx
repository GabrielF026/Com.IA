"use client";

import React, { Fragment, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

// ========================
// Botão substituto
// ========================
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base = "px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white border border-black text-black hover:bg-gray-200",
    link: "text-black underline px-0 py-0 hover:text-gray-600",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

// ========================
// Dados — FIQUE À VONTADE PARA EDITAR
// ========================
const FEATURES = [
  {
    title: "Automação total",
    desc: "Seus dados protegidos com criptografia e backups",
    img: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
    mobileImg: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
  },
  {
    title: "Segurança garantida",
    desc: "Proteção de ponta com redundância total",
    img: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
    mobileImg: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
  },
  {
    title: "Centralização clara",
    desc: "Cresce com sua empresa sem perder performance",
    img: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
    mobileImg: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
  },
  {
    title: "Escalabilidade real",
    desc: "Arquitetura que acompanha seu crescimento",
    img: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
    mobileImg: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
  },
];

// ========================
// Componente principal
// ========================
export function Layout513() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const getStyles = (index) => {
    const start = index / FEATURES.length;
    const end = (index + 1) / FEATURES.length;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const y = useTransform(scrollYProgress, [start, end], [0, -100]);

    return { opacity, y };
  };

  return (
    <section ref={containerRef} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-20">

          {/* ======================== */}
          {/* COLUNA ESQUERDA */}
          {/* ======================== */}
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:h-[calc(100vh_-5rem)] md:justify-center">

            <div>
              <p className="mb-3 font-semibold md:mb-4">Vantagens</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Por que escolher esta plataforma
              </h2>
              <p className="md:text-md">
                Deixe de lado planilhas e cálculos manuais. Aqui tudo funciona com precisão e velocidade.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <RelumeButton variant="secondary">Saiba mais</RelumeButton>

                <RelumeButton variant="link">
                  Descobrir <RxChevronRight />
                </RelumeButton>
              </div>
            </div>

            {/* Textos animados */}
            <div className="relative flex flex-col gap-y-8 md:min-h-[400px]">

              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  style={getStyles(i)}
                  className="md:absolute"
                >
                  <h5 className="font-bold md:text-2xl mb-2">{f.title}</h5>
                  <p className="md:text-md">{f.desc}</p>
                </motion.div>
              ))}

            </div>

          </div>

          {/* ======================== */}
          {/* COLUNA DIREITA */}
          {/* ======================== */}
          <div className="hidden md:flex flex-col gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="h-screen overflow-hidden">
                <img src={f.img} alt={f.title} className="size-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
export default Layout513;
