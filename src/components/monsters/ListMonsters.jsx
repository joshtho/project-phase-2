import React from 'react'
import MonsterCard from './MonsterCard'

const ListMonsters = ({monsters}) => {
  const displayMonsters = monsters.map(monster => (
    <MonsterCard monster={monster} />
  ))
  
  return (
    <div>
      <h1>Monster List</h1>
      {displayMonsters}
    </div>
  )
}

export default ListMonsters