import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPBinocularsIcon: React.FC<IconProps> = ({
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
      <path
        d="M29.5,19.7L29.5,19.7L29.5,19.7L29.5,19.7L23.8,6l0,0c-0.4-1.2-1.5-2-2.8-2c-1.7,0-3,1.3-3,3v3h-4V7  
        c0-1.7-1.3-3-3-3C9.7,4,8.6,4.9,8.2,6l0,0L2.5,19.7l0,0l0,0l0,0C2.2,20.4,2,21.2,2,22c0,3.3,2.7,6,6,6s6-2.7,6-6v-4h4v4  
        c0,3.3,2.7,6,6,6s6-2.7,6-6C30,21.2,29.8,20.4,29.5,19.7z M8,26c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S10.2,26,8,26z M24,26  
        c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S26.2,26,24,26z"
        fill="#727272"
      />{" "}
    </Icon>
  );
};
