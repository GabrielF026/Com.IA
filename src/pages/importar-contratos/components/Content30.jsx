"use client";

import React, { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";

// =====================
// BREADCRUMB RECRIADO
// =====================
function Breadcrumb({ children, className = "" }) {
  return (
    <nav aria-label="breadcrumb" className={className}>
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

// =====================
// COMPONENTE PRINCIPAL
// =====================
export function Content30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        <div className="mx-auto max-w-lg">

          {/* ======================== */}
          {/* CABEÇALHO COM BREADCRUMB */}
          {/* ======================== */}
          <div className="mb-14 flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between md:mb-16 md:gap-y-0">

            <Breadcrumb className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Importações</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Detalhes</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            {/* ÍCONES */}
            <div className="flex items-start gap-2">
              {[BiLinkAlt, BiLogoLinkedinSquare, FaXTwitter, BiLogoFacebookCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
                >
                  <Icon className="size-6" />
                </a>
              ))}
            </div>
          </div>

          {/* ======================== */}
          {/* TEXTO FORMATADO (PROSE) */}
          {/* ======================== */}
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-16 lg:mb-20">
            <Fragment>
              <h3>Introduction</h3>

              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis...
              </p>

              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit...
              </p>

              <figure>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Placeholder"
                />
                <figcaption>Image caption goes here</figcaption>
              </figure>

              <h6>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum...
              </h6>

              <p>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                imperdiet commodo consectetur...
              </p>

              <blockquote>
                "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id..."
              </blockquote>

              <p>
                Tristique odio senectus nam posuere ornare leo metus, ultricies...
              </p>

              <h4>Conclusion</h4>

              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus...
              </p>

              <p>
                Nunc sed faucibus bibendum feugiat sed interdum...
              </p>

              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce...
              </p>
            </Fragment>
          </div>

          {/* ======================== */}
          {/* COMPARTILHAR */}
          {/* ======================== */}
          <div>
            <div className="mb-8 text-center md:mb-10 lg:mb-12">

              <p className="font-semibold md:text-md">
                Compartilhar importação
              </p>

              <div className="mb-8 mt-3 flex items-start justify-center gap-2 sm:mb-0 md:mt-4">
                {[BiLinkAlt, BiLogoLinkedinSquare, FaXTwitter, BiLogoFacebookCircle].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="size-8 rounded-[1.25rem] bg-gray-100 p-1 hover:bg-gray-200"
                  >
                    <Icon className="size-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <ul className="flex flex-wrap justify-center gap-2">
                {["Processamento", "Validação", "Integração", "Relatório"].map(
                  (item) => (
                    <li key={item} className="flex">
                      <a className="bg-gray-100 px-2 py-1 text-sm font-semibold">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* SEPARADOR */}
          <div className="my-8 h-px bg-gray-300 md:my-10 lg:my-12" />

          {/* AVATAR FINAL */}
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
              alt="Logo"
              className="size-14 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold md:text-md">Equipe de operações</p>
              <p>Responsável pelo processamento</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Content30;
