import AboutMe from './main-Componts/AboutMe';
import AboutMe2 from './main-Componts/AboutMe2';
import AllProject from './main-Componts/AllProject';
import AllServices from './main-Componts/AllServices';
import AllSkills from './main-Componts/AllSkills';
import WorkTitle from './main-Componts/WorkTitle';
import WorkTogether from './main-Componts/WorkTogether';

export default function Main() {
    return(
        <main>
            <AboutMe/>
            <AboutMe2/>
            <AllProject/>
            <AllServices/>
            <AllSkills/>
            <WorkTitle/>
            <WorkTogether/>
        </main>
    )
}