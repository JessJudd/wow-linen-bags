import { MdClose, MdAdd } from 'react-icons/md';
import { useState, useContext, useId } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

export const Reagent = ({clothType, count, img, reagent, onClick, parent }) => {
    const { inventoryData, setInventoryData } = useContext(InventoryContext);
    const { name, type, id } = reagent;
    console.log('reagent: ', reagent);

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