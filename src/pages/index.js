import * as React from "react"
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
import Process from "../components/Process"
import Footer from "../components/Footer"

const IndexPage = () => {

  return (
      <React.StrictMode>
          <Layout>
              <main role="main">
                  <HomeBanner />
                  <About/>
                  <Process/>
                  <Solutions/>
                  <Industries/>
                  <Services/>
                  <LifeCycle/>
                  <Products/>
                  <GrindingAndCrushing/>
                  {/* <ClientStories/>  */}
                  <ProductsBrief/>
                  <ContactUs/>
                  <Footer/>
              </main>
          </Layout>
    </React.StrictMode>
  )


}


export default IndexPage

