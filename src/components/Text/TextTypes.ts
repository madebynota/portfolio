import React from "react";

type HeadingTextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodyTextTypes = 'p+' | 'p' | 'p-';

export type TextProps = {
  /**
   * Main text content to render
   */
  children?: React.ReactNode;

  /**
   * Custom class(es) to apply
   */
  className?: string;

  /**
   * Predifined text type to use on mobile screen size
   */
  mobileType?: HeadingTextTypes | BodyTextTypes;

  /**
   * Predefined text type
   */
  type?: HeadingTextTypes | BodyTextTypes;
} & React.HTMLProps<HTMLParagraphElement>;
