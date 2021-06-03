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
import ClientStories from "../components/ClientStories"
import ProductsBrief from "../components/ProductsBrief"
import Services from "../components/Services"
import Process from "../components/Process"
import Footer from "../components/Footer"
import $ from "jquery"
import { useEffect } from "react"
import Modal from "react-modal";


const IndexPage = () => {

  return (
      <React.StrictMode>
          <Layout>
              <main role="main">
                  <HomeBanner />
                  <About/>
                  <Process/>
                  <Solutions/>
                  <Industries id="industries"/>
                  <Services/>
                  <LifeCycle/>
                  <Products/>

                  <ProductsBrief/>
                  <ContactUs/>
                  <Footer/>
              </main>
          </Layout>
    </React.StrictMode>
  )
}


export default IndexPage

