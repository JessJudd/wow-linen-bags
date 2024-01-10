export const Reagent = ({clothType, reagent, parent, img, count }) => {

    const { name, type } = reagent;

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    let className = `reagent ${name} ${parent}`;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    return (
        <div className={className}>
            <figure className="reagent-icon-container">
            {parent != 'all' && <span className="reagent-count">{count}</span>}
                <img className={`reagent-icon ${count > 1 ? "in-stock" : "" }`} src={imgUrl} />
            </figure>
            
            {parent != 'all' && <span className="reagent-name">{reagentName}</span>}
            
        </div>
    )
}