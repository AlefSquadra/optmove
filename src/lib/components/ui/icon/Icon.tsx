import classNames from "classnames";
import React from "react";

export interface IconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  viewBox: string;
  stroke?: string;
  svgProps?: React.SVGAttributes<SVGElement>;
}

export const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({
  viewBox,
  width = 24,
  height = 24,
  className,
  style,
  onClick,
  children,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={classNames("flex items-center justify-center object-contain", className)}
      style={style}
      onClick={onClick}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      {...svgProps}
    >
      {children}
    </svg>
  );
};
