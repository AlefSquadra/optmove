import { MsalProvider } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { msalInstance } from "./hooks/auth/msalConfig";
import { AppRoutes } from "./routes/Routes";
import { ApplicationProvider } from "./store/ApplicationProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <ApplicationProvider>
      <MsalProvider instance={msalInstance}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </MsalProvider>
    </ApplicationProvider>
  );
}

export default App;
