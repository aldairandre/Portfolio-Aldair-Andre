import styled from "styled-components";

const Styleheader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    position: absolute;
    @media(max-width:768px) {
        padding: 10px 10px;
    }
`

const StyleContainerNav = styled.nav`
    width: 50%;
    @media(max-width:768px){
        width: 100%;
        height: 100%;
    }
`

const StyleUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    @media(max-width:768px){
        width: 100%;
        height: 100%;
        background-color: blueviolet;
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        display: none;
        :active{
            display: flex;
        }
    }
`
   
const StyleLi = styled.li`
    font-size: 1.3rem;
`

const StyledA = styled.a`
    text-decoration: none;
`

const StyleMenuIcon = styled.i`
    display: none;
    @media(max-width:768px){
        z-index: 2;
        font-size: 3rem;
        display: block;
    }
`
export {Styleheader,StyleContainerNav,StyleUl,StyleLi,StyledA,StyleMenuIcon}


