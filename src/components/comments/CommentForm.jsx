import React, { useState } from 'react'

const CommentForm = () => {
const [username, setUsername] =  useState('')
const [newComment, setNewComment] =  useState('')
    
return (
    <form>
        <h3>Write comment here</h3>
        <label>Username:</label>
        <br/>
        <input type='text' name="username" value={username} onChange={(e) => console.log(e.target.value)} />
        <br/> 
        <label >Comment:</label>
        <br/>
        <textarea type='text' name='comment' value={newComment} onChange={(e) => e.target.value} />
        <br/>
        <button>Submit</button>
    </form>
    
    )
}
  
  

export default CommentForm