import React from 'react'


const DisplayComments = ({clickedMonster, comments}) => {

    console.log(comments)
    const renderComment = comments.filter(monster => monster.name === clickedMonster).map(comment => (
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