export const Reagent = ({clothType, reagent}) => {

    const { name, count, type } = reagent;

    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;
    let className = `reagent ${name}`;
    // linen cloth {clothType} {name}
    // heavy leather {type} {name}
    // coarse/fine thread {type} {name}

    return (
        <div className={className}>
            <figure className="reagent-icon-container">
                <img className="reagent-icon" />
                <span className="reagent-count">{count}</span>
            </figure>
            
            <span className="reagent-name">{reagentName}</span>
            
        </div>
    )
}