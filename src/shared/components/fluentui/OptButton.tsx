import { Button, type ButtonProps } from "@fluentui/react-components";
import { forwardRef } from "react";

const OptButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button ref={ref} {...props} />;
});

OptButton.displayName = "OptButton";

export { OptButton };
