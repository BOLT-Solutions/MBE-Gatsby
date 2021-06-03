import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import solution1 from "../assets/img/Icons/solution1.png"
import solution2 from "../assets/img/Icons/solution2.png"
import solution3 from "../assets/img/Icons/solution3.png"
import AdobeStockPreview2 from "../assets/img/AdobeStock_383254182_Preview.jpeg"


//Modal Imports . 
import HubspotForm from 'react-hubspot-form'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function LifeCycle() {

  //Modal event handlers.  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { allPrismicLifecycle } = useStaticQuery(graphql`
    query Lifecycle {
      allPrismicLifecycle {
        edges {
          node {
            data {
              banner_image {
                url
              }
              description {
                text
              }
              subtitle {
                text
              }
              support_options {
                request_info_link {
                  url
                }
                see_more_link {
                  url
                }
                see_more_paragraph {
                  text
                }
                support_option_description {
                  text
                }
                support_option_icon {
                  url
                }
                support_option_title {
                  text
                }
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

  let banner_image = allPrismicLifecycle.edges[0].node.data.banner_image.url
  let description = allPrismicLifecycle.edges[0].node.data.description.text
  let subtitle = allPrismicLifecycle.edges[0].node.data.subtitle.text
  let title = allPrismicLifecycle.edges[0].node.data.title.text
  let content_cycle = allPrismicLifecycle.edges[0].node.data.support_options

  let seeMore = []
  const [flag, setFlag] = React.useState([])
  for (let i = 0; i < content_cycle.length; i++) {
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
        id="lifecycle"
        className="d-flex align-items-center hero2"
        style={{ background: `url(${banner_image})`,backgroundPosition:'center'  }}
      >
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1> {title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
      </section>
      <div className="container container-responsive" data-aos="zoom-out" data-aos-delay="100">
          <h1> {subtitle}</h1>
          <p>{description}</p>
        </div>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-baseline">
            {content_cycle.map((cycle, i) => (
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box  d-flex flex-column justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div>
                    <h4 className="title">
                      <a href="">{cycle.support_option_title.text} </a>
                    </h4>
                    <div className="icon">
                      <img
                        src={cycle.support_option_icon.url}
                        className="icoImage"
                      />
                    </div>
                    <p className="description">
                      <span>{cycle.support_option_description.text}</span>
                      {flag[i] == "true" && (
                        <p style={{ lineHeight: "1.5", fontSize: "13px"  }}>
                         <span> {cycle.see_more_paragraph.text}</span>
                        </p>
                      )}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="request mb-0"  onClick={handleShow}  style={{ fontSize: "15px", border:'none' , background: 'transparent' ,textAlign:'left' }}>Request more Information</p>

                    {flag[i] != "true" && (
                      <p  style={{ fontSize: "15px" }}
                        className="request mb-0"
                        onClick={() => {
                          seeMoreContent(i)
                        }}
                      >
                        See more
                      </p>
                    )}
                    {flag[i] == "true" && (
                      <p  style={{ fontSize: "15px" }}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <HubspotForm
                                  portalId='19589739'
                                  formId='04f6756d-7711-4612-9e80-49acb72fe4d2'
                                  onSubmit={() => console.log('Submit!')}
                                  onReady={(form) => console.log('Form ready!')}
                                  loading={<div>Loading...</div>}
                                  />
        </Modal.Body>
      </Modal>



    </>
  )
}
