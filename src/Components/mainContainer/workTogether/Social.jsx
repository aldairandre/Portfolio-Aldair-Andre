import styled from "styled-components";

const ContainerWorkTogether = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const Link = styled.a`
    text-decoration: none;
    :visited,:link{
        color: rgb(255, 255, 255);
    }
`

const ContainerImg = styled.div`
    margin:0 auto;
    width: 62px;
    height: 62px;
    border-radius: 62px;
    background: #212121;
    text-align: center;
    padding: 14px;
    @media(max-width:768px){
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Icon = styled.i`
    background: #212121;
    display: block;
    @media(max-width:768px){
        font-size: 2rem;
    }
`

export default function Social(){
    return(
        <ContainerWorkTogether>
            <Link target="_blank" href="mailto:aldairandre99@gmail.com" className="link-workTogether">
                <ContainerImg>
                    <Icon className="bi bi-envelope"></Icon>
                </ContainerImg>
            </Link>

            <Link target="_blank" href="https://www.linkedin.com/in/aldair-andre-8b655b213/">
                <ContainerImg>
                    <Icon className="bi bi-linkedin"></Icon>
                </ContainerImg>
            </Link>
            <Link target="_blank" href="https://github.com/aldairandre">
                <ContainerImg>
                    <Icon className="bi bi-github"></Icon>
                </ContainerImg>
            </Link>
            <Link target="_blank" href="https://github.com/aldairandre">
                <ContainerImg>
                    <Icon className="bi bi-instagram"></Icon>
                </ContainerImg>
            </Link>
        </ContainerWorkTogether>
    )
}