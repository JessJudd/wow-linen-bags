export const Form = ({clothData, handleChangeCloth, addBag, addCloth, resetAll}) => {

    const { clothType, clothCount, bagCount } = clothData;

    const bagType = clothType === 'silk' ? 'pack' : 'bag';

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
                <label 
                    className="cloth-type-label" 
                    htmlFor="linen">
                        Linen Cloth
                </label>

                <br />
                <input 
                    type="radio"
                    id="wool" 
                    name="clothType" 
                    value="wool" 
                    onChange={handleChangeCloth} 
                    checked={clothType === "wool"}
                />
                <label 
                    className="cloth-type-label" 
                    htmlFor="wool">
                        Wool Cloth
                </label>

                <br />
                <input 
                    type="radio"
                    id="silk" 
                    name="clothType" 
                    value="silk" 
                    onChange={handleChangeCloth} 
                    checked={clothType === "silk"}
                />
                <label 
                    className="cloth-type-label" 
                    htmlFor="silk">
                        Silk Cloth
                </label>                
            </fieldset>
            <fieldset className="count-wrapper">
                <label 
                    className="cloth-count-label" 
                    htmlFor="clothCount">
                    Current # of {clothType} cloth in inventory
                </label>
                <input
                    className="count"
                    type="text" 
                    name="clothCount" 
                    onChange={handleChangeCloth} 
                    value={clothData.clothCount} 
                    id="clothCount"
                />
                <button 
                    className="button-cloth" 
                    onClick={addCloth}>
                    Add 1x {clothType} Cloth
                </button>
            </fieldset>
            <fieldset className="count-wrapper">
                <label 
                    className="bag-count-label" 
                    htmlFor="bagCount">
                    Total # of {clothType} {bagType} needed
                </label>
                <input
                    className="count"
                    type="text" 
                    name="bagCount" 
                    onChange={handleChangeCloth} 
                    value={clothData.bagCount} 
                    id="bagCount"
                />
                <button className="button-bags" onClick={(e)=>addBag(e)}>Add 1x {bagType}</button>
            </fieldset>
            <fieldset>
                <button 
                    className="button-cloth" 
                    onClick={resetAll}>
                        Reset
                </button>
            </fieldset>
        </form>
    )
}