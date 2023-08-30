import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AppsPage, HomePage, SEO } from "../components";
import "../styles/global.scss";

const IndexPage: React.FC<PageProps> = props =>
  process.env.GATSBY_INDEX_PAGE_MODE === "apps" ? <AppsPage {...props} /> : <HomePage {...props} />;

export default IndexPage

export const Head: HeadFC = () => <SEO />
