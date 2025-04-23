import { IGetTokenDefaultPayloadRequest } from "../../models/dtos/payloads/Auth/IGetTokenDefaultPayloadRequest";
import { IGetTokenDefaultPayloadResponse } from "../../models/dtos/payloads/Auth/IGetTokenDefaultPayloadResponse";
import { ILoginPayloadRequest } from "../../models/dtos/payloads/Auth/ILoginPayloadRequest";
import { ILoginPayloadResponse } from "../../models/dtos/payloads/Auth/ILoginPayloadResponse";
import { apiClient } from "../config";

export const AuthService = {
  login(payload: ILoginPayloadRequest) {
    return apiClient.post<ILoginPayloadResponse>("/auth/login", payload, {
      notRequiresAuth: false,
    });
  },
  getToken(payload: IGetTokenDefaultPayloadRequest) {
    return apiClient
      .get<IGetTokenDefaultPayloadResponse>("/auth-get-token-default", {
        notRequiresAuth: false,
      })
      .then((_) => ({ accessToken: payload.token }));
  },
};
