import { useState } from 'react';
import { BAGS_DATA } from './constants.js';

import { Header } from './components/Header.jsx';
import { Inventory } from './components/Inventory.jsx';
import { Recipes } from './components/Recipes.jsx';

import './App.scss'

function App() {

  const [faction,setFaction] = useState("");

  const [clothData, setClothData] = useState({
    linen: {
      clothCount: 0,
      bagCount: 0,
    },
    wool: {
      clothCount: 0,
      bagCount: 0,
    },
    silk: {
      clothCount: 0,
      leatherCount: 0,
      bagCount:0,
    }
  });
  
  function handleChangeFaction(event){
    setFaction(event.target.className);
  }

  let factionClass = faction != '' ? `faction ${faction}` : '';

  return (
      <main className={factionClass}>
        <Header handleChangeFaction={handleChangeFaction} faction={faction} />
        <div className={`bag-calc`}>
          <div className="bag-calc-inner">

            <Inventory />
            <Recipes clothData={clothData} />
            
        </div>
      </div>
      <footer></footer>
    </main>
  )

}

export default App
