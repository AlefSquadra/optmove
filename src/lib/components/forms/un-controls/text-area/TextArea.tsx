import classNames from "classnames";
import { forwardRef, useState } from "react";

export interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  value?: string;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ maxLength = 200, value, onChange, hasError, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState("");
    const isControlled = value !== undefined;

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(e);
    };

    return (
      <textarea
        ref={ref}
        className={classNames(
          "text-black_400 h-[115px] w-full resize-none rounded-lg border p-2 font-manrope text-[13px] font-normal focus:border-[#6b7280] focus:bg-white focus:outline-none",
          hasError ? "border-red-600" : "border-gray-light-300",
        )}
        maxLength={maxLength}
        onChange={handleChange}
        value={currentValue}
        {...rest}
      />
    );
  },
);

TextArea.displayName = "TextArea";
