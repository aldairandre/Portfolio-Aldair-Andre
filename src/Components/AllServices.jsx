import "./css/style.css";
import "./css/flexbox.css";
import "./css/mediaquery.css";

export default function AllServices() {
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