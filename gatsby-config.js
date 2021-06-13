module.exports = {
  pathPrefix: `/MBE-Gatsby`,
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
                  crushingandgrinding: require("./src/schemas/crushingandgrinding.json"),
                  industries: require("./src/schemas/industries.json"),
                  lifecycle: require("./src/schemas/lifecycle.json"),
                  process: require("./src/schemas/process.json"),
                  products: require("./src/schemas/products.json"),
                  productsbreif: require("./src/schemas/productsbreif.json"),
                  seperation: require("./src/schemas/seperation.json"),
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

    // {
    //   resolve: 'gatsby-plugin-prismic-previews',
    //   options: {
    //     // The name of your Prismic repository. This is required.
    //     // Example: 'your-repository-name' if your prismic.io address
    //     // is 'your-repository-name.prismic.io'.
    //     //
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,

    //     // An API access token to your Prismic repository. This is optional.
    //     // You can generate an access token in the "API & Security" section of
    //     // your repository settings. Setting a "Callback URL" is not necessary.
    //     // The token will be listed under "Permanent access tokens".
    //     //
    //     // If you choose to keep your access token private, do not provide this
    //     // plugin option. Editors will be prompted to enter an access token
    //     // during a preview session instead, if required.
    //     //
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,

    //     // Determines the type of Prismic Toolbar that is added to your site.
    //     // This defaults to "new". See the "Prismic Toolbar" section of the
    //     // plugin documentation for more details.
    //     //
    //     // Note: The toolbar is required for previews to function and cannot be
    //     // disabled.
    //     toolbar: 'new',
    //   },
    // },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}
