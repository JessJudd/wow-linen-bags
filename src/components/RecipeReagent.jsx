import { useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

export const RecipeReagent = ({ 
        reagent, 
        count, 
        type, 
    }) => {

    const { inventoryData } = useContext(InventoryContext);
    
    // console.log('inventoryData: ', inventoryData);

    let inventoryCount = (reagent.name == 'cloth') ? inventoryData[type].count : inventoryData[reagent.name][type].count; 
    console.log('inventoryCount: ', inventoryCount);
    
    function getInventoryClass(){
        let reagentClass;
        if(inventoryCount < count && inventoryCount > 0){
            reagentClass = 'not-craftable';
        } else if (inventoryCount == count){
            reagentClass = 'craftable';
        } else if (inventoryCount > count) {
            reagentClass = 'overstock';
        }
        return reagentClass;
    }

    let reagentClassName = getInventoryClass();

    let reagentCount = inventoryCount > 0 ? `${inventoryCount}/${count}` : count;

    let imgPath = `../assets/${reagent.name}_${reagent.type}.jpg`;
    const imgUrl = new URL(imgPath, import.meta.url).href;
    
    return (
        <div className={`reagent ${reagent.name} parent-recipe ${reagentClassName}`}>
            <div className="reagent-main">
                <figure className="reagent-icon-container">
                    <span className="reagent-count icon">
                        <span className="num">{reagentCount}</span>
                    </span>
                    <img className={`reagent-icon ${count > 0 ? "in-stock" : "" }`} src={imgUrl} />
                </figure>
                <span className="reagent-name">{`${reagent.type} ${reagent.name}`}</span>
            </div>
        </div>
    )
}