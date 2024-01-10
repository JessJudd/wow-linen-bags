import { useState} from 'react';

import { BAGS_DATA } from '../BAGS_DATA.js';

import { Recipe } from './Recipe.jsx';

export const Recipes = () => {

    const [needBags,setNeedBags] = useState({
        linen: {
          count: 0,
        },
        wool: {
          count: 0,
        },
        silk: {
          count: 0,
        }
    });

    const recipeList = BAGS_DATA.map((recipe) => {

        const { id, clothType, bagName } = recipe;

        return (
            <li key={id} className={clothType}>{clothType} {bagName}</li>
        )
    });

    const recipeElements = BAGS_DATA.map((recipe) => {

        return (
            <Recipe 
                key={recipe.id} 
                recipe={recipe}
            />
        )
    });

    return (
        <section className="recipes container">
            <h4>Recipes</h4>
            <div className="all-recipes">
                <ul>
                    {recipeList}
                </ul>
            </div>
            {recipeElements}
        </section>
    )
}