import React from 'react'

const MonsterCard = ({monster}) => {
  return (
    <div className='card'>
      <h2>{monster.name}</h2>
      <img src={monster.image} />
    </div>
  )
}

export default MonsterCard