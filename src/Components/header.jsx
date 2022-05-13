import './css/header-style.css';

const activeMenu = () => document.getElementById('ul-navList').classList.toggle('active')


function Header(){
    return(
        <header>
            <h1>Portfólio</h1>
            <nav className="container-nav">
                <ul id='ul-navList'>
                    <li className="nav-items"><a href="#aboutMe">Sobre mim</a></li>
                    <li className="nav-items"><a href="#projects">Projetos</a></li>
                    <li className="nav-items"><a href="#services">Serviços</a></li>
                    <li className="nav-items"><a href="#skills">Minhas Skills</a></li>
                </ul>
            </nav>
            <i className="bi bi-list menu-icon" id="menu-icon-btn" onClick={activeMenu}></i>
        </header>
    )
}

export default Header;
