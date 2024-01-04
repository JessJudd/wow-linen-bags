export const Recipes = () => {
    return (
        <section className="recipes container">
            <h4>Recipes</h4>
            <div classname="all-recipes">
                <ul>
                    <li>Linen Bag</li>
                    <li>Wool Bag</li>
                    <li>Small Silk Pack</li>
                </ul>
            </div>
            <div className="recipe">
                <div className="recipe-header">
                    <img className="recipe-icon" />
                    <span className="recipe-name">Linen Bag</span>
                </div>

                <div className="recipe-reagents">
                    <div className="reagent">
                        <figure className="reagent-icon-container">
                            <img className="reagent-icon" />
                            <span className="reagent-count">3</span>
                        </figure>
                        <span className="reagent-name">Bolt of Linen Cloth</span>
                    </div>
                    <div className="reagent">
                        <figure className="reagent-icon-container">
                            <img className="reagent-icon" />
                            <span className="reagent-count">3</span>
                        </figure>
                        <span className="reagent-name">Coarse Thread</span>
                    </div>
                </div>
            </div>
        </section>
    )
}