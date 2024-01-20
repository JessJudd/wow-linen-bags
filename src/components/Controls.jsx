export const Controls = (
    {   useBolts,
        setUseBolts,
        showSummary,
        setShowSummary }) => {

    let material = useBolts == false ? 'Bolts' : 'Cloth Pieces';

    const toggleBolts = (event) => {
        setUseBolts(prevUseBolts => !prevUseBolts);
        // console.log(`using ${material}`);
    }

    let toggleShow = showSummary == false ? 'Show' : 'Hide';

    const toggleSummary = (event) => {
        setShowSummary(prevShowSummary => !prevShowSummary);
    }

    return (
        <section className="crafting-controls">
            <h4>Customize the recipe output below.</h4>
            <div className="options">
                <button className="simple" onClick={(e)=>toggleBolts(e)}>Use {material}</button>
                <button className="simple" onClick={(e)=>toggleSummary(e)}>{toggleShow} Summary</button>
            </div>
        </section>
    )
}