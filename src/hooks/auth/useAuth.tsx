import { AccountInfo } from "@azure/msal-browser";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginPayloadRequest } from "../../models/dtos/payloads/Auth/ILoginPayloadRequest";
import { AuthService } from "../../services/auth/AuthService";
import { setBackendToken } from "../../services/config";
import { msalInstance } from "./msalConfig";

interface AuthContextType {
  user: AccountInfo | null;
  apiAccessToken: string | null;
  msalAccessToken: string | null;
  handleDefaultLogin: (data: ILoginPayloadRequest) => void;
  handleMsalLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDefaultLogin = async (credentials: ILoginPayloadRequest) => {
    AuthService.login(credentials).then((response) => {
      setMsalAccessToken(response.token);
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
