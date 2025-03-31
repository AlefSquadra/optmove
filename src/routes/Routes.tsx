import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../hooks/auth/useAuth";
import { Home } from "../pages/Home/Home";
import { LoginPage } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute isPrivate />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
