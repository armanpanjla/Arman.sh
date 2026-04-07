import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

    
      <p className="text-xs tracking-widest text-gray-400 mb-4">
        BASED IN AMRITSAR, VERKA
      </p>

     
      <h1 className="text-4xl md:text-4xl font-bold leading-tight max-w-3xl">
        Where{" "}
        <span className="text-red-500">quality time</span>{" "}
        and{" "}
        <br />
        <span className="text-red-500">web development</span>{" "}
        come together.
      </h1>

     
      <p className="text-gray-400 mt-4 max-w-xl">
        Hi, I'm Arman. I create intuitive, visually stunning and highly functional web applications.
      </p>

    
      <div className="flex gap-4 mt-6">
        <button className="px-5 py-2 border border-gray-600 bg-slate-900 rounded-lg hover:bg-white hover:text-black transition">
          See my work
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-red-500 hover:bg-red-500/10 transition">
          <Download size={18} />
          Download CV
        </button>
      </div>

    </section>
  );
};

export default HeroSection;