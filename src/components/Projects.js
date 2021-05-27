import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section section-projects">
      <div className="project-header2" />
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link data-aos="fade-up" to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-delay="1500"
        data-aos-duration="5000"
        className="work-Bg"
      ></div>
    </section>
  )
}

export default Projects
