import styled from "styled-components";

const ContainerAllSkills = styled.div`
    margin-bottom: 170px;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    @media(max-width:768px){
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 42px;
        text-align: center;
    }
`

const SkillsUl = styled.ul`
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: space-around;
    @media(max-width:768px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

`

const LiSkill = styled.li`
    text-align: center;
    padding: 35px;
    background: #212121;
    border: 1px solid #333333;
    width: 150px;
    height: 150px;
    :hover{
        border-bottom: 5px solid #323D70;
    }
`

const Icon = styled.i`
    color: #a53b3b;
    font-size: 5rem;
`

export default function AllSkills(){
    return(
    
        <ContainerAllSkills>
            <Title>Minhas Skills</Title>
            <section>
                <SkillsUl>
                    <LiSkill>
                        <Icon className="bi bi-filetype-html"></Icon>
                    </LiSkill>
                    <LiSkill className="skills-info">
                        <Icon className="bi bi-filetype-css"></Icon>
                    </LiSkill>
                    <LiSkill className="skills-info">
                        <Icon className="bi bi-filetype-js"></Icon>
                    </LiSkill>
                    <LiSkill className="skills-info">
                        <Icon className="bi bi-git"></Icon>
                    </LiSkill>
                </SkillsUl>
            </section>
        </ContainerAllSkills>
    )
}