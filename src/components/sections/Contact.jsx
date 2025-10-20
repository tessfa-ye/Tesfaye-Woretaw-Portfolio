import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // WHEN SUBMIT CLICKED TO PREVENT REFRESH
    emailjs
      .sendForm(
        import.meta.env.SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        e.target,
        import.meta.env.PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send the message, please try again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen  flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-5 max-w-2xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <h4 className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            I'm always interested in collaborating on innovative web and mobile
            projects, exploring new technologies, and bringing creative ideas to
            life. Feel free to reach out if you’d like to discuss an
            opportunity, share feedback, or just say hello!
          </h4>
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded text-white py-3 px-4 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded text-white py-3 px-4 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@mail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded text-white py-3 px-4 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Write your message here..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded text-white bg-blue-500 py-3 px-6 text-sm font-medium relative transition overflow-hidden hover:-translate-y-.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information Section */}
          <div className="mt-12 text-center text-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span>Addis Ababa, Ethiopia</span>
              </div>

              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <a
                  href="mailto:tessfayye@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  tessfayye@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <i className="fab fa-linkedin text-blue-400"></i>
                <a
                  href="https://www.linkedin.com/in/tesfaye-woretaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-2">
                <i className="fab fa-github text-blue-400"></i>
                <a
                  href="https://github.com/tessfa-ye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
