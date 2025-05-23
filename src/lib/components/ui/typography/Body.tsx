import classNames from "classnames";
import { ITextProps } from "./Text";

export type BodyVariant = "1" | "2" | "3";

export interface BodyProps extends ITextProps {
  variant: BodyVariant;
}

const bodyClasses: Record<BodyVariant, string> = {
  "1": "font-inter font-normal text-[1.125rem] leading-[1.75rem] md:text-[1rem] md:leading-[1.5rem]",
  "2": "font-inter font-normal text-[1rem] leading-[1.5rem] md:text-[0.875rem] md:leading-[1.25rem]",
  "3": "font-inter font-normal text-[0.875rem] leading-[1.25rem] md:text-[0.75rem] md:leading-[1rem]",
};

export const Body = ({ variant, className, children }: BodyProps) => {
  return <p className={classNames(bodyClasses[variant], className)}>{children}</p>;
};
