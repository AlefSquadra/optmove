import { useAuth } from "@shared/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ isPrivate }) {
  const { apiAccessToken } = useAuth();

  if (isPrivate && !apiAccessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
