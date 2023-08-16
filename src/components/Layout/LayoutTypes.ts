import React from "react";

export type LayoutProps = {
  /**
   * Main content to render
   */
  children?: any;
  hasHeader?: boolean;
} & React.HTMLProps<HTMLDivElement>;
