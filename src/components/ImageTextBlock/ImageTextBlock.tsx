import React from "react";
import { Text } from "../";
import { ImageTextBlockProps } from "./ImageTextBlockTypes";
import "./ImageTextBlockStyles.scss";

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  label,
  header,
  body,
  image,
}) => (
  <section className="site-section image-text-block">
    <div className="image-text-block__text">
      <Text className="image-text-block__text-label" type="h4" mobileType="p">
        {label}
      </Text>
      <Text type="h2" mobileType="h5">
        {header}
      </Text>
      <Text type="p+" mobileType="p">
        {body}
      </Text>
    </div>
    <div className="image-text-block__image">
      <img src={image} />
    </div>
  </section>
);
