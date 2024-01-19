import type React from "react";

export type AppsPageSectionProps = {
  /**
   * Custom class(es) to apply
   */
  className?: string;

  /**
   * Children that will be wrapped by this component
   */
  children?: React.ReactNode;

   /**
   * Type of root element for component rendering
   */
  asElementType?: 'section' | 'footer';
};
