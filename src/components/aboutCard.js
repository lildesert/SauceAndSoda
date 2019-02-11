import React from 'react'
import styled from 'styled-components'
import { StyledIcon } from '../components/icon'

const Name = styled.h3`
  margin-bottom: .5rem;
`

const AboutText = styled.div`
  margin-bottom: 8px;
`

const Heart = styled(StyledIcon)`
  margin-right: 5px;
`

const FavItem = styled.span`
  display: block;
`

const AboutCard = ({ image, name, about, favCocktail, favBbq, favBonus }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="M. Sauce" />
        </figure>
      </div>
      <div className="card-content">
        <Name>{name}</Name>
        <div className="content">
          <AboutText className='has-text-justified'
            dangerouslySetInnerHTML={{ __html: about }} />
          <FavItem><Heart icon='heart' />Cocktail : {favCocktail}</FavItem>
          <FavItem><Heart icon='heart' />BBQ : {favBbq}</FavItem>
          <FavItem><Heart icon='heart' />{favBonus}</FavItem>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
