import React from "react";
import * as Icons from "./icons";

export type IconsType = keyof typeof Icons;

export interface IOptMoveIconProps {
  name: IconsType;
  color?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  viewBox?: string;
}

export const OptMoveIcon = (props: IOptMoveIconProps) => {
  const { name, color, width, height, className, style, onClick, viewBox } = props;

  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      color={color}
      width={width}
      height={height}
      className={className}
      style={style}
      onClick={onClick}
      viewBox={viewBox}
    />
  );
};
