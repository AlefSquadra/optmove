import { AuthProvider } from "@app/providers/AuthProvider/AuthProvider";
import { Home } from "@features/home/HomePage";
import { LoginPage } from "@features/login/LoginPage";
import { SelectZonePage } from "@features/selectZone/SelectZonePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/select-zone" />} />

 
          <Route element={<ProtectedRoute isPrivate />}>
            <Route path="/select-zone" element={<SelectZonePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider> */}

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/select-zone" element={<SelectZonePage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
