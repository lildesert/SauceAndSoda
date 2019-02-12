import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'
import FeaturedPost from '../components/featuredPost'

const IndexPage = ({ data }) => {
  const featuredPost = data.allMarkdownRemark.edges[0].node
  const posts = data.allMarkdownRemark.edges.slice(1)
  return (
    <Layout>
      <SEO title="Accueil" keywords={['cocktail', 'sauce', 'bbq',
        'soda', 'sauceandsoda', 'barbecue', 'recette']} />
      <FeaturedPost {...featuredPost} />
      <CardList>
        {posts.map(({ node: post }) => (
          <Card key={post.id} {...post} />
        ))}
      </CardList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
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
