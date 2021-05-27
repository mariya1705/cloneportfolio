import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  description,
  title,
  github,
  url,
  stack,
  image,
  index,
  slug,
}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <Link to={url} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
