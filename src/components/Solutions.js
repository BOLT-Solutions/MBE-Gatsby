import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import solution1 from "../assets/img/Icons/solution1.png"
import solution2 from "../assets/img/Icons/solution2.png"
import solution3 from "../assets/img/Icons/solution3.png"

export default function Solutions() {
  const { allPrismicSolutions } = useStaticQuery(graphql`
    query Solutions {
      allPrismicSolutions {
        edges {
          node {
            data {
              first_content {
                text
              }
              section_one_title {
                text
              }
              section_two_content {
                text
              }
              section_two_title {
                text
              }
              solutions {
                solution_title {
                  text
                }
                solution_description {
                  text
                }
                solution_icon {
                  url
                  alt
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
  let first_content = allPrismicSolutions.edges[0].node.data.first_content.text
  let section_one_title =
    allPrismicSolutions.edges[0].node.data.section_one_title.text
  let section_two_content =
    allPrismicSolutions.edges[0].node.data.section_two_content.text
  let section_two_title =
    allPrismicSolutions.edges[0].node.data.section_two_title.text
  let subtitle = allPrismicSolutions.edges[0].node.data.subtitle.text
  let title = allPrismicSolutions.edges[0].node.data.title.text
  let content_solution1 = allPrismicSolutions.edges[0].node.data.solutions[0]
  let content_solution2 = allPrismicSolutions.edges[0].node.data.solutions[1]
  let content_solution3 = allPrismicSolutions.edges[0].node.data.solutions[2]
  let content_solution4 = allPrismicSolutions.edges[0].node.data.solutions[3]

  return (
    <>
      <section id="solutions" className="solutions">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="mainTitle center">{title}</div>
          </div>
          <div className="row">
            <div className="title ">{subtitle}</div>
          </div>
          <div className="row">
            <div className=" colm col-md-6 col-lg-4 d-flex align-items-stretch  mb-lg-0">
              <h4>{section_one_title}</h4>
              <p>{first_content} </p>
            </div>
            <div className=" colm col-md-6 col-lg-4 d-flex align-items-stretch  mb-lg-0">
              <a
                href="#industries"
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="box-title">
                  {content_solution1.solution_title.text}
                  <div className="icon">
                    <img src={solution1} />
                  </div>
                </h3>
                <p className="description">
                  {content_solution1.solution_description.text}
                </p>
              </a>
            </div>
            <div className="colm col-md-6 col-lg-4 d-flex align-items-stretch  mb-lg-0">
              <a
                href="#lifecycle"
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="box-title">
                  {content_solution3.solution_title.text}
                  <div className="icon">
                    <img src={solution3} />
                  </div>
                </h3>
                <p className="description">
                  {" "}
                  {content_solution3.solution_description.text}{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className=" colm col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <h4>{section_two_title}</h4>
              <p>{section_two_content}</p>
            </div>
            <div className=" colm col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <a
                href="#services"
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="box-title">
                  {content_solution2.solution_title.text}
                  <div className="icon">
                    <img src={solution2} />
                  </div>
                </h3>
                <p className="description">
                  {content_solution2.solution_description.text}
                </p>
              </a>
            </div>
            <div className="colm col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <a
                href="#lifecycle"
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="box-title">
                  {content_solution4.solution_title.text}
                  <div className="icon">
                    <img src={solution3} />
                  </div>
                </h3>
                <p className="description">
                  {" "}
                  {content_solution4.solution_description.text}{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
