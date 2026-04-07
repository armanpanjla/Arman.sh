import {
    FolderRoot,
    FileUser,
    Info,
    PanelRightDashed,
    Sun,
    Moon
} from "lucide-react";
import {useState} from "react";

const Sidebar = () => {
    const [isActive, setIsActive] = useState()
    const [isDark, setIsDark] = useState(true)

    return (
        <div>
            <button className="fixed top-3"
                onClick={
                    () => setIsActive(!isActive)
            }><PanelRightDashed/></button>

            {
            isActive ? null : <nav className=" flex  flex-col justify-between   items-center fixed  border-2 w-fit border-slate-500 bg-transparent rounded-2xl ">
                <div>
                    <h1 className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><FolderRoot size={18}/></h1>
                    <h1 className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><FileUser size={18}/></h1>
                    <h1 className="  gap-2 items-center rounded-full flex hover:cursor-pointer transition-colors   py-1"><Info size={18}/></h1>
                </div>

                <div onClick={
                    () => {
                        setIsDark(!isDark)
                    }
                }>
                    {
                    isDark ? <Sun/>: <Moon/>
                } </div>

            </nav>
        } </div>
    )

}
export default Sidebar;
