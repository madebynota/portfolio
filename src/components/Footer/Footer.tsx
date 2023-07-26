import React from "react";
import { Text } from "../Text/Text";
import "./FooterStyles.scss";

export const Footer: React.FC = () => (
  <footer className="site-section footer">
    <a href="mailto:hello@dialup.digital">
      <Text type="p+" mobileType="p-">hell0@dialup.digital</Text>
    </a>
    <a href="https://www.instagram.com/dialup.digital" target="_blank">
      <Text type="p+" mobileType="p-">@dialup.digital</Text>
    </a>
  </footer>
);
