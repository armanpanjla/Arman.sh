import Navbar from './components/layout/navbar.jsx'
import Sidebar from './components/layout/sidebar.jsx';
import ContactForm from './pages/ContactForm.jsx';
import HeroSection from './pages/HeroSection.jsx';
import ProjectSection from './pages/Projects.jsx';
import TechStack from './pages/TechStack.jsx';

const app = () => {


    return (
        <div className='bg-grid text-white '>
            <Navbar/>
            <Sidebar/>
            <HeroSection/>
            <TechStack/>
            <ProjectSection/>
            <ContactForm/>
        </div>
    )
}


export default app;
