import React from "react";
import { Icon, IconProps } from "../Icon";

export const EditTableIconIcon: React.FC<IconProps> = ({
  color = "#000000",
  width = "20",
  height = "20",
  ...props
}) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 20 20" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.7977 1.43045C13.572 0.642725 14.8279 0.642242 15.6028 1.42937L18.0345 3.89935C18.8028 4.67976 18.8107 5.94316 18.0524 6.73353L8.97981 16.1887C8.41982 16.7723 7.65177 17.1014 6.84978 17.1014L4.162 17.1013C3.31587 17.1012 2.64014 16.3848 2.67573 15.5254L2.79117 12.7376C2.82252 11.9806 3.13229 11.263 3.65918 10.727L12.7977 1.43045Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10.733 3.70089L15.606 8.65063"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M13.1515 17.0278H19.1782"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
