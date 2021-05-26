module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
          options: {
              repositoryName: `mbecontent`,
              accessToken: `MC5ZSWdEMHhBQUFDTUFNRVFu.77-9Ce-_vT7vv70q77-9Ee-_vW3vv73vv73vv73vv73vv70sZBHvv73vv70T77-9Ue-_vXjvv71dce-_ve-_vWB0`,
              linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
              schemas: {
                  index: require("./src/schemas/homeheader.json"),
                  classification: require("./src/schemas/classification.json"),
                  clientstories: require("./src/schemas/clientstories.json"),
                  contactus: require("./src/schemas/contactus.json"),
                  curshingandgrinding: require("./src/schemas/crushingandgrinding.json"),
                  industries: require("./src/schemas/industries.json"),
                  lifecycle: require("./src/schemas/lifecycle.json"),
                  process: require("./src/schemas/process.json"),
                  products: require("./src/schemas/products.json"),
                  productsbreif: require("./src/schemas/productsbreif.json"),
                  separation: require("./src/schemas/separation.json"),
                  services: require("./src/schemas/services.json"),
                  solutions: require("./src/schemas/solutions.json"),
                  footer: require("./src/schemas/footer.json"),
              },
          },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "19589739",
          respectDNT: true,
          productionOnly: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}
