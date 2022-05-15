import Project from "./project";
import styled from "styled-components";

const StyleContainerAllproject = styled.div`
    margin-bottom: 30px;
`
const StyleSubTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
` 

export default function Container(){
    return(
        <StyleContainerAllproject>
            <StyleSubTitle>Projetos</StyleSubTitle>
            <Project title='Primeiro projecto' disTec='Html,css,js'></Project>
        </StyleContainerAllproject>
    )

}
