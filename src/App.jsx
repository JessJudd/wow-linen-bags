import './App.scss'

import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { Form } from './components/Form.jsx';

import { ClothToBags } from './components/ClothToBags.jsx';
import { BagsToCloth } from './components/BagsToCloth.jsx';

import { BagCalc } from './components/BagCalc.jsx';

import { Materials } from './components/Materials.jsx';

import { BAGS } from './constants.js';

function App() {

  const [faction,setFaction] = useState("");

  const [clothData, setClothData] = useState({
    clothType: 'linen',
    clothCount: 0,
    bagCount: 0
  });

  const { clothType } = clothData;

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

    console.log('clicked bag');

    setClothData(prevClothData => {

      return {
        ...prevClothData,
        bagCount: prevClothData.bagCount++
      }

    });

    console.log(clothData.bagCount);
  }

  function addCloth(event){
    event.preventDefault();

    console.log('clicked cloth');

    setClothData(prevClothData => {

      console.log(`cloth count ${prevClothData.clothCount}`);
      return {
        ...prevClothData,
        clothCount: prevClothData.clothCount++
      }

    });
  }
  
  const bagSize = clothType != '' ? BAGS[clothType].bagSize : '';
  const bagType = clothType === 'silk' ? 'pack' : 'bag';

  function resetCloth(event){
    event.preventDefault();

    setClothData(prevClothData => {

      return {
        clothType: 'linen',
        bagCount: 0,
        clothCount: 0,
      }

    });
  }

  function handleChangeFaction(event){
    setFaction(event.target.className);
  }

  return (
      <main>
        <Header handleChangeFaction={handleChangeFaction} faction={faction} />
        <div className={`bag-calc ${clothType}`}>
          <div className="bag-calc-inner">

            <Form 
              clothData={clothData} 
              handleChangeCloth={handleChangeCloth} 
              addBag={addBag} 
              addCloth={addCloth}
              resetCloth={resetCloth}
            />

            <BagCalc clothData={clothData} />

            {clothData.clothType != '' && 
              <Materials clothType={clothType} />
            }
        </div>
      </div>
      <footer></footer>
    </main>
  )

}

export default App
