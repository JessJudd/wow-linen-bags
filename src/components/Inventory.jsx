import { useState } from 'react';

// import { BAGS_DATA } from '../BAGS_DATA.js';
import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';

// note from Jandy 11 -> clicky the reagent to "add" to inventory,  need a new inventory section

export const Inventory = () => {

    const [inventoryData, setInventoryData] = useState({
        linen: { 
          count: 42,
        },
        wool: {
          count: 20,
        },
        silk: {
          count: 6,
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

    const reagentElements = ALL_REAGENTS.map((reagent) => {
        const { id, name, type } = reagent;

        const fetchInventoryReagent = name == 'cloth' ? inventoryData[type] : inventoryData[name][type];

        let reagentCount = fetchInventoryReagent.count;

        return <Reagent 
            key={id} 
            reagent={reagent} 
            clothType={type} 
            parent='inventory' 
            img={`${name}_${type}.jpg`} 
            count={reagentCount}
        />
    });

    return (
        <section className="inventory container">
            <h4>Inventory</h4>
            <div className="inventory-reagents">

                {reagentElements}

            </div>
            <div className="inventory-controls">
                <button className="edit-inv">Bulk Edit</button>
                <button className="reset-inv">Reset All</button>
            </div>
        </section>
    )
}