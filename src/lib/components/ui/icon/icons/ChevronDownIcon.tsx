import React from "react";
import { Icon, IconProps } from "../Icon";

export const ChevronDownIcon: React.FC<IconProps> = ({ color = "#000000", width = "16", height = "8", ...props }) => {
  return (
    <Icon {...props} width={width} height={height} viewBox="0 0 16 8">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.75 0.625001L8 7.375L1.25 0.625001"
        stroke={props.stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
