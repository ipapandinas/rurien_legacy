/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    author: `@mrtelmo`,
    description: `Mister Telmo WEB Starter.`,
    image: '/icon.png',
    title: `Mister Telmo`,
    titleTemplate: '%s | Mister Telmo',
    url: 'https://www.mrtelmo.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mister Telmo Web Invasion Exp.`,
        short_name: `Mister Telmo`,
        start_url: `/`,
        description: `The application does cool things and makes your life better.`,
        lang: `fr`,
        background_color: `#f9d649`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
