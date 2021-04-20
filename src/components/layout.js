import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">

          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <img src="../images/icon.png" alt="°"/>
            </Link>
          </div>
          <div className="site-head-right">
          <ul className="nav" role="menu">
            <li role="menuitem">
              <Link to={`/`}>WORK</Link>
            </li>
            <li role="menuitem">
              <Link to={`/about`}>ABOUT</Link>
            </li>
            <li role="menuitem">
              <Link to={`/contact`}>CONTACT</Link>
            </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>

      </main>
      <footer className="site-foot">
      <Link to={`/disclaimer`}>&copy;</Link> {new Date().getFullYear()} by <Link to={`/about`}>Lilia Rusterholtz.</Link> I built this website in {" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        React</a> with {" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
