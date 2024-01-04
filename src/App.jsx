import './App.scss'

import { useState } from 'react';

import { Header } from './components/Header.jsx';

import { Inventory } from './components/Inventory.jsx';
import { Recipes } from './components/Recipes.jsx';

import { BAGS } from './constants.js';

function App() {

  const [faction,setFaction] = useState("");

  const [clothData, setClothData] = useState({
    clothType: 'linen',
    clothCount: 0,
    bagCount: 1
  });

  function handleChangeCloth(event){
    
    setClothData(prevClothData => {

      const {name, value} = event.target;

      return {
        ...prevClothData,
        [name]: value,
      }

    });
  }
  function addBag(event){
    event.preventDefault();

    setClothData(prevClothData => {

      return {
        ...prevClothData,
        bagCount: prevClothData.bagCount + 1
      }

    });

    console.log(`addBag ${clothData.bagCount}`);
  }
  function addCloth(event){
    event.preventDefault();

    console.log('clicked cloth');

    setClothData(prevClothData => {

      console.log(`cloth count ${prevClothData.clothCount}`);
      return {
        ...prevClothData,
        clothCount: prevClothData.clothCount + 1
      }

    });
  }
  
  const bagSize = clothData.clothType != '' ? BAGS[clothData.clothType].bagSize : '';
  const bagType = clothData.clothType === 'silk' ? 'pack' : 'bag';

  function resetAll(event){
    event.preventDefault();

    setClothData(prevClothData => {

      return {
        ...prevClothData,
        bagCount: 1,
        clothCount: 0,
      }

    });
  }

  function handleChangeFaction(event){
    setFaction(event.target.className);
  }

  return (
      <main className={faction != '' && `faction ${faction}`}>
        <Header handleChangeFaction={handleChangeFaction} faction={faction} />
        <div className={`bag-calc ${clothData.clothType}`}>
          <div className="bag-calc-inner">

            <Inventory />
            <Recipes />
            
        </div>
      </div>
      <footer></footer>
    </main>
  )

}

export default App
