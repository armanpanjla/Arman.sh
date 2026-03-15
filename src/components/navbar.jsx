import { FolderRoot, FileUser, Info, MoveUpRight } from "lucide-react";
const Navbar = () => {

    return (
        <nav className="border  border-slate-500 rounded-full m-4 md:flex-row md:text-base outline-slate-600 outline-4 shadow-lg  items-center p-2 bg-linear-to-r text-white from-slate-700 to-stone-900 flex justify-between">
            <div className="mx-8 text-2xl font-medium tracking-wide">
                Arman<span>.sh</span>
            </div>

            <div className="flex gap-6 p-1 border-slate-500 bg-linear-to-r from-slate-900 to-slate-700  rounded-full border  cursor-pointer ">
                <div className=" hover:text-slate-600 gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors hover:bg-white px-4 py-1"><FolderRoot size={18} /> projects</div>
                <div className=" hover:text-slate-600 gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors hover:bg-white px-4 py-1"><FileUser size={18} /> Resume/cv</div>
                <div className=" hover:text-slate-600 gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors hover:bg-white px-4 py-1"><Info size={18} /> About</div>
            </div>

            <div className="">
                <div className=" border rounded-3xl transition-colors border-slate-500 p-2 flex  gap-2 items-center hover:cursor-pointer hover:bg-white hover:text-slate-500  mx-6"> Contact <MoveUpRight size={18} /></div>
            </div>
        </nav>
    )
}

export default Navbar; 