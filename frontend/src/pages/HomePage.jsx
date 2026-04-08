import Navbar from '../components/layout/navbar.jsx'
import {Container} from '../components/ui/Container.jsx';
import ContactForm from '../components/sections/ContactForm.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ProjectSection from '../components/sections/ProjectSection.jsx';
import TechStack from '../components/sections/TechStack.jsx';
import Aboutme from '../components/sections/AboutmeSection.jsx';

const Home = () => {
    return (<div className='bg-grid   border border-[#292c3d] sm:w-full  text-white '>
        <Container><Navbar/></Container>
        <Container><HeroSection/></Container>
        <Container><Aboutme/></Container>
        <Container><TechStack/></Container>
        <Container><ProjectSection/></Container>
        <ContactForm/>
</div>
)
}
export default Home;
