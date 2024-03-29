import React from "react";
import { ButtonProps } from "./ButtonTypes";
import Text from "../Text/Text";
import "./ButtonStyles.scss";

export const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  className = "",
  type = "solid",
  onClick,
  ...restProps
}) => (
  <div
    aria-label={buttonLabel}
    role="button"
    className={`button ${type} ${className}`}
    onClick={onClick}
    {...restProps}
  >
    <Text type="h4" className="button-label">
      {buttonLabel}
    </Text>
  </div>
);
