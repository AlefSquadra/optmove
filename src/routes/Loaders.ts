// src/routes/loaders.ts
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authService } from "../services/auth/AuthService";

export const authLoader = async () => {
  const user = authService.getUser();
  return { user };
};

export const protectedLoader = async ({  }: LoaderFunctionArgs) => {
  const user = authService.getUser();
  
  if (!user) {
    throw redirect(`/login`);
  }

  return { user };
};
