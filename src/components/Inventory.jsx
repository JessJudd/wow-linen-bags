import { useState } from 'react';

// import { BAGS_DATA } from '../BAGS_DATA.js';
import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';

// note from Jandy 11 -> clicky the reagent to "add" to inventory,  need a new inventory section

export const Inventory = () => {

    const [inventoryData, setInventoryData] = useState({
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
          }
        },
        thread: {
          coarse: {
            count:0
          },
          fine: {
            count: 0
          }
        }
    });

    const inventoryElements = ALL_REAGENTS.map((reagent) => {
      const { id, name, type } = reagent;

      const fetchInventoryReagent = name == 'cloth' ? inventoryData[type] : inventoryData[name][type];

      let reagentCount = fetchInventoryReagent.count;

      return reagentCount > 0 && <Reagent 
          key={id} 
          reagent={reagent} 
          clothType={type} 
          parent='inventory' 
          img={`${name}_${type}.jpg`} 
          count={reagentCount}
      />
    });

    function addReagent(){
      console.log(`clicked!`);
    }

    const reagentElements = ALL_REAGENTS.map((reagent) => {
        const { id, name, type } = reagent;

        const fetchInventoryReagent = name == 'cloth' ? inventoryData[type] : inventoryData[name][type];

        let reagentCount = fetchInventoryReagent.count;

        return <Reagent 
            key={id} 
            reagent={reagent} 
            clothType={type} 
            parent='all' 
            img={`${name}_${type}.jpg`} 
            count={reagentCount}
            onClick={addReagent}
        />
    });

    return (
        <section className="inventory container">
            <h4>Inventory</h4>
            <div className="user-reagents">
              {inventoryElements}
            </div>
            <div className="all-reagents">
              {reagentElements}
            </div>
            <div className="inventory-controls">
              <button className="edit-inv">Bulk Edit</button>
              <button className="reset-inv">Reset All</button>
            </div>
        </section>
    )
}