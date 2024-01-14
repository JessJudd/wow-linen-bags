import { MdClose, MdAdd } from 'react-icons/md';
import { useState, useContext, useId } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

export const Reagent = ({clothType, count, img, reagent, onClick, parent, recipeCount }) => {
    const { inventoryData, setInventoryData } = useContext(InventoryContext);
    const { name, type } = reagent;

    let fetchInventory = (name == 'cloth') ? inventoryData[type] : inventoryData[name][type];
    let inventory = fetchInventory.count;

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    function getInventoryClass(){
        let newClass;
        console.log('parent: ', parent);
        if (parent == 'all' && inventory > 0) {
            newClass = 'add-reagent-off';
        } else if(inventory < count && inventory > 0){
            newClass = 'not-craftable';
        } else if (inventory == count){
            newClass = 'craftable';
        } else if (inventory > count) {
            newClass = 'overstock';
        }
        return newClass;
    }

    const inventoryClassName = getInventoryClass();
    const className = `reagent ${name} parent-${parent} ${inventoryClassName}`;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    const handleChange = (event) => {
        const { name, id, value } = event.target;
        setReagentCount(name, id, value);
    };

    function setReagentCount(name, type, value) {
        if (name == 'cloth'){
            setInventoryData(prevInventoryData => ({
                ...prevInventoryData,
                [type]: {
                    count: value
                }
            }));
        } else {
            setInventoryData(prevInventoryData => ({
                ...prevInventoryData,
                [name]: {
                    ...prevInventoryData[name],
                    [type]: {
                        count: value
                    }
                }
            }));
        }
    }

    function getReagentCountNum(reagent){
        let num;
        let reagentCount = reagent.count;
        let vendorCount = recipeCount && `(${reagentCount * recipeCount})`;
        console.log('recipeCount: ', recipeCount);
        if(inventory > 0 && parent != 'inventory' && vendorCount == 0){
            num = <span className="num">{inventory}/{count}</span>;
        } else if ((recipeCount > 0 || count != vendorCount) && parent == 'recipe'){
            let inventoryNum = inventory > 0 ? `${inventory} / ` : '';
            num = <span className="num">{inventoryNum}{count} {vendorCount}</span>;
        } else {
            num = <span className="num">{count}</span>;
        }
        console.log('count: ', count);
        console.log('inventory: ', inventory);
        console.log('vendorCount: ', reagentCount * recipeCount);
        return num;
    }

    let reagentCountNum = getReagentCountNum(reagent);

    return (
        <div className={className}>
            <div className="reagent-main" 
                onClick={parent == 'all' && inventory == 0 ? ()=>setReagentCount(reagent.name, reagent.type, 1) : undefined}>
                <figure className="reagent-icon-container">
                        <span className="reagent-count icon">
                            {reagentCountNum}
                        </span>
                    <img className={`reagent-icon ${count > 0 ? "in-stock" : "" }`} src={imgUrl} />
                </figure>
                
                {parent != 'all' && 
                    <>
                    <span className="reagent-name">{reagentName}</span>
                    <span className="reagent-count">{reagentCountNum}</span>
                    </>
                }

            </div>
            {parent == 'inventory' && 
                <input 
                    id={type} 
                    className="reagent-count-input" 
                    name={name}  
                    type="number" 
                    value={fetchInventory.count} 
                    onChange={(e)=>handleChange(e)} 
                />
            }
            
            {(inventory > 0 && parent == 'inventory') && 
                <span className="reset-bag-count-icon inv" onClick={()=>setReagentCount(reagent.name, reagent.type, 0)}>
                    <MdClose color="red" size="1.25em" />
                </span>
            }
            
        </div>
    )
}