// src/auth/authConfig.ts
import { EventType, LogLevel, PublicClientApplication, type AccountInfo, } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_APP_CLIENT_ID,
    authority: import.meta.env.VITE_APP_AUTHORITY,
    redirectUri: import.meta.env.VITE_APP_REDIRECT_URI,
    postLogoutRedirectUri: import.meta.env.VITE_APP_POST_LOGOUT_REDIRECT,
    clientCapabilities: ["CP1"],
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        if (level === LogLevel.Error) console.error(message);
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    },
  },
};

export const protectedResources = {
  apiTodoList: {
    endpoint: import.meta.env.VITE_APP_API_PTB,
    scopes: {
      read: ["https://clientemrs.onmicrosoft.com/d45fa40d-3149-499f-b9b5-1e26788faf07/portalbaixada"],
      write: ["https://clientemrs.onmicrosoft.com/d45fa40d-3149-499f-b9b5-1e26788faf07/portalbaixada"],
    },
  },
};

export const loginRequest = {
  scopes: [...protectedResources.apiTodoList.scopes.read, ...protectedResources.apiTodoList.scopes.write],
};

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const account = event.payload as AccountInfo;
    msalInstance.setActiveAccount(account);
  }
});
