import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../hooks/auth/useAuth";
import { FTP } from "../pages/ftp/FTP";
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
          <Route path="/home" element={<FTP />} />

          <Route element={<ProtectedRoute isPrivate />}>
            <Route path="/" element={<SelectZonePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
