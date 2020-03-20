import React, { Component } from 'react'
import './mystyles.scss'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'
import Pagination from '../components/pagination'
import theme from '../utils/theme'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: null,
    }
  }

  componentDidMount() {
    this.setState({
      isMobile:
        typeof window !== 'undefined' &&
        window.innerWidth < parseInt(theme.screen.tablet),
    })
  }

  render() {
    const { data, pageContext } = this.props
    const posts = data.allContentfulBlogPost.edges
    const featuredPost = posts[0].node
    const { currentPage } = pageContext
    const isFirstPage = currentPage === 1

    return (
      <Layout>
        <SEO
          title="Accueil"
          keywords={[
            'cocktail',
            'sauce',
            'bbq',
            'soda',
            'sauceandsoda',
            'barbecue',
            'recette',
          ]}
        />
        {isFirstPage && !this.state.isMobile ? (
          <CardList>
            <Card {...featuredPost} featured="true" />
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
    allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          slug
          createdAt(formatString: "DD MMMM, YYYY", locale: "fr")
          title
          category {
            name
          }
          coverImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

export default IndexPage
