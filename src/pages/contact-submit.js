import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

// for use of P5
import P5Wrapper from 'react-p5-wrapper';
import sketch04 from '../sketches/contact/sketch04';


const ContactSubmitPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h4>
            THANK YOU
          </h4>
          <h4>Your form has been sent. I'll get back to you shortly.</h4>
          </div>
          <div className="post-content page-template post-content-body center">

          <figure className="kg-embed-card">
          <P5Wrapper sketch={sketch04} />
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
      <ContactSubmitPage location={props.location} data={data} {...props} />
    )}
  />
)
