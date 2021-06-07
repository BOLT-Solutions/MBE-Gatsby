import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

//Modal Imports . 
import HubspotForm from 'react-hubspot-form'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Process() {

  //Modal event handlers.  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { allPrismicProcess } = useStaticQuery(graphql`
    query Process {
      allPrismicProcess {
        edges {
          node {
            data {
              banner_image {
                url
              }
              description {
                text
              }
              process {
                description {
                  text
                }
                icon {
                  url
                }
                request_info_link {
                  url
                }
                title {
                  text
                }
              }
              subtitle {
                text
              }
              title {
                text
                text
              }
            }
          }
        }
      }
    }
  `)
  let data = allPrismicProcess.edges[0].node.data
  let banner_image = allPrismicProcess.edges[0].node.data.banner_image.url
  let description = allPrismicProcess.edges[0].node.data.description.text
  let subtitle = allPrismicProcess.edges[0].node.data.subtitle.text
  let title = allPrismicProcess.edges[0].node.data.title.text
  let content_Processes = allPrismicProcess.edges[0].node.data.process

  return (
    <>

      <section
        id="process"
        className="d-flex align-items-center hero2"
        style={{ background: `url(${banner_image})`,backgroundPosition:'center' }}
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
          <div className="row">
            {content_Processes.map(process => (
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box d-flex flex-column justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div>
                    <h4 className="title">
                      <a href="">{process.title.text} </a>
                    </h4>
                    <div className="icon">
                      <img src={process.icon.url} className="icoImage" />
                    </div>
                    <p className="description">
                      <span style={{fontSize:'13px'}}>{process.description.text}</span>
                    </p>
                  </div>

                  <button className="request mb-0" style={{ fontSize: "15px", border:'none' , background: 'transparent' ,textAlign:'left' }} onClick={handleShow}>
                    Request more Information
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
      <Modal show={show} onHide={handleClose} centered>
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
const mystyle = {
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
}
