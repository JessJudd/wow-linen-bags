import { useState } from 'react';

import { BAGS_DATA } from '../BAGS_DATA.js';

import { NewBags } from './NewBags.jsx';
import { Recipe } from './Recipe.jsx';

export const Crafting = ({inventoryData}) => {
    console.log('crafting->inventoryData: ', inventoryData);

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
    const [needBags,setNeedBags] = useState(bags);

    const recipeElements = BAGS_DATA.map((recipe) => {

        let bagCount = needBags[recipe.clothType];

        return (
            bagCount.count > 0 && 
            <Recipe 
                key={recipe.id} 
                recipe={recipe} 
                showMaterials={true} 
                parent="menu" 
                bagCount={bagCount.count} 
                inventory={inventoryData}
            />
        )
    });

    return (
        <section className="crafting container">
            <NewBags needBags={needBags} setNeedBags={setNeedBags} />
            <div className="recipes">
                <h4>Recipes</h4>
                {recipeElements}
            </div>
        </section>
    )
}