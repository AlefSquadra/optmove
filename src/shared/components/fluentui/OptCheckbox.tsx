import { Checkbox, type CheckboxProps } from "@fluentui/react-components";
import { forwardRef } from "react";

const OptCheckbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return <Checkbox {...props} ref={ref} />;
});

OptCheckbox.displayName = "OptCheckbox";

export { OptCheckbox };
