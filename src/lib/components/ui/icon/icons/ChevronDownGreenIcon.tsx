import React from "react";
import { Icon, IconProps } from "../Icon";

export const ChevronDownGreenIcon: React.FC<IconProps> = ({
  color = "#000000",
  width = "16",
  height = "10",
  ...props
}) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 16 10" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.75 1.625L8 8.375L1.25 1.625"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
