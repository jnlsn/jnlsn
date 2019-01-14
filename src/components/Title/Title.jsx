import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Container from '../Container'

import css from './Title.module.css'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Title = ({ children }) => (
  <div class={css.title}>
    <Container>
      <h1>{children}</h1>
    </Container>
  </div>
)
export default Title
