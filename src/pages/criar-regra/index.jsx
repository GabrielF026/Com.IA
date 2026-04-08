import React from "react";
import RuleHeader from "./components/RuleHeader";
import RuleForm from "./components/RuleForm";
import { Footer2 } from "./components/Footer2";

export default function CriarRegraPage() {
  return (
    <div className="w-full">
      <RuleHeader />
      <RuleForm />
      <Footer2 />
    </div>
  );
}
