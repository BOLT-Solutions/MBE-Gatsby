import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import logo from '../assets/img/logo (2).png';
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

 function ProductsBrief() {

  const {allPrismicProductsbreif} = useStaticQuery(graphql`
  query productsBreif {
    allPrismicProductsbreif {
      edges {
        node {
          data {
            first_paragraph {
              text
            }
            second_paragraph {
              text
            }
            third_paragraph {
              text
            }
          }
        }
      }
    }
  }
  `)

  let first_paragraph = allPrismicProductsbreif.edges[0].node.data.first_paragraph.text
  let second_paragraph = allPrismicProductsbreif.edges[0].node.data.second_paragraph.text
  let third_paragraph = allPrismicProductsbreif.edges[0].node.data.third_paragraph.text

    return (
    <>
          <section id="graph" className="graph">
                      <div className="container" data-aos="zoom-out" data-aos-delay="100">
                          <div className="row">
                              <div className="col-md-6 left-txt" data-aos="zoom-out">
                                  <img src={logo} className="logo-graph" />
                                  <p>
                                  {first_paragraph}
                          </p>
                              </div>
                              <div className="col-md-6 right-txt" data-aos="zoom-out">
                                  <div className="top-right-txt">
                                  {second_paragraph}
                          </div>
                                  <div className="bottom-right-txt" data-aos="zoom-out">
                                  {third_paragraph}
                          </div>
                              </div>
                          </div>
                      </div>
                  </section>
    </>
  )}

  export default withPrismicPreview(ProductsBrief)
