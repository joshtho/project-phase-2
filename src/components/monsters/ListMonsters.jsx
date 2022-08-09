import React from 'react'
import MonsterCard from './MonsterCard'

const ListMonsters = ({monsters}) => {
  const sortedMonsters = monsters.sort(function(a, b){
    return a.id - b.id
  });

  const displayMonsters = sortedMonsters.map(monster => (
    <MonsterCard key={monster.id} monster={monster} />
  ))
  
  return (
    <div>
      <h1>Monster List</h1>
      {displayMonsters}
    </div>
  )
}

export default ListMonsters