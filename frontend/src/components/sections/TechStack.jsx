import SkillStash from "../ui/SkillStash";
import {skills} from "../../data/skills";

const TechStack = () => {
    return (
        <section  id="tech-stack" className="flex justify-center p-32 mb-9">
            <div>
                <h1 className="text-3xl">
                    Current  technologies</h1>
                <h1 className="text-xs my-2 text-gray-500 mb-8">I am proficient in a range of  modern Technologes that empowers me building highly functuonal sollutions.These are some of my main Technologes.</h1>

                <SkillStash Skills={skills}
                    title="MySkills"/>
            </div>
        </section>
    )
}

export default TechStack;
