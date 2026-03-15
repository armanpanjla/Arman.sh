import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx';
import ContactForm from './pages/ContactForm.jsx';
import Homepage from './pages/HomePage.jsx';
import ProjectSection from './pages/Projects.jsx';
import TechStack from './pages/TechStack.jsx';

const app = () => {


  return (
    <div>
      <Navbar />
      <aside><Sidebar /></aside>

      <Homepage />
      <TechStack />
      <ProjectSection />

      <ContactForm />
    </div>
  )
}


export default app;