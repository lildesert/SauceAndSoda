import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import PageBody from '../components/pageBody'

const Subtitle = styled.h3`
  max-width: 560px;
  font-weight: 300;
`

const Thumbnail = styled(Img)`
  margin-bottom: 1.5rem;
`

export default ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <h1 className='title'>{post.title}</h1>
          <Subtitle className='subtitle is-italic'>{post.author.name} - {post.createdAt} - {post.category.name}</Subtitle>
          <Thumbnail fluid={post.coverImage.fluid} backgroundColor={'#eeeeee'} />
          <PageBody body={post.content.childMarkdownRemark.html} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      content {
        childMarkdownRemark {
          html
        }
      }
      slug
      createdAt(formatString: "DD MMMM, YYYY", locale: "fr")
      title
      category {
        name
      }
      author {
        name
      }
      coverImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
