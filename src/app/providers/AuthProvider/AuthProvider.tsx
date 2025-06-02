import { AuthContext } from "@app/providers/AuthProvider/auhtContext";
import type { AccountInfo } from "@azure/msal-browser";
import { setBackendToken } from "@shared/services/apiClient";
import { AuthService } from "@shared/services/AuthService";
import type { ILoginPayloadRequest } from "@shared/types/Auth.type";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { msalInstance } from "./msalConfig";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AccountInfo | null>(msalInstance.getActiveAccount());
  const navigate = useNavigate();
  const [msalAccessToken, setMsalAccessToken] = useState<string | null>(null);
  const [apiAccessToken, setApiAccessToken] = useState<string | null>(localStorage.getItem("apiAccessToken"));

  const { data: apiToken, isSuccess } = useQuery({
    queryKey: ["getApiAccessToken"],
    queryFn: () => AuthService.getToken({ token: msalAccessToken || "" }),
    enabled: !!msalAccessToken, // só roda quando msalAccessToken estiver disponível
  });

  const getToken = async (account: AccountInfo) => {
    try {
      const response = await msalInstance.acquireTokenSilent({
        scopes: ["User.Read"],
        account,
      });
      setMsalAccessToken(response.accessToken);
    } catch (error) {
      console.error("Token acquisition failed:", error);
    }
  };

  const handleMsalLogin = async () => {
    try {
      const response = await msalInstance.loginPopup({ scopes: ["User.Read"] });
      if (response.account) {
        msalInstance.setActiveAccount(response.account);
        setUser(response.account);
        await getToken(response.account);
        navigate("/select-zone");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDefaultLogin = async (credentials: ILoginPayloadRequest) => {
    AuthService.login(credentials).then(() => {
      navigate("/select-zone");
    });
  };

  const logout = async () => {
    await msalInstance.logoutPopup();
    setUser(null);
    setMsalAccessToken(null);
    window.location.href = "/login"; // Redireciona manualmente
  };

  useEffect(() => {
    if (isSuccess && apiToken?.accessToken) {
      setApiAccessToken(apiToken.accessToken);
      setBackendToken(apiToken.accessToken);
    }
  }, [isSuccess, apiToken]);

  return (
    <AuthContext.Provider
      value={{ user, apiAccessToken, msalAccessToken, handleDefaultLogin, handleMsalLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
