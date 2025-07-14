import { FluentProvider, type FluentProviderProps, webLightTheme } from "@fluentui/react-components";

const OptFluentProvider = (props: FluentProviderProps) => {
  return <FluentProvider {...props} />;
};

const optWebLightTheme = webLightTheme;

export { OptFluentProvider, optWebLightTheme };
