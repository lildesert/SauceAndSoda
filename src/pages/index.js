import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h2 className="title">Bienvenue sur Sauce And Soda</h2>
      <p className="subtitle">Laissez vous guider par M. Sauce et M. Soda à la découverte de recettes, astuces
        et inspirations autour du barbecue et des cocktails.</p>

      <CardList>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
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
            date(formatString: "DD MMMM, YYYY")
            coverImage {
              publicURL
              childImageSharp {
                sizes(maxWidth: 630) {
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
