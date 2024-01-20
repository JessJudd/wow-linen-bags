import { useContext, useState } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';
import { InventoryReagent } from './InventoryReagent.jsx';

export const Inventory = ({resetAll, useBolts}) => {

  const { inventoryData, setInventoryData } = useContext(InventoryContext);

  const inventoryElements = ALL_REAGENTS.map((reagent) => {
    const { name, type } = reagent;

    let inventoryCount = name == 'cloth' ? inventoryData[type].count : inventoryData[name][type].count;

    if (inventoryCount >= 1 && (( name == 'bolt' && useBolts == true ) || ( name != 'bolt'))) {

      return <InventoryReagent   
        key={reagent.id} 
        count={inventoryCount} 
        parent='inventory' 
        reagent={reagent} 
        type={type} 

        />
    }

  });

  // function addReagent(name, type){
  //   let property;
    
  //   if (name == 'cloth') {
  //     property = type;
  //     setInventoryData(prevInventoryData => ({
  //       ...prevInventoryData,
  //       [property]: {
  //         count: prevInventoryData[property].count++
  //       },
  //     }));
  //   } else {
  //     property = name;
  //     setInventoryData(prevInventoryData => ({
  //       ...prevInventoryData,
  //       [property]: {
  //         ...prevInventoryData[name],
  //         [type]: {
  //           count: prevInventoryData[name][type].count++
  //         },
  //       },
  //     }));
  //   }
  // }

  const reagentElements = ALL_REAGENTS.map((reagent) => {
      const { name, type } = reagent;

      let reagentCount = name == 'cloth' ? inventoryData[type].count : inventoryData[name][type].count;

      if (( name == 'bolt' && useBolts == true ) || ( name != 'bolt')) {
        return <InventoryReagent   
          key={reagent.id} 
          count={reagentCount} 
          parent='menu' 
          reagent={reagent} 
          type={type} 
        />
      }

  });

  return (
      <section className="inventory container">
          <h4>Inventory</h4>
          <div className="user-reagents">
            {inventoryElements}
          </div>
          <p>Click the reagents to add to your inventory.</p>
          <div className="all-reagents">
            {reagentElements}
          </div>
          <div className="inventory-controls">
            <button className="reset-inv" onClick={resetAll}>Reset All</button>
          </div>
      </section>
  )
}