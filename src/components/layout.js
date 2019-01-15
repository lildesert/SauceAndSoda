import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import './layout.scss'
import theme from '../utils/theme'

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
          <section className="hero">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="hero-body">
              <div className="container">
                {children}
              </div>
            </div>
            <div className="hero-foot">
              <Copyright className='has-text-centered'>© {new Date().getFullYear()} SauceAndSoda</Copyright>
            </div>
          </section>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
