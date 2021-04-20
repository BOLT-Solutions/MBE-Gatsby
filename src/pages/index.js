import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RichText } from 'prismic-reactjs'
import SEO from "../components/seo"
import { graphql } from 'gatsby'





const IndexPage = ({data}) => {


  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data.body[0].items[0].description

  console.log(document)

  const homeDescription = {
    description: document,
  }


  return (
    <React.StrictMode>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{RichText.asText(homeDescription.description)}</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </React.StrictMode>
  )


  }



  export const query = graphql`
    query MyQuery {
      allPrismicHomepage {
        edges {
          node {
            data {
              body {
                items {
                  description {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
`


export default IndexPage
