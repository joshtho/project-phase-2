import React, { useEffect, useState } from "react";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import MonsterPage from "./components/monsters/MonsterPage";
import ListMonsters from "./components/monsters/ListMonsters";

function App() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2")
    .then(r => r.json())
    .then(data => setMonsters(data.data.monsters))
  }, [])

  const sortedMonsters = monsters.sort(function(a, b){return a.id - b.id})

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="monsters/*" element={<ListMonsters monsters={sortedMonsters}  />} />
            <Route path="monsters/:id" element={<MonsterPage monsters={sortedMonsters}  /> } />
          <Route />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
