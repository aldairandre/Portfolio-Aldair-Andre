import './header-style.css';


function Header(){
    return(
        <header>
            <h1>Portfólio</h1>
            <nav className="container-nav">
                <ul>
                    <li className="nav-items"><a href="#aboutMe">Sobre mim</a></li>
                    <li className="nav-items"><a href="#projects">Projetos</a></li>
                    <li className="nav-items"><a href="#services">Serviços</a></li>
                    <li className="nav-items"><a href="#skills">Minhas Skills</a></li>
                </ul>
                <i className="bi bi-list menu-icon" id="menu-icon-btn"></i>
            </nav>
        </header>
    )
}

export default Header;
