import {
  ToolbarButton,
  type ToolbarButtonProps,
  ToolbarDivider,
  type ToolbarDividerProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

const OptToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>((props, ref) => {
  return <ToolbarButton {...props} ref={ref} />;
});

OptToolbarButton.displayName = "OptToolbarButton";

const OptToolbarDivider = forwardRef<HTMLDivElement, ToolbarDividerProps>((props, ref) => {
  return <ToolbarDivider {...props} ref={ref} />;
});

OptToolbarDivider.displayName = "OptToolbarDivider";

export { OptToolbarButton, OptToolbarDivider };
