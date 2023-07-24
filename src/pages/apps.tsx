import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Button,
  ImageTextBlock,
  Layout,
  SEO,
  Text,
} from "../components";
import "../styles/global.scss";

const IndexPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <section style={{
        background: 'black',
        height: '700px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Text type="h5" mobileType="p" style={{width: '50%'}}>
          either a summer smash recap video or a video of the app running on iPhone video should be landscape but phone can be portrait
        </Text>
      </section>
      <main style={{padding: '64px 0'}}>
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
      <div className="demo-section">
        <Text className="demo-section__header" type="h2" mobileType="h6">Looking to build something amazing?  So are we.</Text>
        <Button buttonLabel="request demo" onClick={() => alert("Email us at hello@dialup.digital")} />
      </div>
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
