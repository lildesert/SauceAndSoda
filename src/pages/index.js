import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'

const Title = styled.h2`
  margin-top: 0;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Title className="title">Bienvenue sur Sauce And Soda</Title>
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
