import React from "react";
import { Icon, IconProps } from "../Icon";

export const ApprovedSystemIconIcon: React.FC<IconProps> = ({
  color = "#000000",
  width = "24",
  height = "25",
  ...props
}) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M18 6.72949L6 18.7295"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6 6.72949L18 18.7295"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
