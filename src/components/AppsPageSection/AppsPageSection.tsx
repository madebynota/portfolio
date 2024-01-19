import React from "react";
import { AppsPageSectionProps } from "./AppsPageSectionTypes";
import "./AppsPageSectionStyles.scss";

export const AppsPageSection: React.FC<AppsPageSectionProps> = ({ className, children, asElementType = "section" }) =>
  React.createElement(asElementType, {className: `apps-page-section ${className}`}, children);
