import { Rule } from "antd/es/form";
import { OptInput } from "../../../ui";
import { OptFieldControl } from "../field-control";

interface IOptInputControlProps {
  name: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  required?: boolean;
  rules?: Rule[];
}

const OptInputControl = ({
  name,
  label,
  className,
  fullWidth = true,
  required,
  rules = [],
  ...props
}: IOptInputControlProps) => {
  return (
    <OptFieldControl
      name={name}
      label={label}
      className={className}
      fullWidth={fullWidth}
      required={required}
      rules={rules}
    >
      <OptInput {...props} />
    </OptFieldControl>
  );
};

export { OptInputControl };
