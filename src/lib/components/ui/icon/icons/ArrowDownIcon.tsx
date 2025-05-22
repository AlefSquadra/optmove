import React from "react";
import { Icon, IconProps } from "../Icon";

export const ArrowDownIcon: React.FC<IconProps> = ({ color = "#000000", width = "24", height = "24", ...props }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
      <path
        d="M7.99992 3.33331V12.6666M7.99992 12.6666L12.6666 7.99998M7.99992 12.6666L3.33325 7.99998"
        stroke={props.stroke || color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
