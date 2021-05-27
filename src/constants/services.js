import React from "react"
import { FaCode, FaSketch, FaRocket, FaFillDrip } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Writing well designed, testable, efficient code by using best software development practices. Integrating data from various back-end services.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Designing and building the interface, navigation and aesthetic of websites for businesses and clients`,
  },
  {
    id: 3,
    icon: <FaRocket className="service-icon" />,
    title: "seo optimisation",
    text: `Increasing the quantity and quality of traffic to your website through organic search engine results.`,
  },
  {
    id: 4,
    icon: <FaFillDrip className="service-icon" />,
    title: "UI/UX design",
    text: ` Deliver an outstanding user experience providing an exceptional and intuitive application design.`,
  },
]
