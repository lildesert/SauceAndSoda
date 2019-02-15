import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  &.columns {
    margin-top: 3rem;
  }
`

const TilesList = props => {
  return (
    <Container class="tile is-ancestor">
      {props.children}

      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">

            </article>
            <article class="tile is-child notification">

            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">

          </article>
        </div>
      </div>

    </Container>
  )
}

export default TilesList
