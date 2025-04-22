import { MsalProvider } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { msalInstance } from "./hooks/auth/msalConfig";
import { AppRoutes } from "./routes/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </MsalProvider>
  );
}

export default App;
