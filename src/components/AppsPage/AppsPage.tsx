import React from "react";
import type { PageProps } from "gatsby";
import {
  AppsPageSection,
  Button,
  FeatureBlock,
  HeroSection,
  ImageTextBlock,
  Layout,
  Text,
} from "../../components";
import { appsPageData, featuresData } from "../../data";
import "../../styles/PageStyles/apps.scss";
import { openDemoForm } from "../../utils/global";

export const AppsPage: React.FC<PageProps> = () => {
  return (
    <Layout hasHeader={false}>
      <HeroSection />
      <div className="apps-container">
        {appsPageData.map((block) => (
          <ImageTextBlock
            key={block.label}
            label={block.label}
            header={block.header}
            body={block.body}
            image={block.image}
          />
        ))}
      </div>
      <AppsPageSection className="feature-section">
        <Text className="feature-section__header" type="h2" mobileType="h5">
          Enhance your event experience
        </Text>
        {featuresData.map((feature) => (
          <FeatureBlock
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
            key={feature.title}
          />
        ))}
      </AppsPageSection>
      <div className="demo-section">
        <div className="site-section">
          <Text className="demo-section__header" type="h2" mobileType="h6">
            Looking to build something amazing? So are we.
          </Text>
          <Button buttonLabel="request demo" onClick={openDemoForm} />
        </div>
      </div>
    </Layout>
  );
};
