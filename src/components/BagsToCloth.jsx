import { BAGS } from '../constants.js';

export const BagsToCloth = ({clothType, bagCount, setBagCount}) => {

    function addBags(){
        setBagCount(prevBagCount => prevBagCount + 1);
    }

    function resetBags(){
        setBagCount(0);
    }

    let propertyName = clothType;
    const boltMultiplier = BAGS[propertyName].boltCount;
    const clothPerBag = BAGS[propertyName].clothPerBag;
    const threadCount = BAGS[propertyName].threadCount;
    
    const boltCount = bagCount > 0 && Math.floor(bagCount * boltMultiplier);
    const clothCount = bagCount > 0 && Math.floor(bagCount * clothPerBag);

    const threadTotal = bagCount > 0 && Math.floor(bagCount * threadCount);
    const threadType = BAGS[propertyName].threadType;
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    const leatherCount = clothType === 'silk' ? BAGS[propertyName].leatherCount : '';
    const leatherType = clothType === 'silk' ? BAGS[propertyName].leatherType : '';

    return (
        <div className={`calculator need-cloth ${clothType}`}>
            <h2 className="heading">I need {clothType} cloth.</h2>
            <p className="subheading" >How many {clothType} {bagType}s do you need?</p>
            <div className="actions">
                <button className="button-bags" onClick={addBags}>Add 1x {clothType} {bagType}</button>
                {bagCount > 0 && <span className="bag-count">{bagCount}x {clothType} {bagType}{isPlural}</span>}
                {bagCount > 0 && <button className="reset" onClick={resetBags}>Clear</button>}
            </div>
            { bagCount > 0 && 
                <div className="results many">
                    <span className="lead">Farm or buy from AH:</span> 
                        <span className="value">{clothCount}x Cloth</span> or <span className="value">{boltCount}x Bolts</span>
                </div>
            }
            { bagCount > 0 & clothType === 'silk' ?
                <div className="results">
                    <span className="lead">Farm or buy from AH:</span> <span className="value vendor">{leatherCount}x {leatherType} leather</span>
                </div>
                : null
            }
            { bagCount > 0 && 
                <div className="results">
                    <span className="lead">Buy:</span> <span className="value vendor">{threadTotal}x {threadType}</span>
                </div>
            }
        </div>
    )
}