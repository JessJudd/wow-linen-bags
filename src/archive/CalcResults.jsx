import { useId } from 'react';
import { BAGS } from '../constants.js';

export const CalcResults = ({clothData}) => {
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
        <section className={`calculator-results ${clothType}`}>

            <h4>Crafting: {clothType} {bagType} {bagCount > 1 && <span className="count">x{bagCount}</span>}</h4>
            <ul className="materials-list">
                <li><span className="count">{clothCount}</span> / { bagCount > 1 ? bagCount * BAGS[clothType].clothPerBag : BAGS[clothType].clothPerBag } {clothType} cloth</li>
                <li>{bagCount > 0 ? BAGS[clothType].threadCount * bagCount : BAGS[clothType].threadCount} {threadType}</li>
            </ul>
        </section>
    )
}