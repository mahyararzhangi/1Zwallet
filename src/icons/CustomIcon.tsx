import React from "react";
import icons from "./icons";

type CustomIconProps = {
  name: string;
  size?: number;
  color?: string;
  [key: string]: any;
};

const CustomIcon = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: CustomIconProps) => {
  const icon = icons[name];

  if (!icon) return null;

  return React.cloneElement(icon, {
    width: size,
    height: size,
    fill: color,
    ...props,
  });
};

export default CustomIcon;
