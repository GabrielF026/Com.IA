import React from "react";
import DashboardStats from "./components/DashboardStats.jsx";
import DashboardAtividades from "./components/DashboardAtividades.jsx";

export default function DashboardPage() {
  return (
    <div style={{ width: "100%", minHeight: "100%" }}>
      <DashboardStats />
      <DashboardAtividades />
    </div>
  );
}

