import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Aos from "aos"
import "aos/dist/aos.css"
const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <section className="contact-page">
          <article data-aos="zoom-in" className="contact-form">
            <h3>get in touch</h3>
            <form action="https://formspree.io/f/mayaooep" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                />
              </div>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </form>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default contact
