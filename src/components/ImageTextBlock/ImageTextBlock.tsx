import React from "react";
import { Text } from "../";
import { ImageTextBlockProps } from "./ImageTextBlockTypes";
import "./ImageTextBlockStyles.scss";

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  label,
  header,
  body,
}) => (
  <section className="site-section image-text-block">
    <div className="image-text-block__text">
      <Text className="image-text-block__text-label" type="p+" mobileType="p">
        {label}
      </Text>
      <Text type="h4" mobileType="h5">
        {header}
      </Text>
      <Text type="p" mobileType="p">
        {body}
      </Text>
    </div>
    <div className="image-text-block__image">
      <div className="image-placeholder">img</div>
    </div>
  </section>
);
