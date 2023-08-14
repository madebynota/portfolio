import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Button,
  Text,
} from "../../components";
import "./HeroSection.scss";

export const HeroSection = () => (
    <section className="root">
      <div className="content-grid">
        <div>
          <Text className="headline" type="h2">
            Event Apps for Everyone
          </Text>
          <Text type="p+">
            Dial Up is powering the next generation of event apps for organizers and attendees
          </Text> 
          <Button buttonLabel="request demo" onClick={() => alert("Email us at hello@dialup.digital")} />
        </div>
        <div>
          <img />
        </div>
      </div>
    </section>
);
