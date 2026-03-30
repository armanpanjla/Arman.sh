const SkillStash = ({ Skills }) => {
    return (
        <section>
            <div className="grid grid-cols-4 gap-8">
                {Skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 bg-[#1d1d1d] p-3 rounded-lg hover:scale-105 transition"
                    >
                        <img
                            className="w-8 h-8 rounded"
                            src={skill.logo}
                            alt={skill.name}
                        />

                        <div className="text-xs text-gray-300">
                            <p className="font-medium">{skill.name}</p>
                            <p className="text-gray-400">{skill.subhead}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillStash;