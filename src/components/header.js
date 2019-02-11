import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from './icon'
import logo from '../images/sauceandsoda-black-transparent.png' // logomakr.com/8KQU24

const Menu = styled.div`
  padding: 24px 0;
  font-size: 1.1rem;
  &.navbar-start {
    flex-grow: 1; 
    justify-content: center;
  }
`

const Logo = styled.img`
  background-color: ${ ({ theme }) => theme.colors.whiteTer };
  :hover{
    background-color: ${ ({ theme }) => theme.colors.primary };
  }
`

const SocialMediaLabel = styled.span`
  margin-right: 5px;
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
            <div id="navbarMenuHeroA" className={'navbar-menu' + (this.state.showMenu ? ' is-active' : '')}>
              <Menu className="navbar-start">
                <Link to="/" activeClassName="is-active" className="navbar-item">
                  Accueil
                </Link>
                <Link to="/category/bbq" activeClassName="is-active" className="navbar-item">
                  BBQ
                </Link>
                <Link to="/category/cocktail" activeClassName="is-active" className="navbar-item">
                  Cocktails
                </Link>
                <Link to="/category/sauce" activeClassName="is-active" className="navbar-item">
                  Sauces
                </Link>
                <Link to="/about" activeClassName="is-active" className="navbar-item">
                  A propos
                </Link>
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
  }
}

export default Header
