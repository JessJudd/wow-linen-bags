import { useState, createContext } from 'react';


import { Header } from './components/Header.jsx';
import { Inventory } from './components/Inventory.jsx';
import { Crafting } from './components/Crafting.jsx';

import './App.scss'

import { InventoryContext } from './helper/Context.jsx';

function App() {

  let inventory = {
    linen: { 
      count: 0,
    },
    wool: {
      count: 0,
    },
    silk: {
      count: 0,
    },
    leather: {
      heavy: {
        count: 0,
      },
    },
    thread: {
      coarse: {
        count:0
      },
      fine: {
        count: 0
      },
    }
  }
  const [inventoryData, setInventoryData] = useState(inventory);

  const [faction,setFaction] = useState("");
  function handleChangeFaction(event){
    setFaction(event.target.className);
  }

  function resetAll(){
    console.log('resetting inventory');
    setInventoryData(prevInventoryData => inventory);
  }

  let factionClass = faction != '' ? `faction ${faction}` : '';

  return (
      <InventoryContext.Provider value={{inventoryData,setInventoryData}}>
        <main className={factionClass}>
          <Header handleChangeFaction={handleChangeFaction} faction={faction} />
          <div className={`bag-calc`}>
            <div className="bag-calc-inner">
              <Inventory 
                resetAll={resetAll} 
              />
              <Crafting inventoryData={inventoryData} />
            </div>
          </div>
          <footer></footer>
        </main>
      </InventoryContext.Provider>
  )

}

export default App
