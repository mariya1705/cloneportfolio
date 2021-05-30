import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import logo from "../assets/logo.svg"

import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500"
          data-aos-easing="ease-in-back"
          styleClass="footer-links"
        ></SocialLinks>
         <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> WebDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
