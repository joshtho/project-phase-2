import React from 'react'
import { useParams } from 'react-router-dom'

const MonsterPage = ({monsters}) => {
  const params = useParams()
  const monsterObj = monsters[params.id - 84 ]
  console.log(monsterObj)
  console.log(monsterObj.common_locations)
  const displayLocations = monsterObj.common_locations.map(location => (
    <li key={location}>{location}</li>
  ))
  return (
    <div className='card'>
      <h1>Monster page</h1>
      <h1>{monsterObj.name}</h1>
      <img alt={monsterObj.name} src={monsterObj.image} />
      <h4>{monsterObj.description}</h4>
      <h5>Common Locations</h5>
      <ul>
        {displayLocations}
      </ul>
    </div>
  )
}

export default MonsterPage