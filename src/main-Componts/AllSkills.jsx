import "./css/style.css";
import "./css/flexbox.css";
import "./css/mediaquery.css";


export default function AllSkills(){
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