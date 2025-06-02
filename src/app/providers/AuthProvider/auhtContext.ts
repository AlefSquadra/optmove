import type { AccountInfo } from "@azure/msal-browser";
import type { ILoginPayloadRequest } from "@shared/types/Auth.type";
import { createContext } from "react";

interface AuthContextType {
    user: AccountInfo | null;
    apiAccessToken: string | null;
    msalAccessToken: string | null;
    handleDefaultLogin: (data: ILoginPayloadRequest) => void;
    handleMsalLogin: () => void;
    logout: () => void;
  }
  
  export const AuthContext = createContext<AuthContextType | undefined>(undefined);