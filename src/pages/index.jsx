import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Title from '../components/Title'
import Container from '../components/Container'

const IndexPage = () => (
  <Layout fluid={true}>
    <SEO title="Home" keywords={[`web developer`, `Jay Nielsen`]} />
    <Container>
      <AboutMe />
    </Container>
    <Title>Skills</Title>
    <Container>
      <Skills />
    </Container>
    <Title>Projects</Title>
    <Container>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
