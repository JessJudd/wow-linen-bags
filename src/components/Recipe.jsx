import { Reagent } from './Reagent.jsx';

export const Recipe = ({recipe, showMaterials, onClick, count, parent, bagCount, inventory}) => {
    const { clothType, bagName, reagents } = recipe;
    
    console.log('recipe->inventory: ', inventory);

    function fetchRecipeCount(reagent){
        console.log('reagent: ', reagent.name);
        let count = reagent.count * bagCount;
        console.log('fetchRecipeCount->reagent.count: ', reagent.count);
        return count;
    }

    const reagentElements = reagents.map((reagent) => {

        const fetchInventoryReagent = inventory && 
        (reagent.name == 'cloth' ? inventory[clothType] : inventory[reagent.name][reagent.type]);
        
        console.log('recipe->fetchInventoryReagent: ', fetchInventoryReagent);

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
        <div className={recipeClass} onClick={onClick}> 
            <div className="recipe-header">
                <div className="recipe-icon-container">
                    <span className="bag-count">
                        { bagCount ? <span className="num">{bagCount}</span> : <span className="num">{count}</span>}
                    </span> 
                    <img className="recipe-icon" src={imgUrl} />
                </div>
                <span className="recipe-name">{clothType} {bagName}</span>
            </div>
            {showMaterials != false && <div className="recipe-reagents">
                { reagentElements }
            </div>}
        </div>
    )
}