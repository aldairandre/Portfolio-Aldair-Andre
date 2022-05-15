import Banner from './banner/index';
import AboutMe from './aboutme/index';
import AllProject from './allProjects/index';
import AllServices from './allServices/index';
import AllSkills from './allSkills/index';
import WorkTogether from './workTogether/index';


export default function Main() {
    return(
        <main>
            <Banner/>
            <AboutMe/>
            <AllProject/>
            <AllServices/>
            <AllSkills/>
            <WorkTogether/>
        </main>
    )
}