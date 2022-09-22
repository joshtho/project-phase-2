import React, { useEffect, useState } from "react";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import MonsterPage from "./components/monsters/MonsterPage";
import ListMonsters from "./components/monsters/ListMonsters";
import ListWeapons from "./components/weapons/ListWeapons";
import WeaponsPage from "./components/weapons/WeaponsPage";
import ListConsumables from "./components/consumables/ListConsumables";
import ConsumablePage from "./components/consumables/ConsumablePage";

function App() {
  const [monsters, setMonsters] = useState([])
  const [weapons, setWeapons] = useState([])
  const [consumables, setConsumables] = useState([])
  const sortedMonsters = monsters.sort(function(a, b){return a.id - b.id})
  const sortedWeapons = weapons.sort(function(a, b){return a.id - b.id})
  const sortedConsumables = consumables.sort(function(a, b){return a.id - b.id})

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2")
    .then(r => r.json())
    .then(data => {
      console.log(data.data)
      setMonsters(data.data.monsters)
      setWeapons(data.data.equipment)
      setConsumables(data.data.materials)
    } 
      )
  }, [])


  function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
  
  return (
    <div className="App" id="bg" >
      

      <Router>
        <NavBar />
        <Routes>
          <Route path="/monsters" element={<ListMonsters monsters={sortedMonsters} capitalizeFirstLetter={capitalizeFirstLetter} />} />
            <Route path="/monsters/:id" element={<MonsterPage monsters={sortedMonsters} capitalizeFirstLetter={capitalizeFirstLetter} /> } />
          <Route />
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<ListWeapons weapons={sortedWeapons} capitalizeFirstLetter={capitalizeFirstLetter} />} />
            <Route path="/weapons/:id" element={<WeaponsPage weapons={sortedWeapons} capitalizeFirstLetter={capitalizeFirstLetter} />} />
          <Route />
          <Route path="/consumables" element={<ListConsumables consumables={sortedConsumables} capitalizeFirstLetter={capitalizeFirstLetter} />} />
            <Route path="/consumables/:id" element={<ConsumablePage consumables={sortedConsumables} capitalizeFirstLetter={capitalizeFirstLetter} />} />
          <Route />
        </Routes>
      </Router>
      <div id="triforce">
        <div id="triangle" class="shadow">
          <div id="shadow"></div>
        </div>
        </div>
      </div>

  );
}

export default App;