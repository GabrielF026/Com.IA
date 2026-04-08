"use client";

import React, { useState } from "react";
import clsx from "clsx";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

// Substituindo <Input /> do Relume por input nativo estilizado
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

// Substituindo <Button /> do Relume por button nativo estilizado
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

// Hook original reescrito (não dependia do Relume)
const useForm = () => {
  const [email, setEmail] = useState("");

  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };

  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          
          {/* LINKS DE NAVEGAÇÃO */}
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">

            <a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>

            {/* COLUNA 1 */}
            <div className="flex flex-col">
              <h2 className="mb-3 font-semibold md:mb-4">Produto</h2>
              <ul>
                {["Dashboard", "Contratos", "Comissões", "Importar", "Empresa"].map((item) => (
                  <li key={item} className="py-2 text-sm">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA 2 */}
            <div className="flex flex-col">
              <h2 className="mb-3 font-semibold md:mb-4">Suporte</h2>
              <ul>
                {["Documentação", "Status", "Contato", "Recursos", "Guias"].map((item) => (
                  <li key={item} className="py-2 text-sm">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA 3 */}
            <div className="flex flex-col">
              <h2 className="mb-3 font-semibold md:mb-4">API</h2>
              <ul>
                {["Integrações", "Blog", "Sobre", "Carreira", "Parceiros"].map((item) => (
                  <li key={item} className="py-2 text-sm">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FORMULÁRIO */}
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Inscrever</h1>
            <p className="mb-3 text-sm md:mb-4">
              Receba atualizações sobre novos recursos e melhorias do SaaS.
            </p>

            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content]"
                onSubmit={formState.handleSubmit}
              >
                <RelumeInput
                  type="email"
                  placeholder="seu@email.com"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />

                <RelumeButton>Inscrever</RelumeButton>
              </form>

              <p className="text-xs">
                Ao se inscrever, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>

        </div>

        {/* LINHA */}
        <div className="h-px w-full bg-black" />

        {/* COPYRIGHT + REDES */}
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          
          <p className="mt-8 md:mt-0">
            © 2024 SaaS de Consórcio. Todos os direitos reservados.
          </p>

          {/* REDES SOCIAIS */}
          <div className="mb-8 flex items-center gap-3 lg:mb-0">
            <a href="#"><BiLogoFacebookCircle className="size-6" /></a>
            <a href="#"><BiLogoInstagram className="size-6" /></a>
            <a href="#"><FaXTwitter className="size-6" /></a>
            <a href="#"><BiLogoLinkedinSquare className="size-6" /></a>
            <a href="#"><BiLogoYoutube className="size-6" /></a>
          </div>

        </div>

      </div>
    </footer>
  );
}
export default Footer2;

