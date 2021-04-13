import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"


// for use of P5
import { Sketch01 } from '../sketches/about/sketch01';
import { Sketch02 } from '../sketches/about/sketch02';

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template">
        <div className="post-content-body">
          <h1>
            Just a few lines …
          </h1>
          <figure className="kg-card kg-embed-card">
          <Sketch02/>
          </figure>
          <p>
          I graduated from <a href="https://www.fhnw.ch/en/about-fhnw/schools/academy-of-art-and-design/institutes/institute-of-visual-communication" target="_blank" rel="noreferrer" tabindex="0">Basel School of Design</a> with a degree in visual communication. In 2007, I moved to Zürich where I worked as a web and graphic designer and organised the <a href="https://www.pechakucha.com" target="_blank" rel="noreferrer" tabindex="0">PechaKuchaNights.</a> Early 2011, I had the opportunity to move to Singapore with my family. Surrounded by an inspiring group of researchers and urban designers, I founded my own studio, learned how to code and closely collaborated with my clients, mainly from academia.
          </p>
          <h3 id="dynamic-styles">
          My focus is on the visual display of information with a soft spot for creative coding
          </h3>
          <p>
          <br/>After moving back to Switzerland in 2017, I've worked as an information designer for <a href="https://www.superdot.studio" target="_blank" rel="noreferrer"tabindex="0">Superdot – visualizing complexity.</a>
          </p>

          <p>
          I strive to visualise content in a way that is both understandable and visually appealing, to omit the unnecessary and focus on the relevant. Besides working with the usual tools, I enjoy building my own with <a href="https://d3js.org" target="_blank" rel="noreferrer" tabindex="0">D3</a> or <a href="https://p5js.org" target="_blank" rel="noreferrer" tabindex="0">P5</a> and experiment with generative design.
          </p>
          <p>
          Spending quite some time at home recently, I've completed a <a href="https://www.codecademy.com" target="_blank" rel="noreferrer" tabindex="0">codecademy</a> career path in web development.
          </p><figure className="kg-card kg-embed-card">
          <Sketch01/>
          </figure>
          <p>
          If you'd like to collaborate, feel free to <Link to={`/contact`}>get in touch.</Link>
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
