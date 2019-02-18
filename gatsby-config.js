require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'Sauce And Soda',
    description: '',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/content/blog`,
        name: `blog`,
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
