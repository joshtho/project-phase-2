import React from 'react'
import { useEffect } from 'react'

const DisplayComments = ({clickedMonster}) => {
console.log(clickedMonster)
    
    useEffect(() => {
        fetch('http://localhost:3001/comments')
        .then(r => r.json())
        .then(data => console.log(data.filter(monster => monster.name === clickedMonster)))
    }, [])
    
    return (
    <div>Heres where the comments will go!</div>
  )
}

export default DisplayComments