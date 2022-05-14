import {Styleheader,StyleContainerNav,StyleUl,StyleLi,StyledA,StyleMenuIcon} from './styleheader'

const activeMenu = () => document.getElementById('ul-navList').classList.toggle('active')


function Header(){
    return(
        <Styleheader>
            <h1>Portfólio</h1>
            <StyleContainerNav >
                <StyleUl id='ul-navList'>
                    <StyleLi className="nav-items"><StyledA href="#aboutMe">Sobre mim</StyledA></StyleLi>
                    <StyleLi className="nav-items"><StyledA href="#projects">Projetos</StyledA></StyleLi>
                    <StyleLi className="nav-items"><StyledA href="#services">Serviços</StyledA></StyleLi>
                    <StyleLi className="nav-items"><StyledA href="#skills">Minhas Skills</StyledA></StyleLi>
                </StyleUl>
            </StyleContainerNav>
            <StyleMenuIcon className="bi bi-list menu-icon" id="menu-icon-btn" onClick={activeMenu}></StyleMenuIcon>
        </Styleheader>
    )
}

export default Header;
