const Navbar = () => {
  return (
    <nav className="relative flex items-center px-6 py-4">

      {/* Center nav */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 border border-slate-600 shadow-md px-6 py-2 rounded-lg bg-[#1d1d1d]">
        <a href="#" className="text-gray-300 hover:text-white transition">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Work
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          About
        </a>
      </div>

      {/* Right side */}
      <div className="ml-auto border border-slate-600 shadow-md px-6 py-2 rounded-lg bg-[#1d1d1d]">
        <a href="#" className="text-gray-300 hover:text-white transition">
          Contact
        </a>
      </div>

    </nav>
  );
};

export default Navbar;