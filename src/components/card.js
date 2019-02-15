import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StyledIcon } from './icon'

const Post = styled.div`
  margin-bottom: 1rem;
  .gatsby-image-wrapper {
    height: 0;
    padding-bottom: 60%;
  }
`

const Thumbnail = styled(Link)`
  position: relative;
  display: block;
`

const Overlay = styled.div`
  position: absolute;
  z-index: 101;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  opacity: 0;
  transition: opacity .4s ease;
  :hover{
    opacity: 0.14;
  }
`

const Title = styled.h2`
  text-transform: capitalize;
  margin: 1rem .5rem .5rem;
`

const Meta = styled.div`
  margin: 1rem .5rem 0;
  font-weight: 300;
`

const Category = styled.span`
  :before {
    display: inline-block;
    position: relative;
    bottom: .3rem;
    margin: 0 .7rem 0 1rem;
    content: "";
    height: 1px;
    width: 4.0rem;
    background-color: #8b8b8b;
  }
`

const Excerpt = styled.p`
  margin: 0 .5rem 1rem;
  line-height: 1.6;
`

const MoreArrow = styled(StyledIcon)`
  position: relative;
  transition: all .08s linear;
  left: 0px;
`

const MoreLink = styled(Link)`
  margin: 0 .5rem;
  display: inline-block;
  &:hover ${ MoreArrow } {
    left: 2px;
  }
`

const MoreLinkSpan = styled.span`
  margin-right: 8px;
`

const Card = ({ fields, frontmatter, excerpt, ...props }) => {
  return (
    <Post className='column is-one-third'>
      <Thumbnail to={`/${ fields.slug }/`}>
        <Img sizes={frontmatter.coverImage.childImageSharp.sizes} backgroundColor={'#eeeeee'} />
        <Overlay />
      </Thumbnail>
      <Meta className='is-lowercase'>
        <span>{frontmatter.date}</span>
        <Category>{frontmatter.category}</Category>
      </Meta>
      <Link to={`/${ fields.slug }/`}>
        <Title>{frontmatter.title}</Title>
      </Link>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <MoreLink to={`/${ fields.slug }/`}>
        <MoreLinkSpan>lire</MoreLinkSpan>
        <MoreArrow nav="true" icon='long-arrow-alt-right' />
      </MoreLink>
    </Post>
  )
}

export default Card
