import { apiClient } from "@shared/services/apiClient";
import type { IGetTokenDefaultPayloadRequest, IGetTokenDefaultPayloadResponse, ILoginPayloadRequest, ILoginPayloadResponse } from "@shared/types/Auth.type";

export const AuthService = {
    login(payload: ILoginPayloadRequest) {
      return apiClient.post<ILoginPayloadResponse, ILoginPayloadRequest>("/auth/login", payload, {
        notRequiresAuth: false,
      });
    },
    getToken(payload: IGetTokenDefaultPayloadRequest) {
      return apiClient
        .get<IGetTokenDefaultPayloadResponse >("/auth-get-token-default", {
          notRequiresAuth: false,
        })
        .then(() => ({ accessToken: payload.token }));
    },
  };
  