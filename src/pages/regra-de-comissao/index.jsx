import React from "react";
import {Header62} from "./components/Header62.jsx";
import {Layout370} from "./components/Layout370.jsx";
import {Faq7} from "./components/Faq7.jsx";
import {Layout522} from "./components/Layout522.jsx";
import {Footer2} from "./components/Footer2.jsx";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <Header62 />
      <Layout370 />
      <Faq7 />
      <Layout522 />
      <Footer2 />
    </div>
  );
}
