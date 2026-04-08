import { Navigate } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";

export default function RequireAuth({ children }) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
