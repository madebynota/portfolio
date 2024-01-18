import React from "react";
import { Text } from "../Text/Text";
import "./FeatureBlockStyles.scss";
import { FeatureBlockProps } from "./FeatureBlockTypes";
import { ReactSVG } from 'react-svg'

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  iconSrc,
  title,
  description,
}) => (
  <div className="feature-block">
    <ReactSVG
      src={iconSrc}
      className="feature-block__img"
      beforeInjection={(svg) => {
        svg.setAttribute('width', '')
        svg.setAttribute('height', '')
      }}
    />
    <Text
      className="feature-block__title"
      type="h6"
      mobileType="p+"
    >{title}</Text>
    <Text
      className="feature-block__description"
    >{description}</Text>
  </div>
);
