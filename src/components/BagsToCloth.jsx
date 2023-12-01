import { useState } from 'react'

export const BagsToCloth = () => {

    const COARSE_THREAD = 3;

    const [linenBags,setLinenBags] = useState(0)

    function addBags(){
        setLinenBags(prevLinenBags => prevLinenBags + 1)
    }

    let boltCount = linenBags > 0 && Math.floor(linenBags * 3)
    let clothCount = linenBags > 0 && Math.floor(linenBags * 6)
    let threadCount = linenBags > 0 && Math.floor(linenBags * COARSE_THREAD)
    let bagPlural = linenBags > 1 ? 'Bags' : 'Bag'

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
        </div>
    )
}