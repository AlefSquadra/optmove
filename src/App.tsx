import { MsalProvider } from "@azure/msal-react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { msalInstance } from "./hooks/auth/msalConfig";
import { router } from "./routes/Routes";

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  );
}

export default App;
