import { useState } from 'react';

import { Header } from './Header.jsx';
import { ClothToBags } from './ClothToBags.jsx';
import { BagsToCloth } from './BagsToCloth.jsx';

// import { COARSE_THREAD } from '../constants.js';

export const LinenBagCalc = () => {

    // global reset
    // update state in bagtocloth clothtobag
    const [linenCloth,setLinenCloth] = useState(0);
    const [linenBags,setLinenBags] = useState(0);

    function resetAll(){
        setLinenCloth(0);
        setLinenBags(0);
    }

    return (
        <section className="linen-bag-calc">
            <Header />
            <div className="player-input">

                <ClothToBags linenCloth={linenCloth} setLinenCloth={setLinenCloth} />

                <BagsToCloth linenBags={linenBags} setLinenBags={setLinenBags} />
                
            </div>
            
            <div className="mats">
                <p>1x Bolt of Linen Cloth = 2x Linen Cloth</p>
                <p>1x Linen Bag = 3x Bolt of Linen Cloth + {COARSE_THREAD} Coarse Thread</p>
                <p>1x Coarse Thread: 10cp</p>
            </div>

            <button onClick={resetAll}>Reset All</button>

        </section>
    )
}