"use client";

import React from "react";
import clsx from "clsx";

// --- BUTTON substituto ---
function RelumeButton({ children, className = "", variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded text-sm font-medium transition";
  const variants = {
    primary: "bg-black text-white hover:bg-opacity-80",
    secondary: "bg-white text-black border border-black hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}

export function Header62() {
  return (
    <section
      id="relume"
      className="flex items-center justify-center min-h-screen px-[5%] bg-white"
    >
      <div className="container max-w-lg text-center">

        <p className="mb-3 font-semibold md:mb-4 text-gray-600">Consórcio</p>

        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Acesse sua conta
        </h1>

        <p className="md:text-md text-gray-700 mb-6">
          Gerencie contratos e comissões com segurança e eficiência
        </p>

        <div className="flex items-center justify-center gap-x-4">
          <RelumeButton variant="primary">Entrar</RelumeButton>
          <RelumeButton variant="secondary">Esqueci minha senha</RelumeButton>
        </div>

      </div>
    </section>
  );
}

export default Header62;
