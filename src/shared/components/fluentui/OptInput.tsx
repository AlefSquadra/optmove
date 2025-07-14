import { Input, type InputProps } from "@fluentui/react-components";
import { forwardRef } from "react";

const OptInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

OptInput.displayName = "OptInput";

export { OptInput };
