import { useState } from 'react'

import { BAGS } from '../constants.js';

export const BagsToCloth = ({linenBags, setLinenBags}) => {

    function addBags(){
        setLinenBags(prevLinenBags => prevLinenBags + 1);
    }

    function resetBags(){
        setLinenBags(0);
    }

    const boltCount = linenBags > 0 && Math.floor(linenBags * 3);
    const clothCount = linenBags > 0 && Math.floor(linenBags * 6);
    const threadCount = linenBags > 0 && Math.floor(linenBags * BAGS.linen.threadCount);
    const bagPlural = linenBags > 1 ? 'Bags' : 'Bag';

    return (
        <div className="mats-calc need-cloth">
            <h2 className="heading">I need cloth.</h2>
            <p className="subheading" >How many bags do you need?</p>
            <div className="actions">
                <button className="button-bags" onClick={addBags}>Add 1x Linen Bag</button>{linenBags > 0 && <span className="bag-count">{linenBags}x Linen {bagPlural}</span>}
            </div>
            { linenBags > 0 && 
                <div className="results many">
                    <span className="lead">Farm or buy from AH:</span> <span className="value">{clothCount}x Cloth</span> or <span className="value">{boltCount}x Bolts</span>
                </div>
            }
            { linenBags > 0 && 
                <div className="results">
                    <span className="lead">Buy:</span> <span className="value vendor">{threadCount}x Coarse Thread</span>
                </div>
            }
            <button className="reset" onClick={resetBags}>Clear</button>
        </div>
    )
}