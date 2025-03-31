// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
}
