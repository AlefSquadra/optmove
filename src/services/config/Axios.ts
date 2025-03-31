import axios, { AxiosInstance } from "axios";

const AxiosApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && window.location.pathname !== "/login") {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AxiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export { AxiosApi };
