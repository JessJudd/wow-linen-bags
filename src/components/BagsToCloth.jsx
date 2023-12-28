import { BAGS } from '../constants.js';

export const BagsToCloth = ({clothType, bagCount, setBagCount}) => {

    function addBags(){
        setBagCount(prevBagCount => prevBagCount + 1);
    }

    function resetBags(){
        setBagCount(0);
    }

    // let propertyName = clothType;

    // const boltMultiplier = BAGS[propertyName].boltCount; 
    // const clothPerBag = BAGS[propertyName].clothPerBag; 
    // const threadCount = BAGS[propertyName].threadCount; 

    const boltMultiplier = BAGS[clothType].boltCount; 
    const clothPerBag = BAGS[clothType].clothPerBag; 
    const threadCount = BAGS[clothType].threadCount; 
    
    const boltCount = bagCount > 0 && Math.floor(bagCount * boltMultiplier);
    const clothCount = bagCount > 0 ? Math.floor(bagCount * clothPerBag) : 0;

    const threadTotal = bagCount > 0 ? Math.floor(bagCount * threadCount) : 0;
    const threadType = BAGS[clothType].threadType;
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    const leatherCount = clothType === 'silk' ? Math.floor(bagCount * BAGS[clothType].leatherCount) : '';
    const leatherType = clothType === 'silk' ? BAGS[clothType].leatherType : '';

    console.log(leatherCount);

    return (
        <div className={`calculator need-cloth ${clothType}`}>
            <h2 className="heading">I need {clothType} cloth.</h2>
            <div className="actions">
                <button className="button-bags" onClick={addBags}>Add 1x {clothType} {bagType}</button>
                {bagCount > 0 && <span className="bag-count">{bagCount}x {clothType} {bagType}{isPlural}</span>}
                {bagCount > 0 && <button className="reset" onClick={resetBags}>Clear</button>}
            </div>
            <div className="results many">
                <span className="lead">Materials Needed:</span> 
                <div>
                    <span className="value">{clothCount}x Cloth</span> or <span className="value">{boltCount}x Bolts</span>
                </div>
            </div>
            {clothType === 'silk' ?
                <div className="results leather">
                    <span className="value vendor">{leatherCount}x {leatherType} leather</span>
                </div>
                : null
            }
            <div className="results">
                <span className="lead">Buy from vendor:</span> <span className="value vendor">{threadTotal}x {threadType}</span>
            </div>
        </div>
    )
}