import AboutMe from './aboutme/index';
import AboutMe2 from './AboutMe2';
import AllProject from './AllProject';
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