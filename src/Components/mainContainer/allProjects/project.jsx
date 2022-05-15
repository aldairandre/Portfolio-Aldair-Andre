import {StyleSection,StyleContainerProject, StyleContainerProjectA,StyleImgProject,StyleTitle,StyleSbuTitle} from './styleProject'

export default function Project (props) {
    return(
        <StyleSection>
                <StyleContainerProject>
                    <StyleContainerProjectA href="#" target="_blank">
                    <StyleImgProject src={props.src} alt="imageProject"/>
                    <StyleTitle>{props.title}</StyleTitle>
                    <StyleSbuTitle>Tecnologias: {props.disTec?props.disTec: 'default text'}.</StyleSbuTitle>
                    </StyleContainerProjectA>
                </StyleContainerProject>
        </StyleSection>
    )
}
