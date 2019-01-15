import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import PageBody from '../components/pageBody'

const Title = styled.h1`
  
`

const Subtitle = styled.h3`
  max-width: 560px;
  color: #5b5b5b;
  font-weight: 300;
`

const Thumbnail = styled(Img)`
  margin-bottom: 1.5rem;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <Title>{post.frontmatter.title}</Title>
          <Subtitle className='is-italic'>{post.frontmatter.subtitle}</Subtitle>
          <Thumbnail sizes={post.frontmatter.coverImage.childImageSharp.sizes} backgroundColor={'#eeeeee'} />
          <PageBody body={post.html} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        subtitle
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
    }
  }
`
