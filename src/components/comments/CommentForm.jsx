
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CommentForm = ({clickedMonster, comments, setComments}) => {
const params = useParams() 
console.log(params)
const navigate = useNavigate()
const [newCommentData, setNewCommentData] =  useState({
    name: clickedMonster,
    username: '',
    comment: ''
})

function handleChange(e) {
    setNewCommentData({...newCommentData, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCommentData)
    })
    .then(r => r.json())
    .then(data => setComments([...comments, data]))
    navigate(`/monsters/${params.id}`)

}

return (
    <form onSubmit={handleSubmit}>
        <h3>Write comment here</h3>
        <label>Username:</label>
        <br/>
        <input type='text' name="username" value={newCommentData.username} onChange={handleChange} />
        <br/> 
        <label >Comment:</label>
        <br/>
        <textarea type='text' name='comment' value={newCommentData.comment} onChange={handleChange} />
        <br/>
        <button>Submit</button>
    </form>
    
    )
}
  
  

export default CommentForm