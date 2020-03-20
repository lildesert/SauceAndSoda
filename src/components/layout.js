import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import theme from '../utils/theme'

const Section = styled.section`
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 20px;
  }
`

const Copyright = styled.div`
  padding: 1rem 0;
  font-size: 0.85rem;
`

const Layout = ({ children }) => (
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
      <ThemeProvider theme={theme}>
        <>
          <div className="layout-border layout-border-top" />
          <div className="layout-border layout-border-left" />
          <div className="layout-border layout-border-bottom" />
          <div className="layout-border layout-border-right" />
          <Section className="hero">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="hero-body">
              <div className="container">{children}</div>
            </div>
            <div className="hero-foot">
              <Copyright className="has-text-centered">
                © {new Date().getFullYear()} SauceAndSoda
              </Copyright>
            </div>
          </Section>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
