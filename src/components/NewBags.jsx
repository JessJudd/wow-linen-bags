import { BAGS_DATA } from '../BAGS_DATA.js';
import { Recipe } from './Recipe.jsx';

export const NewBags = ({needBags, setNeedBags, resetBagCount}) => {

    function addBag(recipe) {
        const { clothType } = recipe;

        let value = needBags[clothType];

        setNeedBags(prevNeedBags => ({
            ...prevNeedBags,
            [clothType]: {
                count: value.count + 1
            }
        }));
    }

    const listBags = BAGS_DATA.map((recipe) => {
        let fetchBag = needBags[recipe.clothType];
        let bagCount = fetchBag.count;

        return (
            <Recipe 
                key={recipe.id} 
                recipe={recipe} 
                showMaterials={false}
                onClick={() => addBag(recipe)} 
                bagCount={bagCount} 
                showCount={true} 
                parent="menu"
                resetBagCount={()=> resetBagCount(recipe)}
            />
        )
    });

    return (
        <section className="newBags">
            <h4>Phase 1 Bags</h4>
            <div className="blurb">
                <p>Set the amount of each bag you want to craft.</p>
            </div>
            <div className="bag-menu">
                { listBags }
            </div>
        </section>
    )
}