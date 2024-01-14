import { useContext, useState } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';


export const Inventory = ({resetAll}) => {

  const [ bulkEdit, setBulkEdit ] = useState(false);

  const { inventoryData, setInventoryData } = useContext(InventoryContext);

  function toggleBulkEdit(){
    setBulkEdit(prevBulkEdit => !prevBulkEdit);
    console.log(`toggle bulk edit ${bulkEdit}`);
  }

  function handleShowBulkEdit(inventoryData) {
    let show;
    Object.entries(inventoryData).forEach((item) => {
      console.log('item: ', item);
      let name = item[0];
      let count;
      
      if (name == 'thread' || name == 'leather'){
        if(name == 'thread'){
          console.log('thread');
          let coarse = item[1].coarse;
          let fine = item[1].fine;
          if (coarse > 0 || fine > 0){
            return show = true;
          }
          return show;
        } else if (name == 'leather') {
          console.log('leather');
          let heavy = item[1].heavy;
          if (heavy > 0){
            return show = true;
          }
          return show;
        }
        return show;
      } else {
        console.log('cloth');
        count = item[1].count;
        
        if (count > 0){
          show = true;
        }

      }
      return show;
    });
    return show;
  }
  let showBulkEdit = handleShowBulkEdit(inventoryData);
  console.log('showBulkEdit: ', showBulkEdit);

  const inventoryElements = ALL_REAGENTS.map((reagent) => {
    const { name, type } = reagent;
    // console.log(inventoryData);

    let inventoryCount = name == 'cloth' ? inventoryData[type].count : inventoryData[name][type].count;

    return inventoryCount > 0 && <Reagent 
        key={reagent.id} 
        count={inventoryCount}
        clothType={type} 
        img={`${name}_${type}.jpg`} 
        parent='inventory' 
        reagent={reagent} 
    />
  });

  function addReagent(name, type){
    console.log('*| clicked AddReagent |*');
    let property;
    
    if (name == 'cloth') {
      property = type;
      setInventoryData(prevInventoryData => ({
        ...prevInventoryData,
        [property]: {
          count: prevInventoryData[property].count++
        },
      }));
      console.log(`inventoryData[${property}].count`, inventoryData[property].count);
    } else {
      property = name;
      setInventoryData(prevInventoryData => ({
        ...prevInventoryData,
        [property]: {
          ...prevInventoryData[name],
          [type]: {
            count: prevInventoryData[name][type].count++
          },
        },
      }));
    }
  }

  const reagentElements = ALL_REAGENTS.map((reagent) => {
      const { name, type } = reagent;

      let reagentCount = name == 'cloth' ? inventoryData[type].count : inventoryData[name][type].count

      return <Reagent 
          key={reagent.id} 
          clothType={type} 
          count={reagentCount}
          img={`${name}_${type}.jpg`} 
          reagent={reagent} 
          onClick={()=>addReagent(name, type)} 
          parent='all' 
      />
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
            { showBulkEdit && <button className="edit-inv" onClick={toggleBulkEdit}>Bulk Edit</button>}
          </div>
      </section>
  )
}