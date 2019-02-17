import React from 'react'

const CardList = props => {
  return (
    <div className='columns is-multiline'>
      {props.children}
    </div>
  )
}

export default CardList
