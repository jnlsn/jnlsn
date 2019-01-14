import React from 'react'
import PropTypes from 'prop-types'

import css from './Container.module.css'

const Layout = ({ children }) => <div className={css.container}>{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
