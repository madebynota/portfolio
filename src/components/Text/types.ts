import React, { ReactNode } from "react";

type HeadingTextTypes = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
type BodyTextTypes = 'p+' | 'p' | 'p-';

export type TextProps = {
  /**
   * Custom class(es) to apply
   */
  className?: string;

  /**
   * Custom styles to apply
   */
  style?: React.CSSProperties;

  /**
   * Main text content to render
   */
  text: ReactNode;

  /**
   * Predefined text type
   */
  type: HeadingTextTypes | BodyTextTypes;
};
