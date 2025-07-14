import { Tooltip, type TooltipProps } from "@fluentui/react-components";
import { forwardRef } from "react";

const OptTooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  return <Tooltip {...props} ref={ref} />;
});

OptTooltip.displayName = "OptTooltip";

export { OptTooltip };
