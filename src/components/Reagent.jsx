import { MdClose, MdAdd } from 'react-icons/md';
import { useState, useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

export const Reagent = ({clothType, count, img, reagent, onClick, parent }) => {
    const { inventoryData, setInventoryData } = useContext(InventoryContext);
    const { name, type } = reagent;

    let fetchInventory = (name == 'cloth') ? inventoryData[type] : inventoryData[name][type];
    let inventory = fetchInventory.count;

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    let className = `reagent 
    ${name} parent-${parent}  
    ${inventory < count && inventory > 0 ? 'not-craftable' : ''} 
    ${inventory == count ? 'craftable' : ''} 
    ${inventory > count ? 'overstock' : ''} 
    `;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    const handleChange = (event) => {
        console.log('handleSetInventoryData event: ', event.target);
    };

    function resetReagentCount(reagent) {
        if (reagent.name == 'cloth'){
            setInventoryData(prevInventoryData => ({
                ...prevInventoryData,
                [reagent.type]: {
                    count: 0
                }
            }));
        } else {
            setInventoryData(prevInventoryData => ({
                ...prevInventoryData,
                [reagent.name]: {
                    ...prevInventoryData[reagent.name],
                    [reagent.type]: {
                        count: 0
                    }
                }
            }));
        }
    }

    return (
        <div className={className} onClick={onClick}>
            <div className="reagent-main">
                <figure className="reagent-icon-container">
                    {parent != 'all' && 
                        <span className="reagent-count">
                            {inventory > 0 && parent != 'inventory' ? 
                                <span className="num">{inventory}/{count}</span>
                                :
                                <span className="num">{count}</span>
                            }
                            
                        </span>
                    }
                    <img className={`reagent-icon ${count > 0 ? "in-stock" : "" }`} src={imgUrl} />
                </figure>
                
                {parent != 'all' && 
                    <span className="reagent-name">{reagentName}</span>
                }
            </div>
            {parent == 'inventory' && 
                <input 
                    className="reagent-count-input" 
                    name="inventory" 
                    type="number" 
                    value={inventory} 
                    onChange={(e)=>handleChange(e)} 
                />
            }
            
            {(inventory > 0 && parent == 'inventory') && 
                <span className="reset-bag-count-icon inv" onClick={()=>resetReagentCount(reagent)}>
                    <MdClose color="red" size="1.25em" />
                </span>
            }
            
        </div>
    )
}