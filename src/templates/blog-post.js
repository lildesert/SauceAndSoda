import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import PageBody from '../components/pageBody'
import BlogPostMeta from '../components/blogPostMeta'

const Thumbnail = styled(Img)`
  margin-bottom: 1.5rem;
`

const Meta = styled(BlogPostMeta)`
  margin-bottom: 2rem;
`

export default ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <h1>{post.title}</h1>
          <span className='has-text-weight-bold'>{post.author.name}</span>
          <Meta {...post} />
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
