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
      <SEO title="Copyright" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h4>
            COPYRIGHT
          </h4>
          <figure className="kg-image-card">
            <Img
              fluid={data.disclaimer.childImageSharp.fluid}
            />
            </figure>
          <p className="footnotes footnotes-sep">
          Unless otherwise indicated, all materials in this website are copyrighted. No part of this website, either text or images may be used for any purpose, unless explicit authorisation is given. Reproduction, modification, storage in a retrieval system or retransmission, in any form or by any means – electronic, mechanical or otherwise – is strictly prohibited without prior written permission.
          </p>

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
        fluid(maxWidth: 3000) {
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
