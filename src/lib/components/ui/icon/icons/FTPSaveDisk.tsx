import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPSaveDisk: React.FC<IconProps> = ({ color = "#43a047", width = "256", height = "256", ...props }) => {
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
      <path
        d="M27,4h-3v10H8V4H5C4.4,4,4,4.4,4,5v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V5C28,4.4,27.6,4,27,4z M24,24H8v-6h16V24z M10,4v8h10V4H10z M14,10h-2V6h2V10z"
        fill="#727272"
      />
    </Icon>
  );
};
