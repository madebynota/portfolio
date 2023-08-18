import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Button,
  FeatureBlock,
  HeroSection,
  ImageTextBlock,
  Layout,
  SEO,
  Text,
} from "../components";
import featuresData from "../data/features";
import "../styles/PageStyles/apps.scss";

const IndexPage: React.FC<PageProps> = () => {

  return (
    <Layout hasHeader={false}>
      <HeroSection />
      <main className="apps-container">
        <ImageTextBlock
          label="WHAT WE DO"
          header="Festival Apps with Style"
          body="Offering mobile applications that engage fans and improve the festival experience with thoughtful design methodology and industry-standard development practices."
        />
        <ImageTextBlock
          label="WHO WE ARE"
          header="Creative Technologists Building for Creative Events"
          body="Sumn about the team, who we are, what we're into and what we like building or something?"
        />
        <ImageTextBlock
          label="HOW IT'S GOING"
          header="Demonstrated Success on  Stages Big and Small"
          body="More about the metrics, downloads, reviews, praise we've gotten"
        />
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
          <a
            href="https://forms.monday.com/forms/e4aecd01ca582fa2f7d386930fff44ad?r=use1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonLabel="request demo" onClick={() => null}/>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
