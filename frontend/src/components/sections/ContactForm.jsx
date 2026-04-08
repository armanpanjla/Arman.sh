import { useState } from "react";
import { Mail, PhoneCall, MapPinned } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("First Name, Last Name, Email, and Message are required");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/mail/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully");
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          message: "",
        });
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
    <section
      id="contact-form"
      className="w-full max-w-7xl mx-auto my-12 lg:my-24 px-4 md:px-8 text-white relative"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden opacity-90 filter blur-[80px]">
        <div className="w-full h-full bg-linear-to-br from-purple-900 via-purple-950 to-black relative">
          <div
            className="absolute inset-0 bg-repeat bg-center opacity-[0.03]"
            style={{ backgroundImage: "url('/noise.png')" }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl relative">
        <div className="flex-1 p-10 md:p-14 lg:p-18 flex flex-col justify-between">
          <div className="max-w-md">
            <span className="border border-white/20 text-white rounded-full px-5 py-2 text-xs md:text-sm w-fit mb-8 tracking-wide bg-black/40">
              Contact
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get In touch <br className="hidden md:block" /> with me!
            </h1>

            <p className="text-zinc-300 mb-12 md:mb-16 leading-relaxed text-base">
              Have questions or ideas? I would love to hear from you. Reach out
              anytime and let's connect.
            </p>
          </div>

          <button className="bg-purple-500 text-white font-semibold px-8 py-3 rounded-full w-fit hover:bg-purple-600 transition text-base">
            Contact Me
          </button>
        </div>

        <div className="flex-1 p-10 md:p-14 lg:p-18 bg-black/40">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-10 md:mb-12">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:gap-12"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full border-b border-zinc-700 bg-transparent text-white focus:border-purple-500 outline-none pb-2 transition placeholder-zinc-500 text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full border-b border-zinc-700 bg-transparent text-white focus:border-purple-500 outline-none pb-2 transition placeholder-zinc-500 text-base"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => 
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full border-b border-zinc-700 bg-transparent text-white focus:border-purple-500 outline-none pb-2 transition placeholder-zinc-500 text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-b border-zinc-700 bg-transparent text-white focus:border-purple-500 outline-none pb-2 transition placeholder-zinc-500 text-base"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border-b border-zinc-700 bg-transparent text-white focus:border-purple-500 outline-none pb-2 transition resize-none placeholder-zinc-500 text-base"
            />

            <div className="flex justify-start lg:justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-500 text-white font-semibold px-8 py-3 rounded-full w-fit lg:w-fit hover:bg-purple-600 transition disabled:opacity-50 text-base"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

            {status && <p className="text-sm text-purple-500 mt-2">{status}</p>}
          </form>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto my-16 p-4">
        <section className="flex flex-col md:flex-row gap-8 mt-8 border-t border-zinc-800 pt-10">
          <div className="flex-1 flex items-center gap-4 border border-zinc-800/40 rounded-xl p-6 bg-black/20 backdrop-blur-sm">
            <Mail className="w-6 h-6 text-purple-400" />
            <div>
              <h2 className="text-sm text-zinc-400">Email</h2>
              <p className="text-zinc-200 text-base">armanpanjla@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 border border-zinc-800/40 rounded-xl p-6 bg-black/20 backdrop-blur-sm">
            <PhoneCall className="w-6 h-6 text-purple-400" />
            <div>
              <h2 className="text-sm text-zinc-400">Call me</h2>
              <p className="text-zinc-200 text-base">+91 70187 54773</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 border border-zinc-800/40 rounded-xl p-6 bg-black/20 backdrop-blur-sm">
            <MapPinned className="w-6 h-6 text-purple-400" />
            <div>
              <h2 className="text-sm text-zinc-400">Location</h2>
              <p className="text-zinc-200 text-base">Amritsar, Punjab</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactForm;
