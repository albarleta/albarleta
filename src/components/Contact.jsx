import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="container m-auto py-16 px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-8">
          Contact Me
        </h2>

        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/albarleta/" target="_blank">
            <FaLinkedin className="text-5xl text-purple-900" />
          </a>
          <a href="https://github.com/albarleta" target="_blank">
            <FaGithub className="text-5xl text-purple-900" />
          </a>
        </div>

        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 space-y-6 shadow-lg">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-700">
                Get in Touch
              </h2>
            </div>

            {status && (
              <div
                className={`text-center ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}
              >
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                  rows={4}
                  maxLength={120}
                ></textarea>
                <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {formData.message.length}/120
                </span>
              </div>

              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-3 font-bold rounded-br-3xl w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
