import React, { useEffect } from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"
import { FaEnvelopeOpenText, FaHandshake } from "react-icons/fa"

import services from "../constants/services"
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <section className="section bg-grey">
      <div className="project-header" />
      <Title title="My Skills" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4 className="service-title">{title}</h4>
              <div className="underline"></div>
              <div className="text1">
                <div className="text-content">
                  <p>{text}</p>
                </div>
              </div>
              <svg
                class="chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 35"
                width="30"
              >
                <path
                  d="M5 30L50 5l45 25"
                  fill="none"
                  stroke="#000"
                  stroke-width="5"
                />
              </svg>
            </article>
          )
        })}
      </div>

      <div className="hire-me">
        {/* card */}
        <div data-aos="fade-up" className="hire-card">
          <Link to="/contact">
            <FaEnvelopeOpenText
              data-aos="zoom-in"
              size="4.5rem"
              color="#ffdb58"
              className="envelope-link"
            />
          </Link>

          {/* cardinfo */}
          <div class="hire-info">
            <h2>Starting a project?</h2>
            <p>Get an estimate price</p>
          </div>
          <Link to="/contact">
            <div className="hire-btn-side">
              <div className="hire-btn">
                <FaHandshake size="3rem" color="#ffdb58" />
                <div class="hire-info">
                  <h5>Hire Me!</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
