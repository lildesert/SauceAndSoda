import React from 'react'
import styled from 'styled-components'

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

const BlogPostMeta = ({ ...props }) => {
  return (
    <div className={props.className + ' has-text-weight-light'}>
      <span>{props.createdAt}</span>
      <Category>
        {props.category.name}
      </Category>
    </div>
  )
}

export default styled(BlogPostMeta)``
