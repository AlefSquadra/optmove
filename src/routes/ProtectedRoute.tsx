import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

export function ProtectedRoute({ isPrivate }) {
  const { user } = useAuth();

  if (isPrivate && !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
