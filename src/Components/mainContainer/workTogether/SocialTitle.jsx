import styled from "styled-components";
import Social from "./Social";
const StyleTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    @media(max-width:768px){
        margin-bottom: 30px;
    }
`

export default function SocialTitle(){
    return(
        <h2 className="work-titlle">Vamos trabalhar juntos...</h2>
        )
}