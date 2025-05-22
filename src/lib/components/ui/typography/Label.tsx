import clsx from "clsx";
import { ITextProps } from "./Text";

type LabelVariant = "1";

export interface FieldProps extends Omit<ITextProps, "children">, React.LabelHTMLAttributes<HTMLLabelElement> {
  variant: LabelVariant;
}

const LabelClasses: Record<LabelVariant, string> = {
  "1": "font-montserrat font-medium text-[0.875rem] leading-6 w-full",
};

export const Label: React.FC<FieldProps> = ({ variant, className, children, ...rest }) => {
  return (
    <label className={clsx(LabelClasses[variant], className)} {...rest}>
      {children}
    </label>
  );
};
