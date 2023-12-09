export const Header = ({handleChangeFaction,faction}) => {
    return (
        <nav>
            <div className="gradient-bar"></div>
            <div className="nav-inner">
                <h1 className="heading">{faction == 'alliance' ? 'Sindaheri' : 'Saraneth' }'s Salacious Satchels</h1>
                <div className="button-wrapper">
                    <button className="horde" onClick={handleChangeFaction}>For the Horde!</button>
                    <button className="alliance" onClick={handleChangeFaction}>For the Alliance!</button>
                </div>
            </div>
        </nav>
    )
}