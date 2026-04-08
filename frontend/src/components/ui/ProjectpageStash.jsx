import { ExternalLink } from "lucide-react";
import ProjectskillStash from './ProjectskillStash.jsx'

const ProjectpageStash = ({ allProjects }) => {
  return (
    <div className="w-full flex flex-col gap-20 py-10">
      {allProjects?.map((stash, index) => (
        <div
          key={stash._id || index}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full"
        >
          <div className="w-full lg:w-[45%] flex flex-col">
            <span className="text-[#8b75ff] font-semibold mb-3 text-sm tracking-wide">
              {stash.type || "Web App"}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {stash.name}
            </h2>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
              {stash.subhead}
            </p>

            <ProjectskillStash Techstash={stash.techlist} />
            <a
              href={stash.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors w-fit text-sm font-medium"
            >
              GitHub <ExternalLink size={16} />
            </a>
          </div>

          <div className="w-full lg:w-[55%]">
            <img
              src={stash.img}
              alt={stash.name}
              draggable="false"
              className="w-full aspect-video md:aspect-16/10 object-cover object-top rounded-xl border border-zinc-800 shadow-2xl hover:border-zinc-600 transition-colors duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectpageStash;
