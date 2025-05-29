import { Rule } from "antd/es/form";
import { IOptInputProps, OptInput } from "../../../ui";
import { IOptFieldControlProps, OptFieldControl } from "../field-control";

interface IOptInputControlProps extends Omit<IOptFieldControlProps, "value" | "onChange"> {
  name: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  required?: boolean;
  rules?: Rule[];
  inputProps?: IOptInputProps;
  isFloating?: boolean;
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
  const { inputProps, isFloating, ...restProps } = props;
  return (
    <OptFieldControl
      name={name}
      label={isFloating ? undefined : label}
      className={className}
      fullWidth={fullWidth}
      required={required}
      rules={rules}
      {...restProps}
    >
      <OptInput isFloating={isFloating} label={label} required={required} fullWidth={fullWidth} {...inputProps} />
    </OptFieldControl>
  );
};

export { OptInputControl };
