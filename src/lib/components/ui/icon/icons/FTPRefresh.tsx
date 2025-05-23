import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPRefresh: React.FC<IconProps> = ({ color = "#43a047", width = "256", height = "256", ...props }) => {
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
        d="M16,26c-3.3,0-6.2-1.6-8-4l4-4H6.2h-4H2v10l3.2-3.2C7.7,28,11.6,30,16,30c7.1,0,12.9-5.2,13.8-12h-4 C24.9,22.6,20.8,26,16,26z"
        fill="#039C23"
      />
      <path
        d="M26.8,7.2C24.3,4,20.4,2,16,2C8.9,2,3.1,7.2,2.2,14h4c0.9-4.6,5-8,9.8-8c3.3,0,6.2,1.6,8,4l-4,4h5.8h4H30V4 L26.8,7.2z"
        fill="#039C23"
      />{" "}
    </Icon>
  );
};
