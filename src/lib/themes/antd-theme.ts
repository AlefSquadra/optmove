import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    // Cores principais
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",

    // Tipografia
    fontFamily: '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,

    // Layout
    borderRadius: 6,
    controlHeight: 36,

    // Espaçamento
    padding: 16,
    margin: 16,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 36,
      fontWeight: 500,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 36,
    },
    Select: {
      borderRadius: 6,
      controlHeight: 36,
    },
    Card: {
      borderRadius: 8,
      paddingLG: 24,
    },
    Table: {
      borderRadius: 8,
      headerBg: "#fafafa",
      headerColor: "#262626",
      fontWeightStrong: 500,
    },
    Form: {
      labelColor: "#262626",
      labelFontSize: 14,
      itemMarginBottom: 16,
    },
    Modal: {
      borderRadius: 8,
      headerBg: "#1677ff",
      titleColor: "#ffffff",
    },
    Menu: {
      itemBorderRadius: 6,
    },
    Typography: {
      fontFamily: "Roboto, Helvetica Neue, sans-serif",
    },
  },
};
