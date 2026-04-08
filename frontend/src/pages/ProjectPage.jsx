import ProjectpageStash from "../components/ui/ProjectpageStash.jsx";
import { Container } from "../components/ui/Container.jsx";
import { Projects } from "../data/Projects.jsx";
import {Link} from 'react-router-dom'
const ProjectPage = () => {
  return (
    <section className="bg-grid">
      <Container>
      \<Link to={'/'} className="text-white">{"<-"}</Link>
          <div className="flex items-center text-blue-600 justify-center mb-8">
            <h1>MyProjects</h1>
          </div>
          <div>
            <ProjectpageStash allProjects={Projects} />
          </div>
      </Container>
    </section>
  );
};
export default ProjectPage;
