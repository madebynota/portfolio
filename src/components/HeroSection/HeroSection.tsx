import React from "react";
import {
  Button,
  Text,
} from "../../components";
import heroImg from "../../images/hero-img-placeholder.png";
import "./HeroSection.scss";

export const HeroSection = () => (
    <section className="root">
      <div className="site-section">
        <div className="content-grid">
          <div className="text-section">
            <Text className="headline" type="h2">
              Event Apps for Everyone
            </Text>
            <Text type="p+">
              Dial Up is powering the next generation of event apps for organizers and attendees
            </Text> 
            <Button buttonLabel="request demo" onClick={() => alert("Email us at hello@dialup.digital")} />
          </div>
          <div className="image-section">
            <img src={heroImg} />
          </div>
        </div>
      </div>
    </section>
);
