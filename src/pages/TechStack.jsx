import SkillStash from "../components/ui/SkillStash";

const TechStack = () => {

    const myskills = ["react", "mongodb", "Node.js"]
    return (
        <div className="flex justify-center p-32 mb-9">
            <section>
                <h1 className="text-3xl">
                    Current  technologies</h1>
                <h1 className="text-xs my-2 text-gray-500 ">I am proficient in a range of  modern Technologes that empowers me building highly functuonal sollutions.These are some of my main Technologes.</h1>
               
               
                <div className="flex " >
                    <SkillStash Skills={myskills}
                        title="MySkills"  />
                </div>
            </section>
        </div>
    )
}

export default TechStack;