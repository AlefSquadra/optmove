import { ApplicationProvider } from "@app/providers/ApplicationProvider/ApplicationProvider";
import { msalInstance } from "@app/providers/AuthProvider/msalConfig";
import { GlobalDialogProvider } from "@app/providers/GlobalDialogProvider/GlobalDialogProvider";
import { AppRoutes } from "@app/router/Routes";
import { MsalProvider } from "@azure/msal-react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
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
            <FluentProvider theme={webLightTheme}>
              <GlobalDialogProvider>
                <MantineProvider>
                  <AppRoutes />
                </MantineProvider>
              </GlobalDialogProvider>
            </FluentProvider>

            {/* </StyleProvider> */}
          </QueryClientProvider>
        </MsalProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;
