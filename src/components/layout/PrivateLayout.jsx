import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SIDEBAR_W = 240;

export default function PrivateLayout() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--surface-2)" }}>
      {/* Sidebar is position:fixed – it's out of normal flow */}
      <Sidebar />

      {/* Main area manually offset by the sidebar width */}
      <main
        style={{
          marginLeft: SIDEBAR_W,
          minHeight: "100vh",
          padding: "32px 36px",
          background: "var(--surface-2)",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}


