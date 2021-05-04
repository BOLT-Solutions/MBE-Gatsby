import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../components/style/footer.css'

export default function Footer() {
  const {allPrismicFooter} = useStaticQuery(graphql`
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

let data =allPrismicFooter.edges[0].node.data
let inquiry_mail_icon =allPrismicFooter.edges[0].node.data.inquiry_mail_icon.url
let inquiry_mail =allPrismicFooter.edges[0].node.data.inquiry_mail.text
let address_icon =allPrismicFooter.edges[0].node.data.address_icon.url
let address =allPrismicFooter.edges[0].node.data.address.text
let phone_numbers_icon =allPrismicFooter.edges[0].node.data.phone_numbers_icon.url
let phone_numbers =allPrismicFooter.edges[0].node.data.phone_numbers
let mbe_icon =allPrismicFooter.edges[0].node.data.mbe_icon.url
let description  =allPrismicFooter.edges[0].node.data.description.text


// console.log('******Footer*******')
// console.log(inquiry_mail_icon)
// console.log(inquiry_mail)
// console.log(address_icon)
// console.log(address)
// console.log(phone_numbers_icon)
// console.log(phone_numbers)
// console.log(mbe_icon)
// console.log(description)



   return (
   <>
        <div className="container-fluid d-flex mainContainer" >

          <div className="row" style={{ justifyContent: 'space-around', padding:' 15px' , marginTop: '3%' }}>

            <div className="col-5 d-inline-flex justify-content-around" >
               <img src={mbe_icon} alt="Girl in a jacket"  width='100' height = '100'  style={{ marginRight: '5%' , marginTop: '5%'}}/>
               <p style={{ width: ' 65%' , height: ' 250px', fontSize: '12px' , color: '#F7F8F8' , fontWeight: 'bold'}}>
               {description}
              </p>
            </div>

            <div className="col-1" style={{ color: '#F7F8F8' , fontWeight: 'bold' , fontSize: '14px'}}>
              <ul className="list-unstyled" >
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-4" style={{ color: '#F7F8F8' , fontWeight: 'bold' , fontSize : '20px'}}>
              
              <div className="container-fluid d-inline-flex">
                <img src={address_icon} alt="Girl in a jacket" width="75" height="75"  style = {{marginRight:'7%'}}/>
                <h5>{address}</h5>
              </div>

              <div className="container-fluid d-inline-flex"> 
                <img src={inquiry_mail_icon} alt="Girl in a jacket" width="75" height="75" style = {{marginRight:'7%'}} />
                <h5>{inquiry_mail}</h5>
              </div>

              <div className=" container-fluid d-inline-flex"> 
                <img src={phone_numbers_icon} alt="Girl in a jacket" width="75" height="75" style = {{marginRight:'7%'}} />
                <div >

                {phone_numbers.map(phone => (
                                    <h5>{phone.phone_number.text}</h5>
                                    ))
                                    }

                

                </div>
              </div>

            </div>

          </div>

        </div>
   </>

)}