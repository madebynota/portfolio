import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DIAL UP DIGITAL`,
    siteUrl: `https://dialup.digital`,
    image: "/embed-image.png",
    description: 'We create unique digital experiences at the intersection of music, technology, and culture.',
    ogImageWidth: 600,
    ogImageHeight: 600,
    twitterDomain: 'dialup.digital',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DIAL UP DIGITAL",
        short_name: "DIAL UP DIGITAL",
        start_url: ".",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: 'minimal-ui',
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_INDEX_PAGE_MODE == "company" ? "G-ZV80GEKZHW" : "G-FLLR54HQWF", // Google Analytics / GA
        ],
      },
    },
  ]
};

export default config;
