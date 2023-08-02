/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `This is WebDev Portfolio Site built with Gatsby and Strapi`,
    titleTemplate: `%s | Webdev Portfolio`,
    url: `https://www.mariyacodes.site/`,
    twitterUsername: `@Mariya`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://devrayhan.onrender.com`,
        queryLimit: 10000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,

        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`projects`],
        
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },
  ],
}
