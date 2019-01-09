import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  &.columns {
    margin-top: 1rem;
  }
`

const CardList = props => {
  return (
    <Container className='columns'>
      {props.children}
    </Container>
  )
}

export default CardList
