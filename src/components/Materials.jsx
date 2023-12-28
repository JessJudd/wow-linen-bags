import { BAGS } from '../constants.js';

export const Materials = ({clothType}) => {

    const clothMultiplier = clothType != '' ? BAGS[clothType].clothCount : '';
    const boltMultiplier = clothType != '' ? BAGS[clothType].boltCount : '';
    const threadType = clothType != '' ? BAGS[clothType].threadType : '';
    const threadCount = clothType != '' ? BAGS[clothType].threadCount : '';
    const threadCost = clothType != '' ? BAGS[clothType].threadCost : '';
    
    const coinage = threadCost === 1 ? 'sp' : 'cp';
    
    const bagSize = clothType != '' ? BAGS[clothType].bagSize : '';
    const bagType = clothType === 'silk' ? 'pack' : 'bag';

    return (
        <section className={`mats ${clothType}`}>
            <p> {clothType} {bagType}: {bagSize} slots</p>
            <p>1x bolt of {clothType} cloth = {clothMultiplier}x {clothType} cloth</p>
            <p>1x {clothType} {bagType} = {boltMultiplier}x bolt of {clothType} cloth + {threadCount} {threadType}</p>
            <p>1x {threadType}: {threadCost} {coinage}</p>
            {/* <button onClick={resetAll}>Reset All</button> */}
        </section>
    )
}