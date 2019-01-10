import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import css from './Header.module.css'

const Header = ({ siteTitle }) => (
  <header className={css.header}>
    <div>
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
    </div>
    <div>
      <a
        href="https://github.com/jayarnielsen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nielsen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/jayarnielsen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
