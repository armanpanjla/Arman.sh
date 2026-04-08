import {Link} from "react-router-dom";
import ProjectCard from "../ui/ProjectCard";
import {Projects} from "../../data/Projects";


const ProjectSection = () => {
    const featuredProjects = Projects.slice(0,3);
    return (
        <section id="project-section" >
            <div className="flex h-fit  font-bold text-center items-center p-3.5">
                <h1 className="flex  text-3xl">Selected Projects</h1>
                <Link to="/projects" className=" border  p-2 rounded border-slate-600  ml-auto   hover:scale-105 ">View Projects</Link>
            </div>

            <div className=" grid grid-cols-1 mx-auto max-w-full  items-center">
                <ProjectCard Projects={featuredProjects}/>
            </div>


        </section>
    )
}
export default ProjectSection;
