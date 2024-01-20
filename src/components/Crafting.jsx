import { useState, useContext } from 'react';
import { InventoryContext } from '../helper/Context.jsx';

import { BAGS_DATA } from '../BAGS_DATA.js';

import { NewBags } from './NewBags.jsx';
import { Controls } from './Controls.jsx';
import { Recipe } from './Recipe.jsx';

export const Crafting = ({useBolts,setUseBolts}) => {
    const { inventoryData } = useContext(InventoryContext);

    let bags = {
        linen: {
            count: 0,
        },
        wool: {
            count: 0,
        },
        silk: {
            count: 0,
        }
    }
    const [needBags, setNeedBags] = useState(bags);

    const [showSummary, setShowSummary] = useState(true);

    // function resetBagCount(recipe){
    //     setNeedBags(prevNeedBags => ({
    //         ...prevNeedBags,
    //         [recipe.clothType]: {
    //             count: 0
    //         }
    //     }));
    // }

    // function craftBagsFromInv(recipe){
    //     let bagCount = needBags[recipe.clothType];
    //     return bagCount;
    // }

    const recipeElements = BAGS_DATA.map((recipe) => {

        // console.log('recipeElements->useBolts: ', useBolts);

        let bagCount = needBags[recipe.clothType];
        
        // console.log('bagCount: ', bagCount);

        let parent = 'recipe';
        

        return (
            bagCount.count > 0 && 
            <Recipe 
                key={recipe.id} 
                recipe={recipe} 
                parent={parent} 
                
                bagCount={bagCount.count} // needBags

                showSummary={showSummary} 
                useBolts={useBolts} 
            />
        )
    });

    return (
        <section className="crafting container">
            <NewBags 
                needBags={needBags} 
                setNeedBags={setNeedBags} 
            />
            <Controls 
                useBolts={useBolts} 
                setUseBolts={setUseBolts} 
                showSummary={showSummary} 
                setShowSummary={setShowSummary} 
            />
            <div className="recipes">
                <h4>Recipes</h4>
                {recipeElements}
            </div>
        </section>
    )
}