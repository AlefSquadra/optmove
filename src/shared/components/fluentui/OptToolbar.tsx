import {
  ToolbarButton,
  type ToolbarButtonProps,
  ToolbarDivider,
  type ToolbarDividerProps,
} from "@fluentui/react-components";

const OptToolbarButton = (props: ToolbarButtonProps) => {
  return <ToolbarButton {...props} />;
};

const OptToolbarDivider = (props: ToolbarDividerProps) => {
  return <ToolbarDivider {...props} />;
};

export { OptToolbarButton, OptToolbarDivider };
