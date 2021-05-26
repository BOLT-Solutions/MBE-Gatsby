import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import solution1 from "../assets/img/Icons/solution1.png"
import solution2 from "../assets/img/Icons/solution2.png"
import solution3 from "../assets/img/Icons/solution3.png"
import services from "../assets/img/services.jpeg"
import { useEffect } from "react"

export default function Services() {
  const { allPrismicServices } = useStaticQuery(graphql`
    query Services {
      allPrismicServices {
        edges {
          node {
            data {
              banner_image {
                url
              }
              description {
                text
              }
              services {
                request_info_link {
                  url
                }
                see_more_link {
                  url
                }
                see_more_paragraph {
                  text
                }
                service_description {
                  text
                }
                service_icon {
                  url
                }
                service_title {
                  text
                }
              }
              subtitle {
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
  let data = allPrismicServices.edges[0].node.data
  let banner_image = allPrismicServices.edges[0].node.data.banner_image.url
  let description = allPrismicServices.edges[0].node.data.description.text

  let subtitle = allPrismicServices.edges[0].node.data.subtitle.text
  let title = allPrismicServices.edges[0].node.data.title.text
  let content_services = allPrismicServices.edges[0].node.data.services

  let seeMore = []
  const [flag, setFlag] = React.useState([])
  for (let i = 0; i < content_services.length; i++) {
    seeMore[i] = "false"
  }

  const seeMoreContent = i => {
    seeMore[i] = "true"
    setFlag(seeMore)
  }
  const seeLessContent = i => {
    seeMore[i] = "false"
    setFlag(seeMore)
  }

  return (
    <>
      <section
        id="services"
        className="d-flex align-items-center hero2"
        style={{ background: `url(${banner_image})` }}
      >
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            <span>{title}</span>
          </h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
      </section>

      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {content_services.map((content_service, i) => (
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box d-flex flex-column justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div>
                    <h4 className="title">
                      <a href="">{content_service.service_title.text} </a>
                    </h4>
                    <div className="icon">
                      <img
                        src={content_service.service_icon.url}
                        className="icoImage"
                      />
                    </div>
                    <p className="description">
                      <span>{content_service.service_description.text}</span>
                      {flag[i] == "true" && (
                        <p style={{ fontSize: "13px" }}><span>{content_service.see_more_paragraph.text}</span></p>
                      )}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="request mb-0" style={{ fontSize: "15px" }}>Request more Information</p>

                    {flag[i] != "true" && (
                      <p style={{ fontSize: "15px" }}
                        className="request mb-0"
                        onClick={() => {
                          seeMoreContent(i)
                        }}
                      >
                        See more
                      </p>
                    )}
                    {flag[i] == "true" && (
                      <p style={{ fontSize: "15px" }}
                        className="request mb-0"
                        onClick={() => {
                          seeLessContent(i)
                        }}
                      >
                        See less
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
