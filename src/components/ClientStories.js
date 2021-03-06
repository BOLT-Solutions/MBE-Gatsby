import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"
import loadable from '@loadable/component'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// note: you don't need the whole path to node_modules.. just the package name
const onInit = () => {

        // const OwlCarousel =React.lazy("react-owl-carousel") 
        if (typeof window !== undefined) {
           const OwlCarousel=  loadable(() => import('react-owl-carousel'));
          loadable(() => import('owl.carousel/dist/assets/owl.carousel.css'));
          loadable(() => import('owl.carousel/dist/assets/owl.theme.default.css'));
          
        return (
            <section id="testimonials" className="testimonials">
            <div className="container" data-aos="zoom-in">
              <OwlCarousel
                className="owl-carousel owl-theme testimonials-carousel"
                nav="false"
                items="1"
                autoplay
                loop
                dots
              >
                <div className="testimonial-item">
                  <h3>JSC Polyus Krasnoyarsk, Russia </h3>
                  <h4>Pneuflot ® </h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i> This
                    is state-of-the-art equipment which embodies the latest
                    achievements in science and technology in its field (pneumatic
                    flotation). All components and units of the machine are
                    manufactured with high-quality materials and ...[Pneuflot ®]
                    fulfills its tasks and objectives in full under laboratory
                    conditions.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
    
                <div className="testimonial-item ">
                  <h3>Rana Gruber, Norway</h3>
                  <h4>Jones ®</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i> The
                    separators [Jones ®] have been in constant operation for 29
                    years, and are in excellent mechanical condition. The machines
                    are robust and well built and they are the heart of our hematite
                    concentration plant. The separators are optimized to fit our
                    ore, and have the flexibility to cope with variations in the
                    mineral composition.{" "}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
    
                <div className="testimonial-item">
                  <h3>Silmeta GmbH & Co KG, Germany </h3>
                  <h4>PALLA ®</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i> “The
                    new [PALLA ®] mill replaced an old PALLA ® mill at our site,
                    which was operating for more than 30 years. The machines are
                    robust, reliable, and easy to operate. The mill performs fine
                    grinding as well as homogenizing at the same time, which is a
                    requirement in our process.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </section>
        )}
        else {
            return <></>
        }

}
const ClientStories = () => {

  
return<>
{
    typeof window !== undefined &&
          onInit()
       
}
</>
}

export default withPrismicPreview(ClientStories)
