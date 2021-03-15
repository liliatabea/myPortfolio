import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"


// for use of P5
import P5Wrapper from 'react-p5-wrapper';
import sketch01 from '../sketches/about/sketch01';
import sketch02 from '../sketches/about/sketch02';



const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Eyes open
          </h1>
          <figure className="kg-width-full">
          <P5Wrapper sketch={sketch01} />
          </figure>
          <p>
          I graduated from Basel School of Design with a degree in visual communication. In 2007, I moved to Zürich where I worked as a web and graphic designer and organised the PechaKuchaNights. Early 2011, I had the opportunity to move to Singapore with my family. Surrounded by an inspiring group of researchers and urban designers, I founded my own studio, learned how to code and closely collaborated with my clients, mainly from academia.
          </p>
          <h3 id="dynamic-styles">My focus is on the visual display of information with a soft spot for creative coding</h3>
          <p>
After moving back to Switzerland in 2017, I've worked as an information designer for Superdot – visualizing complexity.
          </p>
          <p>
I strive to visualise content in a way that is both understandable and visually appealing, to omit the unnecessary and focus on the relevant. Besides working with the usual tools, I enjoy building with D3 or P5 and experiment with generative design.
          </p>
          <figure className="kg-width-full">
          <P5Wrapper sketch={sketch02} />
          </figure>
          <p>
If you'd like to collaborate, feel free to get in touch.
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
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
