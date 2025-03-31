import { MsalProvider } from "@azure/msal-react";
import "./App.css";
import { msalInstance } from "./hooks/auth/msalConfig";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AppRoutes />
    </MsalProvider>
  );
}

export default App;
