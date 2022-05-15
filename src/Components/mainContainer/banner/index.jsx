import {StyleSection,StyleArticle,StyleTitle,StyleButton,StyleDownButton,StyleDownA,StyledContactButton} from "./styleIndex";


export default function Banner(){
    return(  
        <StyleSection>
            <StyleArticle>
                <StyleTitle className="titles">Olá, eu sou o Aldair André</StyleTitle>
                <p className="apresentation-paragraph">Desenvolvedor Front-End</p>
                <StyleButton className="button" id="download-button">
                <StyleDownButton className="link-download" href="./assets/Lucas Santos Rodrigues.pdf">Download CV</StyleDownButton>
                </StyleButton>
                <StyledContactButton className="button" id="contact-button">
                <StyleDownA className="link-whatsapp" href="" target="_blank" >Entrar em contato</StyleDownA>
                </StyledContactButton>
            </StyleArticle>
        </StyleSection>
    )
}