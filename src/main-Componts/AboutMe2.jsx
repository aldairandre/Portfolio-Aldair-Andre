import "./css/style.css";
import "./css/flexbox.css";
import "./css/mediaquery.css";

export default function AboutMe2(){
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