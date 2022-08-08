import React, { useEffect } from "react";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
function App() {
  
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2.")
    .then(r => r.json())
    .then(data => console.log(data.data))
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <h1>Hyrule Compendium</h1>
    </div>
  );
}

export default App;
