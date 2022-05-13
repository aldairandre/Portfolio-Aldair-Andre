import "./css/style.css";
import "./css/flexbox.css";
import "./css/mediaquery.css";


export default function WorkTogether(){
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