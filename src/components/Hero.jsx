export default function Hero() {
  const scrollToSection = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-950 to-purple-800 h-[70vh] flex items-center pt-60 md:pt-28">
        <div className="container mx-auto grid md:grid-cols-2 gap-4 items-center px-4">
          <div className="text-center md:text-left max-w-lg mx-auto">
            <h1 className="text-white text-6xl md:text-8xl font-extrabold mb-2">
              Al Barleta
            </h1>
            <p className="text-gray-200 mb-8 text-3xl">
              I turn ideas into full-stack solutions.
            </p>
            <div className="flex justify-center gap-2 flex-col md:flex-row md:justify-start m-auto md:m-0 max-w-xs md:max-w-max mb-8">
              <button
                onClick={scrollToSection}
                className="border-2 border-white text-white px-6 py-3 rounded-tl-3xl font-bold"
              >
                About me
              </button>
              <a
                href="/AlBarleta_MERN_WebDeveloper.pdf"
                download="AlBarleta_MERN_WebDeveloper.pdf"
                className="bg-orange-400 text-white px-6 py-3 font-bold rounded-br-3xl"
              >
                Download my resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-center pb-10">
            <img
              src="/img/hero.png"
              alt="Hero"
              className="rounded-full w-32 h-32 md:w-72 md:h-72 object-cover md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-950 to-purple-800 h-32 rounded-br-full -mt-1"></div>
    </div>
  );
}
