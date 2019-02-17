import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  display: inline-block;
  text-align: center;
`

export const PageLink = styled(Link)`
  display: inline-block;
  user-select: none;
  margin: 0 5px;
  &.active {
    color: ${ ({ theme }) => theme.colors.primary };
    cursor: default;
  }
`

const MAX_NUMS = 3

const renderNumberItem = pageNum =>
  <PageLink key={pageNum} activeClassName='active'
    to={pageNum === 1 ? '/' : `/${ pageNum }/`}>
    {pageNum}
  </PageLink>

const paginate = (activePage, pageCount) => {
  const pages = Array(pageCount).fill().map((v, i) => i + 1)

  const start = pageCount - MAX_NUMS >= 0 ? pageCount - MAX_NUMS : 0
  if (activePage <= start) {
    return pages
      .slice(activePage - 1, activePage + MAX_NUMS - 1)
      .map(page => renderNumberItem(page))
  }
  return pages
    .slice(start, pageCount)
    .map(page => renderNumberItem(page))
}

export default props => {
  const { index, pageCount } = props

  if (pageCount === 0) {
    return null
  }

  // Generate pagination numbers
  let nums = paginate(index, pageCount)

  return (
    <Container className='has-text-centered'>
      {nums}
    </Container>
  )
}
