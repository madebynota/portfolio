import React from "react";
import { Text } from "../Text/Text";
import "./FeatureBlockStyles.scss";
import { FeatureBlockProps } from "./FeatureBlockTypes";

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  iconSrc,
  title,
  description,
}) => (
  <div className="feature-block">
    <img src={iconSrc} className="feature-block__img" />
    <Text
      className="feature-block__title"
      type="h6"
      mobileType="p+"
    >{title}</Text>
    <Text
      className="feature-block__description"
      mobileType="p-"
    >{description}</Text>
  </div>
);
