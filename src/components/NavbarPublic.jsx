import { Link } from "react-router-dom";

export default function NavbarPublic() {
  return (
    <header className="w-full border-b bg-white px-[5%] h-16 flex items-center justify-between">
      <div className="text-xl font-semibold">
        <Link to="/">ELEVACREDI</Link>
      </div>

      <Link
        to="/login"
        className="px-4 py-1 bg-emerald-600 text-white rounded-md hover:bg-opacity-80 transition text-sm"
      >
        Entrar
      </Link>
    </header>
  );
}
