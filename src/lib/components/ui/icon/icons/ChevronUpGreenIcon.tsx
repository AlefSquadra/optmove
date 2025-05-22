import React from "react";
import { Icon, IconProps } from "../Icon";

export const ChevronUpGreenIcon: React.FC<IconProps> = ({
  color = "#000000",
  width = "26",
  height = "16",
  ...props
}) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 26 16" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1.75 13.625L13 2.375L24.25 13.625"
        stroke={props.stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
