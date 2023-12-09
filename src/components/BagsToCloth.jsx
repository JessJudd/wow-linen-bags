import { BAGS } from '../constants.js';

export const BagsToCloth = ({clothType, bagCount, setBagCount}) => {

    function addBags(){
        setBagCount(prevBagCount => prevBagCount + 1);
    }

    function resetBags(){
        setBagCount(0);
    }

    let propertyName = clothType;
    const clothMultiplier = BAGS[propertyName].clothCount;
    const clothPerBag = BAGS[propertyName].clothPerBag;
    const threadCount = BAGS[propertyName].threadCount;
    
    const boltCount = bagCount > 0 && Math.floor(bagCount * clothMultiplier);
    const clothCount = bagCount > 0 && Math.floor(bagCount * clothPerBag);

    const threadTotal = bagCount > 0 && Math.floor(bagCount * threadCount);
    const threadType = BAGS[propertyName].threadType;
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    return (
        <div className="mats-calc need-cloth">
            <h2 className="heading">I need {clothType} cloth.</h2>
            <p className="subheading" >How many {clothType} {bagType}s do you need?</p>
            <div className="actions">
                <button className="button-bags" onClick={addBags}>Add 1x {clothType} {bagType}</button>{bagCount > 0 && <span className="bag-count">{bagCount}x {clothType} {bagType}{isPlural}</span>}
            </div>
            { bagCount > 0 && 
                <div className="results many">
                    <span className="lead">Farm or buy from AH:</span> <span className="value">{clothCount}x Cloth</span> or <span className="value">{boltCount}x Bolts</span>
                </div>
            }
            { bagCount > 0 && 
                <div className="results">
                    <span className="lead">Buy:</span> <span className="value vendor">{threadTotal}x {threadType}</span>
                </div>
            }
            <button className="reset" onClick={resetBags}>Clear</button>
        </div>
    )
}