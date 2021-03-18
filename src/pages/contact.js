import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact-form"

import "../utils/normalize.css"
import "../utils/css/screen.css"

// for use of P5
import P5Wrapper from 'react-p5-wrapper';
import sketch03 from '../sketches/contact/sketch03';


const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Get in touch
          </h1>
          <h2>I'd be happy to hear from you. <br/>Drop me a note or write an email to <a className="headerLink" href="mailto:info@lrvc.ch">info@lrvc.ch</a></h2>
          <ContactForm></ContactForm>
          <figure className="kg-embed-card">
          <P5Wrapper sketch={sketch03} />
          </figure>


    </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
