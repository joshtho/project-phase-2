import React from 'react'
import { useState } from 'react'
import Search from '../navigation/Search'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function ListConsumables({consumables, capitalizeFirstLetter}) {
    const [search, setSearch] = useState('')
    const classes = useStyles();

    function handleChange(e) {
            setSearch(e.target.value)
        }

    const filteredMonsters = consumables.filter(consumable => consumable.name.includes(search))

return (
    <div className={classes.root} id={'box'} >
       <Search search={search} handleChange={handleChange} />
       <h1>Consumables</h1>
       <List component="nav" aria-label="list of consumables">
       {
           filteredMonsters.map(consumable => (
               <ListItem button component={Link} to={`${consumable.id}`} key={consumable.id} >
                 <li id='listName' >{capitalizeFirstLetter(consumable.name)}</li>
               </ListItem>
               )
            )
        }
       </List>
     </div>
  )
}

export default ListConsumables;