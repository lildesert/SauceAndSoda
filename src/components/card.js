import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.div`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: $link;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: $primary;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = ({ fields, frontmatter, excerpt, ...props }) => {
  return (
    <Post className='column is-half' featured={props.featured}>
      <Link to={`/${ fields.slug }/`}>
        <Img sizes={frontmatter.coverImage.childImageSharp.sizes} backgroundColor={'#eeeeee'} />
        <Title>{frontmatter.title}</Title>
        <Date>{frontmatter.date}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
