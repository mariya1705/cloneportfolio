import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"
import Title from "./Title"
import Quote from "../assets/quote.png"
const query = graphql`
  {
    allStrapiTestimonials {
      nodes {
        feedback
        name
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Testimonials = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiTestimonials: { nodes: testimonials },
  } = data
  return (
    <section className="section bg-grey">
      <div className="project-header" />

      <Title title="Testimonials" />
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="section-center testimonials-center"
      >
        {testimonials.map(testimonial => {
          const { id, name, feedback, image } = testimonial
          return (
            <article key={id} className="testimonial">
              <div className="testimonial-header">
                <Image
                  fluid={image.childImageSharp.fluid}
                  className="testimonial-image"
                />
              </div>
              <img src={Quote} alt="Logo" className="quote-image" />

              <p>{feedback}</p>
              <h4>{name}</h4>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
