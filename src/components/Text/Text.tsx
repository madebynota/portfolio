import React from "react";
import { TextProps } from "./types";
import "./styles.scss";

const mapTypeToClassName = (type: string) => {
  switch(type) {
    case "p+":
      return "p_large";
    case "p-":
      return "p_small";
    default:
      return type;
  };
};

export const Text = ({
  className = "",
  style = {},
  text = "",
  type = "p",
}: TextProps) => (
  <p style={style} className={`${mapTypeToClassName(type)} ${className}`}>{text}</p>
)

export default Text;
