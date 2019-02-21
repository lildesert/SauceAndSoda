require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'Sauce And Soda',
    description: 'Recettes, astuces et inspirations autour des cocktails, du barbecue et de la cuisine',
    author: '@lildesert',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${ __dirname }/src/`,
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sauce And Soda',
        short_name: 'SauceAndSoda',
        start_url: '/',
        background_color: '#171717',
        theme_color: '#F5F5F5',
        display: 'standalone',
        icon: 'src/images/favicon-32x32.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
