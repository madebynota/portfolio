import React from "react";
import { AppsPageSection, Text } from "../../components";
import logo from "../../images/logo.svg";
import "./FooterStyles.scss";

export const Footer: React.FC = () => (
  <AppsPageSection className="nota-footer">
    <img className="nota-footer-logo" src={logo} alt="Nota Logo" />
    <div className="divider-line" />
    <div className="more-info">
      <p className="footer-section-title">More Info</p>
      <a href="">
        <Text type="p">
          Terms & Conditions
        </Text>
      </a>
      <a href="">
        <Text type="p">
          Privacy Policy
        </Text>
      </a>
    </div>
    <div className="contact-details">
      <p className="footer-section-title">Contact Us</p>
      <a href="mailto:hello@madebynota.com">
        <Text className="footer-ellipsize" type="p">
          hello@madebynota.com
        </Text>
      </a>
    </div>
    <div className="copyright-details">
      <Text className="footer-ellipsize" type="p">
        NOTA ©️ 2024
      </Text>
      <Text className="footer-ellipsize" type="p">
        ALL RIGHTS RESERVED
      </Text>
    </div>
  </AppsPageSection>
);
