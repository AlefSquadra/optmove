import { ConfigProvider, ConfigProviderProps } from "antd";
import ptBR from "antd/locale/pt_BR";
import React from "react";
import { theme as OptTheme } from "./antd-theme";

interface IOptLibConfigProviderProps extends ConfigProviderProps {
  children: React.ReactNode;
}

export const OptLibConfigProvider: React.FC<IOptLibConfigProviderProps> = ({
  children,
  locale,
  theme,
  ...props
}: IOptLibConfigProviderProps) => {
  return (
    <ConfigProvider theme={{ ...OptTheme, ...theme }} locale={{ ...ptBR, ...locale }} componentSize="middle" {...props}>
      {children}
    </ConfigProvider>
  );
};
