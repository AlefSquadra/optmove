import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../hooks/auth/useAuth";
import { Home } from "../pages/home/Home";
import { LoginPage } from "../pages/login/Login";
import { NotFound } from "../pages/notFound/NotFound";
import { SelectZonePage } from "../pages/selectZone/SelectZonePage";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/select-zone" />} />

          {/* Public routes */}
          <Route element={<ProtectedRoute isPrivate />}>
            <Route path="/select-zone" element={<SelectZonePage />} />
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
