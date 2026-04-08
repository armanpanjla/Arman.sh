import { LoaderCircle, MapPin, ChevronsLeftRight } from "lucide-react";
import myself from "../../assets/myself/myself.png";
import { scrollHelper } from "../../utils/scrollHelpers";

const Aboutme = () => {
  return (
    <section id="about-me" className="py-20  text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-22 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-sm mb-6 tracking-[0.3em] text-slate-500 font-semibold">
            ABOUT ME
          </h2>

          <h1 className="tracking-tighter text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-purple-500">Arman</span>
            <br />
            <span className="text-purple-500">Panjla</span>
          </h1>

          <div className="mt-10 font-mono space-y-4">
            <div className="flex gap-4 items-center text-sm text-slate-500 font-medium tracking-wide">
              <MapPin size={20} className="text-purple-500" />
              <span>BASED IN AMRITSAR, VERKA</span>
            </div>
            <div className="flex gap-4 items-center text-sm text-slate-500 font-medium tracking-wide">
              <LoaderCircle
                size={20}
                className="text-purple-500 animate-spin-slow"
              />
              <span>21 Years Old</span>
            </div>
            <div className="flex gap-4 items-center text-sm text-slate-500 font-medium tracking-wide">
              <ChevronsLeftRight size={20} className="text-purple-500" />
              <span>Full Stack Developer</span>
            </div>
          </div>

          <p className="mt-8 max-w-xl  leading-relaxed text-sm tracking-wider text-slate-300">
            Hey, I'm Arman. I'm a full-stack developer, Linux enthusiast, and
            final-year CSE student. I specialize in{" "}
            <span className="text-white font-medium">
              React, Node.js, and MongoDB
            </span>
            , building tools that are fast, intuitive, and architected to scale.
            From real time WebRTC apps to daily tracker platforms, I love taking
            ideas from a blank database schema all the way to deployment. I
            thrive in a terminal, live by clean documentation, and am always
            looking for the next technical challenge.
          </p>

          <div className="flex gap-4 mt-10">
            <button onClick={()=>scrollHelper('contact-form')} className="bg-purple-500 hover:bg-purple-600 transition-colors duration-300 rounded-lg px-6 py-3 text-black font-bold shadow-lg shadow-purple-500/20">
              Get In Touch
            </button>
            <button onClick={()=>scrollHelper('project-section')} className="border border-slate-500 hover:bg-white hover:text-black transition-all duration-300 rounded-lg px-6 py-3 bg-transparent text-white font-medium">
              View Projects
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={myself}
              alt="Arman Panjla"
              className="relative w-full max-w-md rounded-lg grayscale hover:grayscale-0 transition-all duration-500 object-cover border border-slate-800"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
