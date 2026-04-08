const ProjectskillStash = ({ Techstash }) => {
  if (!Techstash) return null;
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {Techstash.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-1.5 rounded-full bg-[#1d1233] border border-[#3b2466] text-[#b49cff] text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default ProjectskillStash;
