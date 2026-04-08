import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UserStore";
import { useState } from "react";

export default function NavbarPrivate() {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  const isAdmin = user?.role === "admin";
  const isGestor = user?.role === "gestor";

  const [openMenu, setOpenMenu] = useState(null);
  const [delayClose, setDelayClose] = useState(null);

  function open(menu) {
    if (delayClose) clearTimeout(delayClose);
    setOpenMenu(menu);
  }

  function close() {
    const timeout = setTimeout(() => setOpenMenu(null), 200);
    setDelayClose(timeout);
  }

  return (
    <header className="w-full border-b bg-white px-[5%] h-16 flex items-center justify-between shadow-sm">

      {/* LOGO / HOME */}
      <Link to="/dashboard" className="text-xl font-semibold text-emerald-700">
        ELEVACREDI
      </Link>

      {/* MENU */}
      <nav className="flex gap-8 text-sm font-medium items-center">

        <Link to="/dashboard" className="hover:opacity-70 transition">
          Dashboard
        </Link>

        {/* ✅ CRM – acesso direto */}
        <Link
          to="/crm"
          className="hover:opacity-70 transition font-semibold"
        >
          CRM
        </Link>

        {/* VENDAS */}
        <div
          className="relative"
          onMouseEnter={() => open("contratos")}
          onMouseLeave={close}
        >
          <button className="hover:opacity-70 transition">
            Vendas ▾
          </button>

          {openMenu === "contratos" && (
            <div
              className="absolute left-0 mt-2 bg-white border shadow rounded-md p-2 w-48 z-50"
              onMouseEnter={() => open("contratos")}
              onMouseLeave={close}
            >
              <Link
                to="/visualizar-contrato"
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                Listar vendas
              </Link>

              <Link
                to="/importar-contratos"
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                Importar vendas
              </Link>
            </div>
          )}
        </div>

        {/* USUÁRIOS */}
        {(isAdmin || isGestor) && (
          <div
            className="relative"
            onMouseEnter={() => open("usuarios")}
            onMouseLeave={close}
          >
            <button className="hover:opacity-70 transition">
              Usuários ▾
            </button>

            {openMenu === "usuarios" && (
              <div
                className="absolute left-0 mt-2 bg-white border shadow rounded-md p-2 w-48 z-50"
                onMouseEnter={() => open("usuarios")}
                onMouseLeave={close}
              >
                <Link
                  to="/usuarios"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Listar usuários
                </Link>

                {isAdmin && (
                  <Link
                    to="/adicionar-usuario"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Adicionar usuário
                  </Link>
                )}
              </div>
            )}
          </div>
        )}

        {/* REGRAS */}
        <div
          className="relative"
          onMouseEnter={() => open("regras")}
          onMouseLeave={close}
        >
          <button className="hover:opacity-70 transition">
            Regras ▾
          </button>

          {openMenu === "regras" && (
            <div
              className="absolute left-0 mt-2 bg-white border shadow rounded-md p-2 w-52 z-50"
              onMouseEnter={() => open("regras")}
              onMouseLeave={close}
            >
              <Link
                to="/lista-de-regras"
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                Listar regras
              </Link>

              {(isAdmin || isGestor) && (
                <Link
                  to="/criar-regra"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Criar nova regra
                </Link>
              )}
            </div>
          )}
        </div>

        <Link to="/configuracoes" className="hover:opacity-70 transition">
          Configurações
        </Link>

        {/* SAIR */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="text-red-600 hover:opacity-70 ml-4"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
