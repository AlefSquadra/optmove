import classNames from "classnames";
import { ITextProps } from "./Text";

type FieldVariant = "1" | "2" | "error";

export interface FieldProps extends ITextProps {
  variant: FieldVariant;
}

const fieldClasses: Record<FieldVariant, string> = {
  "1": "font-roboto font-normal text-[1rem] leading-[1.5rem]",
  "2": "font-roboto font-normal text-[0.75rem] leading-[1rem]",
  error: "font-roboto font-normal text-[1rem] leading-[1.5rem]" + " text-red-600",
};

export const Field: React.FC<FieldProps> = ({ variant, className, children }) => {
  return <span className={classNames(fieldClasses[variant], className)}>{children}</span>;
};
