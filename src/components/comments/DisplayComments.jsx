import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const DisplayComments = ({clickedMonster}) => {
const [comments, setComments] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/comments')
        .then(r => r.json())
        .then(data => setComments(data.filter(monster => monster.name === clickedMonster)))
    }, [])
    
    const renderComment = comments.map(comment => (
        <li key={comment.id}>{comment.username}: {comment.comment}</li>
    ))

    return (
    <div>
        <h3>Comments:</h3>
        <ul>
        {renderComment}
        </ul>
    </div>
  )
}

export default DisplayComments