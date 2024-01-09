import { Reagent } from './Reagent.jsx';

export const Recipe = ({recipe, show}) => {

    const { clothType, bagName, reagents } = recipe;

    const reagentElements = reagents.map((reagent) => {
        return <Reagent 
            key={reagent.id} 
            reagent={reagent} 
            clothType={clothType}
            parent='recipe'
            img={`${reagent.name}_${reagent.type}.jpg`}
        />
    });

    const imgPath = `../assets/${bagName}_${clothType}.jpg`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    return (
        show != false &&
        <div className="recipe-single"> 
            <div className="recipe-header">
                <img className="recipe-icon" src={imgUrl} />
                <span className="recipe-name">{clothType} {bagName}</span>
            </div>
            
            <div className="recipe-reagents">
                { reagentElements }
            </div>

        </div>
    )
}