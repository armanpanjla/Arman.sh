const SkillStash = ({ Skills = [] , title = "MySkills" }) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className=" flex flex-wrap gap-3 ">
                {Skills.map((Skill)=>(
                    <div key={Skill} className="border bg-[#1d1d1d] rounded items-center text-center gap-3 p-2 ">{Skill}</div>
                ))}
            </div>
        </section>
    )
}
export default SkillStash;
