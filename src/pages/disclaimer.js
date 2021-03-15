import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"



const DisclaimerPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            DISCLAIMER
          </h2>
          <figure className="kg-card kg-image-card kg-gallery-card">
            <Img
              fluid={data.disclaimer.childImageSharp.fluid}
              className="kg-image"
            />

          <figcaption>
          Unless otherwise indicated, all materials in this website are copyrighted. No part of this website, either text or images may be used for any purpose, unless explicit authorisation is given. Reproduction, modification, storage in a retrieval system or retransmission, in any form or by any means – electronic, mechanical or otherwise – is strictly prohibited without prior written permission.
          </figcaption></figure>
          
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
    disclaimer: file(
      relativePath: { eq: "disclaimer.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <DisclaimerPage location={props.location} data={data} {...props} />
    )}
  />
)
