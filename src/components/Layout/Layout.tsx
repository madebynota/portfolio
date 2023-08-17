import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutProps } from "./LayoutTypes";
import "./LayoutStyles.scss";

export const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  hasHeader = true,
  ...restProps
}) => (
  <div
    className={`layout ${className ? className : ''}`}
    {...restProps}
  >
    {hasHeader ? <Header /> : null}
    { children }
    <Footer />
  </div>
);
