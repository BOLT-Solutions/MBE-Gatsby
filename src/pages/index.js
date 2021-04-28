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
          <script
        key="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
        defer
      />,
      <script
        key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
        defer
      />,
      <script
        key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
        defer
      />
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

