import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/SEO"
import aos from "aos"
import "aos/dist/aos.css"
const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  return (
    <>
      <Seo title="About" />
      <Layout>
        <section className="about-page">
          <div data-aos="fade-up" className="section-center about-center">
            <img src={image.publicURL} alt={title} className="about-img-svg" />
            <article className="about-text">
              <Title title={title} />
              <p>{info}</p>
              <div className="about-stack">
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      stack {
        id
        title
      }
      info
      image {
        publicURL
      }
    }
  }
`

export default About
