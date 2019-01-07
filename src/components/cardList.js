import React from 'react'

const CardList = props => {
  return (
    <div className='columns'>
      {props.children}
    </div>
  )
}

export default CardList
