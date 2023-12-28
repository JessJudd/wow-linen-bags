import { useId } from 'react';
import { BAGS } from '../constants.js';

export const BagCalc = ({clothData}) => {
    const { clothType, bagCount, clothCount } = clothData;

    const boltMultiplier = BAGS[clothType].boltCount; 
    const clothPerBag = BAGS[clothType].clothPerBag; 
    const threadCount = BAGS[clothType].threadCount; 

    const leatherCount = clothType === 'silk' ? Math.floor(bagCount * BAGS[clothType].leatherCount) : '';
    const leatherType = clothType === 'silk' ? BAGS[clothType].leatherType : '';

    const boltCount = bagCount > 0 && Math.floor(bagCount * boltMultiplier);

    const threadTotal = bagCount > 0 ? Math.floor(bagCount * threadCount) : 0;
    const threadType = BAGS[clothType].threadType;
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    return (
        <div className={`calculator ${clothType}`}>
            <div className="results">
                <span className="value">{bagCount}x Bags</span>
            </div>
            
            <div className="results many">
                {/* <span className="lead">Materials Needed:</span>  */}
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