import { AxiosApi } from "../config/Axios";
export class AuthService {
  public static async login(data: { email: string; password: string }): Promise<any> {
    return AxiosApi.post(`/auth/login`, data);
  }

  public static async getUser(): Promise<any> {
    const token = localStorage.getItem("token");
    return token || null;
  }
}
