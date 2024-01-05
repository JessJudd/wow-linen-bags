import { Header } from './Header.jsx'
import { ClothToBags } from './ClothToBags.jsx'
import { BagsToCloth } from './BagsToCloth.jsx'

export const LinenBagCalc = () => {
    const COARSE_THREAD = 3;

    return (
        <section className="linen-bag-calc">
            <Header />
            <div className="player-input">

                <ClothToBags />

                <BagsToCloth />
                
            </div>
            
            <div className="mats">
                <p>1x Bolt of Linen Cloth = 2x Linen Cloth</p>
                <p>1x Linen Bag = 3x Bolt of Linen Cloth + {COARSE_THREAD} Coarse Thread</p>
                <p>1x Coarse Thread: 10cp</p>
            </div>

        </section>
    )
}