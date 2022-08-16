import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../comments/CommentForm'
import DisplayComments from '../comments/DisplayComments'
import { useEffect } from 'react'

const MonsterPage = ({monsters, capitalizeFirstLetter}) => {
  const [comments, setComments] = useState([])
  const params = useParams()
  const monsterObj = monsters.find(monster => monster.id === parseInt(params.id)) 

      console.log("Object",monsterObj)
  useEffect(() => {
        fetch('http://localhost:3001/comments')
        .then(r => r.json())
        .then(data => setComments(data))
    }, [])
  
  
  const displayLocations = monsterObj.common_locations ? monsterObj.common_locations.map(location => (
    <li key={location}>{location}</li> 
  )) : "No common locations"
  

  const displayDrops = monsterObj.drops ? monsterObj.drops.map(drop => (
    <li key={drop}>{drop}</li>
  )) : "No common drops"

  return (
    <div className='card'>

      {monsterObj ? 
      <div>
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
        <DisplayComments clickedMonster={monsterObj.name} comments={comments} />
        <CommentForm 
        clickedMonster={monsterObj.name} 
        setComments={setComments}
        comments={comments} 
        />
      </div>
        : <h1>Loading</h1>}

    </div>
  )
}

export default MonsterPage