import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/sauceandsoda.png' // logomakr.com/8KQU24

const Header = () => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Logo" style={{
          maxWidth: 200,
          marginBottom: 0,
        }} />
      </Link>
    </div>
  </div>
)

export default Header
