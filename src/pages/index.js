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
import LifeCycle from "../components/LifeCycle"
import About from "../components/About"
import Products from "../components/Products"
import GrindingAndCrushing from "../components/GrindingAndCrushing"
import ClientStories from "../components/ClientStories"
import ProductsBrief from "../components/ProductsBrief"
import Services from "../components/Services"

const IndexPage = ({data}) => {


  if (!data) return null
  const document = data

  const homeDescription = {
    description: document,
  }


  return (
      <React.StrictMode>
          <Layout>
              <main role="main">
                  <HomeBanner />
                  <About/>
                  <Solutions/>
                  <Industries/>
                  <Services/>
                  <LifeCycle/>
                  <Products/>
                  <GrindingAndCrushing/>
                  {/* <ClientStories/>  */}
                  <ProductsBrief/>
                  <ContactUs/>
              </main>
          </Layout>
    </React.StrictMode>
  )


}



export const query = graphql`
query MyQuery {
  prismicHomeheader {
    data {
      image_carousel {
        banner_image {
          url
        }
        banner_title {
          text
        }
        read_more_link {
          url
        }
      }
    }
  }
}
`
export default IndexPage

