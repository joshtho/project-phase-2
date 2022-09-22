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

const ListWeapons = ({weapons, capitalizeFirstLetter}) => {
  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }
  const classes = useStyles();
  
  const filteredWeapons = weapons.filter(monster => monster.name.includes(search))
  
  const displayWeapons = filteredWeapons.map(weapon => (
    <ListItem button component={Link} to={`${weapon.id}`} key={weapon.id} >
        <li id="listName" >{capitalizeFirstLetter(weapon.name)}</li>
    </ListItem>
    
    )
)
//   const displayWeapons = filteredWeapons.map(monster => {
//     if(monster.name.includes(search)) {
//     return (<ListItem button component={Link} to={`${monster.id}`} key={monster.id} >
//               <ListItemText primary={capitalizeFirstLetter(monster.name)} />
//             </ListItem>
//     )
//     }
//  return 
// })

   return (
     <div className={classes.root} id='box' >
       <Search search={search} handleChange={handleChange} />
       <h1>Weapons List</h1>
       <List component="nav" aria-label="list of monsters" id='listName' >
       {displayWeapons}
       </List>
     </div>
   )
 }
 
 export default ListWeapons;