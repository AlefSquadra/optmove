import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPGraphProgress: React.FC<IconProps> = ({ color = "#43a047", width = "32", height = "32", ...props }) => {
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
          d="M31 4H1c-.5 0-1 .5-1 1v22c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1zm-1 22H2V6h28v20z"
          fill="#727272"
        />
        <path d="m4 20 4-4 2 2 6-6 2 2 6-6 4 4v3l-4-4-6 6-2-2-6 6-2-2-4 4v-3" fill="#d11c1c" />
      </g>{" "}
    </Icon>
  );
};
