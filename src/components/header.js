import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from './icon'
import logo from '../images/sauceandsoda-black-transparent.png' // logomakr.com/8KQU24

const Menu = styled.div`
  font-size: 1.1rem;
  @media(max-width: ${ ({ theme }) => theme.screen.desktop }){
    &.navbar-menu{
      padding: 0.5rem;
    }
  }
`

const MenuLinkTitle = styled.h4`
  margin-bottom: 0;
  font-weight: 500;
`

const Logo = styled.img`
  background-color: ${ ({ theme }) => theme.colors.whiteTer };
  :hover{
    background-color: ${ ({ theme }) => theme.colors.primary };
  }
`

const SocialLink = styled.a`
  :first-child{
    margin-right: 16px;
  }
`

class Header extends Component {
  // constructor to set state and bind "this"
  constructor (props) {
    super(props)
    this.state = { showMenu: false }
    this.handleClick = this.handleClick.bind(this)
  }

  // function to handle the click
  handleClick () {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  render () {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <Logo src={logo} alt="Logo" />
              </Link>
              <div className={'navbar-burger burger' + (this.state.showMenu ? ' is-active' : '')} data-target="navbarMenuHeroA" onClick={this.handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Menu id="navbarMenuHeroA" className={'navbar-menu' + (this.state.showMenu ? ' is-active' : '')}>
              <div className="navbar-end">
                <MenuLinkTitle className="navbar-item">
                  <Link to="/about" activeClassName="is-active">
                  A propos
                  </Link>
                </MenuLinkTitle>
                <span className="navbar-item">
                  <SocialLink href="https://www.instagram.com/sauceandsoda_fr/" target="_blank" rel="noopener noreferrer">
                    <Icon nav="true" icon={['fab', 'instagram']} />
                  </SocialLink>
                  <SocialLink href="https://twitter.com/SauceAndSoda" target="_blank" rel="noopener noreferrer">
                    <Icon nav="true" icon={['fab', 'twitter']} />
                  </SocialLink>
                </span>
              </div>
            </Menu>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
