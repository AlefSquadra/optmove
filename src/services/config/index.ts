import { HttpClient } from "./HttpClient";

let backendToken: string | null = null;

export const setBackendToken = (token: string) => {
  backendToken = token;
};

export const apiClient = new HttpClient(import.meta.env.VITE_APP_BASE_URL_BACKEND, () => backendToken);
