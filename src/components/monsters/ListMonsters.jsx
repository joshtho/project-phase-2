import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Search from '../navigation/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListMonsters = ({monsters, capitalizeFirstLetter}) => {
  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }
  const classes = useStyles();
  
  const filteredMonsters = monsters.filter(monster => monster.name.includes(search))
  
  const displayMonsters = filteredMonsters.map(monster => (
    <ListItem button component={Link} to={`${monster.id}`} key={monster.id} >
      <li id='listName' >{capitalizeFirstLetter(monster.name)}</li>
    </ListItem>
    )
 )

   return (
     <div className={classes.root} id='box'>
       <Search search={search} handleChange={handleChange} />
       <h1>Monster List</h1>
       <List component="nav" aria-label="list of monsters">
       {displayMonsters}
       </List>
     </div>
   )
 }
 
 export default ListMonsters;