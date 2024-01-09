import { useState } from 'react';
import { BAGS_DATA } from './BAGS_DATA.js';

import { Header } from './components/Header.jsx';
import { Inventory } from './components/Inventory.jsx';
import { Recipes } from './components/Recipes.jsx';

import './App.scss'

function App() {

  const [faction,setFaction] = useState("");

  const [inventoryData, setInventoryData] = useState({
    linen: {
      clothCount: 42,
      bagCount: 0
    },
    wool: {
      clothCount: 20,
      bagCount: 0
    },
    silk: {
      clothCount: 6,
      bagCount:0
    },
    leather: {
      count: 0,
    },
    thread: {
      coarseCount: 0,
      fineCount: 0
    }
  });
  
  function handleChangeFaction(event){
    setFaction(event.target.className);
  }

  function handleUpdateInventory(){

  }

  let factionClass = faction != '' ? `faction ${faction}` : '';

  return (
      <main className={factionClass}>
        <Header handleChangeFaction={handleChangeFaction} faction={faction} />
        <div className={`bag-calc`}>
          <div className="bag-calc-inner">

            <Inventory inventoryData={inventoryData} />
            <Recipes />
            
        </div>
      </div>
      <footer></footer>
    </main>
  )

}

export default App
