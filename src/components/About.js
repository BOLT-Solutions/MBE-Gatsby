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
            fifth_image {
              url
            }
            first_image {
              url
            }
            fourth_image {
              url
            }
            fourth_paragraph {
              text
            }
            first_paragraph {
              text
            }
            second_image {
              url
            }
            second_paragraph {
              text
            }
            subtitle {
              text
            }
            third_image {
              url
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


    let first_paragraph = allPrismicAboutus.edges[0].node.data.first_paragraph.text
    let second_paragraph = allPrismicAboutus.edges[0].node.data.second_paragraph.text
    let third_paragraph = allPrismicAboutus.edges[0].node.data.third_paragraph.text
    let fourth_paragraph = allPrismicAboutus.edges[0].node.data.fourth_paragraph.text
    let first_image = allPrismicAboutus.edges[0].node.data.first_image.url
    let second_image = allPrismicAboutus.edges[0].node.data.second_image.url
    let third_image = allPrismicAboutus.edges[0].node.data.third_image.url
    let fourth_image = allPrismicAboutus.edges[0].node.data.fourth_image.url
    let fifth_image = allPrismicAboutus.edges[0].node.data.fifth_image.url
    let title = allPrismicAboutus.edges[0].node.data.title.text
    let subtitle = allPrismicAboutus.edges[0].node.data.subtitle.text

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
                            <div className="col-md-6 col-lg-2 ">
                                <img src={first_image} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-2 ">
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
                            </div>
                        </div>
                        <div className="row">
                            <div className="title center sub-title">
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