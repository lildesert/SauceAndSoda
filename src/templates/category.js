import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cardList'
import Card from '../components/card'

const CategoryLabel = styled.span`
  font-weight: 300;
  color: ${ ({ theme }) => theme.colors.muted };
`

const CategoryName = styled.span`
  color: ${ ({ theme }) => theme.colors.primary };
`

const CategoryTemplate = props => {
  const {
    pageContext: { category },
    data: {
      allContentfulBlogPost: { edges },
    }
  } = props

  return (
    <Layout>
      <SEO title={category} keywords={[category, 'recette']} />
      <div className='subtitle is-uppercase'>
        <CategoryLabel>Categorie : </CategoryLabel>
        <CategoryName>{category}</CategoryName>
      </div>
      <CardList>
        {edges.map(({ node: post }) => (
          <Card key={post.id} {...post} />
        ))}
      </CardList>
    </Layout>
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export const categoryQuery = graphql`
query PostsByCategory($category: String) {
  allContentfulBlogPost(
    sort: {fields: [createdAt], order: DESC},
    filter: {category: {name: {eq: $category}}}
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

export default CategoryTemplate
