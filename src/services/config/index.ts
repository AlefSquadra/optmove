import { HttpClient } from "./HttpClient";

let backendToken: string | null = localStorage.getItem("apiAccessToken");

export const setBackendToken = (token: string) => {
  backendToken = token;
  localStorage.setItem("apiAccessToken", token);
};

export const apiClient = new HttpClient(
  import.meta.env.VITE_APP_BASE_URL_BACKEND ?? import.meta.env.VITE_APP_BASE_URL_BACKEND_LOCAL,
  () => backendToken,
);
