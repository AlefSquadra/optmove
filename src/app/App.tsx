import { ApplicationProvider } from "@app/providers/ApplicationProvider/ApplicationProvider";
import { msalInstance } from "@app/providers/AuthProvider/msalConfig";
import { GlobalDialogProvider } from "@app/providers/GlobalDialogProvider/GlobalDialogProvider";
import { AppRoutes } from "@app/router/Routes";
import { MsalProvider } from "@azure/msal-react";
import { OptFluentProvider, optWebLightTheme } from "@shared/components/fluentui";
import { MantineProvider } from "@mantine/core";
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
            <OptFluentProvider theme={optWebLightTheme}>
              <GlobalDialogProvider>
                <MantineProvider>
                  <AppRoutes />
                </MantineProvider>
              </GlobalDialogProvider>
            </OptFluentProvider>

            {/* </StyleProvider> */}
          </QueryClientProvider>
        </MsalProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;
