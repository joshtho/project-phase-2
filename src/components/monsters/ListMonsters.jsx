import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListMonsters = ({monsters, capitalizeFirstLetter}) => {
  const classes = useStyles();
  const navigate = useNavigate()


  const displayMonsters = 
   monsters.map(monster => (
    <ListItem button onClick={() => {navigate(`/monsters/${monster.id}`)}} key={monster.id} >
          <ListItemText primary={capitalizeFirstLetter(monster.name)} />
    </ListItem>
   ))


  
  return (
    <div className={classes.root} >
      <h1>Monster List</h1>
      <List component="nav" aria-label="list of monsters">
      {displayMonsters}
      </List>
    </div>
  )
}

export default ListMonsters