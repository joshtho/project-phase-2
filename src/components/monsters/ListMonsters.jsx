import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import MonsterCard from './MonsterCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));




const ListMonsters = ({monsters}) => {
  const classes = useStyles();

  
  
  
  const sortedMonsters = monsters.sort(function(a, b){
    return a.id - b.id
  });

  const displayMonsters = sortedMonsters.map(monster => (
    <ListItem button component={Link} to='/MonsterCard' >
          <ListItemText primary={monster.name} />
    </ListItem>
  ))
  
  
  return (
    <div className={classes.root} >
      <h1>Monster List</h1>
      <List component="nav" aria-label="secondary mailbox folders">
      {displayMonsters}
      </List>
    </div>
  )
}

export default ListMonsters