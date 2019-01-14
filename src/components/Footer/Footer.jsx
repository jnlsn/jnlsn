import React from 'react'

import css from './Footer.module.css'

const Header = () => (
  <footer className={css.footer}>
    <div>Brought in to being by Jay Nielsen</div>
    <div>&copy; {new Date().getFullYear()}</div>
  </footer>
)

export default Header
