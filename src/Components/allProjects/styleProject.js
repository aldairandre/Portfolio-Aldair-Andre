import styled from 'styled-components'

const StyleSection = styled.section`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
`
const StyleContainerProject = styled.div`
    flex-wrap: wrap;
    gap: 30px; 
    display: flex;
    justify-content: center;
`
const StyleContainerProjectA = styled.a`
    width: 350px;
    height: 240px;
    background: #212121;
    border: 1px solid #333333;
    border-radius: 3px;
    padding: 20px 25px;
    margin-top: 20px;
    transform: scale(0.9);
    transition: 0.3s;
    text-decoration: none;
    :hover{
        transform: scale(1);
        cursor: pointer;
    }
`

const StyleImgProject = styled.img`
    width: 300px;
    height: 130px;
`

const StyleTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    margin: 23px 0 6px 0;
    background: #212121;
`

const StyleSbuTitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: #828282;
    background: #212121;
`

export {StyleSection,StyleContainerProject, StyleContainerProjectA,StyleImgProject,StyleTitle,StyleSbuTitle}