import React from "react";
import { AppsPageSection, Button, Text } from "../../components";
import heroImg from "../../images/2021_app_lineup.png";
import logo from "../../images/logo.svg";
import mobileImg from "../../images/mobile_hero.png";
import "./HeroSection.scss";
import { openDemoForm } from "../../utils/global";

export const HeroSection = () => (
  <AppsPageSection className="hero">
    <img className="nota-hero-logo" src={logo} alt="Nota Logo" />
    <div className="text-section">
      <Text className="headline" type="h1" mobileType="h3">
        Event Apps for Everyone
      </Text>
      <div className="mobile-image-section">
        <img src={mobileImg} />
      </div>
      <Text className="subheadline" type="h3" mobileType="p">
        Nota is powering the next generation of event apps for organizers and
        attendees
      </Text>
      <Button
        buttonLabel="request demo"
        className="hero-cta-button"
        onClick={openDemoForm}
      />
    </div>
    <div className="image-section">
      <img src={heroImg} />
    </div>
  </AppsPageSection>
);
