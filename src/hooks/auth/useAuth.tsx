import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginPayloadRequest } from "../../models/dtos/payloads/Auth/ILoginPayloadRequest";
import { AuthService } from "../../services/auth/AuthService";
import { msalInstance } from "./msalConfig";

interface AuthContextType {
  user: AccountInfo | null;
  accessToken: string | null;
  handleDefaultLogin: (data: ILoginPayloadRequest) => void;
  handleMsalLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AccountInfo | null>(msalInstance.getActiveAccount());
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const handleAuthResponse = async (response: AuthenticationResult) => {
    if (response.account) {
      msalInstance.setActiveAccount(response.account);
      setUser(response.account);
      await getToken(response.account);
      navigate("/");
    }
  };

  const getToken = async (account: AccountInfo) => {
    try {
      const response = await msalInstance.acquireTokenSilent({
        scopes: ["User.Read"],
        account,
      });
      setAccessToken(response.accessToken);
    } catch (error) {
      console.error("Token acquisition failed:", error);
    }
  };

  const handleMsalLogin = async () => {
    try {
      const response = await msalInstance.loginPopup({ scopes: ["User.Read"] });
      await handleAuthResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDefaultLogin = async (credentials: ILoginPayloadRequest) => {
    AuthService.login(credentials).then((response) => {
      setAccessToken(response.token);
    });
  };

  const logout = async () => {
    await msalInstance.logoutPopup();
    setUser(null);
    setAccessToken(null);
    window.location.href = "/login"; // Redireciona manualmente
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, handleDefaultLogin, handleMsalLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
