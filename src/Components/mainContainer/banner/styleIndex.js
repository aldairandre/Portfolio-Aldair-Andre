import styled  from "styled-components";

const StyleSection = styled.section`
    text-align: center;
`

const StyleArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

const StyleTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 47px;
`

const StyleButton = styled.button`
    width: 157px;
    height: 41px;
    border: 1px solid #333333;
    margin-top: 35px;
    cursor: pointer;
`

const StyleDownButton = styled.button`
    background: #323D70;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #171717;
`

const StyleDownA = styled.a`
    text-decoration: none;
    background: #323D70;
`

const StyledContactButton = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
`

const StyleWhatsappA= styled.a`
    text-decoration: none;
    :hover{
        color: #323D70;
    }
`

export {StyleSection,StyleArticle,StyleTitle,StyleButton,StyleDownButton,StyleDownA,StyledContactButton}