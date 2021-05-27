import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />

      <Layout>
        <Hero />
        <Services />
        <Projects title="All Creative Works" showLink projects={projects} />

        <Testimonials />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        slug
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
