import { useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

export const RecipeSummaryListItem = ({reagent, bagCount}) => {

    const { inventoryData } = useContext(InventoryContext);

    let fetchInventoryReagent = (reagent.name == 'cloth') ? 
            inventoryData[reagent.type] : inventoryData[reagent.name][reagent.type];

    let inventoryCount = fetchInventoryReagent && fetchInventoryReagent.count;

    let count = <span className="inventory-count">({inventoryCount})</span>;

    return (
        <li className="summary-list-item caps">
            {reagent.type} {reagent.name}        
            { inventoryCount > 0 && count }
            <span className="count-border"></span>
            <span className="count">x{reagent.count * bagCount}</span>
        </li>
    )
}