export const Reagent = ({clothType, count, inventory, img, reagent, onClick, parent }) => {
    console.log('reagent->inventory: ', inventory);
    const { name, type } = reagent;

    const imgPath = `../assets/${img}`;
    const imgUrl = new URL(imgPath, import.meta.url).href;

    let className = `reagent ${name} parent-${parent} ${inventory >= count ? 'craftable' : ''}`;
    const reagentName = name == 'cloth' ? `${clothType} ${name}` : `${type} ${name}`;

    return (
        <div className={className} onClick={onClick}>
            <figure className="reagent-icon-container">
            {parent != 'all' && 
                <span className="reagent-count">
                    {inventory > 0 ? 
                        <span className="num">{inventory}/{count}</span>
                        :
                        <span className="num">{count}</span>
                    }
                    
                </span>
            }
                <img className={`reagent-icon ${count > 0 ? "in-stock" : "" }`} src={imgUrl} />
            </figure>
            
            {parent != 'all' && <span className="reagent-name">{reagentName}</span>}
            
        </div>
    )
}