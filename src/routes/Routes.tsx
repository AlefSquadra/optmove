import { createBrowserRouter, RouteObject } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { LoginPage } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { protectedLoader } from "./Loaders";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    loader: protectedLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "login", element: <LoginPage /> },
];

export const router = createBrowserRouter(routes);
