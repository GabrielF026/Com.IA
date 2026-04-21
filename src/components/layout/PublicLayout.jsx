import { Outlet, useLocation } from "react-router-dom";
import NavbarPublic from "../NavbarPublic";

export default function PublicLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isLandingPage =
    location.pathname === "/" || location.pathname === "/inicio";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--surface-2)", color: "var(--text-primary)" }}
    >
      {/* Exibe o navbar público exceto na tela de login */}
      {!isLoginPage && !isLandingPage && <NavbarPublic />}

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
