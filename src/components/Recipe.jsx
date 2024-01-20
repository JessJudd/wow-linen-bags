import { useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';
import { MdClose } from 'react-icons/md';


import { RecipeHeader } from './RecipeHeader.jsx';
import { RecipeReagent } from './RecipeReagent.jsx';
import { RecipeSummaryListItem } from './RecipeSummaryListItem.jsx';

export const Recipe = (
    {   recipe, 
        parent, 
        count, //
        bagCount, // needBags[recipe.clothType].count 

        needBags, 
        setNeedBags,
        
        
        addBag, 
        
        resetBagCount,  
        showSummary, 
        useBolts }) => {
            
            // console.log('[Recipe] parent: ', parent);
            
            const { clothType, bagName, reagents } = recipe;
            const { inventoryData } = useContext(InventoryContext);
            
            
            // console.log('[Recipe] needBags: ', needBags);

    // const handleChange = (event) => {
    //     const { name, id, value } = event.target;

    //     setNeedBags(prevNeedBags => ({
    //         ...prevNeedBags,
    //         [name]: {
    //             count: value
    //         }
    //     }));
    // }

    // function craftBagsFromInv(recipe){
    //     const { clothType, reagents } = recipe;

    //     let fetchInventory = inventoryData[clothType],
    //         invCount = fetchInventory.count;
    //     let fetchRecipeCloth = reagents[0],
    //         clothPerBag = fetchRecipeCloth.count;

    //     let math = (invCount > clothPerBag) && Math.floor(invCount / clothPerBag);
    //     return math;
    // }

    function craftBagsFromInv(){
        let inventory = inventoryData[clothType].count;
        let clothPerBag = reagents[0].count;
        return Math.floor(inventory / clothPerBag);
    }
    
    let craftableCount = craftBagsFromInv(recipe); 
    console.log('craftableCount: ', craftableCount); 

    const recipeReagents = reagents.map((reagent) => {
        
        let isCloth = reagent.name == 'cloth' ? true : false;
        
        let inventoryCount = isCloth ? inventoryData[reagent.type].count : inventoryData[reagent.name][reagent.type].count;
        // console.log('inventoryCount: ', inventoryCount);
        
        return <RecipeReagent 
            key={reagent.id} 
            reagent={reagent} 
            recipe={recipe} 
            count={reagent.count * bagCount} 
            type={reagent.type} 
            parent="recipe" 
        />
    });

    const reagentList = reagents.map((reagent) => {
        return <RecipeSummaryListItem 
        key={reagent.type} 
        reagent={reagent} 
        bagCount={bagCount} 
        craftableCount={craftableCount} 
        />
    });
    
    console.log('reagentList: ', reagentList);

    // const imgPath = `../assets/${bagName}_${clothType}.jpg`;
    // const imgUrl = new URL(imgPath, import.meta.url).href;

    let recipeClass = `recipe-single ${parent}`;
    console.log('needBags: ', needBags);

    let showCraftableCount = craftableCount > 0 && <span className="inventory-count">({craftableCount})</span>
    let showBagCount = bagCount > 0 && <span className="count">x{bagCount}</span>;

    return (
        <div className={recipeClass}> 
            <RecipeHeader 
                parent={parent} 
                recipe={recipe} 
                count={bagCount} 

                needBags={needBags} 
                setNeedBags={setNeedBags} 
            />

            {parent == 'recipe' && <div className="recipe-reagents">
                { recipeReagents }
            </div>}

            {parent == 'recipe' && showSummary != false && <div className="recipe-summary">
                <h4 className="summary-title caps">{clothType} {bagName} {showCraftableCount}<span className="count-border"></span>{showBagCount}</h4>
                <ul className="summary-list">
                    { reagentList }
                </ul>
            </div>}
        </div>
    )
}