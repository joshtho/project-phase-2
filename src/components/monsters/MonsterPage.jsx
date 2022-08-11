import React from 'react'
import { useParams } from 'react-router-dom'

const MonsterPage = ({monster}) => {
  const params = useParams()
  const monsterObj = monster[params.id - 84 ]
  console.log(monsterObj)
  return (
    <div className='card'>
      <h1>Monster page</h1>
      <h1>{monsterObj.name}</h1>
      <img alt={monsterObj.name} src={monsterObj.image} />
      
    </div>
  )
}

export default MonsterPage