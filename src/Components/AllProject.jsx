import "./css/style.css";
import "./css/flexbox.css";
import "./css/mediaquery.css";

export default function AllProject() {
    return(
        <div className="container-Allproject">
            <h2 className="project-titlle" id="projects">Projetos</h2>
            <section className="project-section">
            <div className="container-project">
                <a className="container-project-items" href="#" target="_blank">
                <div>
                    <img className="image-project" src="./assets/conversor.png" alt="imageProject"/>
                </div>
                <p className="title-project">Conversor de moedas</p>
                <p className="subtitle-project">Tecnologias: HTML, CSS e JS.</p>
                </a>
            </div>
            <div className="container-project">
                <a className="container-project-items" href="#"
                target="_blank">
                <div>
                    <img className="image-project" src="/assets/blogInterface.png" alt="imageProject"/>
                </div>
                <p className="title-project">Blog Interface</p>
                <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                        <img className="image-project" src="/assets/dev.png" alt="imageProject"/>
                    </div>
                    <p className="title-project">Dev Contábil</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#"
                    target="_blank">
                    <div>
                        <img className="image-project" src="/assets/login.png"/>
                    </div>
                    <p className="title-project">Login Interface</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                        <img className="image-project" src="/assets/comissoes.png"/>
                    </div>
                    <p className="title-project">Comissões</p>
                    <p className="subtitle-project">Tecnologias: HTML, CSS e JS.</p>
                    </a>
                </div>
                <div className="container-project">
                    <a className="container-project-items" href="#" target="_blank">
                    <div>
                    <img className="image-project" src="/assets/embreve.png"/>
                    </div>
                    <p className="title-project">Em Breve</p>
                    <p className="subtitle-project">Tecnologias: ...</p>
                    </a>
                </div>
            </section>
      </div>
    )
}