import { Dropdown, type DropdownProps } from "@fluentui/react-components";
import { forwardRef } from "react";

const OptDropdown = forwardRef<HTMLButtonElement, DropdownProps>((props, ref) => {
  return <Dropdown {...props} ref={ref} />;
});

OptDropdown.displayName = "OptDropdown";

export { OptDropdown };
