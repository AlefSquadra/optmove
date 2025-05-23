import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPEoCircleMinus: React.FC<IconProps> = ({
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
      <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm8 14H8v-4h16v4z" fill="#d11c1c" />
    </Icon>
  );
};
