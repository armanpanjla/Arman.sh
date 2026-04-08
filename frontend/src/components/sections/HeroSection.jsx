import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const Navigate = useNavigate();
  return (
    <section
      id="hero-section"
      className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6"
    >
      <p className="text-xs tracking-widest text-gray-400 mb-4">
        BASED IN AMRITSAR, VERKA
      </p>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight max-w-3xl">
        Where <span className="text-purple-400">quality time</span> and <br />
        <span className="text-purple-400">web development</span> come together.
      </h1>

      <p className="text-gray-400 mt-4 max-w-xl">
        Hi, I'm Arman. I create intuitive, visually stunning and highly
        functional web applications.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => Navigate("/projects")}
          className="px-5 py-2 border border-gray-600 bg-slate-900 rounded-lg hover:bg-white hover:text-black transition"
        >
          See my work
        </button>

        <a
          href="/resumeArman.pdf"
          download="resumeArman.pdf"
          className="flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-purple-400/10 transition"
        >
          <Download size={18} className=" text-purple-400" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
