import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPFormPageTerminalIcon: React.FC<IconProps> = ({
  color = "#43a047",
  width = "256",
  height = "256",
  ...props
}) => {
  return (
    <Icon
      {...props}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        ...props.style,
      }}
    >
      <rect x="14" y="16" width="10" height="2" fill="#727272" />
      <rect x="14" y="20" width="10" height="2" fill="#727272" />
      <rect x="14" y="24" width="10" height="2" fill="#727272" />
      <rect x="14" y="12" width="10" height="2" fill="#727272" />
      <g opacity="0.3">
        <rect x="26" y="12" width="2" height="14" fill="#1177D7" />
      </g>
      <rect x="26" y="12" width="2" height="8" fill="#1177D7" />
      <path
        d="M31,2H1C0.4,2,0,2.4,0,3v26c0,0.6,0.4,1,1,1h30c0.6,0,1-0.4,1-1V3C32,2.4,31.6,2,31,2z M22,4c1.1,0,2,0.9,2,2 
      c0,1.1-0.9,2-2,2s-2-0.9-2-2C20,4.9,20.9,4,22,4z M30,28H16h-2h-2H8H2V10h6h4h2h2h14V28z M28,8c-1.1,0-2-0.9-2-2
      c0-1.1,0.9-2,2-2s2,0.9,2,2C30,7.1,29.1,8,28,8z"
        fill="#1177D7"
      />
      <rect x="4" y="12" width="8" height="14" fill="#727272" />
    </Icon>
  );
};
