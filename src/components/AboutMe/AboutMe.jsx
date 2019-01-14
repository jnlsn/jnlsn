import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import css from './AboutMe.module.css'

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

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query {
        aboutImg: file(relativePath: { eq: "jay.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={css.about}>
        <div className={css.aboutText}>
          <h2>About Me</h2>
          <p>
            Full stack web development professional with bountiful experience
            building hundreds of websites for businesses, law firms,
            non-profits, and universities across the nation. I enjoy exploring
            opportunities in technology for creatively sharing information, and
            have worked with a variety of teams to deliver quality web
            applications for clients large and small.
          </p>
        </div>
        <div className={css.aboutImg}>
          <Img fluid={data.aboutImg.childImageSharp.fluid} />
        </div>
      </div>
    )}
  />
)
export default AboutMe
