import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  padding: 0 1rem;

  h1,
  h2,
  h3 {
    font-weight: 500;
    line-height: 1.25;
    margin: 0 0 1rem;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
    text-align: center;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em;
  }

  a {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      padding-left: 1.438em;
      text-indent: -1.438em;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      padding-left: 1em;
      text-indent: -1em;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    margin: 0 0 2em;
    border-top: 1px solid;
    border-color: ${({ theme }) => theme.colors.muted};
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${({ theme }) => theme.colors.muted};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.muted} !important;
    span {
      background: inherit !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    img {
      width: 80%;
      display: block;
      margin: 1em auto;
    }
  }
`

const PageBody = props => {
  return <Body dangerouslySetInnerHTML={{ __html: props.body }} />
}

export default PageBody
