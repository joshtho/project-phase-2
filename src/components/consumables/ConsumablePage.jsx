import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function ConsumablesPage({consumables, capitalizeFirstLetter}) {
  
    const params = useParams()
    const eatObj = consumables.find(consumable => consumable.id === parseInt(params.id))
    
    const displayLocations = () => (
      eatObj.common_locations ? eatObj.common_locations.map(location => (
        <li key={location}>{location}</li> 
      )) : "Location a mystery"
    )
    const nav = useNavigate();

    function handleClick() {
        nav(-1)
    }

    return (
      <div className='card'>
        <Button color="inherit" onClick={handleClick} >Back</Button>
        {eatObj ? 
        <div className='center'>
          <h1>{capitalizeFirstLetter(eatObj.name)}</h1>
          <img alt={eatObj.name} src={eatObj.image} className='centerImg' />
          <h4>{eatObj.description}</h4>
          <h3>Hearts Recovered: {eatObj.hearts_recovered}</h3>
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
    )
}

export default ConsumablesPage