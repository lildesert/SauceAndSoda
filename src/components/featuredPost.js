import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StyledIcon } from './icon'

const Container = styled.div`
  &.columns {
    margin: 0;

    @media (min-width: ${ ({ theme }) => theme.screen.tablet }) {
      flex-direction: row-reverse;
      display: flex;
    }
  }
`

const ImagePanel = styled.div`
  &.column {
    padding: 0;
  }
`

const Post = styled.div`
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

const Title = styled.h1`
  text-transform: capitalize;
  margin: 3rem 0 1.5rem;
`

const Meta = styled.div`
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
  line-height: 1.6;
  margin: 0 2rem;
`

const MoreArrow = styled(StyledIcon)`
  position: relative;
  transition: all .08s linear;
  left: 0px;
`

const MoreLink = styled(Link)`
  margin-top: 2rem;
  display: inline-block;
  &:hover ${ MoreArrow } {
    left: 2px;
  }
`

const MoreLinkSpan = styled.span`
  margin-right: 8px;
`

const FeaturedPost = ({ fields, frontmatter, excerpt, ...props }) => {
  return (
    <Container className="card columns is-vcentered">
      <ImagePanel className='column is-7'>
        <Thumbnail to={`/${ fields.slug }/`}>
          <Img sizes={frontmatter.coverImage.childImageSharp.sizes} backgroundColor={'#eeeeee'} />
          <Overlay />
        </Thumbnail>
      </ImagePanel>
      <div className='column is-5'>
        <Post className='has-text-centered' featured={props.featured}>
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
      </div>
    </Container>
  )
}

export default FeaturedPost
