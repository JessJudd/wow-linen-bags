import { useState } from 'react';
import { BAGS_DATA } from './BAGS_DATA.js';

import { Header } from './components/Header.jsx';
import { Inventory } from './components/Inventory.jsx';
import { Recipes } from './components/Recipes.jsx';

import './App.scss'

function App() {

  const [faction,setFaction] = useState("");
  
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
            <section className="newBags container">
              <h1>New Bags here</h1>
            </section>
            <Recipes />
            
        </div>
      </div>
      <footer></footer>
    </main>
  )

}

export default App
