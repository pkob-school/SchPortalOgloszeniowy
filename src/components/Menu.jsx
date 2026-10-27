function Menu(){
    return(
        <nav className="navbar">
            <h2 className="logo">Tech MArket</h2>

            <ul className="menu-list">
                <li>
                    <a href="#ogloszenia">Ogloszenia</a>
                </li>
                <li className="dropdown">
                    <button type="buton" className="dropdown-btn">Kategorie</button>
                
                    <ul className="submenu">
                        <li><a href="#komputery">Komputery</a></li>
                        <li><a href="#akcesoria">Akcesoria</a></li>
                        <li><a href="#monitory">Monitory</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;