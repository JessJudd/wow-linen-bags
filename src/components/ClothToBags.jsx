import { useState } from 'react'

export const ClothToBags = () => {

    const COARSE_THREAD = 3;
    const [linenCloth,setLinenCloth] = useState(0)

    function addCloth(){
        setLinenCloth(prevLinenCloth => prevLinenCloth + 1)
    }

    let boltCount = linenCloth > 1 && Math.floor(linenCloth / 2)
    let bagCount = linenCloth > 5 && Math.floor(linenCloth / 6)
    let threadCount = linenCloth > 5 && ((Math.floor(linenCloth / 6)) * COARSE_THREAD)
    let bagPlural = bagCount > 1 ? 'Bags' : 'Bag'

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
        </div>
    )
}