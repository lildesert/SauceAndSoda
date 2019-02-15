import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Tile from '../components/tile'
import CardList from '../components/cardList'
import Card from '../components/card'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const Container = styled.div`
  &.columns {
    margin-top: 3rem;
  }
`

const NavLinkContainer = styled.div`
  display: inline-block;
  margin-right: 8px;
`

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  return (
    <Layout>
      <SEO title="Accueil" keywords={['cocktail', 'sauce', 'bbq',
        'soda', 'sauceandsoda', 'barbecue', 'recette']} />
      <Container className='tile is-ancestor'>
        {group.length === 6 ? (
          group.reduce(function (result, value, index, array) {
            if (index % 2 === 0) {
              result.push(array.slice(index, index + 2))
            }
            return result
          }, [])
            .map((posts, index) => (
              <Tile key={index} isEven={index % 2 === 0} posts={posts} />
            ))
        )
          : (
            <CardList>
              { group.map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>)
        }
      </Container>
      <NavLinkContainer className="previousLink">
        <NavLink test={first} url={previousUrl} text="Previous Page" />
      </NavLinkContainer>
      <NavLinkContainer className="nextLink">
        <NavLink test={last} url={nextUrl} text="Next Page" />
      </NavLinkContainer>
    </Layout>
  )
}

export default IndexPage
