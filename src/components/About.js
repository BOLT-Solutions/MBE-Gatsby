import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import wallpaper1 from '../assets/img/mbe-wallpaper-2.png';
import wallpaper2 from '../assets/img/mbe-wallpaper-3.png';
import { useStaticQuery, graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

 function About() {
  const {allPrismicAboutus} = useStaticQuery(graphql`
  query AboutUsQuery {
    allPrismicAboutus {
      edges {
        node {
          data {
            first_image {
              url
            }
            first_paragraph {
              text
            }
            fourth_paragraph {
              text
            }
            second_paragraph {
              text
            }
            subtitle {
              text
            }
            third_paragraph {
              text
            }
            title {
              text
            }
          }
        }
      }
    }
  }
        `)

let first_paragraph = allPrismicAboutus.edges[0].node.data.first_paragraph[0].text
let second_paragraph = allPrismicAboutus.edges[0].node.data.second_paragraph[0].text
let third_paragraph = allPrismicAboutus.edges[0].node.data.third_paragraph[0].text
let fourth_paragraph = allPrismicAboutus.edges[0].node.data.fourth_paragraph[0].text
let first_image = allPrismicAboutus.edges[0].node.data.first_image.url
let title = allPrismicAboutus.edges[0].node.data.title[0].text
let subtitle = allPrismicAboutus.edges[0].node.data.subtitle[0].text

   return (
   <>
       <section id="about-us" className="about-us-sec">
                    <div className="container about-us">
                        <div className="row">
                            <div className="title center">
                            {title}
                    </div>
                        </div>
                        <div className="row images" style={{justifyContent: 'space-around'}}>
                            <div className="col-md-12 col-lg-12 ">
                                <img src={first_image}  style={{ maxWidth: "100%", maxHeight: "100%" ,objectFit:"contain" }} />
                            </div>
                            {/* <div className="col-md-6 col-lg-2 ">
                                <img src={second_image} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-2 ">
                                <img src={third_image} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-2 ">
                                <img src={fourth_image} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-2 ">
                                <img src={fifth_image} className="responsive" />
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="title center sub-title" style={{marginTop: "15px"}}>
                                {subtitle}
                    </div>
                        </div>
                        <div className="row">

                            <div className="col-sm">
                                <p>
                                    {first_paragraph}
                                </p>
                                <br />
                                <p>
                                    {second_paragraph}
                        </p>
                            </div>
                            <div className="col-sm">
                                <p>{third_paragraph}</p>
                                <br />
                                <p>
                                    {fourth_paragraph}
                        </p>
                            </div>
                        </div>

                    </div>
                </section>
   </>

)}

export default withPrismicPreview(About)