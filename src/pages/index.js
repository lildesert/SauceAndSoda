import React from 'react'
import { Link, graphql } from 'gatsby'

import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h2>Bienvenue sur Sauce And Soda</h2>
      <p>Laissez vous guider par M. Sauce et M. Soda à la découverte de recettes, astuces
        et inspirations autour du barbecue et des cocktails.</p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
                text-decoration: none;
                color: inherit;
              `
            }
          >
            <h3
              css={css`
                margin-bottom: 12px;
              `}
            >
              {node.frontmatter.title}{' '}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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
