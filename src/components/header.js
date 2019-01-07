import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import logo from '../images/sauceandsoda.png' // logomakr.com/8KQU24

const Container = styled.div`
  padding: 8px 0;
`

const Logo = styled.img`
  max-width: 140px;
  margin-bottom: 0px;
`

const DesktopMenu = styled.div`
  padding: 16px 0;
`

const Header = () => (
  <Container className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <DesktopMenu id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              BBQ
            </a>
            <a className="navbar-item">
              Cocktails
            </a>
            <a className="navbar-item">
              Sauces
            </a>
            <span className="navbar-item">
              <a className="button is-primary is-inverted">
                <Icon nav="true" icon={['fab', 'github']} size='1x' />
                <span>Download</span>
              </a>
            </span>
          </div>
        </DesktopMenu>
      </div>
    </nav>
  </Container>
)

export default Header
