import {useState} from "react";
import {Mail, PhoneCall, MapPinned, CircleUser} from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("All fields are required");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            const res = await fetch('/api/mail/sendmail', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Message sent successfully");
                setFormData({name: "", email: "", message: ""});
            } else {
                setStatus("Failed to send message");
            }
        } catch (error) {
            setStatus("Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-form" className="flex flex-col lg:flex-row gap-16 my-20 mx-auto px-4 text-white max-w-6xl">
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
                            <p className="text-slate-200">+91 70187 54773</p>
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
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-4 border border-slate-800 p-6 rounded-2xl my-7 bg-slate-900/30 backdrop-blur">

                    <input type="text" placeholder="Enter your name"
                        value={
                            formData.name
                        }
                        onChange={
                            (e) => setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                        className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition"/>

                    <input type="email" placeholder="Enter your email"
                        value={
                            formData.email
                        }
                        onChange={
                            (e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }
                        className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition"/>

                    <textarea placeholder="Enter your message" rows="4"
                        value={
                            formData.message
                        }
                        onChange={
                            (e) => setFormData({
                                ...formData,
                                message: e.target.value
                            })
                        }
                        className="border border-slate-700 bg-transparent p-3 rounded-xl focus:outline-none focus:border-slate-500 transition resize-none"/>

                    <button type="submit"
                        disabled={loading}
                        className="mt-2 border border-slate-700 rounded-xl py-3 font-mono tracking-wide hover:bg-slate-800 transition disabled:opacity-50">
                        {
                        loading ? "Sending..." : "Submit"
                    } </button>

                    {
                    status && (
                        <p className="text-sm text-slate-400 mt-2">
                            {status}</p>
                    )
                } </form>
            </div>

        </section>
    );
};

export default ContactForm;
