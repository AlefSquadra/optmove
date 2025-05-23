import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPTerminalPlot: React.FC<IconProps> = ({
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
      <g>
        <path
          d="M0,3v24c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3z M28,26H2V6h26V26z"
          fill="#727272"
        />
        <path d="M14,12H4V8h10V12z M26,14H12v4h14V14z M20,20H8v4h12V20z" fill="#1177D7" />
      </g>{" "}
    </Icon>
  );
};
