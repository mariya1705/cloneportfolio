import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
const Title = ({ title }) => {
  return (
    <div className="title">
      <h2 data-aos="fade-up" className="title">
        {title}
      </h2>
    </div>
  )
}

export default Title
