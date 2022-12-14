import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../comments/CommentForm'
import DisplayComments from '../comments/DisplayComments'

const MonsterPage = ({monsters, capitalizeFirstLetter}) => {
  const [comments, setComments] = useState([])
  const params = useParams()
  const monsterObj = monsters.find(monster => monster.id === parseInt(params.id)) 

  useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then(data => setComments(data))
    }, [])
  
  const displayLocations = () => (
    monsterObj.common_locations ? monsterObj.common_locations.map(location => (
      <li id='smallList' key={location}>{location}</li> 
    )) : "Location varies"
  )
  
  const displayDrops = () => (
    monsterObj.drops ? monsterObj.drops.map(drop => (
      <li id='smallList' key={drop}>{drop}</li>
   )) : "No common drops"
  ) 
  
  return (
    <div className='card'>
      {monsterObj ? 
      <div className='center'>
        <h2>{capitalizeFirstLetter(monsterObj.name)}</h2>
        <img alt={monsterObj.name} src={monsterObj.image} className='centerImg' />
        <h4>{monsterObj.description}</h4>
        <ul>
        <h5>Common Locations</h5>
        {displayLocations()}
        <h5>Drops</h5>
        {displayDrops()}
        </ul>
        <DisplayComments clickedMonster={monsterObj.name} comments={comments} />
        <CommentForm 
        clickedMonster={monsterObj.name} 
        setComments={setComments}
        comments={comments} 
        />
      </div> : 
      <h1>Loading...</h1>
      }
    </div>
  )
}

export default MonsterPage