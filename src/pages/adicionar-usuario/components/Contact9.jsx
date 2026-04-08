"use client";

import React, { useState } from "react";
import clsx from "clsx";

// --- Componentes substitutos do Relume ---

function RelumeInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none",
        className
      )}
    />
  );
}

function RelumeTextarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none min-h-[11.25rem] overflow-auto",
        className
      )}
    />
  );
}

function RelumeLabel({ className = "", children, ...props }) {
  return (
    <label {...props} className={clsx("text-sm font-medium", className)}>
      {children}
    </label>
  );
}

function RelumeCheckbox({ className = "", ...props }) {
  return (
    <input
      type="checkbox"
      {...props}
      className={clsx("h-4 w-4 rounded border-gray-300 text-black", className)}
    />
  );
}

function RelumeButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded bg-black text-white text-sm font-medium hover:bg-opacity-80 transition",
        className
      )}
    >
      {children}
    </button>
  );
}

// --- Componente principal ---
export function Contact9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

        {/* IMAGEM LATERAL */}
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="size-full object-cover"
          />
        </div>

        {/* FORMULÁRIO */}
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Usuários</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Adicionar novo usuário
            </h2>
            <p className="md:text-md">
              Cadastre novos membros para acessar a plataforma e definir
              permissões.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-6">

            {/* Nome */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="name" className="mb-2">
                Nome
              </RelumeLabel>
              <RelumeInput type="text" id="name" placeholder="Nome completo" />
            </div>

            {/* Email */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="email" className="mb-2">
                E-mail
              </RelumeLabel>
              <RelumeInput type="email" id="email" placeholder="email@empresa.com" />
            </div>

            {/* Nível */}
            <div className="grid w-full items-center">
              <RelumeLabel htmlFor="nivel" className="mb-2">
                Nível
              </RelumeLabel>
              <RelumeTextarea
                id="nivel"
                placeholder="Admin, Gestor ou Operador"
              />
            </div>

            {/* Checkbox */}
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <RelumeCheckbox id="terms" />
              <RelumeLabel htmlFor="terms" className="cursor-pointer">
                Status ativo
              </RelumeLabel>
            </div>

            {/* Botão */}
            <div>
              <RelumeButton>Salvar usuário</RelumeButton>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact9;
