"use client";

import React from "react";
import clsx from "clsx";

// Substituindo o Button do Relume UI
function RelumeButton({ children, variant = "primary", className = "", ...props }) {
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

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        
        {/* HEADER */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Dúvidas
          </h2>
          <p className="md:text-md">
            Encontre respostas para as perguntas mais comuns sobre configurações
          </p>
        </div>

        {/* LISTA DE PERGUNTAS */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Como alterar meu timezone?
            </h2>
            <p>
              Acesse a seção de preferências gerais e selecione seu fuso horário. 
              O sistema ajustará automaticamente todos os registros.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Posso mudar a moeda do sistema?
            </h2>
            <p>
              Sim. Na aba de preferências, escolha a moeda desejada. 
              Os valores mudam imediatamente após salvar.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Qual é a política de segurança?
            </h2>
            <p>
              Seus dados são protegidos com criptografia avançada. 
              Realizamos backups regulares e seguimos padrões internacionais.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Como gerenciar notificações?
            </h2>
            <p>
              Na seção de preferências, você pode ativar ou desativar notificações 
              por tipo de evento e frequência de envio.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Posso resetar minha senha?
            </h2>
            <p>
              Sim. Acesse seu perfil na parte de usuários e clique em “resetar senha”. 
              Você receberá um e-mail com instruções.
            </p>
          </div>
        </div>

        {/* RODAPÉ DO FAQ */}
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 lg:text-4xl">
            Precisa de ajuda?
          </h4>
          <p className="md:text-md">Entre em contato com nosso suporte</p>

          <div className="mt-6 md:mt-8">
            <RelumeButton variant="secondary">
              Contato
            </RelumeButton>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Faq7;
