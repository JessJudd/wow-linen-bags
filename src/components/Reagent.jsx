export const Reagent = ({clothType, reagent, parent, img, count }) => {

    const { name, type } = reagent;

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    let className = `reagent ${name} ${parent}`;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    return (
        <div className={className}>
            <figure className="reagent-icon-container">
                <img className="reagent-icon" src={imgUrl} />
                <img className={`reagent-icon ${count > 1 ? "in-stock" : "" }`} src={imgUrl} />
                <span className="reagent-count">{count}</span>
            </figure>
            
            <span className="reagent-name">{reagentName}</span>
            
        </div>
    )
}