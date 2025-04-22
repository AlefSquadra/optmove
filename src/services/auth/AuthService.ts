import { ILoginPayloadRequest } from "../../models/dtos/payloads/Auth/ILoginPayloadRequest";
import { ILoginPayloadResponse } from "../../models/dtos/payloads/Auth/ILoginPayloadResponse";
import { apiClient } from "../config";

export const AuthService = {
  login(payload: ILoginPayloadRequest) {
    return apiClient.post<ILoginPayloadResponse>("/auth/login", payload, {
      notRequiresAuth: false,
    });
  },
};
