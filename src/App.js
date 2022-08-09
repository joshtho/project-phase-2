import React, { useEffect, useState } from "react";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import {Routes, Route} from "react-router-dom"
import ListMonsters from "./components/monsters/ListMonsters";
function App() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2.")
    .then(r => r.json())
    .then(data => setMonsters(data.data.monsters))
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monsters" element={<ListMonsters monsters={monsters} />} />
      {/* <Route path="/" element={<Home />} /> */}

      </Routes>
      <h1>Hyrule Compendium</h1>
    </div>
  );
}

export default App;
