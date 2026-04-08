import Techused from "./Techused";

const ProjectCard = ({ Projects }) => {
  return (
    <div className="flex flex-col gap-24 my-20  mx-auto px-4">
      {Projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col lg:flex-row gap-10 lg:gap-14 border border-l-0 rounded-3xl p-8 border-[#b49cff]  group items-start"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 font-mono text-sm text-slate-500 mb-3 tracking-wide">
              <p>{project.creationmonth}</p>
              <span className="text-slate-700">*</span>
              <p>{project.completion}</p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-mono font-bold tracking-wider text-white mb-5 leading-tight">
              {project.name}{" "}
            </h2>

            <img
              className="w-full max-h-95 rounded-2xl border border-slate-800 object-cover shadow-lg mb-6 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-slate-600"
              src={project.img}
              alt={project.name}
              draggable="false"
            />

            <p className="font-sans tracking-wider text-sm text-slate-300 leading-relaxed max-w-2xl">
              {project.subhead}{" "}
            </p>
          </div>

          <div className=" min-w-50 border border-slate-800 my-auto rounded-2xl p-6">
            <h3 className="font-mono text-xs tracking-[0.2em] text-center text-slate-500 uppercase font-bold mb-4">
              Technologies
            </h3>

            <Techused techlist={project.techlist} />
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ProjectCard;
