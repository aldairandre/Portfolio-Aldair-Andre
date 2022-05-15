import AboutMe from './banner/index';
import AboutMe from './aboutme/index';
import AllProject from './allProjects/index';
import AllServices from './AllServices';
import AllSkills from './AllSkills';
import WorkTitle from './WorkTitle';
import WorkTogether from './WorkTogether';

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