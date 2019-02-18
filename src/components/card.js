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
  margin: ${ props => (props.featured ? '3rem 0 1.5rem' : '1rem .5rem .5rem') };
  font-size: ${ props => (props.featured ? '2rem' : '') };
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
  margin: ${ props => (props.featured ? '0 2rem' : '0 .5rem 1rem') };
  line-height: 1.6;
`

const MoreArrow = styled(StyledIcon)`
  position: relative;
  transition: all .08s linear;
  left: 0px;
`

const MoreLink = styled(Link)`
  margin: ${ props => (props.featured ? '2rem 0 0' : '0 .5rem') };
  display: inline-block;
  &:hover ${ MoreArrow } {
    left: 2px;
  }
`

const MoreLinkSpan = styled.span`
  margin-right: 8px;
`

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

const Card = ({ ...props }) => {
  return (
    <Post className={props.featured ? 'column is-full' : 'column is-one-third'}>
      <Container className={props.featured ? 'card is-vcentered columns' : '' }>
        <ImagePanel className={props.featured ? 'column is-7' : '' }>
          <Thumbnail to={`/${ props.slug }/`}>
            <Img fluid={props.coverImage.fluid}
              backgroundColor={'#eeeeee'} />
            <Overlay />
          </Thumbnail>
        </ImagePanel>
        <div className={props.featured ? 'column is-5 has-text-centered' : '' }>
          <Meta className='is-lowercase'>
            <span>{props.createdAt}</span>
            <Category>{props.category.name}</Category>
          </Meta>
          <Link to={`/${ props.slug }/`}>
            <Title featured={props.featured}>{props.title}</Title>
          </Link>
          <Excerpt featured={props.featured}
            dangerouslySetInnerHTML={{
              __html: 'excerpt',
            }}
          />
          <MoreLink featured={props.featured} to={`/${ props.slug }/`}>
            <MoreLinkSpan>lire</MoreLinkSpan>
            <MoreArrow nav="true" icon='long-arrow-alt-right' />
          </MoreLink>
        </div>
      </Container>
    </Post>
  )
}

export default Card
