// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require("./src/schemas/post.json")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // Querying Pages with their IDs and content from prismic here.
//   const pages = await graphql(`
//     {
//         allPrismicPost {
//       edges {
//         node {
//           data {
//             post_content {
//               raw
//             }
//           }
//         }
//       }
//     }
//   }
//   `)

//   const postTemplate = path.resolve(
//     "./src/schemas/post.json"
//   )

//   // Loop and create pages for each post here
//   pages.data.allPrismicPost.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.uid}`,
//       component: postTemplate,
//       context: {
//         ...edge.node,
//       },
//     })
//   })
// }