import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    borderRadius: 4,
    colorBorder: "#8A8886", // Rest
    colorPrimary: "#0078D4", // Focus
    controlOutlineWidth: 2,
  },
  components: {
    Input: {
      inputFontSize: 14,
      paddingBlock: 6,
      paddingInline: 8,
      colorBorder: "#8A8886", // Rest
      colorPrimaryHover: "#323130", // Hover
      colorPrimary: "#0078D4", // Focus
      activeBorderColor: "#201F1E", // Pressed (não é documentado, mas funciona)
    },
  },
};
