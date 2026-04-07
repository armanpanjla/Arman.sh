const SkillStash = ({ Skills }) => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-4  gap-8 sm:grid-cols-3  sm:gap-6 ">
                {Skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 bg-[#1d1d1d] p-3  rounded-lg hover:scale-105 transition"
                    >
                        <img
                            className="w-8 h-8 select-none rounded"
                            src={skill.logo}
                            alt={skill.name}
                            draggable="false"
                        />

                        <div className="text-xs text-gray-300">
                            <p className="font-medium">{skill.name}</p>
                            <p className="text-gray-400 lg:text-[11px]">{skill.subhead}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillStash;