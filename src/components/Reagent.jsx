export const Reagent = ({clothType, reagent, parent, img, reagentCount }) => {

    const { name, count, type } = reagent;

    console.log(`[Reagent.jsx] ${reagentCount}`);

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    let className = `reagent ${name} ${parent}`;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    return (
        <div className={className}>
            <figure className="reagent-icon-container">
                <img className="reagent-icon" src={imgUrl} />
                <span className="reagent-count">{parent == 'recipe' ? count : reagentCount}</span>
            </figure>
            
            <span className="reagent-name">{reagentName}</span>
            
        </div>
    )
}