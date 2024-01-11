import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';

export const Inventory = ({inventoryData,setInventoryData, resetReagentCount, resetAll}) => {

  const inventoryElements = ALL_REAGENTS.map((reagent) => {
    const { name, type } = reagent;
    const fetchInventoryReagent = name == 'cloth' ? inventoryData[type] : inventoryData[name][type];
    let reagentCount = fetchInventoryReagent.count;

    return reagentCount > 0 && <Reagent 
        key={reagent.id} 
        count={reagentCount}
        clothType={type} 
        img={`${name}_${type}.jpg`} 
        parent='inventory' 
        reagent={reagent} 
    />
  });

  function addReagent(name, type){

    let property, 
    fetchCount,
    value;
    
    if (name == 'cloth') {
      property = type;
      fetchCount = inventoryData[property];
      value = fetchCount.count;
      setInventoryData(prevInventoryData => ({
        ...prevInventoryData,
        [property]: {
          count: value + 1
        },
      }));
    } else {
      property = name;
      fetchCount = inventoryData[property][type];
      value = fetchCount.count;
      setInventoryData(prevInventoryData => ({
        ...prevInventoryData,
        [property]: {
          ...prevInventoryData[name],
          [type]: {
            count: value + 1
          },
        },
      }));
    }
  }

  const reagentElements = ALL_REAGENTS.map((reagent) => {
      const { name, type } = reagent;
      const fetchInventoryReagent = name == 'cloth' ? inventoryData[type] : inventoryData[name][type];
      let reagentCount = fetchInventoryReagent.count;

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
            <button className="edit-inv">Bulk Edit</button>
            <button className="reset-inv" onClick={resetAll}>Reset All</button>
          </div>
      </section>
  )
}