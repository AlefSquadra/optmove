import React from "react";
import { Icon, IconProps } from "../Icon";

export const CalendarIconIcon: React.FC<IconProps> = ({ color = "#000000", width = "24", height = "24", ...props }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="3"
        y="3.5"
        width="18"
        height="18"
        rx="5"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M3 8.5H21"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.5 2L16.5 5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M7.5 2L7.5 5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6.5 12.5H7.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11.5 12.5H12.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.5 12.5H17.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6.5 16.5H7.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11.5 16.5H12.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.5 16.5H17.5"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
