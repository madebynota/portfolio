import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HomePage, SEO } from "../components";
import "../styles/global.scss";

const IndexPage: React.FC<PageProps> = props => {
  return <HomePage {...props} />
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
