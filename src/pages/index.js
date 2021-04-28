import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RichText } from 'prismic-reactjs'
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HomeBanner from "../components/HomeBanner"
import ContactUs from "../components/ContactUs"
import Solutions from "../components/Solutions"
import Industries from "../components/Industries"
import Services from "../components/Services"
import LifeCycle from "../components/LifeCycle"
import About from "../components/About"
import Products from "../components/Products"
import GrindingAndCrushing from "../components/GrindingAndCrushing"
import ClientStories from "../components/ClientStories"
import ProductsBrief from "../components/ProductsBrief"

const IndexPage = ({data}) => {


  if (!data) return null
  const document = data

  console.log(document)

  const homeDescription = {
    description: document,
  }


  return (
      <React.StrictMode>
          <Layout>
              <main role="main">
                  <HomeBanner />
                  <ProductsBrief/>
                  <Solutions/>
                  <Industries/>
                  <Services/>
                  <LifeCycle/>
                  <Products/>
                  <GrindingAndCrushing/>
                  <ClientStories/> 
                  <About/>
                  <ContactUs/>
              </main>
          </Layout>
    
    </React.StrictMode>
  )


  }



export const query = graphql`
query MyQuery {
  allPrismicPost {
    edges {
      node {
        data {
          image_carousel {
            banner_image {
              url
            }
          }
        }
      }
    }
  }
}
`
export default IndexPage

