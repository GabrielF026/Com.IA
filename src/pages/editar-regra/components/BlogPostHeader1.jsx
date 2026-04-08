"use client";

import React from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

// ==== Breadcrumb substituto (sem Relume UI) ====
function Breadcrumb({ children, className = "" }) {
  return (
    <nav className={className} aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {children}
      </ol>
    </nav>
  );
}

function BreadcrumbItem({ children }) {
  return <li className="flex items-center">{children}</li>;
}

function BreadcrumbLink({ href, children }) {
  return (
    <a href={href} className="hover:underline">
      {children}
    </a>
  );
}

function BreadcrumbSeparator() {
  return <span className="mx-1 text-gray-400">/</span>;
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================
export function BlogPostHeader1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* HEADER */}
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col md:mb-16 lg:mb-20">

          {/* Breadcrumb refeito */}
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Regra de Comissão</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Lista de Regras</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Título */}
          <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            Editar regra de comissão
          </h1>

          {/* Info + ações */}
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">

            {/* Avatar + informações */}
            <div className="mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Avatar"
                  className="size-14 rounded-full object-cover"
                />
              </div>

              <div>
                <h6 className="font-semibold">Última edição</h6>
                <div className="mt-1 flex text-sm text-gray-600">
                  <p>há 2 horas</p>
                  <span className="mx-2">•</span>
                  <p>por João Silva</p>
                </div>
              </div>
            </div>

            {/* Ícones de ação */}
            <div className="mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2 sm:mt-0">
              <a
                href="#"
                className="rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
              >
                <BiLinkAlt className="size-6" />
              </a>

              <a
                href="#"
                className="rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>

              <a
                href="#"
                className="rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>

              <a
                href="#"
                className="rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>

          </div>
        </div>

        {/* Imagem principal */}
        <div className="mx-auto w-full overflow-hidden">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="aspect-[2] size-full object-cover"
            alt="Relume placeholder"
          />
        </div>

      </div>
    </section>
  );
}
export default BlogPostHeader1;
