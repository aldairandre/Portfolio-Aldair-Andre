import '../css/style.css';
import '../css/flexbox.css';
import '../css/mediaquery.css';

function AboutMe(){
    return(
        <section className="container-apresentacao">
            <article className="about-me-container">
                <h2 className="tittles">Olá, eu sou o Aldair André</h2>
                <p className="apresentation-paragraph">Desenvolvedor Front-End</p>
                <button className="button" id="download-buuton">
                <a className="link-download" href="./assets/Lucas Santos Rodrigues.pdf">Download CV</a>
                </button>
                <button className="button" id="contact-button">
                <a className="link-whatsapp" href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" >Entrar em contato</a>
                </button>
            </article>
        </section>
    )
}

function AboutMe2(){
    return(
        <section className="container-apresentacao">
            <h2 className="aboutMe-tittle">Sobre mim</h2>
            <article >
                <p className="aboutMe-paragraph">
                Olá, sou o Aldair Dos Santos André, apaixonado por Tecnologia,
                Design, Musica, Artes.        
                </p>  
                <p className="aboutMe-paragraph">
                Extremamente
                motivado por desafios e sempre aprendendo durante minha jornada como desenvolvedor Front-End.
                </p>  
                <p className="aboutMe-paragraph">
                Atualmente
                venho desenvolvendo minhas habilidades nas tecnologias e linguagens como
                JavaScript, React.js, Figma, UI/UX, PHP, Nodes, SQL, MYSQL, MongoBD.
                </p>
            </article>
        </section>
    )
}

function AllProject() {
    return(
        <div className="container-Allproject">
            <h2 className="project-titlle" id="projects">Projetos</h2>
            <section className="project-section">
            <div className="container-project">
                <a className="container-project-items" href="#" target="_blank">
                <div>
                    <img className="image-project" href="/assets/conversor.png"/>
                </div>
                <p className="title-project">Conversor de moedas</p>
                <p className="subtitle-project">Tecnologias: HTML, CSS e JS.</p>
                </a>
            </div>
            <div className="container-project">
                <a className="container-project-items" href="#"
                target="_blank">
                <div>
                    <img className="image-project" src="./assets/blogInterface.png"/>
                </div>
                <p className="title-project">Blog Interface</p>
                <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                        <img className="image-project" src="./assets/dev.png"/>
                    </div>
                    <p className="title-project">Dev Contábil</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#"
                    target="_blank">
                    <div>
                        <img className="image-project" src="./assets/login.png"/>
                    </div>
                    <p className="title-project">Login Interface</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                        <img className="image-project" src="./assets/comissoes.png"/>
                    </div>
                    <p className="title-project">Comissões</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS e JS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                    <img className="image-project" src="./assets/embreve.png"/>
                    </div>
                    <p className="title-project">Em Breve</p>
                    <p className="subtitle-project">Tecnologias: ...</p>
                    </a>
                </div>
            </section>
      </div>
    )
}

function AllServices() {
    return(
        <div className="container-allServices">
            <h2 className="service-titlle" id="services">Serviços</h2>
            <section className="services">
                <ul className="container-services-flex">
                    <li className="services-info">
                    <i className="bi bi-file-code services-info-image"></i>
                    <p>Criação desites</p>
                    </li>
                    <li className="services-info"> 
                    <img className="services-info-image" src="./assets/figma.svg"/> UI Designer
                    </li>
                    <li className="services-info">
                    <i className="bi bi-phone services-info-image"></i>
                    <p>Sites Responsivos</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

function AllSkills(){
    return(
    
        <div className="container-allSkills">
            <h2 className="skills-titlle" id="skills">Minhas Skills</h2>
            <section>
                <ul className="container-skills-flex">
                    <li className="skills-info">
                        <i className="bi bi-filetype-html skills-img"></i>
                    </li>
                    <li className="skills-info">
                        <i className="bi bi-filetype-css skills-img"></i>
                    </li>
                    <li className="skills-info">
                        <i className="bi bi-filetype-js skills-img"></i>
                    </li>
                    <li className="skills-info">
                        <i className="bi bi-git skills-img"></i>
                    </li>
                </ul>
            </section>
        </div>
    )
}

function WorkTitlle(){
    return(
        <h2 className="work-titlle">Vamos trabalhar juntos...</h2>
    )
}

function WorkTogether(){
    return(
        <div className="container-workTogether">

            <a target="_blank" href="mailto:aldairandre99@gmail.com" className="link-workTogether">
                <div className="container-img">
                    <i className="bi bi-envelope work-img"></i>
                </div>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/aldair-andre-8b655b213/" className="link-workTogether">
                <div className="container-img">
                    <i className="bi bi-linkedin work-img"></i>
                </div>
            </a>
            <a target="_blank" href="https://github.com/aldairandre" className="link-workTogether">
                <div className="container-img">
                    <i className="bi bi-github work-img"></i>
                </div>
            </a>
            <a target="_blank" href="https://github.com/aldairandre" className="link-workTogether">
                <div className="container-img">
                    <i className="bi bi-instagram work-img"></i>
                </div>
            </a>
        </div>
    )
}

export {AboutMe,AboutMe2,AllProject,AllServices,AllSkills,WorkTitlle,WorkTogether};