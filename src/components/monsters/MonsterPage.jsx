import React from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../comments/CommentForm'
import DisplayComments from '../comments/DisplayComments'

const MonsterPage = ({monsters, capitalizeFirstLetter}) => {
  const params = useParams()
  const monsterObj = monsters[params.id - 84 ]
  console.log(monsterObj)
  
  const displayLocations = monsterObj.common_locations ? monsterObj.common_locations.map(location => (
    <li key={location}>{location}</li> 
  )) : "No common locations"
  

  const displayDrops = monsterObj.drops ? monsterObj.drops.map(drop => (
    <li key={drop}>{drop}</li>
  )) : "No common drops"

  return (
    <div className='card'>
      <h1>Monster page</h1>
      <h1>{capitalizeFirstLetter(monsterObj.name)}</h1>
      <img alt={monsterObj.name} src={monsterObj.image} />
      <h4>{monsterObj.description}</h4>
      <ul>
      <h5>Common Locations</h5>
        {displayLocations}
      <h5>Drops</h5>
      {displayDrops}
      </ul>
      <DisplayComments clickedMonster={monsterObj.name} />
      <CommentForm clickedMonster={monsterObj.name}/>
    </div>
  )
}

export default MonsterPage