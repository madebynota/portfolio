import React, { useEffect, useState } from "react";
import { TextProps } from "./TextTypes";
import { useMediaQuery } from "../../hooks/use-media-query";

const mapTypeToClassName = (type: string) => {
  switch (type) {
    case "p+":
      return "p_large";
    case "p-":
      return "p_small";
    default:
      return type;
  };
};

export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  mobileType,
  type = "p",
  ...restProps
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [textType, setTextType] = useState(type);

  useEffect(() => {
    setTextType(mobileType && isMobile ? mobileType : type);
  }, [mobileType && isMobile]);

  return (
    <p className={`text ${mapTypeToClassName(textType)} ${className}`} {...restProps}>{children}</p>
  );
};

export default Text;
