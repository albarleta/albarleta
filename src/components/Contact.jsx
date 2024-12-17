import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

// import { MapPin, MessageCircle, Phone } from "lucide-react";

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
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 max-w-md mx-auto lg:pr-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg">
                <IoMdMail className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Email me
                </h3>
                <p className="text-gray-600 mb-2">
                  I’m always open to collaboration or questions.
                </p>
                <a
                  href="mailto:al.barleta@protonmail.com"
                  className="text-purple-800 hover:underline"
                >
                  al.barleta@protonmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg">
                <IoMdPin className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Meet me
                </h3>
                <p className="text-gray-600 mb-2">Let’s connect in person.</p>
                <p className="text-purple-800">Manila, Philippines</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg">
                <FaPhone className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Call me
                </h3>
                <p className="text-gray-600 mb-2">
                  Available Mon-Fri, 8am–10pm (Philippine Time, GMT+8). That’s
                  7pm–9am EST.
                </p>
                <a
                  href="tel:+639164890881"
                  className="text-purple-800 hover:underline"
                >
                  +63 916 489-0881
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/albarleta/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <FaLinkedin className="text-4xl text-purple-700" />
              </a>
              <a
                href="https://github.com/albarleta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <FaGithub className="text-4xl text-purple-700" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-6 space-y-6 shadow-lg">
              <div className="space-y-1 text-center">
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
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-700"
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
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-700"
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
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-700"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-700 resize-none"
                    rows={4}
                    maxLength={120}
                  ></textarea>
                  <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {formData.message.length}/120
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-orange-400 text-white px-6 py-3 font-bold rounded-br-3xl w-full hover:bg-orange-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
