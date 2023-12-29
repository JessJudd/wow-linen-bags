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

    const craftBags = clothCount > 5 ? Math.floor(clothCount / clothPerBag) : 0; 

    const needCloth = bagCount > 0 ? Math.floor(bagCount * clothPerBag) : 0;
    const needBolts = bagCount > 0 && Math.floor(bagCount * boltMultiplier);

    const threadTotal = bagCount > 0 ? Math.floor(bagCount * threadCount) : 0;
    const threadType = BAGS[clothType].threadType;
    const isPlural = bagCount > 1 ? 's' : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    return (
        <div className={`calculator ${clothType}`}>

            
            <div classname="crafting">
                {clothType} {bagType} x {bagCount} ({craftBags})<br />
                {/* ? / {BAGS[clothType].boltCount} Bolt of {clothType} Cloth<br /> */}
                {clothCount} / {BAGS[clothType].clothPerBag} {clothType} cloth ({BAGS[clothType].boltCount} bolts per {bagType})<br />
                {bagCount > 0 ? BAGS[clothType].threadCount * bagCount : BAGS[clothType].threadCount} {threadType}
            </div>

            
        </div>
    )
}