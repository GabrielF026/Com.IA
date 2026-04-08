"use client";

import React from "react";

// Substituindo o <Button /> do Relume por um botão nativo estilizado
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Usuários</p>

        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Adicionar novo usuário
        </h1>

        <p className="md:text-md">
          Cadastre novos membros para acessar a plataforma e definir permissões.
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <RelumeButton variant="primary">Voltar</RelumeButton>
          <RelumeButton variant="secondary">Ajuda</RelumeButton>
        </div>
      </div>
    </section>
  );
}
export default Header62;
