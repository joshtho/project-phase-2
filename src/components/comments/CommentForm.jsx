import React from 'react'

const CommentForm = () => {

    return (
        <form>
        <h3>Write comment here</h3>
        <label>Username:</label>
        <br/>
        <input type='text' />
        <br/> 
        <label >Comment:</label>
        <br/>
        <textarea type='text' />
        <br/>
        <button>Submit</button>
    </form>
    
    )
}
  
  

export default CommentForm