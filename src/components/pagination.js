import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PaginationNumbers from './paginationNumbers'

export const PageLink = styled(Link)`
  user-select: none;
  margin: 0 5px;
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      color: #999;
    }
  }
`

class Pagination extends React.Component {
  render () {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${ slug }` : ''
    const prevPageLink = isFirst ? null : `${ pathPrefix }/${ prevPageNum }/`
    const nextPageLink = isLast ? null : `${ pathPrefix }/${ nextPageNum }/`

    return (
      <div className='has-text-centered'>
        {!isFirst && (
          <PageLink to={prevPageLink}>Précédent</PageLink>
        )}
        <PaginationNumbers index={currentPage} pageCount={numPages} />
        {!isLast &&
        <PageLink to={nextPageLink}>Suivant</PageLink>
        }
      </div>
    )
  }
}

export default Pagination
