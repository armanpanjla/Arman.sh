const Techused = ({techlist}) => {
    if (!techlist) 
        return null;
    return (
        <div className="flex flex-col items-center gap-3 mt-4">
            {
            techlist.map((item, index) => (
                <div key={index}
                    className="w-fit min-w-24 border border-slate-500 hover:text-black text-center hover:bg-white font-mono px-4 py-2 rounded-lg text-xs text-slate-500 bg-[#111] transition-colors duration-200 cursor-default">
                    {item} </div>
            ))
        } </div>
    );
};

export default Techused;
