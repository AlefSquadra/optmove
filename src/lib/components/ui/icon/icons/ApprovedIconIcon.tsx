import React from "react";
import { Icon, IconProps } from "../Icon";

export const ApprovedIconIcon: React.FC<IconProps> = ({ color = "#000000", width = "24", height = "24", ...props }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M20 6L9 17L4 12"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
