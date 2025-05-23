import { Input as AntInput, InputProps } from "antd";
import { ChangeEvent, forwardRef } from "react";
import { useMask } from "../../../../hooks/use-mask"; // Ajuste o caminho conforme necessário

export interface IOptInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  width?: string;
  semiBoldLabel?: boolean;
  onEnter?: () => void;
  fullWidth?: boolean;
  maskPattern?: string | string[];
  disabled?: boolean;
  value?: string;
  type?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const OptInput = forwardRef<HTMLInputElement, IOptInputProps>(
  (
    {
      label,
      placeholder,
      required,
      disabled,
      value,
      type = "text",
      error,
      width = "100%",
      semiBoldLabel = false,
      className = "",
      fullWidth = false,
      maskPattern,
      onChange,
      ...restProps
    }: IOptInputProps,
    ref,
  ) => {
    const { maskedValue, setValue } = useMask((value as string) || "", maskPattern || "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const masked = e.target.value;
      setValue(masked);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <AntInput
        ref={ref as any}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        value={maskedValue}
        onChange={handleChange}
        {...restProps}
      />
    );
  },
);

export { OptInput };
