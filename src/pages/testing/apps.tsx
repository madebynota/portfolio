import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AppsPage, SEO } from "../../components";
import "../../styles/global.scss";

const AppsRoutePage: React.FC<PageProps> = props => <AppsPage {...props} />;

export default AppsRoutePage

export const Head: HeadFC = () => <SEO />
