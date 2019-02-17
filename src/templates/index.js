import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Link from 'gatsby-link'
import CardList from '../components/cardList'
import Card from '../components/card'
import theme from '../utils/theme'

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  };

  render () {
    const { group, index, first, last, pageCount } = this.props.pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()
    const featuredPost = group[0].node
    const isMobile = window.innerWidth < parseInt(theme.screen.tablet)

    return (
      <Layout>
        <SEO title="Accueil" keywords={['cocktail', 'sauce', 'bbq',
          'soda', 'sauceandsoda', 'barbecue', 'recette']} />
        {first && !isMobile ? (
          <CardList>
            <Card {...featuredPost} featured='true' />
            {group.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {group.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
        <NavLinkContainer>
          <NavLink test={first} url={previousUrl} text="Previous Page" />
          <NavLink test={last} url={nextUrl} text="Next Page" />
        </NavLinkContainer>
      </Layout>
    )
  }
}

export default IndexPage
