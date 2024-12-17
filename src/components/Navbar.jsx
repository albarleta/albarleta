import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl font-semibold text-white/90 hover:text-white transition-colors"
            >
              <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX
                  className="block h-6 w-6 text-white/90"
                  aria-hidden="true"
                />
              ) : (
                <HiMenu
                  className="block h-6 w-6 text-white/90"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden text-center">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all w-full"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all w-full"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-all w-full"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
