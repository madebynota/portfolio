import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const isAppsSite = process.env.GATSBY_INDEX_PAGE_MODE == "apps";

const notaMetadata = {
  title: "Nota - Event Apps",
  siteUrl: "https://madebynota.com",
  image: "/nota-embed-image.png",
  description: 'Nota is powering the next generation of event apps for organizers and attendees',
  ogImageWidth: 600,
  ogImageHeight: 600,
  twitterDomain: 'madebynota.com',
};

const dudMetadata = {
  title: "Dial Up Digital",
  siteUrl: "https://dialup.digital",
  image: "/dud-embed-image.png",
  description: 'We create unique digital experiences at the intersection of music, technology, and culture.',
  ogImageWidth: 600,
  ogImageHeight: 600,
  twitterDomain: 'dialup.digital',
};

const config: GatsbyConfig = {
  siteMetadata: isAppsSite ? notaMetadata : dudMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: isAppsSite ? "Nota" : "DIAL UP DIGITAL",
        short_name: isAppsSite ? "Nota" : "DIAL UP DIGITAL",
        start_url: ".",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: 'minimal-ui',
        icon: isAppsSite ? "src/images/nota-favicon.png" : "src/images/dud-favicon.png", // This path is relative to the root of the site.
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
          isAppsSite ? "G-FLLR54HQWF" : "G-ZV80GEKZHW", // Google Analytics / GA
        ],
      },
    },
  ]
};

export default config;
