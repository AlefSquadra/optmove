import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { AuthService } from "../services/auth/AuthService";

export const authLoader = async () => {
  const user = AuthService.getUser();
  return { user };
};

export const protectedLoader = async ({}: LoaderFunctionArgs) => {
  const user = await AuthService.getUser();

  if (!user) {
    throw redirect(`/login`);
  }

  return { user };
};
