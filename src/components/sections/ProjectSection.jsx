import {Link} from "react-router-dom";
import ProjectCard from "../ui/ProjectCard";
import {Projects} from "../../data/Projects";


const ProjectSection = () => {
    return (
        <section>
            <div className="flex h-fit  text-center items-center p-14 ">
                <h1 className="flex  text-3xl">Selected Projects</h1>
                <Link to="/projects" className=" border  p-2 rounded border-slate-600  ml-auto   hover:scale-105 ">View Projects</Link>
            </div>

            <div className=" grid grid-cols-1 mx-auto max-w-full  items-center">
                <ProjectCard Projects={Projects}/>
            </div>


        </section>
    )
}
export default ProjectSection;
