/* eslint-disable @typescript-eslint/camelcase */
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `@mrtelmo`,
    description: `Fuensanta R. Urien portfolio - Artist painter`,
    image: '/icon.png',
    title: `Fuensanta R. Urien`,
    titleTemplate: '%s | R. Urien Art',
    url: 'https://www.fuensantarurien.com/',
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
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL,
        contentTypes: ['obras', 'categorias'],
        singleTypes: ['expos', 'sobre-mi'],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fuensanta R. Urien - Artist painter`,
        short_name: `Fuensanta R. Urien`,
        start_url: `/`,
        description: `Fuensanta R. Urien portfolio - Artist painter`,
        lang: `es`,
        background_color: `#585b5a`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/icon.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
