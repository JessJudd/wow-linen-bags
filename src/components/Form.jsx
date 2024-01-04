export const Form = ({clothData, handleChangeCloth, addBag, addCloth, resetCloth}) => {


    const { clothType, clothCount, bagCount } = clothData;

    return (
        <form className="choose-cloth-type">
            <fieldset className="cloth-types">
                <legend>Choose cloth type:</legend>
                <input 
                    type="radio"
                    id="linen" 
                    name="clothType" 
                    value="linen" 
                    onChange={handleChangeCloth} 
                    checked={clothType === "linen"}
                />
                <label className="cloth-type-label" htmlFor="linen">Linen Cloth</label>

                <br />
                <input 
                    type="radio"
                    id="wool" 
                    name="clothType" 
                    value="wool" 
                    onChange={handleChangeCloth} 
                    checked={clothType === "wool"}
                />
                <label className="cloth-type-label" htmlFor="wool">Wool Cloth</label>

                <br />
                <input 
                    type="radio"
                    id="silk" 
                    name="clothType" 
                    value="silk" 
                    onChange={handleChangeCloth} 
                    checked={clothType === "silk"}
                />
                <label className="cloth-type-label" htmlFor="silk">Silk Cloth</label>

                <button className="button-cloth" onClick={resetCloth}>Reset</button>
            </fieldset>
            <fieldset>
                <label className="cloth-count-label" htmlFor="clothCount">Current # of {clothType} cloth in inventory</label>
                <input
                    className="count"
                    type="text" 
                    name="clothCount" 
                    onChange={handleChangeCloth} 
                    value={clothData.clothCount} 
                    id="clothCount"
                />
                <button className="button-cloth" onClick={addCloth}>Add 1x {clothType} Cloth</button>
            </fieldset>
            <fieldset>
                <label className="bag-count-label" htmlFor="bagCount">Total # of {clothType} bags needed</label>
                <input
                    className="count"
                    type="text" 
                    name="bagCount" 
                    onChange={handleChangeCloth} 
                    value={clothData.bagCount} 
                    id="bagCount"
                />
                <br /><button className="button-bags" onClick={(e)=>addBag(e)}>Add 1x Bag</button>
            </fieldset>
        </form>
    )
}