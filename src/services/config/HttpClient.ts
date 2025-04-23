import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";

type CustomAxiosRequestConfig = InternalAxiosRequestConfig & {
  notRequiresAuth?: boolean;
};

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private getToken: () => string | null;

  constructor(baseURL: string, getToken: () => string | null) {
    this.getToken = getToken;

    this.axiosInstance = axios.create({ baseURL });

    this.axiosInstance.interceptors.request.use((config) => {
      const customConfig = config as CustomAxiosRequestConfig;

      const isAuthRequired = !customConfig.notRequiresAuth || true;

      if (isAuthRequired) {
        const token = this.getToken();

        if (token) {
          customConfig.headers = {
            ...customConfig.headers,
            Authorization: `Bearer ${token}`,
          } as AxiosRequestHeaders;
        }
      }

      return customConfig;
    });
  }

  async request<T = any>(config: CustomAxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.request<T>(config);
    return response.data;
  }

  get<T = any>(url: string, config?: Partial<CustomAxiosRequestConfig>) {
    return this.request<T>({ method: "GET", url, ...config } as CustomAxiosRequestConfig);
  }

  post<T = any>(url: string, data?: any, config?: Partial<CustomAxiosRequestConfig>) {
    return this.request<T>({ method: "POST", url, data, ...config } as CustomAxiosRequestConfig);
  }

  put<T = any>(url: string, data?: any, config?: Partial<CustomAxiosRequestConfig>) {
    return this.request<T>({ method: "PUT", url, data, ...config } as CustomAxiosRequestConfig);
  }

  delete<T = any>(url: string, config?: Partial<CustomAxiosRequestConfig>) {
    return this.request<T>({ method: "DELETE", url, ...config } as CustomAxiosRequestConfig);
  }
}
