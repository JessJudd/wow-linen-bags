import { useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';
import { MdClose } from 'react-icons/md';
import { Reagent } from './Reagent.jsx';

export const Recipe = ({ recipe, showMaterials, onClick, count, parent, bagCount, resetBagCount }) => {
    const { clothType, bagName, reagents } = recipe;
    const { inventoryData } = useContext(InventoryContext);
    
    function fetchRecipeCount(reagent){
        let count = reagent.count * bagCount;
        return count;
    }

    function craftBagsFromInv(recipe){
        const { clothType, reagents } = recipe;

        console.log('craftBagsFromRecipe: ', recipe);
        let fetchInventory = inventoryData[clothType],
            invCount = fetchInventory.count;
        let fetchRecipeCloth = reagents[0],
            clothPerBag = fetchRecipeCloth.count;
        
        console.log('clothPerBag: ', clothPerBag);

        let math = (invCount > clothPerBag) && Math.floor(invCount / clothPerBag);
        return math;
    }

    const craftableCount = craftBagsFromInv(recipe);
    console.log('craftableCount: ', craftableCount);

    const reagentElements = reagents.map((reagent) => {

        let fetchInventoryReagent = (reagent.name == 'cloth') ? inventoryData[reagent.type] : inventoryData[reagent.name][reagent.type] ;

        let inventoryCount = fetchInventoryReagent && fetchInventoryReagent.count;
        
        return <Reagent 
            key={reagent.id} 
            reagent={reagent} 
            clothType={clothType}
            parent='recipe'
            img={`${reagent.name}_${reagent.type}.jpg`} 
            inventory={inventoryCount} 
            count={fetchRecipeCount(reagent)} 
        />
    });

    const imgPath = `../assets/${bagName}_${clothType}.jpg`;
    const imgUrl = new URL(imgPath, import.meta.url).href;
    let recipeClass = `recipe-single ${parent}`;

    return (
        <div className={recipeClass}> 
            <div className="recipe-header">
                <div className="recipe-icon-container" onClick={onClick}>
                    <span className="bag-count">
                        { bagCount ? <span className="num">{ parent == 'recipe' && craftableCount > 1 ? `(${craftableCount}) ` : '' }{bagCount}</span> : <span className="num">{count}</span>}
                    </span> 
                    <img className="recipe-icon" src={imgUrl} />
                </div>
                <span className="recipe-name" onClick={onClick}>{clothType} {bagName}</span> {(bagCount > 0 && parent == 'menu') && <span className="reset-bag-count-icon" onClick={resetBagCount}><MdClose color="red" size="1.5em" /></span>}
            </div>
            {showMaterials != false && <div className="recipe-reagents">
                { reagentElements }
            </div>}
        </div>
    )
}