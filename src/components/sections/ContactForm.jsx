import {Mail, PhoneCall, MapPinned, CircleUser} from "lucide-react";

const ContactForm = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 my-20 mx-auto px-4 text-white max-w-6xl">


            <div className="flex-1">
                <div className="flex items-center gap-3 font-mono text-sm text-slate-500 mb-4 tracking-wide">
                    <CircleUser size={16}/>
                    <p>Contact</p>
                </div>

                <h1 className="text-4xl lg:text-5xl font-mono font-bold tracking-wider mb-6">
                    Get in touch
                </h1>

                <section className="flex flex-col gap-6 mt-8">

                    <div className="flex items-center gap-4 border border-slate-800 rounded-xl p-4">
                        <Mail size={18}/>
                        <div>
                            <h2 className="text-sm text-slate-400">Email</h2>
                            <p className="text-slate-200">armanpanjla@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border border-slate-800 rounded-xl p-4">
                        <PhoneCall size={18}/>
                        <div>
                            <h2 className="text-sm text-slate-400">Call me</h2>
                            <p className="text-slate-200">+91 70187-54773</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border border-slate-800 rounded-xl p-4">
                        <MapPinned size={18}/>
                        <div>
                            <h2 className="text-sm text-slate-400">Location</h2>
                            <p className="text-slate-200">Amritsar, Punjab</p>
                        </div>
                    </div>

                </section>
            </div>
            <div className="flex-1">
                <form className="flex flex-col gap-4 border border-slate-800 p-6 rounded-2xl my-7  bg-slate-900/30 backdrop-blur">

                    <input type="text" placeholder="Enter your name" className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition"/>

                    <input type="email" placeholder="Enter your email" className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition"/>

                    <textarea placeholder="Enter your message" rows="4" className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition resize-none"/>

                    <button type="submit" className="mt-2 border border-slate-700 rounded-xl py-3 font-mono tracking-wide hover:bg-slate-800 transition">
                        Submit
                    </button>

                </form>
            </div>

        </div>


    );
};

export default ContactForm;
