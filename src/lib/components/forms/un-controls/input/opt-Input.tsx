import { Input as AntInput, InputProps } from "antd";
import clsx from "clsx";
import { ChangeEvent, forwardRef, useState } from "react";
import { useMask } from "../../../../hooks/use-mask"; // Ajuste conforme seu projeto

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
  isFloating?: boolean;
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
      onEnter,
      isFloating = false,
      ...restProps
    }: IOptInputProps,
    ref,
  ) => {
    const { maskedValue, setValue } = useMask((value as string) || "", maskPattern || "");

    const [focused, setFocused] = useState(false);

    const hasFloating = (isFloating && focused) || maskedValue.length > 0;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const masked = e.target.value;
      setValue(masked);
      if (onChange) {
        onChange(e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnter) {
        onEnter();
      }
    };

    return (
      <div
        className={clsx("relative", fullWidth ? "w-full" : "", className, error && "text-red-500")}
        style={{ width }}
      >
        <div
          className={clsx(
            "relative rounded-md",

            disabled && "cursor-not-allowed bg-gray-100",
          )}
        >
          {isFloating && label && (
            <label
              className={clsx(
                "absolute left-3 z-10 bg-white px-1 transition-all",
                hasFloating ? "-top-2 text-xs text-primary-color" : "top-4 text-sm text-gray-400",
                semiBoldLabel && "font-semibold",
                disabled && "text-gray-400",
              )}
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <AntInput
            ref={ref as any}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            value={maskedValue}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            {...restProps}
            className={clsx(
              isFloating && "border bg-transparent px-3 py-2 focus:outline-none focus:ring-0",
              restProps.classNames,
            )}
          />
        </div>
        {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
      </div>
    );
  },
);

export { OptInput };
