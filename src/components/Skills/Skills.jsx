import React from 'react'

import css from './Skills.module.css'

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

const Skills = () => (
  <div className={css.skills}>
    <div className={css.devSkills}>
      <h2>Full Stack Development</h2>
      <ul>
        <li>JavaScript</li>
        <li>Web apps</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>Ember</li>
        <li>Python</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>WordPress</li>
        <li>Django</li>
        <li>Linux</li>
        <li>Docker</li>
      </ul>
    </div>
    <div className={css.mediaSkills}>
      <h2>Media</h2>
      <ul>
        <li>Video editing</li>
        <li>Production design</li>
        <li>Effects editing</li>
        <li>Animation</li>
        <li>Graphic design</li>
      </ul>
    </div>
  </div>
)
export default Skills
