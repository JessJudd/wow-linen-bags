import { useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';
import { MdClose } from 'react-icons/md';

export const RecipeHeader = (
    {   parent, 
        recipe, 
        count,
        
        needBags, 
        setNeedBags, 
        
    }) => {
        
        const { inventoryData } = useContext(InventoryContext);
        
        const { bagName, clothType, reagents } = recipe;
        
        
        
        let imgPath = `../assets/${bagName}_${clothType}.jpg`;
        const imgUrl = new URL(imgPath, import.meta.url).href;
        
        function addBag(recipe) {
            const { clothType } = recipe;            
            
            setNeedBags(prevNeedBags => ({
                ...prevNeedBags,
                [clothType]: {
                    count: parseInt(prevNeedBags[clothType].count) + 1
                }
            }));
        }
        function resetBagCount(){
            setNeedBags(prevNeedBags => ({
                ...prevNeedBags,
                [recipe.clothType]: {
                    count: 0
                }
            }));
        }
        const handleSetBagCount = (event) => {
            const { name, value } = event.target;

            setNeedBags(prevNeedBags => ({
                ...prevNeedBags,
                [name]: {
                    count: value
                }
            }));
        }
        function getCraftableFromInventory(){
            let inventory = inventoryData[clothType].count;
            let clothPerBag = reagents[0].count;
            return Math.floor(inventory / clothPerBag);
        }

        const bagInput = <input id={clothType} 
            className="count-input" 
            name={clothType}  
            type="number" 
            value={count} 
            onChange={(e)=>handleSetBagCount(e)} 
        />;

        const bagReset = <span className="reset-bag-count-icon" onClick={resetBagCount}><MdClose color="red" size="1.5em" /></span>;


        let craftableFromInventory = getCraftableFromInventory();
        console.log('parent: ', parent);
        console.log('craftableFromInventory: ', craftableFromInventory);
        const bagCount = (parent == 'recipe' && craftableFromInventory > 0) ? `(${craftableFromInventory}) ${count}` : count;

    return (
        <div className="recipe-header">

            <div className="recipe-icon-container" onClick={ parent == 'menu' ? 
            ()=>addBag(recipe) : undefined }>
                <span className="bag-count"> 
                    <span className="num">
                        { bagCount }
                    </span> 
                </span> 
                <img className="recipe-icon" src={imgUrl} />
            </div>

            <span className="recipe-name">
                {clothType} {bagName}
            </span> 

            { (parent == 'menu' && count > 0) &&
                <>
                { bagInput } 
                { bagReset } 
                </>
            }
        </div>
    )
}