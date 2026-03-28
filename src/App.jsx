import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx';
import ContactForm from './pages/ContactForm.jsx';
import HeroSection from './pages/HeroSection.jsx';
import ProjectSection from './pages/Projects.jsx';
import TechStack from './pages/TechStack.jsx';

const app = () => {


    return (
        <div className='bg-grid text-white'>
            <Navbar/>
            <aside><Sidebar/></aside>
            <HeroSection/>
            <TechStack/>
            <ProjectSection/>
            <ContactForm/>
        </div>
    )
}


export default app;
