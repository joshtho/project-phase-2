import React from 'react'
import { useParams } from 'react-router-dom'

function WeaponsPage({weapons, capitalizeFirstLetter}) {
  
  const params = useParams()
  const weaponsObj = weapons.find(weapon => weapon.id === parseInt(params.id))
  
  const displayLocations = () => (
    weaponsObj.common_locations ? weaponsObj.common_locations.map(location => (
      <li id='smallList' key={location}>{location}</li> 
    )) : "Location a mystery"
  )
  return (
    <div className='card'>
      {weaponsObj ? 
      <div className='center'>
        <h2>{capitalizeFirstLetter(weaponsObj.name)}</h2>
        <img alt={weaponsObj.name} src={weaponsObj.image} className='centerImg' />
        <h4>{weaponsObj.description}</h4>
        <h3>Attack : {weaponsObj.attack}</h3>
        <h3>Defense : {weaponsObj.defense}</h3>
        <h5>Common Locations</h5>
        {displayLocations()}
        {/* <ul>
        <h5>Drops</h5>
        {displayDrops()}
        </ul>
        <DisplayComments clickedMonster={monsterObj.name} comments={comments} />
        <CommentForm 
        clickedMonster={monsterObj.name} 
        setComments={setComments}
        comments={comments}  */}
        {/* /> */}
      </div> : 
      <h1>Loading...</h1>
      }
    </div>
    // want to do a drag and droplist with selections of each food and its despcription 
    // drop it into the pot and make whatever the actual dish is 
  )
}

export default WeaponsPage