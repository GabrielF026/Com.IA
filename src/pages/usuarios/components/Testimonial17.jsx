"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            O que dizem
          </h2>
          <p className="md:text-md">
            Feedback dos administradores sobre o módulo
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                {[1,2,3,4,5].map((i) => (
                  <BiSolidStar key={i} className="mr-1 size-6" />
                ))}
              </div>

              <blockquote className="md:text-md">
                "A gestão de usuários ficou simples e segura. Controlar permissões é rápido."
              </blockquote>
            </div>

            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Carlos Mendes</p>
                <p>Diretor de TI, Consórcio Brasil</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                {[1,2,3,4,5].map((i) => (
                  <BiSolidStar key={i} className="mr-1 size-6" />
                ))}
              </div>

              <blockquote className="md:text-md">
                "Interface clara. Minha equipe aprendeu a usar em minutos sem treinamento."
              </blockquote>
            </div>

            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Ana Silva</p>
                <p>Gerente de Operações, Grupo Financeiro</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                {[1,2,3,4,5].map((i) => (
                  <BiSolidStar key={i} className="mr-1 size-6" />
                ))}
              </div>

              <blockquote className="md:text-md">
                "Redefinir senhas e gerenciar acessos nunca foi tão direto e eficiente."
              </blockquote>
            </div>

            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Roberto Costa</p>
                <p>Administrador de Sistema, Consórcio Plus</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonial17;
