import './App.scss'

import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { ClothToBags } from './components/ClothToBags.jsx';
import { BagsToCloth } from './components/BagsToCloth.jsx';

import { BAGS } from './constants.js';

function App() {

  const [clothType,setClothType] = useState("");

  const [clothCount,setClothCount] = useState(0);
  const [bagCount,setBagCount] = useState(0);

  let propertyName = clothType;
  const clothMultiplier = clothType != '' ? BAGS[propertyName].clothCount : '';
  const boltMultiplier = clothType != '' ? BAGS[propertyName].boltCount : '';
  const threadType = clothType != '' ? BAGS[propertyName].threadType : '';
  const threadCount = clothType != '' ? BAGS[propertyName].threadCount : '';
  const threadCost = clothType != '' ? BAGS[propertyName].threadCost : '';
  const coinage = threadCost === 1 ? 'sp' : 'cp';

  const bagType = clothType === 'silk' ? 'pack' : 'bag';

  function chooseClothType(event) {
    setClothType(event.target.value);
    resetAll();
  }

  function resetAll(){
      setClothCount(0);
      setBagCount(0);
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

          {clothType != '' && 
          <>
            <div className="player-input">

                <ClothToBags clothType={clothType} clothCount={clothCount} setClothCount={setClothCount} />

                <BagsToCloth clothType={clothType} bagCount={bagCount} setBagCount={setBagCount} />
                
            </div>
            
            <div className="mats">
                <p>1x bolt of {clothType} cloth = {clothMultiplier}x {clothType} cloth</p>
                <p>1x {clothType} {bagType} = {boltMultiplier}x bolt of {clothType} cloth + {threadCount} {threadType}</p>
                <p>1x {threadType}: {threadCost} {coinage}</p>
                {/* <button onClick={resetAll}>Reset All</button> */}
            </div>
            </>
          }


      </section>
  )

}

export default App
