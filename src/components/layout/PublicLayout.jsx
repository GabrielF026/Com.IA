import { Outlet, useLocation } from "react-router-dom";
import NavbarPublic from "../NavbarPublic";

export default function PublicLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Exibe o navbar público exceto na tela de login */}
      {!isLoginPage && <NavbarPublic />}

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
