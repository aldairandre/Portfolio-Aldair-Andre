import "./css/AboutMe-style.css";


export default function AboutMe(){
    return(  
        <section className="container-apresentacao">
            <article className="about-me-container">
                <h2 className="titles">Olá, eu sou o Aldair André</h2>
                <p className="apresentation-paragraph">Desenvolvedor Front-End</p>
                <button className="button" id="download-button">
                <a className="link-download" href="./assets/Lucas Santos Rodrigues.pdf">Download CV</a>
                </button>
                <button className="button" id="contact-button">
                <a className="link-whatsapp" href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" >Entrar em contato</a>
                </button>
            </article>
        </section>
    )
}