import { FolderRoot, FileUser, Info } from "lucide-react";

const Sidebar = () => {

    return (
        <div className="max-w-1/28 flex flex-col  border-2 border-slate-500 bg-linear-to-r text-white from-slate-700 to-stone-900  rounded-2xl p-3  justify-center">
        
        <div className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><FolderRoot size={18} /></div>
        <div className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><FileUser size={18} /></div>
        <div className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><Info size={18} /></div>

        </div>
    )
}
export default Sidebar;