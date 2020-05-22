import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StyledIcon } from './icon'
import BlogPostMeta from './blogPostMeta'

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
  transition: opacity 0.4s ease;
  :hover {
    opacity: 0.14;
  }
`

const Title = styled.h2`
  ${({ featured }) =>
    css`
      text-transform: capitalize;
      margin: ${featured ? '3rem 0 1.5rem' : '1rem .5rem .5rem'};
      font-size: ${featured ? '2rem' : ''};
    `}
`

const Meta = styled(BlogPostMeta)`
  margin: 1rem 0.5rem 0;
`

const Excerpt = styled.p`
  margin: ${props => (props.featured ? '0 2rem' : '0 .5rem 1rem')};
  line-height: 1.6;
`

const MoreArrow = styled(StyledIcon)`
  position: relative;
  transition: all 0.08s linear;
  left: 0px;
`

const MoreLink = styled(Link)`
  margin: ${props => (props.featured ? '2rem 0 0' : '0 .5rem')};
  display: inline-block;
  &:hover ${MoreArrow} {
    left: 2px;
  }
`

const MoreLinkSpan = styled.span`
  margin-right: 8px;
`

const Container = styled.div`
  &.columns {
    margin: 0;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
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

const Card = ({ featured, slug, coverImage, title, content, ...props }) => {
  return (
    <Post className={featured ? 'column is-full' : 'column is-one-third'}>
      <Container className={featured ? 'card is-vcentered columns' : ''}>
        <ImagePanel className={featured ? 'column is-7' : ''}>
          <Thumbnail to={`/${slug}/`}>
            <Img
              fluid={coverImage.fluid}
              backgroundColor={'#ffffff'}
              alt={`thumbnail-${coverImage.fluid.src}`}
            />
            <Overlay />
          </Thumbnail>
        </ImagePanel>
        <div className={featured ? 'column is-5 has-text-centered' : ''}>
          <Meta {...props} />
          <Link to={`/${slug}/`}>
            <Title featured={featured}>{title}</Title>
          </Link>
          <Excerpt
            featured={featured}
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.excerpt,
            }}
          />
          <MoreLink featured={featured} to={`/${slug}/`}>
            <MoreLinkSpan>lire</MoreLinkSpan>
            <MoreArrow nav="true" icon="long-arrow-alt-right" />
          </MoreLink>
        </div>
      </Container>
    </Post>
  )
}

export default Card
