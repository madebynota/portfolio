import { ReactNode } from "react"

export type SEOProps = {
  /**
   * Override the page title
   */
  title?: string;

  /**
   * Override the page description
   */
  description?: string;

  /**
   * Pathname used to build the absolute URL
   */
  pathname?: string;

  /**
   * Any additional elements, like meta tags, that need to be passed in
   */
  children?: ReactNode;
}
