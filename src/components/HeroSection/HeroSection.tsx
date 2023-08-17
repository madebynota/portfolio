import React from "react";
import { Button, Text } from "../../components";
import heroImg from "../../images/hero-img-placeholder.png";
import logo from "../../images/dialup-retro-logo.png";
import heroBg from "../../images/noise_bg.png";
import mobileImg from "../../images/mobile_hero.png";
import "./HeroSection.scss";
import { openDemoForm } from "../../utils/global";

export const HeroSection = () => (
  <section className="hero">
    <div className="hero__bg">
      <img src={heroBg} />
    </div>
    <div className="site-section">
      <div className="content-grid">
        <img className="logo" src={logo} alt="Dial Up Logo" />
        <div className="text-section">
          <Text className="headline" type="h2" mobileType="h4">
            Event Apps for Everyone
          </Text>
          <div className="mobile-image-section">
            <img src={mobileImg} />
          </div>
          <Text className="subheadline" type="p+" mobileType="p">
            Dial Up is powering the next generation of event apps for organizers
            and attendees
          </Text>
          <Button buttonLabel="request demo" onClick={openDemoForm} />
        </div>
        <div className="image-section">
          <img src={heroImg} />
        </div>
      </div>
    </div>
  </section>
);
