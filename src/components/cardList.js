import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  &.columns {
    margin-top: 3rem;
  }
`

const CardList = props => {
  return (
    <Container className='columns is-multiline'>
      {props.children}
    </Container>
  )
}

export default CardList
