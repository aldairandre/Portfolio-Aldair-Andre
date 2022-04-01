import './css/style.css';
import './css/flexbox.css';
import './css/mediaquery.css';

function Header(){
    return(
        <header>
            <nav className="container-nav">
                <h1>Portfólio</h1>
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
