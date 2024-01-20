import { BAGS_DATA } from '../BAGS_DATA.js';
import { Recipe } from './Recipe.jsx';

export const NewBags = ({needBags, setNeedBags}) => {
    
    // console.log('NewBags->needBags: ', needBags);
    
    function addBag(recipe) {
        const { clothType } = recipe;

        let value = needBags[clothType];

        setNeedBags(prevNeedBags => ({
            ...prevNeedBags,
            [clothType]: {
                count: prevNeedBags[clothType].count + 1
            }
        }));
    }

    const handleChange = (event) => {
        const { name, id, value } = event.target;

        setNeedBags(prevNeedBags => ({
            ...prevNeedBags,
            [name]: {
                count: value
            }
        }));
    }

    const listBags = BAGS_DATA.map((recipe) => {
        let fetchBag = needBags[recipe.clothType];
        let bagCount = fetchBag.count;

        let parent = 'menu';

        return (
            <Recipe 
                key={recipe.id} 
                recipe={recipe} 
                parent={parent} 
                count={bagCount} 

                needBags={needBags} 
                setNeedBags={setNeedBags} 

                bagCount={bagCount} 
                addBag={() => addBag(recipe)} 
                resetBagCount={()=> resetBagCount(recipe)} 
                handleChange={(e) => handleChange(e)}
            />
        )
    });

    return (
        <section className="newBags">
            <h4>Phase 1 Bags</h4>
            <div className="blurb">
                <p>Click a bag to set the amount you want to craft.</p>
            </div>
            <div className="bag-menu">
                { listBags }
            </div>
        </section>
    )
}