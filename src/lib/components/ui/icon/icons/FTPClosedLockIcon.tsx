import React from "react";
import { Icon, IconProps } from "../Icon";

export const FTPClosedLockIcon: React.FC<IconProps> = ({
  color = "#43a047",
  width = "32",
  height = "32",
  ...props
}) => {
  return (
    <Icon {...props} width={width} height={height} viewBox="0 0 32 32">
      <path
        d="M25 12h-3v-2c0-3.3-2.7-6-6-6s-6 2.7-6 6v2H7c-.6 0-1 .5-1 1v14c0 .5.4 1 1 1h18c.6 0 1-.5 1-1V13c0-.5-.4-1-1-1zm-7 12h-4l1.4-4.1c-.8-.3-1.4-1-1.4-1.9 0-1.1.9-2 2-2s2 .9 2 2c0 .9-.6 1.6-1.4 1.9L18 24zm-6-12v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-8z"
        fill={color}
      />
    </Icon>
  );
};
