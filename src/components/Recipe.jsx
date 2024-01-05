import { Reagent } from './Reagent.jsx';

export const Recipe = ({recipe, show}) => {

    const { clothType, bagName, reagents } = recipe;

    const reagentElements = reagents.map((reagent) => {
        return <Reagent 
            key={reagent.id} 
            reagent={reagent} 
            clothType={clothType}
        />
    });

    return (
        show != false &&
        <div className="recipe"> 
            <div className="recipe-header">
                <img className="recipe-icon" />
                <span className="recipe-name">{clothType} {bagName}</span>
            </div>
            
            <div className="recipe-reagents">
                { reagentElements }
            </div>

        </div>
    )
}