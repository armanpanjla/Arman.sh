import {House, FolderDot, Info} from 'lucide-react';

const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }
    return (
        <nav className="flex justify-center items-center px-6 mt-3 ">
            <div className="flex gap-8 border border-slate-700 shadow-xl px-6 py-3 rounded-lg bg-[#1d1d1d]/80 backdrop-blur-md">
                <button onClick={
                        () => {
                            handleScroll('hero-section')
                        }
                    }
                    className="text-gray-400 hover:text-white transition-all hover:scale-110">
                    <House size={20}/>
                </button>
                <button onClick={
                        () => {
                            handleScroll('project-section')
                        }
                    }
                    className="text-gray-400 hover:text-white transition-all hover:scale-110">
                    <FolderDot size={20}/>
                </button>
                <button onClick={
                        () => {
                            handleScroll('about-me')
                        }
                    }
                    className="text-gray-400 hover:text-white transition-all hover:scale-110">
                    <Info size={20}/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
