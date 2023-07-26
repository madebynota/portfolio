import React from "react";
import logo from "../../images/dialup-retro-logo.png";
import "./HeaderStyles.scss";

export const Header: React.FC = () => (
  <header className="site-section header">
    <img className="logo" src={logo} alt="Dial Up Logo" />
  </header>
);
