import { BAGS_DATA } from '../BAGS_DATA.js';
import { ALL_REAGENTS } from '../ALL_REAGENTS.js';

import { Reagent } from './Reagent.jsx';

// note from Jandy 11 -> clicky the reagent to "add" to inventory,  need a new inventory section

export const Inventory = ({inventoryData}) => {

    const reagentElements = ALL_REAGENTS.map((reagent) => {
        const { id, name, type } = reagent;

        const fetchInventoryReagent = name == 'cloth' || name == 'bolt' ? inventoryData[type] : inventoryData[name];

        let inventoryReagent;
        let reagentCount;

        switch(name) {
            case 'cloth':
                inventoryReagent = inventoryData[type];
                reagentCount = inventoryReagent.clothCount;
                console.log(`[Inventory.jsx] ${name} ${reagentCount}`);
            break;
            case 'leather':
                inventoryReagent = inventoryData[name];
                reagentCount = inventoryReagent.count;
                console.log(`[Inventory.jsx] ${name} ${reagentCount}`);
            break;
            case 'thread':
                inventoryReagent = inventoryData[name];
                reagentCount = inventoryReagent[`${type}Count`];
                console.log(`[Inventory.jsx] ${name} ${reagentCount}`);
            break;
        }
        // replace the switch with CONTEXT???? https://react.dev/learn/passing-data-deeply-with-context

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