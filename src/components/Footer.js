import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/style/footer.css"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function Footer() {

  //Modal event handlers.  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { allPrismicFooter } = useStaticQuery(graphql`
    query footerQuery {
      allPrismicFooter {
        edges {
          node {
            data {
              address {
                text
              }
              address_icon {
                url
              }
              description {
                text
              }
              inquiry_mail {
                text
              }
              inquiry_mail_icon {
                url
              }
              mbe_icon {
                url
              }
              phone_numbers {
                phone_number {
                  text
                }
              }
              phone_numbers_icon {
                url
              }
            }
          }
        }
      }
    }
  `)

  let data = allPrismicFooter.edges[0].node.data
  let inquiry_mail_icon =
    allPrismicFooter.edges[0].node.data.inquiry_mail_icon.url
  let inquiry_mail = allPrismicFooter.edges[0].node.data.inquiry_mail.text
  let address_icon = allPrismicFooter.edges[0].node.data.address_icon.url
  let address = allPrismicFooter.edges[0].node.data.address.text
  let phone_numbers_icon =
    allPrismicFooter.edges[0].node.data.phone_numbers_icon.url
  let phone_numbers = allPrismicFooter.edges[0].node.data.phone_numbers
  let mbe_icon = allPrismicFooter.edges[0].node.data.mbe_icon.url
  let description = allPrismicFooter.edges[0].node.data.description.text

  return (
    <>
      <div className=" d-flex mainContainer">
              <div class="container-md">

        <div
          className="d-flex"
          style={{
            justifyContent: "space-around",
         
            marginTop: "3%",
          }}
        >
          <div className=" col-lg-5 col-12 d-flex justify-content-around">
            <img
              src={mbe_icon}
              alt="mbe"
              width="100"
              height="100"
              style={{ width: "102px" }}
            />
            <p className="py-3"
              style={{
              
                fontSize: "12px",
                color: "#F7F8F8",
                fontWeight: "bold",
                lineHeight: "1.8",
                paddingLeft: "10px",

              }}
            >
              {description}
            </p>
          </div>

          <div
            className="col-3 col-lg-2 p-0"
            style={{ color: "#F7F8F8", fontWeight: "bold", fontSize: "14px" }}
          >
            <ul className="list-unstyled">
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#testimonials">Client stories</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
              <li>
                <a  onClick={handleShow} >Imprint</a>
              </li>
              <li>
                <a href="PrivacyPolicyPage" >Privacy Policy</a>
              </li>
              
            </ul>
          </div>

          <div
            className="col-lg-4 col-9 p-0"
            style={{ color: "#F7F8F8", fontWeight: "bold", fontSize: "20px" }}
          >
            <div className="container-fluid d-inline-flex">
              {/* <img src={address_icon} alt="Girl in a jacket" width="75" height="75"  style = {{marginRight:'7%'}}/> */}
              <i
                class="bx bxs-map"
                style={{
                  color: "#ffffff",
                 
                  paddingRight: "10px",
                }}
              ></i>

              <h5>{address}</h5>
            </div>

            <div className="container-fluid d-inline-flex">
              {/* <img src={inquiry_mail_icon} alt="Girl in a jacket" width="75" height="75" style = {{marginRight:'7%'}} /> */}
              <i
                class="bx bxs-envelope"
                style={{
                  color: "#ffffff",
                
                  paddingRight: "10px",
                }}
              ></i>

              <h5 ><a href = {`mailto: ${inquiry_mail}`}>{inquiry_mail}</a></h5>
            </div>

            <div className=" container-fluid d-inline-flex">
              {/* <img src={phone_numbers_icon} alt="Girl in a jacket" width="75" height="75" style = {{marginRight:'7%'}} /> */}
              <i
                class="bx bxs-phone"
                style={{
                  color: "#ffffff",
                
                  paddingRight: "10px",
                }}
              ></i>
              <div>
                {phone_numbers.map(phone => (
                  <h5>{phone.phone_number.text}</h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          
          <div className="container d-flex align-items-center" style={{width: "100%"}}>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <p style={{fontSize:"15px"}} >MBE Coal & Minerals Technology Holding GmbH</p>
                <p style={{fontSize:"15px"}}>Gottfried-Hagen-Straße 20</p>
                <p style={{fontSize:"15px"}}>D – 51105 Köln
                    Telephone +49 / (0) 221 / 99892 – 700
                    Telefax +49 / (0) 221 / 99892 – 709
                    Internet www.mbe-cmt.com
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <p style={{fontSize:"15px"}}>Principal Place of Business: Köln</p>
                <p style={{fontSize:"15px"}}>Commercial Register Köln: HRB 76786</p>
                <p style={{fontSize:"15px"}}>VAT-Id.-No. DE 285 831 681</p>
                <p style={{fontSize:"15px"}}>Tax No. 218/5726/1596 Managing Director: Dr.-Ing. Ernst Wolf</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <p style={{fontSize:"15px"}}>Bank account: Commerzbank AG</p>
                <p style={{fontSize:"15px"}}>Account No. 502553100
                    IBAN: DE26 3704 0044 0502 5531 00
                    BIC/SWIFT-Code: COBADEFFXXX
                    Member of VDMA Germany</p>
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>



    </>
  )
}

export default withPrismicPreview(Footer)