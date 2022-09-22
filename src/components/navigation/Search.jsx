import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Search({search, handleChange}) {
  
  
  return (
    <div>
        {/* <input type="text" placeholder="Search..." value={search} onChange={handleChange} />  */}
        <TextField id="standard-basic" label="Search" value={search} onChange={handleChange} />
    </div>
  )
}

export default Search