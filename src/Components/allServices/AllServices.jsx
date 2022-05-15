import styled from "styled-components";

const StyleContainerAllServices = styled.div`
    margin-top: 170px;
`

const StyleTitle = styled.h2`
    margin-bottom: 30px;
`

const StyleSection =styled.section`
    width: 100%;
`

const StyleServiceUl = styled.ul`
    width: 70%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    @media(max-width:768px){
        flex-direction: column;
        width: 80%;
    }
`

const StyleServicesInfo = styled.li`
    width: 350px;
    height: 250px;
    background: #212121;
    border: 1px solid #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: #828282;
    padding-left: 30px;
    :hover{
        border-bottom: 5px solid #323D70;
    } 
    @media(max-width:768px){
        width: 100%;
        height: auto;
        font-size: 1.5rem;
        padding: 10%;
    }
   
`
const StyleImg = styled.img`
    display: block;
    font-size: 4rem;
`

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

export {StyleContainerAllServices,StyleTitle,StyleSection,StyleServiceUl,StyleServicesInfo,StyleImg}