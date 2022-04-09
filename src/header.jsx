import './header-style.css';

const activeMenu = () => document.getElementById('ul-navList').classList.add('active')
const removeMenu = () => document.getElementById('ul-navList').classList.remove('active')


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
                    <li><i className='remove-menu-btn' onClick={removeMenu}>X</i></li>
                </ul>
                <i className="bi bi-list menu-icon" id="menu-icon-btn" onClick={activeMenu}></i>
            </nav>
        </header>
    )
}

export default Header;
