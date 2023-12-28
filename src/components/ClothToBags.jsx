import { BAGS } from '../constants.js';

export const ClothToBags = ({clothType, clothCount, setClothCount}) => {

    function addCloth(){
        setClothCount(prevClothCount => prevClothCount + 1);
    }

    function resetCloth(){
        setClothCount(0);
    }

    let propertyName = clothType;

    const clothMultiplier = BAGS[propertyName].clothCount;
    const clothPerBag = BAGS[propertyName].clothPerBag;
    const threadCount = BAGS[propertyName].threadCount;
    
    const boltCount = clothCount > 1 && Math.floor(clothCount / clothMultiplier); 
    const bagCount = clothCount > 5 ? Math.floor(clothCount / clothPerBag) : 0; 
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';
    
    const threadType = BAGS[propertyName].threadType;
    const threadTotal = clothCount > 5 ? ((Math.floor(clothCount / clothPerBag)) * threadCount) : 0;

    const leatherCount = clothType === 'silk' ?  (Math.floor(clothCount / clothPerBag)) * BAGS[propertyName].leatherCount : '';
    const leatherType = clothType === 'silk' ? BAGS[propertyName].leatherType : '';

    return (
        <div className={`calculator have-cloth ${clothType}`}>
            <h2 className="heading">I have {clothType} cloth.</h2>
            <div className="actions">
                <button className="button-cloth" onClick={addCloth}>Add 1x {clothType} Cloth</button>
                {clothCount > 0 && <span className="cloth-count">{clothCount}x {clothType} Cloth</span>}
                {boltCount > 0 && <span className="cloth-count">({boltCount}x Bolts)</span>}
                {clothCount > 0 && <button className="reset" onClick={resetCloth}>Clear</button> }
            </div>
            <div className="results">
                <span className="lead">You can make:</span> <span className="value">{bagCount}x {clothType} {bagType}{isPlural}</span>
            </div>
            {clothType === 'silk' ?
                <div className="results">
                    <span className="lead">Materials Needed:</span> <span className="value vendor">{leatherCount}x {leatherType} leather</span>
                </div>
                : null
            }
            <div className="results">
                <span className="lead">Buy from vendor:</span> <span className="value vendor">{threadTotal}x {threadType}</span>
            </div>
        </div>
    )
}