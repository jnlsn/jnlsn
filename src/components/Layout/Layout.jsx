import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Container from '../Container'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, fluid }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Container>
        {fluid ? children : <Container>{children}</Container>}
        <Container>
          <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
}

Layout.defaultProps = {
  fluid: false,
}

export default Layout
