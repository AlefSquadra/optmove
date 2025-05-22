import React from "react";
import { Icon, IconProps } from "../Icon";

export const CloseIconIcon: React.FC<IconProps> = ({ color = "#000000", width = "24", height = "24", ...props }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M18 6L6 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6 6L18 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
