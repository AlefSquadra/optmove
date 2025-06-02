import { ApplicationProvider } from "@app/providers/ApplicationProvider/ApplicationProvider";
import { msalInstance } from "@app/providers/AuthProvider/msalConfig";
import { AppRoutes } from "@app/router/Routes";
import { MsalProvider } from "@azure/msal-react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ApplicationProvider>
        <MsalProvider instance={msalInstance}>
          <QueryClientProvider client={queryClient}>
            {/* <StyleProvider> */}
            <FluentProvider theme={webLightTheme}>
              <AppRoutes />
            </FluentProvider>

            {/* </StyleProvider> */}
          </QueryClientProvider>
        </MsalProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;
