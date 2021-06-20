import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/style/footer.css"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

function Footer() {
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
        <div class="container">

        <div
          className="d-flex"
          style={{
            justifyContent: "space-around",
         
            marginTop: "3%",
          }}
        >
          <div className=" col-md-5 col-12 d-flex justify-content-around">
            <img
              src={mbe_icon}
              alt="mbe"
              width="100"
              height="100"
              style={{ width: "102px" }}
            />
            <p
              style={{
              
                height: " 250px",
                fontSize: "12px",
                color: "#F7F8F8",
                fontWeight: "bold",
                lineHeight: "1.8",
                paddingLeft: "10px"
              }}
            >
              {description}
            </p>
          </div>

          <div
            className="col-12 col-md-2"
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
              
            </ul>
          </div>

          <div
            className="col-md-4 col-12"
            style={{ color: "#F7F8F8", fontWeight: "bold", fontSize: "20px" }}
          >
            <div className="container-fluid d-inline-flex">
              {/* <img src={address_icon} alt="Girl in a jacket" width="75" height="75"  style = {{marginRight:'7%'}}/> */}
              <i
                class="bx bxs-map"
                style={{
                  color: "#ffffff",
                  fontSize: "45px",
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
                  fontSize: "45px",
                  paddingRight: "10px",
                }}
              ></i>

              <h5>{inquiry_mail}</h5>
            </div>

            <div className=" container-fluid d-inline-flex">
              {/* <img src={phone_numbers_icon} alt="Girl in a jacket" width="75" height="75" style = {{marginRight:'7%'}} /> */}
              <i
                class="bx bxs-phone"
                style={{
                  color: "#ffffff",
                  fontSize: "45px",
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
    </>
  )
}

export default withPrismicPreview(Footer)