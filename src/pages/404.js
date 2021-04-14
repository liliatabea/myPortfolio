import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


// for use of P5
import { Sketch04 } from '../sketches/sketch04';


class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <article className="post-content page-template no-image">
          <div className="post-content-body">
          <h4>PAGE NOT FOUND</h4>
          <h4>The page you&#39;re looking for doesn&#39;t exist ...</h4>
          </div>
          <div className="post-content page-template post-content-body center">

          <figure className="kg-embed-card">
          <Sketch04/>
          </figure>
        </div>
        </article>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
