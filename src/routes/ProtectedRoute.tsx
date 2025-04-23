import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

export function ProtectedRoute({ isPrivate }) {
  const { apiAccessToken } = useAuth();

  if (isPrivate && !apiAccessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
