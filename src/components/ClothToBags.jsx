import { useState } from 'react'

import { BAGS } from '../constants.js';

export const ClothToBags = ({linenCloth, setLinenCloth}) => {

    // const [linenCloth,setLinenCloth] = useState(0);

    function addCloth(){
        setLinenCloth(prevLinenCloth => prevLinenCloth + 1);
    }

    function resetCloth(){
        setLinenCloth(0);
    }

    const boltCount = linenCloth > 1 && Math.floor(linenCloth / 2);
    const bagCount = linenCloth > 5 && Math.floor(linenCloth / 6);
    const threadCount = linenCloth > 5 && ((Math.floor(linenCloth / 6)) * BAGS.linen.threadCount);
    const bagPlural = bagCount > 1 ? 'Bags' : 'Bag';

    return (
        <div className="mats-calc have-cloth">
            <h2 className="heading">I have cloth.</h2>
            <p className="subheading" >How many bags can I make?</p>
            <div className="actions">
                <button className="button-cloth" onClick={addCloth}>Add 1x Linen Cloth</button>
                {linenCloth > 0 && <span className="cloth-count">{linenCloth}x Linen Cloth</span>}
                {boltCount > 0 && <span className="cloth-count">({boltCount}x Bolts)</span>}
            </div>
            {bagCount > 0 && 
                <div className="results">
                    <span className="lead">You can make:</span> <span className="value">{bagCount}x Linen {bagPlural}</span>
                </div>
            }
            {threadCount > 0 && 
                <div className="results">
                    <span className="lead">Buy:</span> <span className="value vendor">{threadCount} Coarse Thread</span>
                </div>
            }
            <button className="reset" onClick={resetCloth}>Clear</button>
        </div>
    )
}