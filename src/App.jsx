import './App.scss'

import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { ClothToBags } from './components/ClothToBags.jsx';
import { BagsToCloth } from './components/BagsToCloth.jsx';

import { BAGS } from './constants.js';

function App() {

  const [clothType,setClothType] = useState("");

  function chooseClothType(event) {
    console.log(event.target.value);
  }

  const [linenCloth,setLinenCloth] = useState(0);
  const [linenBags,setLinenBags] = useState(0);

  function resetAll(){
      setLinenCloth(0);
      setLinenBags(0);
  }

  return (
      <section className="bag-calc">
          <Header />
          <form className="choose-cloth-type">
            <label htmlFor="clothType">What type of cloth bags do you want?</label>
            <select 
              id="clothType" 
              value={clothType} 
              onChange={chooseClothType}
            >
              <option value="">- Choose -</option>
              <option value="linen">Linen Cloth</option>
              <option value="wool">Wool Cloth</option>
              <option value="silk">Silk Cloth</option>
            </select>
          </form>
          <div className="player-input">

              <ClothToBags linenCloth={linenCloth} setLinenCloth={setLinenCloth} />

              <BagsToCloth linenBags={linenBags} setLinenBags={setLinenBags} />
              
          </div>
          
          <div className="mats">
              <p>1x Bolt of {clothType} Cloth = {BAGS.clothCount}x {clothType} Cloth</p>
              <p>1x {clothType} Bag = {BAGS.boltCount}x Bolt of Linen Cloth + {BAGS.threadCount} {BAGS.threadType}</p>
              <p>1x Coarse Thread: 10cp</p>
          </div>

          <button onClick={resetAll}>Reset All</button>

      </section>
  )

}

export default App
