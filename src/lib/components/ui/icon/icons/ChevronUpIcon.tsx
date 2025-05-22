import React from "react";
import { Icon, IconProps } from "../Icon";

export const ChevronUpIcon: React.FC<IconProps> = ({ color = "#000000", width = "16", height = "8", ...props }) => {
  return (
    <Icon {...props} width={width} height={height} viewBox="0 0 16 8">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1.25 7.375L8 0.625L14.75 7.375"
        stroke={props.stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
