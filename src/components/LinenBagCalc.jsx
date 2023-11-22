import { useState } from 'react'

export const LinenBagCalc = () => {

    const [linenCloth,setLinenCloth] = useState(0)

    // function resetAll(){
    //     setLinenCloth(0)
    //     setLinenBags(0)
    // }

    function addCloth(){
        let cloths = linenCloth + 1

        setLinenCloth(cloths)

        let bolts = Math.floor((cloths / 2))
        let bags = Math.floor(bolts / 3)

        setNewBags(bags)

        let threadCount = bags * 2
        let threadCost = threadCount * 10

        setClothThread(threadCount)
        setClothThreadPrice(threadCost)
    }

    const [linenBags,setLinenBags] = useState(0)

    function addBags(){
        let bags = linenBags + 1

        setLinenBags(bags)

        let bolts = Math.floor(bags * 3)
        let cloths = Math.floor(bolts * 2)

        setNeedCloth(cloths)
        setClothBolts(bolts)

        let threadCount = bags * 2
        let threadCost = threadCount * 10
        
        setBagThread(threadCount)
        setBagThreadPrice(`${threadCost} copper`)
    }

    const [newBags,setNewBags] = useState(linenCloth)
    const [clothBolts,setClothBolts] = useState()

    const [needCloth,setNeedCloth] = useState(linenBags)

    const [bagThread,setBagThread] = useState(0)
    const [clothThread,setClothThread] = useState(0)

    const [bagThreadPrice,setBagThreadPrice] = useState(0)
    const [clothThreadPrice,setClothThreadPrice] = useState(0)

    return (
        <section className="linen-bag-calc">

            <div className="player-input">
                <div className="mats-calc have-cloth">
                    <h2 className="heading">I have cloth to make bags.</h2>
                    <div className="actions">
                        <button onClick={addCloth}>Add 1x Linen Cloth</button>{linenCloth > 0 && <span className="cloth-count">{linenCloth}x Linen Cloth</span>}
                    </div>
                    {linenCloth > 5 && <div className="result">
                        <p>With {linenCloth} pieces of Linen Cloth, you can make {newBags}x {newBags > 1 ? 'bags' : 'bag'}. <br className="desktop-only" />You will need to buy:</p>
                        <ul>
                            <li>{clothThread}x Coarse Thread</li>
                            {/* <p><sub>* Vendor price: {clothThreadPrice}</sub></p> */}
                        </ul>
                    </div>}
                </div>
                <div className="mats-calc need-cloth">
                    <div className="actions">
                        <h2 className="heading">I need cloth to make bags.</h2>
                        <button onClick={addBags}>Add 1x Linen Bag</button>
                    </div>

                    {linenBags > 0 && <div className="result">
                        <p>To make {linenBags}x Linen {linenBags > 1 ? 'Bags' : 'Bag'}, you will need:</p>
                        <ul>
                            <li>{needCloth}x Linen Cloth or {clothBolts}x Bolts of Linen Cloth</li>
                            <li>{bagThread}x Coarse Thread</li>
                            {/* <p><sub>* Vendor price: {bagThreadPrice}</sub></p> */}
                        </ul>
                    </div>}

                </div>
            </div>
            
            <div className="mats">
                <p>1x Bolt of Linen Cloth = 2x Linen Cloth</p>
                <p>1x Linen Bag = 3x Bolt of Linen Cloth + 2 Coarse Thread</p>
                <p>1x Coarse Thread: 10cp</p>
            </div>

            {/* <button onClick={resetAll}>Reset</button> */}

        </section>
    )
}