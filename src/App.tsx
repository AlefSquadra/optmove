import { StyleProvider } from "@ant-design/cssinjs";
import { MsalProvider } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { msalInstance } from "./hooks/auth/msalConfig";
import { OptLibConfigProvider } from "./lib/themes/antd-provider";
import { AppRoutes } from "./routes/Routes";
import { ApplicationProvider } from "./store/ApplicationProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <ApplicationProvider>
      <MsalProvider instance={msalInstance}>
        <QueryClientProvider client={queryClient}>
          <StyleProvider layer>
            <OptLibConfigProvider>
              <AppRoutes />
            </OptLibConfigProvider>
          </StyleProvider>
        </QueryClientProvider>
      </MsalProvider>
    </ApplicationProvider>
  );
}

export default App;
