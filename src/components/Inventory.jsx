import { BAGS_DATA } from '../constants.js';

import { Reagent } from './Reagent.jsx';

export const Inventory = () => {

    let uniqueReagents = [];
    let newReagents;

    const reagentElements = BAGS_DATA.map((recipe) => {

        const { id, clothType, reagents } = recipe;

        // reagents.forEach(r => {
        //     if(!allReagents.find(item => item.id === r.id)){
        //         allReagents.push(r);
        //     }
        // });

        uniqueReagents.push(...reagents);
        
        for (const r of reagents) {
            if (!containsReagent(uniqueReagents, r)) {
                uniqueReagents.push(r);
            }
        }

        // console.log(allReagents.length);


        // const fetchReagents = allReagents.map((reagent) => {
        // const fetchReagents = reagents.map((reagent) => {
        //     // console.log(reagent.name);
            
            
        //     return <Reagent 
        //         key={reagent.id} 
        //         reagent={reagent} 
        //         clothType={clothType}
        //     />
        // });

        // return fetchReagents;

        return newReagents;

    });

    

    function containsReagent(reagentArray, reagent) {
        return reagentArray.find(
            (r) => r.id === reagent.id
        );
    }

    
    return (
        <section className="inventory container">
            <h4>Inventory</h4>
            <div className="inventory-reagents">

                {reagentElements}

                {/* <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Linen Cloth</span>
                </div>
                <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Wool Cloth</span>
                </div>
                <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Silk Cloth</span>
                </div> */}
            </div>
        </section>
    )
}