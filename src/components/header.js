import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import logo from '../images/sauceandsoda.png' // logomakr.com/8KQU24

const Menu = styled.div`
  padding: 24px 0;
  font-size: 1.1rem;
  &.navbar-start {
    flex-grow: 1; 
    justify-content: center;
  }
`

const SocialMediaLabel = styled.span`
  margin-right: 5px;
`

const Header = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <Menu className="navbar-start is-uppercase">
            <a className="navbar-item is-active">
              BBQ
            </a>
            <a className="navbar-item">
              Cocktails
            </a>
            <a className="navbar-item">
              Sauces
            </a>
            <a className="navbar-item">
              A propos
            </a>
          </Menu>
          <div className="navbar-end">
            <span className="navbar-item">
              <SocialMediaLabel>nous suivre :</SocialMediaLabel>
              <Link to="/">
                <span className="icon">
                  <Icon nav="true" icon={['fab', 'twitter']} />
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
