import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/SEO"
import Aos from "aos"
import "aos/dist/aos.css"
const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <section className="projects-page">
          <Projects
            data-aos="fade-down"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1500"
            data-aos-easing="ease-in-back"
            projects={projects}
            title="all-projects"
            className="project-page"
          />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: strapiId, order: DESC }) {
      nodes {
        github
        id
        description
        title
        url
        slug
        image {
          childImageSharp {
            fluid {
              src
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

export default ProjectsPage
