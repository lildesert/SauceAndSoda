import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'
import Pagination from '../components/pagination'
import theme from '../utils/theme'

class IndexPage extends Component {
  render () {
    const {
      data,
      pageContext
    } = this.props
    const posts = data.allMarkdownRemark.edges
    const featuredPost = posts[0].node
    const { currentPage } = pageContext
    const isFirstPage = currentPage === 1
    const isMobile = typeof window !== 'undefined' &&
    window.innerWidth < parseInt(theme.screen.tablet)

    return (
      <Layout>
        <SEO title="Accueil" keywords={['cocktail', 'sauce', 'bbq',
          'soda', 'sauceandsoda', 'barbecue', 'recette']} />
        {isFirstPage && !isMobile ? (
          <CardList>
            <Card {...featuredPost} featured='true' />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
        <Pagination context={pageContext} />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: object.isRequired,
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "fr")
            category
            coverImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
