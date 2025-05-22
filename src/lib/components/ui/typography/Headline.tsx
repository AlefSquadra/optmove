import classNames from "classnames";
import { ITextProps } from "./Text";

export interface HeadlineProps extends ITextProps {
  variant: HeadlineVariant;
}

type HeadlineVariant = "1" | "2" | "3" | "4";

const headlineClasses: Record<HeadlineVariant, string> = {
  "1": "font-inter font-semibold text-[4.rem] leading-[4.75rem] md:text-[2rem] md:leading-[2.25rem]",
  "2": "font-inter font-semibold text-[2.25rem] leading-[2.75rem] md:text-[1.25rem] md:leading-[1.75rem]",
  "3": "font-inter font-semibold text-[1.75rem] leading-[2.25rem] md:text-[1.125rem] md:leading-[1.5rem]",
  "4": "font-inter font-semibold text-[1.25rem] leading-[1.75rem] md:text-[1rem] md:leading-[1.25rem]",
};

export const Headline = ({ variant, className, children }: HeadlineProps) => {
  const Tag =
    variant === "1" ? "h1"
    : variant === "2" ? "h2"
    : variant === "3" ? "h3"
    : "h4";

  return <Tag className={classNames(headlineClasses[variant], className)}>{children}</Tag>;
};
