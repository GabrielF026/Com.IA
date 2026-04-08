"use client";

import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export function Content3() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

          {/* ===================== */}
          {/* TEXTO DO LADO ESQUERDO */}
          {/* ===================== */}
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Informações gerais
            </h2>

            <div className="prose">
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                Tellus id scelerisque est ultricies ultricies. Duis est sit
                sed leo nisl, blandit elit sagittis. Quisque tristique
                consequat quam sed.
              </p>

              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed
                duis facilisis metus.
              </p>

              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                Ornare id morbi eget ipsum.
              </p>
            </div>
          </div>

          {/* ===================== */}
          {/* THUMB + ABRIR MODAL */}
          {/* ===================== */}
          <div>
            <button
              onClick={() => setOpen(true)}
              className="relative flex w-full items-center justify-center"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Vídeo"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* MODAL */}
      {/* ===================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW"
                  className="absolute inset-0 size-full"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>

              {/* BOTÃO FECHAR */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-white text-xl hover:opacity-70"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export default Content3;
