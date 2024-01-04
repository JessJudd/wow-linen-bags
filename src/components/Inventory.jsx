export const Inventory = () => {
    return (
        <section className="inventory container">
            <h4>Inventory</h4>
            <div className="inventory-reagents">
                <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Linen Cloth</span>
                </div>
                <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Wool Cloth</span>
                </div>
                <div className="reagent">
                    <figure className="reagent-icon-container">
                        <img className="reagent-icon" />
                        <span className="reagent-count">0</span>
                    </figure>
                    <span className="reagent-name">Silk Cloth</span>
                </div>
            </div>
        </section>
    )
}