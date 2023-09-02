import React from "react";
import type { PageProps } from "gatsby";
import {
  Button,
  FeatureBlock,
  HeroSection,
  ImageTextBlock,
  Layout,
  SEO,
  Text,
} from "../../components";
import { appsPageData, featuresData } from "../../data";
import "../../styles/PageStyles/apps.scss";
import { openDemoForm } from "../../utils/global";

export const AppsPage: React.FC<PageProps> = () => {

  return (
    <Layout hasHeader={false}>
      <HeroSection />
      <main className="apps-container">
        { appsPageData.map(block => (
          <ImageTextBlock
            key={block.label}
            label={block.label}
            header={block.header}
            body={block.body}
          />
        ))}
      </main>
      <div className="feature-section">
        <div className="site-section">
          <Text
            className="feature-section__header"
            type="h3"
            mobileType="h6"
          >Enhance your event experience</Text>
          <div className="feature-section__grid">
            {featuresData.map(feature => (
              <FeatureBlock
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description}
                key={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="demo-section">
        <div className="site-section">
          <Text
            className="demo-section__header"
            type="h2"
            mobileType="h6"
          >Looking to build something amazing?  So are we.</Text>
          <Button buttonLabel="request demo" onClick={openDemoForm}/>
        </div>
      </div>
    </Layout>
  );
}
