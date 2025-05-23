import React from "react";
import { Icon, IconProps } from "../Icon";

export const ArrowUpIcon: React.FC<IconProps> = ({ color = "#000000", width = "24", height = "24", ...props }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
      <path
        d="M7.99992 12.6667V3.33335M7.99992 3.33335L12.6666 8.00002M7.99992 3.33335L3.33325 8.00002"
        stroke={props.stroke || color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
