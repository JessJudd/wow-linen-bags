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
    const bagCount = clothCount > 5 && Math.floor(clothCount / clothPerBag); 
    const isPlural = bagCount > 1 ? 's' : '';
    
    const threadType = BAGS[propertyName].threadType;
    const threadTotal = clothCount > 5 && ((Math.floor(clothCount / clothPerBag)) * threadCount);

    return (
        <div className="mats-calc have-cloth">
            <h2 className="heading">I have {clothType} cloth.</h2>
            <p className="subheading" >How many {clothType} bags can I make?</p>
            <div className="actions">
                <button className="button-cloth" onClick={addCloth}>Add 1x {clothType} Cloth</button>
                {clothCount > 0 && <span className="cloth-count">{clothCount}x {clothType} Cloth</span>}
                {boltCount > 0 && <span className="cloth-count">({boltCount}x Bolts)</span>}
            </div>
            {bagCount > 0 && 
                <div className="results">
                    <span className="lead">You can make:</span> <span className="value">{bagCount}x {clothType} bag{isPlural}</span>
                </div>
            }
            {threadTotal > 0 && 
                <div className="results">
                    <span className="lead">Buy:</span> <span className="value vendor">{threadTotal} {threadType}</span>
                </div>
            }
            <button className="reset" onClick={resetCloth}>Clear</button>
        </div>
    )
}