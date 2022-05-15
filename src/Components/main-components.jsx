import Banner from './banner/index';
import AboutMe from './aboutme/index';
import AllProject from './allProjects/index';
import AllServices from './allServices/AllServices';
import AllSkills from './allSkills/index';


export default function Main() {
    return(
        <main>
            <Banner/>
            <AboutMe/>
            <AllProject/>
            <AllServices/>
            <AllSkills/>
        </main>
    )
}