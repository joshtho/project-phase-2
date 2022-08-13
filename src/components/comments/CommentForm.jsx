import React, { useState } from 'react'
import { useEffect } from 'react'

const CommentForm = ({monsterName}) => {

const [newCommentData, setNewCommentData] =  useState({
    name: monsterName
    username: '',
    comment: ''
})

function handleChange(e) {
    setNewCommentData({...newCommentData, [e.target.name]: e.target.value})
}

return (
    <form onSubmit={}>
        <h3>Write comment here</h3>
        <label>Username:</label>
        <br/>
        <input type='text' name="username" value={username} onChange={handleChange} />
        <br/> 
        <label >Comment:</label>
        <br/>
        <textarea type='text' name='comment' value={newComment} onChange={handleChange} />
        <br/>
        <button>Submit</button>
    </form>
    
    )
}
  
  

export default CommentForm