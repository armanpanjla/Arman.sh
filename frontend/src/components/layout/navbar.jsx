import { scrollHelper } from "../../utils/scrollHelpers";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between text-white items-center px-4 py-3 md:px-8 md:py-4 overflow-x-hidden">
      <div>
        <a
          href="/"
          className="font-mono text-base md:text-xl font-bold hover:text-[#8b75ff] transition-colors"
        >
          ~/
        </a>
      </div>
      <div className="font-mono flex gap-3 md:gap-6 text-xs sm:text-sm md:text-base">
        <button
          className="hover:text-[#8b75ff] transition-colors"
          onClick={() => scrollHelper("about-me")}
        >
          About
        </button>
        <button
          className="hover:text-[#8b75ff] transition-colors"
          onClick={() => scrollHelper("project-section")}
        >
          Projects
        </button>
        <a href="/resumeArman.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
        <button
          className="hover:text-[#8b75ff] transition-colors"
          onClick={() => scrollHelper("contact-form")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
