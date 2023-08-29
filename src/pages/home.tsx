import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HomePage, SEO } from "../components";
import "../styles/global.scss";

const HomeRoutePage: React.FC<PageProps> = props => <HomePage {...props} />;

export default HomeRoutePage

export const Head: HeadFC = () => <SEO />
